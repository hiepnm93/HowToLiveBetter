# Bảng đối chiếu trích dẫn nguồn

File này do `node tools/check-refs.mjs` sinh ra, đừng sửa tay.

“Mục X” trong phần nội dung chính chỉ ghi số mục chứ không ghi nội dung; khi chèn hoặc xóa mục,
các trích dẫn phía sau sẽ bị lệch hàng loạt, mà số mục bị lệch thường vẫn nằm trong phạm vi cho phép,
chỉ kiểm tra vượt biên thì không bắt được. Vì thế tiêu đề mà mỗi chỗ trích dẫn **thực sự trỏ tới**
được trải ra ghi ở đây và đưa vào kho: sau khi sửa các mục thì sinh lại bảng, trong `git diff`
những chỗ số mục không đổi mà tiêu đề đổi chính là các trích dẫn bị xô lệch do dồn số.

Phạm vi quét: phần thân mục và lời dẫn đầu chương của mỗi chương trong `book/`, cộng với các bài dài trong `docs/`.
Bài dài không có “chương này”, số “mục N” để trần đều bị coi là điều luật và bỏ qua, nên trích dẫn trong bài dài
phải ghi đủ “chương X mục Y”. Trong cột “Nguồn”, mục ghi “mục N”, đầu chương ghi “đầu chương”, bài dài ghi tiểu đề gần nhất.

Một rào chắn nữa là **mỏ neo**: văn cảnh trước sau mỗi chỗ trích dẫn phải có một từ khớp với tiêu đề của mục
được trỏ tới (như “cứu trợ y tế” trong “cứu trợ y tế xem mục 11”, hoặc ghi tường minh “xem mục 16 (giấy vay và bảo lãnh)”).
`node tools/check-refs.mjs --check` sẽ đánh rơi những số mục để trần không có mỏ neo — loại trích dẫn đó một khi bị
xô lệch thì diff của bảng đối chiếu cũng chẳng thấy bất thường, chỉ còn dựa vào mỏ neo mà hứng. Trích dẫn theo khoảng
(“xem chương 8 mục 11 đến 14”) là ngoại lệ: nó trỏ cả một khối mục, không thể gắn mỏ neo cho từng mục trong khối,
chỉ dựa vào diff mà hứng.

Mỏ neo có được tính hay không xét theo độ dài và khoảng cách: trong cả câu có ba chữ Hán liền nhau khớp với tiêu đề
(“đồ uống có đường”, “BHYT cư dân”), hoặc trong mệnh đề ngăn bằng dấu phẩy nơi có trích dẫn có hai chữ Hán khớp,
mới tính là mỏ neo thật; chỉ va hai chữ thông dụng bên ngoài mệnh đề (“chính mình”, “công ty”) thì xử như không có mỏ neo.
Lần siết này được bổ sung ngày 2026-09-20: khi chèn mục vào chương 31, “……của khoản vay xem mục 15 trong chương này”
bị dồn lệch trúng mục mới “ở nhà làm từ xa cho công ty ở nước ngoài……thuế thu nhập cá nhân tự khai”, cụm “chính bạn trả”
cách hai dấu phẩy đã giả mạo mỏ neo, mà `--check` lúc đó báo là đạt.

Tổng cộng 626 chỗ trích dẫn.

## 01-dung-chet-som

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 16 | mục 18 trong chương này | Phụ nữ trên 30 tuổi làm sàng lọc ung thư cổ tử cung, ưu tiên xét nghiệm HPV | …chích vắc-xin rồi vẫn phải làm sàng lọc ung thư cổ tử cung, vắc-xin không thay được sàng lọc, xem… |
| mục 25 | mục 32 trong chương này | Ý nghĩ tự sát vừa nảy lên thì trước hết nói với một người bên cạnh, giao nửa tiếng này ra | …dữ liệu theo thước thời gian này, và diễn tiến lâu dài sau khi tự sát chưa thành, xem chương này… |
| mục 25 | mục 33 trong chương này | Đừng coi “cứu được” là phương án dự phòng: sau khi uống thuốc trừ sâu, hít khí gas, cấp cứu giữ được là mạng, giữ không được phổi và não | …sau khi được cứu sống sẽ để lại gì, xem chương này… |
| mục 26 | chương 13 mục 12 | Chảy máu ồ ạt trước hết dùng tay đè chặt vết thương, tay chân đè không nổi thì dùng garo, đồng thời gọi 120 | …cách dùng garo xem… |
| mục 26 | mục 3 trong chương này | Lắp báo khói; ai mùa đông đun than trong nhà hoặc sưởi bằng khí gas thì lắp thêm báo khí carbon monoxide | …báo khói và báo khí carbon monoxide xem chương này… |
| mục 28 | mục 7 trong chương này | Đo huyết áp, cao thì uống thuốc đưa về mức chuẩn | …những thứ cần xét và chương này… |
| mục 28 | mục 8 trong chương này | Sau 35 tuổi chỉ cần thừa cân là đi xét đường huyết lúc đói một lần, bình thường thì cứ ba năm xét lại | …những thứ cần xét và chương này… |
| mục 28 | mục 29 trong chương này | Giảm cân, bỏ thuốc, kiểm soát huyết áp đường huyết, chức năng cương sẽ theo đó tốt lên | …cách cải thiện xem chương này… |
| mục 28 | mục 27 trong chương này | Nước tiểu có máu nhìn thấy bằng mắt thường, dù không đau, dù ngày hôm sau đã hết, cũng phải đi xét một lần | …chương này… |
| mục 29 | chương 2 mục 1 | Bỏ thuốc lá, càng sớm càng tốt | …bỏ thuốc xem… |
| mục 29 | chương 2 mục 33 | Giữ BMI trong 20–25, thừa cân thì giảm | …bỏ thuốc xem chương 2 mục 1 (bỏ thuốc lá, càng sớm càng tốt), giảm cân xem… |
| mục 29 | chương 28 mục 4 | Đừng mua thuốc giảm cân, cà phê giảm cân, kẹo giảm béo và mận enzyme hứa hẹn “gầy nhanh” | …loại “thực phẩm bảo vệ sức khỏe” bán trên mạng hay lén pha thành phần này, liều lượng không rõ, cách phân biệt xem… |
| mục 29 | mục 7 trong chương này | Đo huyết áp, cao thì uống thuốc đưa về mức chuẩn | …bỏ thuốc xem (bỏ thuốc lá, càng sớm càng tốt), giảm cân xem (giữ BMI trong 20–25), huyết áp xem chương này… |
| mục 32 | chương 3 mục 19 | Khi tâm trạng xuống thấp, làm trước mấy việc hiệu quả chi phí cao nhất: vận động, tắm nắng, ngủ đúng giờ, tìm người tâm sự, gọi 12356 | …khi tâm trạng xuống thấp làm gì trước xem… |
| mục 32 | chương 8 mục 15 | Người bên cạnh nói ra “ai cũng đừng hòng sống tốt”, “dẫn con đi cùng”, đừng coi là lời giận: thân thuộc gần có thể trực tiếp đưa đi khám, công an nhận được báo án cũng phải quản | …khi người bên cạnh lộ ra ý nghĩ ấy bạn có thể làm gì, xem… |
| mục 32 | mục 25 trong chương này | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …đưa phương tiện gây chết ra xa và 12356 xem chương này… |
| mục 32 | mục 33 trong chương này | Đừng coi “cứu được” là phương án dự phòng: sau khi uống thuốc trừ sâu, hít khí gas, cấp cứu giữ được là mạng, giữ không được phổi và não | …di chứng sau khi được cứu sống xem chương này… |
| mục 33 | chương 13 mục 19 | Còi báo khí carbon monoxide kêu, hoặc cả nhà cùng lúc đau đầu buồn nôn, ra khỏi nhà trước rồi mới gọi điện | …xử trí hiện trường khi nhiễm khí carbon monoxide xem… |
| mục 33 | chương 13 mục 20 | Uống nhầm chất tẩy rửa, thuốc trừ sâu, thuốc: đừng gây nôn, cầm theo chai lọ đi khám ngay; bắn vào mắt hoặc da thì xả nước sạch thật nhiều 15 phút | …uống nhầm thuốc trừ sâu và thuốc đừng gây nôn, cầm theo chai lọ đi khám, xem… |
| mục 33 | mục 25 trong chương này | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …trong nhà không tích trữ thuốc trừ sâu và thuốc ngủ xem chương này… |
| mục 34 | chương 17 mục 8 | Nhà có người nằm lâu, coi loét tì đè là kẻ thù số một: trang bị nệm khí điện, trở mình đúng giờ, mỗi ngày xem một lượt chỗ xương nhô lên | …loét tì đè là thứ cần canh nhất trong thời gian nằm lâu xem… |
| mục 34 | chương 13 mục 11 | Một chân đột nhiên sưng lên, căng, ấn vào đau, đi khám sớm nhất có thể; kèm thêm đột nhiên hụt hơi hoặc đau ngực thì gọi 120 ngay | …huyết khối tĩnh mạch sâu và thuyên tắc phổi xem… |
| mục 34 | mục 32 trong chương này | Ý nghĩ tự sát vừa nảy lên thì trước hết nói với một người bên cạnh, giao nửa tiếng này ra | …khi ý nghĩ nảy lên phải làm gì xem chương này… |
| mục 34 | mục 33 trong chương này | Đừng coi “cứu được” là phương án dự phòng: sau khi uống thuốc trừ sâu, hít khí gas, cấp cứu giữ được là mạng, giữ không được phổi và não | …hậu quả của ngộ độc xem chương này… |
| mục 35 | chương 9 mục 22 | Đừng bán bộ phận cơ thể của mình, cũng đừng giúp người khác tìm người hiến: thận đến tay chỉ hơn 20.000 yên, cùng quả thận đó chuyển tay bán 200.000 yên, tiền bị tịch thu còn bị phạt theo giá trị giao dịch 10 đến 20 lần | …giới hạn thân quyến của hiến tạng hợp pháp, tiền phạt và trách nhiệm hình sự xem… |
| mục 35 | chương 16 mục 1 | Uống thuốc đủ theo y lệnh, đừng thấy khoẻ là ngừng | …người đã phải lọc máu, thanh toán trực tiếp khác tỉnh và dùng thuốc dài hạn xem… |
| mục 35 | chương 16 mục 2 | Làm chứng nhận bệnh mãn tính, đặc biệt ngoại trú trước rồi mới làm đăng ký khám chữa bệnh khác tỉnh; cao huyết áp, đái tháo đường, hóa xạ trị, lọc máu, chống thải ghép sẽ được thanh toán trực tiếp ở nơi khác | …người đã phải lọc máu, thanh toán trực tiếp khác tỉnh và dùng thuốc dài hạn xem… |
| mục 37 | chương 9 mục 13 | Majhông, bài tây chơi được, không ăn hoa hồng, không làm cái, không tổ bàn thu tiền, không chơi cờ bạc trên mạng | …ranh giới pháp lý của cờ bạc xem… |
| mục 37 | chương 8 mục 44 | Người trong nhà đánh bạc mắc nợ, đừng vội thay anh ta trả: nợ bạc pháp luật không bảo vệ, tiền vay vì bạc cũng không tính là nợ chung vợ chồng | …người nhà mắc nợ bạc có nên trả thay không, xem… |
| mục 37 | mục 32 trong chương này | Ý nghĩ tự sát vừa nảy lên thì trước hết nói với một người bên cạnh, giao nửa tiếng này ra | …sau khi ý nghĩ tự sát nảy lên phải làm sao, xem chương này… |
| mục 38 | chương 13 mục 38 | Có thể đã bị phơi nhiễm HIV: trong 72 giờ đi lấy thuốc chặn, càng sớm càng tốt | …đã xảy ra hành vi nguy cơ cao, cách cứu lại xem… |
| mục 38 | mục 30 trong chương này | Quan hệ tình dục dùng bao cao su suốt quá trình, không dùng chung dụng cụ tiêm với người khác | …nó không phòng được giang mai, lậu các bệnh xã hội ấy, bao cao su vẫn phải dùng, xem chương này… |

## 02-dung-chet-tu-tu

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 1 | mục 3 trong chương này | Cai thuốc đừng chỉ dựa vào nhịn, trước tiên đi lấy thuốc: tỷ lệ thành công có thể tăng hơn gấp đôi | …… |
| mục 1 | mục 4 trong chương này | Định một ngày bỏ thuốc, tới ngày ấy ngưng một thể, đừng giảm dần trước | …mục 3 (thuốc cai thuốc lá),… |
| mục 1 | mục 5 trong chương này | Đến phòng khám cai thuốc, hoặc gọi 12320 hỏi nơi ở có dịch vụ cai thuốc không | …mục 3 (thuốc cai thuốc lá), mục 4 (định một ngày bỏ thuốc),… |
| mục 1 | mục 6 trong chương này | Bỏ không được hẵng cân nhắc thuốc lá điện tử, người vốn không hút đừng đụng tới | …mục 3 (thuốc cai thuốc lá), mục 4 (định một ngày bỏ thuốc), mục 5 (đến phòng khám cai thuốc),… |
| mục 2 | mục 1 trong chương này | Bỏ thuốc lá, càng sớm càng tốt | …tự mình bỏ thuốc xem chương này… |
| mục 3 | mục 4 trong chương này | Định một ngày bỏ thuốc, tới ngày ấy ngưng một thể, đừng giảm dần trước | …thuốc chỉ giải quyết cái khó chịu mấy tuần của hội cai, không giải quyết được “hoàn cảnh muốn hút”, nên phải cùng chương này… |
| mục 3 | mục 5 trong chương này | Đến phòng khám cai thuốc, hoặc gọi 12320 hỏi nơi ở có dịch vụ cai thuốc không | …thuốc chỉ giải quyết cái khó chịu mấy tuần của hội cai, không giải quyết được “hoàn cảnh muốn hút”, nên phải cùng mục 4 trong chương này (định một ngày bỏ thuốc),… |
| mục 5 | mục 3 trong chương này | Cai thuốc đừng chỉ dựa vào nhịn, trước tiên đi lấy thuốc: tỷ lệ thành công có thể tăng hơn gấp đôi | …thuốc cần phối hợp xem chương này… |
| mục 6 | chương 22 mục 4 | Không ăn kẹo và đồ ăn vặt người lạ đưa, không uống đồ uống từng rời khỏi tầm mắt, không nhận điếu thuốc điện tử người khác chìa ra | …“thuốc lá điện tử gây phê” tẩm cannabinoid tổng hợp chính là phát tán theo lối đó, xem… |
| mục 6 | mục 3 trong chương này | Cai thuốc đừng chỉ dựa vào nhịn, trước tiên đi lấy thuốc: tỷ lệ thành công có thể tăng hơn gấp đôi | …về thứ tự hẵng thử trước các mục trong chương này… |
| mục 11 | mục 14 trong chương này | Mỗi tuần cộng dồn 150–300 phút vận động cường độ trung bình, đi bộ nhanh là được | …mục này và… |
| mục 13 | mục 39 trong chương này | Thức khuya xong thì tối hôm sau bù ngủ liền, đừng dồn sang cuối tuần | …thức khuya xong bù thế nào xem chương này… |
| mục 14 | mục 11 trong chương này | Mỗi ngày đi đủ 7000–8000 bước | …mục này và… |
| mục 20 | mục 22 trong chương này | Muốn bớt uống rượu, trước tiên đếm ra một tuần đã uống bao nhiêu, rồi tìm bác sĩ nói chuyện vài phút | …muốn bớt uống làm sao xem chương này… |
| mục 20 | mục 21 trong chương này | Người uống rượu mỗi ngày, ngưng một tí là run tay hồi hộp, đừng tự cai gắt | …người uống mỗi ngày không được tự cai gắt, xem chương này… |
| mục 21 | mục 20 trong chương này | Uống ít rượu bia hoặc không uống | …uống bao nhiêu mỗi tuần tính là nhiều xem chương này… |
| mục 21 | mục 22 trong chương này | Muốn bớt uống rượu, trước tiên đếm ra một tuần đã uống bao nhiêu, rồi tìm bác sĩ nói chuyện vài phút | …uống bao nhiêu mỗi tuần tính là nhiều xem mục 20 trong chương này (uống ít rượu bia hoặc không uống), muốn bớt uống làm sao xem chương này… |
| mục 22 | mục 21 trong chương này | Người uống rượu mỗi ngày, ngưng một tí là run tay hồi hộp, đừng tự cai gắt | …đã xuất hiện phản ứng cai xem chương này… |
| mục 29 | mục 7 trong chương này | Không uống đồ uống có đường, đổi sang loại không đường cũng chưa hẳn là giải quyết | …thứ hai là nó và đồ uống có đường, thịt chế biến sẵn (… |
| mục 29 | mục 19 trong chương này | Ăn ít thịt chế biến sẵn (giăm bông, thịt xông khói, xúc xích, thịt hộp) | …thứ hai là nó và đồ uống có đường, thịt chế biến sẵn (… |
| mục 29 | mục 7 trong chương này | Không uống đồ uống có đường, đổi sang loại không đường cũng chưa hẳn là giải quyết | …vậy trước hết… |
| mục 29 | mục 19 trong chương này | Ăn ít thịt chế biến sẵn (giăm bông, thịt xông khói, xúc xích, thịt hộp) | …vậy trước hết… |
| mục 33 | chương 6 mục 26 | Đừng trông ăn sáng hay nhịn ăn gián đoạn 16:8 giúp bạn kiểm soát cân nặng, giờ ăn hãy chọn giờ bạn duy trì được lâu dài | …người muốn giảm cân không cần dốc sức vào giờ ăn, ăn sáng và nhịn 16:8 đều không có thêm lợi, xem… |
| mục 38 | chương 3 mục 11 | Chiều buồn thì ngủ 10 phút, đừng ngủ nửa tiếng | …ngủ trưa ngắn trấn tinh thần thế nào xem… |
| mục 38 | mục 13 trong chương này | Mỗi đêm ngủ khoảng 7 tiếng, giờ giấc cố định | …đêm ngủ bao lâu xem chương này… |
| mục 39 | chương 3 mục 2 | Cố định giờ thức dậy, cuối tuần cũng vậy | …câu cố định giờ dậy cả cuối tuần xem… |
| mục 39 | mục 13 trong chương này | Mỗi đêm ngủ khoảng 7 tiếng, giờ giấc cố định | …“ngày thường thức, cuối tuần bù” cố định thành nhịp hằng tuần, gọi là lệch múi xã hội, bản thân nó có dính đến bệnh tim mạch, xem chương này… |
| mục 40 | mục 1 trong chương này | Bỏ thuốc lá, càng sớm càng tốt | …bỏ thuốc xem chương này… |
| mục 40 | mục 12 trong chương này | Có cao huyết áp, mỡ máu cao thì uống thuốc đều theo đơn bác sĩ, đừng tự ý ngưng | …bỏ thuốc xem mục 1 trong chương này (bỏ thuốc lá, càng sớm càng tốt), huyết áp và mỡ máu xem chương này… |
| mục 40 | mục 39 trong chương này | Thức khuya xong thì tối hôm sau bù ngủ liền, đừng dồn sang cuối tuần | …huyết áp và mỡ máu xem mục 12 trong chương này (có cao huyết áp, mỡ máu cao thì uống thuốc đều theo đơn bác sĩ), sau ca đêm bù ngủ thế nào xem chương này… |

## 03-dung-lang-phi-suc-luc

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | mục 20 trong chương này | Coi cảnh sát, bác sĩ, nhân viên quầy là người đi làm theo quy tắc, đừng coi là một vai diễn: cái đẩy được việc là giấy tờ và thời hạn, không phải cảm xúc | …… |
| đầu chương | mục 15 trong chương này | Coi những suy nghĩ kiểu “chắc chắn mọi chuyện sẽ tệ hơn” là triệu chứng, đừng coi là sự thật | …… |
| đầu chương | mục 23 trong chương này | Coi suy nghĩ “người khác đòi tôi phải hoàn hảo” là triệu chứng, đừng coi là sự thật | …mục 15 (coi suy nghĩ bi quan là triệu chứng) và… |
| mục 2 | chương 2 mục 39 | Thức khuya xong thì tối hôm sau bù ngủ liền, đừng dồn sang cuối tuần | …thỉnh thoảng thức khuya xong bù thế nào, xem… |
| mục 4 | mục 3 trong chương này | Mỗi đêm ngủ đủ 7 đến 8 giờ, đừng coi 6 giờ là đủ | …bớt caffeine đổi lại là thời lượng ngủ, và… |
| mục 6 | mục 1 trong chương này | Tắt thông báo không thiết yếu, khi làm việc để điện thoại ngoài tầm mắt | …lo thứ hai phải phối hợp… |
| mục 6 | mục 5 trong chương này | Đổi email và tin nhắn sang xử lý theo lô vài khung giờ cố định mỗi ngày | …lo thứ hai phải phối hợp mục 1 (tắt thông báo không thiết yếu) và… |
| mục 9 | mục 3 trong chương này | Mỗi đêm ngủ đủ 7 đến 8 giờ, đừng coi 6 giờ là đủ | …cái giá bản thân của thức khuya xem chương này… |
| mục 11 | chương 2 mục 38 | Giữ giấc ngủ trưa trong nửa tiếng, đừng vượt một tiếng, mà phải ngủ một hai tiếng mới chịu nổi thì đi kiểm tra nguyên nhân | …ngủ trưa quá một tiếng ngược lại gắn với tử suất và nguy cơ bệnh mạch vành cao hơn, xem… |
| mục 19 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …mức trung bình – nặng, có ý nghĩ tự sát thì phải đi khám, gọi 12356 trước (xem… |
| mục 20 | chương 8 mục 39 | Báo công an tại chỗ đòi giấy tiếp nhận vụ án, không khởi án phải thông báo bằng văn bản: trong 7 ngày có thể xin xem xét lại, thêm 7 ngày xin tái xét, viện kiểm sát có thể thông báo công an khởi án | …toàn bộ con số trong mục này lấy từ… |
| mục 20 | chương 24 mục 8 | Bệnh thương cấp tính nguy nặng đi thẳng bàn tiền kiểm phân loại cửa cấp cứu, đừng đi xếp hàng quầy đăng ký | …mức ưu tiên hợp pháp đều viết ra nơi rõ ràng, ví dụ cấp cứu xếp theo mức độ bệnh, không theo đến trước – sau (… |
| mục 20 | chương 24 mục 12 | Cảm ơn bác sĩ đã cứu bạn, đi thư cảm ơn, cờ tri ân và đánh giá mức độ hài lòng, đừng đi bao lì xì: chuẩn mực cấm là tiền của, không phải lòng cảm tạ | …muốn cảm ơn bác sĩ đã cứu bạn, đi thư cảm ơn và đánh giá mức độ hài lòng, xem… |
| mục 20 | chương 8 mục 40 | Đừng cho người xử án, thi hành pháp luật tiền bạc thẻ từ: đưa hối lộ chính mình cũng bị tuyên án, đưa hối lộ cho công tác viên giám sát, hành pháp, tư pháp còn bị xử nặng | …muốn “đưa chút gì cho người ta để tâm hơn”, với người xử án thi hành là tội hối lộ, và là loại luật ghi rõ xử nặng, xem… |
| mục 21 | chương 4 mục 15 | Đặt giới hạn cứng cho video ngắn và lướt màn hình vô mục đích | …sổ tổng thời gian màn hình xem… |
| mục 21 | chương 4 mục 16 | Không xem truyền hình và tin tức cuộn liên tục, thông tin cần thì hẹn giờ xem gộp | …sổ tổng thời gian màn hình xem… |
| mục 21 | chương 6 mục 23 | Đừng trông mua sắm cải thiện tâm trạng hoặc cảm giác vị thế | …dùng mua sắm lấy lại cảm giác vị thế xem… |
| mục 21 | chương 6 mục 24 | Đừng bỏ thêm tiền đổi nhà, đổi xe, đổi vòng xã giao chỉ để “dời lên một bậc trong vòng người xung quanh” | …bỏ thêm tiền vì “dời lên một bậc” xem… |
| mục 21 | mục 19 trong chương này | Khi tâm trạng xuống thấp, làm trước mấy việc hiệu quả chi phí cao nhất: vận động, tắm nắng, ngủ đúng giờ, tìm người tâm sự, gọi 12356 | …khi tâm trạng xuống thấp làm gì trước, xem chương này… |
| mục 23 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …có ý nghĩ tự sát gọi 12356 trước, đưa phương tiện gây chết ra xa, xem… |
| mục 23 | chương 8 mục 15 | Người bên cạnh nói ra “ai cũng đừng hòng sống tốt”, “dẫn con đi cùng”, đừng coi là lời giận: thân thuộc gần có thể trực tiếp đưa đi khám, công an nhận được báo án cũng phải quản | …khi người bên cạnh lộ ra ý nghĩ ấy bạn có thể làm gì, xem… |
| mục 23 | chương 30 mục 8 | Cho trẻ 12–18 tuổi làm một lần sàng lọc trầm cảm, đừng lấy bài đánh giá tâm lý của trường làm chẩn đoán | …sàng lọc trầm cảm của trẻ xem… |
| mục 23 | mục 15 trong chương này | Coi những suy nghĩ kiểu “chắc chắn mọi chuyện sẽ tệ hơn” là triệu chứng, đừng coi là sự thật | …nó và… |
| mục 24 | chương 22 mục 9 | Muốn ổn lại ngay tại chỗ, dùng 5 phút “thở than tuần hoàn”: hít hai nhịp, thở ra kéo dài | …cách dùng ngay tại chỗ xem… |
| mục 24 | chương 22 mục 7 | Tâm trạng tệ thì cứ đi bộ hoặc chạy, cỡ hiệu ứng chống trầm cảm (độ lớn tác dụng) tỉ lệ thuận với cường độ | …về lâu dài, nó có hiệu quả với tâm trạng xuống thấp, xem… |
| mục 24 | chương 8 mục 43 | Bị bạo lực gia đình: trước báo công an để lại ghi chép ra hiện trường, rồi ra tòa xin lệnh bảo vệ an toàn thân xác, không cần ly hôn trước, cũng không mất phí | …lúc ấy thứ phải xử không phải cảm xúc của bạn, xem… |
| mục 24 | mục 18 trong chương này | Khi giận thì rời chỗ trước, coi đối phương như thời tiết chứ đừng coi như kẻ thù | …cách dùng ngay tại chỗ xem (thở than tuần hoàn), còn có chương này… |
| mục 25 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …viết mà càng viết càng khó chịu thì dừng lại, đổi sang gọi 12356, xem… |

## 04-dung-lang-phi-thoi-gian

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 2 | mục 3 trong chương này | Khi quyết định có tiếp tục hay không, chỉ nhìn đầu tư tương lai và lợi nhuận tương lai, đừng nhìn đã đầu tư bao nhiêu | …khi phán đoán chỉ nhìn đầu tư tương lai và lợi nhuận tương lai, xem… |
| mục 9 | mục 1 trong chương này | Viết “định làm” thành “mấy giờ, ở đâu, gặp hoàn cảnh gì thì làm gì” | …động tác cụ thể ở chương này… |
| mục 9 | mục 7 trong chương này | Chia nhiệm vụ lớn thành các nhiệm vụ con rồi mới ước thời gian, rồi mới bắt tay làm | …động tác cụ thể ở mục 1 trong chương này (viết “định làm” thành “mấy giờ, ở đâu, gặp hoàn cảnh gì thì làm gì”),… |
| mục 9 | mục 8 trong chương này | Với việc không có hạn chót từ bên ngoài, tự đặt cho nó một ngày | …chương mục 1 (viết “định làm” thành “mấy giờ, ở đâu, gặp hoàn cảnh gì thì làm gì”), mục 7 (chia nhiệm vụ lớn thành các nhiệm vụ con),… |
| mục 10 | chương 3 mục 1 | Tắt thông báo không thiết yếu, khi làm việc để điện thoại ngoài tầm mắt | …việc để điện thoại ngoài tầm mắt có người trực tiếp đo qua, xem… |
| mục 11 | chương 2 mục 3 | Cai thuốc đừng chỉ dựa vào nhịn, trước tiên đi lấy thuốc: tỷ lệ thành công có thể tăng hơn gấp đôi | …bản thân bỏ thuốc cai thế nào xem… |
| mục 12 | mục 1 trong chương này | Viết “định làm” thành “mấy giờ, ở đâu, gặp hoàn cảnh gì thì làm gì” | …muốn việc lặp lại thật sự xảy ra, buộc động tác vào một hoàn cảnh cố định, xem chương này… |
| mục 13 | chương 3 mục 19 | Khi tâm trạng xuống thấp, làm trước mấy việc hiệu quả chi phí cao nhất: vận động, tắm nắng, ngủ đúng giờ, tìm người tâm sự, gọi 12356 | …trì hoãn cùng lúc kèm tâm trạng rõ ràng xuống thấp hoặc lo âu, trước theo… |
| mục 13 | mục 10 trong chương này | Đặt thứ cần dùng ngay tay với, đem thứ không muốn đụng đến ra xa, đừng trông cậy nhịn tại chỗ | …kiểu kiểm soát kích thích nằm ở chương này… |
| mục 15 | chương 3 mục 21 | Đừng biến “người khác sống ra sao” thành bài đọc mỗi ngày: đặt giới hạn hoặc tắt các ứng dụng lướt động thái của người đồng trang lứa | …trong đó loại “lướt xem người khác sống ra sao” có thử nghiệm ngẫu nhiên đo được tiết kiệm bao nhiêu, tâm trạng đổi ra sao, xem… |

## 05-dung-lang-phi-tien

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 8 | mục 9 trong chương này | Con nạp tiền, thưởng bằng điện thoại: khoản chi lớn của trẻ từ đủ 8 tuổi trở lên mà cha mẹ không công nhận thì có thể đòi trả lại | …văn bản gốc Điều 19, Điều 145 Bộ luật Dân sự, đã ở… |
| mục 10 | chương 8 mục 2 | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …tiền bị kẻ lừa lừa lấy thì không áp dụng điều đó, chỉ theo… |
| mục 10 | chương 8 mục 3 | Ghi nhớ quy tắc cứng chống lừa đảo: cuộc gọi đến chớ tin nhẹ, thông tin không tiết lộ, liên kết không bấm, chuyển tiền nhiều xác minh, bảy kiểu lừa đảo phổ biến nhất đều là hình dáng này | …bản người lớn của giả mạo người quen, còn có AI đổi mặt, xem… |
| mục 10 | chương 8 mục 4 | Trong video thấy mặt, trong điện thoại nghe được giọng nói đều không tính là đã xác minh; liên quan chuyển tiền thì dập máy trước, dùng số cũ trong danh bạ của mình gọi lại | …bản người lớn của giả mạo người quen, còn có AI đổi mặt, xem… |
| mục 10 | mục 9 trong chương này | Con nạp tiền, thưởng bằng điện thoại: khoản chi lớn của trẻ từ đủ 8 tuổi trở lên mà cha mẹ không công nhận thì có thể đòi trả lại | …phải cùng… |
| mục 12 | chương 16 mục 3 | Tái khám theo khoảng cách bác sĩ đưa ra, ghi chỉ số mỗi lần vào cùng một cuốn sổ | …thứ hai, bệnh mãn tính đổi thuốc đừng phán theo cảm giác, theo… |
| mục 16 | mục 7 trong chương này | Không dùng trả tối thiểu thẻ tín dụng, không vì tiêu dùng mà mở trả góp hoặc vay tiêu dùng | …dùng vay tiêu dùng hay rút thẻ tín dụng để đầu tư cũng là đòn bẩy khác kiểu, lãi của chúng xem chương này… |
| mục 19 | mục 17 trong chương này | Dùng quỹ chỉ số nền rộng thay quỹ chủ động làm vị thế nền dài hạn (phần tiền cầm lâu không bán) | …mua quỹ chỉ số nền rộng (xem chương này… |
| mục 20 | mục 27 trong chương này | Trước hết để dành quỹ khẩn cấp bằng 3 đến 6 tháng chi phí sống, đặt ở nơi rút ra được bất cứ lúc nào | …đừng vì “săn khuyến mãi” mà khóa quỹ khẩn cấp vào (quỹ khẩn cấp xem… |
| mục 20 | mục 17 trong chương này | Dùng quỹ chỉ số nền rộng thay quỹ chủ động làm vị thế nền dài hạn (phần tiền cầm lâu không bán) | …quy tắc chọn sản phẩm và chương này… |
| mục 20 | mục 18 trong chương này | Trong cùng loại quỹ, ưu tiên quỹ có phí thấp | …quy tắc chọn sản phẩm và chương này… |
| mục 20 | mục 2 trong chương này | Mỗi năm từ tháng 3 đến tháng 6 làm một lần quyết toán thuế thu nhập cá nhân, các khoản trừ đặc biệt phần nào phải điền thì điền | …một là khấu trừ ngay lúc công ty khoán thuế khi trả lương trong năm, hai là khấu trừ lúc quyết toán năm sau (quyết toán xem… |
| mục 27 | mục 7 trong chương này | Không dùng trả tối thiểu thẻ tín dụng, không vì tiêu dùng mà mở trả góp hoặc vay tiêu dùng | …lãi tính theo năm của vay tiêu dùng và trả tối thiểu thẻ tín dụng, xem chương này… |
| mục 29 | mục 32 trong chương này | Trước khi mua đồ lớn, tra trước thông báo giám sát toàn quốc, chứng nhận 3C và nhãn năng lượng | …tra được chỉ có kết quả giám sát chung (xem… |
| mục 29 | mục 23 trong chương này | Mua sắm lớn không thiết yếu đặt thời gian nguội 24 giờ, mua trên mạng tận dụng hoàn trả 7 ngày không lý do | …hoàn trả 7 ngày không lý do xem chương này… |
| mục 31 | chương 8 mục 22 | Mua sắm trên mạng, giao dịch đồ cũ bị lừa, trước khiếu nại nền tảng, rồi báo công an, rồi mới tính có đáng khởi kiện không | …đối phương ngoan cố không nhận, chỉ còn đường khởi kiện, kiện số nhỏ tính thế nào xem… |
| mục 31 | chương 12 mục 8 | Làm thực phẩm trước xem mình rơi vào bậc nào: sản xuất và làm ăn uống cần giấy phép, chỉ bán thực phẩm đóng gói sẵn thì chuyển sang đăng ký, bán thịt rau tươi không cần giấy | …chi tiết xem… |
| mục 31 | chương 12 mục 9 | Đóng túi bán là thực phẩm đóng gói sẵn: trên nhãn, ngày sản xuất, hạn dùng, bảng thành phần thiếu một thứ cũng không được | …chi tiết xem… |
| mục 31 | chương 12 mục 10 | Thực phẩm thường không được nói chữa được bệnh: nhãn, tờ hướng dẫn, quảng cáo và kịch bản livestream đều tính | …chi tiết xem… |
| mục 31 | chương 12 mục 11 | Ngành thực phẩm có ranh giới hình sự: bán thịt chết bệnh, hàng vượt chuẩn là đủ tội, pha thứ có độc có hại thì không xem số tiền, khởi điểm 5 năm tù | …chi tiết xem… |
| mục 31 | mục 29 trong chương này | Mua trên mạng tin quy tắc nền tảng và điều luật, đừng tin streamer và “đánh giá tốt” | …lừa đảo hàng thường đền gấp ba, dưới 500 yên tính bằng 500 yên, xem chương này… |
| mục 34 | mục 32 trong chương này | Trước khi mua đồ lớn, tra trước thông báo giám sát toàn quốc, chứng nhận 3C và nhãn năng lượng | …cách tra chung khi mua đồ lớn xem chương này… |
| mục 34 | mục 29 trong chương này | Mua trên mạng tin quy tắc nền tảng và điều luật, đừng tin streamer và “đánh giá tốt” | …phòng livestream có chuyện thì tìm ai, xem… |
| mục 34 | mục 30 trong chương này | Đồ mua trong phòng livestream có trục trặc, trước hết đòi nền tảng cho thông tin người bán và người bán hàng, nền tảng bắt buộc phải cho | …phòng livestream có chuyện thì tìm ai, xem… |
| mục 35 | chương 6 mục 23 | Đừng trông mua sắm cải thiện tâm trạng hoặc cảm giác vị thế | …vòng lặp “mua về thì nhạt đi, nên lại mua tiếp”, xem… |
| mục 35 | mục 9 trong chương này | Con nạp tiền, thưởng bằng điện thoại: khoản chi lớn của trẻ từ đủ 8 tuổi trở lên mà cha mẹ không công nhận thì có thể đòi trả lại | …con dùng điện thoại nạp tiền thưởng hoàn trả thế nào, xem chương này… |
| mục 35 | mục 23 trong chương này | Mua sắm lớn không thiết yếu đặt thời gian nguội 24 giờ, mua trên mạng tận dụng hoàn trả 7 ngày không lý do | …thời gian nguội 24 giờ của mua sắm lớn không thiết yếu, xem… |
| mục 36 | chương 12 mục 9 | Đóng túi bán là thực phẩm đóng gói sẵn: trên nhãn, ngày sản xuất, hạn dùng, bảng thành phần thiếu một thứ cũng không được | …khi bạn mở cửa hàng bán thực phẩm đóng túi phải ghi nhãn thế nào, xem… |
| mục 37 | mục 15 trong chương này | Không giao dịch cổ phiếu thường xuyên | …mục này quản chuyện “bán hay không bán”,… |
| mục 37 | mục 19 trong chương này | Đừng dồn tiền vào một cổ phiếu, một nền tảng, một căn nhà | …sai là ở chỗ coi nó là cách lật kèo, tác dụng thực tế của nó là làm tăng phần tiền bạn dồn vào đúng cổ phiếu ấy, xem… |
| mục 38 | mục 15 trong chương này | Không giao dịch cổ phiếu thường xuyên | …trong cơn thị trường này tài khoản hộ gia đình một năm xoay gần 18 lần,… |
| mục 39 | chương 21 mục 6 | Rút tiền mặt ở nước ngoài mỗi năm không quá 100.000 yên nhân dân tệ, tính gộp trên tất cả các thẻ mang tên bạn | …rút tiền mặt ở nước ngoài còn có hạn ngạch riêng, xem… |
| mục 39 | mục 17 trong chương này | Dùng quỹ chỉ số nền rộng thay quỹ chủ động làm vị thế nền dài hạn (phần tiền cầm lâu không bán) | …mua QDII cũng theo… |
| mục 39 | mục 19 trong chương này | Đừng dồn tiền vào một cổ phiếu, một nền tảng, một căn nhà | …mua QDII cũng theo mục 17 (quỹ chỉ số nền rộng) và… |
| mục 40 | chương 7 mục 20 | Trước bệnh nặng, ngoài BHYT cơ bản sắm thêm một bảo hiểm y tế kỳ một năm hoặc bảo hiểm bệnh nặng, nhìn cho kỹ bốn chữ “cam kết gia hạn” | …bảo hiểm y tế kỳ một năm xem… |
| mục 40 | chương 21 mục 4 | Mua một hợp đồng bảo hiểm gồm chữa bệnh ở nước ngoài và vận chuyển y tế, đừng chỉ mua bảo hiểm trễ chuyến bay | …người ra nước ngoài xem… |
| mục 40 | mục 26 trong chương này | Mua đủ bảo hiểm trách nhiệm bên thứ ba: hạn mức bảo hiểm bắt buộc thống nhất toàn quốc mà không cao, phần vượt quá từ túi nhà bạn trả | …người có xe xem chương này… |
| mục 40 | mục 41 trong chương này | Nhà có người sống nhờ thu nhập của bạn, trước hết mua bảo hiểm nhân thọ kỳ hạn cho người kiếm tiền, đừng mua cho con trước | …nhà có người sống nhờ thu nhập của bạn, xem chương này… |
| mục 40 | chương 7 mục 9 | BHYT cư dân mỗi năm 400 yên đừng để đứt, hộ khó khăn được giảm miễn | …BHYT cơ bản là bảo hiểm xã hội, không xét theo phép tính này, vẫn phải đóng, xem… |
| mục 40 | mục 27 trong chương này | Trước hết để dành quỹ khẩn cấp bằng 3 đến 6 tháng chi phí sống, đặt ở nơi rút ra được bất cứ lúc nào | …tổn thất nhỏ dựa vào gì chống lưng, xem chương này… |
| mục 41 | chương 7 mục 20 | Trước bệnh nặng, ngoài BHYT cơ bản sắm thêm một bảo hiểm y tế kỳ một năm hoặc bảo hiểm bệnh nặng, nhìn cho kỹ bốn chữ “cam kết gia hạn” | …khai báo thật và “cam kết gia hạn” xem thế nào, xem… |
| mục 42 | mục 25 trong chương này | Bảo hiểm ưu tiên mua loại mất phí, coi “hoàn trả” “cổ tức” là phần không bảo đảm | …bảo hiểm tiết kiệm, bảo hiểm cổ tức nộp tiền nhiều, kỳ cân nhắc đáng dùng nhất, xem chương này… |
| mục 43 | mục 42 trong chương này | Vừa ký bảo hiểm nhân thọ trên một năm mà lại hối hận, hủy trong thời gian cân nhắc, phí bảo hiểm hoàn gần như toàn bộ | …đã ký rồi, trong 15 ngày theo chương này… |
| mục 43 | mục 44 trong chương này | Muốn hủy bảo hiểm thì tự tìm công ty bảo hiểm làm, đừng tìm “trung gian hủy bảo hiểm”, thấy bị đánh lừa gọi 12378 khiếu nại | …thấy bị đánh lừa khiếu nại thế nào, xem chương này… |
| mục 44 | mục 42 trong chương này | Vừa ký bảo hiểm nhân thọ trên một năm mà lại hối hận, hủy trong thời gian cân nhắc, phí bảo hiểm hoàn gần như toàn bộ | …tự hủy trong kỳ cân nhắc, xem chương này… |
| mục 45 | chương 25 mục 9 | Tiền nằm rải ở nhiều nơi phải lần lượt đi nhận: số dư quỹ tiết kiệm nhà ở, chế độ bảo hiểm xã hội, chế độ tai nạn lao động | …sau khi người qua đời, lần lượt đi nhận tiền ở từng nơi, xem… |
| mục 45 | chương 29 mục 13 | Đừng lấy cái chết làm cách trả nợ: bảo hiểm nhân thọ trong hai năm không trả tiền, tai nạn lao động không công nhận, nợ vẫn trừ từ di sản trước | …con đường lấy cái chết trả nợ đi không thông, xem… |

## 06-danh-sach-dieu-khong-nen

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 10 | chương 1 mục 20 | Người có bệnh tim mạch và người già mỗi năm chích vắc-xin cúm | …dẫn người già đi chích vắc-xin cúm hằng năm, xem… |
| mục 10 | chương 1 mục 21 | Sau 50 tuổi chích vắc-xin zona | …vắc-xin zona sau 50 tuổi xem… |
| mục 10 | chương 1 mục 22 | Trên 65 tuổi chích vắc-xin phế cầu | …vắc-xin phế cầu trên 65 tuổi xem… |
| mục 10 | chương 1 mục 7 | Đo huyết áp, cao thì uống thuốc đưa về mức chuẩn | …mua máy đo huyết áp, canh người ấy uống đủ thuốc hạ áp theo y lệnh và đưa huyết áp về mức chuẩn, xem… |
| mục 10 | chương 1 mục 13 | Trên 60 tuổi luyện thăng bằng và sức mạnh chân, cải tạo phòng tắm và cầu thang trong nhà | …cải tạo phòng tắm và cầu thang trong nhà, cùng người ấy luyện thăng bằng và sức mạnh chân, xem… |
| mục 10 | chương 1 mục 17 | Phụ nữ từ 40 tuổi làm sàng lọc ung thư vú, cứ hai năm chụp nhũ ảnh một lần | …sàng lọc ung thư đến tuổi, đi cùng người ấy làm một lần, xem… |
| mục 10 | chương 1 mục 18 | Phụ nữ trên 30 tuổi làm sàng lọc ung thư cổ tử cung, ưu tiên xét nghiệm HPV | …sàng lọc ung thư đến tuổi, đi cùng người ấy làm một lần, xem… |
| mục 10 | chương 1 mục 19 | Từ 45 đến 50 tuổi làm sàng lọc ung thư đại trực tràng, bằng xét nghiệm miễn dịch phân tìm máu ẩn hoặc nội soi đại tràng | …sàng lọc ung thư đến tuổi, đi cùng người ấy làm một lần, xem… |
| mục 10 | chương 17 mục 7 | Nhà có người già nằm lâu hoặc mất khả năng nặng, đến bộ phận bảo hiểm y tế nơi tham gia bảo hiểm xin bảo hiểm chăm sóc dài hạn; nó không phải chỉ phát cho người già | …người già đã nằm lâu, phòng loét tì đè và bảo hiểm chăm sóc dài hạn xem… |
| mục 10 | chương 17 mục 8 | Nhà có người nằm lâu, coi loét tì đè là kẻ thù số một: trang bị nệm khí điện, trở mình đúng giờ, mỗi ngày xem một lượt chỗ xương nhô lên | …người già đã nằm lâu, phòng loét tì đè và bảo hiểm chăm sóc dài hạn xem… |
| mục 10 | chương 17 mục 5 | Cái “đầu tư an dưỡng” nào bắt người già đóng tiền trước cũng đừng dính vào: mở thẻ thành viên, mua giường, mua căn hộ an dưỡng, an dưỡng du lịch, mua sản phẩm cho người già đều là cùng một kiểu huy động vốn trái phép | …một loại là “đầu tư an dưỡng” đóng tiền trước, một loại là thứ có thể thế chỗ thuốc, xem… |
| mục 16 | chương 19 mục 11 | Tổn thương do bụi, tiếng ồn, hóa chất độc gây ra là không hồi phục được: vật tư phòng hộ đơn vị bắt buộc phải cấp, công việc không có biện pháp phòng hộ có thể từ chối | …chặn nó là bằng kính và mặt nạ, không phải kính chống ánh sáng xanh, xem… |
| mục 16 | chương 13 mục 6 | Một mắt vừa căng vừa đau, đỏ, nhìn đèn thấy một vòng cầu vồng, lại đau đầu buồn nôn muốn nôn, trong ngày đi cấp cứu mắt | …đau đầu buồn nôn muốn nôn, đó là cơn glôcôm góc đóng cấp tính, vài ngày có thể đè hỏng dây thị, trong ngày phải đi cấp cứu mắt, xem… |
| mục 16 | chương 30 mục 4 | Để trẻ ở ngoài trời đủ 2 giờ mỗi ngày — hiện là biện pháp phòng cận thị duy nhất có thử nghiệm ngẫu nhiên ủng hộ | …trẻ em, thiếu niên phòng cận thị thế nào, xem… |
| mục 16 | chương 30 mục 12 | Phát hiện thị lực kém, đi bệnh viện đo khúc xạ giãn đồng tử, sau đó tái khám theo khoảng cách bác sĩ hẹn | …trẻ em, thiếu niên phòng cận thị thế nào, xem… |
| mục 16 | chương 30 mục 9 | Không mua sản phẩm và dịch vụ quảng cáo có thể “chữa khỏi cận thị”, “giảm độ cận” | …trẻ em, thiếu niên phòng cận thị thế nào, xem… |
| mục 18 | chương 1 mục 7 | Đo huyết áp, cao thì uống thuốc đưa về mức chuẩn | …huyết áp, đường huyết, viêm gan B xem… |
| mục 18 | chương 1 mục 8 | Sau 35 tuổi chỉ cần thừa cân là đi xét đường huyết lúc đói một lần, bình thường thì cứ ba năm xét lại | …huyết áp, đường huyết, viêm gan B xem… |
| mục 18 | chương 1 mục 14 | Xét nghiệm 5 chỉ số viêm gan B, chưa có kháng thể thì chích vắc-xin | …huyết áp, đường huyết, viêm gan B xem… |
| mục 18 | chương 1 mục 17 | Phụ nữ từ 40 tuổi làm sàng lọc ung thư vú, cứ hai năm chụp nhũ ảnh một lần | …vú, cổ tử cung, đại trực tràng xem… |
| mục 18 | chương 1 mục 18 | Phụ nữ trên 30 tuổi làm sàng lọc ung thư cổ tử cung, ưu tiên xét nghiệm HPV | …vú, cổ tử cung, đại trực tràng xem… |
| mục 18 | chương 1 mục 19 | Từ 45 đến 50 tuổi làm sàng lọc ung thư đại trực tràng, bằng xét nghiệm miễn dịch phân tìm máu ẩn hoặc nội soi đại tràng | …vú, cổ tử cung, đại trực tràng xem… |
| mục 18 | chương 1 mục 23 | Xét nghiệm vi khuẩn Hp (Helicobacter pylori), dương tính thì diệt trừ | …vi khuẩn Hp và CT liều thấp xem… |
| mục 18 | chương 1 mục 24 | Người hút thuốc nặng mỗi năm chụp CT ngực liều thấp một lần | …vi khuẩn Hp và CT liều thấp xem… |
| mục 18 | chương 1 mục 31 | Đã có hành vi nguy cơ cao thì đi xét HIV một lần, trung tâm kiểm soát bệnh miễn phí, kết quả bảo mật | …đã có hành vi nguy cơ cao thì đi xét, xem… |
| mục 18 | mục 7 trong chương này | Đừng làm “PET-CT toàn thân” hoặc “gói xét nghiệm dấu ấn khối u” cho bản thân chưa có triệu chứng | …những mục không có bằng chứng phổ biến nhất trong gói là dấu ấn khối u và chụp ảnh toàn thân, xem chương này… |
| mục 18 | mục 19 trong chương này | Đừng vì khám sức khỏe ra axit uric cao nhưng chưa từng đau mà bắt đầu uống thuốc hạ axit uric | …khám ra axit uric cao nhưng chưa từng đau, sỏi túi mật nhưng chưa từng đau thì làm sao, xem chương này… |
| mục 18 | mục 20 trong chương này | Đừng vì khám sức khỏe ra sỏi túi mật nhưng chưa từng đau mà đi cắt túi mật phòng ngừa | …khám ra axit uric cao nhưng chưa từng đau, sỏi túi mật nhưng chưa từng đau thì làm sao, xem mục 19 trong chương này (axit uric cao không triệu chứng) và… |
| mục 19 | chương 16 mục 9 | Chẩn đoán gout là uống thuốc hạ acid uric lâu dài, ép acid uric máu xuống dưới 360 µmol/L và duy trì mãi | …chi tiết xem… |
| mục 19 | chương 16 mục 9 | Chẩn đoán gout là uống thuốc hạ acid uric lâu dài, ép acid uric máu xuống dưới 360 µmol/L và duy trì mãi | …trước khi thật sự bắt đầu uống, trước hết đi xét kiểu gen này, xem… |
| mục 21 | chương 16 mục 8 | Đã từng bị sỏi thận thì uống nước đến 2.5–3 lít mỗi ngày, muối giảm còn dưới 6 gram | …câu uống nhiều nước xem… |
| mục 22 | chương 5 mục 33 | Vòng tay, ngọc, đồng hồ hiệu, đồ chơi sưu tầm: tính sổ theo “tiền tiêu mất”, đừng tính theo “tiền giữ lại được” | …chất liệu và giấy kiểm định tra thế nào, coi nó là đầu tư vì sao không đáng, xem… |
| mục 22 | chương 5 mục 34 | Ngọc tráp đá quý chỉ tin giấy kiểm định có dấu CMA, và lên trang chính của cơ quan cấp chứng kiểm tra cơ quan đó | …chất liệu và giấy kiểm định tra thế nào, coi nó là đầu tư vì sao không đáng, xem… |
| mục 22 | mục 15 trong chương này | Đừng bỏ tiền xem bói, xem tarot, xem cung hoàng đạo để ra quyết định | …bỏ tiền xem bói xem chương này… |
| mục 23 | mục 24 trong chương này | Đừng bỏ thêm tiền đổi nhà, đổi xe, đổi vòng xã giao chỉ để “dời lên một bậc trong vòng người xung quanh” | …khoản ngân sách thêm ra vì “mạnh hơn người một bậc”, xem chương này… |
| mục 24 | chương 4 mục 18 | Khi chọn chỗ ở, đặt thời gian đi làm lại lên trước, rút ngắn quãng đường đi làm một chiều | …chỗ ở xếp theo thứ tự nào xem… |
| mục 24 | chương 3 mục 21 | Đừng biến “người khác sống ra sao” thành bài đọc mỗi ngày: đặt giới hạn hoặc tắt các ứng dụng lướt động thái của người đồng trang lứa | …trên mạng cứ so mình lên trên xem… |
| mục 24 | mục 23 trong chương này | Đừng trông mua sắm cải thiện tâm trạng hoặc cảm giác vị thế | …cỡ lợi ích đặt “trung”, là theo chương này… |
| mục 24 | mục 23 trong chương này | Đừng trông mua sắm cải thiện tâm trạng hoặc cảm giác vị thế | …dùng mua sắm điều tâm trạng xem chương này… |
| mục 25 | chương 4 mục 10 | Đặt thứ cần dùng ngay tay với, đem thứ không muốn đụng đến ra xa, đừng trông cậy nhịn tại chỗ | …cách thật sự có thử nghiệm ngẫu nhiên ủng hộ là đổi môi trường và đổi cách viết, xem… |
| mục 25 | chương 4 mục 1 | Viết “định làm” thành “mấy giờ, ở đâu, gặp hoàn cảnh gì thì làm gì” | …cách thật sự có thử nghiệm ngẫu nhiên ủng hộ là đổi môi trường và đổi cách viết, xem chương 4 mục 10 (đem thứ không muốn đụng đến ra xa) và… |
| mục 26 | chương 1 mục 23 | Xét nghiệm vi khuẩn Hp (Helicobacter pylori), dương tính thì diệt trừ | …nguyên nhân chính của viêm dạ dày và loét dạ dày không phải bụng đói, mà là vi khuẩn Hp và uống thuốc giảm đau lâu ngày, thứ cần xét xem… |
| mục 26 | chương 2 mục 28 | Mỗi ngày ăn đủ 5 phần (khoảng 400 g) rau quả | …muốn kiểm soát cân nặng, thứ thật sự có bằng chứng là ăn gì và ăn bao nhiêu, xem… |
| mục 26 | chương 2 mục 29 | Ăn ít thực phẩm siêu chế biến (snack khoai tây, mì ăn liền, bánh kẹo, đồ ăn nhanh) | …cân nặng, thứ thật sự có bằng chứng là ăn gì và ăn bao nhiêu, xem chương 2 mục 28 (mỗi ngày ăn đủ 5 phần rau quả),… |
| mục 26 | chương 2 mục 33 | Giữ BMI trong 20–25, thừa cân thì giảm | …chương mục 28 (mỗi ngày ăn đủ 5 phần rau quả), chương 2 mục 29 (ăn ít thực phẩm siêu chế biến) và… |
| mục 26 | chương 28 mục 1 | Đừng dùng nhịn ăn cực đoan, nhịn ăn hoàn toàn hay nôn thốc để kiểm soát cân nặng; muốn giảm thì giảm từ phía vận động | …nhịn ăn cực đoan và nôn thốc là chuyện khác, xem… |
| mục 26 | mục 20 trong chương này | Đừng vì khám sức khỏe ra sỏi túi mật nhưng chưa từng đau mà đi cắt túi mật phòng ngừa | …khám sức khỏe ra sỏi túi mật nhưng chưa từng đau phải làm sao, xem chương này… |
| mục 27 | chương 3 mục 9 | Đến giờ là ngủ, đừng thức khuya vì game, video ngắn, nội dung khiêu dâm | …thức khuya xem… |
| mục 27 | chương 1 mục 28 | Chức năng cương có vấn đề thì trước hết đi khám tim mạch, đừng coi đơn thuần là “chuyện ấy” | …lo xem nội dung khiêu dâm sinh ra vấn đề cương, trước theo… |
| mục 27 | chương 9 mục 4 | Video khiêu dâm tự xem là việc của mình, đừng phát vào nhóm, đừng bán “tài nguyên”, đừng lập nhóm | …hậu quả pháp lý của việc phát vào nhóm, bán “tài nguyên” xem… |
| mục 28 | chương 30 mục 15 | Con nói mình thích người cùng giới, đừng mắng, đừng đuổi ra khỏi nhà, đừng gửi đi “chỉnh trị”: thái độ của gia đình gắn với việc con có tự sát hay không | …sau khi con nói ra gia đình làm thế nào, xem… |

## 07-song-the-nao-khi-khong-co-tien

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 7 | mục 9 trong chương này | BHYT cư dân mỗi năm 400 yên đừng để đứt, hộ khó khăn được giảm miễn | …đóng BHYT cư dân có trợ giúp (BHYT cư dân xem… |
| mục 7 | mục 10 trong chương này | Mắc bệnh nặng thì trước hết đi qua BHYT, bảo hiểm bệnh lớn, cứu trợ y tế và đăng ký khám chữa bệnh khác tỉnh, đừng đụng vào vay nợ mạng | …đóng BHYT cư dân có trợ giúp (BHYT cư dân xem mục 9), khám chữa bệnh có thể đi cứu trợ y tế (cứu trợ y tế xem… |
| mục 7 | mục 3 trong chương này | Kiện tụng không nổi thì xin trợ giúp pháp lý, các vụ đòi lương, tiền cấp dưỡng, tai nạn lao động vốn nằm sẵn trong phạm vi | … mục), khám chữa bệnh có thể đi cứu trợ y tế (cứu trợ y tế xem mục 10), xin trợ giúp pháp lý không xét khó khăn kinh tế (trợ giúp pháp lý xem… |
| mục 10 | chương 24 mục 9 | Không mang tiền, không mang giấy tờ, không nói rõ mình là ai, cấp cứu vẫn phải cứu trước | …không có tiền cũng gọi 120, bệnh viện không được từ chối, đẩy đẩy hoặc trì hoãn cứu trị, đoạn phí cấp cứu ấy do quỹ cứu trợ y tế vì bệnh khẩn cấp trả, xem… |
| mục 10 | mục 15 trong chương này | Không nộp tiền cọc, không cầm giữ giấy tờ, không ký “vay đào tạo”, không vào đa cấp, không vay nặng lãi | …tòa chỉ bảo vệ tới vạch 4 lần LPR kỳ một năm (không vay nặng lãi xem… |
| mục 18 | mục 9 trong chương này | BHYT cư dân mỗi năm 400 yên đừng để đứt, hộ khó khăn được giảm miễn | …sau khi đóng lại, có một khoảng thời gian khám chữa bệnh không hoàn trả (BHYT cư dân xem… |
| mục 20 | chương 5 mục 40 | Chỉ mua bảo hiểm cho khoản lỗ mình gánh không nổi, khoản gánh nổi thì để quỹ khẩn cấp chống lưng | …tổn thất nào đáng dùng bảo hiểm chống lưng, xem… |
| mục 20 | mục 9 trong chương này | BHYT cư dân mỗi năm 400 yên đừng để đứt, hộ khó khăn được giảm miễn | …trước hết BHYT cư dân (… |
| mục 21 | mục 4 trong chương này | Cùng đường tuyệt vọng thì đến trạm cứu trợ, được lo ăn ở và vé về quê | …… |

## 08-dung-de-minh-dinh-vao-vu-an

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 3 | mục 2 trong chương này | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …dừng thanh toán đòi lại được bao nhiêu, tùy lúc báo công an tiền còn trong tài khoản hay không, dừng thanh toán làm thế nào xem… |
| mục 4 | mục 2 trong chương này | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …đã chuyển tiền rồi, xem chương này… |
| mục 5 | mục 33 trong chương này | Bị người khác bịa đặt sự thật tố cáo, có thể yêu cầu truy cứu: đủ xử phạt trị an tạm giữ từ 5 ngày trở lên, đủ tội phạt dưới 3 năm tù | …ba mục triển khai xem chương này… |
| mục 5 | mục 34 trong chương này | Thiếu chứng cứ vốn nên tuyên vô tội, lời khai ép ra nên loại trừ; tuyên án rồi còn có khiếu nại và tái thẩm | …ba mục triển khai xem mục 33 trong chương này (truy cứu bên bịa đặt sự thật),… |
| mục 5 | mục 35 trong chương này | Sau khi bị giam giữ rồi hủy án, không khởi tố hoặc tuyên vô tội, đi xin bồi thường nhà nước, tính tiền theo ngày | …xem mục 33 trong chương này (truy cứu bên bịa đặt sự thật), mục 34 (thiếu chứng cứ nên tuyên vô tội và khiếu nại tái thẩm),… |
| mục 6 | mục 1 trong chương này | Gặp tai nạn giao thông thì trước hết dừng xe, cứu người, báo công an, đừng bỏ chạy | …đầu hàng về sau vẫn tính là tự thú, chỉ phải lấy bậc hình phạt nặng hơn làm chuẩn, rồi quyết định giảm hay không, giảm bao nhiêu, làm thế nào xem chương này… |
| mục 6 | mục 5 trong chương này | Bị buộc tội hoặc bị triệu tập, trước hết mời luật sư, không dàn xếp riêng, không xóa ghi chép | …mời luật sư trước và khai báo thật không xung đột nhau, xem chương này… |
| mục 11 | chương 13 mục 37 | Đụng độ đám người đánh nhau: lùi lại đi khỏi, đừng tiến vào can, đừng đứng xem, đừng nhặt hung khí trên đất; muốn báo án thì lùi ra khoảng cách an toàn gọi 110 | …nhưng tay không can vào trận đánh nhau giữa những người lạ, rủi ro phải tính riêng, xem… |
| mục 11 | mục 10 trong chương này | Gây xung đột thì trước hết báo công an không ra tay, kẻ ra tay trước gần như chắc chắn chịu thiệt | …động tác mặc định vẫn là… |
| mục 11 | mục 5 trong chương này | Bị buộc tội hoặc bị triệu tập, trước hết mời luật sư, không dàn xếp riêng, không xóa ghi chép | …thứ ba, trước khi cảnh sát hỏi cung chính thức, mời luật sư trước, xem… |
| mục 11 | mục 35 trong chương này | Sau khi bị giam giữ rồi hủy án, không khởi tố hoặc tuyên vô tội, đi xin bồi thường nhà nước, tính tiền theo ngày | …sau cùng vụ án hủy, không khởi tố hoặc tuyên vô tội, những ngày bị giam có thể xin bồi thường nhà nước theo ngày, xem… |
| mục 12 | chương 7 mục 2 | Bị quỵt lương thì trước khiếu nại lên giám sát lao động, rồi xin trọng tài lao động, hai đường đều không mất phí, đa số vụ án có kết quả trong vài tháng | …bị quỵt lương khiếu nại giám sát lao động thế nào, xin trọng tài lao động thế nào, xem… |
| mục 12 | chương 7 mục 2 | Bị quỵt lương thì trước khiếu nại lên giám sát lao động, rồi xin trọng tài lao động, hai đường đều không mất phí, đa số vụ án có kết quả trong vài tháng | …bị quỵt tiền công cụ thể khiếu nại thế nào, trọng tài thế nào, xem… |
| mục 12 | chương 9 mục 15 | Đòi nợ thì không giữ người, không giam người, không bám theo về nhà người ta trụ lại không đi | …ranh giới của đòi nợ xem… |
| mục 13 | mục 14 trong chương này | Nảy ra ý nghĩ “kéo thêm một người đền mạng”, “chết thì cùng chết”, xử như bệnh cấp tính: rời khỏi hiện trường, giao chìa khóa xe và dao cho người khác, gọi 12356 | …ý nghĩ đã đến bước này, xem… |
| mục 14 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …muốn làm hại mình, xem… |
| mục 14 | chương 3 mục 19 | Khi tâm trạng xuống thấp, làm trước mấy việc hiệu quả chi phí cao nhất: vận động, tắm nắng, ngủ đúng giờ, tìm người tâm sự, gọi 12356 | …khi tâm trạng xuống thấp làm gì trước, xem… |
| mục 16 | mục 37 trong chương này | Bị bạo lực mạng: trước bật bảo vệ, trước cố định chứng cứ, rồi chọn trong ba con đường nền tảng, lệnh cấm, báo công an | …bị bạo lực mạng xong tự xử trí thế nào, xem chương này… |
| mục 19 | chương 19 mục 1 | Tiền làm thêm giờ tính theo ba mức 1,5 lần, 2 lần, 3 lần; không trả thì khiếu nại lên thanh tra lao động, quá hạn không trả còn phải trả thêm từ 50% đến 100% | …tiền làm thêm và tiền nghỉ phép năm chưa nghỉ đi trọng tài lao động bộ ấy, xem… |
| mục 19 | chương 19 mục 2 | Nghỉ phép năm tính theo thâm niên cộng dồn là 5, 10, 15 ngày; không nghỉ được thì quy ra tiền bằng 300% lương ngày | …tiền làm thêm và tiền nghỉ phép năm chưa nghỉ đi trọng tài lao động bộ ấy, xem… |
| mục 19 | mục 18 trong chương này | Cho vay viết rõ giấy vay, trước khi bảo lãnh thay người hãy nghĩ rõ mình có nguyện ý thay nó trả hay không | …giấy vay và bảo lãnh xem… |
| mục 19 | mục 20 trong chương này | Bị kiện, bị thi hành, thành thật báo tài sản, trả được bao nhiêu trả bấy nhiêu, đừng chuyển nhà và tiền cho thân quen hoặc công ty | …giai đoạn bị thi hành xem… |
| mục 20 | chương 7 mục 19 | Từng ngồi tù, từng phá sản, từng lên danh sách mất tín nhiệm, pháp luật đều có đường làm lại, cứ đi xong thủ tục trước | …làm xong nghĩa vụ rồi khôi phục thế nào, xem… |
| mục 20 | mục 21 trong chương này | Bị hạn chế tiêu dùng hoặc bị đưa vào danh sách mất tín nhiệm, trước tra rõ là đưa vào theo điều nào, sửa được thì xin sửa | …bị đưa vào danh sách, bị hạn chế tiêu dùng xong làm sao, xem… |
| mục 21 | chương 7 mục 19 | Từng ngồi tù, từng phá sản, từng lên danh sách mất tín nhiệm, pháp luật đều có đường làm lại, cứ đi xong thủ tục trước | …hai thứ này cũng không đồng nghĩa hồ sơ tín nhiệm có vết, xóa khỏi danh sách không đổi hồ sơ tín nhiệm, xem… |
| mục 31 | chương 9 mục 18 | Đối phương chưa đủ 14 tuổi thì không được quan hệ, “em đồng ý” không phải là lý do | …cách xác định độ tuổi xem… |
| mục 31 | chương 9 mục 18 | Đối phương chưa đủ 14 tuổi thì không được quan hệ, “em đồng ý” không phải là lý do | …điều đó còn quy định, gian dâm bé gái chưa đủ mười bốn tuổi xử theo tội hiếp dâm và phạt nặng, cách xác định bé gái xem… |
| mục 31 | chương 13 mục 42 | Sau khi bị xâm hại tình dục: trước hết đến chỗ an toàn gọi 110; trước khi giám định thương tích đừng tắm, đừng giặt quần áo, đừng dọn phòng, trong 72 giờ đi bệnh viện | …mình là bên bị hại, làm gì trước xem… |
| mục 31 | mục 32 trong chương này | Sau quan hệ tình dục, chat khỏa thân, đối phương lấy báo công an, đăng ảnh, báo cho đơn vị của bạn để đòi tiền: một xu cũng không đưa, một ghi chép cũng không xóa, báo công an ngay | …lúc bạn uống đến mất ý thức, rủi ro bị buộc tội và bị tống tiền tồn tại đồng thời, xem chương này… |
| mục 32 | mục 5 trong chương này | Bị buộc tội hoặc bị triệu tập, trước hết mời luật sư, không dàn xếp riêng, không xóa ghi chép | …đừng tự mình xóa tin nhắn, xóa ảnh, hủy tài khoản, chặn rồi thôi, thế là xóa luôn chứng cứ của mình, xem chương này… |
| mục 32 | mục 36 trong chương này | Chính mình là người bị hại đi đòi bồi thường, đi 12315, khởi kiện hoặc luật sư, đừng một mình đi hẹn của đối phương, đừng trói “đưa tiền” và “tôi không phơi bày” thành một câu | …ngược lại, bạn là người bị hại đi đòi bồi thường bên xâm phạm, số tiền cao cũng không đồng nghĩa tống tiền, xem chương này… |
| mục 33 | mục 34 trong chương này | Thiếu chứng cứ vốn nên tuyên vô tội, lời khai ép ra nên loại trừ; tuyên án rồi còn có khiếu nại và tái thẩm | …chứng cứ và lối ra sau khi bị buộc tội, xem chương này… |
| mục 33 | mục 35 trong chương này | Sau khi bị giam giữ rồi hủy án, không khởi tố hoặc tuyên vô tội, đi xin bồi thường nhà nước, tính tiền theo ngày | …chứng cứ và lối ra sau khi bị buộc tội, xem chương này… |
| mục 34 | mục 5 trong chương này | Bị buộc tội hoặc bị triệu tập, trước hết mời luật sư, không dàn xếp riêng, không xóa ghi chép | …khó khăn kinh tế có thể xin trợ giúp pháp lý, xem chương này… |
| mục 34 | mục 5 trong chương này | Bị buộc tội hoặc bị triệu tập, trước hết mời luật sư, không dàn xếp riêng, không xóa ghi chép | …thứ nhất, sau lần hỏi cung đầu tiên đã thuê luật sư, xem chương này… |
| mục 35 | mục 36 trong chương này | Chính mình là người bị hại đi đòi bồi thường, đi 12315, khởi kiện hoặc luật sư, đừng một mình đi hẹn của đối phương, đừng trói “đưa tiền” và “tôi không phơi bày” thành một câu | …thực tế tính thế nào, có thể xem chương này… |
| mục 36 | mục 5 trong chương này | Bị buộc tội hoặc bị triệu tập, trước hết mời luật sư, không dàn xếp riêng, không xóa ghi chép | …bị khởi án xong xử trí thế nào, xem chương này… |
| mục 36 | mục 34 trong chương này | Thiếu chứng cứ vốn nên tuyên vô tội, lời khai ép ra nên loại trừ; tuyên án rồi còn có khiếu nại và tái thẩm | …bị khởi án xong xử trí thế nào, xem chương này… |
| mục 36 | mục 35 trong chương này | Sau khi bị giam giữ rồi hủy án, không khởi tố hoặc tuyên vô tội, đi xin bồi thường nhà nước, tính tiền theo ngày | …bị khởi án xong xử trí thế nào, xem chương này… |
| mục 36 | mục 32 trong chương này | Sau quan hệ tình dục, chat khỏa thân, đối phương lấy báo công an, đăng ảnh, báo cho đơn vị của bạn để đòi tiền: một xu cũng không đưa, một ghi chép cũng không xóa, báo công an ngay | …tình huống đối phương nắm điểm yếu đòi tiền bạn, xem chương này… |
| mục 37 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …chịu không nổi thì gọi 12356, xem… |
| mục 37 | chương 14 mục 8 | Bạn có quyền xem, sao chép, sửa chữa và xóa thông tin cá nhân của mình, bị từ chối có thể khởi kiện | …yêu cầu nền tảng xóa thông tin cá nhân của bạn, xem… |
| mục 37 | mục 16 trong chương này | Trên mạng không chửi người, không bịa đặt, không chuyển phát chuyện chưa kiểm chứng; bị bạo lực mạng trước lưu chứng cứ rồi báo công an | …một là đừng đối chửi, chửi lại sẽ biến chính bạn thành chương này… |
| mục 38 | chương 9 mục 21 | Đừng bịa tai nạn, đừng phóng đại thiệt hại để lừa tiền bồi thường bảo hiểm: đây là tội lừa đảo bảo hiểm, người giúp bạn làm chứng, giúp bạn sửa xe, giúp bạn giám định đều bị tính chung | …bịa tai nạn, phóng đại thiệt hại loại lừa bảo hiểm không dính mạng người, cũng là phạm tội, tính chung cả người giúp làm chứng, xem… |
| mục 38 | mục 14 trong chương này | Nảy ra ý nghĩ “kéo thêm một người đền mạng”, “chết thì cùng chết”, xử như bệnh cấp tính: rời khỏi hiện trường, giao chìa khóa xe và dao cho người khác, gọi 12356 | …xung động muốn làm hại người nhà xử như bệnh cấp, xem chương này… |
| mục 38 | mục 15 trong chương này | Người bên cạnh nói ra “ai cũng đừng hòng sống tốt”, “dẫn con đi cùng”, đừng coi là lời giận: thân thuộc gần có thể trực tiếp đưa đi khám, công an nhận được báo án cũng phải quản | …xung động muốn làm hại người nhà xử như bệnh cấp, xem chương này… |
| mục 39 | mục 2 trong chương này | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …trình tự dừng thanh toán sau khi bị lừa, xem chương này… |
| mục 39 | mục 37 trong chương này | Bị bạo lực mạng: trước bật bảo vệ, trước cố định chứng cứ, rồi chọn trong ba con đường nền tảng, lệnh cấm, báo công an | …bị bạo lực mạng xem chương này… |
| mục 40 | chương 24 mục 12 | Cảm ơn bác sĩ đã cứu bạn, đi thư cảm ơn, cờ tri ân và đánh giá mức độ hài lòng, đừng đi bao lì xì: chuẩn mực cấm là tiền của, không phải lòng cảm tạ | …bao lì xì trong bệnh viện thuộc bộ quy tắc khác, xem… |
| mục 40 | mục 39 trong chương này | Báo công an tại chỗ đòi giấy tiếp nhận vụ án, không khởi án phải thông báo bằng văn bản: trong 7 ngày có thể xin xem xét lại, thêm 7 ngày xin tái xét, viện kiểm sát có thể thông báo công an khởi án | …thật sự gặp đối phương đòi lợi ích, thì theo… |
| mục 41 | chương 19 mục 8 | Trước khi nghỉ việc, trước hết lưu lại phiếu lương, chấm công, hợp đồng lao động, hồ sơ bảo hiểm xã hội và tin nhắn | …trước khi nghỉ việc nên lưu tài liệu gì, xem… |
| mục 41 | mục 16 trong chương này | Trên mạng không chửi người, không bịa đặt, không chuyển phát chuyện chưa kiểm chứng; bị bạo lực mạng trước lưu chứng cứ rồi báo công an | …băng ghi âm giao cho tòa, ủy ban trọng tài hoặc cảnh sát dùng, đừng phát lên mạng, công khai lời của người khác có thể dính kiện riêng tư và danh dự, xem chương này… |
| mục 42 | mục 1 trong chương này | Gặp tai nạn giao thông thì trước hết dừng xe, cứu người, báo công an, đừng bỏ chạy | …tại hiện trường tai nạn giao thông nên làm gì xem chương này… |
| mục 43 | mục 41 trong chương này | Cuộc điện thoại và gặp mặt có thể lật mặt, bật ghi âm luôn: cuộc trò chuyện mình tham gia, không cần trước xin sự đồng ý của đối phương | …ghi âm xem chương này… |
| mục 43 | mục 10 trong chương này | Gây xung đột thì trước hết báo công an không ra tay, kẻ ra tay trước gần như chắc chắn chịu thiệt | …đừng tự mình lao vào can, lý do xem chương này… |
| mục 44 | chương 10 mục 12 | Khoản tiền lớn mà vợ hoặc chồng một bên vay, bạn không ký cũng không công nhận sau đó, thì không tự động thành nợ của bạn | …thông báo này phát theo Luật Hôn nhân thời điểm đó, sau khi Bộ luật Dân sự có hiệu lực nợ chung vợ chồng xác định thế nào, xem… |
| mục 44 | chương 9 mục 15 | Đòi nợ thì không giữ người, không giam người, không bám theo về nhà người ta trụ lại không đi | …chủ nợ chặn cửa giữ người, giữ người, xem… |
| mục 44 | chương 1 mục 37 | Đánh bạc đến mức vay tiền để gỡ, tâm trạng lúc nào cũng xuống thấp thì trước hết gọi 12356, rồi giao thẻ ngân hàng và mật khẩu thanh toán cho người nhà quản | …nếu chính người ấy đã đánh bạc đến mức muốn chết, xem… |

## 09-rang-nhuoc-phap-ly-thuong-dan

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 3 | chương 11 mục 11 | Không bán công cụ vượt tường lửa, tài khoản VPN, không dựng node loại này cho người khác | …công cụ vượt tường lửa tự nó bị xử thế nào, xem… |
| mục 3 | mục 1 trong chương này | Trong nhóm không chuyển tiếp tin thiên tai, dịch bệnh, tin công an không rõ thật giả, không chỉnh ảnh (P ảnh), không dùng AI chế ảnh hiện trường | …càng không rõ thật giả càng đừng theo chuyển tiếp, xem chương này… |
| mục 5 | chương 8 mục 8 | Không cho bất kỳ ai mượn thẻ ngân hàng, thẻ điện thoại, tài khoản thanh toán, “chạy điểm” không phải việc làm thêm | …hậu quả cho người khác mượn thẻ ngân hàng, giúp người “chạy điểm”, xem… |
| mục 6 | chương 8 mục 9 | Mỗi năm miễn phí tra hai lần báo cáo tín nhiệm của mình, xem có khoản vay hay thẻ nào không phải mình làm không | …rút tiền, chuyển khoản xem mục 5 trong chương này (“việc làm thêm” bắt bạn dùng thẻ của mình nhận tiền), bị người khác vay mượn danh mình phát hiện thế nào, xem… |
| mục 6 | mục 5 trong chương này | “Việc làm thêm” bắt bạn dùng thẻ của mình nhận tiền, rút tiền mặt, chuyển khoản, cho bao nhiêu tiền hậu hĩnh cũng không làm | …giúp người rút tiền, chuyển khoản xem chương này… |
| mục 8 | chương 11 mục 3 | Không viết, không bán script cướp vé, chớp deal, làm đơn ảo, săn khuyến mãi, dù chỉ là “tự động bấm nút” | …tự viết script, bán script xem… |
| mục 8 | chương 8 mục 8 | Không cho bất kỳ ai mượn thẻ ngân hàng, thẻ điện thoại, tài khoản thanh toán, “chạy điểm” không phải việc làm thêm | …tự viết script, bán script xem chương 11 mục 3, bán thẻ, bán tài khoản xem… |
| mục 8 | mục 16 trong chương này | Căn cước công dân không cho người khác mượn, không dùng căn cước của người khác, cũng không lấy giấy tờ của người khác đi đăng ký, mở thẻ, mua vé | …tự viết script, bán script xem, bán thẻ, bán tài khoản xem (cho người khác mượn thẻ ngân hàng) và chương này… |
| mục 15 | chương 8 mục 18 | Cho vay viết rõ giấy vay, trước khi bảo lãnh thay người hãy nghĩ rõ mình có nguyện ý thay nó trả hay không | …giấy vay viết thế nào, xem… |
| mục 16 | chương 8 mục 28 | Đừng làm “người đại diện pháp luật treo tên”, đừng cho người khác mượn CMND để đăng ký công ty | …hậu quả của hai thứ ấy xem… |
| mục 16 | chương 8 mục 8 | Không cho bất kỳ ai mượn thẻ ngân hàng, thẻ điện thoại, tài khoản thanh toán, “chạy điểm” không phải việc làm thêm | …hậu quả của hai thứ ấy xem… |
| mục 19 | chương 8 mục 10 | Gây xung đột thì trước hết báo công an không ra tay, kẻ ra tay trước gần như chắc chắn chịu thiệt | …tránh xung đột thế nào, vì sao ra tay trước chịu thiệt, biên giới của phòng vệ chính đáng ở đâu, xem… |
| mục 19 | chương 8 mục 11 | Sự xâm hại không tránh khỏi thì có thể đánh trả, nhưng chỉ đánh đúng kẻ đang ra tay, nó dừng thì bạn dừng | …món nợ của việc hạ tay người để trút giận, xem… |
| mục 19 | chương 8 mục 12 | Kết thù với ai — bị quỵt lương, bị đuổi việc, bị lừa mất tiền — đi khiếu nại, trọng tài, khởi kiện, đừng đi tìm người tính sổ | …món nợ của việc hạ tay người để trút giận, xem… |
| mục 19 | chương 8 mục 13 | Giận đến đâu cũng đừng hạ tay người không liên quan: lái xe đâm vào đám đông, hành hung ở nơi công cộng định tội theo tội đe dọa an toàn công cộng bằng phương pháp nguy hiểm, khởi điểm ba năm tù, chết người là tử hình | …món nợ của việc hạ tay người để trút giận, xem… |
| mục 19 | chương 8 mục 14 | Nảy ra ý nghĩ “kéo thêm một người đền mạng”, “chết thì cùng chết”, xử như bệnh cấp tính: rời khỏi hiện trường, giao chìa khóa xe và dao cho người khác, gọi 12356 | …món nợ của việc hạ tay người để trút giận, xem… |
| mục 20 | chương 27 mục 7 | Học thuộc danh sách “lập tức đi bệnh viện” này, trong thai kỳ và một năm sau sinh đều có hiệu lực | …danh sách phải lập tức đi bệnh viện khi mang thai và sau sinh, xem… |
| mục 20 | chương 27 mục 16 | Lần tái khám sau sinh 42 ngày đừng bỏ qua, nó đồng thời là sàng lọc trầm cảm sau sinh | …tái khám sau sinh 42 ngày đồng thời là sàng lọc trầm cảm sau sinh, xem… |
| mục 20 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …có ý nghĩ tự sát thì gọi 12356, xem… |
| mục 21 | chương 5 mục 26 | Mua đủ bảo hiểm trách nhiệm bên thứ ba: hạn mức bảo hiểm bắt buộc thống nhất toàn quốc mà không cao, phần vượt quá từ túi nhà bạn trả | …bảo hiểm xe nên mua thế nào, xem… |
| mục 21 | chương 8 mục 38 | Con đường “trước mua bảo hiểm cho người rồi mới ra tay” pháp luật chặn kín từ đầu: một xu cũng không lấy được, tội theo cố ý giết người cộng lừa đảo bảo hiểm hợp nhất xử phạt | …mua bảo hiểm cho người thân rồi cố ý gây ra cái chết của họ, điều luật ghi rõ hợp nhất xử phạt nhiều tội, xem… |
| mục 21 | chương 5 mục 13 | Làm một lần liên kết hỗ trợ chung gia đình trên App bảo hiểm y tế, tiền tài khoản cá nhân bảo hiểm y tế của người lao động là dùng được để vợ chồng, cha mẹ, con cái khám bệnh mua thuốc | …bảo hiểm y tế là bộ quy tắc khác, quẹt BHYT trắng, rút tiền tài khoản cá nhân BHYT xử theo lừa đảo, xem… |
| mục 22 | chương 1 mục 35 | Đừng lấy “mất một quả thận cũng chẳng sao” đổi ra tiền: quả còn lại phải làm việc cho hai, người từng bán thận sau đó 86% nói sức khỏe xấu đi | …cái giá cơ thể sau khi lấy thận xem… |
| mục 22 | chương 1 mục 35 | Đừng lấy “mất một quả thận cũng chẳng sao” đổi ra tiền: quả còn lại phải làm việc cho hai, người từng bán thận sau đó 86% nói sức khỏe xấu đi | …sau khi lấy đi một quả thận cơ thể phải trả giá gì, xem… |
| mục 22 | mục 6 trong chương này | Có người kéo bạn đi vay bằng cách “đóng gói hồ sơ”, chia cho bạn tiền hoa hồng theo số tiền vay, thì một việc cũng đừng làm | …bẫy của vay mạng và vay “đóng gói hồ sơ”, xem chương này… |
| mục 23 | chương 1 mục 30 | Quan hệ tình dục dùng bao cao su suốt quá trình, không dùng chung dụng cụ tiêm với người khác | …nguy cơ lây bệnh xã hội và HIV, xem… |
| mục 23 | chương 13 mục 38 | Có thể đã bị phơi nhiễm HIV: trong 72 giờ đi lấy thuốc chặn, càng sớm càng tốt | …nguy cơ lây bệnh xã hội và HIV, xem chương 1 mục 30 (quan hệ tình dục dùng bao cao su suốt quá trình) và… |
| mục 23 | mục 18 trong chương này | Đối phương chưa đủ 14 tuổi thì không được quan hệ, “em đồng ý” không phải là lý do | …tội “mua dâm bé gái”), Sửa đổi Luật Hình sự (IX) năm 2015 đã xóa nó, hiện việc này trực tiếp xử nặng theo tội hiếp dâm, xem chương này… |

## 10-yeu-va-ket-hon-co-dang-khong

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 12 | mục 11 trong chương này | Cha mẹ bỏ tiền mua nhà: ngay lúc chuyển khoản, ghi rõ đó là cho hay là cho vay | …vậy thứ hữu dụng hơn là… |
| mục 12 | chương 8 mục 18 | Cho vay viết rõ giấy vay, trước khi bảo lãnh thay người hãy nghĩ rõ mình có nguyện ý thay nó trả hay không | …quy tắc chung của giấy vay và cam kết bảo lãnh xem… |
| mục 17 | mục 8 trong chương này | Tính cả lợi ích sức khỏe vào, nhưng chiết khấu vì đây là dữ liệu quan sát | …nhưng nó không tự động thành lợi ích sức khỏe của bạn (… |
| mục 17 | mục 15 trong chương này | Giá trị cảm xúc, đừng chỉ hỏi “có hay không”, hãy nhìn chất lượng mối quan hệ | …nhưng nó không tự động thành lợi ích sức khỏe của bạn (mục 8) hay chất lượng mối quan hệ (… |
| mục 17 | mục 9 trong chương này | Khoản thời gian tính theo “lao động không được trả công”: bàn rõ phân công rồi hãy đăng ký kết hôn | …còn khoản thời gian (… |
| mục 17 | mục 10 trong chương này | Khoản tiền: xem luật quy định mặc định trước, rồi mới quyết định có lập thỏa thuận bằng văn bản không | …còn khoản thời gian (mục 9), khoản tiền (… |
| mục 17 | mục 11 trong chương này | Cha mẹ bỏ tiền mua nhà: ngay lúc chuyển khoản, ghi rõ đó là cho hay là cho vay | …còn khoản thời gian (mục 9), khoản tiền (… |
| mục 17 | mục 12 trong chương này | Khoản tiền lớn mà vợ hoặc chồng một bên vay, bạn không ký cũng không công nhận sau đó, thì không tự động thành nợ của bạn | …còn khoản thời gian (mục 9), khoản tiền (… |
| mục 17 | mục 16 trong chương này | Tính chi phí rút lui: ly hôn thỏa thuận có thời hạn tĩnh tâm 30 ngày, ly hôn tố tụng có điều kiện luật định | …còn khoản thời gian (mục 9), khoản tiền (mục 10 đến 12) và chi phí rút lui (… |
| mục 18 | chương 8 mục 43 | Bị bạo lực gia đình: trước báo công an để lại ghi chép ra hiện trường, rồi ra tòa xin lệnh bảo vệ an toàn thân xác, không cần ly hôn trước, cũng không mất phí | …cãi nhau đến mức ra tay, hoặc mắng rủa, đe dọa kéo dài, không còn là chuyện giao tiếp nữa, mà là bạo lực gia đình, xem… |
| mục 18 | mục 16 trong chương này | Tính chi phí rút lui: ly hôn thỏa thuận có thời hạn tĩnh tâm 30 ngày, ly hôn tố tụng có điều kiện luật định | …nghĩ rõ có đi tiếp không, chi phí rút lui xem chương này… |
| mục 19 | chương 17 mục 2 | Lập di chúc đi, nhớ rằng di chúc lập sau bác di chúc lập trước, di chúc công chứng không còn ưu tiên | …lập mấy bản di chúc, lấy bản sau cùng làm chuẩn, xem… |
| mục 19 | chương 17 mục 1 | Nhân lúc người già còn tỉnh táo, chỉ định bằng văn bản người giám hộ tương lai | …giám hộ theo thỏa thuận làm thế nào, xem… |
| mục 20 | mục 19 trong chương này | Cặp đồng tính, tranh thủ lúc cả hai còn tỉnh táo, làm xong ủy quyền, giám hộ theo thỏa thuận và di chúc: trước pháp luật hai người không phải thân quyến, không làm thì không có quyền ký và quyền thừa kế | …kết hôn hình thức mà hai bên đều có bạn đời đồng tính, bạn đời với nhau không được luật hôn nhân bảo vệ, tài sản phải ghi rõ thêm, xem chương này… |
| mục 20 | mục 16 trong chương này | Tính chi phí rút lui: ly hôn thỏa thuận có thời hạn tĩnh tâm 30 ngày, ly hôn tố tụng có điều kiện luật định | …kết hôn hình thức ly hôn cũng phải đi thời hạn tĩnh tâm 30 ngày hoặc ra tòa, xem chương này… |

## 11-rang-nhuoc-cho-lap-trinh-vien

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | mục 1 trong chương này | Trước khi ra tay hãy tự hỏi ba câu: hại đến lợi ích của ai, đối phương có bao nhiêu năng lực truy cứu, mình để lại bao nhiêu bằng chứng; bị truy cứu thì lập tức tìm luật sư hình sự | …… |
| mục 2 | mục 3 trong chương này | Không viết, không bán script cướp vé, chớp deal, làm đơn ảo, săn khuyến mãi, dù chỉ là “tự động bấm nút” | …nhưng… |
| mục 4 | mục 3 trong chương này | Không viết, không bán script cướp vé, chớp deal, làm đơn ảo, săn khuyến mãi, dù chỉ là “tự động bấm nút” | …vượt qua phòng vệ lấy dữ liệu trong hệ thống, hình phạt và… |
| mục 7 | mục 13 trong chương này | Code viết trong giờ làm, bằng tài nguyên công ty thì thuộc về công ty; dự án mã nguồn mở của riêng bạn dùng thời gian và thiết bị của riêng bạn, không trộn code công ty | …quyền tác giả của “code tự mình viết” cũng thuộc về công ty, điểm này xem… |
| mục 9 | mục 8 trong chương này | Không chạy chương trình của mình trên máy tính, máy chủ, camera của người khác, không đem máy công ty đi đào coin | …chưa đủ tội vẫn ăn xử phạt hành chính, còn có lệnh cấm hành nghề, số tiền phạt và số năm cùng… |
| mục 9 | mục 10 trong chương này | Báo cáo lỗ hổng theo quy định, trước khi được vá không công bố chi tiết, không phát công cụ khai thác, không đưa cho nước ngoài | …phát hiện lỗ hổng xong xử thế nào, xem… |
| mục 10 | mục 9 trong chương này | Không có ủy quyền bằng văn bản thì không kiểm thử hệ thống của người khác, “xuất phát từ thiện ý” và “báo cáo về sau” đều không phải lý do thoát tội | …có tư cách đi kiểm thử hay không, xem… |
| mục 15 | mục 4 trong chương này | Crawler chỉ craw trang công khai không cần đăng nhập, không vượt qua chống crawl, không đụng vào thông tin cá nhân, dữ liệu craw được không bán | …bán hoặc cung cấp thông tin cá nhân cấu thành tội, xem… |

## 12-khoi-nghiep-va-kinh-doanh

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 2 | chương 8 mục 18 | Cho vay viết rõ giấy vay, trước khi bảo lãnh thay người hãy nghĩ rõ mình có nguyện ý thay nó trả hay không | …quy tắc chung của giấy vay và cam kết bảo lãnh, xem… |
| mục 2 | mục 1 trong chương này | Chỉ khởi nghiệp bằng số tiền thua nổi được, không động đến gia sản, không vay tiền để khai trương | …vẫn vay được, chỉ là trước khi ký phải rõ trang giấy này ký vào là ký gì, rồi ép số tiền bảo lãnh xuống… |
| mục 4 | chương 8 mục 28 | Đừng làm “người đại diện pháp luật treo tên”, đừng cho người khác mượn CMND để đăng ký công ty | …rủi ro của người đại diện pháp luật treo tên, xem… |
| mục 6 | mục 3 trong chương này | Trước khi khai trương chọn đúng chủ thể: hộ cá thể và người góp hợp danh bồi thường đến cùng, công ty trách nhiệm hữu hạn mới “hữu hạn” | …vốn đăng ký điền bao nhiêu không ảnh hưởng mặt tiền, chỉ quyết định trần trách nhiệm của bạn, và trong 5 năm phải nộp đủ, xem chương này… |
| mục 6 | mục 7 trong chương này | Ngành nghề cần giấy phép, giấy chưa xuống không khai cửa | …phạm vi kinh doanh có hạng cần phép, giấy chưa xuống không được khai cửa, xem chương này… |
| mục 7 | mục 8 trong chương này | Làm thực phẩm trước xem mình rơi vào bậc nào: sản xuất và làm ăn uống cần giấy phép, chỉ bán thực phẩm đóng gói sẵn thì chuyển sang đăng ký, bán thịt rau tươi không cần giấy | …ngành thực phẩm chia mấy bậc, bán thịt rau tươi có cần giấy không, xem… |
| mục 8 | chương 5 mục 31 | Mua phải thực phẩm không an toàn, ngoài hoàn tiền còn đòi được 10 lần tiền hàng, phần bồi thường tăng thêm dưới 1.000 yên tính bằng 1.000 yên | …người mua đòi được bao nhiêu bồi thường xem… |
| mục 8 | mục 6 trong chương này | Trước khi đăng ký chốt xong tên gọi, địa điểm kinh doanh, phạm vi kinh doanh và số vốn đăng ký, hồ sơ đủ là nhận giấy phép ngay tại chỗ | …chủ thể và giấy phép xem… |
| mục 8 | mục 7 trong chương này | Ngành nghề cần giấy phép, giấy chưa xuống không khai cửa | …chủ thể và giấy phép xem mục 6 (trước khi đăng ký chốt xong tên gọi, địa điểm, phạm vi kinh doanh), ngành khác có cần giấy không xem… |
| mục 9 | chương 5 mục 31 | Mua phải thực phẩm không an toàn, ngoài hoàn tiền còn đòi được 10 lần tiền hàng, phần bồi thường tăng thêm dưới 1.000 yên tính bằng 1.000 yên | …hơn nữa người mua còn đòi bạn đền thêm gấp 10 tiền hàng thực phẩm, dưới 1.000 yên tính bằng 1.000 yên (xem… |
| mục 10 | chương 6 mục 10 | Đừng bỏ nhiều tiền mua thực phẩm bảo vệ sức khỏe, cao thuốc, đồ bồi bổ để “điều dưỡng cơ thể” | …người mua nhận diện lối nói chuyện này thế nào, xem… |
| mục 11 | mục 8 trong chương này | Làm thực phẩm trước xem mình rơi vào bậc nào: sản xuất và làm ăn uống cần giấy phép, chỉ bán thực phẩm đóng gói sẵn thì chuyển sang đăng ký, bán thịt rau tươi không cần giấy | …theo… |
| mục 11 | mục 8 trong chương này | Làm thực phẩm trước xem mình rơi vào bậc nào: sản xuất và làm ăn uống cần giấy phép, chỉ bán thực phẩm đóng gói sẵn thì chuyển sang đăng ký, bán thịt rau tươi không cần giấy | …tuyến phòng đỡ việc nhất vẫn là… |
| mục 12 | mục 23 trong chương này | Thua lỗ thì rút lui theo trình tự: hủy được thủ tục đơn giản thì hủy, tài sản không đủ đè nợ thì đi phá sản, đừng để mặc | …để mặc ba tháng thì thành hộ bất thường, ngừng dùng hóa đơn, muốn hủy cũng không đi được thủ tục đơn giản, xem chương này… |
| mục 14 | chương 8 mục 2 | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …đã trả tiền hoặc chuyển khoản rồi, thì theo… |
| mục 19 | mục 20 trong chương này | Nhập một lô giữ một lô chứng từ và thông tin nhà cung cấp trên, giá nhập thấp hơn giá thị trường rõ rệt thì không nhập: hàng giả nhân viên nhập, bị xử vẫn là ông chủ | …ranh giới của việc dùng nhãn hiệu và hình mẫu của người khác, xem… |
| mục 19 | mục 21 trong chương này | Hình mẫu trên sản phẩm, bao bì, tem treo và ảnh quảng bá hoặc tự làm hoặc mua bản quyền, đổi màu, thêm icon không tính là “đã đổi rồi” | …ranh giới của việc dùng nhãn hiệu và hình mẫu của người khác, xem… |
| mục 20 | mục 21 trong chương này | Hình mẫu trên sản phẩm, bao bì, tem treo và ảnh quảng bá hoặc tự làm hoặc mua bản quyền, đổi màu, thêm icon không tính là “đã đổi rồi” | …dùng hình mẫu của người khác xem… |
| mục 21 | mục 19 trong chương này | Mẫu làm ra trước chạy một lượt danh mục sản xuất hàng loạt, rồi mới bàn khởi công | …trước khi sản xuất kiểm tra nhãn hiệu xem… |

## 13-tinh-huong-khan-cap

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | chương 8 mục 3 | Ghi nhớ quy tắc cứng chống lừa đảo: cuộc gọi đến chớ tin nhẹ, thông tin không tiết lộ, liên kết không bấm, chuyển tiền nhiều xác minh, bảy kiểu lừa đảo phổ biến nhất đều là hình dáng này | …quy tắc cứng chống lừa và bảy kiểu lừa hay gặp xem… |
| đầu chương | chương 8 mục 32 | Sau quan hệ tình dục, chat khỏa thân, đối phương lấy báo công an, đăng ảnh, báo cho đơn vị của bạn để đòi tiền: một xu cũng không đưa, một ghi chép cũng không xóa, báo công an ngay | …bị người lấy ảnh riêng tư, băng chat khỏa thân đòi tiền xem… |
| đầu chương | chương 8 mục 2 | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …tiền đã chuyển đi rồi, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, xem… |
| mục 2 | mục 1 trong chương này | Có người ngã xuống, không thở, lập tức ấn ngực thật mạnh, nhờ người xung quanh gọi 120 và tìm máy AED | …trước xem có thở không, không thì ấn… |
| mục 2 | chương 1 mục 13 | Trên 60 tuổi luyện thăng bằng và sức mạnh chân, cải tạo phòng tắm và cầu thang trong nhà | …bản thân chống té ngã xem… |
| mục 2 | chương 8 mục 16 | Trên mạng không chửi người, không bịa đặt, không chuyển phát chuyện chưa kiểm chứng; bị bạo lực mạng trước lưu chứng cứ rồi báo công an | …bị bạo lực mạng lưu chứng cứ báo công an thế nào xem… |
| mục 2 | mục 10 trong chương này | Người già sau khi va đầu, từ hai ba tuần đến vài tháng trở nên đi không vững, chậm chạp đờ đẫn, buồn ngủ li bì hoặc một bên không có sức, đi chụp CT đầu | …triệu chứng muộn sau khi người già va đầu xem chương này… |
| mục 2 | mục 39 trong chương này | Cứu người mà bị thương, mất tiền: trước hết tìm người gây hại và bảo hiểm y tế, rồi mới nộp đơn xin xác nhận hành vi dũng cảm cứu người | …tiền sau khi cứu người bị thương xem chương này… |
| mục 4 | mục 3 trong chương này | Đột nhiên miệng méo, một bên tay không nhấc nổi, nói không rõ, lập tức gọi 120, đừng chờ, đừng tự lái xe đi | …trong ba động tác “méo mặt, giơ tay, nói chuyện” (… |
| mục 6 | chương 6 mục 16 | Đừng mua kính chống ánh sáng xanh để “bảo vệ thị lực”, cũng đừng tin “chăm nhìn màn hình vài tháng là mắt hỏng”, nhưng mắt trướng đau kèm đỏ phải coi là bệnh cấp | …kính chống ánh sáng xanh có dùng được không, xem… |
| mục 6 | mục 5 trong chương này | Một mắt đột nhiên đen thui như bị kéo tấm màn xuống, dù chỉ vài phút rồi tự hết, cũng trong ngày đi cấp cứu coi như đột quỵ | …một mắt không thấy mà không đau không đỏ là chuyện khác, xem… |
| mục 10 | chương 1 mục 13 | Trên 60 tuổi luyện thăng bằng và sức mạnh chân, cải tạo phòng tắm và cầu thang trong nhà | …chống té ngã xem… |
| mục 16 | mục 2 trong chương này | Người già té, có người ngã xuống: trước hết ngồi xổm xuống gọi họ, gọi 120, đừng vội dìu dậy; với người lạ thì đi khỏi cũng hợp pháp, đã dừng lại thì đừng dùng tay di chuyển người | …làm cùng động tác ấy, cơ hội phần lợi quay về với bạn nhỏ hơn, nhưng cũng không khiến bạn chịu trách nhiệm (Điều 184 Bộ luật Dân sự, xem chương này… |
| mục 18 | mục 1 trong chương này | Có người ngã xuống, không thở, lập tức ấn ngực thật mạnh, nhờ người xung quanh gọi 120 và tìm máy AED | …rời nguồn điện rồi không thở, lập tức ấn… |
| mục 18 | mục 1 trong chương này | Có người ngã xuống, không thở, lập tức ấn ngực thật mạnh, nhờ người xung quanh gọi 120 và tìm máy AED | …rời nguồn điện rồi không thở, theo chương này… |
| mục 19 | chương 1 mục 3 | Lắp báo khói; ai mùa đông đun than trong nhà hoặc sưởi bằng khí gas thì lắp thêm báo khí carbon monoxide | …máy báo lắp thế nào xem… |
| mục 20 | mục 19 trong chương này | Còi báo khí carbon monoxide kêu, hoặc cả nhà cùng lúc đau đầu buồn nôn, ra khỏi nhà trước rồi mới gọi điện | …khí carbon monoxide xem… |
| mục 20 | mục 14 trong chương này | Sau khi bị bỏng, lập tức xả nước mát chảy liên tục 20 phút, đừng bôi kem đánh răng, nước tương | …khí carbon monoxide xem mục 19, bỏng xát xem… |
| mục 21 | chương 19 mục 10 | Trước khi vào vị trí có bụi, tiếng ồn, hóa chất, trước hết xem hợp đồng có ghi mối nguy hay không; ba lần khám sức khỏe nghề nghiệp do đơn vị bố trí và chi tiền | …phòng hộ và khám sức khỏe trước khi vào việc xem… |
| mục 21 | chương 19 mục 11 | Tổn thương do bụi, tiếng ồn, hóa chất độc gây ra là không hồi phục được: vật tư phòng hộ đơn vị bắt buộc phải cấp, công việc không có biện pháp phòng hộ có thể từ chối | …phòng hộ và khám sức khỏe trước khi vào việc xem… |
| mục 21 | mục 20 trong chương này | Uống nhầm chất tẩy rửa, thuốc trừ sâu, thuốc: đừng gây nôn, cầm theo chai lọ đi khám ngay; bắn vào mắt hoặc da thì xả nước sạch thật nhiều 15 phút | …chất tẩy rửa trong nhà và uống nhầm xem… |
| mục 23 | mục 22 trong chương này | Trời nắng nóng chóng mặt, buồn nôn, không đổ mồ hôi hoặc mất ý thức, lập tức chuyển vào chỗ mát, cởi quần áo dội nước hạ nhiệt, người mất ý thức không cho uống nước, gọi 120 | …… |
| mục 25 | chương 1 mục 12 | Trẻ ở gần nước không rời tầm mắt, đi thuyền, tắm sông tắm biển thì mặc áo phao | …người thật sự cần cứu phần lớn là con nhà mình, phòng thế nào ở… |
| mục 31 | mục 13 trong chương này | Bị chó, mèo cắn hoặc cào xước da, trước hết rửa luân phiên 15 phút bằng nước xà phòng và nước chảy, trong ngày đi tiêm vắc-xin | …bị chó cào cắn theo… |
| mục 31 | mục 13 trong chương này | Bị chó, mèo cắn hoặc cào xước da, trước hết rửa luân phiên 15 phút bằng nước xà phòng và nước chảy, trong ngày đi tiêm vắc-xin | …bị chó cắn theo… |
| mục 36 | chương 8 mục 32 | Sau quan hệ tình dục, chat khỏa thân, đối phương lấy báo công an, đăng ảnh, báo cho đơn vị của bạn để đòi tiền: một xu cũng không đưa, một ghi chép cũng không xóa, báo công an ngay | …trên mạng bị người lấy ảnh riêng tư, băng chat khỏa thân đòi tiền là chiều ngược lại, một xu cũng không được đưa, xem… |
| mục 37 | chương 8 mục 10 | Gây xung đột thì trước hết báo công an không ra tay, kẻ ra tay trước gần như chắc chắn chịu thiệt | …chính mình bị cuốn vào xung đột xem… |
| mục 37 | mục 36 trong chương này | Ở vùng hoang vắng bị người lạ đòi tiền: đưa tiền cho họ, không ra tay, ghi đặc điểm, thoát thân rồi báo cảnh sát | …chính mình bị cuốn vào xung đột xem, bị người lạ đòi tiền xem chương này… |
| mục 37 | mục 39 trong chương này | Cứu người mà bị thương, mất tiền: trước hết tìm người gây hại và bảo hiểm y tế, rồi mới nộp đơn xin xác nhận hành vi dũng cảm cứu người | …chính mình bị cuốn vào xung đột xem, bị người lạ đòi tiền xem mục 36 trong chương này, tiền sau khi cứu người bị thương xem chương này… |
| mục 38 | chương 1 mục 30 | Quan hệ tình dục dùng bao cao su suốt quá trình, không dùng chung dụng cụ tiêm với người khác | …thuốc chặn chỉ là cứu lại, phòng thường ngày và xét nghiệm xem… |
| mục 38 | chương 1 mục 31 | Đã có hành vi nguy cơ cao thì đi xét HIV một lần, trung tâm kiểm soát bệnh miễn phí, kết quả bảo mật | …thuốc chặn chỉ là cứu lại, phòng thường ngày và xét nghiệm xem… |
| mục 39 | chương 19 mục 15 | Khi thương tình ổn định thì đi thẩm định năng lực lao động, cấp bậc thương tật quy thẳng ra tiền | …chuẩn toàn quốc của trợ cấp tử vong vì công một lần và cấp bậc thương tật quy ra tiền thế nào, xem… |
| mục 39 | chương 19 mục 16 | Ba khoản tiền khi tử vong do lao động phải phân rõ: trợ cấp mai táng, trợ cấp cấp dưỡng thân nhân, trợ cấp tử vong vì công một lần | …chuẩn toàn quốc của trợ cấp tử vong vì công một lần và cấp bậc thương tật quy ra tiền thế nào, xem… |
| mục 39 | chương 7 mục 3 | Kiện tụng không nổi thì xin trợ giúp pháp lý, các vụ đòi lương, tiền cấp dưỡng, tai nạn lao động vốn nằm sẵn trong phạm vi | …trợ giúp pháp lý xin thế nào xem… |
| mục 40 | chương 24 mục 8 | Bệnh thương cấp tính nguy nặng đi thẳng bàn tiền kiểm phân loại cửa cấp cứu, đừng đi xếp hàng quầy đăng ký | …đây thuộc bậc phải vào phòng cấp cứu lập tức, đừng đi xếp hàng quầy đăng ký (xem… |
| mục 40 | mục 12 trong chương này | Chảy máu ồ ạt trước hết dùng tay đè chặt vết thương, tay chân đè không nổi thì dùng garo, đồng thời gọi 120 | …chảy máu ồ ạt đè thế nào, dùng garo thế nào xem… |
| mục 41 | chương 24 mục 10 | Giám định tàn tật phải đợi điều trị kết thúc rồi mới làm, làm sớm cấp sẽ bị đánh thấp | …trị xong có cần giám định tàn tật, có cần làm thẻ người khuyết tật không, xem… |
| mục 41 | chương 24 mục 11 | Trị xong thật sự còn lại trở ngại chức năng, đến liên đoàn người khuyết tật cấp huyện nơi hộ khẩu xin thẻ người khuyết tật | …trị xong có cần giám định tàn tật, có cần làm thẻ người khuyết tật không, xem… |
| mục 41 | mục 2 trong chương này | Người già té, có người ngã xuống: trước hết ngồi xổm xuống gọi họ, gọi 120, đừng vội dìu dậy; với người lạ thì đi khỏi cũng hợp pháp, đã dừng lại thì đừng dùng tay di chuyển người | …kiêng kị di chuyển khi người già té nghi gãy xương xem… |
| mục 41 | mục 11 trong chương này | Một chân đột nhiên sưng lên, căng, ấn vào đau, đi khám sớm nhất có thể; kèm thêm đột nhiên hụt hơi hoặc đau ngực thì gọi 120 ngay | …sau khi bó bột hoặc nằm lâu một chân sưng lên phải đề phòng huyết khối, xem… |
| mục 42 | mục 38 trong chương này | Có thể đã bị phơi nhiễm HIV: trong 72 giờ đi lấy thuốc chặn, càng sớm càng tốt | …một liệu trình thuốc chặn hơn nghìn yên, uống hay không do bác sĩ phán, xem chương này… |
| mục 42 | chương 8 mục 41 | Cuộc điện thoại và gặp mặt có thể lật mặt, bật ghi âm luôn: cuộc trò chuyện mình tham gia, không cần trước xin sự đồng ý của đối phương | …ghi âm xem… |
| mục 42 | chương 8 mục 32 | Sau quan hệ tình dục, chat khỏa thân, đối phương lấy báo công an, đăng ảnh, báo cho đơn vị của bạn để đòi tiền: một xu cũng không đưa, một ghi chép cũng không xóa, báo công an ngay | …đối phương sau đó lấy ảnh, lấy chuyện báo công an đe dọa bạn, cũng là phạm tội, xem… |

## 14-tai-khoan-va-an-toan-thong-tin

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 5 | chương 8 mục 2 | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …tiền là bạn bị lừa mà tự chuyển đi, phải đi bộ khác, xem… |
| mục 5 | mục 1 trong chương này | Email, thanh toán, tài khoản mạng xã hội đều bật xác thực hai lớp, ưu tiên dùng xác nhận qua cửa sổ bật lên trên điện thoại, mã xác thực tin nhắn chỉ là lựa chọn tiếp theo | …vậy mật khẩu đừng nói với ai, mã xác thực đừng chuyển cho ai (xem… |
| mục 9 | mục 8 trong chương này | Bạn có quyền xem, sao chép, sửa chữa và xóa thông tin cá nhân của mình, bị từ chối có thể khởi kiện | …quyền xem, sửa chữa, xóa thông tin cá nhân của mình xem… |

## 15-thue-nha-va-mua-nha

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 7 | mục 6 trong chương này | Trước khi ký đối chiếu giấy chứng nhận quyền sở hữu và tình trạng thế chấp, mọi khoản tiền đều chuyển khoản và ghi chú mục đích | …mọi khoản tiền đều chuyển khoản và ghi chú mục đích, xem… |

## 16-song-khi-mac-benh-man-tinh

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 8 | chương 6 mục 21 | Đừng cai canxi vì muốn phòng sỏi thận | …đừng cai canxi vì phòng sỏi, xem… |
| mục 8 | chương 1 mục 27 | Nước tiểu có máu nhìn thấy bằng mắt thường, dù không đau, dù ngày hôm sau đã hết, cũng phải đi xét một lần | …máu tiểu không đau còn thứ khác phải tra, xem… |
| mục 9 | chương 6 mục 19 | Đừng vì khám sức khỏe ra axit uric cao nhưng chưa từng đau mà bắt đầu uống thuốc hạ axit uric | …khám sức khỏe ra axit uric cao nhưng chưa từng lên cơn là chuyện khác, xem… |
| mục 9 | chương 2 mục 7 | Không uống đồ uống có đường, đổi sang loại không đường cũng chưa hẳn là giải quyết | …đồ uống có đường và rượu bia xem… |
| mục 9 | chương 2 mục 20 | Uống ít rượu bia hoặc không uống | …đồ uống có đường và rượu bia xem… |

## 17-nha-co-nguoi-gia

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 4 | mục 3 trong chương này | Tiền của người già để riêng một tài khoản, chi tiêu số lớn đặt ra quy tắc hai người cùng xác nhận | …và… |
| mục 5 | chương 8 mục 2 | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …đã đóng tiền rồi, lập tức theo… |
| mục 5 | mục 3 trong chương này | Tiền của người già để riêng một tài khoản, chi tiêu số lớn đặt ra quy tắc hai người cùng xác nhận | …chặn được là bước rút tiền, phối hợp… |
| mục 5 | mục 6 trong chương này | Ngoài bảo hiểm an dưỡng thế chấp ngược nhà ở của công ty bảo hiểm, mọi “lấy nhà dưỡng già” khác đều đừng dính, tuyệt đối không thế chấp nhà để mua sản phẩm tài chính | …lấy nhà dưỡng già là lối khác, xem… |
| mục 6 | chương 8 mục 17 | Trước khi ký đọc hết tờ giấy, không ký thay người, không ký trên giấy trắng | …quy tắc chung của ký tên và hợp đồng trắng xem… |
| mục 6 | chương 8 mục 2 | Phát hiện bị lừa đảo, lập tức gọi 110 hoặc 96110 yêu cầu dừng thanh toán, đừng tự mình tra xét trước | …quy tắc chung của ký tên và hợp đồng trắng xem chương 8 mục 17, bị lừa xong dừng thanh toán thế nào xem… |
| mục 7 | chương 7 mục 8 | Ai có thẻ người khuyết tật thì xin hai khoản trợ cấp cho người khuyết tật | …khoản tiền này và trợ cấp chăm sóc trong hai trợ cấp người khuyết tật là hai bộ thủ tục, hai khoản tiền, không xung đột, xem… |
| mục 8 | chương 13 mục 11 | Một chân đột nhiên sưng lên, căng, ấn vào đau, đi khám sớm nhất có thể; kèm thêm đột nhiên hụt hơi hoặc đau ngực thì gọi 120 ngay | …đột nhiên một chân sưng lên, xử theo huyết khối tĩnh mạch sâu, xem… |
| mục 8 | chương 1 mục 34 | Đừng lấy “nằm vài ngày là khỏi” đánh cược với ngã từ trên cao: người vào ICU chấn thương phần lớn sống được, cái giá tính theo năm | …đoạn nằm lâu vì ngã cao hoặc thương nặng, xem… |
| mục 8 | mục 7 trong chương này | Nhà có người già nằm lâu hoặc mất khả năng nặng, đến bộ phận bảo hiểm y tế nơi tham gia bảo hiểm xin bảo hiểm chăm sóc dài hạn; nó không phải chỉ phát cho người già | …dịch vụ chăm sóc bảo hiểm chăm sóc dài hạn trả được, xem chương này… |

## 19-di-lam-nghi-viec-va-tai-nan-lao-dong

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 1 | chương 8 mục 19 | Bảo vệ quyền có thời hạn: thời hiệu tố tụng dân sự 3 năm, trọng tài lao động 1 năm, quá hạn đối phương một câu “quá thời hiệu” là đủ | …thời hiệu trọng tài của tranh chấp xem… |
| mục 3 | chương 12 mục 16 | Dùng người ký hợp đồng văn bản trong tháng đầu, làm đăng ký bảo hiểm xã hội trong 30 ngày | …thứ ba “thử việc không đóng BHXH”, nghĩa vụ bảo hiểm xã hội tính từ ngày làm việc đầu tiên, không liên quan thử việc hay không, nghĩa vụ bên dùng người xem… |
| mục 3 | mục 6 trong chương này | Công ty chấm dứt hợp đồng trái pháp luật, tiền bồi thường gấp hai lần chuẩn trợ cấp kinh tế | …bị chấm dứt trái pháp luật thì theo… |
| mục 9 | mục 7 trong chương này | Đừng ký “xin thôi việc tự nguyện vì lý do cá nhân”, ký một cái là mất luôn N | …chỉ người mất việc không phải do mình muốn đi mới được lĩnh, đây cũng là… |
| mục 9 | chương 7 mục 1 | Mất việc thì trước hết xin trợ cấp bảo hiểm thất nghiệp trực tuyến | …trên mạng xin thế nào xem… |
| mục 9 | chương 11 mục 12 | Đã ký thỏa thuận hạn chế cạnh tranh: nghỉ việc mà công ty không trả đền bù theo tháng thì đòi bằng văn bản, đủ 3 tháng không trả có thể chấm dứt; vị trí chưa từng tiếp xúc bí mật thương mại có thể yêu cầu tuyên bố điều khoản không hiệu lực | …chỉ khi do nguyên nhân của chính công ty mà ba tháng liền không trả, bạn mới có thể yêu cầu chấm dứt thỏa thuận này, xem… |
| mục 9 | mục 7 trong chương này | Đừng ký “xin thôi việc tự nguyện vì lý do cá nhân”, ký một cái là mất luôn N | …ký “xin thôi việc tự nguyện vì lý do cá nhân” không những không có N, trợ cấp bảo hiểm thất nghiệp cũng mất luôn, xem… |
| mục 10 | mục 12 trong chương này | Đi làm bị thương, trên đường đi làm về bị va chạm, việc đầu tiên là làm thủ tục công nhận tai nạn lao động; đơn vị không khai báo thì bạn tự khai | …bệnh nghề nghiệp bản thân đi theo tai nạn lao động, đãi ngộ xem… |
| mục 11 | chương 13 mục 21 | Hóa chất như axit kiềm bắn lên người, lập tức cởi quần áo nhiễm bẩn, xả thật nhiều nước sạch chảy, mắt phải kéo mi mắt ra mà xả, xả đủ thời gian rồi mới đi | …xử trí hiện trường khi hóa chất bắn lên người xem… |
| mục 11 | mục 10 trong chương này | Trước khi vào vị trí có bụi, tiếng ồn, hóa chất, trước hết xem hợp đồng có ghi mối nguy hay không; ba lần khám sức khỏe nghề nghiệp do đơn vị bố trí và chi tiền | …vậy khám sức khỏe khi rời vị trí càng quan trọng (xem… |
| mục 17 | chương 8 mục 41 | Cuộc điện thoại và gặp mặt có thể lật mặt, bật ghi âm luôn: cuộc trò chuyện mình tham gia, không cần trước xin sự đồng ý của đối phương | …bước một, từ hôm nay ghi chép, ghi âm xem… |
| mục 17 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …đã gồng không nổi, gọi 12356 trước, xem… |
| mục 17 | mục 7 trong chương này | Đừng ký “xin thôi việc tự nguyện vì lý do cá nhân”, ký một cái là mất luôn N | …bước bốn, bị ép đi vì quỵt lương, không đóng BHXH, theo chương này… |
| mục 17 | mục 8 trong chương này | Trước khi nghỉ việc, trước hết lưu lại phiếu lương, chấm công, hợp đồng lao động, hồ sơ bảo hiểm xã hội và tin nhắn | …bước bốn, bị ép đi vì quỵt lương, không đóng BHXH, theo mục 7 trong chương này (đừng ký thôi việc tự nguyện) và… |
| mục 17 | mục 4 trong chương này | Bị sa thải trước hết tính rõ N: cứ đủ một năm một tháng lương, chưa đủ sáu tháng tính nửa tháng | …trợ cấp kinh tế tính thế nào, xem chương này… |

## 20-cham-soc-tre-so-sinh

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 3 | mục 2 trong chương này | Trong 24 giờ sau sinh phải tiêm mũi vắc-xin viêm gan B đầu tiên | …mũi viêm gan B đầu tiên xem… |
| mục 4 | mục 12 trong chương này | Trẻ có chàm nặng hoặc dị ứng trứng, đừng né đậu phộng; theo hướng dẫn của bác sĩ thêm vào sớm, nhưng tuyệt đối không cho ăn hạt nguyên | …trẻ có chàm nặng hoặc dị ứng trứng, đậu phộng có nên né không, xem chương này… |
| mục 12 | chương 13 mục 26 | Có người bị nghẹn không nói được, đứng ra sau làm 5 lần vỗ lưng cộng 5 lần đè bụng, ngã xuống thì làm hồi sinh tim phổi | …bị nghẹn làm sao xem… |
| mục 12 | mục 4 trong chương này | 6 tháng đầu chỉ cho bú sữa mẹ, đến nước cũng không cần; từ tháng thứ 6 thêm thức ăn dặm và tiếp tục bú mẹ | …LEAP từ 4 tháng tuổi, còn Trung Quốc là đủ 6 tháng tuổi mới bắt đầu thêm thức ăn dặm, xem chương này… |

## 21-du-lich-nuoc-ngoai-va-an-toan

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 4 | mục 3 trong chương này | Biết bảo hộ lãnh sự làm được gì, không làm được gì: thăm hỏi được, vớt người ra không được, chi phí vẫn phải tự trả | …bảo hộ lãnh sự cũng không ứng trước khoản tiền này (xem… |
| mục 6 | chương 14 mục 5 | Thẻ bị quẹt trộm thì trước hết báo khóa đóng băng rồi báo công an, sau đó yêu cầu ngân hàng đền: việc chứng minh “là chính bạn quẹt” là trách nhiệm của ngân hàng | …thẻ mất, bị nuốt hoặc bị quẹt trộm làm sao xem… |
| mục 7 | mục 2 trong chương này | Lưu 12308 và số điện thoại bảo hộ lãnh sự của lãnh sự quán tại chỗ vào điện thoại, rồi chép một bản bỏ vào ví, đừng đợi có chuyện mới đi tìm | …cửa vào lãnh sự quán, chính là… |

## 22-thu-gian-the-nao

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 4 | chương 8 mục 29 | Xuất nhập cảnh không giúp người lạ mang đồ, không nhận giúp bưu kiện nguồn gốc không rõ | …giúp người mang đồ xem… |
| mục 4 | mục 3 trong chương này | Trong sảnh có người đưa “đồ” thì lập tức đi; chứa chấp và cung cấp đều không phải “giúp bạn” | …trong sảnh có người lấy ra bột không rõ nguồn gốc, viên nén, điếu thuốc điện tử thì làm sao, xem chương này… |

## 23-hoc-ky-nang-gi-dang

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | mục 2 trong chương này | Đưa “đọc sách có hữu dụng không” vào cả sổ tử vong: mỗi thêm một năm học, nguy cơ tử vong tuổi trưởng thành giảm khoảng 1.9% | …chương này tính là tiền và thời gian,… |
| đầu chương | mục 1 trong chương này | Dưới 16 tuổi không có lựa chọn “đi làm thuê”: đơn vị nhận bạn bị phạt mỗi tháng 5000 yên, kẻ nào chịu nhận đều là làm chui | …… |
| đầu chương | mục 2 trong chương này | Đưa “đọc sách có hữu dụng không” vào cả sổ tử vong: mỗi thêm một năm học, nguy cơ tử vong tuổi trưởng thành giảm khoảng 1.9% | …mục 1 trước nói luật đã gạch đi khúc nào của các lựa chọn,… |
| đầu chương | mục 3 trong chương này | Trước khi phán “bằng cấp có bị mất giá không”, hãy xem cấu trúc học vấn của cả nước: cứ 100.000 người chỉ có 15467 người đạt trình độ đại học | …mục 1 trước nói luật đã gạch đi khúc nào của các lựa chọn, mục 2 tính quan hệ giữa đọc sách và tuổi thọ,… |
| đầu chương | mục 4 trong chương này | “Học không nổi” thì trước hết tính theo chính sách: học phí trung cấp phần lớn đã miễn, trợ cấp học tập 2300 yên, vay hỗ trợ học tập tối đa mỗi năm 20.000 | …… |
| đầu chương | mục 5 trong chương này | Không đậu phổ thông không có nghĩa đường tắt: trung cấp có tuyển thông suốt liên thông và thi riêng, tuyển dụng vị trí kỹ năng còn có thể hạ yêu cầu bằng cấp | …mục 4 nói khi học không nổi có những trợ giúp gì,… |
| đầu chương | mục 6 trong chương này | Biến “đọc sách hay đi làm thuê” thành một bài toán: ba năm lương kiếm được sớm, đối với mức chênh thu nhập hằng năm của mấy chục năm sau | …mục 4 nói khi học không nổi có những trợ giúp gì, mục 5 nói không đậu phổ thông còn những ngả nào,… |
| đầu chương | mục 14 trong chương này | Học xong trước tiên gấp sách lại tự thi mình một lượt, đừng quay lại đọc từ đầu | …… |
| đầu chương | mục 15 trong chương này | Trải cùng một khoảng thời gian ra vài ngày, đừng học dồn một lần | …… |
| đầu chương | mục 16 trong chương này | Đừng coi gạch ý chính, đọc đi đọc lại, viết tóm tắt làm phương pháp học chính | …… |
| đầu chương | mục 17 trong chương này | Vài dạng đề trộn lẫn để luyện, đừng làm liền hai mươi câu cùng một dạng | …… |
| đầu chương | mục 18 trong chương này | Đừng chọn phương pháp học theo kiểu “tôi thuộc dạng thị giác, nó thuộc dạng thính giác” | …… |
| đầu chương | mục 19 trong chương này | Nội dung cần thuộc thì ra đề theo cách dùng sau này để tự thi mình, đừng đọc thuộc nguyên văn một lượt là xong | …… |
| đầu chương | mục 20 trong chương này | Đánh chức danh chuyên môn: trước hết rõ mình thuộc hệ nào, bậc nào, rồi theo tính chất đơn vị mà tìm kênh kê khai | …… |
| đầu chương | mục 21 trong chương này | Chức danh sơ cấp, trung cấp như kế toán lấy qua thi thống nhất toàn quốc; trước hết đối chiếu bằng cấp và số năm công tác rồi đăng ký | …… |
| đầu chương | mục 22 trong chương này | Đừng nhờ môi giới đánh giá hộ, đừng mua luận văn viết hộ, đừng làm giả hồ sơ: tra ra là bãi bỏ chức danh, ghi hồ sơ liêm chính 3 năm | …… |
| đầu chương | mục 23 trong chương này | Có chức danh chưa chắc tăng lương: trước hết hỏi rõ đơn vị đánh giá – bổ nhiệm theo tỷ lệ vị trí, hay đánh giá xong chưa chắc bổ nhiệm | …… |
| mục 1 | mục 10 trong chương này | Khi chọn kỹ năng, ưu tiên xem “có phải lao động tay chân hay không, có phải phán đoán tại hiện trường hay không”; loại này khó bị tự động hóa đá ra nhất | …nhưng vị trí chịu nhận một người 16 tuổi, không bằng cấp, đúng là chương này… |
| mục 2 | mục 4 trong chương này | “Học không nổi” thì trước hết tính theo chính sách: học phí trung cấp phần lớn đã miễn, trợ cấp học tập 2300 yên, vay hỗ trợ học tập tối đa mỗi năm 20.000 | …tiêu là thời gian và sức lực của mấy năm học thêm, phần học phí xem chương này… |
| mục 3 | mục 6 trong chương này | Biến “đọc sách hay đi làm thuê” thành một bài toán: ba năm lương kiếm được sớm, đối với mức chênh thu nhập hằng năm của mấy chục năm sau | …một người cụ thể đọc sách có đáng không, phải theo chương này… |
| mục 5 | mục 10 trong chương này | Khi chọn kỹ năng, ưu tiên xem “có phải lao động tay chân hay không, có phải phán đoán tại hiện trường hay không”; loại này khó bị tự động hóa đá ra nhất | …khi chọn chuyên ngành trung cấp, dùng chương này… |
| mục 5 | mục 8 trong chương này | Trước khi bỏ tiền thi lấy chứng chỉ, trước hết tra giấy đó có nằm trong Danh mục tư cách nghề nghiệp quốc gia hay trong danh sách cơ quan đánh giá đã ghi danh tại Bộ Nhân lực và An sinh Xã hội không | …giấy nó cấp lại theo… |
| mục 6 | mục 7 trong chương này | Trước hết ghi nhớ đường cơ sở: mỗi năm học thêm, suất sinh lời riêng trung bình toàn cầu (phần rơi vào thu nhập của chính mình) khoảng 9% mỗi năm | …trung bình toàn cầu xem chương này… |
| mục 6 | mục 4 trong chương này | “Học không nổi” thì trước hết tính theo chính sách: học phí trung cấp phần lớn đã miễn, trợ cấp học tập 2300 yên, vay hỗ trợ học tập tối đa mỗi năm 20.000 | …trước khi tính trừ trước chương này… |
| mục 6 | mục 2 trong chương này | Đưa “đọc sách có hữu dụng không” vào cả sổ tử vong: mỗi thêm một năm học, nguy cơ tử vong tuổi trưởng thành giảm khoảng 1.9% | …trước khi tính, trừ trước những miễn học phí và trợ cấp học tập của mục 4 trong chương này (học phí trung cấp và trợ cấp học tập), ngoài ra còn có chương này… |
| mục 6 | mục 7 trong chương này | Trước hết ghi nhớ đường cơ sở: mỗi năm học thêm, suất sinh lời riêng trung bình toàn cầu (phần rơi vào thu nhập của chính mình) khoảng 9% mỗi năm | …chương này… |
| mục 6 | mục 5 trong chương này | Không đậu phổ thông không có nghĩa đường tắt: trung cấp có tuyển thông suốt liên thông và thi riêng, tuyển dụng vị trí kỹ năng còn có thể hạ yêu cầu bằng cấp | …ngưỡng bằng cấp luật định, xem chương này… |
| mục 6 | mục 10 trong chương này | Khi chọn kỹ năng, ưu tiên xem “có phải lao động tay chân hay không, có phải phán đoán tại hiện trường hay không”; loại này khó bị tự động hóa đá ra nhất | …năng lực chống thay thế, xem… |
| mục 14 | mục 15 trong chương này | Trải cùng một khoảng thời gian ra vài ngày, đừng học dồn một lần | …tự thi và… |
| mục 15 | mục 14 trong chương này | Học xong trước tiên gấp sách lại tự thi mình một lượt, đừng quay lại đọc từ đầu | …và… |
| mục 16 | mục 14 trong chương này | Học xong trước tiên gấp sách lại tự thi mình một lượt, đừng quay lại đọc từ đầu | …động tác thay thế xem… |
| mục 16 | mục 15 trong chương này | Trải cùng một khoảng thời gian ra vài ngày, đừng học dồn một lần | …động tác thay thế xem mục 14 (gấp sách tự thi) và… |
| mục 17 | mục 16 trong chương này | Đừng coi gạch ý chính, đọc đi đọc lại, viết tóm tắt làm phương pháp học chính | …… |
| mục 18 | mục 9 trong chương này | Đi học thì ưu tiên kênh trợ cấp của chính phủ, đừng vội tự trả tiền đăng ký lớp thương mại ngay từ đầu | …tiêu chuẩn chọn lớp học xem… |
| mục 18 | mục 13 trong chương này | Cùng số tiền và thời gian, ưu tiên chọn dự án chu kỳ ngắn học xong lên việc được ngay | …tiêu chuẩn chọn lớp học xem mục 9 (đi học ưu tiên kênh trợ cấp của chính phủ) và… |
| mục 19 | mục 16 trong chương này | Đừng coi gạch ý chính, đọc đi đọc lại, viết tóm tắt làm phương pháp học chính | …lo trước trong tổng quan xếp hạng mười phương pháp học ấy được chấm thấp nhất, muốn xem bản thân bảng xếp hạng xem… |
| mục 19 | mục 14 trong chương này | Học xong trước tiên gấp sách lại tự thi mình một lượt, đừng quay lại đọc từ đầu | …gấp sách chủ động hồi tưởng, cụ thể xem… |
| mục 19 | mục 15 trong chương này | Trải cùng một khoảng thời gian ra vài ngày, đừng học dồn một lần | …gấp sách chủ động hồi tưởng, cụ thể xem mục 14 (gấp sách tự thi), và phải làm rải ra vài ngày, xem… |

## 24-di-kham-benh

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 7 | mục 6 trong chương này | Mỗi lần khám xong, tự lưu một bản hồ sơ bệnh án, báo cáo xét nghiệm và hình ảnh | …photocopy là chuyện hằng ngày đã nên làm, xem… |
| mục 9 | chương 7 mục 10 | Mắc bệnh nặng thì trước hết đi qua BHYT, bảo hiểm bệnh lớn, cứu trợ y tế và đăng ký khám chữa bệnh khác tỉnh, đừng đụng vào vay nợ mạng | …phần tự trả về sau vẫn quá nặng, đi cứu trợ y tế, xem… |
| mục 10 | mục 11 trong chương này | Trị xong thật sự còn lại trở ngại chức năng, đến liên đoàn người khuyết tật cấp huyện nơi hộ khẩu xin thẻ người khuyết tật | …muốn hưởng đãi ngộ chính sách người khuyết tật, phải làm thêm thẻ người khuyết tật (xem… |
| mục 10 | mục 6 trong chương này | Mỗi lần khám xong, tự lưu một bản hồ sơ bệnh án, báo cáo xét nghiệm và hình ảnh | …trước thẩm định chuẩn bị đủ hồ sơ bệnh án, hồ sơ mổ, hình ảnh tái khám (xem… |
| mục 11 | chương 7 mục 8 | Ai có thẻ người khuyết tật thì xin hai khoản trợ cấp cho người khuyết tật | …người khuyết tật trong hộ bảo đảm tối thiểu lĩnh trợ cấp sinh hoạt, cấp một hai mà cần chăm sóc lâu dài lĩnh trợ cấp chăm sóc, xem… |
| mục 11 | mục 10 trong chương này | Giám định tàn tật phải đợi điều trị kết thúc rồi mới làm, làm sớm cấp sẽ bị đánh thấp | …nó và cấp bậc thương tật thẩm định tư pháp, thẩm định năng lực lao động tai nạn lao động là ba bộ đồ, không thay thế nhau được (xem… |
| mục 12 | chương 8 mục 40 | Đừng cho người xử án, thi hành pháp luật tiền bạc thẻ từ: đưa hối lộ chính mình cũng bị tuyên án, đưa hối lộ cho công tác viên giám sát, hành pháp, tư pháp còn bị xử nặng | …bao lì xì thuộc kỷ luật ngành và bệnh viện quản, cho người xử án thi hành tiền bạc là tội đưa hối lộ trong Luật Hình sự, hai chuyện không cùng một cỡ, cái sau xem… |
| mục 12 | mục 7 trong chương này | Nghi ngờ điều trị thì đòi niêm phong hồ sơ bệnh án ngay tại chỗ, hai bên có mặt, lập danh sách, mỗi bên giữ một bản | …nghi ngờ chính việc điều trị, thì đòi niêm phong hồ sơ bệnh án ngay tại chỗ (xem chương này… |
| mục 12 | mục 6 trong chương này | Mỗi lần khám xong, tự lưu một bản hồ sơ bệnh án, báo cáo xét nghiệm và hình ảnh | …nghi ngờ chính việc điều trị, thì đòi niêm phong hồ sơ bệnh án ngay tại chỗ (xem mục 7 trong chương này, niêm phong hồ sơ bệnh án), và lưu lại hồ sơ bệnh án với hình ảnh (… |

## 25-thu-tuc-khi-nguoi-than-qua-doi

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 1 | mục 2 trong chương này | Giấy chứng tử là chìa khóa của mọi việc phía sau: ai cấp cứu chữa trị người đó cấp, chết bình thường tại nhà tìm cơ sở y tế cộng đồng, cấp trong vòng một ngày | …giấy chứng tử ai cấp cứu chữa trị người đó cấp, xem… |
| mục 3 | mục 6 trong chương này | Dịch vụ tang lễ chia thành dự mục cơ bản và dự mục không cơ bản, dự mục cơ bản có danh sách, thu phí lập theo pháp luật | …việc vận chuyển tự nó thuộc dự mục cơ bản, có định giá, xem… |
| mục 5 | mục 9 trong chương này | Tiền nằm rải ở nhiều nơi phải lần lượt đi nhận: số dư quỹ tiết kiệm nhà ở, chế độ bảo hiểm xã hội, chế độ tai nạn lao động | …mấy khoản tiền ấy xem… |

## 26-lam-website-hoac-nen-tang

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 4 | mục 5 trong chương này | Cho người dùng lên bán hàng, nền tảng phải xác minh - đăng ký, báo cáo thông tin, lưu giữ ba năm | …nhưng người dùng ở trong nước, tiền ở trong nước, chương này… |
| mục 4 | mục 6 trong chương này | Nội dung người dùng đăng bạn phải quản: cơ chế kiểm duyệt, cổng tố cáo, phát hiện cái trái pháp luật thì lập tức ngừng truyền và báo cáo | …nhưng người dùng ở trong nước, tiền ở trong nước, chương này… |
| mục 4 | mục 7 trong chương này | Cung cấp dịch vụ đăng thông tin, nhắn tin tức thời thì bắt buộc yêu cầu người dùng cung cấp thông tin danh tính thật | …nhưng người dùng ở trong nước, tiền ở trong nước, chương này… |
| mục 4 | mục 8 trong chương này | Không mở livestream cho người chưa đủ 16 tuổi; tiền tip xử lý phân bậc theo độ tuổi | …nhưng người dùng ở trong nước, tiền ở trong nước, chương này… |
| mục 4 | mục 9 trong chương này | Nhận được thông báo xâm phạm quyền thì phải xử lý kịp thời; sau khi chuyển tiếp lời tuyên bố mà 15 ngày không có động tĩnh gì thì khôi phục | …nhưng người dùng ở trong nước, tiền ở trong nước, chương này… |
| mục 4 | mục 10 trong chương này | Đừng tùy tiện đưa thông tin người dùng ra nước ngoài; dữ liệu xuất cảnh có điều kiện pháp định và ngưỡng về số người | …nhưng người dùng ở trong nước, tiền ở trong nước, chương này… |
| mục 11 | chương 11 mục 16 | Trước khi website, App lên máy phải làm đăng ký ICP, theo yêu cầu bảo vệ cấp độ lưu log từ 6 tháng trở lên | …yêu cầu pháp định về tư cách nhà cung cấp và đăng ký lưu hồ sơ xem mục 4 trong chương này, lưu log 6 tháng và nghĩa vụ bảo vệ cấp độ xem… |

## 27-mang-thai-va-sinh-con

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 3 | chương 20 mục 2 | Trong 24 giờ sau sinh phải tiêm mũi vắc-xin viêm gan B đầu tiên | …mẹ có kháng nguyên bề mặt viêm gan B dương tính, khi sinh trẻ phải cùng lúc tiêm vắc-xin viêm gan B và immunoglobulin viêm gan B (xem… |
| mục 11 | chương 18 mục 2 | Thai sản 98 ngày, trợ cấp sinh đẻ do quỹ bảo hiểm sinh đẻ phát theo lương tháng bình quân của công nhân viên đơn vị năm trước | …số ngày thai sản và trợ cấp sinh đẻ tính thế nào xem… |
| mục 16 | mục 7 trong chương này | Học thuộc danh sách “lập tức đi bệnh viện” này, trong thai kỳ và một năm sau sinh đều có hiệu lực | …… |
| mục 16 | chương 9 mục 20 | Con sinh ra mà nuôi không nổi, chỉ có đăng ký dân chính là lối ra hợp pháp duy nhất: nhận tiền rồi giao con cho người khác có thể bị kết án theo tội mua bán trẻ em, sinh xong bỏ mặc là tội bỏ rơi | …lối ra hợp pháp khi con sinh ra thật sự nuôi không nổi xem… |

## 28-dung-pha-co-the-vi-ngoai-hinh

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 1 | chương 2 mục 33 | Giữ BMI trong 20–25, thừa cân thì giảm | …quan hệ BMI với tử vong xem… |
| mục 3 | mục 2 trong chương này | Trước khi tiêm, cấy chỉ, mổ xẻ, kiểm tra hai thứ: giấy phép của cơ sở có ghi “thẩm mỹ y khoa” hay không, và người trực tiếp thực hiện có phải bác sĩ chủ trị hay không | …trước khi làm theo chương này… |
| mục 5 | mục 4 trong chương này | Đừng mua thuốc giảm cân, cà phê giảm cân, kẹo giảm béo và mận enzyme hứa hẹn “gầy nhanh” | …cách phán giống câu thuốc giảm cân ấy (… |
| mục 6 | mục 5 trong chương này | Đừng dùng steroid đồng hóa (“kim tăng cơ”, “thuốc uống”) để đắp cơ bắp | …chương này… |
| mục 6 | mục 7 trong chương này | Thuốc loại hormone giới tính chỉ dùng khi bác sĩ kê đơn và tái khám định kỳ; đừng mua trên mạng, đừng tự tăng liều | …chương này… |

## 29-sau-cu-soc-lon

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | mục 9 trong chương này | Đừng ngay từ đầu đã trả tiền làm tư vấn đau buồn, trước hết xem nỗi đau của mình có thực sự kẹt lại không (những triệu chứng ở mục 8) | …đừng ngay từ đầu đã trả tiền làm tư vấn đau buồn (… |
| đầu chương | mục 11 trong chương này | Cần người ngồi cùng nói chuyện thì gọi 12356, người dưới tuổi thành niên và thiếu niên gọi 12355, muốn khám bệnh thì đăng ký khám tâm lý | …đừng ngay từ đầu đã trả tiền làm tư vấn đau buồn (mục 9), gọi 12356 và đăng ký khám tâm lý (… |
| đầu chương | mục 12 trong chương này | Ba tháng đầu sau biến cố, mọi quyết định lớn không thể đảo ngược đều nhất loạt đẩy về sau | …tư vấn (mục 9), gọi 12356 và đăng ký khám tâm lý (mục 11), quyết định lớn không đảo ngược đẩy về sau (… |
| đầu chương | mục 13 trong chương này | Đừng lấy cái chết làm cách trả nợ: bảo hiểm nhân thọ trong hai năm không trả tiền, tai nạn lao động không công nhận, nợ vẫn trừ từ di sản trước | …và đăng ký khám tâm lý (mục 11), quyết định lớn không đảo ngược đẩy về sau (mục 12), đừng lấy cái chết làm cách trả nợ (… |
| đầu chương | mục 6 trong chương này | Ai không có người thân cũng không có bạn bè, hãy thay “người trông chừng bạn” bằng ba thứ: người hàng xóm có thể vào được nhà bạn, danh sách thăm hỏi của cộng đồng, và liên lạc khẩn cấp trong điện thoại | …không có người thân bạn bè để nhờ, câu “tìm một người trông chừng” hiện thực hóa thế nào xem… |
| đầu chương | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …có ý nghĩ tự sát thì gọi 12356 trước xem… |
| đầu chương | chương 1 mục 32 | Ý nghĩ tự sát vừa nảy lên thì trước hết nói với một người bên cạnh, giao nửa tiếng này ra | …có ý nghĩ tự sát thì gọi 12356 trước xem chương 1 mục 25, thước thời gian của ý nghĩ xem… |
| đầu chương | chương 1 mục 33 | Đừng coi “cứu được” là phương án dự phòng: sau khi uống thuốc trừ sâu, hít khí gas, cấp cứu giữ được là mạng, giữ không được phổi và não | … xem chương 1 mục 25, thước thời gian của ý nghĩ xem chương 1 mục 32, di chứng sau khi được cứu sống xem… |
| mục 1 | mục 6 trong chương này | Ai không có người thân cũng không có bạn bè, hãy thay “người trông chừng bạn” bằng ba thứ: người hàng xóm có thể vào được nhà bạn, danh sách thăm hỏi của cộng đồng, và liên lạc khẩn cấp trong điện thoại | …không có người để giao hộp thuốc, mấy ngày này nhất định một mình trong phòng, xem chương này… |
| mục 2 | mục 6 trong chương này | Ai không có người thân cũng không có bạn bè, hãy thay “người trông chừng bạn” bằng ba thứ: người hàng xóm có thể vào được nhà bạn, danh sách thăm hỏi của cộng đồng, và liên lạc khẩn cấp trong điện thoại | …không tìm được người đi cùng xem chương này… |
| mục 4 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …chính mình có ý nghĩ tự sát xử trí thế nào xem… |
| mục 5 | mục 6 trong chương này | Ai không có người thân cũng không có bạn bè, hãy thay “người trông chừng bạn” bằng ba thứ: người hàng xóm có thể vào được nhà bạn, danh sách thăm hỏi của cộng đồng, và liên lạc khẩn cấp trong điện thoại | …không tìm được người như thế (sống một mình, mất con, con cái cũng không còn), giao chuyện này cho cộng đồng và điện thoại, xem chương này… |
| mục 6 | chương 13 mục 1 | Có người ngã xuống, không thở, lập tức ấn ngực thật mạnh, nhờ người xung quanh gọi 120 và tìm máy AED | …vì sao “trong nhà có người” đáng giá, xem… |
| mục 6 | chương 22 mục 10 | Coi “định kỳ gặp gỡ mọi người” là một khoản chi cho sức khỏe, đừng chỉ khi tâm trạng tệ mới đi tìm người | …sống một mình odds ratio tử vong 1.32, cao hơn khoảng ba phần mười, xem… |
| mục 6 | mục 11 trong chương này | Cần người ngồi cùng nói chuyện thì gọi 12356, người dưới tuổi thành niên và thiếu niên gọi 12355, muốn khám bệnh thì đăng ký khám tâm lý | …là một điều trong văn bản, nó yêu cầu cán bộ lưới và nhân viên xã hội “kịp thời phát hiện nguy cơ khủng hoảng tâm lý như biến cố gia đình, mất việc, nghỉ học” (xem chương này… |
| mục 6 | mục 11 trong chương này | Cần người ngồi cùng nói chuyện thì gọi 12356, người dưới tuổi thành niên và thiếu niên gọi 12355, muốn khám bệnh thì đăng ký khám tâm lý | …đường dây nóng có thể gọi đi gọi lại, không phải chỉ gọi được một lần (xem chương này… |
| mục 9 | mục 8 trong chương này | Nỗi đau quá nửa năm vẫn đứng yên, cuộc sống không trôi nổi được, hãy đi đăng ký khám khoa tâm thần hoặc khoa tâm lý lâm sàng | …vậy trước đối chiếu… |
| mục 9 | mục 4 trong chương này | Người thân chết vì tự tử, tai nạn hoặc án mạng, đừng trông vào gồng chịu, hãy chủ động tìm hỗ trợ chuyên môn | …… |
| mục 9 | mục 8 trong chương này | Nỗi đau quá nửa năm vẫn đứng yên, cuộc sống không trôi nổi được, hãy đi đăng ký khám khoa tâm thần hoặc khoa tâm lý lâm sàng | …mục 4 (người thân chết vì tự tử, tai nạn hoặc án mạng) loại mất người thân nguy cơ cao ấy,… |
| mục 11 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …12356 mở từ khi nào và mỗi ngày nhận máy bao lâu xem… |
| mục 12 | mục 11 trong chương này | Cần người ngồi cùng nói chuyện thì gọi 12356, người dưới tuổi thành niên và thiếu niên gọi 12355, muốn khám bệnh thì đăng ký khám tâm lý | …bên cạnh không có người không dính lợi ích như thế, gọi 12356 kể một lượt (xem chương này… |
| mục 13 | mục 4 trong chương này | Người thân chết vì tự tử, tai nạn hoặc án mạng, đừng trông vào gồng chịu, hãy chủ động tìm hỗ trợ chuyên môn | …họ còn phải gánh thêm chương này… |
| mục 13 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …khi ý nghĩ nảy lên làm sao xem… |
| mục 13 | chương 1 mục 32 | Ý nghĩ tự sát vừa nảy lên thì trước hết nói với một người bên cạnh, giao nửa tiếng này ra | …khi ý nghĩ nảy lên làm sao xem… |
| mục 13 | chương 1 mục 33 | Đừng coi “cứu được” là phương án dự phòng: sau khi uống thuốc trừ sâu, hít khí gas, cấp cứu giữ được là mạng, giữ không được phổi và não | …khi ý nghĩ nảy lên làm sao xem chương 1 mục 25, 32, di chứng sau khi được cứu sống xem… |
| mục 13 | chương 19 mục 16 | Ba khoản tiền khi tử vong do lao động phải phân rõ: trợ cấp mai táng, trợ cấp cấp dưỡng thân nhân, trợ cấp tử vong vì công một lần | …chuẩn của ba khoản tiền tử vong vì công xem… |
| mục 13 | chương 25 mục 9 | Tiền nằm rải ở nhiều nơi phải lần lượt đi nhận: số dư quỹ tiết kiệm nhà ở, chế độ bảo hiểm xã hội, chế độ tai nạn lao động | …thủ tục cụ thể của di sản và nợ xem… |
| mục 13 | mục 4 trong chương này | Người thân chết vì tự tử, tai nạn hoặc án mạng, đừng trông vào gồng chịu, hãy chủ động tìm hỗ trợ chuyên môn | …cái giá sức khỏe của người nhà xem chương này… |

## 30-con-thoi-di-hoc

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | mục 9 trong chương này | Không mua sản phẩm và dịch vụ quảng cáo có thể “chữa khỏi cận thị”, “giảm độ cận” | …… |
| đầu chương | mục 10 trong chương này | Giấc ngủ, bài tập về nhà, thể dục và xếp hạng đều có quy định thành văn, trường không làm được thì có thể nêu ra | …… |
| đầu chương | mục 11 trong chương này | Trẻ không gồng nổi thì có thể xin nghỉ học tạm, học bạ nhà trường bắt buộc phải giữ cho con, tối đa 1 năm | …mục 10 (quy định thành văn về giấc ngủ bài tập thể dục xếp hạng) và… |
| mục 2 | mục 7 trong chương này | Tờ kết quả khám sức khỏe học sinh hằng năm phải tự đọc một lượt, mục bất thường trong năm đưa đi bệnh viện kiểm tra | …lấy vẹo cột sống làm ví dụ, là vì nó có thử nghiệm chia nhóm bốc thăm, có cửa sổ thời gian rõ ràng, lại vừa đúng là một trong những mục trọng điểm của khám sức khỏe học sinh (xem… |
| mục 2 | mục 11 trong chương này | Trẻ không gồng nổi thì có thể xin nghỉ học tạm, học bạ nhà trường bắt buộc phải giữ cho con, tối đa 1 năm | …lo lỡ bài học, giai đoạn giáo dục bắt buộc có thể nghỉ học tạm, tối đa 1 năm, học bạ được giữ, xem… |
| mục 5 | mục 4 trong chương này | Để trẻ ở ngoài trời đủ 2 giờ mỗi ngày — hiện là biện pháp phòng cận thị duy nhất có thử nghiệm ngẫu nhiên ủng hộ | …thứ thật sự có thử nghiệm bốc thăm chống đỡ là… |
| mục 5 | mục 12 trong chương này | Phát hiện thị lực kém, đi bệnh viện đo khúc xạ giãn đồng tử, sau đó tái khám theo khoảng cách bác sĩ hẹn | …ghi rõ 1～3 tuổi, 4～6 tuổi, sau 7 tuổi đều nên định kỳ sàng lọc khúc xạ, xem dự trù viễn còn bao nhiêu, cách tra xem… |
| mục 6 | mục 4 trong chương này | Để trẻ ở ngoài trời đủ 2 giờ mỗi ngày — hiện là biện pháp phòng cận thị duy nhất có thử nghiệm ngẫu nhiên ủng hộ | …bản thân không phải làm gì, việc phải làm ở… |
| mục 6 | mục 5 trong chương này | Từ 0 đến 3 tuổi không cho màn hình, 3 đến 6 tuổi hạn chế hết mức, học sinh phổ thông dùng ngoài việc học mỗi ngày không quá 1 giờ | …bản thân không phải làm gì, việc phải làm ở… |
| mục 6 | mục 12 trong chương này | Phát hiện thị lực kém, đi bệnh viện đo khúc xạ giãn đồng tử, sau đó tái khám theo khoảng cách bác sĩ hẹn | …xác nhận xong tái khám thế nào xem… |
| mục 6 | mục 9 trong chương này | Không mua sản phẩm và dịch vụ quảng cáo có thể “chữa khỏi cận thị”, “giảm độ cận” | …đừng mua sản phẩm quảng cáo chữa được, xem… |
| mục 7 | mục 12 trong chương này | Phát hiện thị lực kém, đi bệnh viện đo khúc xạ giãn đồng tử, sau đó tái khám theo khoảng cách bác sĩ hẹn | …thị lực kém phải đến khoa mắt đo khúc xạ giãn đồng tử (… |
| mục 7 | mục 2 trong chương này | Điều trị cần làm đừng vì “đợi thi xong” mà trì hoãn; có cửa sổ đi theo tuổi xương, không đi theo lịch thi | …vẹo cột sống bất thường phải đến khoa cơ xương hoặc ngoại cột sống (… |
| mục 8 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …có ý nghĩ tự sát xử trí thế nào xem… |
| mục 9 | mục 4 trong chương này | Để trẻ ở ngoài trời đủ 2 giờ mỗi ngày — hiện là biện pháp phòng cận thị duy nhất có thử nghiệm ngẫu nhiên ủng hộ | …hai việc thật sự có bằng chứng ở… |
| mục 9 | mục 12 trong chương này | Phát hiện thị lực kém, đi bệnh viện đo khúc xạ giãn đồng tử, sau đó tái khám theo khoảng cách bác sĩ hẹn | …hai việc thật sự có bằng chứng ở mục 4 (ngoài trời) và… |
| mục 12 | mục 7 trong chương này | Tờ kết quả khám sức khỏe học sinh hằng năm phải tự đọc một lượt, mục bất thường trong năm đưa đi bệnh viện kiểm tra | …“thị lực kém” khám sức khỏe học sinh phát hiện chỉ là kết quả sàng lọc trước, còn phải đem đi bệnh viện làm một lần khám mắt đầy đủ, xem… |
| mục 13 | mục 7 trong chương này | Tờ kết quả khám sức khỏe học sinh hằng năm phải tự đọc một lượt, mục bất thường trong năm đưa đi bệnh viện kiểm tra | …sâu răng cũng là mục trọng điểm hướng dẫn của khám sức khỏe học sinh, xem… |
| mục 14 | chương 5 mục 9 | Con nạp tiền, thưởng bằng điện thoại: khoản chi lớn của trẻ từ đủ 8 tuổi trở lên mà cha mẹ không công nhận thì có thể đòi trả lại | …nạp tiền và hoàn trả xem… |
| mục 14 | mục 10 trong chương này | Giấc ngủ, bài tập về nhà, thể dục và xếp hạng đều có quy định thành văn, trường không làm được thì có thể nêu ra | …yêu cầu thành văn về giấc ngủ xem chương này… |
| mục 14 | mục 4 trong chương này | Để trẻ ở ngoài trời đủ 2 giờ mỗi ngày — hiện là biện pháp phòng cận thị duy nhất có thử nghiệm ngẫu nhiên ủng hộ | …yêu cầu thành văn về giấc ngủ xem mục 10 trong chương này (giấc ngủ, bài tập, thể dục), ngoài trời xem chương này… |
| mục 14 | mục 5 trong chương này | Từ 0 đến 3 tuổi không cho màn hình, 3 đến 6 tuổi hạn chế hết mức, học sinh phổ thông dùng ngoài việc học mỗi ngày không quá 1 giờ | …mục 10 (giấc ngủ, bài tập, thể dục), ngoài trời xem mục 4 trong chương này (mỗi ngày ngoài trời 2 giờ), thời lượng màn hình xem chương này… |
| mục 15 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …con tâm trạng xuống thấp, nói không muốn sống nữa, gọi 12356 trước, xem… |
| mục 15 | chương 6 mục 28 | Đừng bỏ tiền làm “chỉnh khuynh hướng tính”, “trị đồng tính”, cũng đừng gửi người thân vào đó | …vì sao “chỉnh trị” đừng dính vào, xem… |
| mục 15 | mục 8 trong chương này | Cho trẻ 12–18 tuổi làm một lần sàng lọc trầm cảm, đừng lấy bài đánh giá tâm lý của trường làm chẩn đoán | …cũng có thể theo chương này… |

## 31-nhung-con-duong-sau-18-tuoi

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| mục 1 | mục 11 trong chương này | Không vào đơn vị là việc làm linh hoạt: hưu trí và y tế phải tự đóng bảo hiểm nơi làm việc, hạn chế hộ tịch đã mở | …nhận đơn nền tảng và việc làm linh hoạt không có ngưỡng bằng cấp luật định, căn cứ tự đóng bảo hiểm và bảo hiểm tổn thương nghề nghiệp xem chương này… |
| mục 1 | mục 12 trong chương này | Giao đồ ăn, chạy xe công nghệ, chở hàng nội thành: nền tảng đóng phí bảo hiểm tổn thương nghề nghiệp theo từng đơn cho bạn, bạn không phải đóng | …nhận đơn nền tảng và việc làm linh hoạt không có ngưỡng bằng cấp luật định, căn cứ tự đóng bảo hiểm và bảo hiểm tổn thương nghề nghiệp xem chương này… |
| mục 1 | chương 23 mục 5 | Không đậu phổ thông không có nghĩa đường tắt: trung cấp có tuyển thông suốt liên thông và thi riêng, tuyển dụng vị trí kỹ năng còn có thể hạ yêu cầu bằng cấp | …cửa vào của trung cấp, trường kỹ và tuyển thông suốt liên thông giáo dục nghề xem… |
| mục 1 | chương 23 mục 4 | “Học không nổi” thì trước hết tính theo chính sách: học phí trung cấp phần lớn đã miễn, trợ cấp học tập 2300 yên, vay hỗ trợ học tập tối đa mỗi năm 20.000 | …cửa vào của trung cấp, trường kỹ và tuyển thông suốt liên thông giáo dục nghề xem chương 23 mục 5, nhà không nuôi nổi có trợ giúp gì xem… |
| mục 1 | mục 16 trong chương này | Không vào đơn vị, tự làm ăn: tiền khởi điểm trước xem khoản vay bảo lãnh khởi nghiệp: cá nhân tối đa 300.000 yên, tài chính trả giúp một nửa lãi | …tiền khởi điểm có vay được khoản nhà nước trả giúp một phần lãi không, xem chương này… |
| mục 1 | mục 13 trong chương này | Hai con đường ngay ngày đăng ký nguyện vọng thi đại học đã chốt được biên chế: sinh viên sư phạm công phí và y sinh định hướng, cái giá là 6 năm thực hiện cam kết | …hai ngả sinh viên sư phạm công phí và y sinh định hướng, ngay ngày đăng ký nguyện vọng thi đại học đã chốt, cái giá ghi ở… |
| mục 1 | mục 14 trong chương này | Muốn đi làm việc ở nước ngoài, trước tiên tra công ty này có tư cách kinh doanh hợp tác lao động đối ngoại không: nó không được thu bạn tiền đặt cọc | …ngưỡng của đi làm việc ở nước ngoài không ở trên bạn, mà ở công ty có tư cách hay không, cách nhận biết xem… |
| mục 2 | mục 3 trong chương này | Ứng tuyển xong mà từ chối nghĩa vụ quân sự: hai năm không được xuất cảnh hay học lên, học lại, cũng không được nhận vào công chức và doanh nghiệp nhà nước | …loạt chế tài hai năm không được xuất cảnh, chỉ phạt người ứng tuyển xong mà hối hận, xem… |
| mục 3 | mục 2 trong chương này | Năm tròn 18 tuổi phải đăng ký nghĩa vụ quân sự trước ngày 31/10; lính nghĩa vụ tại ngũ đúng là 2 năm | …riêng không đăng ký nghĩa vụ quân sự thì không nằm trong đó, đăng ký nghĩa vụ quân sự xem… |
| mục 10 | chương 23 mục 8 | Trước khi bỏ tiền thi lấy chứng chỉ, trước hết tra giấy đó có nằm trong Danh mục tư cách nghề nghiệp quốc gia hay trong danh sách cơ quan đánh giá đã ghi danh tại Bộ Nhân lực và An sinh Xã hội không | …“lấy chứng nhanh” mua bằng tiền và giấy giả mạo xem… |
| mục 11 | chương 7 mục 18 | BHXH đứt đóng đừng hoảng: lương hưu tính cộng dồn, BHYT bù theo quy tắc | …BHXH đứt đóng bù thế nào, số năm cộng dồn thế nào, xem… |
| mục 12 | mục 11 trong chương này | Không vào đơn vị là việc làm linh hoạt: hưu trí và y tế phải tự đóng bảo hiểm nơi làm việc, hạn chế hộ tịch đã mở | …số văn bản này là Nhân xã bộ phát 〔2021〕56, câu việc làm linh hoạt cũng trích nó, xem… |
| mục 12 | mục 11 trong chương này | Không vào đơn vị là việc làm linh hoạt: hưu trí và y tế phải tự đóng bảo hiểm nơi làm việc, hạn chế hộ tịch đã mở | …phần y tế và lương hưu vẫn phải tự đóng bảo hiểm, tham gia bảo hiểm việc làm linh hoạt xem… |
| mục 14 | chương 21 mục 5 | “Tuyển dụng lương cao ở nước ngoài” nhất loạt coi là lừa đảo; bị lừa đi làm lừa đảo qua mạng, về nước còn bị hạn chế xuất cảnh | …bẫy tuyển dụng lương cao ở nước ngoài và khu lừa đảo qua mạng xem… |
| mục 15 | mục 14 trong chương này | Muốn đi làm việc ở nước ngoài, trước tiên tra công ty này có tư cách kinh doanh hợp tác lao động đối ngoại không: nó không được thu bạn tiền đặt cọc | …thật sự xuất cảnh ra nước ngoài làm cho ông chủ nước ngoài là bộ khác, xem chương này… |
| mục 16 | chương 12 mục 1 | Chỉ khởi nghiệp bằng số tiền thua nổi được, không động đến gia sản, không vay tiền để khai trương | …cuốn sách ở… |
| mục 16 | chương 7 mục 13 | Thất nghiệp thì đi lĩnh trợ cấp đào tạo nghề, trợ cấp tập sự việc làm và trợ cấp BHXH, đừng tự túc tiền học lớp nghề | …trợ cấp đào tạo nghề, trợ cấp BHXH và tập sự việc làm khi thất nghiệp, xem… |

## 33-song-khi-khuyet-tat

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | chương 24 mục 11 | Trị xong thật sự còn lại trở ngại chức năng, đến liên đoàn người khuyết tật cấp huyện nơi hộ khẩu xin thẻ người khuyết tật | …thẻ người khuyết tật làm thế nào, bảy nhóm và cấp một đến bốn đánh thế nào, xem… |
| đầu chương | chương 24 mục 10 | Giám định tàn tật phải đợi điều trị kết thúc rồi mới làm, làm sớm cấp sẽ bị đánh thấp | …giám định tàn tật phải đợi đến lúc nào làm, xem… |
| đầu chương | chương 7 mục 8 | Ai có thẻ người khuyết tật thì xin hai khoản trợ cấp cho người khuyết tật | …hai trợ cấp người khuyết tật lĩnh thế nào, xem… |
| đầu chương | chương 19 mục 15 | Khi thương tình ổn định thì đi thẩm định năng lực lao động, cấp bậc thương tật quy thẳng ra tiền | …thẩm định năng lực lao động tai nạn lao động và cấp bậc thương tật quy ra bao nhiêu tiền, xem… |
| đầu chương | chương 17 mục 7 | Nhà có người già nằm lâu hoặc mất khả năng nặng, đến bộ phận bảo hiểm y tế nơi tham gia bảo hiểm xin bảo hiểm chăm sóc dài hạn; nó không phải chỉ phát cho người già | …bảo hiểm chăm sóc dài hạn mất khả năng nặng xin thế nào, xem… |
| mục 2 | chương 29 mục 11 | Cần người ngồi cùng nói chuyện thì gọi 12356, người dưới tuổi thành niên và thiếu niên gọi 12355, muốn khám bệnh thì đăng ký khám tâm lý | …cần người ngồi cùng nói chuyện gọi 12356, xem… |
| mục 2 | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …trong nhà đừng tích trữ thuốc ngủ và thuốc trừ sâu, xem… |
| mục 2 | chương 29 mục 8 | Nỗi đau quá nửa năm vẫn đứng yên, cuộc sống không trôi nổi được, hãy đi đăng ký khám khoa tâm thần hoặc khoa tâm lý lâm sàng | …đau buồn và cảm xúc kẹt nửa năm vẫn đứng yên, đi đăng ký khám khoa tâm thần hoặc khoa tâm lý lâm sàng, xem… |
| mục 4 | chương 16 mục 1 | Uống thuốc đủ theo y lệnh, đừng thấy khoẻ là ngừng | …bệnh mãn tính của người chăm sóc đừng ngừng thuốc, xem… |
| mục 5 | chương 17 mục 8 | Nhà có người nằm lâu, coi loét tì đè là kẻ thù số một: trang bị nệm khí điện, trở mình đúng giờ, mỗi ngày xem một lượt chỗ xương nhô lên | …phòng loét tì đè khi nằm lâu, nệm khí và trở mình đúng giờ, xem… |
| mục 5 | mục 7 trong chương này | Sau khi làm xong thẻ người khuyết tật, đến liên đoàn người khuyết tật cấp huyện hỏi cho hết một lượt những gì có thể xin | …trợ cấp trang bị dụng cụ trợ giúp cơ bản xin thế nào, xem chương này… |
| mục 6 | chương 6 mục 10 | Đừng bỏ nhiều tiền mua thực phẩm bảo vệ sức khỏe, cao thuốc, đồ bồi bổ để “điều dưỡng cơ thể” | …bộ lối nói chuyện của thực phẩm bảo vệ sức khỏe là cùng một kiểu, xem… |
| mục 6 | chương 5 mục 29 | Mua trên mạng tin quy tắc nền tảng và điều luật, đừng tin streamer và “đánh giá tốt” | …đã mua rồi muốn đòi tiền lại, đi theo đường mua trên mạng và tiêu dùng trả trước, xem… |
| mục 7 | chương 7 mục 8 | Ai có thẻ người khuyết tật thì xin hai khoản trợ cấp cho người khuyết tật | …một là trợ cấp sinh hoạt người khuyết tật khó khăn và trợ cấp chăm sóc người khuyết tật nặng, xem… |
| mục 7 | mục 8 trong chương này | Con dưới 7 tuổi mà có khuyết tật hoặc tự kỷ, đến liên đoàn người khuyết tật cấp huyện xin cứu trợ phục hồi chức năng | …hai là cứu trợ phục hồi chức năng trẻ em khuyết tật, xem chương này… |
| mục 7 | mục 9 trong chương này | Cải tạo dốc, tay vịn và phòng tắm trong nhà, có thể xin trợ cấp ở chính phủ cấp huyện trở lên | …bốn là trợ cấp cải tạo thiết bị không rào cản trong gia đình, xem chương này… |
| mục 7 | mục 10 trong chương này | Khi xin việc chủ động nói rõ mình có thẻ, doanh nghiệp tuyển bạn được khấu trừ một khoản tiền | …năm là tuyển dụng theo tỷ lệ và dịch vụ việc làm, xem chương này… |
| mục 7 | mục 11 trong chương này | Thuế thu nhập cá nhân của người khuyết tật có thể được giảm, giảm bao nhiêu gọi điện hỏi cục thuế tỉnh | …sáu là giảm thu thuế thu nhập cá nhân, xem chương này… |
| mục 7 | chương 24 mục 11 | Trị xong thật sự còn lại trở ngại chức năng, đến liên đoàn người khuyết tật cấp huyện nơi hộ khẩu xin thẻ người khuyết tật | …quy trình làm thẻ xem… |
| mục 8 | mục 6 trong chương này | Đừng mua các liệu pháp và dụng cụ kiểu “chữa khỏi bại liệt, mù lòa, điếc” | …cơ sở hứa “chắc khỏi” theo chương này… |
| mục 10 | chương 7 mục 12 | Làm đăng ký thất nghiệp rồi thì tranh thủ được công nhận là người gặp khó khăn về việc làm, để hưởng trợ cấp BHXH hoặc vị trí công ích | …công nhận người gặp khó khăn về việc làm và trợ cấp BHXH xem… |
| mục 10 | chương 7 mục 13 | Thất nghiệp thì đi lĩnh trợ cấp đào tạo nghề, trợ cấp tập sự việc làm và trợ cấp BHXH, đừng tự túc tiền học lớp nghề | …trợ cấp đào tạo nghề xem… |
| mục 13 | mục 14 trong chương này | Trẻ khuyết tật xin vào học, trường không được từ chối nhận; không đến trường được thì sở giáo dục bố trí giáo viên dạy đến tận nhà | …câu trường không được từ chối nhận ở giai đoạn đi học xem chương này… |
| mục 14 | chương 30 mục 3 | Trẻ bị bắt nạt, ngay trong ngày phải báo cho nhà trường và yêu cầu xử lý bằng văn bản; có đánh người, cướp tiền, tung tin giả thì báo công an ngay | …con bị bắt nạt trong trường giữ bằng chứng thế nào, trường bắt buộc đi qua trình tự nào, xem… |
| mục 14 | mục 13 trong chương này | Người khuyết tật thi cao khảo (tuyển sinh đại học) có thể xin thuận lợi hợp lý, dùng đề chữ nổi thì thời gian thi cộng thêm một nửa | …thuận lợi hợp lý của thi đại học xem chương này… |
| mục 16 | chương 24 mục 1 | Bệnh thường gặp khám ở cộng đồng trước, qua tuyến cơ sở chuyển tuyến từng cấp lên trên, vạch khởi chi trả nằm viện tính tiếp | …giữa tuyến cơ sở và bệnh viện ba chuyển tuyến thế nào, vạch khởi chi trả tính thế nào, xem… |
| mục 16 | mục 7 trong chương này | Sau khi làm xong thẻ người khuyết tật, đến liên đoàn người khuyết tật cấp huyện hỏi cho hết một lượt những gì có thể xin | …phục hồi chức năng cộng đồng và trang bị dụng cụ trợ giúp xem chương này… |
| mục 17 | mục 13 trong chương này | Người khuyết tật thi cao khảo (tuyển sinh đại học) có thể xin thuận lợi hợp lý, dùng đề chữ nổi thì thời gian thi cộng thêm một nửa | …thí sinh khuyết tật thính lực thi đại học có thể miễn nghe ngoại ngữ, xem chương này… |
| mục 17 | mục 15 trong chương này | Mất chi dưới phải hoặc cả hai chi dưới vẫn thi được bằng lái, loại xe được phép lái gọi là C5 | …người khiếm thính lái xe phải mang thiết bị trợ thính, xem chương này… |
| mục 18 | mục 19 trong chương này | Người giám hộ của người trưởng thành định theo trật tự pháp định; người được giám hộ làm hại người khác, do người giám hộ đền bù | …người giám hộ định thế nào xem chương này… |
| mục 19 | chương 17 mục 1 | Nhân lúc người già còn tỉnh táo, chỉ định bằng văn bản người giám hộ tương lai | …nhân lúc còn tỉnh táo dùng văn bản định người trước, có thể tránh đi hơn nửa tranh chấp về sau, viết cụ thể thế nào xem… |
| mục 20 | chương 19 mục 8 | Trước khi nghỉ việc, trước hết lưu lại phiếu lương, chấm công, hợp đồng lao động, hồ sơ bảo hiểm xã hội và tin nhắn | …đã vào việc rồi đi trọng tài theo tranh chấp lao động, giữ bằng chứng và thời hiệu xem… |

## 34-thuoc-trong-nha-dung-uong-sai

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| đầu chương | chương 13 mục 20 | Uống nhầm chất tẩy rửa, thuốc trừ sâu, thuốc: đừng gây nôn, cầm theo chai lọ đi khám ngay; bắn vào mắt hoặc da thì xả nước sạch thật nhiều 15 phút | …uống nhầm thuốc hoặc chất tẩy rửa làm gì trước, xem… |
| đầu chương | chương 16 mục 1 | Uống thuốc đủ theo y lệnh, đừng thấy khoẻ là ngừng | …thuốc bệnh mãn tính uống đủ theo y lệnh, xem… |
| đầu chương | chương 28 mục 6 | Muốn uống thuốc giảm cân thì đến bệnh viện xin đơn; đừng mua ở shop trên mạng giao hàng không cần đơn | …mua thuốc kê đơn trên mạng phải qua soát đơn trước, xem… |
| mục 2 | chương 20 mục 8 | Trẻ nhũ nhi dưới 3 tháng thân nhiệt lên 38 ℃ thì đi viện ngay, không ở nhà quan sát | …trẻ dưới 3 tháng sốt đi viện ngay, xem… |
| mục 4 | chương 20 mục 6 | Dưới 1 tuổi không cho ăn mật ong | …trong tổng quan ấy có một thử nghiệm thấy mật ong tốt hơn giả dược, nhưng dưới 1 tuổi không cho ăn mật ong, xem… |
| mục 4 | mục 1 trong chương này | Trước khi uống cùng lúc hai loại thuốc cảm hoặc thuốc giảm đau, hãy xem bảng thành phần trước; acetaminophen chỉ được có trong một loại | …trong 14 thứ này nhiều cái tên mang thành phần acetaminophen, uống thêm với thuốc hạ sốt là trùng, xem chương này… |
| mục 5 | chương 27 mục 5 | Có yếu tố nguy cơ cao của tiền sản giật, từ sau tuần thai thứ 12 bắt đầu mỗi ngày một viên aspirin liều thấp | …aspirin liều thấp phòng tiền sản giật, xem… |

## docs/lam-nen-tang-can-nhung-giay-to-gi

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| Ba. Chọn máy chủ: ba bậc chọn thế nào | chương 26 mục 5 | Cho người dùng lên bán hàng, nền tảng phải xác minh - đăng ký, báo cáo thông tin, lưu giữ ba năm | …… |
| Ba. Chọn máy chủ: ba bậc chọn thế nào | chương 26 mục 6 | Nội dung người dùng đăng bạn phải quản: cơ chế kiểm duyệt, cổng tố cáo, phát hiện cái trái pháp luật thì lập tức ngừng truyền và báo cáo | …… |
| Ba. Chọn máy chủ: ba bậc chọn thế nào | chương 26 mục 7 | Cung cấp dịch vụ đăng thông tin, nhắn tin tức thời thì bắt buộc yêu cầu người dùng cung cấp thông tin danh tính thật | …… |
| Ba. Chọn máy chủ: ba bậc chọn thế nào | chương 26 mục 8 | Không mở livestream cho người chưa đủ 16 tuổi; tiền tip xử lý phân bậc theo độ tuổi | …… |
| Ba. Chọn máy chủ: ba bậc chọn thế nào | chương 26 mục 9 | Nhận được thông báo xâm phạm quyền thì phải xử lý kịp thời; sau khi chuyển tiếp lời tuyên bố mà 15 ngày không có động tĩnh gì thì khôi phục | …… |
| Ba. Chọn máy chủ: ba bậc chọn thế nào | chương 26 mục 10 | Đừng tùy tiện đưa thông tin người dùng ra nước ngoài; dữ liệu xuất cảnh có điều kiện pháp định và ngưỡng về số người | …… |

## docs/danh-sach-dung-cu-khan-cap-gia-dinh

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| Danh sách dụng cụ khẩn cấp gia đình: mua gì, để ở đâu, bao lâu kiểm tra một lần | chương 1 mục 26 | Chu bị đủ bình chữa cháy, chăn chữa cháy, mặt nạ thở thoát nạn và túi sơ cứu, mỗi năm kiểm tra một lần | …tương ứng README … |
| Danh sách dụng cụ khẩn cấp gia đình: mua gì, để ở đâu, bao lâu kiểm tra một lần | chương 1 mục 3 | Lắp báo khói; ai mùa đông đun than trong nhà hoặc sưởi bằng khí gas thì lắp thêm báo khí carbon monoxide | …báo khói và báo khí carbon monoxide chọn lắp thế nào, xem… |
| Danh sách dụng cụ khẩn cấp gia đình: mua gì, để ở đâu, bao lâu kiểm tra một lần | chương 1 mục 4 | Dây nối khí gas và bếp gas đến hạn là thay, không tự ý sửa đường ống, kiểu chào hàng đến tận nhà của công ty khí gas có thể từ chối thẳng | …dây nối khí gas và bếp gas xem… |
| Hai. Bộ ba phòng cháy | chương 13 mục 24 | Khi cháy bò sát đất, sờ cửa rồi mới mở, cửa nóng thì đừng mở, đi thang bộ không đi thang máy, đã ra ngoài thì đừng quay lại | …cách thoát ra ngoài (bò sát đất, sờ cửa rồi mới mở, đi thang bộ không đi thang máy), xem… |
| Hai. Bộ ba phòng cháy | chương 1 mục 3 | Lắp báo khói; ai mùa đông đun than trong nhà hoặc sưởi bằng khí gas thì lắp thêm báo khí carbon monoxide | …báo khói xem… |
| Ba. Bỏ gì vào túi sơ cứu | chương 13 mục 12 | Chảy máu ồ ạt trước hết dùng tay đè chặt vết thương, tay chân đè không nổi thì dùng garo, đồng thời gọi 120 | …garo dùng thế nào, lúc nào không được dùng, vì sao “đừng nới ra cho máu chảy”, xem… |
| Ba. Bỏ gì vào túi sơ cứu | chương 13 mục 14 | Sau khi bị bỏng, lập tức xả nước mát chảy liên tục 20 phút, đừng bôi kem đánh răng, nước tương | …thứ thuốc mỡ nào cũng không dùng, hiện trường chỉ làm một việc, lấy nước máy mát xả 20 phút, xem… |
| Ba. Bỏ gì vào túi sơ cứu | chương 13 mục 15 | Đột nhiên nổi ban khắp người, hụt hơi hoặc choáng váng, xử trí theo sốc phản vệ, gọi 120 ngay và nói rõ | …nó là thuốc kê đơn, phải nhờ bác sĩ kê, xem… |
| Năm. Mỗi năm kiểm tra một lần, mười phút | chương 1 mục 3 | Lắp báo khói; ai mùa đông đun than trong nhà hoặc sưởi bằng khí gas thì lắp thêm báo khí carbon monoxide | …pin mỗi năm thay một lần, xem… |
| Sáu. Những thứ không cần mua | chương 13 mục 1 | Có người ngã xuống, không thở, lập tức ấn ngực thật mạnh, nhờ người xung quanh gọi 120 và tìm máy AED | …ngừng tim thì phải làm là ấn lập tức, hô người gọi 120, đồng thời đến nơi công cộng gần nhất lấy AED về, xem… |
| Sáu. Những thứ không cần mua | chương 5 mục 24 | Không tồn hàng vì “giá gạch ngang” và siêu sale | …phần tồn thừa, sau cùng phần lớn để hết hạn rồi vứt, xem… |

## docs/dong-ho-sinh-hoc-va-ca-lam-dem

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| Cơ thể nhận biết thời gian thế nào, vì sao ca đêm lại làm hại người | chương 2 mục 40 | Làm ca đêm càng lâu nguy cơ tim mạch càng cao, chuyển được vị trí thì chuyển sớm | …đây là… |
| Hai. Cái đồng hồ này chỉnh giờ bằng ánh sáng, không đi theo tuyến “nhìn thấy” | chương 3 mục 2 | Cố định giờ thức dậy, cuối tuần cũng vậy | …đây cũng là… |
| Chín. Phần này không nói | chương 2 mục 40 | Làm ca đêm càng lâu nguy cơ tim mạch càng cao, chuyển được vị trí thì chuyển sớm | …ca đêm rốt cuộc làm nguy cơ tim mạch cao bao nhiêu, tính theo số năm thế nào, nằm ở… |
| Chín. Phần này không nói | chương 2 mục 39 | Thức khuya xong thì tối hôm sau bù ngủ liền, đừng dồn sang cuối tuần | …thức khuya xong bù ngủ thế nào, nằm ở… |
| Chín. Phần này không nói | chương 2 mục 13 | Mỗi đêm ngủ khoảng 7 tiếng, giờ giấc cố định | …đêm ngủ bao lâu, giờ giấc có đều không, nằm ở… |
| Chín. Phần này không nói | chương 3 mục 2 | Cố định giờ thức dậy, cuối tuần cũng vậy | …sáng gặp ánh sáng và cố định giờ dậy, nằm ở… |

## docs/gap-nguoi-la-gap-nan-co-nen-dung-lai-khong

| Nguồn | Trích dẫn | Mục được trỏ tới | Ngữ cảnh nơi trích dẫn |
| --- | --- | --- | --- |
| Trên đường gặp người lạ gặp nạn, đi thẳng hay dừng lại | chương 13 mục 2 | Người già té, có người ngã xuống: trước hết ngồi xổm xuống gọi họ, gọi 120, đừng vội dìu dậy; với người lạ thì đi khỏi cũng hợp pháp, đã dừng lại thì đừng dùng tay di chuyển người | …đây là… |
| Những chi phí có thể xuất hiện sau khi dừng lại, từ nhẹ đến nặng | chương 19 mục 6 | Công ty chấm dứt hợp đồng trái pháp luật, tiền bồi thường gấp hai lần chuẩn trợ cấp kinh tế | …công ty nếu vì chuyện này đuổi bạn, thường thuộc chấm dứt hợp đồng lao động trái pháp luật, tiền bồi thường tính theo 2N (… |
| Những chi phí có thể xuất hiện sau khi dừng lại, từ nhẹ đến nặng | chương 8 mục 15 | Người bên cạnh nói ra “ai cũng đừng hòng sống tốt”, “dẫn con đi cùng”, đừng coi là lời giận: thân thuộc gần có thể trực tiếp đưa đi khám, công an nhận được báo án cũng phải quản | …chính mình giữ bằng chứng thế nào, báo công an thế nào, xem… |
| Những chi phí có thể xuất hiện sau khi dừng lại, từ nhẹ đến nặng | chương 1 mục 25 | Khi trầm cảm hoặc có ý nghĩ tự sát thì gọi 12356, trong nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …đường dây nóng trợ giúp tâm lý 12356, xem… |
| Hai trường hợp khiến “đi thẳng” không còn miễn phí | chương 8 mục 1 | Gặp tai nạn giao thông thì trước hết dừng xe, cứu người, báo công an, đừng bỏ chạy | …lúc này thứ cần xem không phải có nên quan tâm người khác, mà là xử trí tai nạn giao thông và bỏ chạy sau tai nạn làm sao, xem… |
| Khi quyết định dừng lại, cách làm ít tốn công nhất | chương 13 mục 1 | Có người ngã xuống, không thở, lập tức ấn ngực thật mạnh, nhờ người xung quanh gọi 120 và tìm máy AED | …không thở thì ấn thật mạnh ngực người ấy, xem… |
| Khi quyết định dừng lại, cách làm ít tốn công nhất | chương 13 mục 39 | Cứu người mà bị thương, mất tiền: trước hết tìm người gây hại và bảo hiểm y tế, rồi mới nộp đơn xin xác nhận hành vi dũng cảm cứu người | …muốn đòi lại khoản tiền ấy, xem… |

