/**
 * main.js
 */

// fancybox
$('[data-fancybox]').fancybox({
	touch: false,
	autoFocus: false,
	backFocus: false,
	closeExisting: true
});

// mask phone
const maskPhone = () => {
	let maskedElements = [],
			el = document.querySelectorAll('.masked');
	if (el.length > 0) {
		const mask = { mask: '+7 (000) 000-00-00' };
		el.forEach(item => {
			maskedElements.push(new IMask(item, mask));
		});
	}
	$('.masked').click(function () {
		if ($(this).val() == '') $(this).val('+7 ');
	});
}

maskPhone();

$('.catalog-tabs li').click(function(){
	let id = $(this).attr('data-id');

	$('.catalog-tabs li').removeClass('active');
	$(this).addClass('active');

	$('.catalog-tab').removeClass('active');
	$('.catalog-tab[data-id='+id+']').addClass('active');
});

$('.section-product__switch li').click(function(){
	$('.section-product__switch li').removeClass('active');
	$(this).addClass('active');
});

if($('.delivery').next().hasClass('help')){
	$('.delivery').addClass('padding');
}

$('.info-main li').click(function(){
	$('.info-main li').removeClass('active');
	$(this).addClass('active');

	$('.info-second').show();
	$('.info-img').hide();
	$('.info-second li').removeClass('active');
})

$('.info-second li').click(function(){
	$('.info-second li').removeClass('active');
	$(this).addClass('active');

	let img = $(this).attr('data-img');
	$('.info-img img').attr('src', img);

	let link  = $(this).attr('data-link'),
			gost 	= $(this).attr('data-gost');
	$('.info-img a').attr('href', link).text(gost);
	
	let mainTitle = $('.info-main li.active').text(),
			secondTitle = $('.info-second li.active').text();
	$('.info-img .title-sm').text(mainTitle + ' - ' + secondTitle);

	$('.info-img').show();
})

$(".link-scroll").on("click", function (event) {
	event.preventDefault();
	let id  = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, 1500);
});

$('.price .price-section__title, .price .price-subsection__title').click(function(){
	$(this).next().slideToggle();
})

$('.price-control__all').click(function(){
	$('.price-table').slideDown();
})

$('.header-burger').click(function(){
	$('.header-menu').toggleClass('show')
	if($('.header').hasClass('fixed')){
		$('.header').toggleClass('white')
	}
})

$('.header-service__open').click(function(){
	$(this).toggleClass('active')
	$('.header-service').slideToggle();
})

$(function () {
	var e = $(".file p").html();
	$.parseHTML(e);
	$(".file input:file").change(function () {
			if ((this.files && this.files.length >= 1)) {
					var t = this.files[0],
							n = new FileReader();
					(n.onload = function (e) {
							$(".file p").text(t.name).addClass("upload");
					}),
							n.readAsDataURL(t);
			} else $(".file p").html(e).removeClass("upload");
	});
});

rollet = document.querySelectorAll('.rollet-slider');
if(rollet){
	let total = $('.rollet-slider__img li').length;
	let ms = 5000;

	let interval;
	let timer = function(){
		interval = setInterval(function(){
			let bullet = $('.rollet-slider__img').find('.active'),
					slide = $('.rollet-slider__content').find('.active'),
					slideID = bullet.attr('data-slide');
		
			if(slideID == total){
				$('.rollet-slider__img li[data-slide=1]').addClass('active');
				$('.rollet-slider__item[data-slide=1]').addClass('active');
			}

			bullet.removeClass('active');
			bullet.next().addClass('active');

			slide.removeClass('active');
			slide.next().addClass('active');	
		}, ms);
	};

	timer();

	$('.rollet-slider__img li').click(function(){
		let id = $(this).attr('data-slide');

		$('.rollet-slider__img li').removeClass('active');
		$(this).addClass('active')

		$('.rollet-slider__item').removeClass('active');
		$('.rollet-slider__item[data-slide='+id+']').addClass('active');

		clearInterval(interval);
   	timer();
	})
}