from translate.ops.vn_context import LABEL, merge_chapter

CH = """# 1. T

### 1. A
<!-- 成本标签: 钱=0 -->
- Chi phí: x
- Ghi chú: y

### 2. B
- Chi phí: z
"""


def test_note_lands_after_last_field_and_is_idempotent():
    once = merge_chapter(CH, {"1": "vn1"})
    assert "- Ghi chú: y\n" + LABEL + " vn1\n\n### 2. B" in once
    assert merge_chapter(once, {"1": "vn1"}) == once
    assert LABEL not in once.split("### 2. B")[1]
