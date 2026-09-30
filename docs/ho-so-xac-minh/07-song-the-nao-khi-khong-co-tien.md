# Hồ sơ xác minh nguồn chương 7

Ngày xác minh 2026-09-07. Toàn bộ đều mở bằng WebFetch. Các đường dẫn cũ của gov.cn như `/zhengce/…`, `/xinwen/…`, `/flfg/…` phần lớn trả về 404, còn `/gongbao/…`, `/zhengce/zhengceku/…`, `/guoqing/…`, `/lianbo/…` mở được; trang mohrss.gov.cn trả về trắng (do script giao diện phía người dùng render), mca.gov.cn trả về 403, moj.gov.cn và npc.gov.cn lần lượt là vòng lặp chuyển hướng và bắt tay TLS thất bại, nhsa.gov.cn mở được nhưng trong trang không tìm thấy thông báo bảo hiểm y tế cư dân năm 2025. Trang gốc nào không mở được thì đã ghi “chờ kiểm chứng” trong mục, hoặc đổi sang trang chính thức khác và chú thích rõ. “Văn bản gốc” dưới đây là các câu nguyên văn mà WebFetch thu được từ trang.

## 1. Trợ cấp bảo hiểm thất nghiệp
- <https://xzfg.moj.gov.cn/front/law/detail?LawID=517> — Đã mở (Kho pháp quy hành chính nhà nước thuộc Bộ Tư pháp). Xác nhận “Điều lệ Bảo hiểm thất nghiệp”, Nghị định của Quốc vụ viện số 258, ban hành ngày 1999-01-22.
  - Điều 14, nguyên văn: "Người thất nghiệp đáp ứng các điều kiện dưới đây được lĩnh trợ cấp bảo hiểm thất nghiệp: tham gia bảo hiểm thất nghiệp theo quy định, đơn vị nơi làm việc và bản thân đã thực hiện nghĩa vụ đóng phí đầy đủ 1 năm theo quy định; gián đoạn việc làm không do ý chí của bản thân; đã làm đăng ký thất nghiệp và có nhu cầu tìm việc."
  - Điều 17, nguyên văn: "Thời gian đóng phí cộng dồn đủ 1 năm dưới 5 năm thì thời hạn hưởng trợ cấp bảo hiểm thất nghiệp tối đa là 12 tháng; cộng dồn đủ 5 năm dưới 10 năm thì thời hạn hưởng tối đa là 18 tháng; cộng dồn từ 10 năm trở lên thì thời hạn hưởng tối đa là 24 tháng."
  - Điều 18, nguyên văn: "Mức trợ cấp bảo hiểm thất nghiệp do Chính phủ nhân dân cấp tỉnh, khu tự trị, thành phố trực thuộc trung ương xác định, theo mức thấp hơn chuẩn lương tối thiểu của địa phương và cao hơn chuẩn bảo đảm đời sống tối thiểu của cư dân thành thị."
- <https://www.12333.gov.cn/portal/common/bszn/sydysl?pfaId=202105281700000004> — Đã mở (hướng dẫn thủ tục trên Nền tảng dịch vụ chính vụ nhân sự - nhân lực toàn quốc thuộc Bộ Tài nguyên nhân lực và An sinh xã hội). Nguyên văn: "người thất nghiệp đã đóng phí bảo hiểm đủ 1 năm và gián đoạn việc làm không do ý chí của bản thân"; nguyên văn về kênh: "Nền tảng dịch vụ chính vụ nhân sự - nhân lực toàn quốc hoặc Nền tảng dịch vụ công bảo hiểm xã hội quốc gia", "ứng dụng di động Zhangshang 12333 (12333 trong lòng bàn tay)", "kênh thẻ bảo hiểm xã hội điện tử (mọi APP, mini program, tài khoản chính thức đã kích hoạt thẻ BHXH điện tử)".
- <https://www.ndrc.gov.cn/fggz/jyysr/jysrsbxf/202206/t20220627_1328819.html> — Đã mở (Cục Việc làm, Ủy ban Phát triển và Cải cách nhà nước, 2022-06-27). Nguyên văn: "từng bước nâng chuẩn trợ cấp bảo hiểm thất nghiệp lên 90% mức lương tối thiểu". Trang không ghi số văn bản.
- Chưa xác nhận: trang gốc “Chỉ dẫn về điều chỉnh chuẩn trợ cấp bảo hiểm thất nghiệp” của Bộ Tài nguyên nhân lực và An sinh xã hội <http://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/gfxwj/shbx/201709/t20170925_278080.html> trả về trắng; hai trang giải đọc trên Cổng Chính phủ <https://www.gov.cn/zhengce/2017-09/27/content_5227865.htm> và <https://www.gov.cn/xinwen/2017-09/26/content_5227678.htm> trả về 404; cổng big5 lặp chuyển hướng. Số văn bản chưa kiểm chứng, Ghi chú của mục đã đánh dấu “số văn bản chờ kiểm chứng”.
- Không sử dụng: si.12333.gov.cn/184890.jhtml và /184927.jhtml mở ra chỉ hiển thị hai chữ “Trang chủ”.

## 2. Trọng tài lao động, chậm trả lương, trợ giúp pháp lý
- <https://chinajob.mohrss.gov.cn/h5/c/2022-07-15/356212.shtml> — Đã mở (Mạng Việc làm Trung Quốc, đơn vị trực thuộc Bộ Tài nguyên nhân lực và An sinh xã hội, tên miền mohrss.gov.cn). Xác nhận “Luật Hòa giải và trọng tài tranh chấp lao động”, Lệnh Chủ tịch nước số 80, thông qua ngày 2007-12-29, thi hành từ 2008-05-01.
  - Điều 53, nguyên văn: "Trọng tài tranh chấp lao động không thu phí. Kinh phí của Ủy ban trọng tài tranh chấp lao động do ngân sách nhà nước bảo đảm."
  - Khoản 1 Điều 27, nguyên văn: "Thời hiệu đề nghị trọng tài đối với tranh chấp lao động là một năm. Thời hiệu trọng tài được tính từ ngày đương sự biết hoặc lẽ ra phải biết quyền của mình bị xâm hại."
  - Khoản 1 Điều 43, nguyên văn: "Phải kết thúc trong vòng 45 ngày kể từ ngày Ủy ban trọng tài tranh chấp lao động thụ lý đơn đề nghị trọng tài. …… Thời hạn gia hạn không được vượt quá 15 ngày."
  - Cùng một quy định này đã mở đối chiếu trên trang Ủy ban Phát triển và Cải cách thành phố Thượng Hải <https://fgw.sh.gov.cn/ys-laogong-1.7.1.1/20240125/8842664277d44777ab8785e9cff148b4.html>, nội dung khớp. Hai đường dẫn /flfg/ và /ziliao/flfg/ của gov.cn đều 404; trang Công báo Tòa án nhân dân tối cao trả về 502.
- <https://www.gov.cn/gongbao/content/2020/content_5469641.htm> — Đã mở. Xác nhận “Điều lệ Bảo đảm chi trả tiền lương cho công nhân nông dân”, Nghị định của Quốc vụ viện số 724, thông qua ngày 2019-12-04, thi hành từ 2020-05-01.
  - Điều 10, nguyên văn: "Công nhân nông dân bị chậm trả lương có quyền khiếu nại theo pháp luật, hoặc đề nghị hòa giải, trọng tài tranh chấp lao động và khởi kiện ra tòa. Bất kỳ đơn vị, cá nhân nào cũng có quyền tố giác với cơ quan hành chính về tài nguyên nhân lực và an sinh xã hội hoặc cơ quan hữu quan khác đối với hành vi chậm trả lương công nhân nông dân."
  - Điều 41, nguyên văn (trích): "Trường hợp có dấu hiệu cấu thành tội từ chối chi trả tiền lương thì phải kịp thời chuyển cơ quan công an xem xét và ra quyết định theo quy định có liên quan."
- <https://www.beijing.gov.cn/zhengce/zhengcefagui/qtwj/202504/t20250402_4053713.html> — Đã mở (trang Chính phủ thành phố Bắc Kinh đăng lại toàn văn luật, website chính quyền địa phương). Xác nhận “Luật Trợ giúp pháp lý” thông qua ngày 2021-08-20, thi hành từ 2022-01-01.
  - Điều 2, nguyên văn: "Trợ giúp pháp lý theo Luật này là chế độ do nhà nước thiết lập, cung cấp miễn phí các dịch vụ pháp lý như tư vấn pháp luật, đại diện, bào chữa hình sự… cho công dân có khó khăn về kinh tế và các đương sự khác đủ điều kiện theo pháp luật"
  - Điều 31 (điểm 5), nguyên văn: "đề nghị xác nhận quan hệ lao động hoặc yêu cầu chi trả tiền lương"
  - Điều 42, nguyên văn (trích): "miễn kiểm tra hoàn cảnh khó khăn về kinh tế: …… người lao động ra thành phố làm việc đề nghị chi trả tiền lương hoặc yêu cầu bồi thường thiệt hại thân thể do tai nạn lao động"
  - Trang Bộ Tư pháp moj.gov.cn (hai URL) lặp chuyển hướng, mạng Nhân đại npc.gov.cn bắt tay TLS thất bại, đường dẫn gov.cn/xinwen trả về 404, vì vậy dùng trang đăng lại của Chính phủ thành phố Bắc Kinh.
- Đường dây nóng 12348: mọi trang liên quan của Bộ Tư pháp đều không mở được, chưa xác nhận; Ghi chú của mục đã nêu rõ số này không xuất hiện trong văn bản được xác minh.

## 3. Trạm cứu trợ
- <https://www.gov.cn/gongbao/content/2003/content_62246.htm> — Đã mở. Xác nhận “Biện pháp quản lý cứu trợ người lang thang ăn xin không nơi nương tựa ở thành thị”, Nghị định của Quốc vụ viện số 381, công bố ngày 2003-06-20, thi hành từ 2003-08-01.
  - Điều 5, nguyên văn: "Cán bộ của cơ quan công an và các cơ quan hành chính hữu quan khác khi thi hành công vụ phát hiện người lang thang ăn xin thì phải thông báo cho họ đến trạm cứu trợ xin giúp đỡ; đối với người khuyết tật, người chưa thành niên, người già và những người khác đi lại không tiện trong số đó, còn phải hướng dẫn, đưa đến trạm cứu trợ."
  - Điều 6, nguyên văn: "Người lang thang ăn xin đến trạm cứu trợ xin giúp đỡ phải khai trung thực các thông tin cơ bản như họ tên của bản thân và đăng ký đồ vật mang theo người tại trạm cứu trợ"
  - Điều 7: đồ ăn, chỗ ở, bệnh cấp tính đưa đi chữa, liên lạc họ hàng - đơn vị, vé phương tiện (WebFetch đưa ra bản tóm tắt, khớp với nội dung ghi trong mục).
- <https://www.gov.cn/gongbao/content/2003/content_62510.htm> — Đã mở. Xác nhận “…Chi tiết thi hành” của Biện pháp nêu trên, Lệnh Bộ Dân chính số 24, công bố ngày 2003-07-21, thi hành từ 2003-08-01.
  - Điều 12, nguyên văn: "Trạm cứu trợ căn cứ tình huống của người được cứu trợ để xác định thời hạn cứu trợ, thông thường không quá 10 ngày"
  - Điều 11, nguyên văn: "Người được cứu trợ khi trở về nơi đăng ký hộ khẩu thường trú, nơi cư trú hoặc đơn vị công tác mà không có tiền đi lại thì trạm cứu trợ phát vé xe (tàu)"

## 4. Cấp cứu - cứu chữa trước
- <https://www.gov.cn/zhengce/zhengceku/2013-03/01/content_6069.htm> — Đã mở. Xác nhận Quốc ban phát số 15, thành văn ngày 2013-02-22.
  - Nguyên văn: "bệnh nhân phát bệnh cấp tính, nặng, nguy kịch trong lãnh thổ Trung Quốc, cần cấp cứu nhưng không rõ thân phận hoặc không có khả năng chi trả chi phí tương ứng"
  - Nguyên văn: "các cơ sở y tế thuộc mọi loại, mọi cấp và nhân viên của họ phải kịp thời, hiệu quả cấp cứu cho bệnh nhân bị thương bệnh cấp tính, nặng, nguy kịch, không được lấy bất kỳ lý do nào để từ chối, đùn đẩy hoặc trì hoãn việc cứu chữa"
  - Nguyên văn: "1. Chi phí cấp cứu phát sinh đối với bệnh nhân không thể xác minh được thân phận. 2. Chi phí cấp cứu bị treo của bệnh nhân rõ thân phận nhưng không có khả năng thanh toán"
- <https://www.gov.cn/gongbao/content/2014/content_2580977.htm> — Đã mở. Xác nhận “Biện pháp quản lý cấp cứu y tế trước khi đến viện”, Lệnh của Ủy ban Y tế và Kế hoạch hóa gia đình quốc gia số 3, công bố ngày 2013-11-29, thi hành từ 2014-02-01.
  - Điều 25, nguyên văn: "Trung tâm (trạm) cấp cứu và các bệnh viện trong mạng lưới cấp cứu thu phí dịch vụ cấp cứu y tế trước viện theo quy định của nhà nước, không được vì vấn đề tiền phí mà từ chối hoặc làm chậm dịch vụ cấp cứu y tế trước viện."
  - Điều 37, nguyên văn (trích): " trung tâm (trạm) cấp cứu vì các yếu tố như chỉ huy điều độ hoặc tiền phí mà từ chối, đùn đẩy hoặc làm chậm dịch vụ cấp cứu y tế trước viện"

## 5. Dịch vụ việc làm công, thị trường việc làm tự do
- <https://www.gov.cn/guoqing/2021-10/29/content_5647636.htm> — Đã mở. Xác nhận “Luật Thúc đẩy việc làm” thông qua ngày 2007-08-30, sửa đổi ngày 2015-04-24.
  - Điều 35, nguyên văn: "Cung cấp miễn phí cho người lao động các dịch vụ dưới đây: tư vấn chính sách, pháp quy về việc làm; công bố thông tin cung - cầu nghề nghiệp, thông tin mức lương chỉ đạo thị trường và thông tin đào tạo nghề; hướng dẫn nghề và giới thiệu việc làm; thực hiện trợ giúp việc làm cho người có khó khăn về việc làm; làm các thủ tục đăng ký việc làm, đăng ký thất nghiệp; các dịch vụ việc làm công khác." (Điều 52, Điều 53 xem mục 10)
- <https://www.gov.cn/zhengce/zhengceku/2022-07/09/content_5700177.htm> — Đã mở. Xác nhận Nhân xã bộ phát số 38, ngày 2022-06-22.
  - Nguyên văn: "miễn phí cung cấp cho xã hội dịch vụ đăng ký và công bố thông tin tìm việc, tuyển dụng việc làm tự do."; "đưa thông tin việc làm tự do vào phạm vi dịch vụ thông tin việc làm công"; "tăng cường trợ giúp việc làm đối với những người làm việc tự do lớn tuổi và gặp khó khăn như chờ việc lâu, hộ thu nhập thấp, khuyết tật"
  - Lưu ý: Phiếu nhiệm vụ ghi “văn bản thị trường việc làm tự do năm 2023 của Bộ Tài nguyên nhân lực và An sinh xã hội”, nhưng văn bản cấp nhà nước thực tế là văn bản số 38 năm 2022; mục ghi năm 2022 theo kết quả xác minh.

## 6, 7. Cứu trợ tạm thời, bảo đảm tối thiểu
- <https://www.gov.cn/gongbao/content/2019/content_5468952.htm> — Đã mở (Công báo Quốc vụ viện, ấn phẩm bổ sung 2019). Xác nhận “Biện pháp tạm thời về cứu trợ xã hội”, Nghị định của Quốc vụ viện số 649, công bố ngày 2014-02-21, sửa đổi theo Nghị định của Quốc vụ viện ngày 2019-03-02.
  - Điều 9, nguyên văn: "Nhà nước cấp bảo đảm đời sống tối thiểu cho những hộ có thu nhập bình quân đầu người của các thành viên sống chung thấp hơn chuẩn bảo đảm đời sống tối thiểu của địa phương, và tình trạng tài sản hộ gia đình phù hợp với quy định về tài sản của hộ bảo đảm đời sống tối thiểu tại địa phương."
  - Điều 10, nguyên văn: "Chuẩn bảo đảm đời sống tối thiểu do Chính phủ nhân dân cấp tỉnh, khu tự trị, thành phố trực thuộc trung ương hoặc cấp thành phố có khu (quận) xác định, công bố theo chi phí sinh hoạt thiết yếu của cư dân địa phương, và điều chỉnh kịp thời theo trình độ phát triển kinh tế - xã hội và biến động giá cả của địa phương."
  - Khoản 1 Điều 11, nguyên văn: "Do các thành viên trong hộ sống chung nộp đơn bằng văn bản tại Chính phủ nhân dân cấp hương (trấn), văn phòng phố nơi đăng ký hộ khẩu; nếu các thành viên trong hộ có khó khăn khi nộp đơn thì có thể ủy quyền cho ban quản lý thôn, ban quản lý khu dân cư nộp đơn thay."
  - Điều 47, nguyên văn: "Nhà nước cấp cứu trợ tạm thời cho những hộ vì hỏa hoạn, tai nạn giao thông và các sự cố ngoài ý muốn khác, thành viên trong hộ đột ngột mắc bệnh nặng… khiến cuộc sống cơ bản tạm thời gặp khó khăn nghiêm trọng."
  - Điều 48, nguyên văn: "Đề nghị cứu trợ tạm thời phải nộp tại Chính phủ nhân dân cấp hương (trấn), văn phòng phố; sau khi thẩm định, công khai minh bạch thì do cơ quan dân chính của Chính phủ nhân dân cấp huyện phê duyệt."
  - Điều 49, nguyên văn: "Các nội dung cụ thể, chuẩn mực của cứu trợ tạm thời do Chính phủ nhân dân địa phương cấp huyện trở lên xác định, công bố."
- <https://www.gov.cn/lianbo/bumen/202509/content_7042627.htm> — Đã mở (báo cáo của Cục Thống kê nhà nước, 2025-09-28).
  - Nguyên văn: "Cuối năm 2024, số người được bảo đảm đời sống tối thiểu thành thị, nông thôn của nước ta lần lượt là 6.250.000 người và 33.615.000 người; chuẩn bình quân bảo đảm đời sống tối thiểu thành thị và nông thôn lần lượt là 798,1 yên và 593,9 yên mỗi người mỗi tháng"
- <https://www.gov.cn/zhengce/zhengceku/202403/content_7007237.htm> — Đã mở. Xác nhận Dân phát số 16, bốn cơ quan trong đó có Bộ Dân chính, ngày 2024-03-21.
  - Nguyên văn: "Chuẩn bảo đảm tối thiểu = chi phí tiêu dùng bình quân đầu người của cư dân thành thị (nông thôn) địa phương năm trước × tỷ lệ lượng hóa."
- Không sử dụng: trang báo cáo thống kê quý của Bộ Dân chính mca.gov.cn trả về 403, trang chỉ mục chuẩn bảo đảm tối thiểu chỉ liệt kê đến quý I/2022; PDF thông cáo thống kê phát triển sự nghiệp dân chính năm 2024 (mca.gov.cn …/400985.pdf) tải được nhưng bóc văn bản thất bại, không trích dẫn. Trang tin gov.cn ngày 2026-01-01 content_7053625 có “Tính đến cuối tháng 10/2025… đối tượng bảo đảm tối thiểu 39.104.000 người” nhưng không có số chuẩn bình quân, không trích dẫn.

## 8. Bảo hiểm y tế cư dân
- <https://www.nhsa.gov.cn/art/2024/8/26/art_105_13634.html> — Đã mở (giải đọc chính sách của Cục Bảo hiểm y tế quốc gia, 2024-08-26, số văn bản Y bệnh phát số 19).
  - Nguyên văn: "chuẩn trợ cấp ngân sách và chuẩn đóng phí cá nhân tăng tương ứng 30 yên và 20 yên so với năm trước, mỗi người mỗi năm không thấp hơn tương ứng 670 yên và 400 yên"
- <https://www.renqiu.gov.cn/renqiu/ybjbmwj/202510/6d90754638a248cba655e94ea518a3bb.shtml> — Đã mở (trang Chính phủ thành phố Nhâm Khâu đăng lại văn bản của Cục Bảo hiểm y tế tỉnh Hà Bắc và các cơ quan liên quan, Ký y bệnh phát số 6, 2025-09-25, văn bản cấp địa phương).
  - Nguyên văn: "năm 2025 chuẩn trợ cấp ngân sách bình quân đầu người của bảo hiểm y tế cư dân tăng 30 yên so với năm trước, đạt mỗi người mỗi năm không thấp hơn 700 yên"; "có thể duy trì mỗi người mỗi năm không thấp hơn 400 yên"; "hỗ trợ toàn bộ chi phí cho người đặc biệt khó khăn, trẻ mồ côi; đối với đối tượng bảo đảm tối thiểu và đối tượng giám sát phòng chống tái nghèo được đưa vào diện theo dõi mà chưa xóa bỏ rủi ro thì hỗ trợ định mức theo chuẩn không thấp hơn 60%"
  - Chưa xác nhận: “Thông báo về công tác bảo đảm y tế cơ bản cho cư dân thành thị, nông thôn năm 2025” của Cục Bảo hiểm y tế quốc gia (kết quả tìm kiếm cho biết là Y bệnh phát số 22) không tìm thấy trang gốc trên nhsa.gov.cn lẫn gov.cn, Ghi chú của mục đã đánh dấu chờ kiểm chứng. Thông báo cấp nhà nước năm 2026 tính đến ngày xác minh chưa tìm thấy.
- <https://www.gov.cn/gongbao/content/2021/content_5659514.htm> — Đã mở. Xác nhận Quốc ban phát số 42, ngày 2021-10-28.
  - Nguyên văn: "hỗ trợ toàn bộ chi phí cho người đặc biệt khó khăn, hỗ trợ định mức cho đối tượng bảo đảm tối thiểu, người trở lại nghèo và rơi vào nghèo."; "đối với đối tượng bảo đảm tối thiểu, người đặc biệt khó khăn, chi phí y tế hợp quy định có thể cứu trợ theo tỷ lệ không thấp hơn 70%"
- <https://www.gov.cn/zhengce/content/202408/content_6965741.htm> — Đã mở. Xác nhận Quốc ban phát số 38, thành văn ngày 2024-07-26.
  - Nguyên văn: "đối với người không tham gia bảo hiểm trong thời kỳ tập trung tham gia bảo hiểm y tế cư dân hoặc không tham gia liên tục, đặt thời hạn chờ hưởng ngạch cố định 3 tháng sau khi tham gia"; "người không tham gia liên tục, cứ gián đoạn thêm 1 năm, về nguyên tắc cộng thêm 1 tháng thời hạn chờ hưởng ngạch biến động trên cơ sở thời hạn chờ hưởng ngạch cố định"
  - Văn bản này còn mở đối chiếu khớp nội dung tại <https://app.www.gov.cn/govdata/gov/202408/01/517878/article.html>, và có câu "cứ đóng thêm 1 năm được giảm 1 tháng thời hạn chờ hưởng ngạch biến động".
- <https://www.nhsa.gov.cn/art/2026/3/5/art_14_19809.html> — Đã mở (Cục Bảo hiểm y tế quốc gia, 2026-03-05). Nguyên văn: "chuẩn trợ cấp ngân sách bình quân đầu người của bảo hiểm y tế cư dân tăng 24 yên."

## 9. Thẻ căn cước cư dân
- <https://www.gov.cn/gongbao/content/2003/content_62254.htm> — Đã mở. Xác nhận “Luật Thẻ căn cước cư dân”, Lệnh Chủ tịch nước số 4, ngày 2003-06-28.
  - Điều 12, nguyên văn: "Cơ quan công an phải cấp thẻ căn cước cư dân trong vòng 60 ngày kể từ ngày công dân nộp “Phiếu đăng ký đề lĩnh thẻ căn cước cư dân”."
  - Điều 20, nguyên văn: "Công dân đề lĩnh, đổi lĩnh, cấp lại thẻ căn cước cư dân phải nộp phí công làm thẻ. Chuẩn phí công làm thẻ căn cước cư dân do cơ quan chủ quản giá cả của Quốc vụ viện cùng cơ quan tài chính của Quốc vụ viện xác định."
  - Lưu ý: trích dẫn theo văn bản công bố năm 2003, luật này đã được sửa đổi năm 2011, Ghi chú của mục đã nêu rõ.
- <https://www.gov.cn/zhengce/2021-12/25/content_5712922.htm> — Đã mở. Xác nhận “Biện pháp quản lý thẻ căn cước cư dân tạm thời”, Lệnh Bộ Công an số 78, ngày 2005-06-07, thi hành từ 2005-10-01.
  - Điều 2, nguyên văn: "Trong thời gian đề lĩnh, đổi lĩnh, cấp lại thẻ căn cước cư dân, người đang gấp cần dùng thẻ căn cước cư dân có thể xin lĩnh thẻ căn cước cư dân tạm thời."
  - Điều 7, nguyên văn: "Thời hạn hiệu lực của thẻ căn cước cư dân tạm thời là 3 tháng"
  - Điều 9, nguyên văn: "Có thể xin lĩnh thẻ căn cước cư dân tạm thời tại đồn công an nơi đăng ký hộ khẩu thường trú."
  - Điều 12, nguyên văn: "và trong vòng 3 ngày kể từ ngày nhận đơn thì cấp thẻ căn cước cư dân tạm thời cho người đề lĩnh."
  - Điều 17, nguyên văn: "Công dân đề lĩnh, đổi lĩnh, cấp lại thẻ căn cước cư dân tạm thời phải nộp phí công làm thẻ."

## 10. Trợ cấp cho người có khó khăn về việc làm
- <https://www.gov.cn/zhengce/zhengceku/202401/content_6926462.htm> — Đã mở. Xác nhận “Biện pháp quản lý quỹ trợ cấp việc làm” của Bộ Tài chính, Bộ Tài nguyên nhân lực và An sinh xã hội (bản sửa đổi theo Tài xã số 164), ngày 2023-12-20.
  - Nguyên văn: "đối với phí bảo hiểm xã hội mà người có khó khăn về việc làm đã nộp sau khi đi làm việc tự do linh hoạt, cấp một khoản trợ cấp bảo hiểm xã hội nhất định, chuẩn trợ cấp về nguyên tắc không quá 2/3 số phí thực nộp của họ"; "tối đa không quá 3 năm"
  - Nguyên văn: "cấp trợ cấp vị trí cho người có khó khăn về việc làm được bố trí vào vị trí công ích, chuẩn trợ cấp thực hiện tham chiếu chuẩn lương tối thiểu địa phương"
  - Nguyên văn: "đối với sinh viên tốt nghiệp thuộc hộ bảo đảm tối thiểu, hộ không ai có việc làm, hộ thuộc đối tượng giám sát phòng chống tái nghèo và người đặc biệt khó khăn mà đang tích cực tìm việc, khởi nghiệp trong năm học cuối; và sinh viên tốt nghiệp khuyết tật hoặc được vay tín dụng học phí quốc gia, cấp một khoản trợ cấp tìm việc một lần"
- “Luật Thúc đẩy việc làm” (cùng trang với mục 5) Điều 52, nguyên văn: "áp dụng các biện pháp miễn giảm thuế - phí, hỗ trợ lãi vay, trợ cấp bảo hiểm xã hội, trợ cấp vị trí…, thông qua các kênh như bố trí vào vị trí công ích, thực hiện ưu đãi ưu tiên và hỗ trợ trọng điểm cho người có khó khăn về việc làm"; Điều 53, nguyên văn: "vị trí công ích mà chính phủ đầu tư khai thác phải ưu tiên bố trí người có khó khăn về việc làm đáp ứng yêu cầu của vị trí."
- Không sử dụng: trợ cấp nâng cao kỹ năng từ bảo hiểm thất nghiệp (Nhân xã bộ phát số 40, mức 1.000/1.500/2.000 yên), trang gốc của Bộ Tài nguyên nhân lực và An sinh xã hội trắng, trang tin gov.cn 404, không xác minh được, bỏ cả mục.

## 11. Can thiệp tìm việc
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1037/a0035923%22&resultType=core&format=json> — Đã mở (bản ghi Europe PMC, trang PubMed bản thân chỉ trả về thông báo cookie). Xác nhận Liu S, Huang JL, Wang M, Psychological Bulletin 2014;140:1009-1041, DOI 10.1037/a0035923.
  - Nguyên văn: "Summarizing the data from 47 experimentally or quasi-experimentally evaluated job search interventions"; "the odds of obtaining employment were 2.67 times higher for job seekers participating in job search interventions"
  - Nguyên văn (các thành tố hiệu quả): "teaching job search skills, improving self-presentation, boosting self-efficacy, encouraging proactivity, promoting goal setting, and enlisting social support"; cần đồng thời có "skill development and motivation enhancement".

## 12. Tránh bẫy
- <https://www.gov.cn/gongbao/content/2007/content_711013.htm> — Đã mở. Xác nhận “Luật Hợp đồng lao động”, Lệnh Chủ tịch nước số 65, thông qua ngày 2007-06-29.
  - Điều 9, nguyên văn: "Khi tuyển dụng người lao động, đơn vị sử dụng lao động không được giữ thẻ căn cước cư dân và giấy tờ khác của người lao động, không được yêu cầu người lao động lập bảo đảm hoặc lấy tiền tài của người lao động dưới danh nghĩa khác."
  - Điều 84, nguyên văn (trích): "trường hợp lấy tiền tài của người lao động dưới danh nghĩa bảo đảm hoặc danh nghĩa khác, cơ quan hành chính về lao động ra lệnh hoàn trả cho chính người lao động trong thời hạn, và phạt tiền theo mức từ 500 yên đến 2.000 yên mỗi người"
  - Còn đối chiếu trên trang Tổng cục Quản lý thị trường <https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_0abfdd261c03417b949df19d869add8d.html> (bản sửa đổi 2012), chữ tại Điều 9, Điều 84 khớp.
- <https://www.gov.cn/zhengce/2022-11/28/content_5711307.htm> — Đã mở. Xác nhận “Quy định về quản lý dịch vụ việc làm và việc làm”, Lệnh Bộ Lao động và Bảo đảm xã hội số 28, ngày 2007-11-05.
  - Điều 14, nguyên văn (trích): "giữ thẻ căn cước cư dân và giấy tờ khác của người được tuyển dụng"; "lấy tiền tài của người lao động dưới danh nghĩa bảo đảm hoặc danh nghĩa khác"
  - Điều 55, nguyên văn: "trường hợp cung cấp dịch vụ môi giới nghề nghiệp không thành thì phải hoàn lại phí dịch vụ môi giới đã thu của người lao động"; Điều 58 cấm "giữ thẻ căn cước cư dân và giấy tờ khác của người lao động, hoặc thu tiền đặt cọc của người lao động"
- <https://chinajob.mohrss.gov.cn/h5/c/2026-05-18/543038.shtml> — Đã mở (Bộ Tài nguyên nhân lực và An sinh xã hội, Văn phòng Ủy ban Mạng - tin học trung ương, Bộ Giáo dục, Bộ Công an, Tổng cục Giám sát quản lý tài chính, 2026-05-18).
  - Nguyên văn: "một số phần tử bất hảo mượn danh tuyển dụng để kéo lưu lượng người truy cập, ngầm chào bán khóa đào tạo, xúi người tìm việc nộp khoản phí đắt đỏ, thậm chí đề nghị vay tiền để đi học đào tạo"; "phải dứt khoát từ chối"
- <https://www.gov.cn/gongbao/content/2005/content_80604.htm> — Đã mở. Xác nhận “Điều lệ Cấm kinh doanh đa cấp”, Nghị định của Quốc vụ viện số 444, thông qua ngày 2005-08-10, thi hành từ 2005-11-01.
  - Khoản 1 Điều 7, nguyên văn (trích): "yêu cầu người được phát triển phải phát triển người khác tham gia, với những người đã phát triển thì tính và trả thù lao dựa theo số lượng người mà họ trực tiếp hoặc gián tiếp cuốn chiếu phát triển"
  - Điều 24, nguyên văn: "Người có hành vi theo Điều 7 của Điều lệ này mà tham gia đa cấp thì cơ quan hành chính công thương ra lệnh chấm dứt hành vi vi phạm, có thể phạt tiền dưới 2.000 yên."
- <https://www.court.gov.cn/fabu/xiangqing/249031.html> — Đã mở. Xác nhận quyết định sửa đổi của Tòa án nhân dân tối cao, Pháp thích số 6, thi hành từ 2020-08-20.
  - Điều 26, nguyên văn: "Ngoại trừ trường hợp lãi suất hai bên thỏa thuận vượt bốn lần lãi suất cho vay thị trường kỳ hạn một năm tại thời điểm hợp đồng được xác lập."
- <https://www.court.gov.cn/zixun/xiangqing/249051.html> — Đã mở (tin của Tòa án nhân dân tối cao, 2020-08-20).
  - Nguyên văn: "lấy 4 lần lãi suất cho vay thị trường kỳ hạn một năm (LPR) làm chuẩn xác định mức trần bảo vệ tư pháp đối với lãi suất cho vay dân gian, thay thế quy định ‘hai đường ba vùng lấy 24% và 36% làm chuẩn’ trong quy định cũ"
  - Chưa xác nhận: toàn văn sau lần sửa đổi thứ hai vào tháng 12/2020 (trang Công báo Tòa tối cao gongbao.court.gov.cn ba lần 502, trang Tòa án Thương mại quốc tế lặp chuyển hướng), vì vậy mục trích Điều 26 theo văn bản tháng 8/2020, và chú thích rõ số thứ tự đã thay đổi.
- Nhắc nhở tìm việc của Bộ Giáo dục ngày 2024-05-22 <https://app.www.gov.cn/govdata/gov/202405/22/515248/article.html> — Đã mở, có “vay đào tạo, vay mua xe, vay làm đẹp và các bẫy tuyển dụng kiểu mới khác”, dùng làm chứng cứ bên lề, không liệt vào nguồn.

## 13. Nhà cho thuê công cộng
- <https://www.gov.cn/gongbao/content/2012/content_2226147.htm> — Đã mở. Xác nhận “Biện pháp quản lý nhà ở công cộng cho thuê”, Lệnh Bộ Nhà ở và Xây dựng đô thị - nông thôn số 11, công bố ngày 2012-05-28, thi hành từ 2012-07-15.
  - Điều 7, nguyên văn: "Đề nghị nhà ở công cộng cho thuê phải đáp ứng các điều kiện dưới đây: tại địa phương không có nhà ở hoặc diện tích nhà thấp hơn chuẩn quy định; thu nhập, tài sản thấp hơn chuẩn quy định; người đề nghị là lao động từ nơi khác đến thì có việc làm ổn định tại địa phương đạt số năm quy định."
  - Điều 8, nguyên văn: "Người đề nghị phải nộp hồ sơ theo quy định của cơ quan chủ quản bảo đảm nhà ở thuộc Chính phủ nhân dân cấp thành phố, cấp huyện, và chịu trách nhiệm về tính trung thực của hồ sơ."
  - Điều 10, nguyên văn: "Đối với người đề nghị đã đăng ký vào diện chờ luân phiên, phải bố trí nhà ở công cộng cho thuê trong thời gian chờ luân phiên. Thời gian chờ luân phiên thông thường không quá 5 năm."

## 14. Chi tiêu cố định
- <https://www.stats.gov.cn/sj/zxfbhjd/202601/t20260119_1962321.html> — Đã mở (Cục Thống kê nhà nước, 2026-01-19).
  - Nguyên văn: "Năm 2025, chi tiêu tiêu dùng bình quân đầu người của cư dân toàn quốc là 29.476 yên"; "chi tiêu bình quân đầu người cho thực phẩm, thuốc lá, rượu bia là 8.631 yên, tăng 2,6%, chiếm tỷ trọng 29,3% của chi tiêu tiêu dùng bình quân đầu người"; "chi tiêu bình quân đầu người cho chỗ ở là 6.397 yên, tăng 2,1%, chiếm tỷ trọng 21,7% của chi tiêu tiêu dùng bình quân đầu người"
- <https://www.gov.cn/govweb/zhengce/zhengceku/202310/content_6911233.htm> — Đã mở. Xác nhận “Phương án hành động tích cực phát triển dịch vụ ăn uống hỗ trợ người già”, Dân phát số 58, ngày 2023-10-20.
  - Nguyên văn: "hoàn thiện cấu hình cơ sở dịch vụ ăn hỗ trợ người già như bếp ăn người già, bàn ăn người già, điểm ăn hỗ trợ người già"; "cấp trợ cấp khác biệt hóa cho người già hưởng dịch vụ ăn hỗ trợ"; "dịch vụ ăn hỗ trợ hướng tới các người già khác được triển khai rộng rãi"
- <https://rst.sc.gov.cn/rst/ylbxjwjgzxx/2026/7/10/89a8ef06cc264d29b282d7c62f362a6b.shtml> — Đã mở (Sở Tài nguyên nhân lực và An sinh xã hội tỉnh Tứ Xuyên, 2026-07-10, tiêu đề “Tình hình chuẩn lương tối thiểu các tỉnh, khu tự trị, thành phố trực thuộc trung ương toàn quốc (tính đến 2026-01-01)”, trang ghi rõ nguồn từ website chính thức của Bộ Tài nguyên nhân lực và An sinh xã hội). Lương tối thiểu tháng bậc một cao nhất là Thượng Hải 2.740 yên, thấp nhất là Thanh Hải 2.080 yên.
  - Chưa xác nhận: trang gốc của Bộ <https://www.mohrss.gov.cn/SYrlzyhshbzb/laodongguanxi_/fwyd/> trả về trắng, trang kỳ 2025-01 trả về 403. Số lương tối thiểu theo giờ không sử dụng.

## 15. Gián đoạn đóng bảo hiểm xã hội
- <https://www.gov.cn/guoqing/2021-10/29/content_5647616.htm> — Đã mở. Xác nhận “Luật Bảo hiểm xã hội” thông qua ngày 2010-10-28, sửa đổi ngày 2018-12-29.
  - Điều 16, nguyên văn: "Cá nhân tham gia bảo hiểm hưu trí cơ bản, khi đến tuổi nghỉ hưu theo pháp luật mà cộng dồn đóng phí đủ 15 năm thì được hưởng lương hưu cơ bản theo tháng."
  - Điều 19, nguyên văn: "Cá nhân đi làm việc ở vùng quản lý quỹ thống nhất khác thì quan hệ bảo hiểm hưu trí cơ bản của họ chuyển theo bản thân, số năm đóng phí được cộng dồn tính."
  - Điều 27, nguyên văn: "Cá nhân tham gia bảo hiểm y tế cơ bản cho người lao động, khi đến tuổi nghỉ hưu theo pháp luật mà cộng dồn đóng phí đạt số năm quy định của nhà nước thì sau khi nghỉ hưu không phải nộp phí bảo hiểm y tế cơ bản nữa."
- Quốc ban phát số 38, giống như mục 8.

## 16. Địa điểm mở 24 giờ
- Mục kinh nghiệm mức C, không có nguồn.

## Ứng viên chưa đưa vào
- Trợ cấp thất nghiệp bổ sung (Nhân xã bộ phát số 40): là chính sách theo giai đoạn của năm 2020, trang gốc có trên chinajob.mohrss.gov.cn, nhưng không kiểm chứng được còn hiệu lực đến nay hay không, chưa đưa vào.
- Thông báo riêng về cứu trợ tạm thời (Quốc phát số 47): chưa kiểm chứng riêng, cứu trợ tạm thời lấy “Biện pháp tạm thời về cứu trợ xã hội” làm căn cứ.
- Hậu quả của việc trễ nải tiền điện, nước, gas: không tìm thấy văn bản chính thức cấp nhà nước, chưa đưa vào.
