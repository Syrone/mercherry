document.querySelectorAll('[data-form-validate]')?.forEach((form) => {
	const submitButton = form.querySelector('button[type="submit"]')

	const updateButtonAttributes = () => {
		// Если форма должна работать по принципу выбора модального окна,
		// проверяем, выбран ли input с именем "field_type"
		const checkedInput = form.hasAttribute('data-choice-current-modal')
			? form.querySelector('input[name="field_type"]:checked')
			: true

		// Проверяем, что все поля с атрибутом required заполнены
		const allRequiredFilled = [...form.querySelectorAll('[required]')].every(field => field.checkValidity())

		if (checkedInput && allRequiredFilled) {
			// Если все условия выполнены, делаем кнопку активной
			submitButton.removeAttribute('disabled')
			if (form.hasAttribute('data-choice-current-modal')) {
				submitButton.setAttribute('data-bs-dismiss', 'modal')
				submitButton.setAttribute('data-bs-toggle', 'modal')
				submitButton.setAttribute('data-bs-target', `#${checkedInput.value}`)
			}
		} else {
			// Если хоть одно условие не выполнено, блокируем кнопку
			submitButton.setAttribute('disabled', 'true')
			if (form.hasAttribute('data-choice-current-modal')) {
				submitButton.removeAttribute('data-bs-dismiss')
				submitButton.removeAttribute('data-bs-toggle')
				submitButton.removeAttribute('data-bs-target')
			}
		}
	}

	// Запускаем проверку сразу при загрузке
	updateButtonAttributes()

	// Если форма использует выбор модального окна,
	// следим за изменением radio кнопок
	if (form.hasAttribute('data-choice-current-modal')) {
		form.querySelectorAll('input[name="field_type"]').forEach((input) => {
			input.addEventListener('change', updateButtonAttributes)
		})
	}

	// Вместо назначения обработчиков на каждый существующий [required] элемент,
	// используем делегирование событий на форму, чтобы отлавливать изменения в динамически добавленных полях
	form.addEventListener('input', (event) => {
		if (event.target.matches('[required]')) {
			updateButtonAttributes()
		}
	})
	form.addEventListener('change', (event) => {
		if (event.target.matches('[required]')) {
			updateButtonAttributes()
		}
	})

	// Предотвращаем перезагрузку страницы при отправке формы
	form.addEventListener('submit', (event) => {
		event.preventDefault()
	})
})