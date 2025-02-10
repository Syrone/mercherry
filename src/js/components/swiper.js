import Swiper from 'swiper'
// import { Navigation, Pagination } from 'swiper/modules'
// Swiper.use([Navigation, Pagination])

document.querySelectorAll('.swiper-vacancy')?.forEach((element) => {
	const swiper = new Swiper(element, {
		slidesPerView: 3,
		spaceBetween: 16,

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 12
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 12
			},
			767: {
				slidesPerView: 3,
				spaceBetween: 16
			}
		}
	})
})