document.querySelectorAll(".slider").forEach(slider => {
	const valueDisplay = slider.closest(".slider-container").querySelector(".slider-value")

	function updateValue() {
		const min = parseInt(slider.min)
		const max = parseInt(slider.max)
		const value = parseInt(slider.value)

		valueDisplay.textContent = `${value.toLocaleString()} ₽`

		// Обновляем CSS-переменную для заливки
		const percent = ((value - min) / (max - min)) * 100
		slider.style.setProperty("--progress", `${percent}%`)
	}

	slider.addEventListener("input", updateValue)

	updateValue() // Обновляем при загрузке страницы
})
