#!/usr/bin/env python3
"""Translate a free-form Markdown doc (README.zh.md, docs/*.md) ZH → vi, section by section.

Not for chapters (those go through digest → units → assemble → verify).
Splits on `## ` headings so each LLM call stays small, then rewrites links
mechanically (book/NN-*.md → book/vi/<slug>.md, docs/<cn>.md → docs/research/vi/<slug>.md).

Usage: python3 translate/ops/translate_doc.py <src.md> <out.md>
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

from translate.llm.client import chat

# Keep in sync with README.vi.md TOC.
CHAPTER_SLUGS = {
    "01": "01-dung-chet-som",
    "02": "02-dung-chet-tu-tu",
    "03": "03-dung-lang-phi-suc-luc",
    "04": "04-dung-lang-phi-thoi-gian",
    "05": "05-dung-lang-phi-tien",
    "06": "06-danh-sach-dieu-khong-nen",
    "07": "07-song-the-nao-khi-khong-co-tien",
    "08": "08-dung-tu-dua-minh-vao-rac-roi",
    "09": "09-lan-ranh-phap-luat-de-dam-phai",
    "10": "10-yeu-va-ket-hon-co-dang-khong",
    "11": "11-lan-ranh-cho-lap-trinh-vien",
    "12": "12-khoi-nghiep-va-kinh-doanh",
    "13": "13-tinh-huong-khan-cap",
    "14": "14-tai-khoan-va-an-toan-thong-tin",
    "15": "15-thue-nha-va-mua-nha",
    "16": "16-song-khi-mac-benh-man-tinh",
    "17": "17-nha-co-nguoi-gia",
    "18": "18-nuoi-con-co-dang-khong",
    "19": "19-di-lam-nghi-viec-va-tai-nan-lao-dong",
    "20": "20-cham-soc-tre-so-sinh",
    "21": "21-du-lich-nuoc-ngoai-va-an-toan",
    "22": "22-thu-gian-the-nao",
    "23": "23-hoc-ky-nang-gi-dang",
    "24": "24-di-kham-benh",
    "25": "25-thu-tuc-khi-nguoi-than-qua-doi",
    "26": "26-lam-website-hoac-nen-tang",
    "27": "27-mang-thai-va-sinh-con",
    "28": "28-dung-pha-co-the-vi-ngoai-hinh",
    "29": "29-sau-cu-soc-lon",
    "30": "30-con-thoi-di-hoc",
    "31": "31-nhung-con-duong-sau-18-tuoi",
    "32": "32-du-hoc",
    "33": "33-song-khi-khuyet-tat",
    "34": "34-thuoc-trong-nha-dung-uong-sai",
}

DOC_SLUGS = {
    "家庭应急装备清单": "danh-sach-dung-cu-khan-cap-gia-dinh",
    "生物钟和夜班": "dong-ho-sinh-hoc-va-ca-lam-dem",
    "遇到陌生人出事该不该停": "gap-nguoi-la-gap-nan-co-nen-dung-lai-khong",
    "结婚划不划算": "ket-hon-co-dang-khong",
    "做平台要办哪些证": "lam-nen-tang-can-nhung-giay-to-gi",
}

SYSTEM = """You translate Chinese Markdown into natural Vietnamese for the book
“Cẩm nang sống hiệu quả” (original: 高性价比人生指南).

Rules:
- Output ONLY the translated Markdown of the section you are given. No preamble, no fences.
- Keep Markdown structure exactly: headings, tables, lists, HTML tags/comments, badges,
  image tags. Translate visible text (also alt= and shields.io badge label text,
  URL-encoded), never URL paths or link targets.
- Keep all numbers. Vietnamese notation: decimal comma, thousands dot (43,2%, 1.234).
- Natural Vietnamese, not word-by-word from Chinese; no Hán-Việt bureaucratese;
  address the reader as «bạn»; restrained tone, no exclamation marks.
- China-specific terms: Vietnamese gloss + Chinese in parentheses on first use,
  e.g. «bảo hiểm y tế (医保)».
- Citation lines (authors, journals, DOIs, Chinese regulation titles) stay unchanged.
- The book title is always «Cẩm nang sống hiệu quả».
- Attribution / license lines: keep the original repository link
  https://github.com/eternity4719/HowToLiveBetter exactly as written.
"""


def split_sections(text: str) -> list[str]:
    parts = re.split(r"(?m)^(?=## )", text)
    return [p for p in parts if p.strip()]


def rewrite_links(text: str) -> str:
    def chap(m: re.Match) -> str:
        return f"{m.group(1)}book/vi/{CHAPTER_SLUGS[m.group(2)]}.md"

    text = re.sub(r"(\]\((?:\.\./)*)book/(\d{2})-[^)#\s]*?\.md", chap, text)
    for cn, slug in DOC_SLUGS.items():
        text = re.sub(
            rf"(\]\((?:\.\./)*)docs/(?:research/)?{re.escape(cn)}\.md",
            rf"\1docs/research/vi/{slug}.md",
            text,
        )
    return text


def main() -> int:
    src, out = Path(sys.argv[1]), Path(sys.argv[2])
    chunks = []
    for i, sec in enumerate(split_sections(src.read_text(encoding="utf-8")), 1):
        print(f"section {i}: {sec.splitlines()[0][:60]}", file=sys.stderr)
        msgs = [
            {"role": "system", "content": SYSTEM},
            {"role": "user", "content": f"Translate this section to Vietnamese:\n\n{sec}"},
        ]
        chunks.append(chat(msgs).strip() + "\n")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(rewrite_links("\n".join(chunks)), encoding="utf-8")
    print(f"Wrote {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
