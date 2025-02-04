import Dropdown from 'bootstrap/js/dist/dropdown.js'

window.dropdownInstances = new Map()

window.initializeDropdown = function (element) {
	const dropdown = new Dropdown(element)
	dropdownInstances.set(element, dropdown)
}

document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((element) => {
	initializeDropdown(element)
})

document.body.addEventListener('click', (event) => {
	const target = event.target.closest('[data-bs-toggle="dropdown"]')
	if (!target) return

	// Проверяем, есть ли уже инстанс
	if (!dropdownInstances.has(target)) {
		initializeDropdown(target)
	}

	// Переключаем Dropdown
	dropdownInstances.get(target).toggle()
})