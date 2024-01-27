var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroupSkip: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
// third slider
var swiper5 = new Swiper(".mySwiper5", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 12,
  watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper5,
  },
});

gsap.to(".scroll-up", {
  top: "90%",
  scrollTrigger: {
    trigger: ".scroll-up",
    start: `10% 100%`,
    end: `top top`,
    scrub: 1,
  },
});

// menu bar logic
function menubar() {
  const menu = document.querySelector(".accordion");
  menu.classList.toggle("menu");
}
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");
  const content = item.querySelector(".accordion-content");

  title.addEventListener("click", () => {
    for (i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove("sbmenu");
      } else {
        // toggle the accordion item
        item.classList.toggle("sbmenu");
      }
    }
  });
});

// parallax effext
gsap.to(".parallax-eff", {
  scrollTrigger: {
    trigger: ".parallax-eff",
    duration: 2,
    start: "top bottom",
    end: "0 top",
    scrub: 2, // Enable scrubbing for a smoother effect
  },
  backgroundPosition: "50% 100%", // Adjust as needed for the parallax effect
});
function sliderlog() {
  const gridslide = document.querySelectorAll(".grid-data");
  gridslide.forEach((gslide) => {
    gslide.style.cursor = "pointer";
  });
}
function hidethumb() {
  const hidethumb = document.querySelector(".hide-thumb");
  hidethumb.classList.toggle("hthumb");
  if (hidethumb.classList.contains("hthumb")) {
    hidethumb.style.top = "93%";
  } else {
    hidethumb.style.top = "75.2%";
  }
}

// progress-logic-start here

var playButton = document.querySelector(".slider-timer");
var isAutoplayEnabled = false;
var progressBar = document.getElementById("progressBar");
var progressInterval;

playButton.addEventListener("click", function () {
  if (isAutoplayEnabled) {
    swiper4.autoplay.stop();
    playButton.innerHTML = '<i class="ri-play-circle-line"></i>';
    progressBar.style.width = "0";
    clearInterval(progressInterval);
  } else {
    swiper4.autoplay.start();
    playButton.innerHTML = '<i class="ri-pause-circle-line"></i>';
    progressInterval = setInterval(function () {
      progressBar.style.width = "100%";
      setTimeout(function () {
        progressBar.style.width = "0";
      }, 800);
    }, 2000);
  }
  isAutoplayEnabled = !isAutoplayEnabled;
});
const closeout = document.querySelector(".close-out");
const gridclose = document.querySelector(".grid-slider-cl");
closeout.addEventListener("click", function () {
  gridclose.style.display = "none";
});

const gridimg = document.querySelectorAll(".grid-img");
const gridclose3 = document.querySelector(".grid-slider-cl");
gridimg.forEach((gshow) => {
  gshow.addEventListener("click", function () {
    gridclose3.style.display = "block";
  });
});

// toggleZoom effect

function toggleZoom() {
  var image = document.querySelectorAll("#pole");
  image.forEach((zoom) => {
    zoom.classList.toggle("zooming");
  });
  var zoomeffect = document.querySelector(".ezoom");

  if (document.querySelector("#pole.zooming")) {
    zoomeffect.style.color = "#fff";
  } else {
    zoomeffect.style.color = "#888";
  }
}
var currentZoomLevel = 1; // Initial zoom level

function zoomIn() {
  var zoomIn = document.querySelector(".zoomactive");
  if (currentZoomLevel <= 4) {
    currentZoomLevel = Math.min(currentZoomLevel + 0.1, 2);

    zoomIn.style.color = "#fff";
  } else {
    zoomIn.style.color = "#888";
  }
  applyZoom();
}
function zoomOut() {
  var zoomOut = document.querySelector(".outactive");
  if (currentZoomLevel < 10) {
    currentZoomLevel = Math.max(currentZoomLevel - 0.1, 1);

    zoomOut.style.color = "#fff";
  } else {
    currentZoomLevel = 1;
    zoomOut.style.color = "#888";
  }
  applyZoom();
}
function applyZoom() {
  var images = document.querySelectorAll("#pole img");

  images.forEach((image) => {
    image.style.transform = `scale(${currentZoomLevel})`;
  });
}
function fullsc() {
  var contentElement = document.querySelector(".grid-slider-cl");

  if (document.fullscreenElement) {
    // If there is an element in fullscreen mode, exit fullscreen
    document.exitFullscreen();
  } else {
    // If there is no element in fullscreen mode, request fullscreen for the content element
    contentElement.requestFullscreen();
  }
}
