'use strict';

//Burger-menu
const burgerMenu = document.querySelector('.header_burger');
burgerMenu.addEventListener('click', (event) => {
	if(burgerMenu.classList.contains('active')) {
		burgerMenu.classList.remove('active');
		document.querySelector('.header_burger-menu').classList.remove('active')
	}
	else {
		burgerMenu.classList.add('active')
		document.querySelector('.header_burger-menu').classList.add('active')
	}
})