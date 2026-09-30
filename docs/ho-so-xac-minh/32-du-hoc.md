# Chương 32 Du học: tư cách, đi làm thêm, bảo hiểm và công nhận bằng khi về nước · Hồ sơ xác minh (2026-09-18)

Nguồn nhiệm vụ: độc giả hỏi trong issue #8 của repo “Có lời khuyên cho du học sinh ở các nước du học thông dụng không, ví dụ Mỹ, Canada, Anh, Úc; với tư cách du học sinh thì có những quyền gì, duy trì thế nào”.

Phần đã có sẵn: chương 21 viết đi nước ngoài và an toàn ở nước ngoài (cảnh báo an toàn của Bộ Ngoại giao, 12308, ranh giới bảo hộ lãnh sự, bảo hiểm y tế và vận chuyển cấp cứu ở nước ngoài, bẫy tuyển dụng lương cao ở nước ngoài), không chứa tư cách và việc học của du học sinh. Chương 23 viết lợi tức của bằng cấp, không chứa công nhận bằng cấp nước ngoài. Nên mở chương mới, không lặp với hai chương đó, thân bài có chỉ chéo qua lại.

Điểm đặt: thêm mới `book/32-du-hoc.md`, 10 mục. Các nước được phủ theo câu hỏi của độc giả giới hạn ở Mỹ, Canada, Anh, Úc, viết số cho từng nước. **Mọi con số chính sách nước ngoài của chương này đều ghi chú là tính đến tháng 9/2026, thân bài và đầu chương đều ghi rõ yêu cầu độc giả tự kiểm theo liên kết nguồn, không bảo trì dài hạn.**

Công cụ lấy nguồn: curl trên máy này lỗi segmentation, `Invoke-WebRequest` với canada.ca và cscse.edu.cn thì timeout hoặc đứt kết nối, chuyển sang headless Chrome `--dump-dom` lấy DOM sau khi render (jsj.moe.gov.cn và immi.homeaffairs.gov.au là render phía front-end, bắt buộc phải đi đường này). Cả 17 liên kết ngoài của chương được chạy kiểm tra khả năng tiếp cận từng cái vào 2026-09-18, trừ canada.ca đều trả về 200; canada.ca PowerShell trên máy không lấy được nhưng headless Chrome lấy được toàn văn, nội dung đã đối chiếu từng chữ.

## Mục 1 (danh sách cơ sở đào tạo được đưa vào công nhận)

| URL | Đối chiếu lại | Căn cứ |
|---|---|---|
| <http://yxcx.cscse.edu.cn/> (đầu vào “tra cơ sở được công nhận” của Trung tâm phục vụ lưu học sinh CSCSE, lấy từ neo trang chủ cscse.edu.cn) | Có | Trang là đầu vào truy vấn theo nước và tên cơ sở đào tạo |
| <https://jsj.moe.gov.cn/> (trang chủ Mạng giám sát - quản lý giáo dục liên quan nước ngoài của Bộ Giáo dục) | Có | Chuyên mục gồm văn bản - chính sách, thông tin cảnh báo, liên kết đào tạo |
| <http://rzzccx.crs.jsj.edu.cn/> (truy vấn thông tin đăng ký chứng nhận chứng chỉ của các chương trình liên kết Trung - nước ngoài) | Có | “Sinh viên nhập học từ năm 2008 trở đi có thể tra số thứ tự đăng ký chứng nhận bằng - chứng chỉ nước ngoài bằng họ tên và số căn cước của mình” |

Định mức A: đầu vào truy vấn và thiết kế chế độ đều đối chiếu từng chữ được trên trang chính thức. Quy mô lợi ích “lớn” — trục tiền định bậc theo cỡ 10.000 yên, học phí và lượng thời gian một đến hai năm vượt xa cỡ 10.000 yên. Ghi chú “danh sách có thể thay đổi, mỗi năm đối soát lại” là lời khuyên thao tác, không phải nguyên văn văn bản.

## Mục 2 (thời hạn nhập cảnh cố định của Mỹ và khung 30 ngày rời nước)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (văn bản hiện hành trên eCFR, 8 CFR 214.2(f)) | Có | F-1 đã hoàn thành việc học và đã được duyệt thực tập, tính từ ngày kết thúc chương trình, thời hạn nhập cảnh tối đa bốn năm hoặc ngày kết thúc giấy phép OPT/STEM OPT có “an additional 30-day period” để chuẩn bị rời nước hoặc tìm tư cách hợp pháp khác; ai kết thúc học hoặc đào tạo sớm thì trong 30 ngày kể từ ngày kết thúc phải rời nước hoặc tìm tư cách hợp pháp khác |
| <https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant> (quy chế cuối cùng trên Công báo liên bang) | Có | publication_date 2026-07-17, effective_on 2026-09-15 (đối chiếu lấy trường qua API federalregister.gov) |

**Đính chính ngày 2026-09-25 (issue #32)**: quy chế này **không** có hiệu lực vào 2026-09-15. Ngày 2026-09-14, thẩm phán Saylor của Tòa án liên bang quận Massachusetts, trong vụ Presidents' Alliance on Higher Education and Immigration v. DHS (No. 1:26-cv-13799-FDS), theo 5 U.S.C. § 705 đã hoãn ngày hiệu lực của toàn bộ quy chế, hiệu lực trên toàn quốc; yêu cầu hủy bỏ (vacatur) và phán quyết tóm tắt bị bác, được phép nộp lại. Mục đã được viết lại theo đó thành “quy chế mới bị đình chỉ, hiện vẫn là D/S và 60 ngày ân hạn”.

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://oiss.yale.edu/news/important-update-court-action-on-the-ds-rule> (Văn phòng sinh viên và học giả quốc tế của Đại học Yale, 2026-09-14) | Có | “issued an order preliminarily enjoining DHS from implementing this rule” “the current D/S framework remains in place for now” “You do not currently need to apply for an Extension of Stay” “The administration may appeal” |
| <https://www.aila.org/blog/think-immigration-one-day-before-taking-effect-federal-court-postpones-the-f-j-and-i-fixed-admission-period-rule> (Hiệp hội Luật sư Di trú Mỹ) | Có | “The relief is nationwide, and it reaches the whole rule” “The rule is postponed, not vacated” “the 60-day grace period stands, and there is no new I-539 requirement” “denying the vacatur and summary judgment requests without prejudice to renewal” “the government may seek review in the First Circuit” |
| <https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/> (hồ sơ vụ án) | Có | Văn bản số 50 (2026-09-14) MEMORANDUM AND ORDER: “GRANTED to the extent that it seeks to postpone the effective date of the Final Rule pursuant to … 5 U.S.C. § 705. To the extent that plaintiffs seek vacatur of the Final Rule, summary judgment, or other relief, the motion is DENIED without prejudice to its renewal”; văn bản số 51 (2026-09-14) “PRELIMINARY INJUNCTION ORDER POSTPONING EFFECTIVE DATE OF FINAL RULE”; thông báo cùng ngày “Status Conference set for 10/2/2026 12:00 PM”. Truy cập thẳng bị 403, đi qua proxy cục bộ lấy được |

Phần thuyết minh định mức ban đầu (dưới đây) giữ lại làm hồ sơ lịch sử, trong đó câu “từ 2026-09-15 đã bị quy chế thời hạn cố định thay thế” không còn đúng.

Định mức A: điều văn và ngày hiệu lực đều đối chiếu từng chữ được. **Đây là cập nhật quan trọng nhất của chương này**: văn bản hiện hành trên eCFR ghi là 30 ngày, cách nói phổ biến trên mạng “60 ngày ân hạn” và “duration of status tính đến tốt nghiệp” đều là chế độ cũ, từ 2026-09-15 đã bị quy chế thời hạn cố định thay thế — chỉ ba ngày trước khi phần này được viết. Quy mô lợi ích “lớn” — trục tự do, hậu quả là lưu trú bất hợp pháp và trục xuất, suy theo bậc “tránh trách nhiệm hình sự — lớn”. Thủ tục gia hạn ở (f)(7), thân bài chỉ chỉ đường, không triển khai.

## Mục 3 (số giờ làm thêm của bốn nước)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (8 CFR 214.2(f)(9)) | Có | Việc làm trong trường “must not exceed 20 hours a week while school is in session”; làm ngoài trường được duyệt “limited to no more than 20 hours a week when school is in session”, nghỉ hè làm toàn thời gian được |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (Phụ lục Student của Luật Di trú, bảng ST26.1) | Có | Bằng cấp trở lên và bên bảo trợ tuân thủ: 20 giờ mỗi tuần trong kỳ học; dưới bằng cấp: 10 giờ; các trường hợp còn lại gồm toàn bộ part-time: không được đi làm. ST26.5 còn cấm tự kinh doanh, vận động viên và huấn luyện viên nghề nghiệp, biểu diễn nghệ thuật |
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> (IRCC) | Có | “You can work up to 24 hours per week”; giấy phép cũ in 20 giờ thì đủ điều kiện vẫn được làm tới 24 giờ; căn cứ là Điều 186(v) IRPR |
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> (Student visa 500 của Bộ Nội vụ) | Có | “work up to 48 hours a fortnight when your course of study or training is in session”; thạc sĩ theo hướng nghiên cứu, tiến sĩ và thân quyến không có giới hạn giờ làm |

Định mức A: bốn nước đều là trang hiện hành hoặc quy định thành văn của cơ quan quản lý di trú, số đối chiếu từng chữ được. Quy mô lợi ích “lớn” — trục tự do, làm quá giờ là vi phạm điều kiện visa, có thể dẫn tới hủy visa và trục xuất.

## Mục 4 (học toàn thời gian là gốc của tư cách đi làm)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> | Có | Trong thời gian nghỉ học được phê duyệt, hoặc đang chuyển trường mà chưa theo học thì không được đi làm ngoài trường, khôi phục việc học rồi mới được làm lại |
| <https://studyinthestates.dhs.gov/students/work/working-in-the-united-states> (DHS Study in the States) | Có | Việc làm trong trường chỉ dành cho sinh viên F-1 có trạng thái Active trong SEVIS; làm ngoài trường phải được phê duyệt trước, trong thời gian xét duyệt I-765 không được bắt đầu làm |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (ST26.1) | Có | Giấy phép đi làm cấp theo loại khóa học, khóa part-time không được đi làm |

Định mức A. Trang của Canada diễn đạt rõ nhất, Mỹ và Anh lấy quy định riêng của mỗi nước làm chứng. Quy mô lợi ích “lớn”, lý do như mục 3.

## Mục 5 (ở Mỹ, báo thay đổi địa chỉ trong 10 ngày)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-265/section-265.1> | Có | Người có nghĩa vụ đăng ký phải “within 10 days of such change” báo thay đổi địa chỉ và địa chỉ mới theo yêu cầu của USCIS |
| <https://www.uscis.gov/ar-11> | Có | Trang mẫu AR-11, nói rõ phải báo thay đổi địa chỉ càng sớm càng tốt để tránh nhận nhầm giấy tờ |

Định mức A: hạn 10 ngày là chữ trắng trong điều văn. Quy mô lợi ích “trung” — trục tự do theo bậc “tránh xử phạt hành chính”, và hậu quả thực của việc nhận nhầm giấy tờ phần lớn là bất lợi về thủ tục, chưa tới mức trách nhiệm hình sự.

## Mục 6 (cảnh báo du học của Bộ Giáo dục)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://jsj.moe.gov.cn/n2/2/2/2001.shtml> | Có | Số 1 năm 2025 (2025-04-09), đạo luật giáo dục đại học của một số bang Mỹ có các điều khoản tiêu cực nhắm vào Trung Quốc |
| <https://jsj.moe.gov.cn/n2/2/2/2030.shtml> | Có | Số 2 (2025-07-18), Philippines trật tự an ninh bất ổn, tội phạm nhằm vào công dân Trung Quốc diễn ra nhiều |
| <https://jsj.moe.gov.cn/n2/2/2/2035.shtml> | Có | Số 3 (2025-08-30), nhắc lại về Philippines |
| <https://jsj.moe.gov.cn/n2/2/2/2060.shtml> | Có | Số 4 (2025-11-16), tình hình an ninh và môi trường du học của Nhật không tốt, khuyên hoạch định du học Nhật phải thận trọng |

Định mức A: số hiệu, ngày và nước nhắm của bốn bản cảnh báo đều được đối chiếu từng mục. Cột nguồn của thân bài chỉ liệt số 4 và số 1 cùng trang chủ chuyên mục, tránh dòng nguồn quá dài. Quy mô lợi ích “trung” — cảnh báo là nhắc rủi ro chứ không phải lệnh cấm, không ứng trực tiếp với hậu quả định lượng được. **Danh sách cảnh báo đổi theo tình hình, chương này theo cùng quy ước với chương 21 trong CLAUDE.md, không bảo trì dài hạn.**

## Mục 7 (OSHC của Úc)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> | Có | Phải có và duy trì OSHC suốt toàn bộ thời gian, trừ các trường hợp được miễn; bảo hiểm không được có khoảng hở với visa trước đó; khi nhập cảnh không chứng minh được đã mua bảo hiểm thì có thể bị từ chối nhập cảnh; nhập cảnh trước khi khóa học bắt đầu thì ngày bắt đầu bảo hiểm tính là ngày tới Úc |

Định mức A. Quy mô lợi ích “trung” — trục tiền, phí bảo hiểm ở cỡ vài nghìn đến hơn 10.000 yên, thuộc ranh giữa “vài trăm đến vài nghìn” và cỡ 10.000 yên, lấy trung. Thẻ chi phí tien=nhieu (chi một lần theo số năm visa).

## Mục 8 (phí visa và phụ phí y tế của Anh)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://www.gov.uk/student-visa> | Có | Xin từ ngoài nước và gia hạn hay chuyển trong nước đều là £558; từ 18 tuổi học bậc bằng cấp trở lên thường tối đa lưu trú 5 năm, dưới bằng cấp 2 năm |
| <https://www.gov.uk/healthcare-immigration-application> | Có | Sinh viên và thân quyến £776 mỗi năm (visa 2 năm tức £1,552), người xin khác £1,035 mỗi năm; quá 6 tháng nhưng chưa đầy 1 năm thì tính trọn năm |

Định mức A: số tiền lấy từng chữ từ trang hiện thời của gov.uk. Quy mô lợi ích “trung” — trục tiền, hai khoản cộng lại cỡ vài nghìn nhân dân tệ. Thân bài không quy ra số nhân dân tệ cụ thể, chỉ viết cỡ “theo tỷ giá hiện thời là khoảng trên dưới mười nghìn”, tránh tỷ giá thay đổi làm số liệu mất tác dụng.

## Mục 9 (thời hạn chứng nhận của CSCSE)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <http://zwfw.cscse.edu.cn/> (sảnh dịch vụ trực tuyến của Trung tâm phục vụ lưu học sinh) | Có | Quy trình chứng nhận bằng - chứng chỉ: đăng ký xác thực tên thật, nộp đơn và hồ sơ, thanh toán trực tuyến, đánh giá và thẩm định; “thời hạn làm việc chứng nhận 10-20 ngày làm việc”; hồ sơ xin gồm văn bằng chứng chỉ, hộ chiếu hay giấy thông hành, thẻ cư trú hay visa - thị thực, ảnh giấy tờ, tuyên bố ủy quyền; hồ sơ xuất nhập cảnh do hệ thống tự lấy |

Định mức A: thời hạn và danh mục hồ sơ là trang ghi rõ. Quy mô lợi ích “trung”, trục thời gian — cái tiết kiệm được là rủi ro lỡ hạn chót chứ không phải thời gian mỗi ngày; theo kiểu “chỉ một lần” đáng lẽ định nhỏ, nhưng hậu quả của việc lỡ tuyển dụng mùa thu hoặc đăng ký thi công chức phải tính theo khung cửa sổ, lấy trung; đây là phán đoán chứ không phải áp máy móc ngưỡng, theo yêu cầu của CLAUDE.md ghi rõ tại đây.

## Mục 10 (danh sách tăng cường xét nghiệm chứng nhận)

| URL | Đối chiếu lại | Điểm chính nguyên văn |
|---|---|---|
| <https://www.cscse.edu.cn/cscse/sy/tzgg/2025102809225023345/index.html> | Có | “Thông báo về việc tăng cường xét nghiệm chứng nhận đối với chứng nhận bằng - chứng chỉ của một số cơ sở nước ngoài (lần chín)”, phát ngày 2025-10-28 |
| <https://www.cscse.edu.cn/> | Có | Chuyên mục thông báo cùng lúc có “Lưu ý quan trọng về cảnh giác với hành vi lừa đảo lợi dụng việc chứng nhận bằng - chứng chỉ trong nước (ngoài nước)”, “Thông báo về việc xử lý vô hiệu chứng nhận bằng - chứng chỉ trong (ngoài) nước của một số trường”, “Thông báo về việc tạm dừng tiếp nhận hồ sơ chứng nhận bằng - chứng chỉ của Đại học Phitsanulok Thái Lan” |

Định mức A: tiêu đề thông báo, số kỳ và ngày đối chiếu từng chữ được. Quy mô lợi ích “trung” — trục tiền, hậu quả là chứng nhận bị cản hoặc chậm, chưa chắc mất toàn bộ học phí, nên không lấy lớn. Thân bài không nêu tên bất kỳ cơ sở cụ thể nào (trừ một trường đã công khai trong tiêu đề thông báo được trích), tránh danh sách thay đổi thì lệch.

## Những thứ chương này chưa viết

- Nghĩa vụ khai thuế của các nước (ví dụ F-1 của Mỹ không có thu nhập vẫn phải nộp mẫu tờ khai) vòng này chưa lấy được trang chính thức đối chiếu từng chữ được, chưa viết.
- Hạn báo cáo thay đổi địa chỉ của Canada, Anh, Úc mỗi nước mỗi khác, chưa lấy nguyên văn từng nước; mục 5 chỉ viết Mỹ và trong Ghi chú nhắc ba nước còn lại cứ theo quy định nước mình mà làm.
- Thủ tục khắc phục sau khi visa sinh viên bị từ chối hay tư cách mất hiệu lực (reinstatement của Mỹ v.v.) chưa viết, thuộc thủ tục chuyên sâu, vượt định vị “không biết là phải chịu thiệt” của chương này.
- Nhật, New Zealand, Singapore v.v. các nước du học khác ngoài phạm vi câu hỏi của độc giả, chưa đưa vào.
