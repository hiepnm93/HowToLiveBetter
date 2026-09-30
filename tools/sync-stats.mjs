// Đối chiếu số liệu thống kê: sửa xong các mục thì chạy một lần. Làm bốn việc theo thứ tự:
// ① Tính lại số liệu toàn sách, ghi ngược về README.md, index.html, tools/og.html;
// ② Gọi check-refs.mjs tính lại docs/bang-doi-chieu-nguon.md;
// ③ Gọi check-plain.mjs soát dòng Hiểu nhanh, không đạt thì chỉ nhắc không dừng;
// ④ Dùng Chrome không giao diện chụp lại tools/og.html thành og.png.
//
//   node tools/sync-stats.mjs                   # làm tất cả
//   node tools/sync-stats.mjs --no-screenshot   # không chụp ảnh
//   node tools/sync-stats.mjs --check           # chỉ so ① không ghi, có số cũ thì thoát mã 1 (CI dùng)
//
// Chrome được tìm theo những vị trí cài phổ biến, cài chỗ khác thì đặt biến môi trường CHROME trỏ tới file chạy.
// og.html dùng font hệ thống, Linux không có sẽ thay bằng font khác, ảnh chụp sẽ khác trên Windows;
// CI chỉ chạy --check không chụp ảnh, cũng vì lý do đó.
//
// 2026-09-29 chuyển từ sync-stats.ps1 sang, ps1 đã xóa: nó chỉ chạy trên Windows,
// các PR ngoài ghép thẳng vào web hoàn toàn không qua nó, số liệu cũ cũng chẳng có kiểm tra nào đỏ lên.
// ① Chỉ thay chính con số, không động bất kỳ chữ nào khác.
// Quy tắc đếm: số mục = số tiêu đề ### trong book/*.md; số chương = số file book/*.md;
// A/B/C = chữ cái đầu ở dòng mức bằng chứng (mục có (tranh cãi) đằng sau vẫn tính); tranh cãi = số mục có ghi chú
// bắt đầu bằng "Tranh cãi"; TODO = số dòng trong bài chứa "chờ kiểm chứng", "cần kiểm chứng" hoặc "TODO";
// liên kết = tổng số http(s) trong các dòng "- Nguồn:" và "- Ghi chú:";
// ba bậc hiệu quả chi phí chép theo quy tắc của index.html.
// Tách dòng dùng /\r?\n/, lý do xem phần đầu file check-refs.mjs.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const read = f => readFileSync(join(ROOT, f), 'utf8');

// Quy tắc ba bậc trùng với hai dòng COST_W và e.ratio của index.html; hai dòng đó đổi thì chỗ này phải đổi theo, nên so trước một lượt
const indexText = read('index.html');
const COST_W_LINE = "const COST_W = { money:{'0':0,'it':1,'nhieu':2}, time:{'it':0,'trung':1,'nhieu':2}, will:{'khong':0,'chut':1,'co':2} };";
const RATIO_LINE = "e.ratio = e.level === 'lon' ? (e.cs === 0 ? 'Rất cao' : (e.cs <= 2 ? 'Cao' : 'Trung bình'))";
if (!indexText.includes(COST_W_LINE)) throw new Error('Dòng COST_W của index.html đã đổi, hãy đồng bộ trọng số chi phí trong script này');
if (!indexText.includes(RATIO_LINE)) throw new Error('Dòng e.ratio của index.html đã đổi, hãy đồng bộ quy tắc ba bậc trong script này');

const W = {
  tien: { '0': 0, 'it': 1, 'nhieu': 2 },
  'thoi-gian': { 'it': 0, 'trung': 1, 'nhieu': 2 },
  'y-luc': { 'khong': 0, 'chut': 1, 'co': 2 },
};

function ratioOf(cost, level) {
  if (level === 'lon') return cost === 0 ? 'Rất cao' : cost <= 2 ? 'Cao' : 'Trung bình';
  return level === 'trung' && cost === 0 ? 'Cao' : 'Trung bình';
}

const bookFiles = readdirSync(join(ROOT, 'book')).filter(f => f.endsWith('.md')).sort();
const sections = bookFiles.length;
let entries = 0, dispute = 0, todo = 0, links = 0;
const grade = { A: 0, B: 0, C: 0 };
const ratio = { 'Rất cao': 0, 'Cao': 0, 'Trung bình': 0 };

for (const f of bookFiles) {
  for (const line of read(join('book', f)).split(/\r?\n/)) {
    if (line.startsWith('### ')) entries++;
    const g = line.match(/^- Mức bằng chứng: ([ABC])/);
    if (g) grade[g[1]]++;
    if (line.startsWith('- Ghi chú: Tranh cãi')) dispute++;
    if (/chờ kiểm chứng|cần kiểm chứng|TODO/.test(line)) todo++;
    if (/^- (Nguồn|Ghi chú):/.test(line)) links += (line.match(/https?:\/\//g) ?? []).length;
    const t = line.match(/<!--\s*Nhan chi phi:\s*tien=(\S+)\s+thoi-gian=(\S+)\s+y-luc=(\S+)\s+loi-ich=(\S+)\s+kieu=/);
    if (t) ratio[ratioOf(W.tien[t[1]] + W['thoi-gian'][t[2]] + W['y-luc'][t[3]], t[4])]++;
  }
}

const tagged = ratio['Rất cao'] + ratio['Cao'] + ratio['Trung bình'];
if (tagged !== entries) console.warn(`Cảnh báo: có ${entries - tagged} mục thiếu nhãn chi phí, ba bậc hiệu quả chi phí không khớp số mục`);
if (grade.A + grade.B + grade.C !== entries) console.warn('Cảnh báo: số dòng mức bằng chứng không khớp số mục, kiểm tra xem có mục nào quên ghi mức bằng chứng');

// Phần trăm ba bậc chia theo phương số dư lớn nhất: lấy nguyên trước, số điểm phần trăm còn lại bù theo phần thập phân từ lớn đến nhỏ.
// Ba số làm tròn riêng lẻ sẽ gộp thành 99 hoặc 101 (2026-09-21 thêm chương 33 từng gặp), chỗ này bảo đảm tổng đúng bằng 100.
const ORDER = ['Rất cao', 'Cao', 'Trung bình'];
const pct = {}, rem = {};
for (const k of ORDER) {
  const exact = ratio[k] * 100 / entries;
  pct[k] = Math.floor(exact);
  rem[k] = exact - pct[k];
}
const short = 100 - ORDER.reduce((s, k) => s + pct[k], 0);
for (const k of [...ORDER].sort((a, b) => rem[b] - rem[a]).slice(0, Math.max(short, 0))) pct[k]++;

console.log(`Mục ${entries} ｜ chương ${sections} ｜ A ${grade.A} B ${grade.B} C ${grade.C} ｜ tranh cãi ${dispute} ｜ TODO ${todo} ｜ liên kết ${links}`);
console.log(`Hiệu quả chi phí Rất cao ${ratio['Rất cao']} (${pct['Rất cao']}%) Cao ${ratio['Cao']} (${pct['Cao']}%) Trung bình ${ratio['Trung bình']} (${pct['Trung bình']}%)`);
console.log('');

const EDITS = [
  ['README.md', 'số mục ở màn đầu', /(\d+) đề xuất/g, `${entries} đề xuất`],
  ['README.md', 'badge số mục', /M%E1%BB%A5c-(\d+)%20m%E1%BB%A5c/g, `M%E1%BB%A5c-${entries}%20m%E1%BB%A5c`],
  ['README.md', 'badge mức bằng chứng', /A%20(\d+)%20%C2%B7%20B%20\d+%20%C2%B7%20C%20\d+/g, `A%20${grade.A}%20%C2%B7%20B%20${grade.B}%20%C2%B7%20C%20${grade.C}`],
  ['README.md', 'badge liên kết tài liệu gốc', /-(\d+)%20li%C3%AAn%20k%E1%BA%BFt/g, `-${links}%20li%C3%AAn%20k%E1%BA%BFt`],
  ['README.md', 'số mục mức A ở phần đọc như thế nào', /chỉ giữ lại (\d+) mục/g, `chỉ giữ lại ${grade.A} mục`],
  ['README.md', 'số mục rất cao ở phần đọc như thế nào', /được (\d+) mục/g, `được ${ratio['Rất cao']} mục`],
  ['README.md', 'đoạn mức bằng chứng', /Toàn bộ (\d+) mục trong sách có (\d+) mục mức A, \d+ mục mức B, \d+ mục mức C, ngoài ra có (\d+) mục ghi chú tranh cãi và (\d+) chỗ ghi TODO chờ kiểm chứng\./g,
    `Toàn bộ ${entries} mục trong sách có ${grade.A} mục mức A, ${grade.B} mục mức B, ${grade.C} mục mức C, ngoài ra có ${dispute} mục ghi chú tranh cãi và ${todo} chỗ ghi TODO chờ kiểm chứng.`],
  ['README.md', 'đoạn hiệu quả chi phí', /Toàn bộ (\d+) mục có (\d+) mục hiệu quả chi phí rất cao \((\d+)%\), (\d+) mục cao \((\d+)%\), (\d+) mục trung bình \((\d+)%\)/g,
    `Toàn bộ ${entries} mục có ${ratio['Rất cao']} mục hiệu quả chi phí rất cao (${pct['Rất cao']}%), ${ratio['Cao']} mục cao (${pct['Cao']}%), ${ratio['Trung bình']} mục trung bình (${pct['Trung bình']}%)`],
  ['README.md', 'số file nội dung chính', /Nội dung chia thành (\d+) file theo từng chương/g, `Nội dung chia thành ${sections} file theo từng chương`],
  ['index.html', 'số mục trong phần mô tả', /(\d+) đề xuất/g, `${entries} đề xuất`],
  ['index.html', 'numberOfPages', /numberOfPages":(\d+)/g, `numberOfPages":${entries}`],
  ['index.html', 'số mục ở phần đầu trang', /\d+ chương (\d+) mục/g, `${sections} chương ${entries} mục`],
  ['index.html', 'số file ở phần chân trang', /(\d+) file trong/g, `${sections} file trong`],
  ['tools/og.html', 'og số mục', /<b>(\d+)<\/b> đề xuất/g, `<b>${entries}</b> đề xuất`],
  ['tools/og.html', 'og số mục mức A', /Bằng chứng mức A <b>(\d+)<\/b> mục/g, `Bằng chứng mức A <b>${grade.A}</b> mục`],
  ['tools/og.html', 'og số liên kết', /<b>(\d+)<\/b> liên kết tài liệu gốc/g, `<b>${links}</b> liên kết tài liệu gốc`],
];

const texts = new Map();
const stale = [];
for (const [file, label, pattern, repl] of EDITS) {
  const text = texts.get(file) ?? read(file);
  const found = [...text.matchAll(pattern)];
  if (found.length === 0) throw new Error(`Không tìm thấy "${label}" trong ${file}, mẫu: ${pattern}`);
  const old = found[0][1];
  // Dùng hàm làm giá trị thay, kẻo ký tự $ trong chuỗi thay bị coi là tham chiếu nhóm bắt
  const updated = text.replace(pattern, () => repl);
  texts.set(file, updated);
  if (updated === text) {
    console.log(`  ${file} ${label}: ${old} (không đổi)`);
    continue;
  }
  stale.push(`${file} ${label}`);
  console.log(`  ${file} ${label}: ${old} -> ${CHECK ? 'đã cũ' : `đã cập nhật (${found.length} chỗ)`}`);
}

if (CHECK) {
  if (stale.length === 0) {
    console.log('\nKiểm tra số liệu thống kê đạt');
    process.exit(0);
  }
  console.log(`\nCó ${stale.length} chỗ số liệu thống kê đã cũ. Chạy node tools/sync-stats.mjs trên máy (kèm xuất lại og.png), rồi commit.`);
  process.exit(1);
}

for (const [file, text] of texts) if (text !== read(file)) writeFileSync(join(ROOT, file), text);

// ② Tính lại bảng đối chiếu trích dẫn: chèn hoặc xóa mục sẽ khiến những "mục X" phía sau lệch hàng loạt, mà số mục
// lệch thường vẫn nằm trong khoảng hợp lệ (2026-09-19 chương 7 có đúng 6 chỗ thế), chỉ có trải "trích dẫn → tiêu đề đích"
// ra đưa vào kho thì diff mới nhìn thấy. Đặt trước bước chụp ảnh, --no-screenshot cũng phải chạy qua
const runTool = name => spawnSync(process.execPath, [join(ROOT, 'tools', name)], { stdio: 'inherit' }).status;
console.log('');
if (runTool('check-refs.mjs') !== 0) throw new Error('check-refs.mjs thất bại');
console.log('Trước khi commit liếc qua diff của docs/bang-doi-chieu-nguon.md: chỗ nào số mục không đổi mà "mục được trỏ tới" đổi, đó là trích dẫn bị dồn lệch.');

// ③ Kiểm tra Hiểu nhanh chỉ nhắc không dừng: số đã đồng bộ xong, kẹt ở đây ngược lại khiến người ta tưởng thống kê
// chưa cập nhật. Trong CI nó sẽ đỏ
console.log('');
if (runTool('check-plain.mjs') !== 0) console.log('Dòng Hiểu nhanh kể trên không đạt, sửa trước khi commit (quy tắc xem phần đầu file tools/check-plain.mjs).');

if (process.argv.includes('--no-screenshot')) process.exit(0);

// ④ Chụp og.png
const CHROME_PATHS = [
  process.env.CHROME,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];
const chrome = CHROME_PATHS.find(p => p && existsSync(p));
if (!chrome) throw new Error('Không tìm thấy Chrome, hãy đặt biến môi trường CHROME trỏ tới nó, hoặc thêm --no-screenshot để bỏ qua chụp ảnh');

// Mỗi lần dùng user-data-dir hoàn toàn mới: nếu không Chrome sẽ lấy og.html cũ trong cache để dựng, chụp ra vẫn là số cũ.
// --screenshot phải truyền đường dẫn tuyệt đối: truyền đường dẫn tương đối thì Chrome không ghi gì mà vẫn trả về 0
const profile = mkdtempSync(join(tmpdir(), 'og-shot-'));
const target = join(ROOT, 'og.png');
const startedAt = Date.now();
// Chrome ghi mấy dòng kiểu "xxx bytes written" vào stderr, không phải báo lỗi, bỏ thẳng
spawnSync(chrome, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--user-data-dir=${profile}`, `--screenshot=${target}`,
  pathToFileURL(join(ROOT, 'tools', 'og.html')).href,
], { stdio: 'ignore' });
rmSync(profile, { recursive: true, force: true });

// Tự kiểm: file được ghi trong lần chạy này, kích thước trong khoảng bình thường. Qua được hai cửa này thì không cần
// mở ảnh ra xem nữa, tiết kiệm một lần đọc ảnh
const png = statSync(target);
if (png.mtimeMs < startedAt - 1000) throw new Error('og.png không được ghi trong lần chạy này, chụp ảnh thất bại');
if (png.size < 120 * 1024 || png.size > 400 * 1024) throw new Error(`Kích thước og.png bất thường (${png.size} byte), bình thường trong khoảng 120 KB đến 400 KB, mở ra xem thử dựng có hỏng không`);
console.log(`\nĐã xuất lại og.png: ${png.size} byte, tự kiểm đạt. Chỉ khi sửa bố cục của tools/og.html mới cần mở ảnh ra xác nhận.`);
