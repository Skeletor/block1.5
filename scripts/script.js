
var init = false;
var swiper;

var buttonOpened = false;
const displayButton = document.querySelector(".displayButton");
var image = document.querySelector(".displayButton__image");
var buttonText = document.querySelector(".displayButton__text");
var swiperContainer = document.querySelector(".swiper-container");

const switchWidth = 768;

displayButton.addEventListener("click", function ()
{
  buttonOpened ? onClose() : onShow();
  buttonOpened = !buttonOpened;
});

var onShow = function ()
{
  image.classList.add("displayButton__image-opened");
  buttonText.textContent = "Скрыть";
  swiperContainer.style.height = "fit-content";
}

var onClose = function ()
{
  image.classList.remove("displayButton__image-opened");
  buttonText.textContent = "Показать все";
  swiperContainer.style.height = 165;
}

var swiperManager = function (width)
{
  if (width <= switchWidth) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      displayButton.classList.add("hidden");

    }
  } else if (init) {
    swiper.destroy();
    init = false;

    displayButton.classList.remove("hidden");
  }
}

var heightManager = function (width)
{
  if (width <= switchWidth)
  {
    swiperContainer.style.height = 105;
    return;
  }

  if (!buttonOpened)
  {
    swiperContainer.style.height = 165;
  }
  else
  {
    swiperContainer.style.height = "fit-content";
  }

  //buttonText.textContent = swiperContainer.style.height;
}

var resizeManager = function ()
{
  var width = window.innerWidth;
  swiperManager(width);
  heightManager(width);
}

resizeManager();

window.addEventListener("resize", resizeManager);

