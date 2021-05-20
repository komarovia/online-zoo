'use strict';

//Variables
const donateInputs = document.querySelectorAll('input[type="number"]');
const cards = document.querySelector('.card__container');
const smallCards = document.querySelector('.card__container-small');

function acceptMaxNumCharacters () {
	if (this.classList.contains('popup__input-card-number')) {
		this.value = this.value.slice(0, 16);
		return;
	}
	if (this.classList.contains('popup__input-card-cvv')) {
		this.value = this.value.slice(0, 3);
		return;
	}
	if (this.value > 4 || typeof this.value != 'number') {
		this.value = this.value.slice(0, 4)
	}
};

donateInputs.forEach(element => {
	element.addEventListener('input', acceptMaxNumCharacters);
});

cards.addEventListener('click', (event) => {
		if(event.target.classList.contains('card__main-btn')) {
			if(event.target.dataset.note != undefined) {
				const card = event.target.dataset.note;
				document.location=`./pages/zoos/${card}/${card}.html`;
			} else return
		}
		if(event.target.classList.contains('card__button')) {
			if(event.target.dataset.note != undefined) {
				const card = event.target.dataset.note;
				document.location=`./pages/zoos/${card}/${card}.html`;
			} else return
		}
		if(event.target.classList.contains('card__main-btn')) {
			if(event.target.dataset.note != undefined) {
				const card = event.target.dataset.note;
				document.location=`./pages/zoos/${card}/${card}.html`;
			} else return
		}
});

smallCards.addEventListener('click', (event) => {
	if(event.target.classList.contains('card__main-btn')) {
		if(event.target.dataset.note != undefined) {
			const card = event.target.dataset.note;
			document.location=`./pages/zoos/${card}/${card}.html`;
		} else return
	}
	if(event.target.classList.contains('card__button-small')) {
		if(event.target.dataset.note != undefined) {
			const card = event.target.dataset.note;
			document.location=`./pages/zoos/${card}/${card}.html`;
		} else return
	}

});

document.addEventListener('click',(event) => {
	if(event.target.classList.contains('map-btn')) {
		document.location='./pages/map/map.html'; 
		}
});