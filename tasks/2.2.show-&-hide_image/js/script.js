const imgShow = (idImg, idBtn) => {
    const img = document.getElementById(idImg);
    const btn = document.getElementById(idBtn);
    img.src = 'img/' + idImg + '.jpg';
    img.style.display = 'block';
    btn.style.display = 'none';
    document.body.style.backgroundColor = "#000";
};

const imgHide = (idImg, idBtn) => {
    const img = document.getElementById(idImg);
    const btn = document.getElementById(idBtn);
    img.style.display = 'none';
    btn.style.display = 'block';
    document.body.style.backgroundColor = "#fff";
}

