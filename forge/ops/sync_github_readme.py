"""Copy README.vi.md to .github/README.md so GitHub's repo page shows Vietnamese.

GitHub prefers .github/README.md over the root README.md (which stays English
for the ebook/check pipeline). Relative links are rewritten repo-root-relative
("/path") because the copy lives one directory down.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HEADER = "<!-- Generated from README.vi.md by forge/ops/sync_github_readme.py; edit README.vi.md, then rerun. -->\n"


def fix(target: str) -> str:
    if re.match(r"(https?:|#|mailto:|/)", target):
        return target
    return "/" + target.removeprefix("./")


def main() -> None:
    s = (ROOT / "README.vi.md").read_text(encoding="utf-8")
    s = re.sub(r"(\]\()([^)\s]+)", lambda m: m[1] + fix(m[2]), s)
    s = re.sub(r'((?:src|href)=")([^"]+)', lambda m: m[1] + fix(m[2]), s)
    (ROOT / ".github/README.md").write_text(HEADER + s, encoding="utf-8")


if __name__ == "__main__":
    assert fix("a/b.md") == "/a/b.md" and fix("./x.png") == "/x.png"
    assert fix("https://x") == "https://x" and fix("#toc") == "#toc"
    main()
