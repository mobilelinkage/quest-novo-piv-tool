/**
 * @file boilerplate.swipe.js
 *
 * Adds global left/right swipe support via hammer.js for slide navigation.
 *
 * Dependencies:
 * - veeva-library.js
 * - hammer.js
 * - jquery.hammer.js
 */
(function ($) {

  $.swipe = function () {

    $(document).hammer().on('swipeleft', function (e) {
		if (e.target.nodeName == "#document") {
			if (!$('body').hasClass('swipe-disabled')) {
				  console.log('swipe left');
				  if (typeof clickstream != "undefined") {
					clickstream.trackSwipeAction($('body').attr('data-slidename'), 'left/next', function() {
					  com.veeva.clm.nextSlide();
					});
				  } else {
					com.veeva.clm.nextSlide();
				  }
			}
		}
    });
    
    $(document).hammer().on('swiperight', function (e) {
		if (e.target.nodeName == "#document") {
			if (!$('body').hasClass('swipe-disabled')) {
				  console.log('swipe right');
				  if (typeof clickstream != "undefined") {
					clickstream.trackSwipeAction($('body').attr('data-slidename'), 'right/back', function() {
					  com.veeva.clm.prevSlide();
					});
				  } else {
					com.veeva.clm.prevSlide();
				  }
			}
		}
    });

  };

  $.swipe();

}(jQuery));

