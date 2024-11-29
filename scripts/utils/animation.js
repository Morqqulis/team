function createAnimation({ resolution = 20, boxSize = 400, speed = 4 } = {}) {
	const container = document.querySelector('.spiral')
	if (!container) return

	for (let i = 1; i <= resolution; i++) {
		const block = document.createElement('div')
		block.classList.add('block')

		const size = (boxSize / resolution) * i
		const delay = 0.1 * i

		block.style.width = `${size}px`
		block.style.height = `${size}px`
		block.style.marginTop = `-${size / 2}px`
		block.style.marginLeft = `-${size / 2}px`
		block.style.animationDuration = `${speed}s`
		block.style.animationDelay = `${delay}s`

		container.appendChild(block)
	}
}

const clearAnimation = () => document.querySelectorAll('.block').forEach(block => block.remove())

export { clearAnimation, createAnimation }

