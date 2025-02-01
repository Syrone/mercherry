import Choices from 'choices.js'

window.choiceElements = Array.from(document.querySelectorAll('[data-select-choices]')).map(select => ({
	element: select,
}))

const createSelectConfig = (element) => {
	function getContainerOuterClassNames() {
		let baseClasses = ['choices']
		let additionalClasses = []

		if (element.getAttribute('data-choices-class')) {
			additionalClasses.push(element.getAttribute('data-choices-class'))
			// additionalClasses = element.getAttribute('data-choices-class').split(' ')
		}

		return additionalClasses.length > 0
			? `${baseClasses} ${additionalClasses.join(' ')}`
			: baseClasses
	}

	function shouldEnableSearch(element) {
		return element.options.length > 10
	}

	return {
		allowHTML: true,
		placeholder: true,
		removeItems: false,
		loadingText: 'Загрузка...',
		noResultsText: 'Результаты не найдены',
		noChoicesText: 'Нет вариантов для выбора',
		renderSelectedChoices: 'always',
		searchEnabled: shouldEnableSearch(element),
		searchFields: ['label'],
		shouldSort: false,
		classNames: {
			containerOuter: getContainerOuterClassNames(),
		},
		callbackOnCreateTemplates: function (template) {
			return {
				// item: ({ classNames }, data) => {

				// 	let itemTemplate = ``

				// 	switch (this.containerOuter.element.getAttribute('data-type')) {
				// 		case 'select-multiple':
				// 			itemTemplate = `
				//         <div class="${classNames.item} ${data.highlighted
				// 					? classNames.highlightedState
				// 					: classNames.itemSelectable
				// 				} ${data.placeholder ? classNames.placeholder : ''
				// 				}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''
				// 				} ${data.disabled ? 'aria-disabled="true"' : ''}>
				//           ${data.label}
				//         </div>
				//       `
				// 			break

				// 		default:
				// 			itemTemplate = `
				//       <div class="${classNames.item} ${data.highlighted
				// 					? classNames.highlightedState
				// 					: classNames.itemSelectable
				// 				} ${data.placeholder ? classNames.placeholder : ''
				// 				}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''
				// 				} ${data.disabled ? 'aria-disabled="true"' : ''}>
				//         ${hasChoiceFloating ?
				// 					`
				//           <span class="${classNames.item}-floating">${this.config.choices[0].label}</span>
				//           <span class="${classNames.item}-value">${data.label}</span>
				//           ` :
				// 					`${data.label}`
				// 				}
				//       </div>
				//       `
				// 	}

				// 	return template(itemTemplate)
				// },
				choice: ({ classNames }, data) => {
					let choiceTemplate = ``

					switch (this.passedElement.element.getAttribute('data-select-choices')) {
						case 'default-radio':
							choiceTemplate = `
								<div class="${classNames.item} ${classNames.itemChoice} ${data.selected ? 'is-selected' : ''} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable} ${data.placeholder ? 'is-placeholder' : ''}"
									data-select-text="${this.config.itemSelectText}"
									data-choice ${data.disabled
									? 'data-choice-disabled aria-disabled="true"'
									: 'data-choice-selectable'
								}
									data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}
								>

									<div class="form-check form-radio--default">
										<div class="form-check-checkbox">
											<div class="form-check-input"></div>
											<span class="form-check-checkbox-span"></span>
										</div>
									</div>

									<span>${data.label}</span>
								</div>
							`
							break

						case 'multiple':
							choiceTemplate = `
								<div class="${classNames.item} ${classNames.itemChoice} ${data.selected ? 'is-selected' : ''} ${data.placeholder ? 'is-placeholder' : ''} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
									data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled
									? 'data-choice-disabled aria-disabled="true"'
									: 'data-choice-selectable'
								} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
								}>
									<span>${data.label}</span>
								</div>
							`
							break

						default:
							choiceTemplate = `
								<div class="${classNames.item}
									${classNames.itemChoice}
									${data.selected ? 'is-selected' : ''}
									${data.placeholder ? 'is-placeholder' : ''}
									${data.disabled ? classNames.itemDisabled : classNames.itemSelectable
								}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled
									? 'data-choice-disabled aria-disabled="true"'
									: 'data-choice-selectable'
								} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
								}>
									<span>${data.label}</span>
								</div>
							`
					}
					return template(choiceTemplate)
				},
			}
		},
	}
}

const createDropdownSvg = (choice) => {
	let iconSpan = document.createElement('span')
	iconSpan.classList.add('icon', 'choices__inner-dropdown')
	let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
	let useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use')
	useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/icons/dropdown.svg#svg-dropdown')
	svgElement.appendChild(useElement)
	iconSpan.appendChild(svgElement)
	choice.containerInner.element.appendChild(iconSpan)
}

const addFloatingLabel = (choice) => {
	// Проверяем, есть ли у choice.containerOuter.element класс `choices--floating`
	if (choice.containerOuter.element.classList.contains('choices--floating')) {
		// Создаём span с классом `field-floating`
		const floatingLabel = document.createElement('span')
		floatingLabel.classList.add('field-floating')

		// Устанавливаем значение из choice._placeholderValue
		floatingLabel.textContent = choice._placeholderValue

		// Добавляем span внутрь choice.containerInner.element после всех элементов
		choice.containerInner.element.appendChild(floatingLabel)
	}
}

const getChoiceValue = (choice) => {
	return Array.isArray(choice.getValue())
		? choice.getValue()
		: [choice.getValue()]
}

const handleFloatingClass = (choice, getSelected) => {
	if (getSelected.length) {
		if (choice.containerOuter.element.classList.contains('choices--floating')) {
			getSelected[0].placeholder === true
				? choice.containerOuter.element.classList.remove('is-choice')
				: choice.containerOuter.element.classList.add('is-choice')
		}
	} else {
		choice.containerOuter.element.classList.remove('is-choice')
	}
}

const initializeChoices = () => {
	window.choiceElements?.forEach((select) => {
		const config = createSelectConfig(select.element)
		const choice = new Choices(select.element, config)
		const choiceDropdown = choice.dropdown.element

		let getChoiceSelected = getChoiceValue(choice)

		createDropdownSvg(choice)
		addFloatingLabel(choice)
		handleFloatingClass(choice, getChoiceSelected)

		choice.passedElement.element.addEventListener("choice", function (event) {
			const { value, selected } = event.detail.choice // Получаем значение выбранного элемента

			setTimeout(() => {
				if (choice.passedElement.element.hasAttribute('multiple')) {
					if (selected) {
						choice.removeActiveItemsByValue(value) // Удаляем элемент из выбранных
					}
				}

				getChoiceSelected = getChoiceValue(choice)
				handleFloatingClass(choice, getChoiceSelected)
			})
		})

		// choice.passedElement.element.addEventListener("change", function (event) {

		// })

		if (choice.passedElement.element.hasAttribute('multiple')) {
			const choiceInput = choice.input.element
			
			choiceInput.classList.add('field', 'field-has-btn', 'field--md')

			// Создаём div с классом field-group
			const fieldGroup = document.createElement("div")
			fieldGroup.classList.add("field-group")
			choice._presetOptions.length < 10 ? fieldGroup.classList.add("is-hidden") : fieldGroup.classList.remove("is-hidden")

			// Создаём кнопку
			const button = document.createElement("button")
			button.type = "button"
			button.classList.add("btn", "field-btn", "field-clear")

			// Создаём span.icon
			const span = document.createElement("span")
			span.classList.add("icon")

			// Создаём svg
			const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
			const use = document.createElementNS("http://www.w3.org/2000/svg", "use")
			// Используем setAttributeNS с нужным пространством имён для xlink
			use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "img/icons/close-fill.svg#svg-close-fill")

			// Вкладываем элементы друг в друга
			svg.appendChild(use)
			span.appendChild(svg)
			button.appendChild(span)

			// Добавляем choiceInput и кнопку в fieldGroup
			fieldGroup.appendChild(choiceInput)
			fieldGroup.appendChild(button)

			// Добавляем field-group в начало choiceDropdown
			choiceDropdown.prepend(fieldGroup)
		}


	})
}

initializeChoices()