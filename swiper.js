new Swiper('.slider', {
	navigation: {
		nextEl: '.arrow__right',
		prevEl: '.arrow__left'
	},
	simulateTouch: false,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.slider',
	},

	slidesPerView: 'auto',

	slidesPerGroup: 1,

	breakpoints: {
		1210: {
			spaceBetween: 42,
		},
		640: {
			spaceBetween: 20,
		},
		320: {
			spaceBetween: 20,
		},

	}
});
