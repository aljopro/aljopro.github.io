'use strict';
(function($){
	$(function(){
		var isiOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		var $window = $(window);
		var navbar = $('.main-navbar');
		var brand = $('.navbar-brand');
		var jumbotron = $('.jumbotron');
		var jumbotronContainer = jumbotron.find('.container');

		$window.on('scroll', function(){
			if($window.scrollTop() >= jumbotronContainer.height()){
				brand.removeClass('brand-hidden');
			}
			else {
				brand.addClass('brand-hidden');
			}

			if($window.scrollTop() >= $window.height()){
				navbar
					.addClass('navbar-opaque')
					.removeClass('navbar-transparent');
			} else {
				navbar
					.addClass('navbar-transparent')
					.removeClass('navbar-opaque');
			}
		});

		navbar.find('.navbar-nav a').on('click', function(){
			$('.navbar-toggle:visible').click();
		});





		if(isiOS){
			jumbotron.css({
				'height': '100vh'
			});
			$('.navbar-toggle').click(function(){
				//been debugging this for hours. The collapse code from bootstrap doesn't fire on iOS unless I add a click function.
			});
		} else {
			$('body').scrollspy({ target: '.main-navbar' });
		}
	});
})(jQuery);