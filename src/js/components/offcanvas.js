import Offcanvas from 'bootstrap/js/dist/offcanvas.js'

window.offcanvasInstances = new Map()

window.initializeOffcanvas = function (element) {
	const offcanvas = new Offcanvas(element)
	offcanvasInstances.set(element, offcanvas)
}

document.querySelectorAll('.offcanvas').forEach((element) => {
	initializeOffcanvas(element)
})

document.body.addEventListener('click', (event) => {
	const target = event.target
	if (target.getAttribute('data-bs-toggle') === 'offcanvas') {
		const targetElement = document.querySelector(target.getAttribute('data-bs-target'))

		if (!offcanvasInstances.has(targetElement)) {
			initializeOffcanvas(targetElement)
		}

		offcanvasInstances.get(targetElement).show()
	}
})