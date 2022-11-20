// reload the page if the user clicks the back button
const reloadPage = () => {
    const [entry] = performance.getEntriesByType("navigation");
    if (entry["type"] === "back_forward")
        location.reload();
};

const enableEl = (el) => {
    el.disabled = false
}

const disableEl = (el) => {
    el.disabled = true;
}

const validatePasswords = (password, passwordConfirm) => {
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;
    return passwordValue === passwordConfirmValue;
}

const validateForm = () => {

    // Get the form elements
    const form = document.querySelector(".form");
    const password = form.querySelector('#password');
    const passwordConfirm = form.querySelector('#password-confirm');
    const sex = document.querySelector('input[name="gender"]:checked');
    const agreeCheckbox = form.querySelector("#agree");
    const submit = form.querySelector("#submit");

    // if the checkbox is checked, enable the submit button
    agreeCheckbox.checked ? enableEl(submit) : disableEl(submit);

    submit.addEventListener('click', (e) => {
        form.classList.add("was-validated");

        // if the passwords match
        if (validatePasswords(password, passwordConfirm)) {
            saveToLocalStorage('Sex', sex.value); // save male to local storage
            form.submit(); // submit the form
        } else { // if the passwords
            alert("Passwords do not match"); // show
            e.preventDefault(); // prevent the form from submitting
        }
    })
}

const saveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
}

const init = () => {
    localStorage.clear();
    reloadPage();
    const agreeCheckbox = document.querySelector("#agree");
    agreeCheckbox.addEventListener("change", validateForm);
}

// Run the init function when the page loads
document.addEventListener("DOMContentLoaded", init);
