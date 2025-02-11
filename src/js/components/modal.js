import Modal from 'bootstrap/js/dist/modal.js'

window.modalInstances = new Map()

window.initializeModal = function (element) {
	const modal = new Modal(element)
	modalInstances.set(element, modal)
}

document.querySelectorAll('.modal')?.forEach((element) => {
	initializeModal(element)
})

document.body.addEventListener('click', (event) => {
	const target = event.target
	if (target.getAttribute('data-bs-toggle') === 'modal') {
		const targetElement = document.querySelector(target.getAttribute('data-bs-target'))

		if (!modalInstances.has(targetElement)) {
			initializeModal(targetElement)
		}

		modalInstances.get(targetElement).show()
	}
})

document.addEventListener('show.bs.modal', event => {
	const modalBodyList = event.srcElement.querySelector('.modal-body-list')

	setTimeout(() => {
		if (modalBodyList) {
				if (modalBodyList.scrollHeight > modalBodyList.clientHeight) {
						modalBodyList.classList.add('is-scrollable')
				} else {
						modalBodyList.classList.remove('is-scrollable')
				}
		}
	}, 100)
})
