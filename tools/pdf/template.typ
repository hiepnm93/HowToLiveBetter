$--
$-- Template typst của pandoc (chỉ nhận $body$ và vài biến -V), không dùng conf() có sẵn của pandoc:
$-- template tự có khóa phần cài đặt trang trong conf(), không sửa được đầu trang chân trang, nên ở đây tự dàn.
$-- Đoạn từ đầu đến divider là các định nghĩa phụ trợ cho phần bài mà pandoc sinh ra, chép nguyên từ `pandoc -D typst`, đừng xóa.
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
// pandoc nhét bảng vào align(center), ô cũng theo đó căn giữa; bảng căn trái mới dễ đọc
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
// Bảng dài phải break được qua trang, kẻo cả khối không nhét nổi thì bỏ trống một trang trắng
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- Bố cục ----------
#set document(title: "$booktitle$", author: "hiepnm93")
#set text(
  // Libertinus có sẵn của typst phủ đủ dấu tiếng Việt; phương án dự phòng trên Linux của CI là Noto Serif và DejaVu Serif
  font: ("Libertinus Serif", "Noto Serif", "DejaVu Serif", "Liberation Serif"),
  size: 10.5pt, lang: "vi", region: "VN",
)
#set par(justify: false, leading: 0.78em, spacing: 0.9em)
#set list(indent: 0.6em, spacing: 0.75em)
#show raw: set text(font: ("DejaVu Sans Mono", "Consolas"), size: 9pt)
#show link: set text(fill: rgb("#1a4fb4"))
#show heading: set block(sticky: true, above: 1.5em, below: 0.65em)
#show heading.where(level: 1): set text(19pt)
#show heading.where(level: 2): set text(14pt)
#show heading.where(level: 3): set text(11.5pt)
// Mỗi chương sang trang riêng; weak bảo đảm trang trước vừa khít thì không đội thêm một trang trắng
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// Đầu trang: trái là tên sách, phải là tên chương đang mở; trang đầu của mỗi chương không đánh đầu trang
#let running-head = context {
  let next = query(selector(heading.where(level: 1)).after(here())).at(0, default: none)
  if next != none and next.location().page() == here().page() { return }
  let seen = query(selector(heading.where(level: 1)).before(here()))
  if seen.len() == 0 { return }
  set text(8.5pt, fill: luma(120))
  grid(columns: (1fr, auto), align(left)[$booktitle$], align(right)[#seen.last().body])
  v(-7pt)
  line(length: 100%, stroke: 0.4pt + luma(215))
}

// ---------- Bìa ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #image("/og.png", width: 100%)
  #v(1.2cm)
  #block(width: 80%)[#text(11.5pt, fill: luma(60))[$subtitle$]]
  #v(2cm)
  #text(10pt, fill: luma(90))[
    Tạo lúc $builddate$ (giờ Việt Nam) · Commit nội dung $commit$ \
    Nội dung sửa đổi mỗi ngày, lấy bản trực tuyến làm chuẩn: $site$ \
    Trang tra cứu trực tuyến, bản EPUB và bản PDF mới nhất đều ở $repo$
  ]
]

// ---------- Mục lục ----------
#pagebreak()
#outline(title: [Mục lục], depth: 1, indent: 1em)

// ---------- Nội dung chính ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(120))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$
