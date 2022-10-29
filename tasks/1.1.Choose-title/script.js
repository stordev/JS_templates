const input = document.getElementById('input-title');
const title = document.getElementById('title');
const titleText = title.textContent;
const btnChangeTitle = document.getElementById('btnChangeTitle');
const btnResetTitle = document.getElementById('btnResetTitle');

btnChangeTitle.addEventListener('click', () => {
    title.textContent = input.value;
    input.value = '';
});

btnResetTitle.addEventListener('click', () => {
    title.textContent = titleText;
});