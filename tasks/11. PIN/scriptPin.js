const loginPage = 'login.html';

// get pin length from local storage
const getPinLength = () => {
    const pin = localStorage.getItem('pin');
    return pin ? pin.length : 0;
};


// create inputs for pin
const createPinInputs = (event) => {
    const pinLength = getPinLength();
    const formGroup = document.querySelector('.form-pin__group');
    const pinInput = document.querySelector('.form-pin__input');

    // create inputs
    for (let i = 1; i < pinLength; i++) {
        const input = pinInput.cloneNode(true); // clone input
        formGroup.insertBefore(input, pinInput);
    }
};


// check pin and redirect to login page if pin is correct or show error message
const checkPin = (event) => {
    const form = document.querySelector('.form-pin');
    const pin = localStorage.getItem('pin');
    const pinInput = document.querySelectorAll('.form-pin__input');
    const formErrors = document.querySelectorAll('.form__error-text');

    // join pin inputs values to string
    const pinValue = [...pinInput].map(input => input.value).join('');

    // check pin
    if (pinValue === pin) {
        form.setAttribute('action', loginPage); // redirect to login page
    } else { // PIN is incorrect
        // show error message
        formErrors[0].classList.remove('hidden');
        setTimeout(() => {
            formErrors[0].classList.add('hidden');
            formErrors[1].classList.remove('hidden');
            formErrors[1].classList.add('form__error-tip');
        }, 2000);

        // prevent form submit if pin is incorrect
        event.preventDefault();
    }
};


// add event listeners to inputs
const enterPin = () => {
    const inputs = document.querySelectorAll('.form-pin__input');
    inputs[0].focus(); // focus on first input

    // add event listeners to inputs
    inputs.forEach(input => input.addEventListener('input', (event) => {
        fillInputs(event); // fill inputs with pin
        jumpToNextInput(event); // jump to next input if input length is 1
    }));

    // jump to previous input if backspace is pressed
    inputs.forEach(input => input.addEventListener('keyup', jumpToPrevInput));
}

// fill inputs with pin
const fillInputs = (event) => {
    const inputs = document.querySelectorAll('.form-pin__input');
    const value = event.target.value;
    if (value.length > 1) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = value[i] || '';
        }
    }
};

// jump to previous input if backspace is pressed
const jumpToPrevInput = (event) => {
    const input = event.target;
    const prev = input.previousElementSibling;
    if (event.key === 'ArrowLeft' && prev) {
        prev.focus();
    }
};

// jump to next input if input length is 1
const jumpToNextInput = (event) => {
    const input = event.target;
    if (input.value.length >= 1) {
        input.value = input.value[0];
        const next = input.nextElementSibling;
        if (next) {
            next.focus(); // jump to next input
        }
    }
};

// add event listener to submit button
const submitPin = () => {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', checkPin);
};


const init = () => {
    createPinInputs(); // create inputs for pin
    enterPin(); // add event listeners to inputs
    submitPin(); // add event listener to submit button
}

init(); // initialize script

