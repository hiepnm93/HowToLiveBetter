# Hồ sơ xác minh nguồn chương 3

Giải thích: phần lớn trang nhà xuất bản (APA psycnet, Elsevier, SAGE, PNAS, Springer, PubMed) với WebFetch trên máy này trả về 403 / captcha / chỉ hiện nhắc cookie, nên lộ trình kiểm chứng là: trước hết dùng <https://doi.org/>... để phân giải, xác nhận DOI tồn tại và xem đích chuyển hướng (xác nhận nhà xuất bản và tạp chí), sau đó dùng Europe PMC REST API / Crossref API / OpenAlex API / trang toàn văn PMC / PDF chính thức của tác giả hoặc đại học để lấy tiêu đề, tác giả, năm và nguyên văn tóm tắt. Mỗi mục liệt kê URL thực tế đã mở cùng vị trí nguyên văn của các số liệu trích dẫn.

## Mục 1

- <https://doi.org/10.1037/xhp0000100> → 302 về doi.apa.org, DOI tồn tại; trang psycnet 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/xhp0000100&format=json&resultType=core> → đã xác nhận: Stothart C, Mitchum A, Yehnert C (2015) The attentional cost of receiving a cell phone notification. J Exp Psychol Hum Percept Perform
  - Nguyên văn tóm tắt: "cellular phone notifications alone significantly disrupted performance on an attention-demanding task, even when participants did not directly interact with a mobile device during the task. The magnitude of observed distraction effects was comparable in magnitude to those seen when users actively used a mobile phone, either for voice calls or text messaging."
- <https://doi.org/10.1086/691462> → 302 về journals.uchicago.edu, DOI tồn tại; trang nhà xuất bản 403
- <https://api.crossref.org/works/10.1086/691462> → đã xác nhận: Ward AF, Duke K, Gneezy A, Bos MW (2017) Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity. J Assoc Consum Res 2(2):140-154
- <https://api.openalex.org/works/doi:10.1086/691462> → nguyên văn tóm tắt: "Results from two experiments indicate that even when people are successful at maintaining sustained attention—as when avoiding the temptation to check their phones—the mere presence of these devices reduces available cognitive capacity. Moreover, these costs are highest for those in smartphone dependence."
  - Ba điều kiện “để trên bàn / trong túi / ở phòng khác” cùng hai chỉ số “trí nhớ làm việc, trí tuệ linh hoạt” đến từ ký ức của tôi về bài báo, tóm tắt chỉ viết two experiments và available cognitive capacity, hai chi tiết này **chưa được xác nhận nguyên văn trong bài gốc** (không mở được thân bài), đã xoá khỏi mục, mục chỉ giữ lại các diễn đạt được tóm tắt nguyên văn ủng hộ

## Mục 2

- <https://doi.org/10.1038/s41598-017-03171-4> → 302 về nature.com, DOI tồn tại; trang nature yêu cầu đăng nhập chuyển hướng
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1038/s41598-017-03171-4&format=json&resultType=core> → đã xác nhận: Phillips AJK, Clerx WM, O'Brien CS, Sano A, Barger LK, Picard RW, Lockley SW, Klerman EB, Czeisler CA (2017) Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing. Sci Rep
  - Nguyên văn tóm tắt: "We studied 61 undergraduates for 30 days ... DLMO occurred later (00:08 ± 1:54 vs. 21:32 ± 1:48; p < 0.003); the daily sleep propensity rhythm peaked later (06:33 ± 0:19 vs. 04:45 ± 0:11; p < 0.005) ... A positive correlation (r = 0.37; p < 0.004) between academic performance and SRI was observed ... Irregular vs. Regular group differences in circadian timing were likely primarily due to their different patterns of light exposure."
  - “Khoảng 2.5 giờ” “khoảng 1.8 giờ” là giá trị xấp xỉ tôi tính từ các khoảng chênh thời điểm nêu trên

## Mục 3

- <https://doi.org/10.1093/sleep/26.2.117> → 302 về academic.oup.com, sau đó <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/26.2.117> mở thành công
  - Đã xác nhận: Van Dongen HPA, Maislin G, Mullington JM, Dinges DF (2003) The Cumulative Cost of Additional Wakefulness: Dose-Response Effects on Neurobehavioral Functions and Sleep Physiology From Chronic Sleep Restriction and Total Sleep Deprivation. Sleep 26(2):117-126
  - Nguyên văn tóm tắt (khớp nhau ở cả hai nơi: trang OUP + Europe PMC): "A total of n = 48 healthy adults (ages 21-38)"; "Chronic restriction of sleep periods to 4 h or 6 h per night over 14 consecutive days resulted in significant cumulative, dose-dependent deficits in cognitive performance on all tasks"; "chronic restriction of sleep to 6 h or less per night produced cognitive performance deficits equivalent to up to 2 nights of total sleep deprivation"; "Subjective sleepiness ratings showed an acute response to sleep restriction but only small further increases on subsequent days, and did not significantly differentiate the 6 h and 4 h conditions."
- <https://doi.org/10.1037/a0018883> → 302 về doi.apa.org, DOI tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0018883&format=json&resultType=core> → đã xác nhận: Lim J, Dinges DF (2010) A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. Psychol Bull
  - Nguyên văn tóm tắt: "short-term (<48 hr) total sleep deprivation"; "70 articles containing 147 cognitive tests"; "lapses in simple attention: g = -0.776, 95% CI [-0.96, -0.60], p < .001"; "reasoning accuracy: g = -0.125, 95% CI [-0.27, 0.02]"

## Mục 4

- <https://doi.org/10.5664/jcsm.3170> → 302, DOI tồn tại; jcsm.aasm.org lỗi chứng chỉ, springer cần đăng nhập
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.5664/jcsm.3170&format=json&resultType=core> → đã xác nhận: Drake C, Roehrs T, Shambroom J, Roth T (2013) Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med; PMID 24235903, PMCID PMC3805807
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/> → mở toàn văn thành công
  - Nguyên văn thân bài: "For TST, reductions in duration relative to placebo were significant at each of the caffeine administration time points, reducing TST between 1.1 to 1.2 hours."; "Caffeine administered 6 h prior to bedtime reduced total sleep time by 41 min, which approached significance (p = 0.08)." (nhật ký); "only the objective measure detected differences when caffeine was taken 6 hours prior to bedtime"
- <https://doi.org/10.1016/j.smrv.2023.101764> → 302 về linkinghub.elsevier.com, DOI tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1016/j.smrv.2023.101764&format=json&resultType=core> → đã xác nhận: Gardiner C, Weakley J, Burke LM, Roach GD, Sargent C, Maniar N, Townshend A, Halson SL (2023) The effect of caffeine on subsequent sleep: A systematic review and meta-analysis. Sleep Med Rev
  - Nguyên văn tóm tắt: "Caffeine consumption reduced total sleep time by 45 min and sleep efficiency by 7%"; "coffee (107 mg per 250 mL) should be consumed at least 8.8 h prior to bedtime"

## Mục 5

- <https://doi.org/10.1016/j.chb.2014.11.005> → 302 về linkinghub.elsevier.com, DOI tồn tại; sciencedirect 403
- <https://api.crossref.org/works/10.1016/j.chb.2014.11.005> → đã xác nhận: Kushlev K, Dunn EW (2015) Checking email less frequently reduces stress. Comput Hum Behav 43:220-228
- <https://dunn.psych.ubc.ca/wp-content/uploads/2010/11/kushlev-dunn-email-and-stress-in-press1.pdf> (PDF bản chấp nhận trên trang chính thức của phòng thí nghiệm tác giả, trích xuất bằng pdftotext tại máy)
  - Nguyên văn tóm tắt: "During one week, 124 adults were randomly assigned to limit checking their email to three times a day; during the other week, participants could check their email an unlimited number of times per day."
  - Nguyên văn thân bài: "participants felt less daily stress in the limited as compared to the unlimited email condition, F(1, 121) = 4.18, p = .04, Cohen's d = .37"; "the average number of times people reported checking their email on a normal day at work was 15.48 at baseline (SD = 8.69)"; "there were no significant differences between conditions in how many emails people received (Mlimited = 16.64 vs. Munlimited = 16.04 ...) or responded to"

## Mục 6

- <https://doi.org/10.1037/a0030986> → 302 về doi.apa.org, DOI tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0030986&format=json&resultType=core> → đã xác nhận: Altmann EM, Trafton JG, Hambrick DZ (2014) Momentary interruptions can derail the train of thought. J Exp Psychol Gen
  - Nguyên văn tóm tắt: "Interruptions averaging 4.4 s long tripled the rate of sequence errors on post-interruption trials relative to baseline trials. Interruptions averaging 2.8 s long--about the time to perform a step in the interrupted task--doubled the rate of sequence errors."
- <https://www.ics.uci.edu/~gmark/CHI2005.pdf> (PDF trên trang chủ chính thức của tác giả tại UCI, trích xuất bằng pdftotext tại máy)
  - Nguyên văn tóm tắt: "detailed observation of 24 information workers"; "57% of their working spheres are interrupted"; thân bài: "11 min. 4 sec." (thời lượng trung bình làm việc trên một chủ đề công việc trung tâm/ngoại vi trước khi chuyển đổi); "When people did resume work on the same day, it took an average length of time of 25 min. 26 sec (sd=54 min. 48 sec.) ... before resuming work, our informants worked in an average of 2.26 (sd=2.79) working spheres."
  - Kiểm chứng DOI: 10.1145/1054972.1054989 mà tôi ghi ban đầu, qua OpenAlex xác minh là bài khác (Marshall & Bly), đã đổi. <https://api.crossref.org/works/10.1145/1054972.1055017> và <https://api.openalex.org/works/doi:10.1145/1054972.1055017> đều xác nhận là Mark, Gonzalez, Harris (2005) No task left behind? Examining the nature of fragmented work. CHI 2005 pp.321-330
- <https://www.ics.uci.edu/~gmark/chi08-mark.pdf> (PDF chính thức của tác giả, trích xuất tại máy)
  - Nguyên văn tóm tắt: "people completed interrupted tasks in less time with no difference in quality ... but this comes at a price: experiencing more stress, higher frustration, time pressure and effort."; thân bài: "Forty-eight subjects participated."
  - <https://api.crossref.org/works/10.1145/1357054.1357072> → đã xác nhận: Mark G, Gudith D, Klocke U (2008) The cost of interrupted work: more speed and stress. CHI 2008 pp.107-110
  - Cụm “khoảng một nửa số lần gián đoạn là tự mình khởi phát” trong Ghi chú đến từ ký ức của tôi về bài báo, chưa đối chiếu nguyên văn trong văn bản trích xuất, đã xoá khỏi phần Ghi chú của mục

## Mục 7

- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Task%20switching%22%20AND%20AUTH:Monsell%20AND%20PUB_YEAR:2003&format=json&resultType=core> → đã xác nhận: Monsell S (2003) Task switching. Trends Cogn Sci; DOI 10.1016/s1364-6613(03)00028-7; PMID 12639695
  - Nguyên văn tóm tắt: "Subjects' responses are substantially slower and, usually, more error-prone immediately after a task switch."
  - Ghi chú: tra Europe PMC trực tiếp bằng DOI trả về 0 kết quả (vấn đề mã hoá dấu ngoặc), đã tra bằng tiêu đề + tác giả và tìm thấy
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1073/pnas.0903620106&format=json&resultType=core> → đã xác nhận: Ophir E, Nass C, Wagner AD (2009) Cognitive control in media multitaskers. PNAS
  - Nguyên văn tóm tắt: "heavy media multitaskers are more susceptible to interference from irrelevant environmental stimuli and from irrelevant representations in memory ... heavy media multitaskers performed worse on a test of task-switching ability"
  - Ghi chú: DOI này chưa được mở trực tiếp qua doi.org, xác nhận dựa vào đăng ký của Europe PMC
- Ngoài ra tra <https://api.crossref.org/works/10.1037/0096-1523.27.4.763> xác nhận Rubinstein, Meyer & Evans (2001) tồn tại, nhưng không lấy được tóm tắt, cuối cùng không trích dẫn trong mục

## Mục 8

- <https://doi.org/10.1073/pnas.1418490112> → 302 về pnas.org, DOI tồn tại; pnas.org 403
- Tra cứu Europe PMC xác nhận: Chang AM, Aeschbach D, Duffy JF, Czeisler CA (2015) Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS; PMCID PMC4313820
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC4313820/> → mở toàn văn thành công
  - Nguyên văn thân bài: "took longer to fall asleep ... 25.65 ± 18.78 min vs. 15.75 ± 13.09 min"; "suppressed evening levels of melatonin by 55.12 ± 20.12%"; "Dim light melatonin onset was >1.5 h later on the day following the LE-eBook condition (22:31 ± 0:42) than in the print-book condition (21:01 ± 0:49)"; "feeling sleepier the morning after reading an LE-eBook ... it took them hours longer to fully wake up"
  - Cụm “độ sáng tối đa, đọc liền mấy giờ” trong Ghi chú là ký ức của tôi về thiết lập thí nghiệm, chưa đối chiếu nguyên văn, đã xoá khỏi phần Ghi chú của mục

## Mục 9

- <https://doi.org/10.1093/sleep/29.6.831> → 302, sau đó <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/29.6.831> mở thành công
  - Đã xác nhận: Brooks A, Lack L (2006) A Brief Afternoon Nap Following Nocturnal Sleep Restriction: Which Nap Duration is Most Recuperative? Sleep 29(6):831-840
  - Nguyên văn tóm tắt: "The 5-minute nap produced few benefits in comparison with the no-nap control."; "The 10-minute nap produced immediate improvements in all outcome measures (including sleep latency, subjective sleepiness, fatigue, vigor, and cognitive performance), with some of these benefits maintained for as long as 155 minutes."; 20 phút: cải thiện xuất hiện 35 phút sau khi ngủ trưa và kéo dài đến phút thứ 125; "The 30-minute nap produced a period of impaired alertness and performance immediately after napping, indicative of sleep inertia, followed by improvements lasting up to 155 minutes after the nap."

## Mục 10

- <https://doi.org/10.1016/j.jenvp.2011.07.002> → 302 về linkinghub.elsevier.com, DOI tồn tại; sciencedirect 403; PubMed không có bài này (tạp chí không thuộc MEDLINE)
- <https://api.crossref.org/works/10.1016/j.jenvp.2011.07.002> → đã xác nhận: Jahncke H, Hygge S, Halin N, Green AM, Dimberg K (2011) Open-plan office noise: Cognitive performance and restoration. J Environ Psychol 31(4):373-382
- <http://hig.diva-portal.org/smash/record.jsf?pid=diva2%3A434794&dswid=2269> (bản ghi trong kho chính thức của Đại học Gävle) → mở thành công, tiêu đề/tác giả/tạp chí/DOI khớp
  - Nguyên văn tóm tắt: "The background sound level increased by 12 dB, from 39 to 51 dB LAeq."; "Decreased word memory performance, increased fatigue and motivational deficits when the background sound level increased."; "A break with a nature movie with corresponding sound increased energy ratings compared to just listening to river sounds or office noise."
  - N = 47, mỗi lần làm việc 2 giờ: lấy từ đoạn trích tóm tắt do WebSearch trả về, chưa thấy nguyên văn trên trang diva, đã xoá khỏi mục

## Mục 11

- <https://doi.org/10.1111/ecoj.12166> → 302 về academic.oup.com/ej/article/125/589/2052-2076/5078088, DOI tồn tại; trang OUP chỉ hiện phần điều hướng
- <https://api.crossref.org/works/10.1111/ecoj.12166> → đã xác nhận: Pencavel J (2015) The Productivity of Working Hours. The Economic Journal 125(589):2052-2076
- <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/ecoj.12166> → nguyên văn tóm tắt: "below an hours threshold, output is proportional to hours; above a threshold, output rises at a decreasing rate as hours increase."
- <https://docs.iza.org/dp8129.pdf> (IZA DP No. 8129, bản working paper của cùng bài, trang chính thức của tổ chức; trích xuất bằng pdftotext tại máy)
  - Nguyên văn thân bài: "below 49 weekly hours, variations in output are proportional to variations in hours; for those observations corresponding to 49 or more hours, output rises with hours at a decreasing rate and a maximum of output occurs at about 63 hours. Output at 70 hours differs little from output at 56 hours"; phần kết luận: "The working week threshold for the munition workers considered in this paper was at 48 hours, but for other workers it may be more or less."
  - Ghi chú: phần thân bài dùng 49 giờ làm mốc, đoạn kết luận viết 48 giờ; mục lấy 49. Việc đối chiếu số liệu dùng bản working paper, bản chính thức trên tạp chí không mở được

## Mục 12

- <https://doi.org/10.1111/j.1745-6924.2008.00088.x> → 302 về journals.sagepub.com, DOI tồn tại; trang SAGE 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1111/j.1745-6924.2008.00088.x&format=json&resultType=core> → đã xác nhận: Nolen-Hoeksema S, Wisco BE, Lyubomirsky S (2008) Rethinking Rumination. Perspect Psychol Sci
  - Nguyên văn tóm tắt: "rumination exacerbates depression, enhances negative thinking, impairs problem solving, interferes with instrumental behavior, and erodes social support"; ngoài ra còn có "anxiety, binge eating, binge drinking, and self-harm"

## Mục 13

- <https://api.crossref.org/works/10.1037/0022-3514.46.5.1097> → đã xác nhận: Rook KS (1984) The negative side of social interaction: Impact on psychological well-being. J Pers Soc Psychol 46(5):1097-1108
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22The%20negative%20side%20of%20social%20interaction%22%20AND%20AUTH:Rook&format=json&resultType=core> → PMID 6737206, DOI 10.1037//0022-3514.46.5.1097
  - Nguyên văn tóm tắt: "negative social outcomes were more consistently and more strongly related to well-being than were positive social outcomes"; mẫu gồm 120 phụ nữ goá chồng từ 60-89 tuổi
- Ghi chú: <https://doi.org/10.1037/0022-3514.46.5.1097> bản thân nó chưa mở trực tiếp được (các DOI cũ cùng loại của APA đều chuyển sang psycnet 403), nhưng cả hai kho độc lập Crossref và Europe PMC đều đăng ký DOI này

## Mục 14

- <https://api.crossref.org/works/10.1037/0022-3514.74.5.1252> → đã xác nhận: Baumeister RF, Bratslavsky E, Muraven M, Tice DM (1998) Ego depletion: Is the active self a limited resource? J Pers Soc Psychol 74:1252-1265
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Ego%20depletion%3A%20is%20the%20active%20self%20a%20limited%20resource%22&format=json&resultType=core> → PMID 9599441, nguyên văn tóm tắt: "Choice, active response, self-regulation, and other volition may all draw on a common inner resource."
- <https://doi.org/10.1177/1745691616652873> → 302 về SAGE, DOI tồn tại; SAGE 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/1745691616652873&format=json&resultType=core> → đã xác nhận: Hagger MS, Chatzisarantis NLD, Alberts H, và cộng sự (2016) A Multilab Preregistered Replication of the Ego-Depletion Effect. Perspect Psychol Sci
  - Nguyên văn tóm tắt: 23 phòng thí nghiệm, 2141 người; "the size of the ego-depletion effect was small with 95% confidence intervals (CIs) that encompassed zero (d = 0.04, 95% CI [-0.07, 0.15]"
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/0956797621989733&format=json&resultType=core> → đã xác nhận: Vohs KD, Schmeichel BJ, Lohmann S, và cộng sự (2021) A Multisite Preregistered Paradigmatic Test of the Ego-Depletion Effect. Psychol Sci
  - Nguyên văn tóm tắt: "preregistered multilaboratory project (k = 36; N = 3,531) ... Confirmatory tests found a nonsignificant result (d = 0.06)"
  - Ghi chú: DOI này chưa được mở trực tiếp qua doi.org, xác nhận dựa vào đăng ký của Europe PMC

## Tổng hợp các mục chưa xác nhận

- Bản thảo của mục 1 từng viết “để trên bàn / trong túi / ở phòng khác”, “trí nhớ làm việc và trí tuệ linh hoạt”, vì không đối chiếu được nguyên văn trong bài gốc có thể mở nên đã xoá khỏi mục, chỉ giữ lại các diễn đạt được tóm tắt nguyên văn ủng hộ
- Ghi chú bản thảo của mục 6 “khoảng một nửa số lần gián đoạn là tự mình khởi phát”, Ghi chú mục 8 “độ sáng tối đa, đọc liền mấy giờ”, mục 10 “N = 47, làm việc 2 giờ” cũng bị xoá vì cùng lý do chưa đối chiếu nguyên văn
- Ở bản hiện tại, toàn bộ số liệu trong cột “Lợi ích” của 14 mục đều có xuất xứ nguyên văn được liệt kê ở trên; không có mục nào cần đánh dấu TODO / chờ kiểm chứng
