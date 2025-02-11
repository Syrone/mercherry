document.querySelectorAll('[data-upload-container]').forEach((container) => {
	let fileItemToRemove = null

	const mode = container.getAttribute('data-upload-container')

	// Создаём скрытый инпут для выбора файла(ов)
	const fileInput = document.createElement('input')
	fileInput.type = 'file'
	// Задаём допустимые форматы (при необходимости можно добавить иные)
	fileInput.accept = 'image/png, image/jpeg, image/jpg, image/webp, image/avif'
	// Скрываем стандартное отображение
	fileInput.dataset.upload = 'file'
	// Если режим multiple – разрешаем множественный выбор
	if (mode === 'multiple') {
		fileInput.multiple = true
	}
	// Добавляем инпут в контейнер (можно использовать prepend, append или вставить в нужное место)
	container.appendChild(fileInput)

	// Если режим "select-one", создаём скрытый инпут для хранения выбранного ID файла
	let selectedInput = null
	if (mode === 'select-one') {
		selectedInput = document.createElement('input')
		selectedInput.type = 'hidden'
		selectedInput.name = 'selected_logo'
		selectedInput.dataset.upload = 'selected'
		container.appendChild(selectedInput)
	}

	// Находим контейнер для отображения загруженных файлов и кнопку загрузки
	const uploadContainer = container.querySelector('.upload-container')
	const uploadButton = container.querySelector('[data-upload="button"]')

	uploadButton.addEventListener('click', () => {
		fileInput.click()
	})

	// Список допустимых MIME-типов и ограничение по размеру файла (4 MB)
	const validFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/avif']
	const maxSize = 4 * 1024 * 1024

	fileInput.addEventListener('change', (event) => {
		const files = Array.from(event.target.files)
		if (!files.length) return

		files.forEach(file => {
			if (!validFormats.includes(file.type)) {
				window.showAlert('error', 'Неподдерживаемый формат файла.')
				return
			}
			if (file.size > maxSize) {
				window.showAlert('error', 'Файл слишком большой. Максимальный размер — 4 MB.')
				return
			}

			const reader = new FileReader()
			reader.onload = () => {
				// Генерируем уникальный ID для элемента (можно использовать Date.now() + случайное число)
				const fileId = 'file-' + Date.now() + '-' + Math.floor(Math.random() * 10000)
				let html = ''

				if (mode === 'select-one') {
					// Шаблон для режима выбора одного файла (с радио-кнопкой для выбора)
					html = `
            <label class="upload-item form-check form-radio--default" data-file-id="${fileId}">
              <div class="form-check-checkbox">
                <input type="radio" class="form-check-input" name="logo" value="${fileId}">
                <span class="form-check-checkbox-span"></span>
              </div>
              <div class="upload-item-content">
                <div class="upload-item-picture">
                  <img loading="lazy" src="${reader.result}" class="image" alt="Логотип">
                </div>
                <span class="form-check-label">${file.name}</span>
                <button type="button" class="btn btn-remove">
                  <span class="icon">
                    <svg>
                      <use xlink:href="img/icons/remove.svg#svg-remove"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </label>
          `
				} else if (mode === 'multiple') {
					// Шаблон для множественной загрузки – здесь элемент сразу "выбран" для отправки.
					// В данном примере в форму будет добавлено скрытое поле с base64-представлением файла.
					html = `
            <div class="upload-item upload-item--multiple" data-file-id="${fileId}">
              <div class="upload-item-content">
                <div class="upload-item-picture">
                  <img loading="lazy" src="${reader.result}" class="image" alt="Логотип">
                </div>
                <button type="button" class="btn btn-remove">
                  <span class="icon">
                    <svg>
                      <use xlink:href="img/icons/remove.svg#svg-remove"></use>
                    </svg>
                  </span>
                </button>
                <input type="hidden" name="logos[]" value="${reader.result}">
              </div>
            </div>
          `
				} else {
					// Другой режим – можно задать свой шаблон
					html = `
            <div class="upload-item" data-file-id="${fileId}">
              <div class="upload-item-content">
                <div class="upload-item-picture">
                  <img loading="lazy" src="${reader.result}" class="image" alt="Файл">
                </div>
                <span class="file-name">${file.name}</span>
                <button type="button" class="btn btn-remove">
                  <span class="icon">
                    <svg>
                      <use xlink:href="img/icons/remove.svg#svg-remove"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          `
				}

				// Добавляем новый элемент в контейнер с загруженными файлами
				uploadContainer.insertAdjacentHTML('beforeend', html)
			}

			reader.readAsDataURL(file)
		})

		// Очищаем значение инпута, чтобы можно было загрузить тот же файл повторно
		fileInput.value = ''
	})

	// Делегирование событий для удаления элемента.
	// При клике на кнопку "удалить" соответствующий элемент удаляется из списка.
	container.addEventListener('click', (e) => {
		const removeBtn = e.target.closest('.btn-remove')
		if (!removeBtn) return

		e.preventDefault()
		e.stopPropagation()

		const fileItem = removeBtn.closest('.upload-item')
		if (!fileItem) return

		fileItemToRemove = fileItem

		// Получаем элемент модального окна
		const modalElement = document.getElementById('modal_remove_question')
		if (!modalElement) return

		// Если для этого модального окна не создан экземпляр, создаём его
		if (!window.modalInstances.has(modalElement)) {
			window.initializeModal(modalElement)
		}

		// Показываем модальное окно
		window.modalInstances.get(modalElement).show()
	})

	document.addEventListener('show.bs.modal', event => {
		const confirmRemoveBtn = event.srcElement.querySelector('[data-upload-remove="button"]')

		if (confirmRemoveBtn) {
			confirmRemoveBtn.addEventListener('click', (e) => {
				e.preventDefault()

				// Если элемент для удаления не был сохранён, выходим
				if (!fileItemToRemove) return

				// Находим контейнер загрузки, чтобы проверить режим (например, "select-one")
				const container = fileItemToRemove.closest('[data-upload-container]')
				if (container) {
					const mode = container.getAttribute('data-upload-container')
					if (mode === 'select-one') {
						// Если элемент выбран (radio-элемент отмечен) – очищаем скрытое поле
						const radio = fileItemToRemove.querySelector('input[type="radio"]')
						if (radio && radio.checked) {
							const selectedInput = container.querySelector('input[data-upload="selected"]')
							if (selectedInput) {
								selectedInput.value = ''
							}
						}
					}

					// Удаляем элемент из DOM
					fileItemToRemove.remove()
	
					// Если в контейнере больше нет элементов, очищаем область отображения
					const uploadContainer = container.querySelector('.upload-container')
					if (uploadContainer && !uploadContainer.querySelector('.upload-item')) {
						uploadContainer.innerHTML = ''
					}
				} else {
					// Если по какой-то причине контейнер не найден, просто удаляем элемент
					fileItemToRemove.remove()
				}

				// Сбрасываем глобальную переменную, чтобы не оставить ссылку на удалённый элемент
				fileItemToRemove = null
			})
		}
	})

	// В режиме "select-one" следим за изменением состояния радио-кнопок
	// и записываем значение выбранного файла в скрытое поле
	if (mode === 'select-one' && selectedInput) {
		uploadContainer.addEventListener('change', (e) => {
			const radio = e.target.closest('input[type="radio"]')
			if (radio) {
				selectedInput.value = radio.value
			}
		})
	}
})