let openNavbar = document.getElementById('open');

let closeNavbar = document.getElementById('close');

let navBarElement = document.querySelector('.mobile-nav');

function open() {

    navBarElement.classList.add('mobile-nav-open')
}
openNavbar.addEventListener('click', open);

function close() {
navBarElement.classList.remove('mobile-nav-open');;
}

closeNavbar.addEventListener('click', close);