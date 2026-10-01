from translate.steps.verify.verify import norm_numbers


def test_vi_decimal_comma_and_thousands_dot():
    assert norm_numbers("43,2% trong 1.234.567 ca, g = 0,499", lang="vi") == [
        "43.2",
        "1234567",
        "0.499",
    ]


def test_vi_scale_words():
    assert norm_numbers("1,2 triệu; 3 nghìn tỷ; 2 đến 3 tỷ", lang="vi") == [
        "1200000",
        "3000000000000",
        "2000000000",
        "3000000000",
    ]
