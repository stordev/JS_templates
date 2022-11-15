const eventList = ["keydown", "keyup"];

const acceptVowels = (el) => {
    const vowels = "aeiou";
    const acceptKeys = [...vowels, "Backspace", "ArrowLeft", "ArrowRight"];

    eventList.forEach((event) => {
        el.addEventListener(event, (e) => {
            const key = e.key;
            if (!vowels.includes(key.toLowerCase()) && !acceptKeys.includes(key)) {
                e.preventDefault();
            }
        });
    });
};


const destoyNodes = (el) => {
    eventList.forEach((event) => {
        el.addEventListener(event, (e) => {
            const key = e.key;
            const prevSib = el.previousSibling;
            const nextSib = el.nextSibling;

            if (key === "ArrowLeft") {
                prevSib ? prevSib.remove() : el.parentNode.remove();
            }
            if (key === "ArrowRight") {
                nextSib ? nextSib.remove() : el.parentNode.remove();
            }
        });
    });
};

acceptVowels(document.querySelector("#vowels"));
destoyNodes(document.querySelector("#destroyer"));