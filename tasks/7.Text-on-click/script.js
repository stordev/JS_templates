const showTextInTitle = () => {
    const btn = document.querySelector('.btnTextInTitle');
    const title = document.querySelector('.title');

    btn.addEventListener('click', () => {
        title.textContent = getRandomText();
    });
};

const showTextHere = () => {
    const btnTextHere = document.querySelectorAll('.btnTextHere');
    btnTextHere.forEach(changeText);
};

const changeText = (el) => {
    el.addEventListener('click', (event) => {
        event.target.textContent = getRandomText();
    });
};

const getRandomText = () => {
    return Math.random().toString(36).substring(2, 15);
};

showTextInTitle();
showTextHere();
