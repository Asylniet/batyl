window.addEventListener("load", () => {
  AOS.init({
    easing: 'ease-in-out-cubic',
    duration: 1000,
    anchorPlacement: 'bottom-top'
  });
  var rellax = new Rellax('.rellax', {
    breakpoints:[624, 837, 1201]
  });

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    speed: 1000,
    breakpoints: {
      // when window width is >= 480px
      800: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  for (let index = 0; index < swiper.slides.length; index++) {
    const pagination = document.createElement("div");
    const number = document.createTextNode(index + 1);
    pagination.classList.add("pagination-number");
    pagination.style.fontWeight = "bold";
    pagination.style.color = "#A8A8A8";
    pagination.style.transition = "transition: 0.2s ease;";
    swiper.activeIndex == index && pagination.classList.add("active");
    pagination.appendChild(number);
    document.querySelector(".swiper-pagination").appendChild(pagination);
  }
  const paginationWidth =
    document.querySelector(".swiper-pagination").offsetWidth;
  document
    .querySelector(".swiper")
    .style.setProperty("--size", `${paginationWidth}px`);

  const paginationNumbers = document.querySelectorAll(".pagination-number");
  paginationNumbers.forEach((number, index) => {
    swiper.on("slideChange", function () {
      swiper.realIndex == index
        ? number.classList.add("active")
        : number.classList.remove("active");
    });
    number.addEventListener("click", () => {
      document
        .querySelector(".pagination-number.active")
        .classList.remove("active");
      number.classList.add("active");
      swiper.slideTo(index);
    });
  });
});
