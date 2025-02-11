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
	// Ищем ближайший элемент-тогглер dropdown
	const targetToggle = event.target.closest('[data-bs-toggle="dropdown"]')

	if (targetToggle) {
		// Если для текущего элемента ещё не создан инстанс, создаём его
		if (!dropdownInstances.has(targetToggle)) {
			initializeDropdown(targetToggle)
		}

		// Закрываем все dropdown, кроме того, по которому кликнули
		dropdownInstances.forEach((dropdownInstance, element) => {
			if (element !== targetToggle) {
				dropdownInstance.hide()
			}
		})

		// Переключаем состояние текущего dropdown
		dropdownInstances.get(targetToggle).toggle()
	} else {
		// Если клик произошёл вне элемента-тогглера,
		// закрываем все открытые dropdown
		dropdownInstances.forEach((dropdownInstance) => {
			dropdownInstance.hide()
		})
	}
})