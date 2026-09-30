# Skill ra quyết định cuộc sống (life-decision-guide)

Cho AI assistant trả lời các câu hỏi cụ thể theo “Cẩm nang sống hiệu quả”: có nên làm không, có đáng không, chọn thế nào, gặp chuyện thì việc đầu tiên làm gì, có thể nhận khoản tiền nào, làm thế này có phạm pháp không.

Nó chỉ làm đúng một việc: **tra các mục liên quan từ nội dung chính ra trước, rồi trả lời có xếp hạng theo cách tính toán của sách**, mỗi mục đều ghi rõ trích từ chương mấy mục mấy. Tra không thấy thì nói thẳng là không thấy, không bịa số liệu theo trí nhớ.

Toàn bộ quy tắc nằm trong [SKILL.md](SKILL.md), hai công cụ dùng chung một file, không giữ hai bản.

## Cài vào Claude Code

Mở Claude Code ngay trong repo này thì không cần cài — `.claude/skills/life-decision-guide/` đã trỏ sẵn tới bản quy tắc này.

Muốn dùng được ở bất kỳ thư mục nào, sao chép vào thư mục skill cá nhân:

```bash
mkdir -p ~/.claude/skills/life-decision-guide && curl -fsSL -o ~/.claude/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/hiepnm93/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Sau đó chỉ cần hỏi thẳng kiểu “Mỗi ngày đi làm mất hai tiếng đi lại có đáng không”, “Bạn bè nhờ mình đứng ra bảo lãnh thay, có nên ký không” là sẽ tự kích hoạt; cũng có thể nói rõ “dùng life-decision-guide để trả lời”.

## Cài vào Codex

Mở Codex ngay trong repo này thì không cần cài — `AGENTS.md` ở thư mục gốc đã chỉ ra nó rồi.

Muốn dùng được ở bất kỳ thư mục nào, sao chép vào thư mục skill cá nhân của Codex là `~/.agents/skills`:

```bash
mkdir -p ~/.agents/skills/life-decision-guide && curl -fsSL -o ~/.agents/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/hiepnm93/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Sau đó chỉ cần hỏi thẳng câu hỏi là nó sẽ tự kích hoạt theo phần mô tả, cũng có thể gõ `$life-decision-guide` để gọi tường minh. Lưu ý là `$` chứ không phải `/`, Codex bản mới gõ `/life-decision-guide` sẽ báo `Unrecognized command`. Nếu chưa thấy xuất hiện thì khởi động lại Codex một lần.

Codex bản cũ chưa có skill, chỉ dùng được lời nhắc tùy chỉnh: đặt file vào `~/.codex/prompts/life-decision-guide.md`, rồi gọi bằng `/life-decision-guide`. Codex đã tuyên bố ngừng hỗ trợ phương pháp này ([openai/codex#10848](https://github.com/openai/codex/issues/10848)), bản mới hãy dùng cách cài skill ở trên.

## Nội dung chính lấy từ đâu

Có repo này sẵn trên máy thì đọc `book/` tại chỗ; không có thì lấy ngay:

```bash
git clone --depth 1 https://github.com/hiepnm93/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Cả bộ nặng 1.3 MB, shallow clone một lần chỉ mất vài giây. Không lấy được mạng thì nói thật là không lấy được, không thay thế nội dung chính bằng thứ khác.

## Lưu ý khi chỉnh sửa

Trong SKILL.md không để lại bất kỳ danh sách hay con số nào sẽ trôi theo nội dung chính: muốn có danh sách các chương thì đọc bảng “Sách này trả lời những câu hỏi nào” trong README, muốn biết thuật toán phân mức hiệu quả chi phí thì đọc hai dòng `COST_W` và `e.ratio` trong `index.html`. Vì vậy thêm bớt chương hay sửa quy tắc phân mức đều không cần đụng đến thư mục này.
