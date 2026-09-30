// Phân tích cấu trúc README và danh sách file: hai bộ build EPUB (tools/epub) và PDF (tools/pdf) dùng chung.
// Chỉ nhận cấu trúc trong README, không giữ danh sách file thủ công — thêm một chương hay một bài dài,
// cả hai bộ build đều tự theo kịp.
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const REPO = 'https://github.com/hiepnm93/HowToLiveBetter';
export const SITE = 'https://hiepnm93.github.io/HowToLiveBetter/';
export const TITLE = 'Cẩm nang sống hiệu quả';
export const RELEASE = `${REPO}/releases/download/epub-latest`;

// Luôn trả LF cho các bộ build: trên Windows core.autocrlf=true checkout ra CRLF, script bản offline
// lấy needle viết bằng '\n' đi tìm mốc trong index.html thì không tìm thấy cái nào, build ở máy local
// báo thẳng "không tìm thấy phần mở đầu của script chính" (CI chạy Linux, chưa từng gặp). Phần phân tích
// nội dung cũng không cần mỗi nơi tự xử lý \r.
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = arr => [...new Set(arr)];

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

// Nội dung chính một ngày có thể sửa vài vòng, chỉ nhìn ngày không phân biệt được là bản nào, nên tính chính xác đến phút.
// CI chạy trên UTC, thống nhất hiển thị theo giờ Việt Nam, kẻo người tải xuống đối chiếu ngày theo giờ bên họ sẽ không khớp.
export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Ho_Chi_Minh', dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[← Về mục lục chính\]\([^)]*\)\s*\n/, '');
}

// Một đoạn trong README từ tiêu đề này đến tiêu đề kế tiếp
export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const between = (from, to) => {
    const a = lines.findIndex(l => l.startsWith(from));
    const b = lines.findIndex((l, i) => i > a && l.startsWith(to));
    if (a < 0 || b < 0) throw new Error(`Không tìm thấy trong README đoạn từ ${from} đến ${to}`);
    return lines.slice(a, b).join('\n');
  };
  const description = between('# Cẩm nang sống hiệu quả', '[![')
    .split('\n').slice(1).map(l => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean).join('');
  const frontMd = between('## Sách này trả lời những câu hỏi nào', '## Mục lục');
  const contentsMd = between('## Mục lục', '## Nội dung chính')
    .split('\n\n').filter(p => !p.includes('index.html')).join('\n\n');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((book\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]));
  if (bookFiles.length === 0) throw new Error('Không tìm thấy file book/ nào trong mục lục README.md');
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}
