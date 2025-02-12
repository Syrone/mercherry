import VanillaCalendar from 'vanilla-calendar-pro'

window.initializeCalendar = (element, elementType) => {
	const dropdownCalendar = (self) => {
		const dropdown = self.HTMLElement.closest('.dropdown')
		if (!dropdown) return

		const hiddenInput = dropdown.querySelector('input.visually-hidden')
		const dropdownValue = dropdown.querySelector('.dropdown-toggle-value')
		const dropdownClear = dropdown.querySelector('.btn-clear')

		dropdownValue.innerHTML = ''

		function resetChoice() {
			dropdownValue.textContent = "Все"
			hiddenInput.value = 'all'
			dropdownClear.classList.add('is-hidden')
			self.selectedDates.length = 0
			self.update()
		}

		if (self.selectedDates.every(date => date === undefined)) {
			resetChoice()
		} else {
			hiddenInput.value = self.selectedDates.join(', ')
			dropdownClear.classList.remove('is-hidden')

			if (self.selectedDates.length > 0) {
				const badge = document.createElement('span')
				badge.className = "badge badge--md badge--magenta-250 choices__inner-filter-badge"
				badge.textContent = self.selectedDates.length > 1 ? "2" : "1"

				dropdownValue.appendChild(badge)
			}

			// Закрываем dropdown, если выбрано больше одной даты
			if (self.selectedDates.length > 1) {
				const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]')
				if (toggle && window.dropdownInstances.has(toggle)) {
					window.dropdownInstances.get(toggle).hide()
				}
			}
		}

		dropdown.addEventListener('click', (event) => {
			event.target.closest('.btn-clear') ? resetChoice() : null
		})
	}

	const calendar = new VanillaCalendar(element, {
		type: elementType,
		settings: {
			lang: 'ru',
			visibility: {
				theme: 'light',
				weekend: false,
				daysOutside: false,
			},
			selection: {
				day: elementType === 'multiple' ? 'multiple-ranged' : 'single',
			},
		},
		DOMTemplates: {
			default: `
				<div class="vanilla-calendar-header">
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_prev" data-calendar-arrow="prev">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
					<div class="vanilla-calendar-header__content">
						<#Month />
						<#Year />
					</div>
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_next" data-calendar-arrow="next">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
				</div>
				<div class="vanilla-calendar-wrapper">
					<#WeekNumbers />
					<div class="vanilla-calendar-content">
						<#Week />
						<#Days />
					</div>
				</div>
				<#ControlTime />
			`,
			multiple: `
				<div class="vanilla-calendar-controls">
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_prev" data-calendar-arrow="prev">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_next" data-calendar-arrow="next">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
				</div>
				<div class="vanilla-calendar-grid">
					<#Multiple>
						<div class="vanilla-calendar-column">
							<div class="vanilla-calendar-header">
								<div class="vanilla-calendar-header__content">
									<#Month />
									<#Year />
								</div>
							</div>
							<div class="vanilla-calendar-wrapper">
								<#WeekNumbers />
								<div class="vanilla-calendar-content">
									<#Week />
									<#Days />
								</div>
							</div>
						</div>
					<#/Multiple>
				</div>
				<#ControlTime />
			`,
			year: `
				<div class="vanilla-calendar-header">
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_prev" data-calendar-arrow="prev">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
					<div class="vanilla-calendar-header__content">
						<#Month />
						<#Year />
					</div>
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_next" data-calendar-arrow="next">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
				</div>
				<div class="vanilla-calendar-wrapper">
					<div class="vanilla-calendar-content">
						<#Years />
					</div>
				</div>
			`
		},
		actions: {
			initCalendar(self) {
				dropdownCalendar(self)
			},

			clickDay(e, self) {
				dropdownCalendar(self)
			},

			getDays(day, date, HTMLElement, HTMLButtonElement, self) {
				// Добавляем класс для первого дня месяца
				if (day === 1) {
					HTMLElement.classList.add('vanilla-calendar-day_first');
				}

				// Приводим date к экземпляру Date, если это не так
				let currentDate = date instanceof Date ? date : new Date(date);
				// Находим последний день месяца:
				const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
				if (day === lastDay) {
					HTMLElement.classList.add('vanilla-calendar-day_last');
				}
			},
		},
	})

	calendar.init()
}

document.querySelectorAll('[data-calendar]')?.forEach((element) => {
	let type = element.getAttribute('data-calendar')

	if (!type) {
		type = 'default'
	}

	initializeCalendar(element, type)
})