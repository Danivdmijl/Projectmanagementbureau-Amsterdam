const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active-menu');
});

// Add an event listener to close the menu when the close button is clicked
closeButton.addEventListener('click', () => {
    menu.classList.remove('active-menu');
});

let images = [
    ['/img/aics_buitenveldert_220x220.jpg', 'Nieuwbouw AICS'],
    ['/img/bostheater_220x220.jpg', 'Renovatie Bostheater'],
    ['/img/spinoza20first_220x220.jpg', 'Nieuwbouw Spinoza20first    '],
    ['/img/wereldburger_220x220.jpg', 'Renovatie de Wereldburger'],
    ['/img/vierkant_burobraak.png', 'Kwartiermaker Nationaal Slavernijmuseum'],
    ['/img/amsterdam_museum_220x220.jpg', 'Renovatie Amsterdam Museum'],
    ['/img/sportpark_goed_genoeg_clubgebouw_afc_220x220.jpg', 'Sportpark Goed Genoeg & Clubgebouw AFC'],
    ['/img/volendammerweg_impressie_noordgevel.png', 'Verbouwing, nieuwbouw Werven en Overslagpunten'],
    // add more images as needed
   ];
   
   let currentIndex = 0;
   
   function updateGallery() {
    let gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
   
    for (let i = currentIndex; i < currentIndex + 3 && i < images.length; i++) {
       let imgDiv = document.createElement('div');
       let img = document.createElement('img');
       let title = document.createElement('h3');
   
       img.src = images[i][0];
       img.className = 'gallery__img'; // Add this line to set the class
       title.innerText = images[i][1];
   
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
   
   updateGallery();