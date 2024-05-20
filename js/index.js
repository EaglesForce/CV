
const menuBtn = document.querySelector('i');
const navMenu = document.querySelector('.head2');
const logoHome = document.querySelector('.head1');

const menuOpen = () => {
    if (menuBtn.className === 'door fas fa-bars') {
        menuBtn.className = 'door fas fa-multiply';
    }
    else {
        menuBtn.className = 'door fas fa-bars';
    }
    navMenu.classList.toggle('open');
}
const menuClose = () => {
    if (menuBtn.className === 'door fas fa-multiply') {
        menuBtn.className = 'door fas fa-bars';
        navMenu.classList.toggle('open');
    }
}

// ================ to open and close menu ================ //
menuBtn.addEventListener('click', menuOpen);

// ================ to close menu after clicking any nav link ================ //
navMenu.addEventListener('click', menuClose);

// ================ to close menu after clicking the logo ================ //
logoHome.addEventListener('click', menuClose);

// ================ to update year ================ //
const year = new Date().getFullYear();

document.getElementById("date").innerHTML = "Copyright " + year;