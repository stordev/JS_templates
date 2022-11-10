const jsonUrl = 'https://api.punkapi.com/v2/beers';
let dataSet = [];


downloadJSON().then(() => {
    fillGallery();
});

async function downloadJSON() {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    dataSet = data;
}

const fillGallery = () => {
    const gallery = document.querySelector('.gallery');
    const cards = dataSet.map((element) => createCard(element));
    cards.forEach(card => gallery.appendChild(card));

    return gallery;
}

const createCard = (element) => {
    const card = document.createElement('div');
    card.classList.add('card');



    return fillCard(card, element);
}

const fillCard = (card, element) => {
    card.appendChild(createCardImage(element));
    card.appendChild(createCardTitle(element));
    card.appendChild(createCardContent(element));

    return card;
}

function createCardImage(element) {
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const image = document.createElement('img');
    image.src = element.image_url;

    cardImage.appendChild(image);

    return cardImage;
}

function createCardTitle(element) {
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');

    const title = document.createElement('h4');
    title.textContent = element.name;

    cardTitle.appendChild(title);
    return cardTitle;
}

function createCardContent(element) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const content_abv = document.createElement('p');
    content_abv.textContent = `ABV: ${element.abv}`;

    const content_tagline = document.createElement('p');
    content_tagline.textContent = element.tagline;

    const content_firstBrewed = document.createElement('p');
    content_firstBrewed.classList.add('align-bottom');
    content_firstBrewed.textContent = element.first_brewed;

    cardContent.appendChild(content_tagline);
    cardContent.appendChild(content_firstBrewed);
    cardContent.appendChild(content_abv);

    return cardContent;
}