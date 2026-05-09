const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // This toggles a class you can style to show/hide the menu
    navLinks.classList.toggle('active'); 
});