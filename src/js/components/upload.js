document.querySelectorAll('.upload').forEach((element) => {
	const logoInput = element.querySelector('[data-upload="file"]')
	const logoList = element.querySelector('.upload-container')
	const selectedLogoInput = element.querySelector('[data-upload="selected"]')
	const uploadButton = element.querySelector('[data-upload="button"]')

	uploadButton.addEventListener('click', () => {
		logoInput.click()
	})

	logoInput.addEventListener('change', (event) => {
		const file = event.target.files[0]
		const validFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/avif']

		if (!file) return

		if (!validFormats.includes(file.type)) {
			alert('Неподдерживаемый формат файла.')
			return
		}

		if (file.size > 4 * 1024 * 1024) {
			alert('Файл слишком большой. Максимальный размер — 4 MB.')
			return
		}

		const reader = new FileReader()
		reader.onload = () => {
			const logoId = Date.now()
			const logoHTML = `
							<label class="upload-item form-check form-radio--default" data-logo-id="${logoId}">
									<div class="form-check-checkbox">
											<input type="radio" class="form-check-input" name="logo" value="${logoId}" onchange="selectLogo('${logoId}')">
											<span class="form-check-checkbox-span"></span>
									</div>
									<div class="upload-item-content">
											<div class="upload-item-picture">
													<img loading="lazy" src="${reader.result}" class="image" alt="Логотип">
											</div>
											<span class="form-check-label">
													${file.name}
											</span>
											<button type="button" class="btn btn-remove" onclick="removeLogo('${logoId}')">
													<span class="icon">
															<svg>
																	<use xlink:href="img/icons/remove.svg#svg-remove"></use>
															</svg>
													</span>
											</button>
									</div>
							</label>
					`
			logoList.insertAdjacentHTML('beforeend', logoHTML)
		}
		reader.readAsDataURL(file)
	})

	window.selectLogo = function (logoId) {
		selectedLogoInput.value = logoId
	}

	window.removeLogo = function (logoId) {
		const logoItem = document.querySelector(`[data-logo-id="${logoId}"]`)
		if (logoItem) {
			logoItem.remove()
			if (selectedLogoInput.value === logoId) {
				selectedLogoInput.value = ''
			}
		}
	}
})