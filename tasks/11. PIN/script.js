const pinPage = 'pin.html';

const createPin = (event) => {
    const form = document.querySelector('#form');
    const pinValue = document.querySelector('#pin').value;
    const errorPin = document.querySelector('#errorPin');

    if (!isNaN(pinValue)) {
        saveToLocalStorage('pin', pinValue);
        form.setAttribute('action', pinPage);
        form.submit();
    } else {
        errorPin.textContent = 'Pin must be a number without spaces';
        event.preventDefault();
    }
}

const isNumeric = (num) => {
    return !isNaN(num)
}

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const init = () => {
    localStorage.clear();
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', createPin);
}

init();