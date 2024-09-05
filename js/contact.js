window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 10) { // Tentukan titik scroll, misalnya 50px
        if (!navbar.classList.contains('fixed-top')) {
            navbar.classList.add('fixed-top');
            document.body.style.paddingTop = navbar.offsetHeight + 'px'; // Hindari konten meloncat
        }
    } else {
        if (navbar.classList.contains('fixed-top')) {
            navbar.classList.remove('fixed-top');
            document.body.style.paddingTop = '0'; // Kembalikan padding ketika navbar tidak fixed
        }
    }
});