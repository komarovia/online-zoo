"use strict";

const leftArrow = document.querySelector(".arrow__right"),
      rightArrow = document.querySelector(".arrow__left"),
      track = document.querySelector(".card__container"),
      items = document.querySelectorAll(".card__block");

let position = 0,
    gap,
    trackWidth,
    movePosition;

function considersMovePosition() {
  movePosition = items[0].clientWidth + gap;
};

function considersGap() {
  if (document.documentElement.clientWidth > 1200) {
    gap = 42;
  } else {
    gap = 20;
  }
};

function considersTrackWidth() {
  if (document.documentElement.clientWidth > 1200) {
    trackWidth = (items[0].clientWidth + gap) * items.length - gap;
  } else {
    trackWidth = (items[0].clientWidth + gap) * items.length - gap;
  }
};

checkBtns();

rightArrow.addEventListener("click", () => {
  considersGap();
  considersMovePosition();
  considersTrackWidth();
  checkBtns();

  position += movePosition;
  track.style.transform = `translate(${position}px)`;
  checkBtns();
});

leftArrow.addEventListener("click", () => {
  considersGap();
  considersMovePosition();
  considersTrackWidth();
  checkBtns();

  position -= movePosition;
  track.style.transform = `translate(${position}px)`;
  checkBtns();
});

function checkBtns() {
  rightArrow.disabled = position === 0;
  if (document.documentElement.clientWidth > 1200) {
    leftArrow.disabled =
      position === -trackWidth + (items[0].clientWidth * 3 + gap * 2);
  } else {
    leftArrow.disabled =
      position === -trackWidth + (items[0].clientWidth * 3 + gap * 2);
  }
};