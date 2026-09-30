# Chương 34: Thuốc trong nhà, đừng uống ra chuyện

2026-09-29. Khởi nguồn là issue #43, độc giả đề nghị thêm “hướng dẫn dùng thuốc không kê đơn”, muốn sách trả lời ba mảng: hạ sốt giảm đau, thuốc đường tiêu hóa, cảm cúm.

Trước hết đã rà phần có sẵn: toàn sách nói thuốc không kê đơn chỉ có hai chỗ. Mục thuốc cai thuốc lá của chương 2 nhắc sản phẩm thay thế nicotine là thuốc không kê đơn, chương 28 nói quy định bán theo phân loại thuốc kê đơn và không kê đơn. Không mục nào nói những thuốc này tự mua về thì uống thế nào để không ra chuyện. Sau khi xác nhận với người dùng, mở chương 34 mới.

Định vị: không viết thành cẩm nang dùng thuốc, không nói từng bệnh nên uống thuốc gì. Chỉ thu các mục kiểu “một động tác là tránh được hậu quả nặng”, tổng cộng 9 mục. Trục đo toàn là tử vong (gồm các điểm cuối sức khỏe như suy gan, xuất huyết dạ dày, suy thận ở trẻ sơ sinh).

## Đối chiếu nguồn từng mục

### Văn bản chính thức tiếng Trung (toàn bộ lấy được nguyên văn từng chữ)

nmpa.gov.cn dùng Invoke-WebRequest vẫn trả 412, nhưng **headless Chrome kèm proxy lấy được thân bài sau khi render**, docx phụ lục dùng curl kèm proxy, UA trình duyệt và Referer thì tải thẳng được.

| Văn bản | Cách lấy | Dùng ở | Điểm chính nguyên văn đã đối chiếu |
| --- | --- | --- | --- |
| Thông báo số 15 năm 2020 của Cục Quản lý và giám sát thuốc quốc gia (sửa đổi tờ hướng dẫn paracetamol) | trang chuyển tải của Cục Quản lý thuốc tỉnh Hồ Nam + file .doc của phụ lục 2, antiword lấy toàn văn | Mục 1 | Phụ lục 2 (thuốc không kê đơn), mục 3 phần Lưu ý “khuyến nghị paracetamol đường uống mỗi ngày tối đa không quá 2 gam”; mục 4 “nên hạn chế hết mức dùng chung các thuốc chứa paracetamol hoặc thuốc hạ sốt giảm đau khác, để tránh quá liều thuốc hoặc gây cộng hưởng độc tính”; mục tác dụng phụ “dùng paracetamol quá liều có thể gây tổn thương gan nặng”. **Trong phụ lục không có quy định về việc uống rượu**, câu về rượu bia chuyển sang trích pháp quy của Mỹ |
| Văn bản Quốc thực dược giám an [2011] số 209 (quản lý sử dụng chế phẩm uống nimesulide) | trang gốc nmpa, headless Chrome | Mục 2 | “Chế phẩm uống nimesulide cấm dùng cho trẻ dưới 12 tuổi”; thuốc tuyến hai, liều tối đa một lần 100mg, liệu trình không quá 15 ngày |
| Thông báo số 34 năm 2020 của Cục Quản lý và giám sát thuốc quốc gia (sửa đổi tờ hướng dẫn các chế phẩm metamizole liên quan) | trang gốc nmpa + docx phụ lục 1 đến 3 | Mục 2 | Cả ba yêu cầu sửa đổi của metamizole viên, viên metamizole hỗ hợp thanh hao, viên (nang) Trọng cảm linh đều có “chế phẩm này cấm dùng cho trẻ em - thiếu niên dưới 18 tuổi”; câu cảnh báo của metamizole viên “chế phẩm này thường không dùng làm thuốc lựa chọn đầu, chỉ dùng khi bệnh cấp - nặng và không có thuốc hiệu quả khác để điều trị”; tác dụng phụ gồm mất bạch cầu hạt, thiếu máu bất sản, sốc phản vệ |
| Thông báo số 57 năm 2021 của Cục Quản lý và giám sát thuốc quốc gia (sửa đổi tờ hướng dẫn dung dịch uống An phên ma mỹ và 13 chế phẩm khác) | trang gốc nmpa + phụ lục .doc | Mục 4 | Danh sách 14 chế phẩm chép từng chữ; câu cảnh báo “không khuyến nghị cha mẹ hoặc người giám hộ tự cho trẻ dưới 2 tuổi dùng chế phẩm này, phải dùng dưới hướng dẫn của bác sĩ hoặc dược sĩ”; phần Lưu ý thêm mới “phải dùng nghiêm theo cách dùng và liều lượng ghi trong tờ hướng dẫn thuốc, tránh dùng quá liều”, đồng thời đổi câu cũ thành “nên hạn chế dùng chung các thuốc trị cảm cúm chứa hoạt chất giống hoặc tương tự nhau” |
| Thông báo số 68 năm 2022 của Cục Quản lý và giám sát thuốc quốc gia (omeprazole viên tan trong ruột chuyển sang thuốc không kê đơn) cùng phụ lục 2 mẫu tờ hướng dẫn | trang gốc nmpa + phụ lục docx | Mục 6 | Chỉ định “dùng để giảm ngắn hạn triệu chứng ợ nóng và trào ngược axit do axit dạ dày quá nhiều”; Lưu ý mục 1 “dùng không quá 7 ngày”, mục 2 “trong hai tháng không được uống lại”, mục 3 khó nuốt hoặc đau khi nuốt, nôn ra máu, đi ngoài ra máu hoặc phân đen thì không dùng; mục 13 triệu chứng báo động và loại trừ ung thư ác tính; mục 18 tránh dùng chung với clopidogrel; mục 29 trên 55 tuổi mà triệu chứng mới xuất hiện hoặc thay đổi nên hỏi bác sĩ |

Câu “từ năm 2025 trẻ dưới 2 tuổi cấm dùng thuốc ho chứa codeine, dextromethorphan” lưu truyền trên mạng chỉ thấy trong lời thuật lại của nguồn thứ hai, không tìm được nguyên văn của Cục Quản lý thuốc, **chưa viết**. Trang phổ cập khoa học của Cục Quản lý thuốc tỉnh Cát Lâm (chuyển tải từ công chúng WeChat) nêu “aspirin dưới 16 tuổi dùng cẩn trọng, lysine aspirin cấm dưới 3 tháng tuổi” “thuốc tiêm Sài Hồ cấm cho trẻ em” cũng vì chỉ có bản chuyển tải của công chúng WeChat, **chưa viết**.

### Pháp quy và văn bản giám sát của Mỹ

| Văn bản | Dùng ở | Nguyên văn đã đối chiếu |
| --- | --- | --- |
| 21 CFR 201.326(a)(1)(iii)(A), bản hiện hành trên eCFR | Mục 1 | Liver warning của thuốc không kê đơn paracetamol dành cho người lớn phải là dòng đầu tiên dưới Warnings; ba tình huống: quá mức tối đa 24 giờ, with other drugs containing acetaminophen, 3 or more alcoholic drinks every day |
| 21 CFR 201.326(a)(2)(iii)(A) | Mục 3 | Sáu tình huống của Stomach bleeding warning: age 60 or older; stomach ulcers or bleeding problems; blood thinning (anticoagulant) or steroid drug; other drugs containing NSAIDs; 3 or more alcoholic drinks every day; take more or for a longer time than directed |
| FDA Drug Safety Communication 2020-10-15 (NSAIDs và thai 20 tuần) | Mục 5 | Từ tuần 20 trở đi có thể gây vấn đề chức năng thận của thai nhi và thiểu ối; phủ cả thuốc kê đơn và OTC; FAERS tính đến 2017-07-21 có 35 ca, tất cả đều nặng, 5 ca trẻ sơ sinh chết và đều kèm suy thận sơ sinh; đa số hồi phục trong 72 giờ đến 6 ngày sau khi ngừng thuốc; aspirin liều nhỏ 81 mg là ngoại lệ; nhãn OTC trước đây chỉ cảnh báo 3 tháng cuối; “Many OTC medicines contain NSAIDs, including those used for pain, colds, flu, and insomnia”; “Other medicines, such as acetaminophen, are available” |

### Văn liệu tiếng Anh (Europe PMC lấy nguyên văn tóm tắt)

| Văn liệu | Dùng ở | Số đã đối chiếu |
| --- | --- | --- |
| Larson 2005, Hepatology 42(6):1364-1372, doi:10.1002/hep.20948 | Mục 1 | 22 trung tâm, 6 năm, 662 ca suy gan cấp; 275 ca (42%) là paracetamol; liều trung vị 24 g; nhóm không cố ý 131 ca (48%); nhóm không cố ý 38% đồng thời uống hai chế phẩm trở lên; 65% sống, 27% chết không ghép, 8% ghép |
| Belay 1999, NEJM 340(18):1377-1382, doi:10.1056/NEJM199905063401801 | Mục 2 | 1981—1997 có 1207 ca dưới 18 tuổi; đỉnh năm 1980 là 555 ca, từ 1987 mỗi năm không quá 36 ca; 82% đo được salicylate máu; tỷ lệ chết 31%; từ 1980 bắt đầu phát cảnh báo về thuốc nhóm salicylate |
| CNT Collaboration 2013, Lancet 382(9894):769-779, doi:10.1016/S0140-6736(13)60900-9 | Mục 3 | 280 thử nghiệm NSAID so với giả dược, 124513 người; biến chứng tiêu hóa trên: ibuprofen 3.97 (2.22–7.10), naproxen 4.22 (2.71–6.56), diclofenac 1.89 (1.16–3.09); mọi NSAID đều làm nguy cơ suy tim tăng khoảng gấp đôi; kết luận nói về high-dose |
| Smith 2014, Cochrane CD001831.pub5 | Mục 4 | 29 thử nghiệm (19 người lớn, 10 trẻ em); ở trẻ em, thuốc ho, thuốc kháng histamine, kháng histamine cộng thuốc thông mũi, thuốc ho cộng giãn phế quản đều không hơn giả dược; 21 nghiên cứu báo cáo tác dụng bất lợi, loại có kháng histamine và dextromethorphan nhiều hơn; mật ong một thử nghiệm hơn giả dược; chưa gộp số |
| Kenealy 2025, Cochrane CD000247.pub4 | Mục 7 | Tóm tắt viết “For this 2013 update”; cảm lạnh thông thường 6 nghiên cứu 1147 người RR 0.83 (0.60–1.14); tác dụng bất lợi 1.8 (1.01–3.21), người lớn 2.62 (1.32–5.18), trẻ em 0.91 (0.51–1.63); viêm mũi có mủ 0.73 (0.47–1.13), tác dụng bất lợi 1.46 (1.10–1.94) |
| Hahn 2002, Cochrane CD002847 | Mục 8 | 8 thử nghiệm, dung dịch bù nước hypo so với dung dịch bù nước uống chuẩn về truyền tĩnh mạch ngoài kế hoạch OR 0.59 (0.45–0.79) |
| ICHD-3 (Cephalalgia 2018, doi:10.1177/0333102417738202) bản trực tuyến 8.2, 8.2.3, 8.2.5 | Mục 9 | 8.2 đau đầu ≥15 ngày mỗi tháng, dùng quá liều >3 tháng; 8.2.3 thuốc giảm đau không opioid ≥15 ngày/tháng, nhiều loại thuốc giảm đau không opioid thì tính cộng dồn; 8.2.5 thuốc giảm đau hỗ hợp ≥10 ngày/tháng, định nghĩa hỗ hợp gồm cả thành phần phụ như caffeine; “more than half of people with headache on 15 or more days/month have” MOH; đa số cải thiện sau khi ngừng thuốc, đáp ứng điều trị dự phòng tốt hơn |

### Tổ chức Y tế Thế giới

WHO (2005) The treatment of diarrhoea, bản hiệu đính thứ 4. iris.who.int là render phía front-end, đi qua DSpace API (`/server/api/pid/find?id=hdl:10665/43209` lấy uuid, rồi tra bundles) lấy được lớp văn bản của bản tiếng Anh và bản tiếng Trung. Mục 2.6 và mục 10.2: thuốc “cầm đi ngoài” và thuốc chống nôn không có lợi ích thực tế cho tiêu chảy cấp hoặc kéo dài ở trẻ em, tuyệt đối không được cho trẻ dưới 5 tuổi; thuốc chống nhu động (loperamide v.v.) có thể gây liệt ruột nặng, có thể chết người, có thể kéo dài nhiễm trùng. Mục 4.5.1: đồ uống chứa quá nhiều đường (nước ngọt có ga, nước trái cây đóng chai bán sẵn) gây mất nước tăng natri. Công thức hypo có tổng áp lực thẩm thấu 245 mOsm/l, truyền tĩnh mạch ngoài kế hoạch ít hơn công thức chuẩn (311) 33%. Mục 6: đi ngoài ra máu ở trẻ em phần lớn do shigella gây ra, phải dùng kháng sinh.

## Mức bằng chứng và quy mô lợi ích định thế nào

- A: mục 3 (phân tích gộp dữ liệu cá nhân, có RR), mục 7 (Cochrane, có RR), mục 8 (sổ tay WHO + Cochrane có OR).
- B: số của mục 1, 2, 5 đến từ đăng ký ca bệnh, giám sát hoặc báo cáo biến cố bất lợi, không có đối chứng; mục 4 Cochrane chưa gộp số; mục 6 là quy định trong tờ hướng dẫn; mục 9 là tiêu chuẩn chẩn đoán.
- Quy mô lợi ích: mục 1 định lớn (suy gan cấp gần ba phần mười chết); mục 2 định lớn (ca bệnh sau cảnh báo từ 555 xuống ≤36, giảm hơn chín phần); mục 3 định lớn (biến chứng tiêu hóa trên khoảng gấp 4 lần, mức giảm tương đối vượt xa 20%). Số của sáu mục còn lại đều không quy trực tiếp được thành “làm rồi giảm được mấy phần”, định trung theo mức độ nặng nhẹ của hậu quả, lý do viết trong Ghi chú của từng mục. Mục 8 thuyết minh riêng: số trong tay so sánh hai công thức bù nước với nhau, chứ không phải uống với không uống, nên không áp ngưỡng máy móc ≥20%.

## Chưa viết vào

- “Quy định mới năm 2025” cấm trẻ dưới 2 tuổi dùng thuốc ho chứa codeine, dextromethorphan: chỉ có lời thuật lại nguồn thứ hai, không tìm thấy nguyên văn.
- Liều cụ thể theo cân nặng của thuốc hạ sốt cho trẻ, luân phiên ibuprofen với paracetamol: tờ hướng dẫn mỗi loại mỗi khác, chương này chỉ chỉ đường tới bác sĩ và dược sĩ.
- Thuốc hết hạn, danh sách tủ thuốc gia đình: hậu quả nhẹ, hiệu quả chi phí thấp.
