# Bổ sung chương 11: kiểm thử an toàn chưa được ủy quyền và báo cáo lỗ hổng (2026-09-19)

Nguồn nhiệm vụ: người dùng chỉ ra chương 11 còn thiếu mảng “white hat”, ví dụ đưa ra là vụ Thế kỷ Gia Duyên (Jiayuan) năm 2016 (vụ Viên Vị) — kiểm thử website phát hiện lỗ hổng, lấy một phần dữ liệu người dùng làm bằng chứng, nộp lên nền tảng lỗ hổng của bên thứ ba, nhà sản xuất trước thì xác nhận và cảm ơn, sau thì báo án, người này bị tạm giam hình sự và phê chuẩn bắt vì nghi phạm tội thu thập trái phép dữ liệu hệ thống thông tin máy tính, giam giữ vài tháng rồi được thả, cuối cùng không bị tuyên án.

Phạm vi phủ trước đây: chương 11 mục 4 viết về crawler (điểm rơi là qua mặt lớp bảo vệ để lấy dữ liệu và bán dữ liệu), mục 8 viết về kiểm soát trái phép thiết bị của người khác (điểm rơi là đào tiền mã hóa và điều khiển camera, điện thoại). Cả hai mục đều trích khoản 2 Điều 285 Bộ luật Hình sự và Điều 1 của Pháp thích [2011] số 19, nhưng đều không phủ tới nhóm hành vi “làm kiểm thử an toàn khi chưa được ủy quyền”, cũng không có mục nào viết “thiện chí, không mưu lợi, báo cáo sau” có địa vị thế nào khi định tội, cùng con đường xử lý hợp pháp sau khi phát hiện lỗ hổng. Trước đó toàn sách chưa hề nhắc một chữ nào đến “Quy định quản lý lỗ hổng an toàn sản phẩm mạng”.

Điểm rơi: chương 11 thêm mới 2 mục (mục 9, 10 mới), mục 9 đến 15 cũ lần lượt dời thành mục 11 đến 17, đồng thời sửa hai chỗ tham chiếu chéo chương (dòng 32 của book/09-rang-nhuoc-phap-ly-thuong-dan “chương 11 mục 9” → “chương 11 mục 11”; dòng 103 của book/26-lam-website-hoac-nen-tang “chương 11 mục 14” → “chương 11 mục 16”). Ngoài ra còn sửa một chỗ đánh dấu chưa xác minh để sót ở cột Nguồn của mục 8 (xem dưới).

Công cụ lấy nguồn: WebSearch + WebFetch. Trang công báo TAND tối cao `gongbao.court.gov.cn` hai lần đều trả về 502, Pháp thích [2011] số 19 đổi sang đối chiếu chéo bản đăng lại của Công an thành phố Thâm Quyến (các mục còn lại của chương này trước đây đã dùng cùng link đó) với bản đăng lại của Công an tỉnh Quảng Đông, số liệu hai nơi khớp nhau.

## Mục 9 (chưa được ủy quyền thì không làm kiểm thử an toàn)

| URL | Đối chiếu lại | Điểm chính của nguyên văn |
|---|---|---|
| <https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/fl/11033925/index.html> (bản văn hợp nhất Bộ luật Hình sự, do Cục Quản lý giao thông công an thành phố Bắc Kinh đăng lại, chương này trước đây đã dùng) | Có | khoản 1 Điều 285 là xâm nhập hệ thống thông tin máy tính trong lĩnh vực sự vụ quốc gia, quốc phòng, khoa học kỹ thuật mũi nhọn; khoản 2 là xâm nhập hệ thống ngoài phạm vi khoản trên hoặc dùng thủ đoạn kỹ thuật khác để lấy dữ liệu, tình tiết nghiêm trọng dưới 3 năm, đặc biệt nghiêm trọng 3 đến 7 năm |
| <https://ga.sz.gov.cn/ZWGK/ZCFG/ZCJD/content/post_1304363.html> (Pháp thích [2011] số 19, Công an thành phố Thâm Quyến đăng lại) | Có | Điều 1 “tình tiết nghiêm trọng”: thông tin nhận thực dịch vụ tài chính từ 10 nhóm trở lên; thông tin nhận thực khác từ 500 nhóm trở lên; kiểm soát trái phép hệ thống thông tin máy tính từ 20 máy trở lên; thu lợi bất hợp pháp từ 5.000 yên trở lên hoặc gây thiệt hại kinh tế từ 10.000 yên trở lên. “Tình tiết đặc biệt nghiêm trọng” là từ 5 lần các chuẩn trên trở lên |
| <https://www.spp.gov.cn/spp/jczdal/201710/t20171017_202593.shtml> (các vụ án hướng dẫn đợt thứ chín của Viện kiểm sát nhân dân tối cao) | Có | Vụ án hướng dẫn Kiểm lệ số 36: vụ Vệ Mộng Long, Cung Húc, Tiết Đông Đông. Điểm chỉ: “dùng tài khoản, mật khẩu đăng nhập hệ thống thông tin máy tính vượt quá phạm vi ủy quyền, thuộc hành vi xâm nhập hệ thống thông tin máy tính”. Diễn biến: Cung Húc cung cấp tài khoản, mật khẩu, Token nắm được trong công việc, Vệ Mộng Long đăng nhập từ nơi khác vào hệ thống quản lý phát triển nội bộ của công ty tải dữ liệu điện tử ngoài phạm vi công việc, giao cho Tiết Đông Đông bán trên internet, thu lợi bất hợp pháp 37.000 yên; Vệ Mộng Long 4 năm và phạt 40.000 yên, Cung Húc 3 năm 9 tháng và phạt 40.000 yên, Tiết Đông Đông 4 năm và phạt 40.000 yên |

Xếp mức A: ngưỡng hình sự và thang hình sự đều có thể đối chiếu từng chữ trong giải thích pháp lý và nguyên văn Bộ luật Hình sự, vụ án là vụ án hướng dẫn của Viện kiểm sát tối cao. Quy mô lợi ích “lớn” — trục tự do định bậc theo “tránh trách nhiệm hình sự”.

Chọn bỏ vụ án: **bản thân vụ Thế kỷ Gia Duyên không được viết vào thân bài**. Vụ này cuối cùng không đi đến bản án, mạng văn bản phán quyết cùng trang chủ TAND tối cao và VKS tối cao đều không có thông báo hay văn bản nào đối chiếu được từng chữ, thông tin năm ấy toàn bộ đến từ báo chí, theo quy tắc trích dẫn của kho (chỉ trích tài liệu gốc và văn bản chính thức, cấm dẫn lại qua nguồn thứ hai) nên không trích, cách xử lý nhất quán với “vụ sạc điện miễn phí của hãng xe” ở chương 9, “vụ án loại vượt tường lửa” ở mục 11 chương 11. Mục vì thế chỉ viết theo điều luật và chuẩn xử phạt, đồng thời ghi rõ ở phần Ghi chú: “khi viết chương này, trên trang chủ TAND tối cao và VKS tối cao không tìm thấy vụ án kiểm thử thiện chí nào đối chiếu được từng chữ”.

Ranh giới khi trích Kiểm lệ số 36 đã ghi rõ trong phần Ghi chú: vụ này là vụ bán dữ liệu để mưu lợi, trích nó chỉ vì điểm chỉ “vượt ủy quyền tức là xâm nhập”, không dùng để suy ra mức hình phạt của kiểm thử thiện chí.

“Động cơ và báo cáo sau không phải là căn cứ loại tội” là nhận định về yếu tố cấu thành của điều luật (khoản 2 Điều 285 không chứa yếu tố mục đích), không phải kết luận rút ra từ vụ án, và không được đánh dấu là cách nói của cơ quan chính thức.

## Mục 10 (báo cáo lỗ hổng và giới hạn công bố)

| URL | Đối chiếu lại | Điểm chính của nguyên văn |
|---|---|---|
| <https://www.gov.cn/gongbao/content/2021/content_5641351.htm> (bản trên Công báo Quốc vụ viện, văn bản Liên mạng an [2021] số 66 của Bộ Công nghiệp và Công nghệ thông tin) | Có | Điều 2 phạm vi áp dụng gồm “tổ chức hoặc cá nhân hoạt động phát hiện, thu thập, công bố lỗ hổng an toàn sản phẩm mạng”; Điều 4 không được dùng lỗ hổng để hoạt động gây hại an toàn mạng, không được thu thập, bán, công bố thông tin lỗ hổng trái phép; Điều 9 năm điểm (chưa có biện pháp vá thì không được công bố, không được công bố chi tiết lỗ hổng của hệ thống đang dùng, không được cố tình phóng đại và tung hê kích động lừa đảo, không được công bố hoặc cung cấp công cụ chương trình chuyên dùng để lợi dụng lỗ hổng, khi công bố phải đồng thời công bố biện pháp vá hoặc phòng tránh), và quy định không được cung cấp thông tin lỗ hổng chưa công bố cho tổ chức hoặc cá nhân nước ngoài ngoài nhà cung cấp sản phẩm; Điều 10 khuyến khích báo cáo lên nền tảng chia sẻ thông tin mối đe dọa an toàn mạng và lỗ hổng của Bộ Công nghiệp và Công nghệ thông tin, nền tảng lỗ hổng của Trung tâm Thông báo thông tin mạng và an toàn thông tin quốc gia, nền tảng lỗ hổng của Trung tâm Điều phối xử lý khẩn cấp kỹ thuật mạng máy tính quốc gia, kho lỗ hổng của Trung tâm Đánh giá an toàn thông tin Trung Quốc; Điều 14 việc thu thập, công bố vi phạm do Bộ Công nghiệp và Công nghệ thông tin, Bộ Công an xử theo chức trách, trường hợp cấu thành tình huống Luật An toàn mạng quy định thì xử phạt theo luật đó. Thi hành từ 01/9/2021 |
| <https://wap.miit.gov.cn/jgsj/waj/wjfb/art/2021/art_96c2d3de7a6f400ea1d8522b7893db7a.html> (bản của Bộ Công nghiệp và Công nghệ thông tin, đối chiếu chéo Điều 2, 4, 11 đến 14) | Có | Khớp với bản công báo |
| <https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm> (bản sửa đổi năm 2025 của Luật An toàn mạng) | Có | Điều 28: hoạt động chứng nhận an toàn mạng, kiểm tra, đánh giá rủi ro v.v., công bố ra xã hội các thông tin an toàn mạng như lỗ hổng hệ thống, virus máy tính, tấn công mạng, xâm nhập mạng v.v., phải tuân thủ quy định quốc gia liên quan. Chế tài Điều 65: ra lệnh sửa chữa, cảnh cáo, có thể phạt tiền từ 10.000 đến dưới 100.000 yên; không sửa hoặc tình tiết nghiêm trọng thì phạt tiền từ 100.000 đến dưới 1.000.000 yên, và có thể ra lệnh tạm dừng nghiệp vụ liên quan, ngừng kinh doanh để chỉnh đốn, đóng website hoặc ứng dụng, thu hồi giấy phép nghiệp vụ liên quan hoặc thu hồi giấy phép kinh doanh, với người phụ trách trực tiếp và người trực tiếp chịu trách nhiệm khác phạt tiền từ 10.000 đến dưới 100.000 yên |

Xếp mức A: từng điều của quy chế đều đối chiếu được, mức phạt có con số cụ thể. Quy mô lợi ích “trung bình” — trục tự do định bậc theo “tránh xử phạt hành chính”, điểm rơi của mục này là trách nhiệm hành chính của hành vi công bố, khía cạnh hình sự nằm ở mục trước.

Phần giải thích số điều đã viết vào cột Nguồn: “Điều 62 Luật An toàn mạng” mà Điều 14 của “Quy định quản lý lỗ hổng an toàn sản phẩm mạng” dẫn là số điều của bản văn năm 2016, bản quy chế không cập nhật theo đợt sửa luật, hiện nay tương ứng Điều 65.

## Sửa luôn: đánh dấu chưa xác minh ở cột Nguồn của mục 8

Cột Nguồn của mục 8 cũ viết “điều cấm nghề trọn đời ở bản văn 2016 là khoản 2 Điều 63, sau sửa đổi chương trách nhiệm pháp lý có điều chỉnh số điều, lần này chưa đối chiếu từng điều”. Kết quả đối chiếu từng điều lần này:

| Nội dung | Bản văn 2016 | Bản sửa đổi 2025 |
|---|---|---|
| Cấm xâm nhập trái phép mạng của người khác, nhiễu loạn chức năng bình thường của mạng, đánh cắp dữ liệu mạng | Điều 27 | Điều 29 |
| Chế tài của điều trên (tịch thu lợi bất hợp pháp, giam giữ dưới 5 ngày, kèm phạt 50.000 đến 500.000 yên; tình tiết nặng hơn giam giữ 5 đến 15 ngày, kèm phạt 100.000 đến 1.000.000 yên) | khoản 1 Điều 63 | khoản 1 Điều 66 |
| Xử phạt đơn vị có hành vi như khoản trên | — | khoản 2 Điều 66 |
| Cấm nghề trọn đời (bị xử phạt hành chính an ninh công cộng thì trong 5 năm, bị xử phạt hình sự thì trọn đời không được làm công tác quản lý an toàn mạng và các vị trí chủ chốt vận hành mạng) | khoản 2 Điều 63 | **khoản 3 Điều 66** |
| Chứng nhận, kiểm tra an toàn mạng và công bố thông tin lỗ hổng phải tuân thủ quy định quốc gia | Điều 26 | Điều 28 |
| Chế tài của điều trên | Điều 62 | Điều 65 |

Cột Nguồn theo đó đổi thành “Điều 29, 66; bản văn 2016 là Điều 27, 63, cấm nghề trọn đời là khoản 3 Điều 66 sau sửa đổi”, bỏ chữ “lần này chưa đối chiếu từng điều”.

Chú: trong đoạn trích Điều 65 của bản sửa đổi không thấy cụm “tịch thu lợi bất hợp pháp” có trong bản văn 2016, thân bài viết theo nguyên văn bản sửa đổi, không giữ cách nói cũ. Những chỗ còn lại của toàn sách trích Luật An toàn mạng (mục danh tính thật ở dòng 67 của book/26-lam-website-hoac-nen-tang, mục lưu nhật ký ở mục 16 chương 11, docs/lam-nen-tang-can-nhung-giay-to-gi.md) trước đây đã xử theo số điều của bản sửa đổi, lần này không thay đổi.
