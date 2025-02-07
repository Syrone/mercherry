import Choices from 'choices.js'

window.choiceElements = Array.from(document.querySelectorAll('[data-select-choices]')).map(select => ({
	element: select,
}))

window.getChoiceValue = (choice) => {
	return Array.isArray(choice.getValue())
		? choice.getValue()
		: [choice.getValue()]
}

window.initializeChoices = () => {
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
			resetScrollPosition: false,
			searchEnabled: shouldEnableSearch(element),
			searchFields: ['label'],
			shouldSort: false,
			classNames: {
				containerOuter: getContainerOuterClassNames(),
			},
			callbackOnCreateTemplates: function (template) {
				return {
					item: ({ classNames }, data) => {
						let itemTemplate = ``

						const dataSelectChoices = this.passedElement.element.getAttribute('data-select-choices') || ''
						const choicesTypes = dataSelectChoices.split(' ').filter(Boolean)

						if (choicesTypes.includes('filter')) {
							itemTemplate = `
								<div class="${classNames.item} ${data.highlighted
									? classNames.highlightedState
									: classNames.itemSelectable
								} ${data.placeholder ? classNames.placeholder : ''
								}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''
								} ${data.disabled ? 'aria-disabled="true"' : ''}>
									<span>${data.label}</span>
								</div>
							`
						}
						else {
							itemTemplate = `
								<div class="${classNames.item} ${data.highlighted
									? classNames.highlightedState
									: classNames.itemSelectable
								} ${data.placeholder ? classNames.placeholder : ''
								}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''
								} ${data.disabled ? 'aria-disabled="true"' : ''}>
									<span class="${classNames.item}-value">${data.label}</span>
								</div>
							`
						}

						return template(itemTemplate)
					},
					choice: ({ classNames }, data) => {
						let choiceTemplate = ``

						const dataSelectChoices = this.passedElement.element.getAttribute('data-select-choices') || ''
						const choicesTypes = dataSelectChoices.split(' ').filter(Boolean)

						if (choicesTypes.includes('default-radio')) {
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
						}
						else if (choicesTypes.includes('multiple')) {
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
						}
						else if (choicesTypes.includes('multiple-checkbox')) {
							choiceTemplate = `
								<div class="${classNames.item} ${classNames.itemChoice} ${data.selected ? 'is-selected' : ''} ${data.placeholder ? 'is-placeholder' : ''} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
									data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled
									? 'data-choice-disabled aria-disabled="true"'
									: 'data-choice-selectable'
								} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
								}>
	
									<div class="form-check form-check--default">
										<div class="form-check-checkbox">
											<div class="form-check-input"></div>
											<span class="form-check-checkbox-span">
												<span class="icon icon-check">
													<svg>
														<use xlink:href="img/icons/check.svg#svg-check"></use>
													</svg>
												</span>
	
												<span class="icon icon-disabled">
													<svg>
														<use xlink:href="img/icons/minus.svg#svg-minus"></use>
													</svg>
												</span>
											</span>
										</div>
									</div>
	
									<span>${data.label}</span>
								</div>
							`
						}
						else {
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
		iconSpan.classList.add('icon', `${choice.config.classNames.containerInner}-dropdown`)
		let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		let useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use')
		useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/icons/dropdown.svg#svg-dropdown')
		svgElement.appendChild(useElement)
		iconSpan.appendChild(svgElement)
		return iconSpan
	}

	const createFilterPlaceholder = (choice) => {
		const el = document.createElement('span')
		el.className = `${choice.config.classNames.containerInner}-filter-placeholder`
		el.textContent = choice._placeholderValue
		return el
	}

	const createFilterBadge = (choice) => {
		const el = document.createElement('span')
		el.className = `badge badge--md badge--magenta-250 ${choice.config.classNames.containerInner}-filter-badge is-hidden`
		return el
	}

	const createClearButton = (choice) => {
		const el = document.createElement('button')
		el.type = 'button'
		el.className = `btn btn-sm btn-clear ${choice.config.classNames.containerInner}-clear is-hidden`
		el.innerHTML = `
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/close-clear.svg#svg-close-clear"></use>
				</svg>
			</span>
		`
		return el
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

	// Функция для обработки логики выбора "all"
	// Параметры:
	// - choice: экземпляр Choices для конкретного селекта
	// - prevSelectedValues: массив предыдущих выбранных значений (строк)
	// Возвращает обновлённый массив выбранных значений после выполнения логики "all"
	const processAllSelection = (choice, prevSelectedValues) => {
		// Получаем текущий выбор в виде массива строк
		let currentSelected = getChoiceValue(choice).map(item => item.value)

		// Если "all" выбран сейчас, а ранее его не было — удаляем все остальные варианты
		if (!prevSelectedValues.includes('all') && currentSelected.includes('all')) {
			currentSelected
				.filter(val => val !== 'all')
				.forEach(val => {
					choice.removeActiveItemsByValue(val)
				})
		}
		// Если ранее был выбран "all", а теперь в выборе и "all" и другая опция — удаляем "all"
		else if (prevSelectedValues.includes('all') && currentSelected.includes('all') && currentSelected.length > 1) {
			choice.removeActiveItemsByValue('all')
		}

		// Если выбраны все индивидуальные варианты (т.е. все варианты, кроме "all"),
		// то снимаем весь выбор и устанавливаем только "all"
		const allOptions = choice.config.choices
			.map(ch => ch.value)
			.filter(val => val && val !== 'all')

		if (allOptions.length && allOptions.every(val => currentSelected.includes(val))) {
			choice.removeActiveItems()
			choice.setChoiceByValue('all')
		}

		// Возвращаем обновлённый массив выбранных значений
		return getChoiceValue(choice).map(item => item.value)
	}

	const handleChoiceClass = (choice, getSelected) => {
		if (getSelected.length) {
			getSelected[0].placeholder === true
				? choice.containerOuter.element.classList.remove('is-choice')
				: choice.containerOuter.element.classList.add('is-choice')
		} else {
			choice.containerOuter.element.classList.remove('is-choice')
		}
	}

	const handleChoiceFilter = (choice, dropdownSvg, choiceItemList, filterBadge, clearButton) => {
		const getChoiceSelected = getChoiceValue(choice)

		filterBadge.textContent = `${getChoiceSelected.length}`

		if (getChoiceSelected.length > 1) {
			// dropdownSvg.classList.add('is-hidden')
			choiceItemList.classList.add('is-hidden')
			filterBadge.classList.remove('is-hidden')
			clearButton.classList.remove('is-hidden')
		} else if (getChoiceSelected.length < 2) {
			// dropdownSvg.classList.remove('is-hidden')
			choiceItemList.classList.remove('is-hidden')
			filterBadge.classList.add('is-hidden')
			clearButton.classList.add('is-hidden')
		}
	}

	window.choiceElements?.forEach((select) => {

		if (select.element.closest('.choices')) { return }

		const config = createSelectConfig(select.element)
		const choice = new Choices(select.element, config)
		const choicesAttr = choice.passedElement.element.getAttribute('data-select-choices').split(' ') || ''
		const choiceHasMultiple = choice.passedElement.element.hasAttribute('multiple')
		const choiceHasFilter = choicesAttr.includes('filter')

		const choiceContainerOuter = choice.containerOuter.element
		const choiceContainerInner = choice.containerInner.element
		const choiceItemList = choice.itemList.element
		const choiceDropdown = choice.dropdown.element

		let filterPlaceholder, filterBadge, clearButton, dropdownSvg
		let getChoiceSelected = getChoiceValue(choice)
		let prevSelectedValues = getChoiceSelected.map(item => item.value)

		dropdownSvg = createDropdownSvg(choice)
		choiceContainerInner.append(dropdownSvg)
		addFloatingLabel(choice)
		handleChoiceClass(choice, getChoiceSelected)

		choice.passedElement.element.addEventListener("choice", function (event) {
			const { value, selected } = event.detail.choice // Получаем значение выбранного элемента

			setTimeout(() => {
				if (choiceHasMultiple) {
					if (selected) {
						choice.removeActiveItemsByValue(value) // Удаляем элемент из выбранных

						const event = new Event("change")
						choice.passedElement.element.dispatchEvent(event)
					}
				}

				getChoiceSelected = getChoiceValue(choice)
				handleChoiceClass(choice, getChoiceSelected)
			})

		})

		choice.passedElement.element.addEventListener("change", function (event) {
			if (choiceHasMultiple) {
				prevSelectedValues = processAllSelection(choice, prevSelectedValues)
			}

			if (choiceHasFilter) {
				handleChoiceFilter(choice, dropdownSvg, choiceItemList, filterBadge, clearButton)
			}
		})

		choice.passedElement.element.addEventListener("showDropdown", function (event) {
			const dropdownRect = choiceDropdown.getBoundingClientRect()
			const windowWidth = window.innerWidth

			// Если выпадающий список выходит за правую границу экрана
			if (dropdownRect.right > windowWidth) {
				choiceContainerOuter.classList.add('is-flipped-x')
			} else {
				choiceContainerOuter.classList.remove('is-flipped-x')
			}
		})

		choice.passedElement.element.addEventListener("hideDropdown", function (event) {
			choiceContainerOuter.classList.remove('is-flipped-x')
		})

		if (choiceHasMultiple) {
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

		if (choiceHasFilter) {
			filterPlaceholder = createFilterPlaceholder(choice)
			filterBadge = createFilterBadge(choice)
			clearButton = createClearButton(choice)

			choiceContainerInner.prepend(filterPlaceholder)
			choiceContainerInner.append(filterBadge, clearButton)

			// Обработчик клика на clearButton
			clearButton.addEventListener('click', function () {
				// Очищаем выбор
				choice.removeActiveItems()

				// Устанавливаем "all" как выбранное значение
				choice.config.choices.some(item => item.value === "all") ? choice.setChoiceByValue('all') : null

				// Скрываем фильтры и кнопки
				filterBadge.classList.add('is-hidden')
				clearButton.classList.add('is-hidden')
				choiceItemList.classList.remove('is-hidden')

				// Скрываем общую кнопку сброса
				if (choice.passedElement.element.closest('[data-filter-choices]')) {
					const event = new Event("clearButtonHidden")
					choice.passedElement.element.closest('[data-filter-choices]').dispatchEvent(event)
				}
			})

			handleChoiceFilter(choice, dropdownSvg, choiceItemList, filterBadge, clearButton)
		}

		if (select.element.closest('[data-filter-choices]')) {
			// Сохраняем экземпляр в свойстве элемента, чтобы потом его можно было найти
			select.choicesInstance = choice
		}

		document.addEventListener('show.bs.dropdown', event => {
			choice.hideDropdown()
		})
	})
}

initializeChoices()

// Проходим по всем контейнерам с data-filter-choices
document.querySelectorAll('[data-filter-choices]').forEach(container => {
	const pushArrayInArray = (arrayMain, arrayOut, choiceId) => {
		const existingEntry = arrayMain.find(item => item.id === choiceId)

		if (existingEntry) {
			// Обновляем данные
			existingEntry.selected = arrayOut
		} else {
			// Если вдруг не нашли, добавляем (на всякий случай)
			arrayMain.push({
				id: choiceId,
				selected: arrayOut
			})
		}
	}

	const toggleClearButton = (array) => {
		const hasSelected = array.some(item => item && item.selected.length > 0)
		clearButton ? clearButton.classList.toggle('is-hidden', !hasSelected) : null
	}

	const filterChoicesArray = []
	// Ищем кнопку очистки внутри контейнера
	const clearButton = container.querySelector('.filter-header-clear')

	window.choiceElements.forEach(item => {
		// Проверяем, что этот select находится в данном контейнере
		if (item.element.closest('[data-filter-choices]') === container && item.choicesInstance) {
			const choicesInstance = item.choicesInstance

			let getChoiceSelected = getChoiceValue(choicesInstance).filter(item => item && item.value !== "all")

			pushArrayInArray(filterChoicesArray, getChoiceSelected, choicesInstance._baseId)

			choicesInstance.passedElement.element.addEventListener("change", function (event) {
				getChoiceSelected = getChoiceValue(choicesInstance).filter(item => item && item.value !== "all")

				pushArrayInArray(filterChoicesArray, getChoiceSelected, choicesInstance._baseId)

				toggleClearButton(filterChoicesArray)
			})
		}
	})

	if (clearButton) {
		clearButton.addEventListener('click', () => {
			// Проходим по всем Choice, сохранённым в глобальной переменной
			window.choiceElements.forEach(item => {
				// Проверяем, что этот select находится в данном контейнере
				if (item.element.closest('[data-filter-choices]') === container && item.choicesInstance) {
					const choicesInstance = item.choicesInstance

					// Сбрасываем выбранные элементы
					choicesInstance.removeActiveItems()

					// Если в конфигурации присутствует вариант "all", выбираем его
					if (choicesInstance.config.choices.some(choice => choice.value === "all")) {
						choicesInstance.setChoiceByValue('all')
					}

					const event = new Event("change")
					choicesInstance.passedElement.element.dispatchEvent(event)
				}
			})
		})
	}

	toggleClearButton(filterChoicesArray)

	container.addEventListener('clearButtonHidden', () => {
		window.choiceElements.forEach(item => {
			// Проверяем, что этот select находится в данном контейнере
			if (item.element.closest('[data-filter-choices]') === container && item.choicesInstance) {
				const choicesInstance = item.choicesInstance

				let getChoiceSelected = getChoiceValue(choicesInstance).filter(item => item && item.value !== "all")

				pushArrayInArray(filterChoicesArray, getChoiceSelected, choicesInstance._baseId)
			}
		})

		toggleClearButton(filterChoicesArray)
	})
})