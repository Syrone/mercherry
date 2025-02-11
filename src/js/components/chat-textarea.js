/**
 * Функция инициализирует синхронизацию значения textarea с data-атрибутом контейнера.
 * @param {HTMLElement} container - Элемент-контейнер с классом .chat-textarea-container
 */
const initSyncTextarea = (element) => {
	// Находим textarea внутри контейнера
	const container = element.querySelector('.chat-textarea-container')
	const textarea = container.querySelector('textarea')
	if (!textarea) return

	// Определяем имя data-атрибута для обновления:
	// Если у контейнера задан атрибут data-sync-attr, используем его значение, иначе — 'data-message'
	const dataAttrName = container.getAttribute('data-sync-attr') || 'data-message'

	// Функция для обновления data-атрибута контейнера значением из textarea.
	const updateDataAttr = () => {
		// При желании можно добавить дополнительную обработку значения (например, trim)
		container.setAttribute(dataAttrName, textarea.value)
	}

	// Сразу устанавливаем значение при загрузке страницы
	updateDataAttr()

	// Обновляем data-атрибут при каждом изменении содержимого textarea
	textarea.addEventListener('input', updateDataAttr)
}

// Ищем все контейнеры на странице с классом .chat-textarea-container
const chatTextareas = document.querySelectorAll('.chat-textarea')
chatTextareas.forEach(initSyncTextarea)

// Делегирование событий для установки фокуса
document.addEventListener('click', (event) => {
	const element = event.target.closest('.chat-textarea')
	if (element) {
		const textarea = element.querySelector('textarea')
		if (textarea) textarea.focus()
	}
})