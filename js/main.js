document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const closeButton = document.querySelector('.close-button');
    const menuItems = document.querySelectorAll('.menu__a');
    let images = [];

    function fetchImageData() {
        fetch('./images.json')
            .then(response => response.json())
            .then(data => {
                images = data;
                updateGallery();
            })
            .catch(error => console.error('Error fetching image data:', error));
    }

    fetchImageData();

    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active-menu');
    });

    closeButton.addEventListener('click', () => {
        menu.classList.remove('active-menu');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active-menu');
        });
    });

    let currentIndex = 0;

    function updateGallery() {
        let gallery = document.getElementById('gallery');
        gallery.innerHTML = '';

        for (let i = currentIndex; i < currentIndex + 3 && i < images.length; i++) {
            let imgDiv = document.createElement('div');
            let img = document.createElement('img');
            let title = document.createElement('h3');

            img.src = images[i].src;
            img.className = 'gallery__img';
            title.innerText = images[i].info.title;

            img.addEventListener('click', () => {
                navigateToProjectPage(images[i].info);
            });

            imgDiv.appendChild(img);
            imgDiv.appendChild(title);
            gallery.appendChild(imgDiv);
        }
    }

    function goBack() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateGallery();
    }

    function goForward() {
        if (currentIndex + 3 < images.length) {
            currentIndex++;
        }
        updateGallery();
    }

    function navigateToProjectPage(info) {
        // Construct the URL dynamically based on the current location
        const currentLocation = window.location.href;
        const baseURL = currentLocation.substring(0, currentLocation.lastIndexOf("/") + 1);
        const projectPageURL = baseURL + 'project-page.html';
    
        // Redirect to the project-page.html with the right information
        const queryString = `?title=${info.title}&description=${info.description}&image=${info.bigimg}`;
        window.location.href = projectPageURL + queryString;
    }    
    

    window.goBack = goBack;
    window.goForward = goForward;
    window.updateGallery = updateGallery;
});
