window.isMobileDevice = () => {
	const ua = navigator.userAgent.toLowerCase()
	return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)
}

function adjustChatContainerHeight() {
	const chatContainer = document.querySelector('.chat-container')
	if (!chatContainer) return

	// Получаем отступ сверху относительно документа
	const topOffset = chatContainer.getBoundingClientRect().top
	const windowHeight = window.innerHeight

	// Вычисляем доступную высоту
	const availableHeight = windowHeight - topOffset

	// Устанавливаем высоту для .chat-container
	chatContainer.style.height = availableHeight + 'px'
}

const events = [
	// Изменение размеров окна – слушаем на объекте window
	{ type: 'resize', target: window },
	{ type: 'DOMContentLoaded', target: document },

	// События Bootstrap – обычно срабатывают на document
	{ type: 'shown.bs.collapse', target: document },
	{ type: 'hidden.bs.collapse', target: document },
]

// Регистрируем для каждого события слушатель, вызывающий adjustChatContainerHeight
events.forEach(eventObj => {
	eventObj.target.addEventListener(eventObj.type, (event) => {
		setTimeout(() => adjustChatContainerHeight(), 310)
	})
})
