import pytest
from translate.steps.translate.translate_unit import fix_vi_punct


@pytest.mark.parametrize(
    ("src", "want"),
    [
        ("trợ cấp (生育津贴)， do quỹ：ok", "trợ cấp (生育津贴), do quỹ: ok"),
        ("tìm “中国戒烟平台” nhé", "tìm (中国戒烟平台) nhé"),
        (
            "Quy định ((普惠办法), 财金〔2023〕75 号). x",
            "Quy định (普惠办法, 财金〔2023〕75 号). x",
        ),
        ("văn bản 中办发〔2010〕5号 không", "văn bản (中办发〔2010〕5号) không"),
        ("Điều 100 (《刑法》第一百条) x", "Điều 100 (《刑法》第一百条) x"),
        ("a 《民法典》 b", "a (《民法典》) b"),
    ],
)
def test_fix_vi_punct(src, want):
    assert fix_vi_punct(src) == want
