#!/usr/bin/env python3
"""Add «Tại Việt Nam» notes (VN law / procedure context) to the Vietnamese edition.

Chapters get one optional `- Tại Việt Nam:` field per ### item (no new ###, so
check_content parity holds). Long-read docs get a trailing `## Áp dụng tại Việt Nam`.

  gen   <book/vi/NN-*.md> <out.json>      LLM → {"<item n>": "<text>"}
  doc   <docs/research/vi/*.md> <out.md>  LLM → markdown body for the docs section
  merge <file.md> <notes.json|.md>        write notes into the file (idempotent)
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

LABEL = "- Tại Việt Nam:"
DOC_HEAD = "## Áp dụng tại Việt Nam"
DOC_NOTE = (
    "> Phần bổ sung cho bản tiếng Việt, không có trong bản gốc. Thông tin pháp lý "
    "mang tính tham khảo, cần đối chiếu văn bản hiện hành; không thay thế tư vấn của luật sư."
)
PROMPT = Path(__file__).resolve().parents[1] / "prompts" / "vn-context.md"
CJK = re.compile(r"[\u4e00-\u9fff]")
# ponytail: matches number only (\u0110i\u1ec1u 174), not which law; manual review covers the rest
CITE = re.compile(r"\u0110i\u1ec1u \d+[a-z]?|\d+/\d{4}/[A-Z\u0110\-]+")


def _chat(user: str) -> str:
    from translate.llm.client import chat

    return chat(
        [
            {"role": "system", "content": PROMPT.read_text(encoding="utf-8")},
            {"role": "user", "content": user},
        ]
    )


def parse_json(raw: str) -> dict[str, str]:
    raw = raw[raw.find("{") : raw.rfind("}") + 1]
    data = json.loads(raw)
    return {str(k).strip(): " ".join(str(v).split()) for k, v in data.items() if str(v).strip()}


def gen(src: Path, out: Path) -> None:
    raw = _chat("Chương cần đối chiếu:\n\n" + src.read_text(encoding="utf-8"))
    out.write_text(json.dumps(parse_json(raw), ensure_ascii=False, indent=1), encoding="utf-8")


def doc(src: Path, out: Path) -> None:
    raw = _chat(
        "Đây là bài đọc dài, không chia mục. Thay vì JSON, hãy viết thân phần «Áp dụng tại "
        "Việt Nam» bằng Markdown: 4–10 gạch đầu dòng, mỗi dòng mở đầu bằng **chủ đề**, "
        "không dùng tiêu đề #. Chỉ trả về các gạch đầu dòng.\n\n" + src.read_text(encoding="utf-8")
    )
    out.write_text(raw.strip() + "\n", encoding="utf-8")


def merge_chapter(text: str, notes: dict[str, str]) -> str:
    lines = [ln for ln in text.splitlines() if not ln.startswith(LABEL)]
    out, item = [], None
    for i, ln in enumerate(lines):
        m = re.match(r"^### (\d+)\. ", ln)
        if m:
            item = m.group(1)
        out.append(ln)
        nxt = lines[i + 1] if i + 1 < len(lines) else ""
        # last "- field" line of the item → note goes right after it
        if item in notes and ln.startswith("- ") and not nxt.startswith("- "):
            out.append(f"{LABEL} {notes.pop(item)}")
    return "\n".join(out) + "\n"


def merge_doc(text: str, body: str) -> str:
    text = text.split("\n" + DOC_HEAD + "\n", maxsplit=1)[0].rstrip()
    return f"{text}\n\n{DOC_HEAD}\n\n{DOC_NOTE}\n\n{body.strip()}\n"


def merge(dst: Path, notes_path: Path) -> None:
    text = dst.read_text(encoding="utf-8")
    raw = notes_path.read_text(encoding="utf-8")
    if CJK.search(raw):
        sys.exit(f"{notes_path}: contains CJK, fix before merging")
    for cite in sorted(
        set(CITE.findall(raw)) - set(CITE.findall(PROMPT.read_text(encoding="utf-8")))
    ):
        print(f"{dst.name}: citation not in reference table: {cite}", file=sys.stderr)
    if notes_path.suffix == ".json":
        notes = json.loads(raw)
        missing = set(notes) - set(re.findall(r"(?m)^### (\d+)\. ", text))
        if missing:
            print(f"{dst.name}: unknown items {sorted(missing)}", file=sys.stderr)
        new = merge_chapter(text, dict(notes))
    else:
        new = merge_doc(text, raw)
    dst.write_text(new, encoding="utf-8")


if __name__ == "__main__":
    cmd, a, b = sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3])
    {"gen": gen, "doc": doc, "merge": merge}[cmd](a, b)
