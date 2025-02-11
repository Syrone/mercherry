const chatContainer = document.querySelector('.chat-container')
if (chatContainer) {
	const users = chatContainer.querySelectorAll('.chat-user')
	const contents = chatContainer.querySelectorAll('.chat-content')
	
	function updateChat(target) {
		contents.forEach(content => {
			content.classList.toggle('is-visible', content.dataset.chatRelated === target)
		})
	
		users.forEach(user => {
			user.classList.toggle('is-active', user.dataset.chatTarget === target)
		})
	}

	// Если ни один .chat-user не активен, показываем первый chat-content (preview)
	if (![...users].some(user => user.classList.contains('is-active'))) {
		updateChat('preview')
	}

	chatContainer.addEventListener('click', event => {
		const user = event.target.closest('.chat-user')
		const btnBack = event.target.closest('.btn-back')

		if (user) {
			updateChat(user.dataset.chatTarget)
			chatContainer.classList.add('is-chatting')
		}

		if (btnBack) {
			chatContainer.classList.remove('is-chatting')
			setTimeout(() => {
				updateChat('preview')
			}, 300)
		}
	})

	// Глобальная функция, доступная через window, для выбора определённого user
	window.choiceUserChat = function (target) {
		updateChat(target)
		chatContainer.classList.add('is-chatting')
	}
}

