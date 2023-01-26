const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
        navbar.classList.replace('bg-transparent', 'navbar-color');
    } else {
        navbar.classList.replace('navbar-color', 'bg-transparent');
    }
});