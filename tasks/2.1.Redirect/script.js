const goTo = (value) => {
    location.href = value;
}

const progress = (barId) => {
    let progressBar = document.getElementById(barId);
    let value = 0;
    let timer = setInterval(
        () => {
            value += 1;
            progressBar.value = value;
            if (value == 100) {
                clearInterval(timer);
            }
        }, 50);
}


const redirectTo = (to) => {
    setTimeout(
        () => {
            if (!to) history.back();
            else location.href = to;
        },
        5000);
}


function showSecondsCountDown() {
    let seconds = 5;
    let timer = setInterval(
        () => {
            seconds -= 1;
            document.getElementById('seconds').innerHTML = seconds;
            if (seconds == 0) {
                clearInterval(timer);
            }
        }, 1000);
}
