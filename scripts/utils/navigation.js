const loadPage = async url => {
	try {
		const response = await fetch(url)

		if (!response.ok) throw new Error(`Ошибка загрузки страницы: ${response.statusText}`)

		const html = await response.text()

		const tempDiv = document.createElement('div')
		tempDiv.innerHTML = html
		const newPageContent = tempDiv.querySelector('main').innerHTML

		document.querySelector('#app').innerHTML = newPageContent

		history.pushState(null, null, url)

		updateActiveLink(url)
	} catch (error) {
		console.error('Ошибка при загрузке страницы:', error)
	}
}

const updateActiveLink = url => {
	document.querySelectorAll('.header__menu-link').forEach(link => {
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
