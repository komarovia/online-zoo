"use strict";

const prevBtn = document.getElementById("next-preview-btn"),
      nextBtn = document.getElementById("back-preview-btn"),
      previewTrack = document.querySelector(".feedback__cards"),
      previewItems = document.querySelectorAll(".review__block");

let previewPosition = 0,
    previewGap,
    previewTrackWidth,
    previewMovePosition;

function checkPreviewBtns() {
  prevBtn.disabled = previewPosition === 0;
  nextBtn.disabled =
    previewPosition ===
    -previewTrackWidth + (previewItems[0].clientWidth * 2 + previewGap);
};

function considersPreviewGap() {
  if (document.documentElement.clientWidth > 1200) {
    previewGap = 30;
  } else {
    previewGap = 30;
  }
};

function considersPreviewMovePosition() {
  previewMovePosition = previewItems[0].clientWidth + previewGap;
};

function considersPreviewTrackWidth() {
  if (document.documentElement.clientWidth > 1200) {
    previewTrackWidth =
      (previewItems[0].clientWidth + previewGap) * previewItems.length -
      previewGap;
  } else {
    previewTrackWidth =
      (previewItems[0].clientWidth + previewGap) * previewItems.length -
      previewGap;
  }
};

function resetPreviewPosition() {
  if (
    previewPosition ===
    -previewTrackWidth + (previewItems[0].clientWidth * 2 + previewGap * 2)
  ) {
    previewPosition = 0;
    return true;
  }
};

function nextSlide() {
  previewTrack.style.transition = "0.3s";

  considersPreviewGap();
  considersPreviewMovePosition();
  considersPreviewTrackWidth();

  previewPosition -= previewMovePosition;
  previewTrack.style.transform = `translate(${previewPosition}px)`;

  let previewResetPosition = previewItems[0].clientWidth * 6 + previewGap * 6;
  if (previewPosition <= -previewResetPosition) {
    previewPosition = 0;
    setTimeout(() => {
      previewTrack.style.transition = "1s";
      previewTrack.style.transform = `translate(${previewPosition}px)`;
    }, 500);
  }

  checkPreviewBtns();
};

function prevSlide() {
  considersPreviewGap();
  considersPreviewMovePosition();
  considersPreviewTrackWidth();
  checkPreviewBtns();

  previewPosition += previewMovePosition;
  previewTrack.style.transform = `translate(${previewPosition}px)`;

  checkPreviewBtns();
};

let autoSlideInterval = setInterval(nextSlide, 15000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 15000);
  }, 45000);
};

checkPreviewBtns();

nextBtn.addEventListener("click", () => {
  delayAutoSliding();
  nextSlide();
});

prevBtn.addEventListener("click", () => {
  delayAutoSliding();
  prevSlide();
});

previewTrack.addEventListener("click", delayAutoSliding);