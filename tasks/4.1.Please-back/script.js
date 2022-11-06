const askToWritePlease = (count) => {
    alert("You must write 'please' 3 times in the text inputs. \n But you wrote it only " + count + " times.");
}

const historyBack = () => {
    window.history.back();
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

const goBack = () => {
    const back = document.querySelector(".back");
    back.addEventListener("click", () => {
        let count = checkInputs();
        count >= 3 ? historyBack() : askToWritePlease(count);
    });
};

goBack();
