
$(document).ready(function () {
	//Карусель
	$('.carousel__inner').slick({
		speed: 1300,
		/* adaptiveHeight: true, */  //автовісота картинки
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"</button>',
		/* responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,             //адаптация под размер экрана
					arrows: false
				}
			}
		] */
	});
	//табы(кнопки вібора)
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	//подробнее-назад
	function toggleSlide(item) {
		$(item).each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//modal

	$('[data-model=consultalion]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks ').fadeOut('slow');
	});
	
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	$(document).mouseup(function (e){
		const modalctr = $('.overlay');
		const modal = $('.modal');
		if (!modal.is(e.target) && modal.has(e.target).length === 0){
		modalctr.hide();
		};
});
	$('#consultation-form').validate();
	$('#consultation form').validate({
		errorClass: "invalid" ,
		rules: {
    		name: {
      		required: true,
      		minlength: 2
			},
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
    		name: {
      		required: " Введите имяя",
      		minlength: jQuery.validator.format("Как миниммум {0}  символа")
			},
			phone: "Введите телефон",
			email: {
				required: "Введите почту",
				email: "Неправильно"
			}
		},
		
	});
	$('#order form').validate();
});
