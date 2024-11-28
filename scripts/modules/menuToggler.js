'use strict'

import { dom } from '../utils/constants.js'

const menuToggler = () => {
	if (!dom.headerMenuButton) return
	dom.headerMenuButton.addEventListener('click', () => {
		dom.headerMenuButton.classList.toggle('active')
		dom.body.classList.toggle('menu-opened')
	})
}

export default menuToggler
