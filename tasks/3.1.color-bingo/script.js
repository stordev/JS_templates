const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("#" + randomColor);
    return "#" + randomColor;
};

const setBg = (id) => {
    const el = document.getElementById(id);
    el.style.backgroundColor = getRandomColor();
};

const getHEX = () => {
    const hex = document.getElementById('color-bingo').style.backgroundColor;
    const hexValue = rgb2hex(hex);
    document.getElementById('hex-value').textContent = hexValue;
};

const rgb2hex = (rgb) => {
    if (/^#/.test(rgb)) return rgb;
    let re = /\d+/g;
    let hex = x => (x >> 4).toString(16) + (x & 0xf).toString(16);
    return "#" + hex(re.exec(rgb)) + hex(re.exec(rgb)) + hex(re.exec(rgb));
}

const changeBg = setInterval(setBg, 100, 'color-bingo');

const stopBg = () => {
    clearInterval(changeBg);
    getHEX();
}



