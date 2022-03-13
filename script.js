window.onscroll = function () {
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');
    const bgBefore = document.querySelector('.bg_before');
    // ↓メソッド「getBoundingClientRect」は、
    // 対象の画面左上からの距離を横は「x」縦は「y」の値として返す。
    const clientRect = section1.getBoundingClientRect();
    const clientRect2 = section2.getBoundingClientRect();
    // 上記で得たYの値をメソッド「top」で取得してPYと名づける
    const PY = clientRect.top;
    const PY2 = clientRect2.top;
    console.log(PY);
    console.log(PY2);

    // ↓メソッド「innerHeight」は画面の高さ。
    const WindowHeight = window.innerHeight;
    // ↓画面幅から要素の画面上部からの高さを引いて
    const Height = WindowHeight - PY;
    console.log(Height);
    // ↓その値が1以上になったら（画面に入ったら）、スタイル変更

    //次のセクションが始まる前であることを「PY2>1」記載で前提条件とした上で、記載
    if (PY2 > 1) {
        if (Height < 1) {
            bgBefore.style.position = 'absolute';

        } else {
            bgBefore.style.position = 'fixed';
        }

    } else {
        bgBefore.style.position = 'absolute';

    }
}