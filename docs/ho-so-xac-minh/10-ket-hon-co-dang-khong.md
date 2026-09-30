# Hồ sơ xác minh nguồn “Kết hôn có đáng không” của chương 10 (2026-09-07)

Công cụ: WebFetch; trang WebFetch không mở được hoặc chỉ render đến phần điều hướng thì dùng curl (qua proxy tại máy) tải HTML/PDF/JSON gốc rồi phân tích tại máy. WebSearch cạn hạn mức giữa chừng khi xác minh chương này (200/200), sau đó chỉ dùng WebFetch và curl.

## Thống kê chính thức

### Bộ Dân chính, “Thông cáo thống kê phát triển sự nghiệp dân chính năm 2024”
- Trang: <https://www.mca.gov.cn/n1288/n1294/n1554/c1662004999980006190/content.html>: WebFetch mở được, tiêu đề trang “Thông cáo thống kê phát triển sự nghiệp dân chính năm 2024”, đăng 2025-07-30 17:00; trang là vỏ bản dành cho người cao tuổi, nội dung nằm trong tệp PDF đính kèm
- PDF: <https://www.mca.gov.cn/gdnps/n2445/n2451/n2458/n2681/c1662004999980006189/attr/400985.pdf>: curl tải về 14 trang, pypdf bóc văn bản
- Trích nguyên văn (trang 13): “1. Dịch vụ đăng ký hôn nhân. Năm 2024, toàn quốc các cơ quan và địa điểm đăng ký hôn nhân tổng cộng 4190 cơ sở, trong đó cơ quan đăng ký hôn nhân 1134, cả năm làm thủ tục đăng ký kết hôn theo pháp luật 6.106.000 cặp, giảm 20,5% so với năm trước. Tỷ lệ kết hôn là 4,3‰, giảm 1,1 phần nghìn so với năm trước. Làm thủ tục ly hôn theo pháp luật 3.513.000 cặp, trong đó: đăng ký ly hôn tại cơ quan dân chính 2.622.000 cặp, ly hôn bằng bản án, hòa giải của tòa án 891.000 cặp. Tỷ lệ ly hôn là 2,5‰.”
- Trích nguyên văn (trang 14, chú thích 5): “Trong dịch vụ đăng ký ly hôn, dữ liệu ly hôn bằng bản án, hòa giải của tòa án lấy từ Tòa án nhân dân tối cao. Công thức tính tỷ lệ kết hôn (ly hôn) là: số cặp kết hôn (ly hôn) trong năm / số dân bình quân trong năm x1000‰.”
- “Tỷ lệ ly hôn trên kết hôn ≈ 57,5%” là kết quả phép chia hai số nêu trên do bài này tự tính, thông cáo không có chỉ tiêu này, phần thân bài đã ghi chú

### Cục Thống kê nhà nước, Thông cáo điều tra sử dụng thời gian toàn quốc lần thứ ba
- Số 1 <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957217.html>: WebFetch mở được; chỉ gồm phương pháp (điều tra từ 11–31/5/2024, 38.500 hộ, 107.000 người), không có số chia nhóm
- Số 2 <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957216.html>: WebFetch mở được; trích: “thời gian bình quân mỗi ngày của cư dân là 1 giờ 17 phút, thời gian bình quân mỗi ngày của người tham gia là 1 giờ 59 phút, tỷ lệ tham gia hoạt động là 64,9%” (lao động việc nhà); “thời gian bình quân mỗi ngày của cư dân là 30 phút, thời gian bình quân mỗi ngày của người tham gia là 1 giờ 46 phút, tỷ lệ tham gia hoạt động là 28,4%” (bạn đồng hành, chăm sóc người thân); không chia nhóm theo giới tính, tình trạng hôn nhân
- Số 3 <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957215.html>: WebFetch mở được và đối chiếu lại bằng curl; trích: “thời gian bình quân mỗi ngày của người tham gia trong lĩnh vực lao động không lương là 2 giờ 45 phút. Trong đó, nam giới 1 giờ 52 phút, nữ giới 3 giờ 29 phút” “tỷ lệ tham gia hoạt động trong lĩnh vực lao động không lương là 75,6%. Trong đó, nam giới 67,5%, nữ giới 83,9%”; không chia nhóm theo tình trạng hôn nhân
- Trả lời phỏng vấn báo chí <https://www.stats.gov.cn/sj/sjjd/202410/t20241031_1957218.html>: WebFetch mở được; trích: “thời gian bình quân mỗi ngày của người tham gia hoạt động việc nhà là 1 giờ 59 phút, giảm 28 phút so với năm 2018”

### Cục Thống kê nhà nước, Thông cáo điều tra sử dụng thời gian toàn quốc năm 2018
- <https://www.stats.gov.cn/sj/zxfb/202302/t20230203_1900224.html>: WebFetch mở được
- Các điểm trích: việc nhà cư dân bình quân 1 giờ 26 phút, nam giới 45 phút, nữ giới 2 giờ 6 phút; tỷ lệ tham gia 58,5%, nam giới 40,4%, nữ giới 75,6%; hoạt động bạn đồng hành, chăm sóc con cái bình quân 36 phút, nam giới 17 phút, nữ giới 53 phút; tỷ lệ tham gia 18,9%, nam giới 12,3%, nữ giới 25,1%

### Tổng điều tra dân số lần thứ bảy (tuổi kết hôn lần đầu / tỷ lệ chưa kết hôn)
- <https://www.stats.gov.cn/sj/pcsj/rkpc/7rp/indexch.htm>: mở được, là trang khung; chỉ mục ở cột trái (left.htm) liệt kê Bảng 2-5 “Dân số các dân tộc toàn quốc theo giới tính, tuổi kết hôn lần đầu”, Bảng 5-1 “Dân số từ 15 tuổi trở lên của các khu vực theo giới tính, tình trạng hôn nhân”…, nhưng các bảng toàn là ảnh JPG, không thể bóc được số liệu, chương này không trích dẫn tuổi kết hôn lần đầu và tỷ lệ chưa kết hôn

## Điều luật

### Bộ luật Dân sự nước Cộng hòa Nhân dân Trung Hoa
- Trang Cơ sở dữ liệu pháp luật nhà nước <https://flk.npc.gov.cn/detail?title=...&id=ff808081729d1efe01729d50b5c500bf>: WebFetch chỉ render đến phần điều hướng (ứng dụng một trang); curl gọi giao diện backend của nó <https://flk.npc.gov.cn/law-search/search/flfgDetails?bbbs=ff808081729d1efe01729d50b5c500bf> trả về JSON: title “Bộ luật Dân sự nước Cộng hòa Nhân dân Trung Hoa”, flxz “Luật”, zdjgName “Đại hội đại biểu nhân dân toàn quốc”, gbrq “2020-05-28”, sxrq “2021-01-01”, cây điều khoản có các nút từ Điều 1062 đến 1066, từ Điều 1076 đến 1079 và Điều 1088; giao diện chỉ cho số điều không cho văn bản, tệp PDF đính kèm là bản ảnh không thể bóc văn bản
- Văn bản các điều được kiểm chứng từ trang đăng lại trên Công báo Tòa án nhân dân tối cao <http://gongbao.court.gov.cn/Details/7f184078694d811fb3314f6af9accf.html> (“Bộ luật Dân sự nước Cộng hòa Nhân dân Trung Hoa (tiếp)”, chuyên mục pháp luật - pháp quy): curl tải về rồi phân tích tại máy
- Trích:
  - Điều 1062 “Các tài sản dưới đây mà vợ chồng có được trong thời gian hôn nhân là tài sản chung của vợ chồng, thuộc sở hữu chung của vợ chồng: (1) lương, thưởng, tiền công lao động; (2) thu nhập từ sản xuất, kinh doanh, đầu tư; (3) lợi tức từ quyền sở hữu trí tuệ; (4) tài sản thừa kế hoặc được tặng cho, trừ quy định tại điểm 3 Điều 1063 của Luật này; (5) các tài sản khác lẽ ra thuộc sở hữu chung. Vợ chồng có quyền xử lý bình đẳng đối với tài sản chung.”
  - Điều 1063 “Các tài sản dưới đây là tài sản riêng của một bên trong vợ chồng: (1) tài sản trước hôn nhân của một bên; (2) khoản bồi thường hoặc đền bù mà một bên nhận được do bị thiệt hại về thân thể; (3) tài sản được xác định chỉ thuộc về một bên trong di chúc hoặc hợp đồng tặng cho; (4) đồ dùng sinh hoạt dùng riêng của một bên; (5) các tài sản khác lẽ ra thuộc về một bên.”
  - Điều 1065 “Nam nữ hai bên có thể thỏa thuận tài sản có được trong thời gian hôn nhân và tài sản trước hôn nhân thuộc sở hữu riêng của từng bên, sở hữu chung, hoặc một phần sở hữu riêng, một phần sở hữu chung. Thỏa thuận phải lập thành văn bản. Không có thỏa thuận hoặc thỏa thuận không rõ thì áp dụng quy định tại Điều 1062, Điều 1063 của Luật này. Thỏa thuận của vợ chồng về tài sản có được trong thời gian hôn nhân và tài sản trước hôn nhân có sức ràng buộc pháp lý đối với cả hai bên.”
  - Điều 1076 “Trường hợp vợ chồng tự nguyện ly hôn thì phải ký thỏa thuận ly hôn bằng văn bản, và đích thân đến cơ quan đăng ký hôn nhân xin đăng ký ly hôn. Thỏa thuận ly hôn phải ghi rõ ý chí tự nguyện ly hôn của hai bên và ý kiến đã thương lượng thống nhất về các nội dung như nuôi con, tài sản và giải quyết nợ.”
  - Điều 1077 “Trong vòng 30 ngày kể từ ngày cơ quan đăng ký hôn nhân nhận được đơn xin đăng ký ly hôn, nếu bất kỳ bên nào không muốn ly hôn thì có thể rút đơn xin đăng ký ly hôn tại cơ quan đăng ký hôn nhân. Trong 30 ngày sau khi hết thời hạn quy định tại khoản trước, hai bên phải đích thân đến cơ quan đăng ký hôn nhân xin cấp giấy chứng nhận ly hôn; nếu không xin thì coi như đã rút đơn xin đăng ký ly hôn.”
  - Điều 1079 “Trường hợp một bên trong vợ chồng yêu cầu ly hôn thì có thể để các tổ chức hữu quan hòa giải hoặc trực tiếp khởi kiện ly hôn tại Tòa án nhân dân. Tòa án nhân dân xét xử vụ ly hôn phải tiến hành hòa giải; nếu tình cảm quả thực đã vỡ vụn, hòa giải không có hiệu lực thì phải cho phép ly hôn. Thuộc một trong các tình huống dưới đây, hòa giải không có hiệu lực thì phải cho phép ly hôn: (1) tái hôn khi đang có vợ (chồng) hoặc sống chung với người khác; (2) thực hiện bạo lực gia đình hoặc ngược đãi, bỏ rơi thành viên gia đình; (3) có tệ nạn như đánh bạc, sử dụng ma túy… được dạy bảo nhiều lần mà không cải tạo; (4) vì tình cảm không hòa hợp mà phân cư đủ hai năm; (5) các tình huống khác dẫn đến tình cảm vợ chồng vỡ vụn. …… Sau khi Tòa án nhân dân tuyên không cho ly hôn, hai bên lại phân cư đủ một năm, một bên lại khởi kiện ly hôn thì phải cho phép ly hôn.”
  - Điều 1088 “Một bên trong vợ chồng gánh vác nghĩa vụ nhiều hơn như nuôi dưỡng con, chăm sóc người già, hỗ trợ công việc của bên kia thì khi ly hôn có quyền yêu cầu bên kia đền bù, bên kia phải đền bù. Cách thức cụ thể do hai bên thỏa thuận; không thỏa thuận được thì do Tòa án nhân dân tuyên phán.”
- Các bản gương chính thức không mở được (ghi để tham khảo): các trang điều khoản trên npc.gov.cn (http/https đều nhảy về trang chủ hoặc bắt tay TLS thất bại); gov.cn ngày 2020-06-01 content_5516649 và các biến thể đều 404

### Bộ Dân chính, Dân phát (2020) số 116
- <https://www.gov.cn/zhengce/zhengceku/2020-12/04/content_5567010.htm>: WebFetch mở được; số văn bản “Dân phát (2020) số 116”, ngày 24/11/2020; văn bản trích dẫn Điều 1076, 1077, 1078 làm căn cứ cho thủ tục đăng ký ly hôn, và quy định trong thủ tục thời hạn lắng ly hôn 30 ngày; không trích nguyên văn từng chữ, chương này chỉ dùng làm chứng cứ phụ cho thủ tục thời hạn lắng

## Bài báo tạp chí (DOI)

### Manzoli 2007, Soc Sci Med 64:77–94, doi 10.1016/j.socscimed.2006.08.031
- <https://doi.org/10.1016/j.socscimed.2006.08.031>: DOI phân giải thành công, chuyển hướng 302 sang linkinghub.elsevier.com (trang đó chỉ trả về “Redirecting”, sciencedirect 403)
- Dữ liệu mô tả và tóm tắt kiểm chứng từ giao diện Europe PMC (PMID 17011690): tiêu đề, tác giả, tập - trang tạp chí khớp với DOI
- Trích: “Pooling 53 independent comparisons, consisting of more than 250,000 elderly subjects, the overall relative risk (RR) for married versus non-married individuals (including widowed, divorced/separated and never married) was 0.88 (95% Confidence Interval: 0.85-0.91). This estimate did not vary by gender, study quality, or between Europe and North America. Compared to married individuals, the widowed had a RR of death of 1.11 (1.08-1.14), divorced/separated 1.16 (1.09-1.23), never married 1.11 (1.07-1.15). Although some evidence of publication bias was found … (RR=0.94; 0.92-0.95).”

### Roelfs 2011, Am J Epidemiol 174(4):379–389, doi 10.1093/aje/kwr111
- <https://doi.org/10.1093/aje/kwr111> → <https://academic.oup.com/aje/article-lookup/doi/10.1093/aje/kwr111>: WebFetch mở trang nhà xuất bản
- Trích: “The authors used meta-analysis to examine 641 risk estimates from 95 publications that provided data on more than 500 million persons. The comparison group consisted of currently married individuals. The mean hazard ratio for mortality was 1.24 (95% confidence interval: 1.19, 1.30) among multivariate-adjusted hazard ratios with a high subjective quality rating. Meta-regressions showed that hazard ratios have been modestly increasing over time for both genders, but have done so somewhat more rapidly for women. The results also showed that the hazard ratio decreased with age and that study quality has an important relation to hazard ratio magnitude.”

### Wang 2020, Glob Health Res Policy 5:4, doi 10.1186/s41256-020-00133-8
- <https://doi.org/10.1186/s41256-020-00133-8>: DOI phân giải thành công, chuyển hướng ghrp.biomedcentral.com → link.springer.com (trang sau yêu cầu ủy quyền cookie, không render được)
- Dữ liệu mô tả và tóm tắt kiểm chứng từ giao diện Europe PMC (tra theo DOI): tiêu đề “Sex differences in the association between marital status and the risk of cardiovascular, cancer, and all-cause mortality: a systematic review and meta-analysis of 7,881,040 individuals”, tác giả Wang Y, Jiao Y, Nie J, O'Neil A, Huang W, Zhang L, Han J, Liu H, Zhu Y, Yu C, Woodward M
- Trích: “Twenty-one studies with 7,891,623 individuals and 1,888,752 deaths were included in the meta-analysis. Compared with married individuals, being unmarried was significantly associated with all-cause, cancer, CVD and coronary heart disease mortalities for both sexes. However, the association with CVD and all-cause mortality was stronger in men. … The pooled ratio for women versus men showed 31 and 9% greater risk of stroke mortality and all-cause mortality associated with never married in men than in women.”
- Lưu ý: tiêu đề ghi 7.881.040 người, tóm tắt ghi 7.891.623 người, bản gốc tự mâu thuẫn; phần thân bài viết “hơn 7,89 triệu người” theo tóm tắt
- Bản thảo nhiệm vụ ghi “Wang 2020 Heart” không tìm thấy; PubMed 31204239 tương ứng là Dhindsa 2020 (xem dưới), không phải tạp chí Heart

### Robles 2014, Psychol Bull 140(1):140–187, doi 10.1037/a0031859
- <https://doi.org/10.1037/a0031859>: DOI phân giải thành công, chuyển hướng doi.apa.org → psycnet.apa.org (trang render bằng JS, chỉ hiện Loading)
- Dữ liệu mô tả và tóm tắt kiểm chứng từ giao diện Europe PMC (PMID 23527470): tiêu đề, tác giả, tập - trang tạp chí khớp với DOI
- Trích: “This meta-analysis reviewed 126 published empirical articles over the past 50 years describing associations between marital relationship quality and physical health in more than 72,000 individuals. … Greater marital quality was related to better health, with mean effect sizes from r = .07 to .21, including lower risk of mortality (r = .11) and lower cardiovascular reactivity during marital conflict (r = -.13), but not daily cortisol slopes or cortisol reactivity during conflict. The small effect sizes were similar in magnitude to previously found associations between health behaviors (e.g., diet) and health outcomes. Effect sizes for a small subset of clinical outcomes were susceptible to publication bias. … we found little evidence for gender differences in studies that explicitly tested gender moderation … designs that limit causal inferences.”

### Dhindsa 2020, Trends Cardiovasc Med 30:215–220, doi 10.1016/j.tcm.2019.05.012
- Trang PubMed <https://pubmed.ncbi.nlm.nih.gov/31204239/> WebFetch chỉ trả về thông báo cookie; dữ liệu mô tả và tóm tắt kiểm chứng từ giao diện Europe PMC (PMID 31204239), DOI do giao diện này đưa ra
- Trích: “Across multiple U.S. and international cohorts, patients who are unmarried, including those who are divorced, separated, widowed, or never married, have an increased rate of adverse cardiovascular events when compared to their married counterparts. Some studies suggest that marriage may have a more protective role for men compared to women. Furthermore, dissatisfaction in a marriage and marriage quality have significant impact on cardiovascular risk.”
- Tính chất: tổng quan tường thuật, không có số gộp, phần thân bài chỉ dùng làm chứng cứ phụ mức B

## Chưa đưa vào
- Chi phí sinh con / nuôi con: trước khi WebSearch cạn hạn mức không tra được văn bản gốc về chi phí nuôi con của Cục Thống kê nhà nước hay cơ quan nghiên cứu chính thức, theo yêu cầu nhiệm vụ không đưa vào
- Lễ hỏi, chi phí cưới hỏi: không có thống kê chính thức, không viết số
