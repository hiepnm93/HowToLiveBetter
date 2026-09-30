// Xếp README + book/*.md + docs/*.md thành một cuốn PDF: pandoc chuyển Markdown sang typst, typst dàn trang.
// Cách dùng: node tools/pdf/build.mjs [đường dẫn xuất]   mặc định xuất dist/HowToLiveBetter.pdf
// Cần pandoc (≥3.1, có đầu ra typst) và typst (≥0.13) trên PATH, hoặc dùng biến môi trường PANDOC, TYPST trỏ đường dẫn.
// Bố cục nằm ở tools/pdf/template.typ; nội dung không đổi một chữ, chỉ làm ba việc:
// bỏ "← Về mục lục chính", gắn mỏ neo cho tiêu đề của mỗi chương, đổi liên kết trong repo thành nhảy trong sách hoặc địa chỉ GitHub.
import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.pdf');
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();          // "(giờ Việt Nam)" nằm ở template và phần ghi chú phiên bản, giá trị truyền cho pandoc giữ thuần ASCII
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();

// ---------- Các trang (mỗi trang một tiêu đề cấp một, tiêu đề cấp một trong typst sang trang riêng) ----------
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# Lời mở đầu\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## Mục lục/, '# Giới thiệu từng chương'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- Commit tương ứng: ${COMMIT.slice(0, 7)}\n` : '';
  return `# Ghi chú phiên bản

Cuốn PDF này được dàn trang tự động từ phần nội dung Markdown trong repo, nội dung vừa sửa là dàn lại một cuốn. Phiên bản của cuốn bạn đang cầm:

- Thời gian tạo: ${STAMP} (giờ Việt Nam)
${commitLine}- Tải bản mới nhất, tra cứu trực tuyến, góp ý: ${REPO}
- Trang tra cứu trực tuyến (lọc theo từ khóa, chương, mức bằng chứng và chi phí, cũng có thể lưu thành một file offline để xem): ${SITE}

Liên kết trong nội dung trỏ tới chương khác trong sách đã đổi thành nhảy trong sách; liên kết trỏ tới hồ sơ kiểm chứng, giấy phép và những file không dàn vào sách thì đổi thành địa chỉ GitHub.

Nội dung phát hành theo CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Được đăng lại, chỉnh sửa, dùng cho mục đích thương mại, phải ghi rõ nguồn “Cẩm nang sống hiệu quả” kèm liên kết repo, nội dung có sửa đổi phải ghi rõ là đã sửa.`;
}

// ---------- Liên kết: cái trong sách đổi thành mỏ neo, cái ngoài sách đổi thành địa chỉ tuyệt đối ----------
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    // Mỏ neo trong README trỏ tới mục nhỏ của chính nó (#mục-lục kiểu này) chưa chắc có trong sách, cho trỏ về README trên GitHub
    if (href.startsWith('#')) return `](${REPO}/blob/main/README.md${href}${title ?? ''})`;
    const [path] = href.split('#');
    const target = posix.normalize(posix.join(posix.dirname(src), path));
    const anchor = anchorOf.get(target);
    if (anchor) return `](#${anchor}${title ?? ''})`;
    const kind = target.endsWith('/') ? 'tree' : 'blob';
    return `](${REPO}/${kind}/main/${target}${title ?? ''})`;
  });
}

const body = pages.map(p => {
  const md = rewriteLinks(p.md, p.src)
    .replace(/<!--[\s\S]*?-->/g, '')                       // nhãn chi phí và các chú thích HTML khác không vào PDF
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);        // gắn mỏ neo cho tiêu đề cấp một của trang này
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`${p.src} không tìm thấy tiêu đề cấp một, không gắn được mỏ neo`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);

// ---------- pandoc → typst → pdf ----------
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`Không tìm thấy ${cmd}, hãy cài nó hoặc dùng biến môi trường ${cmd === PANDOC ? 'PANDOC' : 'TYPST'} trỏ tới file chạy`);
    throw new Error(`${cmd} thất bại:\n${err.stderr || err.stdout || err.message}`);
  }
};

const typFile = resolve(ROOT, 'dist/pdf-build.typ');
run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(ROOT, 'tools/pdf/template.typ')}`,
  '-V', `booktitle=${TITLE}`, '-V', `subtitle=${description}`,
  '-V', `builddate=${STAMP}`, '-V', `commit=${COMMIT.slice(0, 7) || 'không rõ'}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`,
  '-o', typFile, WORK,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

const entries = pages.filter(p => bookFiles.includes(p.src))
  .reduce((n, p) => n + p.md.split('\n').filter(l => l.startsWith('### ')).length, 0);
console.log(`Đã tạo ${OUT}: ${bookFiles.length} chương ${entries} mục, phụ lục ${docFiles.length} bài, ${(statSync(OUT).size / 1048576).toFixed(1)} MB`);
