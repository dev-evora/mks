slider = document.querySelectorAll('.slider');
if(slider){
	slider.forEach((el) => {
		var slider = new Swiper(el,{
			// loop: true,
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 2,
			observer: true,
			observeParents: true,
			pagination: {
					el: '.slider-pagination',
					clickable: true,
			},
      navigation: {
				nextEl: '.slider-next',
				prevEl: '.slider-prev',
			},
			breakpoints: {
				576: {
					slidesPerView: 3,
      		slidesPerGroup: 3,
				},
				768: {
					slidesPerView: 4,
      		slidesPerGroup: 4,
				},
				1024: {
					slidesPerView: 5,
      		slidesPerGroup: 5,
				},
				1200: {
					slidesPerView: 6,
      		slidesPerGroup: 6,
				},
				1400: {
					spaceBetween: 30,
					slidesPerView: 6,
      		slidesPerGroup: 6,
				}
			}
		});
	});
}

gallery = document.querySelectorAll('.gallery-slider');
if(gallery){
	gallery.forEach((el) => {
		var gallery = new Swiper(el,{
			// loop: true,
			observer: true,
			observeParents: true,
      navigation: {
				nextEl: '.gallery-next',
				prevEl: '.gallery-prev',
			},
		});
	});
}

card = document.querySelectorAll('.card');
if(card){
	let second = new Swiper(".card-slider__second", {
		spaceBetween: 15,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		direction: "vertical",
		breakpoints: {
			475: {
				slidesPerView: 5
			}
		}
	});
	
	let main = new Swiper(".card-slider__main", {
		thumbs: {
			swiper: second,
		},
	});	
}