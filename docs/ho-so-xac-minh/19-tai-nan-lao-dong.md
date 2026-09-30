# Hồ sơ xác minh: chương 19 bổ sung 4 mục (tai nạn lao động)

Ngày kiểm chứng: 2026-09-07. Chương 19 từ 6 lên 10 mục, tên chương đổi từ “bị sa thải và chủ động nghỉ việc” thành “bị sa thải, nghỉ việc và tai nạn lao động”, toàn sách từ 318 lên 322 mục.

Tai nạn lao động trước đây là khoảng trống đơn lẻ lớn nhất của toàn sách: mục 3 trong chương 7 từng nhắc các vụ tai nạn lao động nằm trong phạm vi trợ giúp pháp lý, nhưng “xác định thế nào, thời hạn ra sao, nhận bao nhiêu” thì không có mục nào. Khoản tiền này lớn hơn khoản N của việc bị sa thải tới một bậc, thời hạn còn cứng hơn.

Phương pháp: dùng `Invoke-WebRequest` lấy các byte gốc của trang công báo trên gov.cn, giải mã theo GB18030 rồi bỏ thẻ, so từng điều với nguyên văn pháp luật.

---

## 1. Nguyên văn đã đối chiếu từng điều

Nguồn đều là “Điều lệ bảo hiểm tai nạn lao động” (Quốc lệnh số 586, sửa đổi năm 2010), toàn văn trên công báo của Chính phủ Trung Quốc <https://www.gov.cn/gongbao/content/2011/content_1778064.htm>.

| Điều luật | Nguyên văn đã đối chiếu | Dùng ở đâu |
| --- | --- | --- |
| Điều 14 | bảy tình huống “nên được xác định là tai nạn lao động”, trong đó mục (sáu) là cách diễn đạt sau sửa đổi năm 2010: “trên đường đi làm, đi về, bị tai nạn giao thông hoặc bị thương do tai nạn của đường sắt đô thị, phà chở khách, tàu hỏa mà bản thân không chịu trách nhiệm chính” | mục 7 (bị xe đâm trúng trên đường đi làm, đi về cũng tính) |
| Điều 15 | “(một) trong thời gian làm việc và tại vị trí làm việc, đột phát bệnh tật rồi tử vong, hoặc trong vòng 48 giờ sau khi cấp cứu không qua khỏi” v.v. ba tình huống “coi như là tai nạn lao động” | ghi chú của mục 7 |
| Điều 16 | “(một) cố ý phạm tội; (hai) say rượu hoặc sử dụng ma túy; (ba) tự làm tổn thương bản thân hoặc tự sát” thì không được xác định | ghi chú của mục 7 |
| Điều 17 | “Đơn vị nơi công tác phải trong vòng 30 ngày kể từ ngày xảy ra tổn thương do tai nạn hoặc kể từ ngày được chẩn đoán, thẩm định là bệnh nghề nghiệp… nộp đơn xin xác định tai nạn lao động”; “nếu đơn vị sử dụng lao động không nộp đơn xin xác định tai nạn lao động theo quy định tại khoản trên, thì người lao động bị tai nạn lao động hoặc thân nhân gần của họ, tổ chức công đoàn, trong vòng 1 năm kể từ ngày xảy ra tổn thương do tai nạn hoặc kể từ ngày được chẩn đoán, thẩm định là bệnh nghề nghiệp, có thể trực tiếp nộp đơn xin xác định tai nạn lao động tới cơ quan hành chính bảo hiểm xã hội của khu vực điều phối nơi đơn vị sử dụng lao động đặt trụ sở”; “nếu đơn vị sử dụng lao động không nộp đơn xin xác định tai nạn lao động trong thời hạn quy định tại khoản 1 của điều này, thì các khoản chi phí như chế độ đãi ngộ tai nạn lao động phù hợp với điều lệ này phát sinh trong khoảng thời gian đó do đơn vị sử dụng lao động gánh chịu” | hai mốc thời hạn của mục 7 |
| Điều 18 | ba loại hồ sơ xin: tờ khai xin xác định tai nạn lao động, chứng liệu về quan hệ lao động, giấy chứng nhận chẩn đoán y tế hoặc giấy chứng nhận chẩn đoán bệnh nghề nghiệp | cột chi phí của mục 7 |
| Điều 19 | “Người lao động hoặc thân nhân gần của họ cho rằng là tai nạn lao động, mà đơn vị sử dụng lao động không cho là tai nạn lao động, thì đơn vị sử dụng lao động gánh chịu nghĩa vụ đưa ra bằng chứng.” | mục 7 |
| Điều 20 | “Cơ quan hành chính bảo hiểm xã hội phải ra quyết định xác định tai nạn lao động trong vòng 60 ngày kể từ ngày tiếp nhận đơn xin xác định tai nạn lao động” | cột nguồn của mục 7 |
| Điều 21, 22 | “Sau khi điều trị mà tình trạng thương tật tương đối ổn định mà còn tồn tại khuyết tật, ảnh hưởng năng lực lao động, thì phải tiến hành thẩm định năng lực lao động”; “rối loạn chức năng lao động chia thành mười cấp khuyết tật, nặng nhất là cấp một, nhẹ nhất là cấp mười” | mục 9 |
| Điều 36 | cấp 5, cấp 6: trợ cấp khuyết tật một lần bằng 18 tháng, 16 tháng lương của bản thân; nếu khó sắp xếp việc làm thì phát phụ cấp khuyết tật hằng tháng, bằng 70%, 60% lương của bản thân | mục 9 |
| Điều 37 | cấp 7 đến 10: trợ cấp khuyết tật một lần bằng 13, 11, 9, 7 tháng lương của bản thân; khi hợp đồng chấm dứt do hết hạn hoặc bản thân đề nghị chấm dứt, thì quỹ trả trợ cấp y tế tai nạn lao động một lần, đơn vị trả trợ cấp việc làm cho người khuyết tật một lần, tiêu chuẩn do chính phủ cấp tỉnh quy định | mục 9 |
| Điều 39 | “(một) trợ cấp mai táng bằng 6 tháng tiền lương bình quân hằng tháng của công nhân viên trong khu vực điều phối năm trước; (hai) phụ cấp nuôi dưỡng thân nhân… vợ hoặc chồng mỗi tháng 40%, thân nhân khác mỗi người mỗi tháng 30%, người già góa hoặc trẻ mồ côi mỗi người mỗi tháng tăng thêm 10% trên cơ sở tiêu chuẩn trên… (ba) tiêu chuẩn trợ cấp tử vong do công một lần bằng 20 lần thu nhập khả dụng bình quân đầu người của cư dân thành thị toàn quốc năm trước.” | mục 10 |
| Điều 62 | khoản 2 “khi người lao động của đơn vị sử dụng lao động lẽ ra phải tham gia bảo hiểm tai nạn lao động theo điều lệ này mà chưa tham gia, lại xảy ra tai nạn lao động, thì đơn vị sử dụng lao động đó phải trả các khoản phí theo các hạng mục và tiêu chuẩn đãi ngộ bảo hiểm tai nạn lao động quy định trong điều lệ này.” Khoản 1: buộc tham gia, nộp bổ sung trong thời hạn, “mỗi ngày cộng thêm 5/10.000 tiền phạt chậm nộp; quá hạn vẫn không nộp thì phạt tiền từ 1 đến 3 lần số tiền nợ” | mục 8 |

## 2. Chưa lấy được / không sử dụng

| Muốn tìm | Kết quả | Cách xử lý |
| --- | --- | --- |
| Số tiền cụ thể của trợ cấp tử vong do công một lần trong năm | Cần thu nhập khả dụng bình quân đầu người của cư dân thành thị toàn quốc năm 2025. Tìm trong kho văn bản chính sách của Quốc vụ viện không thấy bản thân công báo thống kê; bài giải đọc công báo trên gov.cn chỉ cho “thu nhập khả dụng bình quân đầu người của cư dân tăng 5,0% so với năm trước tính theo giá thực tế”, không có giá trị tuyệt đối; danh sách phát hành mới nhất của stats.gov.cn cũng không có mục này | mục 10 chỉ viết công thức số lần nhân, số tiền ghi TODO |
| Tư liệu tranh cãi về điều khoản 48 giờ trong thực tiễn | Chỉ tìm thấy rất nhiều bình luận thứ cấp, chưa lấy được văn bản phán quyết có thể trích dẫn hoặc cách nói chính thức | phần thân bài chỉ trình bày nguyên văn điều luật, không triển khai đánh giá |

## 3. Góc đánh giá và mức lợi ích

Bốn mục đều dùng góc đánh giá là tiền bạc. Mức lợi ích ấn định theo ngưỡng tiền bạc từ chương 8 trở đi: trợ cấp khuyết tật một lần quy đổi theo lương tháng, thấp nhất là cấp mười cũng đã là 7 tháng lương; trợ cấp tử vong do công là “20 lần thu nhập khả dụng bình quân đầu người của cư dân thành thị toàn quốc năm trước”, đều từ cỡ 10.000 yên trở lên, nên tất cả định “lớn”. Về chi phí, việc xác định và thẩm định bản thân không mất tiền, nhưng đều phải chạy thủ tục, chờ kết luận, thời gian ghi “trung bình”; mục 8 (đơn vị chưa tham gia bảo hiểm) còn được ghi thêm “ý chí = chút”, vì khả năng cao bên kia sẽ không thừa nhận, phải gắng vượt qua đến chừng mực trọng tài (tranh chấp lao động).
