# Translate one digest unit (ZH → target locale)

You translate **one work unit** from the Chinese (ZH) digest into **one**
target locale: `ru`, `en`, `es`, `pt` or `vi`. The attached `[СПРАВКА]` gloss block
and `translate/glossary.json` are authoritative for terms and style.

## Hard limit: one unit per model call

- **Never** paste a whole `book/*.md` chapter into the model.
- Feed exactly one file from `translate/digest/<NN>/units/` (plus its
  `NN.gloss.md` if present). Large chapters → many sequential/parallel
  unit calls, then `assemble*.py`.
- API / Gemini / any LLM batch: same rule — chunk by digest unit, not by
  chapter file.

## Source of truth

- **Chinese (ZH) only** — never treat EN/RU/ES book files as the master.
  EN is a **tone reference** for plain language, not structure or numbers.
- Do **not** invent numbers, conditions, or advice absent from ZH.
- **Do not output `§TAG§` or `§SRC§`** — `translate_unit.py` strips them from
  the ZH digest before the call and reinjects them after your draft.
  Cost-tag HTML and `来源` / Sources lines are injected by `assemble*.py`.
- Field labels must be Markdown list lines (`- Label:`), never bold
  (`**Label:**`). ES plain-terms label is exactly: `- En términos sencillos:`.
- **Unit 00 (intro):** back-link (if present) + one `# …` title + prose only.
  No `###` item heading, no field blocks, no placeholders.

## Quality pack (apply on every unit)

### Locked (pilot ch01 §33 v3)

1. **Neighbor test** — plain-terms must pass without specialist training.
2. **Chemical gloss** — everyday description + `(term)`; no bare drug names,
   no lone *herbicide* / *гербицид* / *herbicida*.
3. **Procedures** — clinical detail stays in Benefit; plain-terms = reader
   takeaway only.
4. **Place names** — target-language grammar (`в Бангладеше`, `in Bangladesh`,
   `en Bangladés`); use `name_forms` from glossary for RU.
5. **Rhythm** — 2–3 short linked sentences beat one dense block or two
   fragments with no bridge.
6. **Dual-topic items** — one sentence per topic + optional closing line.
7. **Parallel outcomes** — when ZH gives two % outcomes in one breath
   (death + injury, A + B), keep **full parallel predicates** in
   plain-terms. Bad RU: «шанс погибнуть ниже на 40%, травмы головы —
   на 70%» (second verb deleted). Good: «шанс погибнуть ниже примерно
   на 40%, а вероятность получить травму головы — ниже примерно на
   70%». Same idea EN/ES: repeat the verb phrase, join with *and* /
   *y* / *а*.
8. **Closing caution = ZH claim type** — if ZH says «不算 / does not
   count», prefer «не считается (надетым)» / «does not count» / «no
   cuenta». Neighbor-vivid «не поможет» / «won't help» is OK only if
   it stays true and does not invent a stronger claim.
9. **No HR/RR/OR/CI** in plain-terms.
10. **Natural count phrasing** — prefer full spoken shape for incident
    stats. Good RU: «было 828 случаев отравления грибами»; bad telegram:
    «828 отравлений грибами». Do not strip «было / случаев / по всей
    стране» just to sound shorter. Cut legalese (§4), not clarity (§5).
11. **Leave good alone** — if a draft already passes the neighbor test,
    do not compress it further on a simplify pass.

### High

12. Abbreviations / units in plain-terms: gloss on **first** use per item
    (see `abbrev_gloss_examples`): mmHg / мм рт. ст., BMI/ИМТ, CT/КТ,
    MRI/МРТ, ultrasound/УЗИ, HPV, mmol/L / ммоль/л, mg/dL. Optional skip:
    ml, °C, SIM/PIN when context is already clear. Or move detail to Benefit.
13. Avoid calques listed under `banned_calques` (HARD) and `soft_calques`
    (WARN) in `translate/rules/<lang>.json`.
    (`reversed_logic`, `invented`, `dropped_condition`, `hardened_claim`).
15. **RU `данные` is a noun** (statistics / personal data). Never rewrite
    `данные` / `данных` / `данными` as `эти` / `этих` / `этими`.
    Write `Согласно данным ВОЗ`, `исторические данные`, `паспортные данные` —
    not `Согласно этим ВОЗ` / `исторические эти`.
    Demonstrative `этот` is fine only with a real noun (`эти исследования`).
    Do not "fix" канцелярит `данный` by touching the data noun.
    If you shorten `в рамках` / `в соответствии с`, fix the case in the
    same pass: `В исследовании Cochrane`, `согласно закону` — never
    `При исследования` or `согласно законом`.

### Medium

16. Item titles and Cost lines: neighbor-readable; verb-first titles.
17. Sensitive topics: translate faithfully without adding how-to detail.
18. ES/PT: decimal comma in plain-terms and Benefit (`43,2 %`, `g = 0,499`).
    Never write `g = 0499` (lost point) or bare `0.499` in ES/PT — verify
    folds the latter to `499`.

## Few-shot gold (pilot v3 — plain-terms only)

Reference register: CN ch01 plain-terms (paraquat / CO item) — examples below.

**RU v3**

> Ядовитое средство от сорняков (паракват) почти нечем лечить: из 257
> случаев в больницах Бангладеша умерли 43.2%, часто с тяжёлым
> повреждением лёгких. Угарный газ тоже часто оставляет след: через
> шесть недель проблемы с мышлением остались у 46.1% на обычном
> кислороде и у 25.0% на кислороде под давлением — чаще всего жизнь
> спасают, а последствия остаются.

**EN v3**

> A toxic weedkiller (paraquat) has almost no real treatment: of 257
> hospital cases in Bangladesh, 43.2% died, often with lasting lung
> damage. Carbon monoxide often leaves a mark too: six weeks later,
> 46.1% still had thinking problems on normal oxygen versus 25.0% on
> high-pressure oxygen — people live, but the harm often stays.

**ES v3**

> Un veneno para malas hierbas (paraquat) casi no tiene tratamiento de
> verdad: de 257 casos en hospitales de Bangladés murió el 43,2 %, a
> menudo con daño grave en los pulmones. El monóxido de carbono también
> deja marca: a las seis semanas, el 46,1 % seguía con problemas para
> pensar con oxígeno normal frente al 25,0 % con oxígeno a alta presión
> — se salva la vida, pero las secuelas suelen quedarse.

**Also few-shot: ch01 §2 (parallel %)** — preferred RU:

> В застёгнутом шлеме у мотоциклиста шанс погибнуть в аварии ниже
> примерно на 40%, а вероятность получить травму головы — ниже примерно
> на 70%. Ремешок должен быть затянут: болтающийся на голове шлем не
> поможет.

Match this **register** in plain-terms; Benefit/Sources stay technical.

## Vietnamese (`vi`) — style pack

Applies when Target locale is `vi`. Write natural Vietnamese that a Vietnamese
reader would think was written in Vietnamese, not translated from Chinese.

- **Field labels exactly:** `- Chi phí:` `- Nói dễ hiểu:` `- Lợi ích:`
  `- Mức bằng chứng:` `- Ghi chú:`.
- **No Hán-Việt calques / word-by-word order.** Restructure sentences in
  Vietnamese order (chủ ngữ – vị ngữ, topic first). Bad: «Cách tính: tiền
  bạc và thông tin cá nhân», «Dò kho tài khoản», «trên điện thoại bật một
  cửa sổ». Good: «Thứ bị đe doạ: tiền và thông tin cá nhân», «nhồi thông
  tin đăng nhập (credential stuffing)», «điện thoại hiện thông báo để bạn
  bấm xác nhận».
- Prefer everyday words over Sino-Vietnamese bureaucratese: «làm» not
  «tiến hành», «để» not «nhằm mục đích», «nhiều người» not «đông đảo quần
  chúng». Address the reader as «bạn».
- **`Nói dễ hiểu`** = how a Vietnamese friend would explain it over coffee:
  short sentences, concrete, no HR/RR/OR/CI, no «đoàn hệ», «phơi nhiễm»,
  «tứ phân vị». Medical/epi terms are fine in `Lợi ích` / `Ghi chú` with
  established Vietnamese usage: phân tích gộp (meta-analysis), thử nghiệm
  ngẫu nhiên có đối chứng (RCT), nghiên cứu quan sát / theo dõi N người
  (cohort), khoảng tin cậy, tỷ số nguy cơ.
- **Numbers:** Vietnamese notation — decimal comma, thousands dot:
  `43,2%`, `1.234.567`, `0,499`. Keep every value from ZH; convert 万/亿
  to Vietnamese scale words exactly (`12 万` → `120.000` or `120 nghìn`;
  `3 亿` → `300 triệu`; `1.2 万亿` → `1,2 nghìn tỷ`). Never use «vạn».
  `元` → «nhân dân tệ» (or «tệ» after first use); do not convert currency.
- **China-specific terms:** keep the Chinese term in parentheses on first
  use per unit with a short Vietnamese gloss: «bảo hiểm y tế (医保)»,
  «hộ khẩu (户口)», «trợ cấp mức sống tối thiểu (低保)», «Trung tâm Kiểm soát
  Dịch bệnh (疾控中心)». Law names: Vietnamese meaning + original title,
  e.g. «Bộ luật Dân sự Trung Quốc (《民法典》)». Chinese emergency numbers
  stay as in ZH (120, 110, 119); do not replace with Vietnamese numbers.
- **Chinese characters may appear ONLY inside round parentheses** `(…)`
  in Vietnamese prose — never bare, never in quotes. App / mini-program /
  search names the reader must type: «tìm mini program Nền tảng cai thuốc lá
  Trung Quốc (中国戒烟平台)».
- Brand/app names stay as-is (WeChat, Alipay, Taobao); add a 2–3 word gloss
  on first use if unclear.
- Item titles: verb-first, imperative, no full stop. Tone restrained,
  no exclamation marks, no moralizing.
- **Never translate** HTML comments `<!-- 成本标签: … -->` or `来源` lines —
  the pipeline handles them.

**VI few-shot (plain-terms)**

> Thuốc diệt cỏ cực độc (paraquat) gần như không có cách chữa: trong 257
> ca nhập viện ở Bangladesh, 43,2% đã tử vong, nhiều người bị tổn thương
> phổi nặng. Ngộ độc khí CO cũng hay để lại di chứng: sau sáu tuần, 46,1%
> người thở oxy thường vẫn còn giảm trí nhớ, suy nghĩ chậm, so với 25,0%
> ở nhóm thở oxy cao áp — giữ được mạng, nhưng di chứng thường ở lại.

> Đội mũ bảo hiểm và cài quai thì người đi xe máy giảm khoảng 40% nguy cơ
> tử vong khi gặp tai nạn, và giảm khoảng 70% nguy cơ chấn thương đầu.
> Quai phải cài chặt: mũ lỏng lẻo trên đầu thì gần như không tính là đội.

## Pipeline order (do not skip)

After you write units, humans/tools run **in this order**:

1. `assemble.py <NN> <workdir> <out.md> [lang]`
2. `verify.py` — **HARD** (stop on FAIL)
3. `make lt` — LanguageTool on plain-terms (**exit 2** if `:8010` down)
4. `style_check.py` / `make quality`
5. Human pass + commit

**Forbidden:** using EN as structural master for RU/ES.

## Output

- Return translated unit markdown only (no fences, no preamble).
- Items: `### N. …` then locale dashed fields (`- Стоимость:` / `- Cost:` / …).
  Pipeline adds `§TAG§` / `§SRC§` after you.
- Intro (`00`): `# …` + prose; no item scaffolding.
- Plain-terms digits must be a subset of Benefit (same values; locale
  punctuation may differ, e.g. `43,2` vs `43.2`).
