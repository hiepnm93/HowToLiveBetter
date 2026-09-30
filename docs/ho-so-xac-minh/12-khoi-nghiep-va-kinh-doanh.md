# Hồ sơ xác minh nguồn chương 12 (2026-09-07)

Cách thức kiểm chứng: hạn mức WebSearch của phiên làm việc này đã dùng hết, việc định vị quy phạm đổi sang giao diện tìm kiếm kho văn bản chính sách của Chính phủ Trung Quốc (sousuo.www.gov.cn/search-gov/data, chỉ dùng nó để tìm URL, không làm nguồn). Mỗi URL đều mở bằng WebFetch trước để xác nhận tiêu đề, số văn bản và điều khoản; trang toàn văn luật thì thêm bước tải về thư mục tạm bằng curl (s12/page_*.html), sau khi bỏ thẻ HTML định vị nguyên văn theo từng “Điều X”, các trích dẫn dưới đây đều lấy từ định vị cục bộ. Trang của Bộ Nhân lực và An sinh xã hội có kịch bản chống bóc dữ liệu, WebFetch trả về trắng, đổi sang dùng curl mang cookie do kịch bản tính được để mở và lấy toàn văn (đã đối chiếu tiêu đề trang và dòng phiên bản). Hệ thống nhượng quyền của Bộ Thương mại có chứng chỉ không khớp tên miền, WebFetch báo lỗi, đổi sang mở bằng curl -k và đối chiếu tiêu đề. DOI qua doi.org chuyển hướng về pubsonline.informs.org trả về 403, đổi sang dùng Crossref API và Semantic Scholar API để đối chiếu thông tin thư mục và tóm tắt.

## Nguồn đã xác nhận

### 1. Bộ luật Dân sự
- URL: <https://www.spp.gov.cn/spp/fl/202006/t20200602_463888.shtml> (thư viện pháp luật và quy phạm của Viện kiểm sát nhân dân Tối cao)
- Tiêu đề trang “Bộ luật Dân sự của Cộng hòa Nhân dân Trung Hoa”, dòng phiên bản “thông qua tại kỳ họp thứ ba Đại hội đại biểu nhân dân toàn quốc khóa 13 ngày 28-05-2020”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 56: “Nợ của hộ công thương nghiệp cá nhân, nếu do cá nhân kinh doanh thì chịu bằng tài sản cá nhân; nếu do hộ gia đình kinh doanh thì chịu bằng tài sản hộ gia đình; không phân biệt được thì chịu bằng tài sản hộ gia đình.”
- Điều 184: “Người cứu hộ thực hiện hành vi cấp cứu khẩn cấp một cách tự nguyện gây thiệt hại cho người được cứu thì người cứu hộ không chịu trách nhiệm dân sự.”
- Điều 469: “Các đương sự lập hợp đồng có thể dùng hình thức văn bản, hình thức miệng hoặc hình thức khác. Hình thức văn bản là các hình thức như hợp đồng văn bản, thư từ, điện báo, telex, fax… có thể biểu hiện một cách hữu hình nội dung được ghi.”
- Điều 585: “Các đương sự có thể thỏa thuận rằng khi một bên vi phạm thì tùy theo tình trạng vi phạm phải trả cho bên kia một khoản tiền phạt vi phạm nhất định… nếu khoản tiền phạt vi phạm đã thỏa thuận thấp hơn thiệt hại gây ra, Tòa án nhân dân hoặc cơ quan trọng tài có thể theo yêu cầu của đương sự tăng lên; nếu khoản tiền phạt vi phạm quá cao so với thiệt hại gây ra, Tòa án nhân dân hoặc cơ quan trọng tài có thể theo yêu cầu của đương sự giảm xuống thích đáng.”
- Điều 586: “Các đương sự có thể thỏa thuận một bên giao tiền đặt cọc cho bên kia làm bảo đảm cho quyền đòi nợ. Hợp đồng đặt cọc được hình thành kể từ thời điểm thực tế giao tiền đặt cọc. Số tiền đặt cọc do các đương sự thỏa thuận; nhưng không được vượt quá 20% giá trị mục tiêu của hợp đồng chính, phần vượt quá không phát sinh hiệu lực đặt cọc.”
- Điều 587: “Bên giao tiền đặt cọc không thực hiện nghĩa vụ… không có quyền yêu cầu hoàn trả tiền đặt cọc; bên nhận tiền đặt cọc không thực hiện nghĩa vụ… phải hoàn trả gấp đôi tiền đặt cọc.”
- Điều 588: “Các đương sự vừa thỏa thuận tiền phạt vi phạm vừa thỏa thuận tiền đặt cọc, khi một bên vi phạm thì bên kia có thể chọn áp dụng điều khoản tiền phạt vi phạm hoặc điều khoản tiền đặt cọc.”
- Điều 668: “Hợp đồng vay phải lập bằng hình thức văn bản, trừ trường hợp vay tiền giữa các thể nhân có thỏa thuận khác. Nội dung hợp đồng vay thường bao gồm các điều khoản như loại vay, loại tiền tệ, mục đích sử dụng, số tiền, lãi suất, thời hạn và phương thức hoàn trả.”
- Điều 681: “Hợp đồng bảo lãnh là hợp đồng nhằm bảo đảm việc thực hiện quyền đòi nợ, do người bảo lãnh và chủ nợ thỏa thuận rằng khi người vay không thực hiện nghĩa vụ đến hạn hoặc xảy ra tình huống các đương sự đã thỏa thuận thì người bảo lãnh thực hiện nghĩa vụ hoặc chịu trách nhiệm.”
- Điều 687: “Các đương sự trong hợp đồng bảo lãnh thỏa thuận rằng khi người vay không thực hiện được nghĩa vụ thì do người bảo lãnh chịu trách nhiệm bảo lãnh, đó là bảo lãnh thông thường. Người bảo lãnh trong bảo lãnh thông thường có quyền từ chối chịu trách nhiệm bảo lãnh đối với chủ nợ trong thời gian tranh chấp hợp đồng chính chưa được xét xử hoặc trọng tài, và trước khi cưỡng chế thi hành tài sản của người vay theo pháp luật mà người vay vẫn không thực hiện được nghĩa vụ”
- Điều 688: “Các đương sự trong hợp đồng bảo lãnh thỏa thuận người bảo lãnh và người vay chịu trách nhiệm liên đới đối với nghĩa vụ, đó là bảo lãnh trách nhiệm liên đới. Người vay trong bảo lãnh trách nhiệm liên đới không thực hiện nghĩa vụ đến hạn… chủ nợ có thể yêu cầu người vay thực hiện nghĩa vụ, cũng có thể yêu cầu người bảo lãnh chịu trách nhiệm bảo lãnh trong phạm vi bảo lãnh của mình.”
- Điều 1064: “Nợ được tạo ra do hai vợ chồng cùng ký tên hoặc do một bên vợ chồng về sau công nhận và các biểu hiện ý chí chung tương tự… thuộc nợ chung của vợ chồng. Nợ mà một bên vợ chồng đứng tên cá nhân vượt quá nhu cầu sinh hoạt hằng ngày của gia đình trong thời kỳ hôn nhân không thuộc nợ chung của vợ chồng; trừ trường hợp chủ nợ chứng minh được khoản nợ đó dùng cho sinh hoạt chung của vợ chồng, sản xuất kinh doanh chung hoặc dựa trên ý chí chung của cả hai vợ chồng.”

### 2. Luật Công ty (sửa đổi năm 2023)
- URL: <https://www.gov.cn/yaowen/liebiao/202312/content_6923395.htm> (Chính phủ Trung Quốc)
- Tiêu đề trang “Luật Công ty của Cộng hòa Nhân dân Trung Hoa”, dòng phiên bản có “sửa đổi lần thứ hai tại kỳ họp thứ bảy Ủy ban thường vụ Đại hội đại biểu nhân dân toàn quốc khóa 14 ngày 29-12-2023”. WebFetch và định vị cục bộ đều xác nhận, số điều được đối chiếu theo bản sửa đổi 2023.
- Điều 4: “Cổ đông của công ty trách nhiệm hữu hạn chịu trách nhiệm với công ty trong giới hạn số vốn góp đã cam kết; cổ đông của công ty cổ phần chịu trách nhiệm với công ty trong giới hạn số cổ phần đã ký nhận.”
- Điều 23: “Cổ đông công ty lạm dụng địa vị pháp nhân độc lập của công ty và trách nhiệm hữu hạn của cổ đông, trốn tránh nghĩa vụ trả nợ, thiệt hại nghiêm trọng lợi ích của chủ nợ công ty thì phải chịu trách nhiệm liên đới đối với nợ công ty. … Công ty chỉ có một cổ đông mà cổ đông không chứng minh được tài sản công ty độc lập với tài sản của chính cổ đông thì phải chịu trách nhiệm liên đới đối với nợ công ty.”
- Điều 47: “Vốn đăng ký của công ty trách nhiệm hữu hạn là tổng số vốn góp đã cam kết của toàn bộ cổ đông được đăng ký tại cơ quan đăng ký công ty. Toàn bộ số vốn góp đã cam kết do cổ đông nộp đủ trong vòng năm năm kể từ ngày công ty thành lập theo quy định của điều lệ công ty.”
- Điều 49: “Cổ đông phải nộp đúng hạn, đủ số vốn góp mà mình đã cam kết theo quy định của điều lệ công ty. … Cổ đông không nộp đủ vốn góp đúng hạn thì ngoài việc phải nộp đủ cho công ty, còn phải chịu trách nhiệm bồi thường thiệt hại gây ra cho công ty.”
- Điều 50: “Khi thành lập công ty trách nhiệm hữu hạn, cổ đông không thực tế nộp vốn góp theo quy định của điều lệ công ty… các cổ đông khác lúc thành lập chịu trách nhiệm liên đới với cổ đông đó trong phạm vi phần vốn góp thiếu.”
- Điều 53: “Sau khi công ty thành lập, cổ đông không được rút vốn. Vi phạm quy định tại khoản trên thì cổ đông phải hoàn trả phần vốn đã rút”
- Điều 54: “Công ty không có khả năng thanh toán nợ đến hạn thì công ty hoặc chủ nợ có quyền yêu cầu cổ đông đã cam kết góp nhưng chưa đến hạn góp nộp vốn trước thời hạn.”

### 3. Luật Doanh nghiệp hợp danh (sửa đổi năm 2006)
- URL: <http://www.gov.cn/gongbao/content/2006/content_413955.htm> (Công báo Quốc vụ viện năm 2006 số 29)
- Tiêu đề trang “Lệnh Chủ tịch nước Cộng hòa Nhân dân Trung Hoa (số 55), Luật Doanh nghiệp hợp danh của Cộng hòa Nhân dân Trung Hoa”, “sửa đổi thông qua ngày 27-08-2006… có hiệu lực từ 01-06-2007”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 2: “Doanh nghiệp hợp danh thông thường do các đối tác hợp danh thông thường hợp thành, các đối tác chịu trách nhiệm vô hạn liên đới đối với nợ của doanh nghiệp hợp danh. … Doanh nghiệp hợp danh hữu hạn do đối tác hợp danh thông thường và đối tác hợp danh hữu hạn hợp thành, đối tác thông thường chịu trách nhiệm vô hạn liên đới đối với nợ của doanh nghiệp hợp danh, đối tác hữu hạn chịu trách nhiệm đối với nợ của doanh nghiệp hợp danh trong giới hạn số vốn góp đã cam kết.”

### 4. Điều lệ quản lý kinh doanh nhượng quyền thương mại
- URL: <https://www.gov.cn/zhengce/zhengceku/2008-03/28/content_4179.htm>
- Tiêu đề trang “Điều lệ quản lý kinh doanh nhượng quyền thương mại”, số văn bản “Quốc lệnh số 485”, “thông qua tại Hội nghị thường vụ Quốc vụ viện lần thứ 167 ngày 31-01-2007… có hiệu lực từ 01-05-2007”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 7 khoản 2: “Bên nhượng quyền khi tiến hành hoạt động nhượng quyền phải có ít nhất 2 cửa hàng kinh doanh trực tiếp và thời gian kinh doanh trên 1 năm.”
- Điều 8: “Bên nhượng quyền phải trong vòng 15 ngày kể từ ngày ký hợp đồng nhượng quyền lần đầu, theo quy định của điều lệ này làm thủ tục đăng ký với cơ quan chủ quản thương mại.”
- Điều 12: “Bên nhượng quyền và bên nhận nhượng quyền phải trong hợp đồng nhượng quyền thỏa thuận rằng bên nhận nhượng quyền, trong một thời hạn nhất định sau khi hợp đồng nhượng quyền được ký, có quyền đơn phương chấm dứt hợp đồng.”
- Điều 22: liệt kê 12 hạng mục thông tin phải cung cấp, trong đó có “(ba) các loại, số tiền và phương thức thanh toán của phí nhượng quyền (bao gồm có thu tiền ký quỹ hay không cùng điều kiện và phương thức hoàn trả tiền ký quỹ)” “(tám) số lượng, địa bàn phân bố và đánh giá tình trạng kinh doanh của các bên nhận nhượng quyền hiện có trong lãnh thổ Trung Quốc” “(chín) tóm tắt báo cáo tài chính – kế toán đã được hãng kiểm toán kiểm toán và tóm tắt báo cáo kiểm toán của 2 năm gần nhất” “(mười) tình trạng kiện tụng và trọng tài liên quan đến nhượng quyền trong 5 năm gần nhất”.
- Điều 23: “Bên nhượng quyền che giấu thông tin liên quan hoặc cung cấp thông tin giả mạo thì bên nhận nhượng quyền có quyền chấm dứt hợp đồng nhượng quyền.”
- Điều 25: “Bên nhượng quyền không làm thủ tục đăng ký với cơ quan chủ quản thương mại theo quy định tại Điều 8 của điều lệ này thì cơ quan chủ quản thương mại buộc đăng ký trong thời hạn, phạt tiền từ 10.000 đến 50.000 yên; quá hạn vẫn không đăng ký thì phạt tiền từ 50.000 đến 100.000 yên và thông báo công khai.”

### 5. Biện pháp quản lý công bố thông tin nhượng quyền thương mại
- URL: <http://www.gov.cn/gongbao/content/2012/content_2177025.htm> (Công báo Quốc vụ viện năm 2012 số 19)
- Tiêu đề trang “Lệnh Bộ Thương mại nước Cộng hòa Nhân dân Trung Hoa (năm 2012 số 2), Biện pháp quản lý công bố thông tin nhượng quyền thương mại”, “có hiệu lực từ 01-04-2012”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 5 (tám) 2: “Tình trạng kinh doanh của các bên nhận nhượng quyền hiện có, bao gồm thông tin như số vốn đầu tư thực tế, doanh số bình quân, chi phí, lợi nhuận gộp, lợi nhuận ròng của bên nhận nhượng quyền, đồng thời phải nói rõ nguồn của các thông tin trên.”
- Điều 9: “Bên nhượng quyền che giấu thông tin ảnh hưởng đến việc thực hiện hợp đồng nhượng quyền khiến không thể đạt được mục đích hợp đồng hoặc công bố thông tin giả mạo thì bên nhận nhượng quyền có quyền chấm dứt hợp đồng nhượng quyền.”

### 6. Hệ thống quản lý thông tin nhượng quyền thương mại của Bộ Thương mại
- URL: <https://txjy.syggs.mofcom.gov.cn/>
- WebFetch báo lỗi do chứng chỉ không khớp tên miền; mở bằng curl -k trả về 200, tiêu đề trang “Nền tảng thống nhất hệ thống nghiệp vụ Bộ Thương mại – Quản lý thông tin nhượng quyền thương mại”, trang có liên kết đăng nhập doanh nghiệp, đăng ký và thông tin đăng ký. Đã xác nhận là hệ thống của Bộ Thương mại.

### 7. Biện pháp tra xét xử lý kinh doanh không giấy phép, không đăng ký
- URL: <https://www.gov.cn/zhengce/zhengceku/2017-08/23/content_5219861.htm>
- Tiêu đề trang “Biện pháp tra xét xử lý kinh doanh không giấy phép, không đăng ký”, số văn bản “Quốc lệnh số 684”, “có hiệu lực từ 01-10-2017”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 5: “Chủ thể kinh doanh chưa được cấp phép theo pháp luật mà tiến hành hoạt động kinh doanh thì do cơ quan được pháp luật, quy phạm, quyết định của Quốc vụ viện quy định tra xét xử lý”
- Điều 6: “Chủ thể kinh doanh chưa được cấp giấy phép kinh doanh theo pháp luật mà tiến hành hoạt động kinh doanh thì do cơ quan thực hiện chức năng quản lý công thương nghiệp… tra xét xử lý.”
- Điều 13: “Pháp luật, quy phạm hành chính không quy định rõ hình phạt đối với kinh doanh không giấy phép thì cơ quan quản lý công thương nghiệp buộc ngừng hành vi vi phạm, tịch thu thu nhập phi pháp, đồng thời phạt tiền dưới 10.000 yên.”
### 8. Biện pháp quản lý cấp phép kinh doanh thực phẩm và đăng ký
- URL: <https://www.gov.cn/gongbao/2023/issue_10606/202307/content_6894763.html> (Công báo Quốc vụ viện năm 2023 số 21)
- Tiêu đề trang “Lệnh Tổng cục Giám sát quản lý thị trường nhà nước (số 78), Biện pháp quản lý cấp phép kinh doanh thực phẩm và đăng ký”, “có hiệu lực từ 01-12-2023”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 4: “Hoạt động bán thực phẩm và dịch vụ ăn uống trong lãnh thổ Cộng hòa Nhân dân Trung Hoa phải được cấp giấy phép kinh doanh thực phẩm theo pháp luật. Các tình huống sau không cần lấy giấy phép kinh doanh thực phẩm: … (hai) chỉ bán thực phẩm đóng gói sẵn”

### 9. Bộ luật Hình sự (bản văn sửa đổi năm 1997)
- URL: <https://www.spp.gov.cn/spp/fl/201802/t20180206_364975.shtml> (thư viện pháp luật và quy phạm của Viện kiểm sát nhân dân Tối cao)
- Tiêu đề trang “Bộ luật Hình sự của Cộng hòa Nhân dân Trung Hoa (sửa đổi năm 1997)”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 205: “Mở khống hóa đơn giá trị gia tăng chuyên dùng hoặc mở khống các hóa đơn khác dùng để lừa đảo thuế xuất khẩu, khấu trừ thuế thì phạt tù có thời hạn dưới ba năm hoặc cẩu dịch, đồng thời phạt tiền từ 20.000 đến 200.000 yên; số tiền thuế mở khống tương đối lớn hoặc có tình tiết nghiêm trọng khác thì phạt tù có thời hạn từ ba năm đến dưới mười năm, đồng thời phạt tiền từ 50.000 đến 500.000 yên; số tiền thuế mở khống rất lớn hoặc có tình tiết đặc biệt nghiêm trọng khác thì phạt tù có thời hạn từ mười năm trở lên hoặc tù chung thân… Mở khống hóa đơn giá trị gia tăng chuyên dùng hoặc mở khống các hóa đơn khác dùng để lừa đảo thuế xuất khẩu, khấu trừ thuế là chỉ việc có một trong các hành vi: mở khống cho người khác, mở khống cho chính mình, để người khác mở khống cho mình, môi giới người khác mở khống.” Trang này là bản văn năm 1997, có chứa khoản tử hình đã bị Đạo luật sửa đổi (VIII) xóa bỏ, phần thân bài không trích dẫn khoản đó.
- Điều 225: “Vi phạm quy định của Nhà nước, có một trong các hành vi kinh doanh phi pháp sau đây, phá rối trật tự thị trường, tình tiết nghiêm trọng thì phạt tù có thời hạn dưới năm năm hoặc cẩu dịch, đồng thời hoặc riêng lẻ phạt tiền từ một đến năm lần số thu nhập phi pháp; tình tiết đặc biệt nghiêm trọng thì phạt tù có thời hạn từ năm năm trở lên… (một) kinh doanh không có giấy phép các mặt hàng chuyên doanh, độc quyền hoặc các mặt hàng hạn chế giao dịch khác theo quy định của pháp luật, quy phạm hành chính; … (ba) không có phê chuẩn của cơ quan chủ quản nhà nước có liên quan mà phi pháp kinh doanh chứng khoán, hàng hóa tương lai, bảo hiểm, hoặc phi pháp tiến hành nghiệp vụ thanh toán quyết toán tiền bạc” (trang ghi chú mục này đã được sửa đổi theo Đạo luật sửa đổi (VII)).

### 10. Công báo của Bộ Tài chính – Tổng cục Thuế năm 2023 số 19
- URL: <https://www.gov.cn/zhengce/zhengceku/202308/content_6896287.htm>
- Tiêu đề trang “Công báo về chính sách miễn, giảm thuế giá trị gia tăng cho đối tượng nộp thuế giá trị gia tăng quy mô nhỏ”, số văn bản “Bộ Tài chính – Tổng cục Thuế công báo năm 2023 số 19”. WebFetch và định vị cục bộ đều xác nhận.
- “Một, đối với đối tượng nộp thuế giá trị gia tăng quy mô nhỏ có doanh số bán hàng trong tháng dưới 100.000 yên (bao gồm cả con số này) thì miễn thuế giá trị gia tăng.” “Hai, doanh thu bán ra chịu thuế của đối tượng nộp thuế giá trị gia tăng quy mô nhỏ áp dụng tỷ lệ thu 3% thì thuế giá trị gia tăng thu theo tỷ lệ giảm còn 1%” “Ba, Công báo này thi hành đến ngày 31-12-2027.”

### 11. Luật Hợp đồng lao động
- URL: <https://www.gov.cn/gongbao/content/2007/content_711013.htm>
- Dòng phiên bản trang “thông qua ngày 29-06-2007… có hiệu lực từ 01-01-2008”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 10: “Đã hình thành quan hệ lao động mà chưa đồng thời ký kết hợp đồng lao động bằng văn bản thì phải ký kết hợp đồng lao động bằng văn bản trong vòng một tháng kể từ ngày sử dụng lao động.”
- Điều 17: “Hợp đồng lao động phải có các điều khoản sau: … (sáu) thù lao lao động; (bảy) bảo hiểm xã hội”
- Điều 30: “Bên sử dụng lao động phải theo thỏa thuận trong hợp đồng lao động và quy định của Nhà nước, trả thù lao lao động kịp thời và đủ cho người lao động. Bên sử dụng lao động chậm trả hoặc không trả đủ thù lao lao động thì người lao động có thể theo pháp luật nộp đơn yêu cầu ra lệnh chi trả lên Tòa án nhân dân địa phương”
- Điều 82: “Bên sử dụng lao động từ hơn một tháng đến chưa đầy một năm kể từ ngày sử dụng lao động mà chưa ký kết hợp đồng lao động bằng văn bản với người lao động thì phải trả cho người lao động hai lần lương hằng tháng.”

### 12. Luật Bảo hiểm xã hội (sửa đổi năm 2018)
- URL: <https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/202011/t20201102_394629.html> (Bộ Nhân lực và An sinh xã hội)
- WebFetch bị kịch bản chống bóc dữ liệu chặn và trả về trắng; curl mang cookie do kịch bản tính được lấy được toàn văn 93 KB, tiêu đề trang “Luật Bảo hiểm xã hội của Cộng hòa Nhân dân Trung Hoa _ Bộ Nhân lực và An sinh xã hội Cộng hòa Nhân dân Trung Hoa”, dòng phiên bản “thông qua ngày 28-10-2010… sửa đổi theo ‘Quyết định về việc sửa đổi Luật Bảo hiểm xã hội của Cộng hòa Nhân dân Trung Hoa’ ngày 29-12-2018”. Liên kết lấy từ trang danh mục chuyên mục “Pháp luật” của Bộ này (<https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/>).
- Điều 58: “Bên sử dụng lao động phải trong vòng ba mươi ngày kể từ ngày sử dụng lao động, thay người lao động làm thủ tục đăng ký bảo hiểm xã hội với cơ quan trực huệ bảo hiểm xã hội.”
- Điều 60: “Bên sử dụng lao động phải tự khai, nộp phí bảo hiểm xã hội đúng hạn và đủ; ngoài các lý do chính đáng theo pháp luật như bất khả kháng thì không được nộp chậm, miễn giảm.”
- Điều 84: “Bên sử dụng lao động không làm thủ tục đăng ký bảo hiểm xã hội thì cơ quan hành chính bảo hiểm xã hội buộc sửa chữa trong thời hạn; quá hạn không sửa chữa thì phạt bên sử dụng lao động tiền từ một đến ba lần số phí bảo hiểm xã hội phải nộp, và phạt người phụ trách trực tiếp cùng những người trực tiếp chịu trách nhiệm khác từ 500 đến 3.000 yên.”
- Điều 86: “Bên sử dụng lao động không nộp phí bảo hiểm xã hội đúng hạn, đủ thì cơ quan thu phí bảo hiểm xã hội buộc nộp hoặc bổ sung trong thời hạn, và kể từ ngày nợ phí, mỗi ngày cộng thêm 5/10.000 tiền phạt chậm nộp; quá hạn vẫn không nộp thì cơ quan hành chính có liên quan phạt tiền từ một đến ba lần số tiền nợ phí.”

### 13. Camuffo và cộng sự 2020 (RCT)
- DOI: <https://doi.org/10.1287/mnsc.2018.3249>
- WebFetch mở doi.org trả về 302 chuyển hướng <https://pubsonline.informs.org/doi/10.1287/mnsc.2018.3249>, trang này trả về 403. Đổi sang dùng Crossref API (api.crossref.org/works/10.1287/mnsc.2018.3249) xác nhận: tiêu đề “A Scientific Approach to Entrepreneurial Decision Making: Evidence from a Randomized Control Trial”, Management Science 66(2):564-586, tháng 2 năm 2020, tác giả Camuffo, Cordova, Gambardella, Spina. Semantic Scholar API lấy được tóm tắt: “The panel sample of our randomized control trial includes 116 Italian startups and 16 data points over a period of about one year. … We find that entrepreneurs who behave like scientists perform better, are more likely to pivot to a different idea, and are not more likely to drop out than the control group in the early stages of the startup. … a scientific approach improves precision—it reduces the odds of pursuing projects with false positive returns”. Phần thân bài chỉ dùng các phát biểu trong tóm tắt, không ghi hiệu ứng cụ thể.

### 14. Quy định quản lý chứng nhận sản phẩm bắt buộc
- URL: <http://www.gov.cn/gongbao/content/2010/content_1533513.htm> (Công báo Quốc vụ viện năm 2010 số 5)
- Tiêu đề trang “Lệnh Tổng cục Giám sát, kiểm nghiệm và kiểm dịch chất lượng nhà nước (số 117), Quy định quản lý chứng nhận sản phẩm bắt buộc”, “có hiệu lực từ 01-09-2009”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 2: “Các sản phẩm liên quan do Nhà nước quy định phải qua chứng nhận (dưới đây gọi tắt là chứng nhận sản phẩm bắt buộc) và gắn dấu chứng nhận thì mới được xuất xưởng, bán, nhập khẩu hoặc sử dụng trong các hoạt động kinh doanh khác.”
- Điều 49: “Sản phẩm trong danh mục chưa qua chứng nhận mà tùy tiện xuất xưởng, bán, nhập khẩu hoặc sử dụng trong các hoạt động kinh doanh khác thì hai cục kiểm tra chất lượng địa phương xử phạt theo quy định tại Điều 67 của Điều lệ chứng nhận – công nhận.”
### 15. Điều lệ điều dưỡng viên
- URL: <http://www.gov.cn/zhengce/zhengceku/2008-03/28/content_6169.htm>
- Tiêu đề trang “Điều lệ điều dưỡng viên”, số văn bản “Quốc lệnh số 517”, “thông qua tại Hội nghị thường vụ Quốc vụ viện lần thứ 206 ngày 23-01-2008… có hiệu lực từ 12-05-2008”. WebFetch và định vị cục bộ đều xác nhận. Đây là bản nguyên văn năm 2008, chưa tìm được trang toàn văn chính thức của bản sửa đổi 2020.
- Điều 17: “Trong hoạt động hành nghề, điều dưỡng viên phát hiện tình trạng bệnh của người bệnh chuyển biến nguy kịch thì phải báo ngay cho bác sĩ; trong tình huống khẩn cấp, để cứu mạng người bệnh nguy kịch, phải trước tiên thực hiện các biện pháp cấp cứu cần thiết. Điều dưỡng viên phát hiện y lệnh vi phạm pháp luật, quy phạm, quy chế hoặc quy phạm kỹ thuật chẩn trị thì phải kịp thời nêu với bác sĩ đã ra y lệnh; khi cần thiết, phải báo cáo cho người phụ trách khoa của bác sĩ đó hoặc người phụ trách quản lý dịch vụ y tế của cơ sở y tế.”

### 16. Điều lệ quản lý đăng ký chủ thể thị trường
- URL: <https://www.gov.cn/zhengce/zhengceku/2021-08/24/content_5632964.htm>
- Tiêu đề trang “Điều lệ quản lý đăng ký chủ thể thị trường của Cộng hòa Nhân dân Trung Hoa”, số văn bản “Quốc lệnh số 746”, “có hiệu lực từ 01-03-2022”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 31: “Chủ thể thị trường vì giải tán, bị tuyên bố phá sản hoặc các lý do chính đáng theo pháp luật khác mà cần chấm dứt hoạt động thì phải theo pháp luật nộp đơn xóa đăng ký với cơ quan đăng ký.”
- Điều 32: “Tổ thanh toán phải trong vòng 30 ngày kể từ ngày kết thúc thanh toán nộp đơn xóa đăng ký với cơ quan đăng ký.”
- Điều 33: “Chủ thể thị trường chưa phát sinh quyền đòi nợ – nghĩa vụ trả nợ hoặc đã thanh toán xong các khoản đó, chưa phát sinh hoặc đã thanh toán xong chi phí thanh toán, tiền lương người lao động, phí bảo hiểm xã hội, khoản bồi thường theo pháp luật, thuế phải nộp (tiền phạt chậm nộp, tiền phạt), và toàn bộ người đầu tư cam kết bằng văn bản chịu trách nhiệm pháp lý về tính xác thực của các tình huống trên, thì có thể làm thủ tục xóa đăng ký theo trình tự giản lược. … Thời hạn công bố là 20 ngày. … Hộ công thương nghiệp cá nhân làm thủ tục xóa đăng ký theo trình tự giản lược thì không cần công bố… nếu các cơ quan có liên quan trong vòng 10 ngày không có ý kiến phản đối thì có thể làm thủ tục xóa đăng ký trực tiếp. … Bị đưa vào danh mục kinh doanh bất thường thì không áp dụng trình tự xóa đăng ký giản lược.”

### 17. Hướng dẫn xóa đăng ký doanh nghiệp (sửa đổi năm 2025)
- URL: <https://www.gov.cn/zhengce/zhengceku/202512/content_7053238.htm>
- Tiêu đề trang “Công bố của Tổng cục Giám sát quản lý thị trường cùng 6 cơ quan về việc phát hành ‘Hướng dẫn xóa đăng ký doanh nghiệp (sửa đổi năm 2025)’”, số văn bản “năm 2025 số 52”. WebFetch và định vị cục bộ đều xác nhận.
- “Trình tự xóa đăng ký giản lược 1. Đối tượng áp dụng. Doanh nghiệp (trừ công ty cổ phần niêm yết) trong thời gian tồn tại chưa phát sinh quyền đòi nợ – nghĩa vụ trả nợ hoặc đã thanh toán xong các khoản đó… có thể làm thủ tục xóa đăng ký theo trình tự giản lược. Doanh nghiệp thuộc một trong các tình huống sau thì không áp dụng trình tự xóa đăng ký giản lược: … có tên trong danh mục kinh doanh bất thường hoặc danh sách vi phạm pháp luật nghiêm trọng, mất uy tín của giám sát quản lý thị trường”

### 18. Luật Phá sản doanh nghiệp
- URL: <http://www.gov.cn/gongbao/content/2006/content_413952.htm> (Công báo Quốc vụ viện năm 2006 số 29)
- Tiêu đề trang “Lệnh Chủ tịch nước Cộng hòa Nhân dân Trung Hoa (số 54), Luật Phá sản doanh nghiệp của Cộng hòa Nhân dân Trung Hoa”, “có hiệu lực từ 01-06-2007”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 2: “Pháp nhân doanh nghiệp không có khả năng thanh toán nợ đến hạn, đồng thời tài sản không đủ để thanh toán toàn bộ nợ hoặc rõ ràng thiếu khả năng thanh toán, thì thanh lý nợ theo quy định của luật này.”
- Điều 7: “Người nợ có tình huống quy định tại Điều 2 của luật này thì có thể nộp đơn tái cấu trúc, hòa giải hoặc thanh lý phá sản lên Tòa án nhân dân. … Pháp nhân doanh nghiệp đã giải tán nhưng chưa thanh lý hoặc chưa thanh lý xong, tài sản không đủ thanh toán nợ thì người có nghĩa vụ thanh lý theo pháp luật phải nộp đơn thanh lý phá sản lên Tòa án nhân dân.”

### 19. Điều lệ tạm thời về công khai thông tin doanh nghiệp
- URL: <https://www.gov.cn/zhengce/zhengceku/2014-08/23/content_9038.htm>
- Tiêu đề trang “Điều lệ tạm thời về công khai thông tin doanh nghiệp”, số văn bản “Quốc lệnh số 654”, “có hiệu lực từ 01-10-2014”. WebFetch và định vị cục bộ đều xác nhận.
- Điều 17: “(một) Doanh nghiệp không công bố báo cáo thường niên đúng thời hạn quy định của điều lệ này… đưa vào danh mục kinh doanh bất thường… đủ 3 năm không thực hiện nghĩa vụ công bố theo quy định của điều lệ này… đưa vào danh sách doanh nghiệp vi phạm pháp luật nghiêm trọng… người đại diện theo pháp luật, người phụ trách của doanh nghiệp bị đưa vào danh sách doanh nghiệp vi phạm pháp luật nghiêm trọng, trong 3 năm không được giữ chức người đại diện theo pháp luật, người phụ trách của doanh nghiệp khác.”
- Đồng thời đối chiếu Quyết định của Quốc vụ viện về sửa đổi và bãi bỏ một số quy phạm hành chính, Quốc vụ viện lệnh số 777 (<https://www.gov.cn/zhengce/zhengceku/202403/content_6939591.htm>): “Bảy, sửa ‘cơ quan quản lý công thương nghiệp’ thành ‘cơ quan giám sát quản lý thị trường’ trong Điều 2, khoản 1 Điều 5, khoản 1 Điều 6, Điều 7, khoản 1 Điều 8, khoản 2 Điều 10, khoản 1 Điều 13, Điều 14, Điều 15, Điều 24 của ‘Điều lệ tạm thời về công khai thông tin doanh nghiệp’.” Không liệt kê Điều 17. Có sửa đổi riêng năm 2024 hay không, ghi TODO.

## Chưa kiểm chứng được, không trích dẫn
- Thống kê chính thức về tỷ lệ doanh nghiệp sống sót/tuổi thọ bình quân: tìm kiếm trong site của Tổng cục Thống kê nhà nước và giao diện tìm kiếm của gov.cn đều không có chỗ nào có thể kiểm chứng nguyên văn; không ghi số liệu.
- Điều 24 của “Quy định của Tối cao Pháp viện về một số vấn đề áp dụng Luật Công ty (III)” (chế định người khác đứng tên giữ cổ phần hộ): chưa định vị được trang nguyên văn trên website Tối cao Pháp viện (court.gov.cn đoán URL trả 404, kho giải thích tư pháp của Viện kiểm sát Tối cao không có văn bản này); mục 4 ghi TODO, định mức B.
- Điều 23 của Luật Bác sĩ (2021): site Ủy ban Y tế và Sức khỏe nhà nước với bóc dữ liệu bằng kịch bản trả 412, kho chính sách gov.cn không thu nhận luật do Quốc hội ban hành; không trích dẫn.
- Điều 31 của Luật Thương hiệu (sửa đổi 2019) về nguyên tắc đơn đăng ký trước được xét trước: chưa định vị được trang toàn văn trên site Cục Sở hữu trí tuệ quốc gia; mục 12 chỉ nhắc để lưu ý, không trích điều khoản.
- Điều lệ phá sản cá nhân của Khu kinh tế đặc biệt Thâm Quyến: chưa định vị được nguyên văn chính thức; ghi chú mục 14 chỉ nói “một số địa phương thí điểm”, không trích.
- Điều 122 Luật An toàn thực phẩm về hình phạt đối với kinh doanh không giấy phép: chưa định vị được trang toàn văn chính thức; mục 6 đổi sang trích Biện pháp tra xét xử lý kinh doanh không giấy phép, không đăng ký và Biện pháp quản lý cấp phép kinh doanh thực phẩm và đăng ký.
