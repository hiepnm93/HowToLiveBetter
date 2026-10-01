# Làm nền tảng cần những giấy phép nào: bảng đối chiếu và bảng quyết định chọn máy chủ

Bài dài này tương ứng với mục 26 trong README. Ở đây chỉ đặt ba bảng và vài đoạn giải thích những chỗ dễ nhầm nhất. Nội dung các mục và nguồn dẫn đều nằm trong README. Muốn biết cách đăng ký công ty và kê khai thuế, bạn xem mục 12 (Khởi nghiệp và kinh doanh). Còn những ranh giới mà người làm kỹ thuật đi thuê không nên đụng tới, bạn xem mục 11 (Lập trình viên và người làm kỹ thuật).

## 1. Trước tiên, hãy xác định xem bạn đang làm loại hình nghiệp vụ nào

Một website thường dính vào đồng thời mấy loại hình nghiệp vụ. Dính vào bao nhiêu loại thì phải làm bấy nhiêu giấy phép, không thể chỉ chọn làm một loại cho xong.

| Việc bạn đang làm | Loại hình nghiệp vụ tương ứng | Cần làm gì | Căn cứ chính |
|---|---|---|---|
| Trang thông tin không thu phí, blog cá nhân, website giới thiệu công ty | Dịch vụ thông tin Internet không kinh doanh (非经营性互联网信息服务) | Đăng ký ICP (ICP 备案). Đây không phải giấy phép, mà chỉ là việc khai báo với cơ quan quản lý trước khi mở site | 互联网信息服务管理办法第四条 |
| Hội viên, dịch vụ giá trị gia tăng, nội dung trả phí có thu tiền của người dùng | Dịch vụ thông tin Internet có tính kinh doanh (经营性互联网信息服务) | Giấy phép kinh doanh viễn thông giá trị gia tăng (增值电信业务经营许可 — nghiệp vụ dịch vụ thông tin). Nó quản đúng việc bạn thu tiền của người dùng | 同上第三、四、七条 |
| Làm cầu nối giữa người mua và người bán, xử lý giao dịch và đơn hàng | Nghiệp vụ xử lý dữ liệu trực tuyến và xử lý giao dịch (在线数据处理与交易处理业务) | Giấy phép kinh doanh viễn thông giá trị gia tăng (B21). Nó quản việc bạn xử lý giao dịch thay cho người mua và người bán | 电信业务分类目录（2015 年版）B21 |
| Livestream có streamer xuất hiện trên sóng, livestream game | Biểu diễn trực tuyến (网络表演) | Giấy phép kinh doanh văn hóa mạng (网络文化经营许可证)， phạm vi kinh doanh phải bao gồm biểu diễn trực tuyến. Không có nó thì trên site không được cho streamer lên hình | 网络表演经营活动管理办法第四条 |
| Tự làm chương trình video, hoặc gom chương trình từ nơi khác về, hoặc cho người dùng tải video lên site | Dịch vụ chương trình nghe nhìn trên Internet (互联网视听节目服务) | Giấy phép truyền phát chương trình nghe nhìn qua mạng thông tin (信息网络传播视听节目许可证). Nó quản việc phát chương trình video trên site | 互联网视听节目服务管理规定第七、八条 |
| Bán hàng trong livestream | Tiếp thị qua livestream (网络直播营销) | Giấy phép phải làm thì theo các dòng ở trên. Ngoài ra còn phải xác minh tư cách người bán và lưu giữ hồ sơ | 网络直播营销管理办法（试行）第八条 |
| Làm tin tức | Dịch vụ thông tin tin tức trên Internet (互联网新闻信息服务) | Giấy phép dịch vụ thông tin tin tức trên Internet (互联网新闻信息服务许可证). Không có nó thì site không được đăng tin tức | 互联网直播服务管理规定第五条 |
| Tự xây phòng máy chủ để bán hosting, bán băng thông | Nghiệp vụ trung tâm dữ liệu Internet (互联网数据中心业务)， nghiệp vụ dịch vụ truy cập Internet (互联网接入服务业务) | Giấy phép kinh doanh viễn thông giá trị gia tăng (B11, B14). Nó quản việc bạn bán phòng máy chủ và băng thông cho người khác | 电信业务分类目录（2015 年版）B11、B14 |

Loại livestream nào ứng với giấy phép nào, văn bản chỉ đạo của bảy bộ, ngành năm 2021 nói rõ nhất: «Nền tảng livestream tiến hành hoạt động biểu diễn trực tuyến có tính kinh doanh phải có 《网络文化经营许可证》 và làm đăng ký ICP; nền tảng livestream tiến hành dịch vụ chương trình nghe nhìn trên mạng phải có 《信息网络传播视听节目许可证》 (hoặc đã hoàn tất đăng ký trong hệ thống 全国网络视听平台信息登记管理系统) và làm đăng ký ICP; nền tảng livestream tiến hành dịch vụ thông tin tin tức trên Internet phải có 《互联网新闻信息服务许可证》.»

Livestream chia làm ba loại. Loại có streamer biểu diễn thì làm giấy phép kinh doanh văn hóa mạng (《网络文化经营许可证》). Loại làm chương trình nghe nhìn trên mạng thì làm giấy phép truyền phát chương trình nghe nhìn qua mạng thông tin (《信息网络传播视听节目许可证》)， hoặc hoàn tất đăng ký trong Hệ thống đăng ký quản lý thông tin nền tảng nghe nhìn mạng toàn quốc (全国网络视听平台信息登记管理系统). Loại làm tin tức thì làm giấy phép dịch vụ thông tin tin tức trên Internet (《互联网新闻信息服务许可证》). Hai loại đầu còn đều phải làm đăng ký ICP.

### Ba điểm dễ nhầm

**Cá nhân không xin được giấy phép viễn thông giá trị gia tăng.** Điều kiện xin cấp, khoản đầu tiên đã ghi rõ: «chủ thể kinh doanh phải là công ty thành lập theo đúng pháp luật». Bạn phải có một công ty trước đã — cá nhân cầm chứng minh thư đi xin là không xong việc. Nếu chỉ kinh doanh trong phạm vi một tỉnh thì vốn điều lệ đăng ký của công ty không được thấp hơn 1.000.000 nhân dân tệ (NDT); kinh doanh liên tỉnh thì không được thấp hơn 10.000.000 NDT. Sau khi nộp hồ sơ, thời hạn thẩm định là 60 ngày, giấy phép có hiệu lực 5 năm. Muốn làm nghiệp vụ có thu phí thì trước hết phải mở được công ty. Cách mở công ty xem mục 12 (Khởi nghiệp và kinh doanh).

**Giấy phép chương trình nghe nhìn thì công ty tư nhân gần như không thể xin được.** Điều kiện xin cấp ghi là «có tư cách pháp nhân, là đơn vị do nhà nước đầu tư toàn bộ hoặc do nhà nước nắm cổ phần chi phối». Nghĩa là giấy phép này chỉ cấp cho đơn vị do nhà nước góp vốn hoặc do nhà nước nắm giữ cổ phần chi phối. Vì vậy người khởi nghiệp cá nhân làm video dài, làm chương trình tự sản xuất sẽ không có được tấm giấy phép này. Muốn làm livestream, thứ bạn cần xin là giấy phép kinh doanh văn hóa mạng (网络文化经营许可证).

**Không có văn bản chính thức nào nói thẳng «sàn thương mại điện tử phải làm EDI».** EDI mà người ta nhắc đến chính là nhóm giấy phép B21 trong bảng trên, tên chính thức là nghiệp vụ xử lý dữ liệu trực tuyến và xử lý giao dịch (在线数据处理与交易处理业务). Hướng dẫn thủ tục của Bộ Công nghiệp và Công nghệ thông tin (工信部) chỉ nói đúng một câu: «xin giấy phép kinh doanh viễn thông tương ứng theo phạm vi giới hạn của nghiệp vụ». Bộ này còn có hai lần trả lời riêng: nền tảng gọi xe (网约车) chỉ cần làm đăng ký website, các sàn giao dịch quyền lợi (权益类) và hàng hóa cơ bản (大宗商品) cũng chỉ cần làm đăng ký website. Vì vậy phần này chỉ trích nguyên văn định nghĩa của B21; còn nghề của bạn có cần làm loại giấy phép này hay không thì phải do bạn và Cục Quản lý Thông tin (通信管理局) địa phương cùng đánh giá. Trước khi bắt tay vào thủ tục, hãy gọi điện cho cục quản lý thông tin phụ trách địa bàn của bạn để hỏi cho rõ.

## II. Nghĩa vụ hằng ngày của chính nền tảng

Có giấy phép trong tay mới chỉ nghĩa là bạn được phép khai trương. Những việc dưới đây là những việc bạn phải làm hằng ngày sau khi đã mở cửa. Còn nếu không làm được thì bị phạt bao nhiêu tiền, đã ghi rõ ở từng mục trong phần 26.

| Nghĩa vụ | Yêu cầu bắt buộc | Căn cứ |
|---|---|---|
| Xác minh và đăng ký các nhà bán hàng mở gian hàng trên nền tảng của bạn | Ít nhất 6 tháng một lần phải xác minh và cập nhật lại | 网络交易监督管理办法第二十四条 |
| Báo lên thông tin định danh của nhà bán hàng | Tháng 1 và tháng 7 hằng năm, báo cho cơ quan quản lý thị trường (市场监管部门) | 同上第二十五条 |
| Báo lên các thông tin liên quan đến thuế | Trong tháng ngay sau khi kết thúc mỗi quý, báo cho cơ quan thuế (税务机关) | 互联网平台企业涉税信息报送规定第四条 |
| Lưu trữ thông tin giao dịch | Không ít hơn 3 năm, tính từ ngày giao dịch hoàn tất | 电子商务法第三十一条 |
| Lưu trữ nội dung phát trực tuyến và nhật ký | 60 ngày | 互联网直播服务管理规定第十六条 |
| Lưu trữ video biểu diễn trực tuyến (网络表演) | Không ít hơn 60 ngày | 网络表演经营活动管理办法第十三条 |
| Lưu trữ nhật ký mạng | Không ít hơn 6 tháng | 网络安全法第二十三条第三项 |
| Xử lý thông báo về hành vi xâm phạm quyền | Chuyển bản tuyên bố của nhà bán hàng cho bên khiếu nại. Sau 15 ngày kể từ khi chuyển mà vẫn không có hồi âm gì thì khôi phục lại | 电子商务法第四十三条 |
| Thiết lập cổng tiếp nhận khiếu nại, tố cáo | Đặt ở vị trí dễ thấy, bấm vào thuận tiện | 网络信息内容生态治理规定第十六条 |

Thời hạn lưu trữ có 4 bộ, mỗi bộ tự tính riêng. Thông tin giao dịch lưu 3 năm, nội dung phát trực tuyến lưu 60 ngày, nhật ký mạng lưu 6 tháng. Riêng thông tin định danh của nhà bán hàng trên nền tảng thì lưu 3 năm, tính từ ngày họ rút khỏi nền tảng. Khi lập phương án lưu trữ, bạn hãy thiết kế theo quy định có thời hạn dài nhất, đừng theo cái ngắn nhất.

## III. Chọn máy chủ: chọn thế nào giữa ba mức

Trước tiên, hãy trả lời mấy câu hỏi dưới đây, rồi hãy đi so giá.

| Câu hỏi | Nếu câu trả lời là | Thì |
|---|---|---|
| Trang web ngừng hoạt động một ngày, bạn chịu nổi không | Chịu nổi | VPS (máy chủ ảo) rẻ nhất là đủ dùng |
| Có đăng ký tài khoản người dùng, giao dịch, tải lên không | Có | Dùng máy chủ đám mây của nhà cung cấp đám mây lớn. Chọn loại sao lưu được cả máy bất cứ lúc nào và tăng được cấu hình tạm thời |
| Có người chuyên trách quản lý máy chủ không | Không | Đừng đặt nguyên chiếc máy tại trung tâm dữ liệu |
| Băng thông hay phần cứng có phải là khoản chi lớn nhất không | Có, và có người chuyên trách quản lý | Lúc đó mới cân nhắc đặt nguyên chiếc máy tại trung tâm dữ liệu |

**Nhà cung cấp nhỏ không phải là không dùng được, mà là trước khi dùng phải tra cứu trước.** Việc đặt máy tại trung tâm dữ liệu (colocation) và việc cung cấp kết nối internet cho người khác, cả hai việc này vốn dĩ đã cần giấy phép. Chúng thuộc nhóm dịch vụ viễn thông giá trị gia tăng (增值电信业务). Cách tra là mở Hệ thống thông tin quản lý tổng hợp thị trường dịch vụ viễn thông (电信业务市场综合管理信息系统) của Bộ Công nghiệp và Công nghệ thông tin (工信部) tại tsm.miit.gov.cn, tra một lần theo tên đầy đủ của công ty. Tra không thấy giấy phép thì loại luôn. Loại rẻ hơn được một nửa thường mang ba rủi ro: bán vượt quá số máy thực có (oversell), ông chủ bỏ trốn, đường truyền ngược dòng (upstream) bị chặn. Thật sự có chuyện thì nhà cung cấp nào có giấy phép, bạn vẫn còn có thể khiếu nại lên Cục Quản lý Viễn thông (通信管理局); không có giấy phép, bạn còn không biết phải khiếu nại với ai.

**Đặt tại Trung Quốc đại lục hay ở nước ngoài.** Máy chủ đặt tại Trung Quốc đại lục thì phải làm thủ tục lưu hồ sơ website (备案). Nhà cung cấp kết nối không được phép cấp kết nối cho website chưa lưu hồ sơ. Đặt máy chủ ở nước ngoài thì đúng là né được việc lưu hồ sơ. Nhưng người dùng của bạn ở Trung Quốc đại lục, tiền bạn thu cũng ở đó. Những nghĩa vụ của nền tảng được viết ở các điều từ 5 đến 10 của mục 26, một điều cũng không tránh được. Đặt ở nước ngoài còn phải gánh thêm một lớp chi phí cho việc đưa dữ liệu ra nước ngoài (数据出境). Chuyển thông tin cá nhân của người dùng trong nước lên máy chủ ở nước ngoài, việc này chính là gọi là đưa dữ liệu ra nước ngoài. Việc này phải thỏa mãn một trong bốn điều kiện liệt kê tại Điều 38 của Luật Bảo vệ thông tin cá nhân (个人信息保护法). Ngoài ra phải lấy sự đồng ý riêng của chính người đó, không được gộp chung vào một trọn gói điều khoản rồi để người ta tích chọn cùng một lúc. Số người liên quan được tính theo cách «lũy kế kể từ ngày 1 tháng 1 trong năm». Chưa đến 100.000 người thì cả ba con đường dưới đây đều không cần đi. Từ 100.000 đến 1.000.000 người thì hoặc là ký hợp đồng chuẩn (标准合同)， hoặc là làm thủ tục chứng nhận. Từ 1.000.000 người trở lên thì phải khai báo đánh giá an toàn (安全评估).

**Sao lưu.** Bản sao lưu ít nhất phải đặt ở hai nơi, và đừng đặt cả hai bản cùng ở một vùng của cùng một nhà cung cấp. Điều này không có căn cứ pháp lý nào, đơn thuần là kinh nghiệm.

## 4. Giới hạn của tài liệu này

- Mọi điều khoản nêu ở trên đều lấy cột Nguồn ở tiết 26 trong README của Cẩm nang sống hiệu quả làm chuẩn; ở đó có số hiệu văn bản, số điều và liên kết.
- Loại quy định này thay đổi rất nhanh. Nội dung tiết này được kiểm chứng vào tháng 9 năm 2026. Nếu thực sự cần trích dẫn, bạn hãy tự mở lại trang bản gốc một lần nữa. Đặc biệt lưu ý hai chỗ: Luật An toàn mạng (网络安全法) điều chỉnh lại số điều kể từ ngày 1 tháng 1 năm 2026; quy định dành cho người chưa thành niên khi thưởng trên livestream được sửa vào tháng 4 năm 2026, chuyển sang phân mức theo độ tuổi.
- Có vài chỗ chưa lấy được văn bản gốc, đã ghi rõ từng chỗ trong [biên bản kiểm chứng](核实记录/追加-第26节做平台.md). Một chỗ là liệu sàn thương mại điện tử có bắt buộc phải xin giấy phép EDI hay không, các văn bản chính thức có quy định rõ hay chưa. Chỗ còn lại là bản giải thích tư pháp (司法解释) quy định xử lý trực tiếp theo tội kinh doanh trái pháp luật (非法经营罪) đối với hành vi kinh doanh dịch vụ văn hóa mạng hoặc dịch vụ âm thanh - hình ảnh không có giấy phép.
