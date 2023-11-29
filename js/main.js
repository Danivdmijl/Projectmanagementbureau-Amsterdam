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
