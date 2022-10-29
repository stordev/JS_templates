const input = document.getElementById('inp');
const btn = document.getElementById('btn');
const h1 = document.getElementById('title');

btn.onclick = () => {
    h1.textContent = input.value;
}