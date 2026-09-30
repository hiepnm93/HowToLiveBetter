// Kiểm tra dòng "Hiểu nhanh": đây là đoạn nổi bật nhất trên thẻ mục ở trang tra cứu, phần lớn người đọc chỉ đọc nó.
// 2026-09-28 issue #42 phàn nàn văn phong đậm mùi AI, dẫn ví dụ ở mục 33 chương 1: một dòng mà viết cả số bệnh viện,
// số ca bệnh, cách chia nhóm, còn dùng những cách nói phải để người đọc tự dịch lại như "đầu bên kia", "đầu ra",
// "cái kết sạch sẽ". Đó đều là lối viết CLAUDE.md cấm từ sớm, chỉ vì không có máy kiểm tra nên viết viết lại lại thấm vào.
//
//   node tools/check-plain.mjs          # liệt kê mọi dòng Hiểu nhanh không đạt, có thì thoát mã 1 (CI dùng)
//   node tools/check-plain.mjs --stat     # chỉ đếm theo từng quy tắc
//   node tools/check-plain.mjs --numbers  # kiểm tra thêm mục ③, dùng khi soát thủ công
//
// Mặc định kiểm tra ①②④, mục ③ phải thêm --numbers mới kiểm tra. Nó báo nhầm quá nhiều nên không đưa vào CI:
// số đường dây nóng (120, 12356), các khoản tiền nêu làm ví dụ trong mục luật và tiền bạc ("vay 1.000 yên")
// đều bị coi là số mới, mà đó là cách viết hợp lệ.
// Kiểm tra bốn thứ:
// ① Độ dài: không quá 400 ký tự (không tính khoảng trắng). Bản gốc tiếng Trung chặn ở 120 chữ; tiếng Việt
//    dài gấp khoảng ba lần nên nâng mốc tương đương lên 400, giữ đúng tinh thần "một câu gọn đọc lướt là hiểu".
// ② Ngành ngữ nghiên cứu: viết tắt thống kê, thiết kế nghiên cứu, cỡ mẫu. Người đọc quan tâm hướng và độ lớn
//    của kết quả, không quan tâm ai làm, làm trên bao nhiêu người.
// ③ Số mới: mỗi chữ số trong dòng Hiểu nhanh phải từng xuất hiện ở tiêu đề, cột Chi phí hoặc cột Lợi ích của
//    chính mục đó. Hiểu nhanh chỉ dịch cột Lợi ích, không được thêm số mới. Cách nói "khoảng bốn phần mười",
//    "một phần tư" bằng chữ không kiểm tra.
// ④ Cách nói trừu tượng: hình ảnh và câu khẩu ngữ bắt người đọc tự dịch một lượt, danh sách xem VAGUE. Chỉ nhận
//    những từ từng thực sự gây vấn đề, thà bỏ sót còn hơn báo nhầm, báo nhầm nhiều thì chẳng ai còn đọc.
// Tách dòng dùng /\r?\n/, lý do xem phần đầu file check-refs.mjs.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STAT = process.argv.includes('--stat');
const NUMBERS = process.argv.includes('--numbers');
const MAX = 400;

const JARGON = [
  [/\b(HR|RR|OR|CI|RCT)\b/, 'viết tắt thống kê'],
  [/đoàn hệ|phân tích gộp|tổng quan|chia ngẫu nhiên|nhóm đối chứng|nhóm giả dược|mù đôi|cỡ mẫu/, 'thiết kế nghiên cứu'],
  [/\d[\d,.]*\s*(người|bệnh nhân|người tham gia|bệnh viện|nghiên cứu|quốc gia)/, 'cỡ mẫu'],
  [/nhóm đó|hai nhóm|từng nhóm|các nhóm|mỗi nhóm/, 'chia nhóm'],
];
const VAGUE = ['đầu bên kia', 'đầu ra', 'cái kết sạch sẽ', 'con đường này không', 'suy cho cùng', 'về bản chất', 'nói cách khác'];

// So số theo giá trị, không so theo cách viết: "20.000" và "38,227" là dấu ngăn cách hàng nghìn, còn "4.74" và
// "0.88" là dấu thập phân — cùng một số thì tính là một.
function numbers(s) {
  s = s.replace(/(\d)[.,](\d{3})(?!\d)/g, '$1$2');
  return [...s.matchAll(/\d+(?:\.\d+)?/g)].map(m => Number(m[0]));
}
// Số n trong Hiểu nhanh có phải dịch từ số p ở cột Lợi ích hay không: làm tròn (45.6 → 46, 5801 → 5800),
// hoặc nguy cơ đổi thành độ giảm (0.72 → thấp hơn 28%, 0.53 → thấp hơn 47%). Chênh trong 5% đều tính là có.
function derived(n, p) {
  const near = (a, b) => a === b || Math.abs(a - b) <= 0.05 * Math.max(Math.abs(a), Math.abs(b));
  return near(n, p) || near(n / 100, p) || (p < 1 && near(n / 100, 1 - p)) || (p > 1 && p < 100 && near(n, 100 - p));
}

const bad = [];
const count = { 'độ dài': 0, 'ngành ngữ': 0, 'số mới': 0, 'nói trừu tượng': 0 };
let total = 0;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
for (const f of files) {
  const sec = Number(f.slice(0, 2));
  const lines = readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/);
  let no = 0, title = '', fields = {};
  const flush = () => {
    const plain = fields['Hiểu nhanh'];
    if (!no || plain == null) return;
    total++;
    const where = `chương ${sec} mục ${no}`;
    const problems = [];
    const len = [...plain.replace(/\s/g, '')].length;
    if (len > MAX) { problems.push(`${len} ký tự, vượt quá ${MAX}`); count['độ dài']++; }
    const jar = JARGON.filter(([re]) => re.test(plain)).map(([re, name]) => `${name} "${plain.match(re)[0]}"`);
    if (jar.length) { problems.push(...jar); count['ngành ngữ']++; }
    if (NUMBERS) {
      const pool = numbers([title, fields['Chi phí'] ?? '', fields['Lợi ích'] ?? ''].join(' '));
      const fresh = [...new Set(numbers(plain))].filter(n => !pool.some(p => derived(n, p)));
      if (fresh.length) { problems.push(`số không có ở cột Lợi ích ${fresh.join(', ')}`); count['số mới']++; }
    }
    const vague = VAGUE.filter(w => plain.includes(w));
    if (vague.length) { problems.push(`cách nói trừu tượng "${vague.join('", "')}"`); count['nói trừu tượng']++; }
    if (problems.length) bad.push(`${f}  ${where}: ${problems.join('; ')}`);
  };
  for (const line of lines) {
    const h = line.match(/^### (\d+)\. (.*)$/);
    if (h) { flush(); no = Number(h[1]); title = h[2]; fields = {}; continue; }
    const m = line.match(/^- (Hiểu nhanh|Chi phí|Lợi ích):\s*(.*)$/);
    if (m && no) fields[m[1]] = m[2];
  }
  flush();
}

if (!STAT) for (const b of bad) console.log(b);
console.log(`\nTổng cộng ${total} dòng Hiểu nhanh, ${bad.length} dòng không đạt: ` +
  Object.entries(count).map(([k, v]) => `${k} ${v}`).join(', '));
if (bad.length && !STAT) process.exit(1);
