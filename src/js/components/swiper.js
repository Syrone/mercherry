import Swiper from 'swiper'
// import { Navigation, Pagination } from 'swiper/modules'
// Swiper.use([Navigation, Pagination])

document.querySelectorAll('.swiper-vacancy')?.forEach((element) => {
	const swiper = new Swiper(element, {
		slidesPerView: 3,
		spaceBetween: 16,
	})
})