"use strict";

const nextButton = document.querySelector(".popup__btn-next"),
  backButton = document.querySelector(".popup__btn-back"),
  submitButton = document.querySelector(".popup__btn-complete"),
  pagginator = document.querySelector(".popup__button-container_row-pagin"),
  pagginatorItems = document.querySelectorAll(".popup__pagin-item"),
  donationValue = document.querySelector(".donation__line-form_number"),
  donateContainerButtons = document.querySelector(
    ".popup__button-container"
  ),
  donateContainerButtonsTwo = document.querySelector(
    "#popup-button-container"
  ),
  donateButtonsTwo = document.querySelectorAll(".popup__btn-donation"),
  donateOtherButton = document.querySelector("#popup-other-button"),
  popupInput = document.querySelector(".popup__input"),
  quickDonateButton = document.querySelector(".donation__line-form_button");

// Сбрасывание на всех кнопках доната bgc
function resetBackGroundColorButtons() {
  donateButtonsTwo.forEach((element) => {
    element.style.backgroundColor = "#00a09280";
  });
};

function resetForm() {
  if (!document.querySelector('.popup__text-donation').classList.contains('popup__visible')) {
    document.querySelector('.popup__text-donation').classList.add('popup__visible')

    document.querySelector('.popup__text-donation-2').classList.remove('popup__visible')
    document.querySelector('.popup__text-donation-2').classList.add('popup__hidden')

    document.querySelector('.popup__text-donation-3').classList.remove('popup__visible')
    document.querySelector('.popup__text-donation-3').classList.add('popup__hidden')
  };
  if (!document.querySelector('.popup__button-container-donation').classList.contains('popup__visible')) {
    document.querySelector('.popup__button-container-donation').classList.add('popup__visible')

    document.querySelector('.popup__button-container-donation-2').classList.remove('popup__visible')
    document.querySelector('.popup__button-container-donation-2').classList.add('popup__hidden')

    document.querySelector('.popup__button-container-donation-3').classList.remove('popup__visible')
    document.querySelector('.popup__button-container-donation-3').classList.add('popup__hidden')
  };
  // if(document.querySelector('.popup__button-container-donation-2').classList.contains('popup__visible')) {
  //   document.querySelector('.popup__button-container-donation-2').classList.remove('popup__visible')
  //   document.querySelector('.popup__button-container-donation-2').classList.add('popup__hidden')
  // }
  // if(document.querySelector('.popup__button-container-donation-3').classList.contains('popup__visible')) {
  //   document.querySelector('.popup__button-container-donation-3').classList.remove('popup__visible')
  //   document.querySelector('.popup__button-container-donation-3').classList.add('popup__hidden')
  // }
  pagginatorItems[1].classList.remove('pagin__active');
  pagginatorItems[2].classList.remove('pagin__active');
  backButton.classList.remove('popup__visible');
  nextButton.style.display = "flex";
  nextButton.classList.add('popup__visible');

  submitButton.style.display = "none";

};

//Переход по кнопки с формы quickdonate
quickDonateButton.addEventListener("click", (e) => {
  resetForm()
  if (donationValue.value.length === 0) {
    donateButtonsTwo.forEach((element) => {
      element.style.backgroundColor = "#00a09280";
    });
    donateButtonsTwo[0].style.backgroundColor = "#00a09280";
  } else resetBackGroundColorButtons();
});

//Переключение кнопок доната с попап 1 на попап 2
donateContainerButtons.addEventListener("click", (e) => {
  resetForm()

  if (e.target.classList.contains("popup__btn-other")) {
    resetBackGroundColorButtons();
    donateButtonsTwo[0].style.backgroundColor = "#00a092";
    donationValue.value = null;
    popupInput.value = null;
    popupInput.focus();
  } else {
    const value = e.target.value;
    resetBackGroundColorButtons();
    donationValue.value = null;
    popupInput.value = null;
    donateButtonsTwo.forEach((element) => {
      if (element.value === value) {
        element.style.backgroundColor = "#00a092";
        donateButtonsTwo[0].style.backgroundColor = "#00a09280";
      }
    });
  }
});

//Переключение кнопок доната на попап 2
donateContainerButtonsTwo.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup__btn")) {
    resetBackGroundColorButtons();
    e.target.style.backgroundColor = "#00a092";
    popupInput.value = null;
  }
});

//Сбрасывание при вводе в other input
popupInput.addEventListener("input", () => {
  resetBackGroundColorButtons();

  if (popupInput.value == 10) {
    resetBackGroundColorButtons();
    donateButtonsTwo[0].style.backgroundColor = "#00a092";
  }
  if (popupInput.value == 20) {
    resetBackGroundColorButtons();
    donateButtonsTwo[1].style.backgroundColor = "#00a092";
  }
  if (popupInput.value == 30) {
    resetBackGroundColorButtons();
    donateButtonsTwo[2].style.backgroundColor = "#00a092";
  }
  if (popupInput.value == 50) {
    resetBackGroundColorButtons();
    donateButtonsTwo[3].style.backgroundColor = "#00a092";
  }
  if (popupInput.value == 80) {
    resetBackGroundColorButtons();
    donateButtonsTwo[4].style.backgroundColor = "#00a092";
  }
  if (popupInput.value == 100) {
    resetBackGroundColorButtons();
    donateButtonsTwo[5].style.backgroundColor = "#00a092";
  }
  if (popupInput.value.length === 0) {
    resetBackGroundColorButtons();
    donateButtonsTwo[0].style.backgroundColor = "#00a092";
  }
});

//Кнопка Next
nextButton.addEventListener("click", (e) => {
  const hiddenElements = document.querySelectorAll(".popup__hidden"),
    visibleElements = document.querySelectorAll(".popup__visible");

  if (!backButton.classList.contains("popup__visible")) {
    backButton.classList.add("popup__visible");
  }

  let hiddenArr = [];
  hiddenArr.push(hiddenElements[0]);
  hiddenArr.push(hiddenElements[1]);

  hiddenArr.forEach((element) => {
    element.classList.remove("popup__hidden");
    element.classList.add("popup__visible");
  });

  for (let i = 0; i < visibleElements.length; i++) {
    if (visibleElements[i].classList.contains("popup__btn-back")) {
      continue;
    } else {
      visibleElements[i].classList.remove("popup__visible");
    }
  }

  for (let i = 1; i < pagginatorItems.length; i++) {
    if (!pagginatorItems[i].classList.contains("pagin__active")) {
      pagginatorItems[i].classList.add("pagin__active");
      break;
    }
  }

  if (
    document
      .querySelector(".popup__button-container-donation-3")
      .classList.contains("popup__visible")
  ) {
    nextButton.style.display = "none";
    submitButton.style.display = "flex";
    pagginator.style.maxWidth = "680px";
  }
});

//Кнопка Back
backButton.addEventListener("click", (e) => {
  if (
    document
      .querySelector(".popup__button-container-donation-2")
      .classList.contains("popup__visible")
  ) {
    backButton.classList.remove("popup__visible");
    document
      .querySelector(".popup__button-container-donation-2")
      .classList.remove("popup__visible");
    document
      .querySelector(".popup__text-donation-2")
      .classList.remove("popup__visible");
    document
      .querySelector(".popup__button-container-donation-2")
      .classList.add("popup__hidden");
    document
      .querySelector(".popup__text-donation-2")
      .classList.add("popup__hidden");
    document
      .querySelector(".popup__button-container-donation")
      .classList.add("popup__visible");
    document
      .querySelector(".popup__text-donation")
      .classList.add("popup__visible");
  }
  if (
    document
      .querySelector(".popup__button-container-donation-3")
      .classList.contains("popup__visible")
  ) {
    document
      .querySelector(".popup__button-container-donation-3")
      .classList.remove("popup__visible");
    document
      .querySelector(".popup__text-donation-3")
      .classList.remove("popup__visible");
    document
      .querySelector(".popup__button-container-donation-3")
      .classList.add("popup__hidden");
    document
      .querySelector(".popup__text-donation-3")
      .classList.add("popup__hidden");
    document
      .querySelector(".popup__button-container-donation-2")
      .classList.add("popup__visible");
    document
      .querySelector(".popup__text-donation-2")
      .classList.add("popup__visible");
  }

  for (let i = pagginatorItems.length - 1; i > 0; i--) {
    if (pagginatorItems[i].classList.contains("pagin__active")) {
      pagginatorItems[i].classList.remove("pagin__active");
      break;
    }
  }

  if (
    document
      .querySelector(".popup__button-container-donation-3")
      .classList.contains("popup__hidden")
  ) {
    nextButton.style.display = "flex";
    submitButton.style.display = "none";
    pagginator.style.maxWidth = "575px";
  }
});

//Validate
const nameInput = document.querySelector(".popup__input-2"),
  emailInput = document.querySelector("input[type = email]"),
  cardNumberInput = document.querySelector("#card-number"),
  cvvNumberInput = document.querySelector("#cvv-number"),
  monthNumberCard = document.querySelector(".popup__credit-card-month"),
  yearNumberCard = document.querySelector(".popup__credit-card-year");

function validate() {
  if (
    nameInput.validity.valid &&
    emailInput.validity.valid &&
    cardNumberInput.validity.valid &&
    cardNumberInput.value.length === 16 &&
    cvvNumberInput.validity.valid &&
    cvvNumberInput.value.length === 3 &&
    monthNumberCard.value !== "Month" &&
    yearNumberCard.value !== "Year"
  ) {
    submitButton.classList.remove("popup__btn-complete-invalid");
    submitButton.setAttribute('type', 'submit');
  } else {
    submitButton.classList.add("popup__btn-complete-invalid");
  }
};

//Кнопка Submit
submitButton.addEventListener("click", (e) => {
  if (submitButton.classList.contains("popup__btn-complete-invalid")) {
    return;
  } else {
    alert("Thank you for your donation!");
  }
});

nameInput.addEventListener("input", () => {
  validate();
});

emailInput.addEventListener("input", () => {
  validate();
});

cardNumberInput.addEventListener("input", () => {
  validate();
});

cvvNumberInput.addEventListener("input", () => {
  validate();
});

monthNumberCard.addEventListener("change", () => {
  validate();
});

yearNumberCard.addEventListener("change", () => {
  validate();
});