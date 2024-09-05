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
var swiperSell = new Swiper('.swiper-sell', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
      800: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      50: {
        slidesPerView: 1,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var swiperGeneric = new Swiper('.swipers', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
      800: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      50: {
        slidesPerView: 1,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});