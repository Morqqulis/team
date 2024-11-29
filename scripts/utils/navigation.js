import { clearAnimation, createAnimation } from './animation.js'
import { dom } from './constants.js'

const loadPage = async url => {
	try {
		const response = await fetch(url)

		if (!response.ok) throw new Error(`Failed to load page: ${response.statusText}`)

		const html = await response.text()

		const tempDiv = document.createElement('div')
		tempDiv.innerHTML = html

		dom.main.innerHTML = tempDiv.querySelector('main').innerHTML

		history.pushState(null, null, url)

		updateActiveLink()

		clearAnimation()

		if (url.includes('code-artist')) {
			createAnimation({
				resolution: 20,
				boxSize: 600,
				speed: 4,
			})
		}
	} catch (err) {
		console.error('Error loading page:', err)
	}
}

const updateActiveLink = () => {
	dom.headerLinks.forEach(link => {
		link.classList.toggle('header__menu-link_active', link.href === window.location.href)
	})
}

const setupNavigation = () => {
	document.addEventListener('click', e => {
		const link = e.target.closest('a')
		if (link && link.href) {
			const currentHost = window.location.host
			const linkHost = new URL(link.href).host

			if (linkHost === currentHost) {
				e.preventDefault()

				loadPage(link.href)
			}
		}
	})

	window.addEventListener('popstate', () => {
		loadPage(location.pathname)
	})

	loadPage(location.pathname)
}

export default setupNavigation
