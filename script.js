window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});