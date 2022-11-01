const goBack = () => {
    const back = document.querySelector(".back");
    back.addEventListener("click", () => {
        checkInputs() >= 3 ? window.history.back() :
            alert("You must say 'please' 3 times in the text input filed to go back");
    });
};

const checkInputs = () => {
    const inputs = document.querySelectorAll("input");
    let count = 0;

    inputs.forEach((input) => {
        let value = input.value.trim().toLowerCase();
        console.log(value);
        if (input.type === "text" && value === "please") {
            count++;
        }
    });

    return count;
};

goBack();
