# Rà soát toàn sách: cho khớp cột Hiểu nhanh với cột Lợi ích (2026-09-19)

Nguồn gốc nhiệm vụ: người dùng đọc mục hiến máu ở chương 6, gặp câu “‘mặt nhợt nhạt, sợ lạnh’ không phải bịa ra” và không hiểu — anh ấy không biết ai từng nói tới mặt nhợt nhạt, mà trong sách cũng thực sự không có nguồn nào nhắc tới “mặt nhợt nhạt”. Người dùng sau đó chỉ ra tính phổ biến của vấn đề: “nhiều độc giả quen đọc thẳng phần Hiểu nhanh, không xem Nguồn cũng không xem hồ sơ kiểm chứng”, yêu cầu rà soát toàn sách những vấn đề cùng loại.

## Phương pháp rà soát

Trước tiên làm hai vòng quét máy móc (19 cụm từ kiểu phản bác trúng trong các dòng Hiểu nhanh; so từng câu khẳng định trong ngoặc kép của chương 6 với cột Lợi ích từng hạng mục một), chỉ bắt được một vấn đề mới ở mục tắm nước lạnh, cho thấy quét máy móc không đủ độ phủ. Sau đó cử 6 agent biên tập song song so từng mục một, phủ toàn bộ 32 file trong book/, 544 mục, mỗi agent nhận cùng một bộ tiêu chí:

Bốn loại vấn đề cần tìm: **[Thêm số liệu]** con số trong Hiểu nhanh không tìm thấy trong cột Lợi ích của chính mục đó; **[Thêm sự kiện]** triệu chứng, hậu quả, khẳng định sự kiện mà Hiểu nhanh nêu ra không có căn cứ nào trong cột Lợi ích lẫn cột Nguồn của mục đó; **[Tự bịa cơ chế]** Hiểu nhanh diễn giải nhân quả hay cơ chế từ dữ liệu của cột Lợi ích mà nghiên cứu gốc không hề làm; **[Không tự túc]** Hiểu nhanh trích dẫn một lời nói mà độc giả chưa từng thấy rồi đi đánh giá lời nói đó.

Đồng thời đưa ra sáu loại ví dụ ngược **không tính là vấn đề** để tránh báo nhầm: cách diễn đạt khác nhưng nội dung nhất quán; phổ cập hóa thuật ngữ; quy đổi HR/RR thành cách nói đời thường; bước ngoặt logic tự túc; lời nói ai cũng biết hoặc đã được nói rõ lai lịch ngay tại chỗ; khuyến nghị hành động ở cuối mục.

Tổng cộng báo ra 104 chỗ. Kiểm tra ngẫu nhiên ba chỗ (nhóm chứng của mục uống nước nóng ở chương 2, cách tính Bắc Kinh của mục phân loại cấp cứu chương 24, thời hạn phục vụ của mục bác sĩ định hướng chương 31) đều đúng thực, bèn căn cứ báo cáo đối chiếu xử lý từng chỗ một.

## Đã sửa những gì

**Cách tính viết ngược hoặc viết hẹp (loại quan trọng nhất)**

| Mục | Bản gốc | Cột Lợi ích thực tế viết |
|---|---|---|
| Chương 31, bác sĩ định hướng | Thời gian đào tạo chuẩn hóa “3 năm này tính vào thời hạn phục vụ” | “Số năm đào tạo khi vi phạm **không** tính vào thời hạn phục vụ”, nghĩa ngược hẳn |
| Chương 24, phân loại cấp cứu | 10 phút/30 phút/4 giờ là thời hạn thông dụng | “Tiêu chuẩn bốn cấp là cách tính toàn quốc, **thời gian phản hồi là tiêu chuẩn của thành phố Bắc Kinh**” |
| Chương 24, khám chữa bệnh khác tỉnh | Hoàn ứng viên “thấp hơn một mức” | “Giữ **chênh lệch hợp lý**”, bản gốc không nói theo chiều nào |
| Chương 9, tin đồn | “Chưa kiểm chứng gì đã chuyển tiếp” là bị phạt | Yếu tố của cả hai điều khoản trừng phạt đều là **cố ý biết** là giả |
| Chương 11, đào coin | “Cũng **bị** phạt từ 50.000 đến 500.000 yên” | “**Có thể** bị phạt”, tiền phạt là hạng mục tùy nghi |
| Chương 12, nhập hàng | “**Trực tiếp** xem là biết trước” | “**Có thể** xem là biết (trừ trường hợp có chứng cứ chứng minh thực sự không biết)” |
| Chương 28, rối loạn ăn uống | “Nhìn riêng từng cái đều không dự báo được” | “Sau khi **hiệu chỉnh** việc ăn kiêng trước đây và triệu chứng tâm thần” |
| Chương 29, thất nghiệp | “Trong chênh lệch có gần một phần tư được giải thích bởi hút thuốc và uống rượu” | “Nhóm nghiên cứu đã kiểm soát hành vi sức khỏe có HR thấp hơn 24%”, không phải cùng một đại lượng |
| Chương 23, lao động trẻ em | “Có chuyện xảy ra thì thương lượng bồi thường riêng” | Điều 10 Quy định cấm sử dụng lao động trẻ em lại chính là điều quy định nghĩa vụ bồi thường theo pháp luật của đơn vị |
| Chương 1, nội soi đại tràng | Làm một lần nội soi đại tràng giảm xuống 0.98% | “**Mời** làm nội soi đại tràng”, NordICC là phân tích theo ý định sàng lọc, tỷ lệ thực sự được soi chỉ khoảng bốn phần mười |
| Chương 2, uống nước nóng | “Để hai phút là chém giảm được hơn nửa” | Nhóm chứng là “chờ trên **4 phút**”, không có mức hai phút |
| Chương 2, số bước chân | “Trên 7800 bước thì về cơ bản phẳng lì” | Điểm dần về phẳng chia theo tuổi: từ 60 tuổi trở lên 6000–8000 bước, dưới 60 tuổi 8000–10000 bước |

**Xóa bỏ các khẳng định về sự kiện, cơ chế và tần suất mà không tra ra trong cột Lợi ích**: “va thành thương nặng” của dây an toàn; “không cài quai thì coi như không đội” của mũ bảo hiểm; “hiếm khi chết người” và đau dây thần kinh của zona; “thường tự ngừng” của tiểu ra máu; hồ sơ tìm kiếm và vết phanh trong vụ giết vợ lừa bảo hiểm ở chương 8; “iPad 2” và con số tự bịa “bốn năm chục vạn (400.000–500.000 yên)” trong vụ bán thận chương 9; các câu “đa số là hai người cùng mất”, “người đến kéo nhau ra thường là người bị tính tới sau cùng”, “xe là thứ dễ bị tìm thấy nhất” của chương 13; cơ chế ép cầm máu của dị vật ở chương 13; “bong da thâm đen” của loét tì đè ở chương 17; so sánh dạng uống của vitamin K và nguyên nhân mông đỏ do tã ở chương 20; việc từ chối bồi thường khi dùng bằng lái nước ngoài ở chương 21; việc kẻ khác trộm lãnh lương hưu ở chương 25; hạng mục tái khám sau sinh và chi phí nằm viện ở chương 27; cơ chế tắc mạch của chất làm đầy ở chương 28; các câu “sẽ được chuyển tiếp”, “tự mò tới tận nhà”, “kẻ lừa đảo tập trung nhất” ở chương 29; “thường kèm buồn nôn nôn mửa” của xoắn tinh hoàn và “không phụ thuộc làm môn thể thao nào” của hoạt động ngoài trời ở chương 30; cách xử lý đồng loạt kiểu “một dao cắt” với vay nợ online ở chương 31; việc quy đổi nhân dân tệ ở chương 32.

**Bổ sung nguồn thay vì xóa** (nội dung có thật, chỉ là chính mục đó không ghi xuất xứ):

- Chương 6, vitamin C: rút ngắn thời gian bệnh 8% và RR 0.48 ở nhóm người vận động cường độ cực đoan vốn đã nằm trong Ghi chú, cùng thuộc một bài Cochrane, chuyển vào cột Lợi ích.
- Chương 7, trợ cấp thất nghiệp: bổ sung Điều 48 Luật Bảo hiểm xã hội (trong thời gian nhận trợ cấp được tham gia bảo hiểm y tế của người lao động, phí bảo hiểm y tế do quỹ bảo hiểm thất nghiệp chi trả, cá nhân không phải đóng).
- Chương 10, khám tiền hôn nhân: bổ sung Điều 1053 Bộ luật Dân sự (quyền hủy được thực hiện trong vòng một năm kể từ ngày biết hoặc lẽ ra phải biết).
- Chương 1, xét nghiệm HIV: bản gốc viết “có thể ẩn danh”, khi kiểm chứng chỉ tìm thấy căn cứ về **bảo mật** (Quy định quản lý công tác xét nghiệm AIDS toàn quốc quy định nhân viên không được tiết lộ họ tên, địa chỉ, kết quả xét nghiệm), không tìm thấy quy định chính thức nào miễn dùng tên thật. Bảo mật không đồng nghĩa ẩn danh, nên tiêu đề và phần thân của mục cùng đổi thành “kết quả được bảo mật”, đồng thời bổ sung văn bản này vào cột Nguồn.

**Tiện tay sửa lỗi lệch trích dẫn trong nội bộ chương 7** (agent phát hiện thêm, không liên quan tới phần Hiểu nhanh): mục 5 trỏ cứu trợ y tế tới mục 8 (đáng lẽ là mục 11), mục 8 trỏ trợ giúp pháp lý và trợ giúp đóng bảo hiểm tới mục 2, mục 8 (tự trỏ chính mình, đáng lẽ là mục 3, 10, 11), mục 11 trỏ bốn lần LPR tới mục 13 (đáng lẽ là mục 16), mục 19 và mục 21 trỏ bảo hiểm y tế cư dân tới mục 8 (đáng lẽ là mục 10), mục 22 trỏ trạm cứu trợ tới mục 3 (đáng lẽ là mục 4). Sau đó quét thêm một lượt toàn sách các trích dẫn vượt giới hạn (số mục trỏ tới vượt quá số mục của chương ấy), không trúng chỗ nào khác; dạng “nằm trong phạm vi nhưng trỏ sai” chỉ có thể phát hiện bằng tay.

## Hai lỗi cùng dạng mà chính tôi mắc trong quá trình sửa

Đáng được ghi riêng, vì nó cho thấy lỗi này dễ mắc tới mức nào:

1. Mục mù mắt vì phẫu thuật thẩm mỹ ở chương 28, tôi viết lại cơ chế tắc mạch ban đầu thành “trong 48 ca có sáu phần mười xảy ra ở sống mũi, khoảng chân mày và trán” — con số “sáu phần mười” này là tôi viết theo ấn tượng. Số liệu thực tế trong cột Lợi ích là mũi 56.3%, khoảng chân mày 27.1%, trán 18.8%, rãnh mũi má 14.6%, hơn nữa một ca có thể liên quan tới nhiều vị trí, cộng lại vượt 100%, hoàn toàn không thể gộp thành “sáu phần mười”. Đã sửa thành chép đúng từng hạng mục.
2. Mục mổ lấy thai ở chương 27, tôi viết câu của WHO “sau khi vượt 10% thì **chưa có bằng chứng cho thấy** tử vong giảm” thành “tỷ lệ tử vong mẹ và con **không còn giảm**”. Thiếu bằng chứng và chứng minh vô hiệu là hai chuyện khác nhau. Đã sửa lại đúng cách tính ban đầu.

**Bài học**: khi viết lại phần Hiểu nhanh phải mở cột Lợi ích ra chép ngay tại chỗ, không được kể lại theo ấn tượng vừa mới đọc.

## Trường hợp kết luận là không sửa

Những chỗ Hiểu nhanh trích dẫn nội dung chương khác nhưng **có ghi chú liên chương rõ ràng** (ví dụ chương 3 mục 20 khi nói về tiền phong bao có đánh dấu “(chương 24…)”) thì không xử lý theo kiểu thêm sự kiện — độc giả sẽ không nhầm đó là kết luận nghiên cứu của chính mục này, tính chất khác hẳn loại khẳng định tự nhiên xuất hiện như “mặt nhợt nhạt”. Cách tính này được ghi vào thông lệ phán đoán nằm ngoài CLAUDE.md, ghi tại đây để tra cứu sau.

## Quy tắc đã được đồng bộ

Quy tắc phần Hiểu nhanh trong CLAUDE.md trước đây chỉ cấm “**con số** không có trong cột Lợi ích”, nhưng phần lớn những chỗ sụp đổ lần này đều không phải con số. Đã bổ sung thành: những thứ không được thêm còn gồm triệu chứng, khẳng định sự kiện và diễn giải cơ chế; phần Hiểu nhanh phải tự túc, cấm kiểu viết “‘XX’ không phải bịa ra”, “‘XX’ là thật” — những cách viết phải dựa vào một lời nói đưa ra trước đó mới đọc hiểu được.
