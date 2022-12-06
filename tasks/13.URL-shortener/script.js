const baseDomain = 'https://1pt.co';
const apiURL = 'https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url=';


// Shorten the URL
const shortenURL = (url) => {
    if (url === '') {
        return;
    }

    const request = new XMLHttpRequest();

    // open a connection
    request.open('GET', apiURL + url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText);
            showResult(data);
        } else {
            console.log('Error');
        }
    }

    request.send();
}


// Show the shortened URL
const showResult = (data) => {
    const results = document.querySelector('.results');
    results.classList.remove('hidden');
    const shortURL = baseDomain + '/' + data.short;
    const shortURLContainer = document.querySelector('#shortURL');
    shortURLContainer.setAttribute('href', shortURL);
    shortURLContainer.textContent = shortURL;
}


// Copy the shortened URL to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
}


const init = () => {

    // Add event listener to shorten button
    const shortenBtn = document.querySelector('#shortenBtn');
    shortenBtn.addEventListener('click', (event) => {
        const url = document.querySelector('#longURL').value;
        shortenURL(url);
        event.preventDefault();
    });

    // Add event listener to copy button
    copyBtn = document.querySelector('#copyBtn');
    copyBtn.addEventListener('click', () => {
        const shortURL = document.querySelector('#shortURL').href;
        copyToClipboard(shortURL);
    });

}

init(); // Initialize the script
