import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/lib/splide.scss";

document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-slider", {
    type: "fade",
    // rewind: true,
    pagination: false,
    arrows: false,
    direction: "rtl",
    breakpoints: {
      540: {
        arrows: true,
        pagination: true,
      },
    },
  });

  var thumbnails = new Splide("#thumbnail-slider", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    cover: true,
    isNavigation: true,
    arrows: false,
    direction: "rtl",
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
