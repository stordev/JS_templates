const imgages = {
    "Glden Gate Bridge": "https://images.unsplash.com/photo-1541464522988-31b420f688b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "Apple Park, Cupertino": "https://images.unsplash.com/photo-1524046997286-863495b9638e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
}

const createGalleryItems = () => {
    const gallery = document.querySelector('.gallery');
    for (let title in imgages) {
        // create gallery item
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        gallery.appendChild(galleryItem);

        // create img        
        const img = document.createElement('img');
        img.src = imgages[title];
        img.alt = title;
        img.classList.add('photo');
        img.style.display = 'none';
        galleryItem.appendChild(img);
        isImgLoaded(img); // check if img is loaded to remove loader

        // create description for the img
        const desc = document.createElement('p');
        desc.textContent = title;
        galleryItem.appendChild(desc);
    }
};

const isImgLoaded = (img) => {
    createLoader(img.parentElement);
    img.addEventListener('load', () => {
        img.parentElement.querySelector('.loader').remove();
        img.style.display = 'block';
    })
};

const createLoader = (elem) => {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    elem.appendChild(loader);
}

const zoomImgsOnCLick = () => {
    const imgs = document.querySelectorAll('.photo');
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            const parent = img.parentElement;
            parent.classList.contains('big')
                ? parent.classList.remove('big')
                : parent.classList.add('big');
        });
    });
};

const init = () => {
    createGalleryItems();
    zoomImgsOnCLick();
}

init();