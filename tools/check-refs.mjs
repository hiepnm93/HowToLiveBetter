// Bảng đối chiếu trích dẫn chéo: phân tích mỗi chỗ "mục X" trong phần nội dung chính thực sự trỏ tới tiêu đề mục nào,
// ghi vào docs/bang-doi-chieu-nguon.md. File đó được đưa vào kho, nên khi chèn hoặc xóa mục làm trích dẫn đổi hướng,
// git diff sẽ bày ra ngay — số mục không đổi mà tiêu đề đổi thì đó là lệch.
//
//   node tools/check-refs.mjs            # sinh lại bảng đối chiếu (sync-stats.mjs tự gọi)
//   node tools/check-refs.mjs --check    # chỉ kiểm tra không ghi file, có trích dẫn hỏng thì thoát mã 1 (CI dùng)
//   node tools/check-refs.mjs --suspect  # liệt kê thêm chỗ văn cảnh không khớp tiêu đề đích, báo nhầm nhiều, dùng khi soát tồn đọng cũ
//
// Vì sao cần nó: số mục phụ thuộc vị trí, trích dẫn trong bài chỉ ghi vị trí chứ không ghi nội dung. 2026-09-19
// phát hiện ở chương 7 có 6 chỗ chỉ sai (cứu trợ y tế chỉ sang trợ cấp khó khăn, trạm cứu trợ chỉ sai mục), tất cả
// đều nằm trong khoảng số mục hợp lệ, kiểm tra vượt biên không bắt được cái nào.
// Chú ý: tách dòng nhất định dùng /\r?\n/, không được dùng '\n'. Cuối dòng các file trong book/ không thống nhất
// (có CRLF có LF), mà dấu . trong regex JS không khớp \r (CR cũng tính là ký tự kết thúc dòng, điểm này khác
// Python và Perl), để nguyên \r thì /^### (\d+)\. (.*)$/ không khớp mục nào trong file CRLF.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

// Trích dẫn "trần" trong mục ("xem mục 8") chỉ quét ở mấy cột này: "mục N" ở cột Nguồn hầu hết là số mục
// của điều luật, quét vào toàn là báo nhầm.
const FIELDS = /^- (Hiểu nhanh|Lợi ích|Ghi chú|Chi phí):/;
// Nhưng trích dẫn kèm số chương ("xem chương 11 mục 16") không lẫn với điều luật được, cột Nguồn cũng có,
// nên quét luôn cả. Chỗ "ghi log xem chương 11 mục 16" ở mục 103 chương 26 nằm ngay ở cột Nguồn, suýt bị bỏ sót.
const CROSS_FIELDS = /^- (Hiểu nhanh|Lợi ích|Ghi chú|Chi phí|Nguồn):/;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
// Các bài dài trong docs/ cũng quét. Chúng giống lời dẫn đầu chương, lâu nay nằm ngoài phạm vi quét: khi số mục
// bị dồn lệch, --check vẫn báo đạt bình thường, diff của bảng đối chiếu cũng không thấy các trích dẫn này.
// 2026-09-21 kiểm kê thấy ba bài dài có 23 chỗ "chương X mục Y", không chỗ nào từng được kiểm tra.
// Chỉ lấy .md ở gốc docs/. Thư mục con docs/ho-so-xac-minh/ không quét: những file đó ghi lại quá trình kiểm
// chứng lúc bấy giờ, số mục trong đó là trạng thái lịch sử, không nên đi theo phần nội dung chính. Bản đối chiếu
// tự nó cũng loại ra.
const docs = readdirSync(resolve(ROOT, 'docs')).filter(f => f.endsWith('.md') && f !== 'bang-doi-chieu-nguon.md').sort();

// Đọc trước tiêu đề các mục của mỗi chương: sections[số chương] = { file, titles: { số mục: tiêu đề } }
const sections = new Map();
for (const f of files) {
  const num = Number(f.slice(0, 2));
  const titles = new Map();
  for (const line of readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/)) {
    const m = /^### (\d+)\. (.*)$/.exec(line);
    if (m) titles.set(Number(m[1]), m[2].trim());
  }
  sections.set(num, { file: f, titles });
}

// Một chỗ trích dẫn có thể viết "mục 3, 10, 11", tách thành nhiều số mục. Cũng nhận cách viết khoảng
// "mục 11 đến 14", "mục 5 đến mục 10": cách viết này trước đây không khớp chỗ nào, coi như không quét,
// cả sách có 7 chỗ viết thế.
const RANGE = /^\s*(\d+)\s*(?:đến|tới)\s*(?:mục\s*)?(\d+)\s*$/i;
// Trả về [số mục, có phải tách ra từ khoảng hay không]. Khoảng là chỉ cả một khối mục ("mấy mục phạt tiền",
// "mấy mục nghĩa vụ của nền tảng"), không thể gắn mỏ neo cho từng mục trong khối, nên số mục tách ra được
// miễn kiểm mỏ neo — chúng vẫn vào bảng đối chiếu, bị dồn lệch thì phát hiện nhờ tiêu đề đổi trong diff.
const nums = s => {
  const out = [];
  for (const part of s.split(',')) {
    const r = RANGE.exec(part);
    if (r) {
      const [a, b] = [Number(r[1]), Number(r[2])];
      if (b >= a && b - a <= 30) for (let i = a; i <= b; i++) out.push([i, true]);
      continue;
    }
    const n = Number(part.trim());
    if (Number.isFinite(n)) out.push([n, false]);
  }
  return out;
};
// Đoạn liệt kê số mục: "3", "3, 10", "11 đến 14", "5 đến mục 10"
const NUMS = '\\d+(?:\\s*,\\s*\\d+)*(?:\\s*(?:đến|tới)\\s*(?:mục\\s*)?\\d+)?';

const out = [];
const problems = [];
const suspects = [];
const weak = [];
let total = 0;

// Đơn vị quét: book/ mỗi chương một, docs/ mỗi bài dài một.
const targets = [
  ...files.map(f => ({ f, dir: 'book', isDoc: false })),
  ...docs.map(f => ({ f, dir: 'docs', isDoc: true })),
];

for (const { f, dir, isDoc } of targets) {
  const num = isDoc ? 0 : Number(f.slice(0, 2));
  const self = isDoc ? null : sections.get(num);
  const lines = readFileSync(resolve(ROOT, dir, f), 'utf8').split(/\r?\n/);
  const rows = [];
  // cur là số mục của mục đang đứng, 0 nghĩa là chưa vào mục nào (lời dẫn đầu chương của book, mọi vị trí của docs).
  // unit là tên hiển thị ở cột "Nguồn": mục ghi "mục N", đầu chương ghi "đầu chương", bài dài ghi tiểu đề gần nhất.
  let cur = 0;
  let unit = isDoc ? 'đầu bài' : 'đầu chương';

  // Câu đứng ngay trước trích dẫn thường ghi luôn nó muốn chỉ gì ("cứu trợ y tế (xem mục 11)"), liệt kê cả
  // mệnh đề đó ra, người soát bảng đối chiếu không cần lật bài vẫn phán được chỉ đúng hay không.
  // Lấy đến dấu ngắt câu gần nhất làm giới hạn, không lấy số ký tự cố định — cố định 44 ký tự từng khiến
  // vài chỗ trích dẫn đúng trông như khả nghi ("…CO nhìn thấy mục 18, bỏng nhiệt nhìn thấy mục 13" cắt xong
  // chỉ còn "CO" đối với "bỏng nhiệt").
  const ctxOf = (line, idx) => {
    const before = line.slice(0, idx);
    let start = -1;
    for (const p of ['.', ';', '!', '?', ':', '—']) start = Math.max(start, before.lastIndexOf(p));
    return before.slice(start + 1).slice(-120).replace(/\|/g, '\\|');
  };
  // Cửa sổ kiểm mỏ neo hẹp hơn cái trên: chỉ lấy mệnh đề ngăn bởi dấu phẩy nơi có trích dẫn. Cửa sổ rộng bằng
  // cả câu thì những từ phổ thông như "chính mình", "công ty" rất dễ trùng hớ với tiêu đề mục khác, mỏ neo thành giả —
  // 2026-09-20 chèn mục vào chương 31, chỗ "……khoản vay xem mục 15 (chương này)" ở ghi chú mục 1 bị dồn lệch trúng
  // mục mới "ở nhà làm từ xa cho công ty nước ngoài……thuế TNCN tự khai", cụm "chính bạn trả" ngoài hai dấu phẩy
  // trong cửa sổ cả câu trùng chữ trong tiêu đề, --check đã báo đạt.
  // Mệnh đề quá ngắn ("……, xem mục 11" kiểu này, cửa sổ chỉ còn một chữ "xem") thì lùi thêm một mệnh đề,
  // kẻo trích dẫn vốn đúng bị phán thành số mục để trần.
  // Dấu phẩy, dấu ngoặc kép và dấu ngoặc đều không tính là ranh mệnh đề: mỏ neo của "nước ngọt, thịt chế biến
  // (mục 3 chương này)" cách nhau bởi dấu phẩy, mỏ neo của "muốn 'hơn người một bậc' thì thấy ngân sách ở mục 24
  // (chương này)" nằm trong dấu ngoặc kép, cắt sai là thương.
  const CLAUSE = ['.', ';', '!', '?', ':', ',', '—'];
  // Những từ công cụ này không tính là từ khóa mỏ neo: bỏ đi rồi mới xét độ dài phần đuôi
  const FILLER = new Set(['xem', 'theo', 'như', 'và', 'của', 'ở', 'trong', 'tại', 'cùng', 'khi', 'để', 'cho', 'là', 'có', 'các', 'mục']);
  const coreLen = s => s.split(/[^\p{L}\p{N}]+/u).filter(w => w && !FILLER.has(w.toLowerCase())).join('').length;
  const narrowOf = (line, idx) => {
    const before = line.slice(0, idx);
    const cut = s => {
      let start = -1;
      for (const p of CLAUSE) start = Math.max(start, s.lastIndexOf(p));
      return { head: s.slice(0, start + 1), tail: s.slice(start + 1) };
    };
    const last = cut(before);
    if (coreLen(last.tail) >= 8) return last.tail.slice(-70);
    return (cut(last.head.slice(0, -1)).tail + last.tail).slice(-70);
  };
  // Chữ đứng sau trích dẫn cũng tính là mỏ neo: "mục 16 (giấy vay và bảo lãnh)" kiểu này ghi từ khóa sau số mục,
  // lấy đến dấu ngắt câu đầu tiên sau trích dẫn là đủ (nhiều nhất 110 ký tự). Không dùng số ký tự cố định:
  // những chuỗi số mục dài như "xem chương 1 mục 7, 8, 14, 17, 18, 19, 23, 24, 29, 30 (huyết áp, đường máu…)"
  // sẽ đẩy phần chú thích ra ngoài cửa sổ.
  const afterOf = (line, idx) => {
    const rest = line.slice(idx).replace(new RegExp(`^(?:[Cc]hương\\s*\\d+\\s*)?[Mm]ục\\s*${NUMS}\\s*`), '');
    const end = rest.search(/[.;!?]/);
    return (end === -1 ? rest : rest.slice(0, end)).slice(0, 110).replace(/\|/g, '\\|');
  };

  lines.forEach((line, i) => {
    if (isDoc) {
      const h = /^#{1,6}\s+(.+?)\s*$/.exec(line);
      if (h) { unit = h[1].slice(0, 40); return; }
    } else {
      const t = /^### (\d+)\. (.*)$/.exec(line);
      if (t) { cur = Number(t[1]); unit = `mục ${cur}`; return; }
    }
    // Thân mục chỉ quét mấy cột đó ("mục N" ở cột Nguồn đa số là số điều luật). Lời dẫn đầu chương và phần thân
    // bài dài là đoạn văn thường, không khớp tiền tố cột, cả dòng được đi qua — chúng trước đây cũng bị bỏ qua lặng lẽ thế.
    const inEntry = !isDoc && cur > 0;
    if (inEntry ? !CROSS_FIELDS.test(line) : !line.trim()) return;

    // Chỉ đường tương đối ("xem mục tiếp theo", "hình phạt xem mục ngay trên") nhất định cấm: nó không kèm số mục,
    // chèn mục vào là cả đám tự dời theo, xô lệch rồi diff của bảng đối chiếu cũng không thấy, kiểm tra số mục
    // để trần của --check càng quét không tới. 2026-09-20 quét một lượt bắt được ba chỗ chỉ sai từ lâu: "xem mục
    // tiếp theo" ở mục vaccine HPV chỉ sang tầm soát ung thư vú (đáng lẽ chỉ tầm soát ung thư cổ tử cung),
    // "hình phạt xem mục ngay trên" ở mục đe dọa chỉ sang mục ý định tự sát, "mục ngay trên không ký thì chủ động
    // nghỉ việc" ở mục đăng ký thất nghiệp chỉ sang mục giữ bằng chứng. Loại trừ trường hợp ghép được với từ chỉ
    // số lượng hoặc danh từ kép ("ba mục sau", "mấy mục trước", "danh mục dưới đây") — đó là cách nói số nhiều,
    // không phải chỉ đường tương đối.
    for (const m of line.matchAll(/(?<!danh |hạng |dự |tiểu |[Pp]hụ |[Mm]ấy |[Bb]a |[Bb]ốn |[Nn]ăm |[Bb]ảy |[Hh]ai |[Cc]ác |[Nn]hững |[Vv]ài |[Cc]huẩn bị |[Tt]rả |[Kk]hác )(mục (?:tiếp theo|kế tiếp|ngay sau|ngay trước|ngay trên|ngay dưới|trước đó|vừa nêu|vừa nói|vừa rồi))/g)) {
      problems.push(`${f}:${i + 1} ${unit}dùng cách chỉ tương đối "${m[1]}" — hãy đổi thành "mục N (từ khóa mỏ neo)"`);
    }

    // Khác chương: chương N mục X
    for (const m of line.matchAll(new RegExp(`[Cc]hương\\s*(\\d+)\\s*[Mm]ục\\s*(${NUMS})`, 'g'))) {
      const target = sections.get(Number(m[1]));
      for (const [x, range] of nums(m[2])) {
        const title = target?.titles.get(x);
        rows.push({ from: unit, range, ref: `chương ${m[1]} mục ${x}`, title, line: i + 1, ctx: ctxOf(line, m.index), narrow: narrowOf(line, m.index), after: afterOf(line, m.index) });
        if (!title) problems.push(`${f}:${i + 1} ${unit}trích dẫn "chương ${m[1]} mục ${x}" — chương này không có mục này`);
      }
    }

    // Bài dài không có khái niệm "chương này", "mục N" để trần trong bài dài là số mục của điều luật, không quét.
    if (isDoc) return;

    // Trong chương: quét mọi "mục X", không hạn chế từ dẫn — cách viết trong bài đâu chỉ có "xem mục X", còn có
    // "ép tim theo mục 1", "cách phán đoán giống mục 4", "đối chiếu mục 8 trước", "chọn một trong hai với mục 4",
    // trước đây chỉ nhận ba từ dẫn nên những kiểu này lọt hết ra ngoài phạm vi quét. Cột Nguồn không quét phần
    // trong chương (toàn là số điều luật). Lời dẫn đầu chương không bị cột ràng buộc: "mục N" ở đó là chỉ đường
    // đọc dẫn ("mục 9 tính tiền", "mục 2 tính quan hệ giữa đọc sách và tuổi thọ"), cũng bị dồn lệch như thường,
    // cũng phải vào bảng đối chiếu.
    if (inEntry && !FIELDS.test(line)) return;
    const stripped = line.replace(new RegExp(`[Cc]hương\\s*\\d+\\s*[Mm]ục\\s*${NUMS}`, 'g'), '');
    for (const m of stripped.matchAll(new RegExp(`[Mm]ục\\s*(${NUMS})`, 'g'))) {
      // Phán đoán đây là số mục của điều luật hay là trích dẫn mục trong sách. Cách làm trước 2026-09-21 là xem
      // 16 ký tự trước đó có chữ "luật" không, nhưng "pháp luật", "cách tra luật", "trợ giúp pháp lý", "hủy hợp đồng
      // trái luật" đều chứa chữ đó, một mảng trích dẫn thật bị bỏ qua theo. Mà lại còn bỏ lặng lẽ: trích dẫn
      // đương nhiên không vào bảng đối chiếu, --check chẳng có gì để tra ngược lại vẫn hiện "đạt", chỉ phát hiện nhờ tổng số
      // trích dẫn giảm bất thường. Một lượt quét toàn bộ bắt được 12 chỗ như vậy. Giờ bỏ qua theo hai tiêu chí rõ ràng:
      //   ① Kề ngay trước "mục N" là dấu hiệu trích dẫn văn bản — "điều 24", "khoản 3", "lệnh số 844", "số 41",
      //      hoặc đuôi là tên văn bản pháp luật ("…Luật Hình sự", "…Nghị định 05");
      // Chỉ nhận "kề ngay", không dùng cửa sổ mờ "N ký tự trước đó", cũng không lấy "có phải đầu câu không" làm
      // tiêu chí — trích dẫn mục trong sách vẫn có thể đứng đầu câu ("mục 4 viết trạm cứu trợ miễn phí ăn ở",
      // "danh sách 'phải vào viện ngay' ở mục 7").
      // Cái giá phải trả là trích dẫn pháp luật phải tự mang tên văn bản: khi liệt kê từng điều phải viết
      // "văn bản giải thích này điều 11", không được viết "……lệnh của tòa án. Điều 11 nói về lấy chứng cứ" dựa
      // dẫm vào câu trước. Đây vốn cũng là yêu cầu tự trọn vẹn của phần nội dung chính.
      const tail = stripped.slice(0, m.index).replace(/\s+$/, '');
      const CITE = /((?:điều|khoản|điểm|số|lệnh)\s*\d+(?:\/\d+)*$|[^\s,.;:()]{0,24}(?:[Ll]uật|[Nn]ghị định|[Tt]hông tư|[Qq]uết định|[Nn]ghị quyết|[Cc]ông ước|[Hh]iến pháp|pháp lệnh|điều lệ|quy chế|tờ trình|văn bản))$/;
      if (CITE.test(tail)) continue;
      for (const [x, range] of nums(m[1])) {
        const title = self.titles.get(x);
        rows.push({ from: unit, range, ref: `mục ${x} (chương này)`, title, line: i + 1, ctx: ctxOf(stripped, m.index), narrow: narrowOf(stripped, m.index), after: afterOf(stripped, m.index) });
        // Trích dẫn trong chương vượt quá số mục của chương thì đa số là số mục của điều luật bị nhận nhầm thành
        // trích dẫn mục, liệt kê ra cho người xem
        if (!title) problems.push(`${f}:${i + 1} ${unit}trích dẫn "mục ${x}" — chương này chỉ có ${self.titles.size} mục (có thể là số điều luật)`);
        if (inEntry && x === cur) problems.push(`${f}:${i + 1} mục ${cur} trích dẫn chính nó`);
      }
    }
  });

  // Có thể tự động kiểm được chỗ trích dẫn này chỉ đúng không: trong văn cảnh trước sau trích dẫn, có một từ
  // nào đó cũng xuất hiện ở tiêu đề mục đích không. Có → chỗ trích dẫn này tự mang mỏ neo, sai lệch do sửa đổi
  // sẽ bị phát hiện; không → nó là số mục để trần ("cách tính cụ thể xem mục 34"), sai cũng không ai thấy,
  // cần bổ sung chú thích tường minh.
  // Từ tiếng Việt chỉ 2-3 chữ cái ("và", "của", "có") trùng hớ nhau là chuyện thường ("chính mình", "công ty"),
  // nên thay "ba chữ Hán liền" bằng "một từ có nghĩa": chuỗi chữ cái liên tiếp không nằm trong danh sách từ phổ thông.
  const STOP = new Set(['và', 'của', 'có', 'là', 'cho', 'khi', 'bị', 'các', 'mỗi', 'từ', 'ở', 'ra', 'vào', 'với', 'theo', 'để', 'này', 'nó', 'một', 'hai', 'ba', 'bốn', 'năm', 'cả', 'hay', 'hoặc', 'thì', 'mà', 'cũng', 'vẫn', 'sẽ', 'được', 'không', 'trong', 'ngoài', 'trên', 'dưới', 'trước', 'sau', 'giữa', 'về', 'những', 'nhiều', 'ít', 'từng', 'mình', 'người', 'việc', 'cách', 'loại', 'kiểu']);
  const longest = (text, title) => {
    const t = title.toLowerCase();
    let best = 0;
    for (const m of text.matchAll(/[\p{L}\p{N}]{2,}/gu)) {
      const w = m[0].toLowerCase();
      if (STOP.has(w) || w.length <= best) continue;
      if (t.includes(w)) best = w.length;
    }
    return best;
  };
  // Chuỗi số và tiếng Latinh cũng là mỏ neo: 12356, AED, CT, BMI, LPR — chúng thường chính là thứ trích dẫn muốn chỉ
  const token = (text, title) => (text.match(/[0-9A-Za-z]{2,}/g) ?? []).some(t => title.includes(t));
  for (const r of rows) {
    if (!r.title || r.range) continue;
    const wide = r.ctx + r.after;
    if (token(wide, r.title) || longest(wide, r.title) >= 4) continue;
    if (longest(r.narrow + r.after, r.title) >= 3) continue;
    // Chỉ va trúng một từ ngắn bên ngoài mệnh đề thì liệt kê riêng làm mỏ neo yếu: cũng cần bổ sung chú thích tường minh như số mục để trần.
    const list = longest(wide, r.title) >= 3 ? weak : suspects;
    list.push(`${f}:${r.line} ${r.from} → "${r.ref}" ${r.title.slice(0, 30)}…　…${r.ctx}【${r.ref}】${r.after}…`);
  }

  if (!rows.length) continue;
  total += rows.length;
  out.push(`## ${isDoc ? 'docs/' : ''}${basename(f, '.md')}\n`);
  out.push('| Nguồn | Trích dẫn | Mục được trỏ tới | Văn cảnh chỗ trích dẫn |');
  out.push('| --- | --- | --- | --- |');
  for (const r of rows) {
    const title = r.title ? r.title : '**Trỏ tới mục không tồn tại**';
    out.push(`| ${r.from} | ${r.ref} | ${title} | …${r.ctx}… |`);
  }
  out.push('');
}

const body = [
  '# Bảng đối chiếu trích dẫn nguồn',
  '',
  'File này do `node tools/check-refs.mjs` sinh ra, đừng sửa tay.',
  '',
  '"Mục X" trong phần nội dung chính chỉ ghi số mục chứ không ghi nội dung; khi chèn hoặc xóa mục,',
  'các trích dẫn phía sau sẽ bị lệch hàng loạt, mà số mục bị lệch thường vẫn nằm trong phạm vi cho phép,',
  'chỉ kiểm tra vượt biên thì không bắt được. Vì thế tiêu đề mà mỗi chỗ trích dẫn **thực sự trỏ tới**',
  'được trải ra ghi ở đây và đưa vào kho: sau khi sửa các mục thì sinh lại bảng, trong `git diff`',
  'những chỗ số mục không đổi mà tiêu đề đổi chính là các trích dẫn bị xô lệch do dồn số.',
  '',
  'Phạm vi quét: phần thân mục và lời dẫn đầu chương của mỗi chương trong `book/`, cộng với các bài dài trong `docs/`.',
  'Bài dài không có "chương này", số "mục N" để trần đều bị coi là điều luật và bỏ qua, nên trích dẫn trong bài dài',
  'phải ghi đủ "chương X mục Y". Trong cột "Nguồn", mục ghi "mục N", đầu chương ghi "đầu chương", bài dài ghi tiểu đề gần nhất.',
  '',
  'Một rào chắn nữa là **mỏ neo**: văn cảnh trước sau mỗi chỗ trích dẫn phải có một từ khớp với tiêu đề của mục',
  'được trỏ tới (như "cứu trợ y tế" trong "cứu trợ y tế xem mục 11", hoặc ghi tường minh "xem mục 16 (giấy vay và bảo lãnh)").',
  '`node tools/check-refs.mjs --check` sẽ đánh trượt những số mục để trần không có mỏ neo — loại trích dẫn đó một khi bị',
  'xô lệch thì diff của bảng đối chiếu cũng chẳng thấy bất thường, chỉ còn dựa vào mỏ neo mà hứng. Trích dẫn theo khoảng',
  '("xem chương 8 mục 11 đến 14") là ngoại lệ: nó trỏ cả một khối mục, không thể gắn mỏ neo cho từng mục trong khối,',
  'chỉ dựa vào diff mà hứng.',
  '',
  'Mỏ neo có được tính hay không xét theo độ dài và khoảng cách: trong cả câu có một từ có nghĩa khớp với tiêu đề',
  '("đồ uống có đường", "BHYT cư dân"), hoặc trong mệnh đề ngăn bằng dấu phẩy nơi có trích dẫn có một từ khớp,',
  'mới tính là mỏ neo thật; chỉ va một từ phổ thông bên ngoài mệnh đề ("chính mình", "công ty") thì xử như không có mỏ neo.',
  'Lần siết này được bổ sung ngày 2026-09-20: khi chèn mục vào chương 31, "……của khoản vay xem mục 15 trong chương này"',
  'bị dồn lệch trúng mục mới "ở nhà làm từ xa cho công ty ở nước ngoài……thuế thu nhập cá nhân tự khai", cụm "chính bạn trả"',
  'cách hai dấu phẩy đã giả mạo mỏ neo, mà `--check` lúc đó báo là đạt.',
  '',
  `Tổng cộng ${total} chỗ trích dẫn.`,
  '',
  ...out,
].join('\n');

if (problems.length) {
  console.log('Cần người xác nhận:');
  for (const p of problems) console.log('  ' + p);
  console.log('');
}

// Heuristic này năm đó tỷ lệ báo nhầm rất cao ("hậu quả lâu dài sau khi hụt hơi xem mục 30" trỏ sang "ý nghĩ vừa
// nổ ra thì nói trước với một người bên cạnh" hoàn toàn đúng, lại không chồng chữ nào), 288 chỗ báo ra 159 chỗ;
// sau đó cả sách 345 chỗ trích dẫn được bổ sung mỏ neo từng chỗ một, giờ đây hai loại này bình thường đều phải là 0,
// báo ra tức là thực sự có chỗ cần bổ sung chú thích. Nhưng nó chỉ bảo đảm "sai lệch sẽ bị phát hiện", không bảo đảm
// "sai lệch nhất định bị chặn": mô phỏng đẩy toàn bộ trích dẫn trong chương lùi một mục, khoảng bảy thành bị chặn
// ngay tại chỗ, phần còn lại (hai mục liền nhau nói cùng một việc, tiêu đề dùng chung từ) vẫn phải dựa vào diff của
// bảng đối chiếu.
if (process.argv.includes('--suspect') && suspects.length) {
  console.log(`Văn cảnh chỗ trích dẫn không khớp tiêu đề mục được trỏ (${suspects.length} chỗ, báo nhầm nhiều, chỉ để người xem đối chiếu):`);
  for (const s of suspects) console.log('  ' + s);
  console.log('');
}

if (process.argv.includes('--suspect') && weak.length) {
  console.log(`Mỏ neo chỉ khớp bên ngoài mệnh đề (${weak.length} chỗ, đa số là từ phổ thông trúng may, coi như không có mỏ neo):`);
  for (const s of weak) console.log('  ' + s);
  console.log('');
}

if (CHECK_ONLY) {
  const fatal = problems.filter(p => p.includes('chương này không có mục này') || p.includes('trích dẫn chính nó') || p.includes('chỉ tương đối'));
  for (const p of fatal) console.log('  ' + p);
  // Số mục để trần (văn cảnh trước sau trích dẫn không có từ nào khớp tiêu đề đích) cũng tính là thất bại: loại
  // trích dẫn đó một khi bị dồn lệch thì chẳng ai thấy. Cách sửa là bổ sung mỏ neo — "xem mục 16 (giấy vay và bảo lãnh)",
  // từ trong ngoặc lấy từ tiêu đề mục đích là được.
  if (suspects.length) {
    console.log(`${suspects.length} chỗ trích dẫn là số mục để trần, sai cũng không ai thấy, hãy bổ sung mỏ neo (chạy --suspect xem danh sách):`);
    for (const s of suspects.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (suspects.length > 10) console.log(`  …còn ${suspects.length - 10} chỗ nữa`);
  }
  // Mỏ neo yếu cũng tính là thất bại: cả câu chỉ có một từ ngắn phổ thông khớp, mà còn cách cả mệnh đề, coi như không có mỏ neo.
  if (weak.length) {
    console.log(`${weak.length} chỗ mỏ neo chỉ khớp hớ bên ngoài mệnh đề, coi như không có mỏ neo, hãy ghi chú thích tường minh (chạy --suspect xem danh sách):`);
    for (const s of weak.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (weak.length > 10) console.log(`  …còn ${weak.length - 10} chỗ nữa`);
  }
  const bad = fatal.length + suspects.length + weak.length;
  console.log(bad ? `Tổng cộng ${bad} chỗ cần xử lý` : `Kiểm tra trích dẫn đạt: ${total} chỗ đều trỏ đúng và đều có mỏ neo`);
  process.exit(bad ? 1 : 0);
}

writeFileSync(resolve(ROOT, 'docs/bang-doi-chieu-nguon.md'), body, 'utf8');
console.log(`Đã ghi docs/bang-doi-chieu-nguon.md, tổng cộng ${total} chỗ trích dẫn`);
