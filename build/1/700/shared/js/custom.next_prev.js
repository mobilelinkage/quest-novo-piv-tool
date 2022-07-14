(function($) {
	
	// the next button
	$('.upper-nav-item-3').hammer().on('tap', function(){
		com.veeva.clm.nextSlide();
	});
	
	// the previous button
	$('.side-nav-item-1').hammer().on('tap', function(){
		com.veeva.clm.prevSlide();
	});
	

})(jQuery);

