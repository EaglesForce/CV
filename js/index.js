
const menuBtn = document.querySelector('i');
const navOpen = document.querySelector('.navi');

const menuOpen = () => {
    if (menuBtn.className === 'door fas fa-bars') {
        menuBtn.className = 'door fas fa-multiply';
    }
    else {
        menuBtn.className = 'door fas fa-bars';
    }
    navOpen.classList.toggle('open');
}

menuBtn.addEventListener('click', menuOpen);