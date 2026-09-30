# Rà soát: liên kết tài liệu trong phần Ghi chú · Ghi chép (2026-09-21)

Nguồn gốc nhiệm vụ: người dùng đọc trên trang tra cứu phần Ghi chú của chương 2 mục 1 (bỏ thuốc lá), trong đó nhúng cả một chuỗi dài thông tin đầu bài tiếng Anh, nói “sao chỗ này lại còn có thế, độc giả toàn người Trung Quốc, để nguyên cả một chùm dài thế này làm gì”.

Trước đó trong cùng ngày đã xử lý hai mục (chương 2 mục 41 ca làm đêm, chương 6 mục 26 bữa sáng), lúc đó chỉ sửa hai mục nhiều liên kết nhất, chưa rà soát toàn sách. Vòng này bổ sung cho trọn.

## Tiêu chí và cách làm

- **Liên kết tài liệu nhất nhất đưa vào cột “Nguồn”, không đặt trong Ghi chú.** Trong Ghi chú tối đa chỉ giữ một liên kết, và chỉ được là liên kết tương đối trỏ tới bài dài trong docs/.
- Căn cứ: quy tắc phổ cập trong CLAUDE.md viết rõ “**ngoại trừ cột Nguồn**, thông tin đầu bài tài liệu và số điều khoản phải giữ nguyên để đối chiếu được” — hàm ý là nơi dung nạp thông tin đầu bài tiếng Anh chính là cột Nguồn. Ghi chú là phần thân bài tiếng Trung dành cho độc giả Trung Quốc đọc, nhét cả một chuỗi tên bài tiếng Anh cùng DOI vào đó thì vừa không đọc hiểu vừa không nên đọc.
- Lệnh quét: dùng `grep -c http` quét tất cả các dòng `- Ghi chú: ` trong toàn sách.

## Trước và sau khi xử lý

| | Trước xử lý | Sau xử lý |
|---|---|---|
| Mục có liên kết trong Ghi chú | 19 mục (trong đó 11 mục là cả chùm thông tin đầu bài tiếng Anh nhúng giữa văn bản tiếng Trung) | **0 mục** |
| Số liên kết nhiều nhất trong một Ghi chú | 3 | 0 |
| Tổng số liên kết tài liệu toàn sách | 1234 | **1234 (không đổi)** |

Tổng số liên kết không đổi là bất biến cốt lõi của vòng này: **thông tin đầu bài được chuyển từ Ghi chú sang cột Nguồn, chứ không bị xóa**. Khi chuyển vào Nguồn, mỗi mục được thêm một đuôi nhỏ tiếng Trung nói rõ nó chống lưng cho luận điểm nào (kiểu “(bên tranh cãi)”, “(thử nghiệm dầu cá kê đơn độ tinh khiết cao trong Ghi chú ấy)”), để cột Nguồn không biến thành một dãy thông tin đầu bài nhìn không ra công dụng.

## Danh sách từng mục

Chương 1: mục 20 (vaccine cúm Cochrane), mục 28 (PrEP, Fonner 2016), mục 29 (giai đoạn cửa sổ, trang của CDC tỉnh Quảng Đông).
Chương 2: mục 1 (hút thuốc thụ động Oberg 2011), mục 9 (bên tranh cãi muối ít natri PURE), mục 19 (bên tranh cãi thịt chế biến, hướng dẫn NutriRECS), mục 20 (bên tranh cãi rượu bia Di Castelnuovo 2006), mục 34 (bên tranh cãi BMI Flegal 2013), mục 41 (hai bài ung thư do ca làm đêm + ánh sáng Czeisler, vòng trước đã xử lý).
Chương 3: mục 9 (hai bài bên tranh cãi Grubbs 2018, Prause & Pfaus 2015).
Chương 5: mục 17 (bên tranh cãi quỹ chỉ số Harvey & Liu 2022).
Chương 6: mục 1 (vitamin tổng hợp Gaziano 2012), mục 2 (dầu cá Bhatt 2019 REDUCE-IT), mục 26 (ba bài về bữa sáng, vòng trước đã xử lý).
Chương 10: mục 3 (Perilloux & Kurzban 2015), mục 6 (Dargie 2015).
Chương 20: mục 12 (thử nghiệm EAT ở trẻ em nói chung, Perkin 2016).
Chương 29: mục 4 (Kristensen 2012), mục 9 (Stroebe 2007).

## Các tên bài được bổ sung đầy đủ

Có 5 mục trước đây trong Ghi chú ở dạng viết tắt (chỉ có tác giả, năm, tạp chí), chuyển vào cột Nguồn phải bổ sung tên bài. **Không viết theo trí nhớ**, từng mục được lấy về qua Crossref theo DOI:

| DOI | Tên bài lấy về |
|---|---|
| 10.1097/QAD.0000000000001145 | Effectiveness and safety of oral HIV preexposure prophylaxis for all populations (AIDS, 2016) |
| 10.1001/jama.2012.14641 | Multivitamins in the Prevention of Cancer in Men (JAMA, 2012) |
| 10.1056/NEJMoa1812792 | Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (NEJM, 2019) |
| 10.1007/s10508-018-1248-x | Pornography Problems Due to Moral Incongruence: An Integrative Model with a Systematic Review and Meta-Analysis (Arch Sex Behav, **năm Crossref ghi là 2018 chứ không phải 2019 như bản gốc viết**, đã viết theo 2018) |
| 10.1002/sm2.58 | Viewing Sexual Stimuli Associated with Greater Sexual Responsiveness, Not Erectile Dysfunction (Sexual Medicine, 2015) |

## Kiểm tra

- Số mục có dòng `- Ghi chú: ` chứa http trong toàn sách: **0**.
- Sau khi xóa trích dẫn đã quét lại một lượt dấu câu, không chừa lại dấu chấm kép, ngoặc rỗng hay dấu “.” mồ côi.
- `node tools/check-refs.mjs --check`: 454 chỗ trích dẫn đều trỏ đúng và có neo (anchor), số mục không đổi.
- `sync-stats.ps1`: mục 600, A 404, liên kết 1234, tám vị trí thống kê không động tới chỗ nào.
