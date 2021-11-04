import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "../styles/lib/owl.scss";


$(".category__carousel").owlCarousel({
  loop: false,
  autoWidth: true,
  slideBy: 3,
  rtl: true,
  dots: false,
  navText: [
    '<span aria-label="' + "Previous" + '" class="icon-Chevron_right"></span>',
    '<span aria-label="' + "Next" + '" class="icon-Chevron_left"></span>',
  ],
  responsive: {
    0: {
      nav: false,
    },
    540: {
      nav: true,
    },
  },
});

$(".special-offer__carousel").owlCarousel({
  loop: false,
  autoWidth: true,
  slideBy: 3,
  margin: 15,
  rtl: true,
  dots: false,
  navText: [
    '<span aria-label="' + "Previous" + '" class="icon-Chevron_right"></span>',
    '<span aria-label="' + "Next" + '" class="icon-Chevron_left"></span>',
  ],
  responsive: {
    0: {
      nav: false,
    },
    600: {
      nav: true,
    },
  },
});

$(".intro-section__carousel").owlCarousel({
  loop: false,
  autoWidth: true,
  nav: true,
  slideBy: 3,
  margin: 15,
  rtl: true,
  dots: false,
  navText: [
    '<span aria-label="' + "Previous" + '" class="icon-Chevron_right"></span>',
    '<span aria-label="' + "Next" + '" class="icon-Chevron_left"></span>',
  ],
  responsive: {
    0: {
      nav: false,
    },
    1360: {
      nav: true,
    },
  },
});
