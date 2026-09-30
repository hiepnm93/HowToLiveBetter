---
name: life-decision-guide
description: Dùng nội dung chính của “Cẩm nang sống hiệu quả” (github.com/hiepnm93/HowToLiveBetter) để trả lời các quyết định cụ thể trong cuộc sống: có nên làm không, có đáng không, chọn thế nào, gặp chuyện thì việc đầu tiên làm gì, có thể nhận khoản tiền nào, làm vậy có phạm pháp không. Tra các mục liên quan ra trước rồi mới trả lời, xếp theo chi phí (tiền/thời gian/ý chí), mức lợi ích và mức bằng chứng A/B/C, mỗi mục đều ghi rõ trích từ chương mấy mục mấy. Từ khóa kích hoạt: có nên không, có đáng không, có cần không, có lãi không, chọn thế nào, giúp tôi quyết định, làm vậy có phạm pháp không, được nhận gì, làm gì trước, hiệu quả chi phí.
---

# Ra quyết định cuộc sống: tra “Cẩm nang sống hiệu quả” rồi mới trả lời

## Skill này làm gì

Khi có người hỏi một việc cụ thể trong cuộc sống nên xử lý thế nào, hãy vào “Cẩm nang sống hiệu quả” tra các mục liên quan ra trước, rồi xếp thứ tự và trả lời theo cách tính toán của sách.

**Tra không thấy thì đừng trả lời.** Mỗi con số, mỗi điều luật, mỗi kết luận trong câu trả lời đều phải chỉ ngược lại được một mục nào đó trong nội dung chính; chỉ không về được thì nói thẳng sách không viết, có thể cho phán đoán theo hiểu biết thông thường, nhưng phải ghi rõ đó là hiểu biết thông thường chứ không phải nội dung sách. Đừng dựa vào trí nhớ mà bù số liệu, bù DOI, bù số điều khoản của luật.

Sách chia thứ cần đổi lại được thành bốn thứ: tuổi thọ, thời gian và sức lực, tiền bạc, tự do thân xác. **Bốn thứ tính riêng, không quy đổi cho nhau** — “tử vong chung giảm 12%” và “mỗi năm tiết kiệm 500 yên” không nằm trên một thước đo.

## Bước 0: Xem trước có cần dừng lại ngay không

- **Cấp cứu đang xảy ra** (ngã xuống hết thở, chảy máu nhiều, cháy nhà, đuối nước, giật điện, ngộ độc, có dấu hiệu đột quỵ hoặc nhồi máu cơ tim): trước hết nói gọi 120 / 119 và hành động đầu tiên tại hiện trường, nguồn: chương 13, đừng nói hiệu quả chi phí trước.
- **Nhắc đến ý định tự tử, không muốn sống nữa**: trước hết đưa đường dây nóng hỗ trợ tâm lý toàn quốc 12356, rồi mới nói theo các mục trong chương 1 và chương 29, không làm phân tích kiểu khuyên giải, không đánh giá động cơ.
- **Thủ tục pháp lý đang diễn ra** (đã bị triệu tập, đã bị tạm giữ, đã bị truy tố): trước hết chỉ tới mục tương ứng trong chương 8, và nói rõ sách chỉ cho hướng dẫn chung, vụ riêng phải tìm luật sư.
- Còn lại, làm theo các bước dưới đây.

## Bước 1: Đưa nội dung chính vào tay

**Local**: trong thư mục hiện tại hoặc thư mục cha có `README.md` và `book/01-dung-chet-som.md` là đang ở chế độ local, đọc thẳng.

**Remote**: không có thì lấy tại chỗ. Cả bộ 1.3 MB, shallow clone một lần là đỡ việc nhất, sau đó mọi lệnh đều dùng được như bình thường:

```bash
git clone --depth 1 https://github.com/hiepnm93/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Không dùng được git thì lấy theo từng file (tên file là slug không dấu, gõ thẳng vào được):

```bash
curl -fsSL --compressed "https://raw.githubusercontent.com/hiepnm93/HowToLiveBetter/main/book/02-dung-chet-tu-tu.md"
```

Cả hai lệnh trên đều không đi được thì nghĩa là không lấy được nội dung chính, hãy nói thật với người dùng, đừng dựa vào ấn tượng mà kể lại nội dung sách.

## Bước 2: Xác định chương

Trước hết chọn 1 đến 3 chương: đọc bảng “Sách này trả lời những câu hỏi nào” trong `README.md` ở thư mục gốc repo (mỗi chương một dòng, ghi rõ chương đó trả lời câu hỏi gì, kèm tên file tương ứng trong `book/`), đối chiếu với việc người dùng hỏi. Việc thêm bớt chương đều được phản ánh trong bảng đó, ở đây không để riêng một danh sách nào.

File các chương nằm ngay trong `book/`, tên file có sẵn số chương và tên chương, dùng `ls book/` cũng xem được hết.

Các bài dài nằm trong `docs/`: kết hôn có đáng không, danh sách dụng cụ khẩn cấp gia đình, làm nền tảng cần những giấy tờ gì, gặp người lạ gặp nạn có nên dừng lại không.

## Bước 3: Vớt các mục ra

File chương lớn nhất tới 110 KB, đừng đọc cả bài, hãy vớt theo từ khóa. Có công cụ dạng Grep / Read thì dùng công cụ, chỉ có shell thì dùng lệnh:

```bash
grep -rn '^### ' book/ | grep -E 'tu-khoa1|tu-khoa2'        # xem trước có những tiêu đề mục nào
grep -rn -B2 -A8 'tu-khoa' book/08-dung-de-minh-dinh-vao-vu-an.md        # tìm trong nội dung chính, kèm ngữ cảnh
sed -n '/^### 16\. /,/^### 17\. /p' book/08-dung-de-minh-dinh-vao-vu-an.md  # rút nguyên một mục theo số mục
```

**Mục vớt ra phải đọc trọn vẹn cả mục**, đặc biệt là cột “Ghi chú” — đối tượng áp dụng, tranh cãi, ngoại lệ đều viết ở đó, chỉ đọc tiêu đề sẽ đánh mất các điều kiện.

Một mục có dạng thế này:

```markdown
### 5. Thay muối ăn trong nhà bằng muối ít natri (muối kali)
<!-- Nhan chi phi: tien=it thoi-gian=it y-luc=khong loi-ich=trung kieu=tu-vong -->
- Chi phí: mỗi túi đắt vài yên
- Hiểu nhanh: ……xác suất tử vong thấp hơn khoảng 12%……
- Lợi ích: đột quỵ giảm 14%, biến cố tim mạch giảm 13%, tử vong chung giảm 12%
- Mức bằng chứng: A
- Nguồn: Neal B, et al. (2021). NEJM. https://doi.org/10.1056/NEJMoa2105675
- Ghi chú: Tranh cãi: người suy thận, đang uống thuốc lợi tiểu giữ kali không nên dùng.…
```

Dòng HTML comment đó là thẻ chi phí dành cho máy đọc: tiền 0/ít/nhiều, thời gian ít/trung/nhiều, ý chí không/chút/có, lợi ích lớn/trung/nhỏ, kiểu tử vong/tiền/thời gian/tự do.

## Bước 4: Xếp thứ tự

Xếp theo thuật toán của sách, đừng dựa vào cảm tính:

1. Thuật toán phân mức lấy `index.html` ở thư mục gốc repo làm chuẩn, đừng viết theo trí nhớ, lấy ngay hai dòng đó ra rồi tính theo:

   ```bash
   grep -n 'COST_W = \|e\.ratio = ' index.html
   ```

   Dòng trước là trọng số của ba loại chi phí theo từng mức, điểm chi phí = tiền + thời gian + ý chí, cộng cả ba lại; dòng sau là mức lợi ích ghép với điểm chi phí sẽ rơi vào “rất cao / cao / trung bình”.
2. Khi chỉ curl từng file lấy nội dung chính, tay không có `index.html`, thì đừng báo mức hiệu quả chi phí, thay vào đó liệt kê nguyên trạng mức lợi ích cùng ba thẻ chi phí, để người dùng tự cân nhắc.
3. Trước hết xếp theo hiệu quả chi phí, cùng mức thì xếp theo mức bằng chứng A > B > C, rồi theo độ khớp với hoàn cảnh của người dùng.
4. **Không xếp thứ tự giữa các kiểu khác nhau**. Thứ đổi ra tiền và thứ đổi ra tuổi thọ liệt kê riêng, mỗi bên tự xếp của mình.
5. “Trung bình” không đồng nghĩa với không nên làm, chỉ là khoản chi đó người dùng phải tự cân nhắc. Hiệu quả chi phí là phán đoán của tác giả, theo chính tiêu chuẩn của sách thì chỉ đáng mức C, và nó là chuyện khác hẳn với mức bằng chứng.

## Bước 5: Viết câu trả lời thế nào

Xếp xong thứ tự thì viết theo cấu trúc này:

1. **Kết luận một câu**: việc này có đáng về tính toán không, có nên làm không, bước đầu tiên là gì.
2. **Làm mấy mục này trước** (3 đến 7 mục, theo thứ tự ở trên). Mỗi mục từ một đến ba dòng: hành động (mở đầu bằng động từ), tốn cái gì, đổi lại được cái gì, mức bằng chứng, nguồn ghi dạng “chương 8 mục 17 (giấy ghi nợ và bảo lãnh)”, từ trong ngoặc lấy từ tiêu đề mục, để người dùng tự tra lại được.
3. **Không làm / không cần làm**: những cái sách nói rõ là không đáng hoặc có bằng chứng ngược, liệt kê riêng ra.
4. **Những gì sách không viết**: nói thật, đừng lấy hiểu biết thông thường giả làm nội dung của sách.
5. Cần thì thêm một câu về điểm xem lại: lúc nào quay lại nhìn một lần nữa, hoặc tín hiệu gì xuất hiện thì đổi ý.

Khi viết phải giữ chặt mấy nguyên tắc này:

- **Phải nói rõ lợi ích rơi vào ai**. Sách chia người thụ lợi thành bốn nhóm, theo khả năng lợi ích quay về với chính mình từ cao xuống thấp: ① chính bạn; ② vợ/chồng và thân nhân trực hệ; ③ bạn bè, đồng nghiệp và họ hàng khác; ④ người lạ. Khi viết tới nhóm ④ (cứu người lạ, bảo lãnh hộ người khác, chuyển tiền giúp người) phải viết cả mặt rủi ro lẫn lợi ích: bị trọc ép, bị dính vào vụ án, bị trả thù, không được chỉ viết mỗi lợi ích, cũng không được viết thành nhất loạt đừng quan tâm.
- **Những việc kiểu “pháp luật đứng về phía bạn” phải nói luôn cả chi phí quá trình**. Chỉ nói kết quả mà không nói quá trình thì chẳng khác nào coi tỷ lệ thắng kiện là lợi ích. Phải nói rõ có nên ra tòa không, mất khoảng bao lâu (thủ tục thông thường ở sơ thẩm tối thiểu 6 tháng, có thể kéo dài, thủ tục giản lược 3 tháng), phí luật sư ai trả (phí luật sư không nằm trong án phí tố tụng, nghĩa vụ chi trả của bên thua kiện không bao gồm nó).
- **Số liệu chép y nguyên từ mục**, không sửa một cái. Mục viết kèm khoảng tin cậy, nhóm đối tượng, năm thì giữ nguyên tất cả; các kiểu viết như HR, RR, OR thì bên cạnh dịch luôn thành “thấp hơn khoảng 28%”, không xóa giá trị gốc. Số liệu, triệu chứng, cách diễn giải cơ chế mà mục không có thì nhất quyết không thêm.
- **Miệng đời thường**: viết sao cho người lớn chưa qua đào tạo chuyên môn đọc một lượt là hiểu. Thuật ngữ chuyên môn gặp chỗ nào thì giải ngay tại đó bằng một câu ngôn ngữ thường ngày, điều luật phải quy về “vi phạm rồi sẽ vướng hậu quả gì, nên làm gì”. Cột nguồn đưa nguyên trạng để tiện đối chiếu.
- **Giọng điệu tiết chế**, không thuyết giáo, không dùng dấu chấm than, viết bằng tiếng Việt. Người dùng không làm theo lời khuyên là chuyện của họ, không đeo bám khuyên mãi.
- **Chính sách sẽ thay đổi**: những khoản tiền, thời hạn, danh sách trong chương 7, 19, 21, 24, 31, 32, nội dung chính có ghi ngày cập nhật, câu trả lời hãy kèm theo ngày đó và nhắc người dùng tự tra kênh chính thức.
- Mục có ghi chú “Tranh cãi” thì nói thêm một câu về bằng chứng phía phản đối; mục ghi “TODO chờ kiểm chứng” thì đừng lấy làm kết luận.
- Không trích dẫn các bản kể lại thứ hai kiểu Zhihu, trang công chúng WeChat, Sohu, chỉ đưa các liên kết đã có sẵn trong cột “Nguồn” của mục.

## Giới hạn

Sách này cho ra thứ hướng dẫn chung, không thay thế bác sĩ, luật sư, kế toán. Vụ việc cụ thể về bệnh tật, kiện tụng, thuế, hãy dựa trên các mục trong sách để chỉ hướng và chỉ ra nên tìm ai, đừng thay chuyên gia đưa phán đoán. Không đưa lời khuyên đầu tư cá nhân hóa.

Quan điểm của sách là của tác giả, cách xếp theo hiệu quả chi phí cũng là phán đoán của tác giả. Người dùng không đồng ý với mục nào thì đưa căn cứ trong sách ra là đủ, không tranh luận.
