const request = ({
    dataUrl = "data.json",
    onSuccess = fillData,
    onError = (err) => console.log(err)
} = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', dataUrl);
    xhr.responseType = 'json';

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            // get 2 objects: pageName and pageData from func getPageData
            onSuccess(getPageData(xhr.response));
        } else {
            onError(xhr.statusText);
        }
    };

    xhr.send();
};

const getPageData = (resp) => {
    let pageName = window.location.href.split('/').pop().split('.')[0];
    if (pageName === '') pageName = 'home';
    let pageData = resp[pageName];
    return { pageName, pageData };
};

const fillData = (resp) => {
    const links = document.querySelectorAll('.content a');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    const main = document.querySelector('main');
    main.querySelector('.title').textContent = resp.pageData.title;
    main.querySelector('.subtitle').textContent = resp.pageData.subtitle;
    main.querySelector('.content').innerHTML = resp.pageData.body.join('');
};


const init = () => {
    document.addEventListener('DOMContentLoaded', (e) => {
        request();
    })

    const links = document.querySelectorAll('.content a');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
};

init();