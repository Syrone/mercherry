function checkFieldInput(input) {
	if (input.value.trim()) {
		input.classList.add('is-input')
	} else {
		input.classList.remove('is-input')
	}
}

document.querySelectorAll('.field-has-btn')?.forEach((input) => {
	checkFieldInput(input)
})

document.addEventListener('input', (event) => {
	const input = event.target

	if (input.classList.contains('field-has-btn')) {
		checkFieldInput(input)
	}
})

document.addEventListener('click', (event) => {
	const fieldButton = event.target.closest('.field-btn')

	if (fieldButton) {
		const input = fieldButton.closest('.field-group')?.querySelector('.field-has-btn')

		if (fieldButton.classList.contains('field-clear')) {
			if (input) {
				input.value = ''
				checkFieldInput(input)
				input.dispatchEvent(new Event('input'))
			}
		}

		if (fieldButton.classList.contains('field-show')) {
			if (input) {
				if (input.classList.contains('is-show')) {
					input.classList.remove('is-show')
					input.type = 'password'
				} else {
					input.classList.add('is-show')
					input.type = 'text'
				}
			}
		}
	}
})