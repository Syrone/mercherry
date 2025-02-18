// Глобальный счётчик для уникальных имён полей
let fieldCounter = 0
// Глобальная переменная, удаляемого поля
let fieldItemToRemove = null
// Глобальная переменная, в которую будем сохранять контейнер, куда добавлять новое поле
let currentParentContainer = null


// Функция для подсчёта количества предков с data-create-field="child-container"
function countAncestorChildContainers(element) {
	let count = 0
	let current = element.parentElement
	while (current) {
		if (current.matches('[data-create-field="child-container"]')) {
			count++
		}
		current = current.parentElement
	}
	return count
}

// Устанавливаем placeholder для всех родительских контейнеров
function setPlaceholdersForParents(element, newPlaceholder) {
	let current = element.parentElement
	while (current) {
		if (current.matches('[data-create-field="parent-container"]')) {
			// Получаем текущее значение placeholder
			let currentPlaceholder = current.getAttribute('data-fields-placeholder') || ''
			// Разделяем на массив значений по запятой
			let placeholdersArray = currentPlaceholder.split(',').map(p => p.trim()).filter(p => p !== '')
			// Добавляем новое значение, если его еще нет в массиве
			if (!placeholdersArray.includes(newPlaceholder)) {
				placeholdersArray.push(newPlaceholder)
			}
			// Обновляем атрибут с объединенными значениями через запятую
			current.setAttribute('data-fields-placeholder', placeholdersArray.join(', '))
		}
		current = current.parentElement
	}
}

// Удаляем значение placeholder из всех родительских контейнеров
function removePlaceholderFromParents(element, placeholderToRemove) {
	let current = element.parentElement
	while (current) {
		if (current.matches('[data-create-field="parent-container"]')) {
			// Получаем текущее значение placeholder
			let currentPlaceholder = current.getAttribute('data-fields-placeholder') || ''
			// Разделяем на массив значений по запятой
			let placeholdersArray = currentPlaceholder.split(',').map(p => p.trim()).filter(p => p !== '')
			// Удаляем указанное значение из массива
			placeholdersArray = placeholdersArray.filter(p => p !== placeholderToRemove)
			// Обновляем атрибут с новыми значениями через запятую
			current.setAttribute('data-fields-placeholder', placeholdersArray.join(', '))
		}
		current = current.parentElement
	}
}

document.addEventListener('click', (event) => {
	// Находим ближайший элемент с data-create-field
	const createEl = event.target.closest('[data-create-field]')
	if (!createEl) return

	// Получаем значение атрибута, которое определяет функционал
	const createType = createEl.getAttribute('data-create-field')

	const buttonChild = `
		<button type="button" class="btn btn-md btn-create-field"
			data-create-field="parent"
			data-bs-toggle="modal"
			data-bs-target="#modal_choice_field_type">
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/plus-fill.svg#svg-plus-fill"></use>
				</svg>
			</span>

			Дочернее поле
		</button>
	`

	const buttonRemove = `
		<button type="button" class="btn btn-remove-field"
			data-bs-toggle="modal"
			data-bs-target="#modal_remove_field_question"
			data-create-field="remove">
			Удалить поле
		</button>
	`

	switch (createType) {
		case 'main': {
			// Определяем, куда добавлять созданное поле.
			currentParentContainer = document.querySelector('[data-create-field="main-container"]')
			break
		}
		case 'parent': {
			// Определяем, куда добавлять созданное поле.
			// Если кнопка находится внутри уже созданного поля, ищем ближайший вложенный контейнер.
			let container
			const createdField = createEl.closest('[data-create-field="parent-container"]')
			if (createdField) container = createdField.querySelector('[data-create-field="child-container"]')
			currentParentContainer = container
			break
		}
		// Кнопка для удаления поля
		case 'remove': {
			// Удаляем весь блок (контейнер созданного поля)
			const createdField = createEl.closest('[data-create-field="parent-container"]')
			fieldItemToRemove = createdField

			// Сохраняем placeholder удаляемого поля перед его удалением
			const placeholderToRemove = fieldItemToRemove?.getAttribute('data-fields-placeholder') || ''

			// Добавляем placeholderToRemove в глобальную переменную для использования при подтверждении удаления
			fieldItemToRemove.placeholderToRemove = placeholderToRemove

			break
		}
		case 'button': {
			// Это финальная кнопка в модальном окне, по клику на которую создаётся поле.
			// Предотвращаем действие по умолчанию (например, если это кнопка внутри формы).
			event.preventDefault()

			// Находим форму внутри модального окна, где собраны данные
			const form = createEl.closest('form')
			if (!form) return

			// Собираем данные из формы
			const formData = new FormData(form)
			const data = {}
			formData.forEach((value, key) => {
				// Если нужно обрабатывать одинаковые имена полей (например, для списка), можно делать массив
				if (data[key]) {
					if (Array.isArray(data[key])) {
						data[key].push(value)
					} else {
						data[key] = [data[key], value]
					}
				} else {
					data[key] = value
				}
			})

			// Определяем тип поля по id модального окна.
			// Например, если id="modal_create_field_image", то тип будет "image".
			const modal = form.closest('.modal')
			let createdFieldType = ''
			if (modal && modal.id) {
				createdFieldType = modal.id.replace('modal_create_field_', '')
			}

			// Используем currentParentContainer (установленный при клике на кнопку parent)
			const parentContainer = currentParentContainer
			if (!parentContainer) return

			const ancestorCount = countAncestorChildContainers(parentContainer)
			const buttonChildMarkup = ancestorCount > 3 ? '' : buttonChild

			// Формируем HTML нового поля – это пример,
			// в реальном проекте здесь можно создать нужную структуру
			const newField = document.createElement('div')
			newField.className = 'create-field-container'
			newField.setAttribute('data-create-field', 'parent-container')
			newField.setAttribute('data-fields-placeholder', data.placeholder || '')
			if (['select'].includes(createdFieldType)) {
				// Для типа "select": выводим все значения из data в option,
				// а placeholder используем как первый option с value=""
				fieldCounter++
				const uniqueFieldName = `create_select_${fieldCounter}`
				// Начинаем формировать разметку option, первым идет placeholder
				let optionsHTML = `
					<option value="">${data.placeholder || 'Заглушка'}</option>
				`
				// Определяем атрибуты для select в зависимости от типа
				let selectChoicesAttr = 'default-radio'
				let choicesClassAttr = 'choices--floating choices--radio'
				let multipleAttribute = ''
				if (data.type === 'multiple') {
					selectChoicesAttr = 'multiple-checkbox'
					choicesClassAttr = 'choices--floating choices--checkbox'
					multipleAttribute = 'multiple'
					optionsHTML += `
						<option value="all">Все</option>
					`
				}
				// Предполагаем, что значения для option передаются в data.select_value
				let valuesArray = []
				if (data.value) {
					if (Array.isArray(data.value)) {
						valuesArray = data.value
					} else {
						valuesArray = [data.value]
					}
				}
				valuesArray.forEach(value => {
					optionsHTML += `<option value="${value}">${value}</option>`
				})
				newField.innerHTML = `
					<div class="create-field-group">
						<select name="${uniqueFieldName}" ${multipleAttribute}
							data-select-choices="${selectChoicesAttr}"
							data-choices-class="${choicesClassAttr}">
							${optionsHTML}
						</select>

						<div class="create-field-buttons">
							${buttonChildMarkup}
							${buttonRemove}
						</div>
					</div>

					<div class="create-field-container" data-create-field="child-container"></div>
				`
			} else {
				fieldCounter++ // генерируем уникальный идентификатор
				const uniqueFieldName = `create_field_${fieldCounter}`
				newField.innerHTML = `
					<div class="create-field-group">
						<div class="field-group field-group--floating">
							<input type="text" class="field field-has-btn" name="${uniqueFieldName}" placeholder=""
								value="${data.value || ''}"
								${createdFieldType === 'constant' ? 'readonly' : ''}>
							<span class="field-floating">${data.placeholder || 'Заглушка'}</span>
							<button type="button" class="btn field-btn field-clear">
								<span class="icon">
									<svg>
										<use xlink:href="img/icons/close-fill.svg#svg-close-fill"></use>
									</svg>
								</span>
							</button>
						</div>

						<div class="create-field-buttons">
							${buttonChildMarkup}
							${buttonRemove}
						</div>
					</div>

					<div class="create-field-container" data-create-field="child-container"></div>
				`
			}


			// Добавляем созданное поле в выбранный контейнер
			parentContainer.appendChild(newField)
			setPlaceholdersForParents(newField, data.placeholder)

			if (createdFieldType === 'select' || createdFieldType === 'image') {
				setTimeout(() => {
					window.initializeChoices()
				})
			}

			// Сброс формы для чистоты (опционально)
			form.reset()

			// Для каждого input обновляем состояние кнопки (например, скрываем её, если значение пустое)
			form.querySelectorAll('.field-has-btn').forEach(input => {
				checkFieldInput(input)
			})


			break
		}
		case 'main-container': {
			// Это контейнер для созданных полей – клик по нему не обрабатываем
			break
		}
		default:
			break
	}
})

document.addEventListener('show.bs.modal', event => {
	const confirmRemoveBtn = event.srcElement.querySelector('[data-remove-field]')
	const title = event.srcElement.querySelector('[data-title-field]')
	const text = event.srcElement.querySelector('[data-text-field]')

	if (confirmRemoveBtn) {
		confirmRemoveBtn.addEventListener('click', (e) => {
			e.preventDefault()

			if (!fieldItemToRemove) return

			// Находим select внутри удаляемого контейнера
			const selectElement = fieldItemToRemove.querySelector('[data-select-choices]')

			// Если select есть, удаляем его из массива choiceElements
			if (selectElement) {
				window.choiceElements = window.choiceElements.filter(item => item.element !== selectElement)
			}

			// Удаляем placeholder из родительских элементов
			const placeholderToRemove = fieldItemToRemove.placeholderToRemove
			if (placeholderToRemove) {
				removePlaceholderFromParents(fieldItemToRemove, placeholderToRemove)
			}

			fieldItemToRemove.remove()

			fieldItemToRemove = null
		})

		setTimeout(() => {
			// Динамически обновляем текст заголовка и описания при открытии модального окна
			if (fieldItemToRemove) {
				const placeholder = fieldItemToRemove.getAttribute('data-fields-placeholder') || '';
				const placeholdersArray = placeholder.split(',').map(p => p.trim()).filter(p => p !== '');

				const firstPlaceholder = placeholdersArray[0];
				const otherPlaceholders = placeholdersArray.slice(1);

				if (firstPlaceholder) {
					title.textContent = `Точно удалить поле «${firstPlaceholder}»?`;
				} else {
					title.textContent = 'Точно удалить поле?';
				}

				if (placeholdersArray.length > 1) {
					const childFieldsText = otherPlaceholders.map(p => `«${p}»`).join(', ');
					text.textContent = `Данное поле родительское. Вместе с ним удалятся дочерние поля ${childFieldsText}.`;
				} else {
					text.textContent = 'Данное поле родительское.';
				}
			}
		})
	}
})
