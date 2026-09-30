// Đóng gói index.html + README + book/*.md thành một file HTML tự chứa: nháy đúp là xem, không cần server, không cần mạng.
// Cách dùng: node tools/offline/build.mjs [đường dẫn xuất]   mặc định xuất dist/HowToLiveBetter.html
// Nội dung được nhúng vào window.__CORPUS__, init() của index.html thấy biến này thì không gửi yêu cầu nữa;
// liên kết tương đối trong site đổi thành địa chỉ trực tuyến, ảnh sidebar chuyển thành data URI, mọi thứ khác không đổi một chữ.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, read, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.html');
const STAMP = buildStamp();
const COMMIT = gitCommit();

// ---------- Nội dung chính ----------
const readme = read('README.md');
const files = [...new Set([...readme.matchAll(/\]\((book\/[^)]+\.md)\)/g)].map(m => m[1]))].sort();
if (!files.length) throw new Error('Không tìm thấy file book/ nào trong mục lục README.md, bản offline sẽ trống rỗng');
// Bài dài (docs/*.md) cũng phải mang theo: cửa sổ bài dài của trang tra cứu dựng chúng ngay tại chỗ, bản offline
// thiếu chúng thì chỉ còn cái link GitHub bấm không mở. Danh sách lấy từ README, cùng một chỗ với hai bộ build EPUB và PDF.
const docs = [...new Set([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))].sort();
const corpus = {
  readme,
  parts: Object.fromEntries(files.map(f => [f, read(f)])),
  docs: Object.fromEntries(docs.map(f => [f, read(f)])),
};
// </script sẽ đóng thẻ script sớm; \/ trong chuỗi JS chính là /, nội dung không đổi
const corpusJson = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');

// ---------- Trang ----------
let html = read('index.html');
const must = (needle, label) => {
  if (!html.includes(needle)) throw new Error(`Không tìm thấy${label} trong index.html, script bản offline phải sửa theo: ${needle}`);
};

// Script thống kê không được đi cùng bản offline: bản mà người khác nháy đúp mở ra không được gửi yêu cầu ra ngoài,
// mất mạng thì còn phải chờ timeout
const GA_START = '<!-- ga:start', GA_END = '<!-- ga:end -->';
must(GA_START, ' dấu bắt đầu đoạn GA');
must(GA_END, ' dấu kết thúc đoạn GA');
html = html.slice(0, html.indexOf(GA_START)) + html.slice(html.indexOf(GA_END) + GA_END.length);
// Chỉ tra các domain hướng ra ngoài: track() trong script chính có Guard typeof, không có gtag vẫn chạy được, không tính là sót
if (/googletagmanager|google-analytics/.test(html)) throw new Error('Sau khi cắt phần giữa hai mốc vẫn còn domain thống kê sót lại, bản offline sẽ gửi yêu cầu ra ngoài');

// Liên kết tương đối mở tại máy local là chết, đổi thành địa chỉ trực tuyến
must('href="README.md"', ' liên kết README.md');
must('href="book/"', ' liên kết book/');
html = html
  .replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="book/"', `href="${REPO}/tree/main/book"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);

// Ảnh quảng cáo sidebar và mã thưởng chuyển thành data URI, kẻo mở offline thành ảnh vỡ
for (const [img, mime] of [['ads/mcyyy-side.webp', 'image/webp'], ['ads/wechat-reward.png', 'image/png']]) {
  must(`src="${img}"`, ` ảnh ${img}`);
  const data = readFileSync(resolve(ROOT, img)).toString('base64');
  html = html.replace(`src="${img}"`, `src="data:${mime};base64,${data}"`);
}

// Chân trang ghi rõ đây là bản offline phiên bản nào
const foot = '<div class="foot">';
must(foot, ' phần chân trang');
const commitNote = COMMIT ? `, nội dung commit ${COMMIT.slice(0, 7)}` : '';
html = html.replace(foot, `${foot}Bản sao offline, tạo lúc ${STAMP} (giờ Việt Nam)${commitNote}; nội dung sẽ tiếp tục cập nhật, lấy <a href="${SITE}">bản trực tuyến</a> làm chuẩn.<br>`);

// Nội dung phải có mặt trước script chính
const mainScript = '\n<script>\n/* ---------- Bảng điều khiển debug';
must(mainScript, ' phần mở đầu của script chính');
html = html.replace(mainScript, `\n<script>window.__CORPUS__=${corpusJson}</script>${mainScript}`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
const kb = n => (n / 1024 | 0) + ' KB';
console.log(`Đã tạo ${OUT}: ${files.length} file nội dung chính, ${docs.length} bài dài, ${kb(Buffer.byteLength(html))} (trong đó nội dung chính ${kb(Buffer.byteLength(corpusJson))})`);
