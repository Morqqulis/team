export const dom = {
	html: document.documentElement,
	body: document.body,
	main: document.getElementById('app'),
	headerLinks: document.querySelectorAll('.header__menu-link'),
	headerMenuButton: document.querySelector('.header__menu-btn'),

	theme: {
		btn: document.getElementById('theme-btn'),
		icon: document.querySelector('.theme__use'),
		logo: document.querySelector('.header__logo-img'),
	},

	animation: {
		container: document.querySelector('.spiral'),
	},
}

export const paths = {
	icons: {
		moon: './assets/icons.svg#moon-icon',
		sun: './assets/icons.svg#sun-icon',
		logoLight: './assets/images/logo/logo-light.png',
		logoDark: './assets/images/logo/logo-dark.png',
	},
}
