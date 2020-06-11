$(document).ready(function() {
	$('.burger__link').click(function() {
		$('.menu').slideToggle('300')
		$('.burger:first-child').toggleClass('top')
		$('.burger:nth-child(2)').toggleClass('middle')
		$('.burger:last-child').toggleClass('bottom');
	});
	$('.who-we-are__slider').slick({
		// infinite: true,
		slidesToShow: 2
	});
	$('.header__button').click(function() {
		$('.feedback').fadeToggle(500);
		$('body').css('overflow', 'hidden');
	});

	$('.free-consultation__close, .feedback__wrapper').click(function() {
    	$('.resp, .feedback').fadeOut(0);
		$('body').css('overflow', 'auto');
	});
});