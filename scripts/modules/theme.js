'use strict'

import { dom, paths } from '../utils/constants.js'

const handleTheme = () => {
	const userPreference = localStorage.getItem('theme')
	const preferredTheme =
		userPreference ?? (new Date().getHours() >= 18 || new Date().getHours() < 6 ? 'dark' : 'light')

	dom.html.dataset.theme = preferredTheme
	dom.theme.icon.setAttribute('href', preferredTheme === 'light' ? paths.icons.sun : paths.icons.moon)
	dom.theme.logo.setAttribute('src', preferredTheme === 'light' ? paths.icons.logoLight : paths.icons.logoDark)

	dom.theme.btn.addEventListener('click', () => {
		const currentTheme = dom.html.dataset.theme
		const newTheme = currentTheme === 'light' ? 'dark' : 'light'

		dom.html.dataset.theme = newTheme
		dom.theme.icon.setAttribute('href', newTheme === 'light' ? paths.icons.sun : paths.icons.moon)
		dom.theme.logo.setAttribute('src', newTheme === 'light' ? paths.icons.logoLight : paths.icons.logoDark)

		try {
			localStorage.setItem('theme', newTheme)
		} catch (err) {
			console.error('Error saving theme to localStorage:', err)
		}
	})
}

export default handleTheme
