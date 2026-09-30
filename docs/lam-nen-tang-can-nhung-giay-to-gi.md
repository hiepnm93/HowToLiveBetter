# Làm nền tảng cần những giấy tờ gì: bảng đối chiếu và bảng quyết định chọn máy chủ

Bài dài này tương ứng với chương 26 trong README. Ở đây chỉ đặt ba bảng và vài đoạn giải thích dễ nhầm nhất. Phần nội dung các mục và nguồn đều nằm trong README. Công ty đăng ký thế nào, nộp thuế ra sao, xem chương 12 (Khởi nghiệp và kinh doanh). Những ràng buộc mà người làm kỹ thuật đi thuê đừng dính vào, xem chương 11 (Ràng buộc cho lập trình viên và người làm kỹ thuật).

## 1. Trước hết hãy xác định bạn đang làm loại hình kinh doanh nào

Một website thường cùng lúc dính vào mấy loại hình kinh doanh. Dính vào mấy loại thì phải xin bấy nhiêu giấy phép, không thể chỉ chọn một cái để xin.

| Việc bạn đang làm | Loại hình kinh doanh tương ứng | Cần gì | Căn cứ chính |
|---|---|---|---|
| Trang thông tin không thu tiền, blog cá nhân, website công ty | Dịch vụ thông tin internet phi kinh doanh | Đăng ký ICP. Đây không phải giấy phép, chỉ là khai báo với cơ quan chủ quản trước khi mở trang | Biện pháp quản lý dịch vụ thông tin internet, Điều 4 |
| Hội viên, dịch vụ gia tăng, nội dung trả phí thu tiền của người dùng | Dịch vụ thông tin internet kinh doanh | Giấy phép kinh doanh nghiệp vụ viễn thông gia tăng (nghiệp vụ dịch vụ thông tin). Quản việc bạn thu tiền của người dùng | Cùng văn bản trên, Điều 3, 4 và 7 |
| Kết nối hai bên mua bán, xử lý giao dịch và đơn hàng | Nghiệp vụ xử lý dữ liệu trực tuyến và xử lý giao dịch | Giấy phép kinh doanh nghiệp vụ viễn thông gia tăng (B21). Quản việc bạn thay hai bên mua bán xử lý giao dịch | Danh mục phân loại nghiệp vụ viễn thông (bản 2015), B21 |
| Phát trực tiếp có streamer xuất hiện trên sóng, phát trực tiếp trò chơi | Biểu diễn trên mạng | Giấy phép kinh doanh văn hóa mạng, phạm vi kinh doanh có bao gồm biểu diễn mạng. Không có nó, trang không được để streamer xuất hiện | Biện pháp quản lý hoạt động kinh doanh biểu diễn trên mạng, Điều 4 |
| Tự làm chương trình video, hoặc tập hợp chương trình của nơi khác lại, hoặc cho người dùng tải video lên trang | Dịch vụ chương trình nghe nhìn qua internet | Giấy phép truyền bá chương trình nghe nhìn qua mạng thông tin. Quản việc trang phát chương trình video | Quy định quản lý dịch vụ chương trình nghe nhìn qua internet, Điều 7 và 8 |
| Bán hàng qua phiên phát trực tiếp | Marketing qua phát trực tiếp trên mạng | Giấy tờ cần xin cứ theo mấy dòng ở trên. Ngoài ra còn phải thẩm tra người bán, lưu giữ hồ sơ | Biện pháp quản lý marketing phát trực tiếp trên mạng (thử hành), Điều 8 |
| Làm tin tức, thông tin thời sự | Dịch vụ thông tin thời sự qua internet | Giấy phép dịch vụ thông tin thời sự qua internet. Không có nó, trang không được đăng tin tức | Quy định quản lý dịch vụ phát trực tiếp qua internet, Điều 5 |
| Tự xây trung tâm dữ liệu để bán máy chủ, bán băng thông | Nghiệp vụ trung tâm dữ liệu internet, nghiệp vụ dịch vụ truy nhập internet | Giấy phép kinh doanh nghiệp vụ viễn thông gia tăng (B11, B14). Quản việc bạn bán trung tâm dữ liệu và băng thông cho người khác | Danh mục phân loại nghiệp vụ viễn thông (bản 2015), B11 và B14 |

Loại phát trực tiếp nào ứng với giấy phép nào, văn bản ý kiến chỉ đạo do 7 bộ ngành ban hành năm 2021 nói rõ nhất: “Nền tảng phát trực tiếp triển khai hoạt động biểu diễn trên mạng có tính kinh doanh phải có ‘Giấy phép kinh doanh văn hóa mạng’ và làm đăng ký ICP; nền tảng phát trực tiếp triển khai dịch vụ chương trình nghe nhìn trên mạng phải có ‘Giấy phép truyền bá chương trình nghe nhìn qua mạng thông tin’ (hoặc hoàn thành đăng ký trong Hệ thống quản lý đăng ký thông tin nền tảng nghe nhìn trực tuyến toàn quốc) và làm đăng ký ICP; nền tảng phát trực tiếp triển khai dịch vụ thông tin thời sự qua internet phải có ‘Giấy phép dịch vụ thông tin thời sự qua internet’.”

Phát trực tiếp chia ba loại. Có streamer biểu diễn thì xin “Giấy phép kinh doanh văn hóa mạng”. Làm chương trình nghe nhìn trên mạng thì xin “Giấy phép truyền bá chương trình nghe nhìn qua mạng thông tin”, hoặc hoàn thành đăng ký trong Hệ thống quản lý đăng ký thông tin nền tảng nghe nhìn trực tuyến toàn quốc. Làm tin tức thì xin “Giấy phép dịch vụ thông tin thời sự qua internet”. Hai loại đầu còn đều phải làm đăng ký ICP.

### Ba điểm dễ nhầm

**Danh tính cá nhân thì không xin được giấy phép viễn thông gia tăng.** Điều kiện xin, điều thứ nhất đã ghi rõ “người kinh doanh là công ty được thành lập hợp pháp”. Bạn phải có một công ty trước đã, cá nhân mang chứng minh thư đi xin là không xong. Chỉ kinh doanh trong phạm vi tỉnh mình thì vốn đăng ký công ty không được thấp hơn 1.000.000 yên; kinh doanh xuyên tỉnh thì không được thấp hơn 10.000.000 yên. Sau khi nộp hồ sơ, thời hạn thẩm định là 60 ngày, giấy phép có hiệu lực 5 năm. Muốn làm nghiệp vụ thu phí thì phải mở công ty trước đã. Cách mở công ty, xem chương 12 (Khởi nghiệp và kinh doanh).

**Giấy phép chương trình nghe nhìn thì công ty dân doanh căn bản không xin được.** Điều kiện xin được ghi là “có tư cách pháp nhân, là đơn vị quốc doanh toàn phần hoặc do nhà nước nắm cổ phần chi phối”. Nghĩa là giấy phép này chỉ cấp cho đơn vị do nhà nước cấp vốn hoặc do nhà nước kiểm soát. Vì vậy cá nhân khởi nghiệp làm video dài, làm chương trình tự sản xuất, không xin được giấy phép này. Muốn làm phát trực tiếp, thứ cần xin là giấy phép kinh doanh văn hóa mạng.

**Không có văn bản chính thức nào nói rõ “nền tảng thương mại điện tử bắt buộc phải xin EDI”.** EDI chính là loại giấy phép B21 trong bảng trên, tên chính thức là nghiệp vụ xử lý dữ liệu trực tuyến và xử lý giao dịch. Cẩm nang thủ tục của Bộ Công nghiệp và Công nghệ thông tin chỉ nói một câu “theo phạm vi nghiệp vụ mà xin giấy phép kinh doanh nghiệp vụ viễn thông tương ứng”. Bộ này còn có hai lần trả lời riêng: nền tảng xe gọi theo cuộc chỉ cần làm đăng ký website, các nền tảng giao dịch quyền lợi và hàng hóa đại cương cũng chỉ cần làm đăng ký website. Vì vậy ở đây chỉ chép nguyên văn định nghĩa của B21, còn môn kinh doanh của bạn có phải xin hay không, phải do bạn và Cục Quản lý Viễn thông địa phương phán đoán. Trước khi bắt tay vào làm, hãy gọi điện một lần cho Cục Quản lý Viễn thông quản lý địa bàn để hỏi cho rõ.

## 2. Nghĩa vụ hằng ngày của bản thân nền tảng

Có giấy phép, chỉ là được phép khai trương. Những thứ dưới đây là việc phải làm mỗi ngày sau khi khai trương. Làm không đạt bị phạt bao nhiêu tiền, được viết trong từng mục của chương 26.

| Nghĩa vụ | Chỉ tiêu cứng | Nguồn trích |
|---|---|---|
| Đối chiếu và đăng ký những người bán mở cửa hàng trên nền tảng của bạn | Ít nhất cứ sáu tháng đối chiếu, cập nhật lại một lần | Biện pháp giám sát quản lý giao dịch trên mạng, Điều 24 |
| Báo lên thông tin danh tính của người bán | Tháng 1 và tháng 7 hằng năm báo cho cơ quan giám sát quản lý thị trường | Cùng văn bản trên, Điều 25 |
| Báo lên những thông tin liên quan đến thuế | Trong tháng ngay sau khi mỗi quý kết thúc, báo cho cơ quan thuế | Quy định về báo cáo thông tin liên quan đến thuế của doanh nghiệp nền tảng internet, Điều 4 |
| Lưu giữ thông tin giao dịch | Kể từ ngày giao dịch hoàn thành, không ít hơn 3 năm | Luật Thương mại điện tử, Điều 31 |
| Lưu giữ nội dung phát trực tiếp và nhật ký | 60 ngày | Quy định quản lý dịch vụ phát trực tiếp qua internet, Điều 16 |
| Lưu giữ video biểu diễn trên mạng | Không ít hơn 60 ngày | Biện pháp quản lý hoạt động kinh doanh biểu diễn trên mạng, Điều 13 |
| Lưu giữ nhật ký mạng | Không ít hơn 6 tháng | Luật An toàn mạng, Điều 23 khoản 3 |
| Xử lý thông báo xâm phạm quyền | Chuyển bản tuyên bố của người bán cho bên khiếu nại. Chuyển đi đã đủ 15 ngày mà vẫn chưa có động tĩnh gì thì khôi phục | Luật Thương mại điện tử, Điều 43 |
| Lập kênh tiếp nhận khiếu nại, tố giác | Đặt ở vị trí dễ thấy, bấm vào tiện lợi | Quy định quản trị hệ sinh thái nội dung thông tin trên mạng, Điều 16 |

Thời hạn lưu giữ có bốn bộ, mỗi bộ tính riêng. Thông tin giao dịch lưu 3 năm, nội dung phát trực tiếp lưu 60 ngày, nhật ký mạng lưu 6 tháng. Thông tin danh tính của người bán trên nền tảng, tính từ ngày họ rút khỏi nền tảng, lưu 3 năm. Khi làm phương án lưu trữ, hãy thiết kế theo khoản dài nhất, đừng theo ngắn nhất.

## 3. Chọn máy chủ: ba mức chọn thế nào

Trả lời mấy câu hỏi dưới đây trước, rồi hãy so giá.

| Câu hỏi | Nếu câu trả lời là | Thì |
|---|---|---|
| Trang ngừng hoạt động một ngày bạn chịu nổi không | Chịu nổi | VPS (máy chủ ảo) rẻ nhất là đủ dùng |
| Có đăng ký người dùng, giao dịch, tải lên không | Có | Dùng máy chủ đám mây của nhà cung cấp đám mây chính thống. Chọn loại có thể sao lưu cả máy bất cứ lúc nào, cũng có thể tạm thời nâng cấu hình |
| Có người chuyên trách quản máy chủ không | Không | Đừng đem cả máy ký gửi tại trung tâm dữ liệu |
| Băng thông hay phần cứng có là khoản chi lớn nhất không | Có, và lại có người chuyên trách quản | Lúc đó mới cân nhắc đem cả máy ký gửi tại trung tâm dữ liệu |

**Nhà cung cấp nhỏ không phải là không dùng được, mà là trước khi dùng phải tra giấy phép trước.** Đem máy ký gửi tại trung tâm dữ liệu, cung cấp truy nhập mạng cho người khác, hai việc này tự thân đều cần giấy phép. Chúng thuộc nghiệp vụ viễn thông gia tăng. Cách tra là mở Hệ thống quản lý tổng hợp thị trường nghiệp vụ viễn thông của Bộ Công nghiệp và Công nghệ thông tin tại tsm.miit.gov.cn, tra một lần theo tên đầy đủ của công ty. Tra không thấy giấy phép thì loại ngay. Loại giá rẻ được một nửa, rủi ro thường là ba thứ: máy bị bán vượt công suất, ông chủ bỏ trốn, đường lên phía trên bị khóa. Thật sự có chuyện thì nhà cung cấp có giấy phép, bạn còn khiếu nại lên Cục Quản lý Viễn thông được; không giấy phép, bạn còn chẳng biết tìm ai để phản ánh.

**Đặt trong nước hay đặt ở nước ngoài.** Máy chủ đặt trong nước thì phải làm đăng ký. Nhà cung cấp truy nhập không được cấp truy nhập cho trang chưa đăng ký. Đặt ở nước ngoài thì quả thật lách được đăng ký. Nhưng người dùng của bạn ở trong nước, tiền thu về cũng ở trong nước. Những nghĩa vụ nền tảng được viết ở chương 26 mục 5 đến mục 10, một mục cũng không thiếu được. Đặt ở nước ngoài còn phải gánh thêm một lớp chi phí chuyển dữ liệu ra nước ngoài. Đưa thông tin cá nhân của người dùng trong nước truyền lên máy chủ ở nước ngoài, đây gọi là chuyển dữ liệu ra nước ngoài. Việc này phải thỏa mãn một trong bốn điều kiện liệt kê tại Điều 38 Luật Bảo vệ thông tin cá nhân. Còn phải riêng rẽ có được sự đồng ý của chính người đó, không được gộp vào một gói thỏa thuận cho người ta bấm chung một thể. Liên quan đến bao nhiêu người, tính theo “cộng dồn kể từ ngày 1 tháng 1 của năm đó”. Dưới 100.000 người, con đường nào trong ba con đường dưới đây cũng không phải đi. Từ 100.000 đến 1.000.000 người, hoặc ký hợp đồng chuẩn, hoặc làm chứng nhận. Trên 1.000.000 người, phải khai báo đánh giá an toàn.

**Sao lưu.** Bản sao lưu để ít nhất ở hai nơi, và đừng để cả hai bản tại cùng một vùng của cùng một nhà cung cấp. Mục này không có căn cứ pháp quy, thuần túy là kinh nghiệm.

## 4. Giới hạn của tài liệu này

- Mọi điều khoản viết ở trên, đều lấy cột nguồn ở chương 26 của README trong sách này làm chuẩn. Ở đó có số văn bản, số điều và liên kết.
- Loại quy phạm này sửa đổi rất nhanh. Nội dung mục này được kiểm chứng vào tháng 9 năm 2026. Trước khi thật sự trích dẫn, hãy tự mở lại trang gốc một lần nữa. Đặc biệt chú ý hai chỗ: Luật An toàn mạng từ ngày 1 tháng 1 năm 2026 có điều chỉnh số hiệu điều khoản; quy định về quà tặng (tip) của người chưa thành niên khi xem phát trực tiếp, tháng 4 năm 2026 đã đổi thành phân tầng theo độ tuổi.
- Có vài chỗ chưa lấy được nguyên văn, đã được ghi rõ từng chỗ trong [hồ sơ xác minh](ho-so-xac-minh/bo-sung-chuong-26-lam-nen-tang.md). Một chỗ là nền tảng thương mại điện tử rốt cuộc có bắt buộc phải xin EDI hay không, phía chính thức có văn bản rõ ràng hay không. Chỗ kia là bản giải thích tư pháp xử lý thẳng tội kinh doanh trái phép đối với hành vi kinh doanh văn hóa mạng hoặc dịch vụ nghe nhìn không có giấy phép.
