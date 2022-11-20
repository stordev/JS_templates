const sex = window.localStorage.getItem("Sex");
const greeting = document.querySelector(".greeting");

const createMeessage = (textEl, sex) => {
    if (sex === "male")
        return textEl.textContent + `man.`
    else if (sex === "female")
        return textEl.textContent + `dear lady! We are glad to see you here!`;
    else
        return `Hmmm... I don't know what to say to you.`
}

greeting.textContent = createMeessage(greeting, sex);


