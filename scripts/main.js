'use strict'

import menuToggler from './modules/menuToggler.js'
import handleTheme from './modules/theme.js'
import { dom } from './utils/constants.js'
import setupNavigation from './utils/navigation.js'

document.addEventListener('DOMContentLoaded', main)

function main() {
	dom.body.classList.add('loaded')

	setupNavigation()
	menuToggler()
	handleTheme()
}
