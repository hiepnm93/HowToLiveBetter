# Hồ sơ xác minh nguồn chương 6

Giải thích cách kiểm chứng: doi.org đều trả về 302 chuyển hướng; trang nhà xuất bản của JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature trả 403 với WebFetch, trang PubMed chỉ trả về lời nhắc cookie. Vì vậy phần tóm tắt được thống nhất kiểm chứng qua giao diện REST chính thức của Europe PMC (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json`>, trả về thư mục cùng nguồn với PubMed và cả abstractText); một số ít trường hợp dùng NCBI E-utilities efetch. “URL đã mở thực tế” dưới đây chính là địa chỉ mà WebFetch trả nội dung thành công lúc kiểm chứng. Mọi DOI đều khớp một-một với tiêu đề/tác giả/năm trong thư mục do Europe PMC trả về.

## Mục 1. Vitamin tổng hợp

- Nguồn A: Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - URL đã mở thực tế: Europe PMC REST (tra theo DOI). Tiêu đề khớp “Multivitamins in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial”, 2012, JAMA. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn (tóm tắt): “14,641 male US physicians” “median follow-up 11.2 years” “major cardiovascular events … HR, 1.01; 95% CI, 0.91-1.10; P = .91” “total mortality … HR, 0.94; 95% CI, 0.88-1.02; P = .13”
- Nguồn B: USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - URL đã mở thực tế: <https://jamanetwork.com/journals/jama/fullarticle/2793446> (đích chuyển hướng của doi.org, lấy trực tiếp thành công). Tiêu đề khớp “Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement”, 2022, JAMA 327(23). Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “Multivitamin trials reviewed: 9 RCTs involving 51,550 participants showed no association between multivitamin supplementation and all-cause mortality”; viên đa vi lượng được xếp hạng I; beta carotene/vitamin E được xếp hạng D (“recommends against the use of beta carotene or vitamin E supplements for the prevention of cardiovascular disease or cancer”); beta carotene “Increased lung cancer risk (RR 1.18) in smokers/asbestos-exposed workers” (chương này không trích trực tiếp con số 1.18).
- Phía phản biện trong Ghi chú: Gaziano JM et al. 2012 JAMA, DOI 10.1001/jama.2012.14641
  - URL đã mở thực tế: <https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641> (lần lấy dữ liệu PubMed này trả về tóm tắt thành công). Tiêu đề khớp “Multivitamins in the prevention of cancer in men: the Physicians' Health Study II randomized controlled trial”. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “hazard ratio [HR], 0.92; 95% CI, 0.86-0.998; P=.04” “HR, 0.88; 95% CI, 0.77-1.01; P=.07”

## Mục 2. Dầu cá

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - URL đã mở thực tế: Europe PMC REST (tra theo DOI). Tiêu đề khớp “Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer”, 2019, NEJM. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “25,871 participants” “1 g/day” “median follow-up of 5.3 years” “major cardiovascular events … hazard ratio, 0.92; 95% CI, 0.80 to 1.06; P=0.24” “Death from any cause … hazard ratio was 1.02 (95% CI, 0.90 to 1.15)”
- ASCEND Study Collaborative Group 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus”, 2018, NEJM. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “15,480 patients with diabetes without atherosclerotic cardiovascular disease” “1-gram capsules daily” “Mean 7.4 years” “rate ratio, 0.97; 95% CI, 0.87 to 1.08; P=0.55” “All-cause mortality: rate ratio, 0.95; 95% CI, 0.86 to 1.05”
- Phản biện: Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - URL đã mở thực tế: <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text> (bản ghi này trên Europe PMC không có abstractText, đã chuyển sang NCBI efetch). Tiêu đề khớp “Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia”, REDUCE-IT Investigators, NEJM 2019 (PMID 30415628). Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “hazard ratio was 0.75 (95% CI, 0.68–0.83; P<0.001)” “17.2% of the icosapent ethyl group versus 22.0% of the placebo group” “2 g of icosapent ethyl twice daily (total daily dose, 4 g)” “established cardiovascular disease or diabetes … statin therapy, fasting triglycerides of 135–499 mg/dL” “8,179 patients”

## Mục 3. Vitamin D

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease”, 2019, NEJM. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “2000 IU daily” “25,871” “Median 5.3 years” “Invasive cancer: hazard ratio, 0.96; 95% CI, 0.88 to 1.06; P=0.47” “Major cardiovascular events: hazard ratio, 0.97; 95% CI, 0.85 to 1.12; P=0.69” “Death from any cause: hazard ratio was 0.99 (95% CI, 0.87 to 1.12)”
- Neale RE et al. 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - URL đã mở thực tế: Europe PMC REST (tra theo DOI trả về rỗng, chuyển sang tra TITLE:"D-Health Trial" AND AUTH:Neale, trường DOI trong thư mục trả về là 10.1016/S2213-8587(21)00345-4, khớp với DOI đã ghi). Tiêu đề khớp “The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality”, 2022. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “21 315 participants, including 10 662 to the vitamin D group and 10 653 to the placebo group” “60 000 IU per month for 5 years” “1100 deaths were recorded (placebo 538 [5·1%]; vitamin D 562 [5·3%])” “HR … 1.04 [95% CI 0·93 to 1·18]; p=0·47” “median follow-up 5·7 years” “Australians 60 years or older who were recruited across the country via the Commonwealth electoral roll” (xác nhận nguyên văn ở lần lấy dữ liệu thứ hai; thân bài theo đó viết “trên 60 tuổi”, không ghi mốc trên cụ thể).

## Mục 4. Viên uống chống oxy hóa

- Bjelakovic G et al. 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases”, 2012, Cochrane Database Syst Rev. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “78 trials, 296,707 participants” “RR 1.02, 95% CI 0.98 to 1.05 (random-effects)” “Low risk of bias trials (56 trials, 244,056 participants): RR 1.04, 95% CI 1.01 to 1.07” “Beta-carotene: RR 1.05, 95% CI 1.01 to 1.09” “Vitamin E: RR 1.03, 95% CI 1.00 to 1.05”
- ATBC Study Group 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers”, 1994, NEJM. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “29,133 male smokers” “20 mg per day” “change in incidence, 18 percent; 95 percent confidence interval, 3 to 36 percent” “8 percent higher (95 percent confidence interval, 1 to 16 percent)”
- Omenn GS et al. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease”, 1996, NEJM. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “18,314 smokers, former smokers, and asbestos-exposed workers” “relative risk of lung cancer of 1.28 (95 percent confidence interval, 1.04 to 1.57; P=0.02)” “relative risk of death from any cause was 1.17 (95 percent confidence interval, 1.03 to 1.33)”
- USPSTF hạng D trong Ghi chú: giống Nguồn B của mục 1, đã xác nhận.

## Mục 5. Glucosamine/chondroitin

- Clegg DO et al. 2006 NEJM, DOI 10.1056/NEJMoa052771
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis”, 2006, NEJM. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “1,583 patients” “placebo (60.1%)” “Glucosamine: 3.9 percentage points higher (P=0.30)” “Chondroitin sulfate: 5.3 percentage points higher (P=0.17)” “Combined treatment: 6.5 percentage points higher (P=0.09)” “Celecoxib: 10.0 percentage points higher (P=0.008)” “moderate-to-severe pain at baseline … 79.2 percent vs. 54.3 percent, P=0.002”; lần lấy dữ liệu thứ hai xác nhận nguyên văn “… or placebo for 24 weeks” và “Exploratory analyses suggest that the combination of glucosamine and chondroitin sulfate may be effective in the subgroup of patients with moderate-to-severe knee pain”.

## Mục 6. Vitamin C

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Vitamin C for preventing and treating the common cold”, 2013. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “pooled RR was 0.97 (95% confidence interval (CI) 0.94 to 1.00)” “29 trial comparisons with 11,306 participants” “In adults, colds shortened by 8% (3% to 12%); in children by 14% (7% to 21%)” “No consistent effect of vitamin C was seen on the duration or severity of colds in the therapeutic trials”. Số liệu về nhóm người chịu gắng sức thể lực cực độ trong Ghi chú lấy từ câu được xác nhận nguyên văn ở lần lấy dữ liệu thứ hai: “Five trials involving a total of 598 marathon runners, skiers and soldiers on subarctic exercises yielded a pooled RR of 0.48 (95% CI 0.35 to 0.64)”.

## Mục 7. PET-CT toàn thân / chất chỉ điểm u

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926
  - URL đã mở thực tế: <https://pubmed.ncbi.nlm.nih.gov/29450531/> (lần này trả về thành công). Tiêu đề khớp “Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement”, 2018, JAMA, DOI 10.1001/jama.2017.21926. Đã xác nhận. (DOI 10.1001/jama.2018.0938 mà tôi ghi ban đầu là sai, đã dùng WebSearch tìm ra DOI đúng và kiểm chứng.)
  - URL đã mở thực tế: <https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn (nguyên văn trang chính thức): “No difference was found in ovarian cancer mortality … with 0.34% in the screening group and 0.29% in the usual care group (relative risk, 1.18 [95% CI, 0.82 to 1.71])” “Surgery to investigate positive screening test results among women who ultimately did not have ovarian cancer occurred in 0.2% of participants in the UK Pilot CA-125 group, 0.97% … 3.25% of participants in the UKCTOCS ultrasound group, and 3.17% of participants in the PLCO CA-125 plus ultrasound group” “Up to 15% of these women had major surgical complications”
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Whole-body CT screening: spectrum of findings and recommendations in 1192 patients”, 2005, Radiology. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “1030 (86%) of 1192 subjects had at least one abnormal finding” “Four hundred forty-five (37%) patients received at least one recommendation for additional evaluation” “most findings were benign by description and required no further evaluation”

## Mục 8. Vòng đeo thông minh

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial”, 2016, JAMA. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “estimated mean weight loss, 3.5 kg [95% CI, 2.6-4.5] in the enhanced intervention group and 5.9 kg [95% CI, 5.0-6.8] in the standard intervention group; difference, 2.4 kg [95% CI, 1.0-3.7]; P = .002” “471 randomized participants”

## Mục 9. Thực phẩm hữu cơ

- Smith-Spangler C et al. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Are organic foods safer or healthier than conventional alternatives?: a systematic review”, 2012, Annals of Internal Medicine. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “17 studies in humans and 223 studies of nutrient and contaminant levels in foods met inclusion criteria” “The published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods” “risk difference, 30%” (dư lượng thuốc bảo vệ thực vật) “Only 3 human studies examined clinical outcomes, finding no significant differences … for allergic outcomes or symptomatic infection”. Tóm tắt còn có “antibiotic-resistant … risk difference, 33%”, chương này không trích dẫn. Cụm “phát hiện được không đồng nghĩa với vượt ngưỡng” là cách diễn đạt của tôi, nguyên văn tóm tắt nói về risk difference của việc phát hiện dư lượng, không nêu tỷ lệ vượt ngưỡng.

## Mục 10. Thực phẩm chức năng

- Trang họp báo của Cục Quản lý và Giám sát Thị trường Quốc gia
  - URL đã mở thực tế: <https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>. Tiêu đề trang “Cục Quản lý và Giám sát Thị trường Quốc gia tổ chức họp báo chuyên đề về tình hình liên quan đến “Hướng dẫn ghi nhãn cảnh báo cho thực phẩm chức năng” và “Biện pháp quản lý Danh mục nguyên liệu thực phẩm chức năng và Danh mục công năng bảo vệ sức khỏe””, họp báo ngày 20/8/2019, website chính thức samr.gov.cn. Đã xác nhận.
  - Xuất xứ câu chữ trích dẫn: “thực phẩm chức năng không phải là thuốc, không thể thay thế thuốc để điều trị bệnh” “diện tích vùng cảnh báo không được ít hơn 20% mặt bản in chứa nó” “bổ sung chất dinh dưỡng trong chế độ ăn, duy trì và cải thiện trạng thái sức khỏe của cơ thể hoặc giảm các yếu tố rủi ro gây bệnh”
  - Chưa xác nhận: trang công báo gốc <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> 4 lần WebFetch liên tiếp đều báo “Socket is closed”, trang đăng lại trên gov.cn trả 404, nên phần nguồn chỉ ghi trang họp báo trên samr.gov.cn đã mở thành công.

## Mục 11. Probiotic

- Khalesi S et al. 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “A review of probiotic supplementation in healthy adults: helpful or hype?”, 2019, European Journal of Clinical Nutrition. Đã xác nhận.
  - Xuất xứ câu chữ trích dẫn: “45” nghiên cứu; “this review failed to support the ability of probiotics to cause persistent changes in gut microbiota, or improve lipid profile in healthy adults”; thay đổi hệ vi sinh đường ruột chỉ là “transient”; các chỉ số có cải thiện nhỏ gồm “stool consistency, bowel movement, and vaginal lactobacilli concentration”

## Mục 12. Tắm nước lạnh

- Buijze GA et al. 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - URL đã mở thực tế: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>. Tiêu đề khớp “The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial”, 2016. Đã xác nhận.
  - Xuất xứ số liệu trích dẫn: “3,018 individuals” “30, 60, or 90 seconds” “29% reduction … (IRR: 0.71, P = 0.003)” “For illness days there was no significant group effect” “no clinically relevant differences in quality of life, work productivity, anxiety”
- Cain T et al. 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
  - URL đã mở thực tế: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615>. Tiêu đề khớp “Effects of cold-water immersion on health and wellbeing: A systematic review and meta-analysis”, 2025. Đã xác nhận.
  - Xuất xứ câu chữ trích dẫn: “Eleven randomized controlled trials encompassing 3,177 total participants” “significant increases in inflammation immediately…and 1 hour post CWI” “no meaningful immediate or delayed immune changes” “a significant reduction in stress…12 hours post-CWI” “current evidence base is constrained by few RCTs, small sample sizes”

## Mục 13. Thải độc / kiềm hóa

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - URL đã mở thực tế: Europe PMC REST. Tiêu đề khớp “Detox diets for toxin elimination and weight management: a critical review of the evidence”, 2015. Đã xác nhận.
  - Xuất xứ câu chữ trích dẫn: “Although the detox industry is booming, there is very little clinical evidence to support the use of these diets” “no randomised controlled trials have been conducted to assess the effectiveness of commercial detox diets in humans”
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - URL đã mở thực tế: Europe PMC REST (tra theo DOI). Tiêu đề khớp “Systematic review of the association between dietary acid load, alkaline water and cancer”, 2016, BMJ Open. Đã xác nhận. (DOI 10.1136/bmjopen-2016-010438 mà tôi ghi ban đầu là sai, doi.org trả 404; cả WebSearch lẫn Europe PMC đều cho 2015-010438, đã sửa theo đó.)
  - Xuất xứ câu chữ trích dẫn: “8278 citations were identified, and 252 abstracts were reviewed; 1 study met the inclusion criteria” “no association between the diet acid load with bladder cancer (OR=1.15: 95% CI 0.86 to 1.55, p=0.36)” “Promotion of alkaline diet and alkaline water to the public for cancer prevention or treatment is not justified”

## Mục 14. Mỗi ngày 8 cốc nước

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - URL đã mở thực tế: Europe PMC REST (journals.physiology.org trả 403). Tiêu đề khớp “"Drink at least eight glasses of water a day." Really? Is there scientific evidence for "8 x 8"?”, Heinz Valtin, 2002. Đã xác nhận.
  - Xuất xứ câu chữ trích dẫn: “No scientific studies were found in support of 8 x 8. Rather, surveys of food and fluid intake on thousands of adults…strongly suggest that such large amounts are not needed”

## Các ứng viên từng cân nhắc nhưng không thu vào sách

- Uống collagen: các phân tích tổng hợp hiện có phần lớn cỡ mẫu nhỏ và do nhà sản xuất tài trợ, kết quả nghiêng về tích cực, không phù hợp khổ “bằng chứng cho thấy vô hiệu” của chương này, không thu vào.
- Máy lọc không khí/máy lọc nước: chưa kiểm chứng, cũng không tìm thấy bằng chứng về điểm cuối cứng, không thu vào.
- Bản thân việc dậy sớm: khó tách rời khỏi tính đều đặn của giấc ngủ, không tìm thấy bằng chứng đối chứng trực tiếp, không thu vào.
- Đa nhiệm/pomodoro: không có bằng chứng trực tiếp, theo yêu cầu không thu vào.
