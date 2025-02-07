// Глобальная функция для создания уведомлений
window.showAlert = (type, message) => {
	// Определяем классы и иконки в зависимости от типа уведомления
	const alertClass = type === 'success' ? 'alert--success' : 'alert--error'
	const iconSrc = type === 'success' ? 'img/icons/success.svg' : 'img/icons/error.svg'
	const iconClass = type === 'success' ? 'image-success' : 'image-error'

	// Создаём элемент уведомления
	const alert = document.createElement('div')
	alert.className = `alert ${alertClass}`

	alert.innerHTML = `
			<div class="alert-content">
					<img loading="lazy" src="${iconSrc}" class="image ${iconClass}" width="24" height="24" alt="Иконка">
					<p>${message}</p>
			</div>
			<button type="button" class="btn btn-close">
					<span class="icon">
							<svg>
									<use xlink:href="img/icons/close.svg#svg-close"></use>
							</svg>
					</span>
			</button>
	`

	// Добавляем уведомление в контейнер
	const container = document.querySelector('.alert-container')
	container.appendChild(alert)

	setTimeout(() => {
		alert.style.transform = 'translateX(0vw)' // Анимация появления
	}, 10)

	setTimeout(() => {
		alert.style.transform = '' // Скрываем уведомление
		setTimeout(() => {
			alert.remove() // Удаляем из DOM через 400 мс
		}, 400)
	}, 3000)

	// Обработчик для кнопки закрытия
	alert.querySelector('.btn-close').onclick = function () {
		alert.style.transform = '' // Скрываем уведомление
		setTimeout(() => {
			alert.remove() // Удаляем из DOM через 400 мс
		}, 400)
	}
}