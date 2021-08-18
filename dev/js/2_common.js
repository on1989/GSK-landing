jQuery(document).ready(function($){
	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:true,
		arrows:false,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 680,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
	$('.consultant-slider').slick({
		dots:true,
		arrows:false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: [
		{
		  breakpoint: 992,
			settings: {
				fade: false,
			}
		}]
	})
	$(document).on("scroll",function(){
		var headerHeight = $('header').height()
		if($(document).scrollTop() > headerHeight){
			$("header").addClass("mini-header");
		}
		else{
			$("header").removeClass("mini-header");
		}
	});
	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 120
				}, 1000);
				return false;
			}
		}
	});
});
