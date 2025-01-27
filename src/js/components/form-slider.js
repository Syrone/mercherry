const slides = document.querySelectorAll('.form-slide')
const nextButtons = document.querySelectorAll('.form-slider-next')
const prevButtons = document.querySelectorAll('.form-slider-prev')
const progressBar = document.querySelector('.form-slider-progressbar span') // Прогресс-бар

let currentIndex = 0 // Индекс текущего слайда
const totalSlides = slides.length // Общее количество слайдов

if (totalSlides) {
	// Функция для плавного скрытия слайда
	const fadeOutSlide = (slide, callback) => {
		slide.style.opacity = '0'
	
		// Ожидаем завершения анимации
		slide.addEventListener('transitionend', function onTransitionEnd() {
			slide.style.display = 'none' // Скрываем слайд после завершения анимации
			slide.removeEventListener('transitionend', onTransitionEnd) // Убираем обработчик
			callback && callback() // Выполнить callback после завершения скрытия
		})
	}
	
	// Функция для плавного отображения слайда
	const fadeInSlide = (slide) => {
		slide.style.display = 'block'
		slide.style.opacity = '0' // Начальное состояние
	
		// Ожидаем завершения анимации
		setTimeout(() => {
			slide.style.opacity = '1'
		}, 0)
	}
	
	// Функция для проверки, заполнены ли все обязательные поля на текущем слайде
	const areRequiredFieldsFilled = () => {
		const requiredFields = slides[currentIndex].querySelectorAll('[required]')
		return Array.from(requiredFields).every(input => input.value.trim() !== '')
	}
	
	// Добавление обработчиков на обязательные поля для обновления кнопки "Далее"
	const addRequiredFieldListeners = () => {
		const requiredFields = slides[currentIndex].querySelectorAll('[required]')
		requiredFields.forEach(field => {
			field.addEventListener('input', updateNextButton) // Обновляем прогресс и состояние кнопки при любом изменении
			field.addEventListener('change', updateNextButton) // Обновляем при изменении значения
		})
	}
	
	// Функция для обновления прогресс-бара
	const updateProgressBar = () => {
		const progress = (currentIndex / totalSlides) * 100 // Рассчитываем процент
		progressBar.style.width = `${currentIndex === 0 ? 5 : progress}%`
	}
	
	const updateNextButton = () => {
		const nextButton = nextButtons[currentIndex]
		if (areRequiredFieldsFilled()) {
			nextButton.removeAttribute('disabled') // Включаем кнопку, если все поля заполнены
		} else {
			nextButton.setAttribute('disabled', 'true') // Отключаем кнопку, если поля не заполнены
		}
	}
	
	// Функция для показа текущего слайда
	const showSlide = (index) => {
		const currentSlide = slides[currentIndex]
		const nextSlide = slides[index]
	
		if (currentSlide === nextSlide) return // Если текущий слайд тот же, ничего не делаем
	
		// Сначала скрываем текущий слайд
		fadeOutSlide(currentSlide, () => {
			// После завершения скрытия показываем следующий слайд
			fadeInSlide(nextSlide)
			currentIndex = index // Обновляем текущий индекс
			progressBar ? updateProgressBar() : null // Обновляем прогресс-бар
			nextButtons.length ? updateNextButton() : null
		})
	}
	
	// Обработчики для кнопок "Далее"
	nextButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (currentIndex < slides.length - 1) {
				showSlide(currentIndex + 1)
				addRequiredFieldListeners() // Добавляем обработчики на поля нового слайда
			}
		})
	})
	
	// Обработчики для кнопок "Назад"
	prevButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (currentIndex > 0) {
				showSlide(currentIndex - 1)
				addRequiredFieldListeners() // Добавляем обработчики на поля нового слайда
			}
		})
	})
	
	// Инициализация: скрыть все слайды, кроме первого и обновить прогресс-бар
	slides.forEach((slide, index) => {
		if (index !== currentIndex) {
			slide.style.display = 'none'
			slide.style.opacity = '0'
		}
	})
	
	// Показать первый слайд и установить начальный прогресс
	fadeInSlide(slides[currentIndex])
	progressBar ? updateProgressBar() : null
	nextButtons.length ? updateNextButton() : null
	addRequiredFieldListeners() // Добавляем обработчики для обязательных полей первого слайда
}
