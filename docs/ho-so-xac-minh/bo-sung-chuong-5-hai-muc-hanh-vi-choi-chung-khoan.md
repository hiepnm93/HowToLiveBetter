# Bổ sung vào chương 5: hiệu ứng xử lý và giao dịch chủ động trong giai đoạn giá tăng vọt giảm sâu (2026-09-22)

Nguồn gốc nhiệm vụ: GitHub issue #24 (wangchao732). Nguyên văn: “khuyên mọi người đừng chơi chứng khoán A, 90% nhà đầu tư nhỏ lẻ bị nhốt vào trong. Bị nhốt rồi lại không nỡ cắt lỗ, muốn ra trong thời gian ngắn 1 năm gần như bất khả. Còn nghĩ càng xuống càng mua bù, vừa hại mạng vừa hại tiền”.

Phạm vi nội dung sẵn có: chương 5 đã có một nhóm mục đầu tư — mục 15 (không giao dịch cổ phiếu thường xuyên, Barber-Odean 2000, nhóm turnover cao nhất đạt 11.4% hàng năm so với thị trường 17.9%), mục 16 (không vay tiền, không dùng đòn bẩy), mục 17 (quỹ chỉ số rộng thay quỹ chủ động), mục 18 (trong cùng loại quỹ chọn quỹ có phí thấp), mục 19 (không dồn vào một tài sản duy nhất), mục 27 (trước hết tích quỹ khẩn cấp). Nghĩa là ba việc “đừng mua bán thường xuyên, đừng vay tiền, đừng dồn một con” đã được viết.

Thứ issue thực sự chưa được bao phủ là hai việc: (1) **sai lệch trong quyết định bán** (có lãi là bán, lỗ thì ôm chết, còn mua bù xuống dưới), toàn sách chưa nhắc đến; (2) **bản kê giao dịch chủ động trong giai đoạn giá tăng vọt giảm sâu**, mục 15 nói về chi phí turnover dài hạn, không nói khâu “ra tay khi thị trường phát cuồng”, hơn nữa nó dẫn số liệu Mỹ thập niên 1990, không có con số của Trung Quốc.

Chốt vị trí: thêm mục 37, 38 ở cuối chương 5, không chèn vào giữa cụm đầu tư mục 15 đến 19. Lý do là chèn vào sẽ khiến mục 20 đến 36 dồn xuống hàng loạt, 7 chỗ trích dẫn xuyên chương trỏ đến chương 5 trong toàn sách và hơn chục chỗ tự trích trong chương đều phải sửa theo, mà theo tiêu chí của CLAUDE.md thì loại dồn lệch làm hỏng bảng đối chiếu này, diff cũng chưa chắc nhìn ra. Thêm ở cuối chương không có rủi ro gì, trang tra cứu vốn đã xếp lại theo hiệu quả chi phí, bạn đọc không tìm mục theo thứ tự trên giấy. Mục 36 (thực phẩm rời) cũng được thêm theo kiểu như vậy.

## Không theo khuôn kết luận của issue

**Không viết “đừng chơi chứng khoán A”.** Theo hai nguyên tắc của CLAUDE.md “chỉ mổ xẻ con số, không ban kết luận” và “trước khi phán một điều chỉ cấm mà không cho lối thoát, phải xác nhận trước là đương sự quả thật không còn lựa chọn nào khác”: mục 17 đã chỉ ra lối đi chi phí thấp của “mang tiền vào thị trường chứng khoán” (quỹ chỉ số rộng), viết thêm một điều “nhất loạt đừng mua” sẽ xung đột trực tiếp với nó. Vậy nên hai mục này viết đều là khác biệt ở tầng động tác — cùng một khoản tiền, cùng một đoạn thị trường, quy tắc bán định thế nào, khi thị trường nóng nhất ra tay bao nhiêu — chứ không phải “có vào hay không vào”.

**Không viết “90% nhà đầu tư nhỏ lẻ thua lỗ”.** Con số này lan tràn trên mạng, nhưng không tra được thống kê chính thức nào đối chiếu từng chữ được: niên giám thống kê và báo cáo khảo sát tình hình nhà đầu tư của Sở Giao dịch Chứng khoán Thượng Hải, Sở Giao dịch Chứng khoán Thâm Quyến không công bố chuỗi thời gian công khai của chỉ tiêu “tỷ lệ tài khoản lỗ”, lượt này cũng không tìm được tài liệu gốc có thể dẫn. Theo quy tắc dự án “con số không chắc chắn thì thà không viết”, ghi chú của mục 38 nói rõ không dùng con số này, và đưa ra cái thay thế kiểm chứng được — số tiền lỗ của 85% tài khoản nhỏ nhất trong cùng một loạt tài khoản so với “giữ nguyên không đụng đến”.

**“Muốn ra trong 1 năm gần như bất khả” không viết.** Đây là chuyện thời gian hòa vốn, phải tính lợi suất nắm giữ theo phân bố điểm mua vào, lượt này không tìm được phép tính gốc có thể dẫn, không viết theo ấn tượng.

## Nguồn từng mục

| URL | Đối chiếu lại | Ý chính nguyên văn |
|---|---|---|
| <https://doi.org/10.1111/0022-1082.00072> (Odean T, 1998, The Journal of Finance 53(5):1775-1798; toàn văn PDF lấy từ trang cá nhân của tác giả faculty.haas.berkeley.edu/odean/Papers current versions/AreInvestorsReluctant.pdf, đối chiếu từng chữ bằng pdftotext) | Có | Dữ liệu là toàn bộ hồ sơ giao dịch 1987–1993 của 10,000 tài khoản tại một công ty môi giới chiết khấu. Table I: cả năm PGR = 0.148, PLR = 0.098, chênh −0.050, t = −35 (13,883 realized gains / 79,658 paper gains / 11,930 realized losses / 110,348 paper losses). Phần chính: “the ratio of PGR to PLR for the entire year is a little over 1.5, indicating that a stock that is up in value is more than 50 percent more likely to be sold from day to day than a stock that is down”. Phía cộng vị thế: “For the entire sample PLPA = 0.135 and PGPA = 0.094”, t = 19. Biểu hiện về sau: “For winners that are sold, the average excess return over the following year is 3.4 percent more than it is for losers that are not sold” (lợi suất vượt tính so với chỉ số CRSP trọng số theo vốn hóa thị trường). Ví dụ tính: bán cổ phiếu lỗ 1.000 đô la thay vì cổ phiếu lãi, “the investor's return is about 4.4 percent higher over the next year”, trong đó gồm khoảng 10 đô la chiết khấu từ việc khấu trừ thuế sớm và 34 đô la chênh lợi suất nắm giữ về sau, giả định thuế suất biên 15% |
| <https://doi.org/10.1016/j.jmoneco.2022.01.001> (An L, Lou D, Shi D, 2022, Journal of Monetary Economics 126:134-153); các con số đối chiếu từng chữ theo bản working paper công khai của tác giả: <https://personal.lse.ac.uk/loud/AnLouShi.pdf> (bản tháng 10/2021) | Có | Dữ liệu tài khoản theo ngày của Sở Giao dịch Chứng khoán Thượng Hải, “cover the entire investor population of roughly 40M accounts”, “nearly 90% of the trading volume is contributed by retail accounts”. Mẫu chính 18 tháng, từ tháng 7/2014 đến tháng 12/2015, chỉ số tổng hợp Thượng Hải “climbed more than 150%… to its peak at 5166.35 on June 12th 2015, before crashing 40% by the end of December 2015”. Theo vốn hóa tài khoản đầu kỳ chia bốn bậc với 500.000 yên, 3 triệu yên, 10 triệu yên, bậc thấp nhất chiếm 85%, bậc cao nhất chiếm 0.5%. Kết quả: “the bottom 85% households lose 250B RMB due to active trading (i.e., relative to a buy-and-hold strategy)… while the top 0.5% gain 254B RMB”; vốn hóa danh mục đầu kỳ lần lượt là 880B và 808B RMB, nên “the cumulative loss… amounts to 28% of their initial wealth in equities”, bậc cao nhất “a gain of 31%” (tóm tắt viết gộp là 30%). Giai đoạn đối chiếu từ tháng 1/2012 đến tháng 6/2014, lợi suất của bậc cao nhất trong mọi kỳ con 18 tháng là “1-3% of the initial equity wealth”. Turnover: “households churn their positions once every three weeks (or nearly 18 times a year)” |

## Xếp mức và độ lớn

**Hai mục đều xếp A.** Odean 1998 đưa ra tỷ lệ, chênh lệch và giá trị t, và toàn văn đối chiếu từng chữ được; An-Lou-Shi dùng dữ liệu hành chính toàn lượng của sở giao dịch, đưa ra số tiền tuyệt đối và phần trăm so với vốn hóa đầu kỳ. Hai mục đều không phải phân tích tổng hợp, nhưng theo tiêu chí dự án “cohort lớn + con số lượng hóa được” thì đủ A.

**Vì sao cột Nguồn kèm liên kết bản working paper.** Bản chính thức của tạp chí nằm trên ScienceDirect, máy này không lấy được nội dung (bản ghi trước đây đã ghi rõ các trang nhà xuất bản kiểu tandfonline/Wiley bị chặn, lượt này kiểm tra thực tế Wiley ra câu hỏi Cloudflare, Springer DOI này báo 404). Crossref và Semantic Scholar đều không có tóm tắt của bài này. Vì thế các con số trong mục được đối chiếu từng chữ theo bản working paper tháng 10/2021 do chính tác giả công bố, cột Nguồn cho cả hai liên kết, và ghi rõ con số đối chiếu theo bản sau. Tóm tắt bản chính thức gộp hai phía viết chung là “30% of either group's initial equity wealth”, phần chính của working paper viết riêng 28% và 31%, mục lấy bản sau và đồng thời cho thêm “mỗi bên chừng ba phần mười”.

**Lợi ích của mục 37 chấm “trung”.** Tiêu chí tiền úp theo ngưỡng số tiền: lượng kiểm chứng được là “cao hơn 3.4 điểm phần trăm trong một năm sau đó” và 4.4% trong ví dụ tính, rơi vào tài khoản cấp 100.000 yên thì là vài nghìn yên một năm, thuộc bậc “vài trăm đến vài nghìn”. Không chấm “lớn”, vì nguyên văn không cho số tiền cộng dồn; mục 15 chấm “lớn” vì bài ấy cho khoảng hụt dài hạn 6.5 điểm phần trăm hàng năm.

**Lợi ích của mục 38 chấm “lớn”.** Nguyên văn cho là “tương đương 28% vốn hóa cổ phiếu đầu kỳ của nhóm này”, tài khoản cấp 100.000 yên ứng với mức thiệt hại cấp 10.000 yên, rơi vào bậc “cấp vạn”.

**Ý chí đều chấm “chút”.** Giữ nhất quán với mục 15, 16 cùng cụm: cái hai mục này phải đổi là một thói quen ra quyết định, chứ không phải quán tính dài hạn phải chống đỡ mỗi ngày.

## Ba quyết định về cách viết

**Mục 37 công nhận thẳng rằng “mua bù để hạ giá vốn trung bình” đúng một nửa.** Nói thẳng “mua bù là sai” sẽ bị bạn đọc phản bác là sai số học (mua nhiều quả thật hạ giá vốn bình quân). Ghi chú viết là “về số học thì không sai, sai là lấy nó làm cách để đổi đời”, rồi chỉ ra hiệu quả thật của nó là phình vị thế của một tài sản duy nhất, nối sang mục 19.

**Đoạn khấu trừ thuế được ghi rõ là chế độ thuế Mỹ.** Trong 4.4% có phần lợi ích khấu trừ thuế từ việc thực hiện lỗ sớm, phần này không đứng ở Trung Quốc. Ghi chú chỉ viết “Trung Quốc không đem nguyên si sang áp dụng, phần còn lại vẫn đứng vững”, không đi viết chi tiết chế độ thuế Trung Quốc — chuyện đó cần dẫn văn bản tài chính - thuế riêng, không phải đề tài của mục này.

**Khuôn từ “thiệt hại” của mục 38 viết ngay trong bài.** Con số 250B trong nguyên văn là lãi lỗ giao dịch chủ động so với buy-and-hold, không phải lỗ nổi trên sổ sách, hai cái chênh nhau rất xa. Cột Lợi ích thêm riêng một câu “‘thiệt hại’ ở đây so với việc giữ nguyên không đụng đến”, nếu không bạn đọc sẽ hiểu thành “bốc hơi 250 tỷ”.

## Đồng bộ

Kiểm tra trích dẫn: mức nền 545 chỗ, thêm 3 chỗ mới (mục 37 dẫn mục 15, 19; mục 38 dẫn mục 15), dự kiến 548 chỗ. Đã chạy `tools/sync-stats.ps1`, README, index.html, tools/og.html và og.png đã đồng bộ.
