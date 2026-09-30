# issue #28: Bổ sung nguồn cho 8 mục (2026-09-23)

Nguồn công việc: GitHub issue #28 (dlgrv), đề nghị bổ sung tài liệu gốc cho 8 mục đang ghi “kinh nghiệm của tác giả”, “chờ kiểm chứng”, “TODO”, mỗi mục kèm trích dẫn và liên kết. Trích dẫn trong issue chỉ dùng làm manh mối, từng dòng trong bảng dưới đây đều là vòng này tự tải nguyên văn để đối chiếu từng chữ.

## Đối chiếu và xử lý từng mục

| Mục | Nguồn | Đối chiếu | Điểm chính trong nguyên văn | Xử lý |
|---|---|---|---|---|
| Chương 13 mục 18 (giật điện) | <https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-electrical-hazards.html> | Có (curl 403, lấy bằng Chrome headless) | Mục “First aid”: “Look first. Don't touch. The person may still be in contact with the electrical source.” “Turn off the source of electricity if possible. If not, move the source away from you and the affected person using a non-conducting object made of cardboard, plastic or wood.” “If either has stopped or seems dangerously slow or shallow, begin cardiopulmonary resuscitation (CPR) immediately.” | Tiếp nhận |
| Như trên | <https://doi.org/10.7326/0003-4819-145-7-200610030-00011> (Spies & Trohman 2006) | Có (tóm tắt Europe PMC) | “patients successfully resuscitated after cardiopulmonary arrest often have a favorable prognosis” | Tiếp nhận |
| Như trên | Moran 1986 JAMA (10.1001/jama.1986.03370160055007) | Không | Europe PMC không có tóm tắt, không thể đối chiếu nội dung | Không tiếp nhận |
| Như trên | ERC 2021, ngừng tim trong tình huống đặc biệt (10.1016/j.resuscitation.2021.02.011) | Có (tóm tắt) | Trong các nguyên nhân đặc biệt, bối cảnh và nhóm đối tượng liệt kê trong tóm tắt đều không có giật điện, câu “bản 2021 không có mục giật điện” trong issue là đúng thực tế | Xóa khỏi cột nguồn; cột nguồn trước đây ghi nó “có mục giật điện” là sai |
| Chương 20 mục 9 (đừng lắc trẻ) | <https://doi.org/10.15585/mmwr.mm6520a1> (MMWR 2016) | Có (tóm tắt) | “During this period, AHT resulted in nearly 2,250 deaths among U.S. resident children aged <5 years” | Tiếp nhận |
| Như trên | <https://doi.org/10.1007/s00247-018-4149-1> (tuyên bố đồng thuận Choudhary 2018) | Có (tóm tắt) | “Abusive head trauma (AHT) is the leading cause of fatal head injuries in children younger than 2 years”; nguyên nhân bệnh “multifactorial (shaking, shaking and impact, impact, etc.)”; “subdural hematoma… complex retinal hemorrhages” | Tiếp nhận |
| Như trên | Bản được AAP ủng hộ (10.1542/peds.2018-1504) | Chưa đối chiếu | Là bản ủng hộ cùng một nội dung với tuyên bố đồng thuận, không thêm riêng | Không tiếp nhận |
| Chương 13 mục 27 (vùng không người) | <https://www.nps.gov/articles/000/desertdrivingsafety.htm> | Có (lấy trực tiếp bằng curl) | “Staying with your car is the most important thing you can do in the event of an emergency. While not often, people have died from exposure trying to walk back to the paved roads.” | Tiếp nhận, không đổi mức |
| Chương 4 mục 15 (giới hạn lướt màn hình) | PDF báo cáo lần thứ 56 của CNNIC | Có (pdftotext trích được nguyên văn) | Dòng 821: “tính đến tháng 6 năm 2025, thời gian dùng mạng trung bình mỗi tuần của người dùng mạng nước ta là 30,6 giờ, tăng 1,9 giờ so với tháng 12 năm 2024”; dòng 94: “quy mô người dùng video ngắn đạt 1,068 tỷ người, chiếm 95,1% tổng số người dùng mạng” | Tiếp nhận, gỡ TODO |
| Như trên | SPIVA U.S. Scorecard Year-End 2024 | Có (trang chủ trả 403 và Chrome headless bị từ chối, đối chiếu theo bản chụp Wayback 2025-05-12) | “65% of all active large-cap U.S. equity funds underperformed the S&P 500, worse than the 60% rate observed in 2023 and slightly above the 64% average annual rate reported over the 24-year history”; “Over the 15-year period ending December 2024, there were no categories in which a majority of active managers outperformed.” | Tiếp nhận, gỡ TODO. Mục còn thiếu là con số “dài hạn”, nên ngoài mức 65% của một năm mà issue trích, thêm trung bình 24 năm và kết luận 15 năm |
| Như trên | PDF SPIVA Institutional Scorecard Year-End 2024 | Không dùng | Là tài khoản tổ chức và tài khoản wrap, độc giả thường không mua được loại sản phẩm này | Không tiếp nhận |
| Chương 14 mục 2 (mật khẩu email) | <https://www.cisa.gov/secure-our-world/use-strong-passwords> | Có (lấy trực tiếp bằng curl) | “Create long, random, unique passwords with a password manager”; “At least 16 characters—longer is stronger!”; “Use a different strong password for each account” | Tiếp nhận, không đổi mức |
| Chương 14 mục 3 (mã PIN thẻ SIM) | FCC DOC-398483A1 (thông cáo báo chí 2023-11-15) | Có (pdftotext) | Nội dung là buộc nhà mạng xác minh danh tính trước khi chuyển số, đổi thẻ, nhắm vào loại lừa đảo đổi thẻ theo kiểu “without ever gaining physical control of a consumer's phone” | **Không tiếp nhận**. Mục này phòng trường hợp mất điện thoại, thẻ bị rút ra cắm vào máy khác — đúng là tình huống đối phương đã nắm được thẻ vật lý, hai chuyện không phải một |
| Chương 14 mục 4 (mất điện thoại) | <https://www.fcc.gov/consumers/guides/protect-your-mobile-device> | Có (curl 403, lấy bằng Chrome headless) | “Even if you think you may have only lost the device, you should remotely lock it to be safe. If the device was stolen, immediately report the theft to the police, including the make and model, serial and IMEI or MEID or ESN number.” “Immediately report the theft or loss to your service provider.” | Tiếp nhận; thứ tự trước sau của các bước vẫn là kinh nghiệm của tác giả, ghi rõ trong cột nguồn |

## Xếp mức

**Chỉ có hai mục đổi mức: chương 13 mục 18 và chương 20 mục 9, đều từ C lên B.** Hai mục hiện đều có hướng dẫn của cơ quan chính thức hoặc đồng thuận chuyên môn, kèm thêm một nghiên cứu bổ trợ, nhưng đều không có con số chuyển đổi trực tiếp thành “làm theo thì ít chết bao nhiêu”, theo thước đo xếp B.

Các mục còn lại không đổi mức. Mẹo thao tác từ cơ quan chính thức (NPS, CISA, FCC) không phải nghiên cứu, theo thông lệ của sách vẫn xếp C (chương 13 mục 27 từ trước đến nay vẫn được xử lý như vậy). Hai mục ở chương 4 và chương 5 chỉ là gỡ TODO và bổ sung con số, mức không đổi.

## Những chỗ không làm theo issue

- Bản dịch này không hợp nhất vào repo (quy tắc trong CLAUDE.md), lần này chỉ xử lý đề nghị nguồn cho bản gốc tiếng Trung.
- Issue đề nghị có thể mở PR trực tiếp. Vòng này đã sửa xong trên máy cục bộ, không cần PR.
