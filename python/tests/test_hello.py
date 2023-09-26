from hello.hello import Hello


def test_hello():
    hello = Hello()
    assert hello.say() == "👋"
