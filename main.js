const mobileMenu = document.getElementById('mobile-menu');
const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const overlay = document.getElementById('overlay');

openMenu.addEventListener('click', hamburgurMenuOpen)

function hamburgurMenuOpen() {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
    
    setTimeout(() => {
        overlay.classList.add('active')
    }, 500)
}

closeMenu.addEventListener('click', closeHamburgerMenu)

function closeHamburgerMenu(){
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
        overlay.classList.remove('active')
    }, 500)
}

