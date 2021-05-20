"use strict";

const aside = document.querySelector(".aside"),
  asideBageCam = document.querySelector(".aside__cam"),
  asideButtonsWrappers = document.querySelectorAll(".aside__card"),
  asideButtons = document.querySelectorAll(".aside__card-circle"),
  nextBtn = document.querySelector(".aside__next-arrow"),
  slideBtn = document.querySelector(".aside__btn-prew"),
  animalImgIcons = document.querySelectorAll(".animal__img-ico"),
  animalSvgIcons = document.querySelectorAll(".animal__svg-ico"),
  pandaBtn = document.querySelector(".aside__card-circle-panda"),
  pandaImgIcon = document.querySelector(".panda__img-ico"),
  pandaSvgIcon = document.querySelector(".panda__svg-ico"),
  eagleBtn = document.querySelector(".aside__card-circle-eagle"),
  eagleImgIcon = document.querySelector(".eagle__img-ico"),
  eagleSvgIcon = document.querySelector(".eagle__svg-ico"),
  gorillaBtn = document.querySelector(".aside__card-circle-gorilla"),
  gorillaImgIcon = document.querySelector(".gorilla__img-ico"),
  gorillaSvgIcon = document.querySelector(".gorilla__svg-ico"),

  toolTipTexts = document.querySelectorAll(".tooltiptext"),
  cardDescriptions = document.querySelectorAll(".aside__card-description");

aside.addEventListener("click", (event) => {
  if (event.target.classList.contains("aside__main-btn")) {
    if (event.target.dataset.note != undefined) {
      const link = event.target.dataset.note;
      document.location = `../${link}/${link}.html`;
    } else return;
  }
  if (
    event.target.classList.contains("aside__btn_next") ||
    event.target.classList.contains("aside__next-arrow")
  ) {
    document
      .querySelector(".aside__btn_next")
      .classList.toggle("aside__active");
    aside.classList.toggle("aside__active");
    asideButtonsWrappers.forEach((e) => {
      e.classList.toggle("aside__active");
    });
    toolTipTexts.forEach((e) => {
      e.classList.toggle("aside__display-none");
    });
    asideButtons.forEach((e) => {
      e.classList.toggle("aside__background");
    });
    asideButtons.forEach((e) => {
      e.classList.toggle("aside__card-circle");
    });
    asideButtons.forEach((e) => {
      e.classList.toggle("aside__card-circle-open");
    });
    animalImgIcons.forEach((e) => {
      e.classList.toggle("aside__display-none");
    });
    animalSvgIcons.forEach((e) => {
      e.classList.toggle("aside__svg-open");
    });
    animalSvgIcons.forEach((e) => {
      e.classList.toggle("animal__svg-ico");
    });
    cardDescriptions.forEach((e) => {
      e.classList.toggle("aside__display-block");
    });

    slideBtn.classList.toggle("aside__active");
    nextBtn.classList.toggle("aside__transform");
    pandaImgIcon?.classList.toggle("aside__display-none");
    pandaSvgIcon?.classList.toggle("panda__svg-ico");
    pandaBtn?.classList.toggle("aside__card-circle-panda-open");
    eagleImgIcon?.classList.toggle("aside__display-none");
    eagleSvgIcon?.classList.toggle("eagle__svg-ico");
    eagleBtn?.classList.toggle("aside__card-circle-eagle-open");
    gorillaImgIcon?.classList.toggle("aside__display-none");
    gorillaSvgIcon?.classList.toggle("gorilla__svg-ico");
    gorillaBtn?.classList.toggle("aside__card-circle-gorilla-open");
    asideBageCam.classList.toggle("aside__cam-adapt");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("zoos__questionnaire-map-btn")) {
    document.location = "../../map/map.html";
  }
});

//Карусель сайдбара
const duration = 300;

function rotateBackward() {
  const carousel = document.getElementById("carousel");
  carousel.insertBefore(
    carousel.firstElementChild,
    (carousel.children.length - 1).nextSibling
  );
}

function animate(begin, end, finalTask) {
  const carousel = document.getElementById("carousel"),
    change = end - begin,
    startTime = Date.now();
  carousel.style.top = begin + "px";

  const animateInterval = window.setInterval(function () {
    let t = Date.now() - startTime;
    if (t >= duration) {
      window.clearInterval(animateInterval);
      finalTask();
      return;
    }
    t /= duration / 2;
    const top =
      begin +
      (t < 1
        ? (change / 2) * Math.pow(t, 3)
        : (change / 2) * (Math.pow(t - 2, 3) + 2));

    carousel.style.top = top + "px";
  }, 1000 / 60);
}

const carousel = document.getElementById("carousel"),
  images = carousel.querySelectorAll(".aside__card"),
  imageWidth = carousel.width,
  aspectRatio = images[0].width / images[0].height,
  imageHeight = imageWidth / aspectRatio,
  rowHeight = (carousel.rowHeight = imageHeight + 2);
carousel.rowHeight = carousel.getElementsByTagName("div")[0].offsetHeight;

slideBtn.addEventListener("click", () => {
  slideBtn.disabled = true;
  animate(0, -carousel.rowHeight, () => {
    rotateBackward();
    carousel.style.top = "0";
    slideBtn.disabled = false;
  });
});

//ifarme changer
const mainPlayer = document.querySelector(".main__video"),
  miniPlayers = document.querySelector(".video__prewiev-carousel"),
  miniPlayersMobile = document.querySelector(".video__prewiev-carousel-320"),
  miniPlayersPlugs = document.querySelectorAll(".video__player-plug");

miniPlayersMobile.addEventListener("click", (e) => {
  const iframeItem = e.target.nextSibling;
  const iframeItemSrc = iframeItem.src;
  const mainPlayerSrc = mainPlayer.src;
  miniPlayersPlugs.forEach((e) => {
    e.classList.remove("video__player-plug-border");
  });
  iframeItem.setAttribute("src", mainPlayerSrc);
  mainPlayer.setAttribute("src", iframeItemSrc);

  e.target.classList.add("video__player-plug-border");
});

miniPlayers.addEventListener("click", (e) => {
  const iframeItem = e.target.nextSibling;
  const iframeItemSrc = iframeItem.src;
  const mainPlayerSrc = mainPlayer.src;
  miniPlayersPlugs.forEach((e) => {
    e.classList.remove("video__player-plug-border");
  });
  iframeItem.setAttribute("src", mainPlayerSrc);
  mainPlayer.setAttribute("src", iframeItemSrc);

  e.target.classList.add("video__player-plug-border");
});
