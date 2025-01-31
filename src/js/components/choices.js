import Choices from 'choices.js'

window.choiceElements = Array.from(document.querySelectorAll('[data-select-choices]')).map(select => ({
	element: select,
}))

const createSelectConfig = (element) => {
	function getContainerOuterClassNames() {
		let baseClasses = ['choices']
		let additionalClasses = []

		if (element.getAttribute('data-choices-class')) {
			additionalClasses = element.getAttribute('data-choices-class').split(' ')
		}

		return [...baseClasses, ...additionalClasses]
	}

	function shouldEnableSearch(element) {
		return element.options.length > 10
	}

	return {
		allowHTML: true,
		placeholder: true,
		loadingText: 'Загрузка...',
		noResultsText: 'Результаты не найдены',
		noChoicesText: 'Нет вариантов для выбора',
		searchEnabled: shouldEnableSearch(element),
		shouldSort: false,
		classNames: {
			containerOuter: getContainerOuterClassNames(),
		}
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
  if (choice.containerOuter.element.classList.contains('choices--floating')) {
    getSelected[0].placeholder === true
      ? choice.containerOuter.element.classList.remove('is-choice')
      : choice.containerOuter.element.classList.add('is-choice')
  }
}

const initializeChoices = () => {
	window.choiceElements?.forEach((select) => {
		const config = createSelectConfig(select.element)
		const choice = new Choices(select.element, config)
		let getChoiceSelected = getChoiceValue(choice)

		createDropdownSvg(choice)
		addFloatingLabel(choice)
		handleFloatingClass(choice, getChoiceSelected)

		select.element.addEventListener(
			'change',
			function(event) {
				getChoiceSelected = getChoiceValue(choice)

				handleFloatingClass(choice, getChoiceSelected)
			},
			false,
		)
	})
}

initializeChoices()