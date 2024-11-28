export const dom = {
	html: document.documentElement,
	body: document.body,
	headerMenuButton: document.querySelector('.header__menu-btn'),
   
	theme: {
		btn: document.getElementById('theme-btn'),
		icon: document.querySelector('.theme__use'),
		logo: document.querySelector('.header__logo-img'),
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
