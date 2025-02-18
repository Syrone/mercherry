import { throttle } from '../functions/throttle.js'

// Функция для обновления ширины одного input
function updateInputWidth(input) {
	const text = input.value || input.placeholder

	// Создаём или переиспользуем canvas для измерения текста
	const canvas = updateInputWidth.canvas || (updateInputWidth.canvas = document.createElement('canvas'))
	const context = canvas.getContext('2d')

	// Получаем вычисленный стиль input, чтобы корректно задать шрифт для canvas
	const computedStyle = window.getComputedStyle(input)
	context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`

	// Измеряем ширину текста
	const textWidth = context.measureText(text).width

	// Добавляем небольшой запас (например, 10px) для комфорта
	input.style.width = (textWidth + 10) + 'px'
}

// Функция для обновления ширины всех input-элементов
function updateAllInputs() {
	document.querySelectorAll('.editable-input').forEach(input => {
		updateInputWidth(input)
	})
}

// Инициализация для всех элементов с классом 'editable-input'
document.querySelectorAll('.editable-input').forEach(input => {
	// Обновляем ширину при изменении текста
	input.addEventListener('input', () => updateInputWidth(input))
	// Обновляем ширину при фокусе/блюре, если нужно
	input.addEventListener('focus', () => updateInputWidth(input))
	input.addEventListener('blur', () => updateInputWidth(input))

	// Начальное обновление
	updateInputWidth(input)
})

// Обновляем все inputs при изменении размера окна
window.addEventListener('resize', throttle(updateAllInputs))