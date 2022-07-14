/**
 * Dependencies:
 * - hammer.js
 * - jquery.hammer.js
 * - iscroll.js
 */

 (function ($) {
	$(document).ready(function () {
  
	  
	});
  
  })(jQuery);

 

(function($) {
	

	

	/* toggle between graph and table in Detailed Results */
	$('.button.b2').hammer().on('tap', function() {
		$('.graph-container').toggleClass("hide");
		$('.table-container').toggleClass("show");
	});



	/* toggle the tray */
	$('.inputsTrayTrigger').hammer().on('tap', function() {
		$('.inputsTray').toggleClass("fullSize");
		
		// switch industry dropdown open direction based on tray status
		$('#showIndustry').toggleClass("flow-up");
		$('#showIndustry').toggleClass("flow-down");

		// switch industry dropdown open direction based on tray status
		$('#number-input').toggleClass("flow-up");
		$('#number-input').toggleClass("flow-down");
	});

})(jQuery);


var populateInnerHtml = (function($) {
	function writeById(id, content) {
		console.log("writeById id : "+ id);

		// remove any instances of (inc. Wegvoy)
		content = content.replace("(inc. Wegovy)", "");

		// write content
		document.getElementById(id).innerHTML = content;
	}

	var public_interface = {};
	public_interface.writeById = function(id, content) {
		console.log("public interface id : "+ id);
		writeById(id, content);
	};
	return public_interface;

}(jQuery));

var poi_modal_results = (function($) {
	
	function init() {
		var dataModalTarget = '.poi-modal-container';
		var dataModalActiveClassname = 'poi-active';
		var dataButtonName = 'Results : Population of Interest';

		console.log("poi_modals_results.init : "+ dataModalActiveClassname +" : "+ dataModalTarget +" : "+ dataButtonName);

		// attach functionality to results page population cta to open population modal
		// done here rather than directly in markup because markup is written by js
		$('.simpleResult_population').hammer().on('tap', function() {
			
			console.log("poi modal open");
			
			openModal(dataModalActiveClassname, dataModalTarget, dataButtonName)

		});

		// functionality for close button on results page poi modal
		$('.poi-modal-container .exit').hammer().on('tap', function() {
			
			console.log("poi modal close");
			
			closeModal(dataModalActiveClassname);
		});

		$("[data-modal-trigger-close]").hammer().on('tap', function(event) {
			console.log("close outside");
			closeModal(dataModalActiveClassname);
		});
	
	};
	
	


	// generic open and close functions for poi modals
	// copied almost exactly from boilerplate.modal.js
	// copied instead of references because markup is written by js so can't attach attributes as with normal smartrep modal
	function openModal(dataModalActiveClassname, dataModalTarget, dataButtonName) {
		// Trigger custom event that modal has open.
		$(window).trigger('modal-opened');

		// Display the overlay.
		$('.modal-overlay').addClass('active');
		$('body').addClass('modal-active');


		// Apply active class name to the body if it exists.
		if (dataModalActiveClassname != null) {
			$('body').addClass(dataModalActiveClassname);
		}

		// Open the modal defined by the target.
		if (dataModalTarget != null) {
			$(dataModalTarget).removeClass('modal-off').addClass('modal-on');
		}

		if (typeof clickstream != "undefined" && dataButtonName != null) {
			clickstream.trackModalOpen(dataButtonName);
		}
	};

	function closeModal(dataModalActiveClassname) {
		// Hide the background overlay and 'x' close button.
		$('.modal-overlay').removeClass('active');

		//  $('body').removeClass('swipe-disabled');
		
		// Hide the modal dialog.
		$('.modal-on').addClass('modal-off').removeClass('modal-on');
		$('body').removeClass('modal-active');

		// Remove custom active classname if there is one.
		if (dataModalActiveClassname != null) {
			$('body').removeClass(dataModalActiveClassname);
		}

		// trigger modal close event
		$(window).trigger('modal-closed');
	}

	var public_interface = {};
	public_interface.init = function() {
		init();
	};
	return public_interface;

}(jQuery));

var poi_modal_population = (function($) {
	
	function init() {
		var dataModalTarget = '.poi-modal-container';
		var dataModalActiveClassname = 'poi-active';
		var dataButtonName = 'Events based analysis : Population of Interest';

		console.log("poi_modals_population.init : "+ dataModalActiveClassname +" : "+ dataModalTarget +" : "+ dataButtonName);

		// attach functionality to results page population cta to open population modal
		// done here rather than directly in markup because markup is written by js
		$('.detailedResults_population').hammer().on('tap', function() {
			
			console.log("poi modal open");
			
			openModal(dataModalActiveClassname, dataModalTarget, dataButtonName)

		});

		// functionality for close button on results page poi modal
		$('.poi-modal-container .exit').hammer().on('tap', function() {
			
			console.log("poi modal close");
			
			closeModal(dataModalActiveClassname);
		});

		$("[data-modal-trigger-close]").hammer().on('tap', function(event) {
			console.log("close outside");
			closeModal(dataModalActiveClassname);
		});
	
	};
	
	


	// generic open and close functions for poi modals
	// copied almost exactly from boilerplate.modal.js
	// copied instead of references because markup is written by js so can't attach attributes as with normal smartrep modal
	function openModal(dataModalActiveClassname, dataModalTarget, dataButtonName) {
		// Trigger custom event that modal has open.
		$(window).trigger('modal-opened');

		// Display the overlay.
		$('.modal-overlay').addClass('active');
		$('body').addClass('modal-active');


		// Apply active class name to the body if it exists.
		if (dataModalActiveClassname != null) {
			$('body').addClass(dataModalActiveClassname);
		}

		// Open the modal defined by the target.
		if (dataModalTarget != null) {
			$(dataModalTarget).removeClass('modal-off').addClass('modal-on');
		}

		if (typeof clickstream != "undefined" && dataButtonName != null) {
			clickstream.trackModalOpen(dataButtonName);
		}
	};

	function closeModal(dataModalActiveClassname) {
		// Hide the background overlay and 'x' close button.
		$('.modal-overlay').removeClass('active');

		//  $('body').removeClass('swipe-disabled');
		
		// Hide the modal dialog.
		$('.modal-on').addClass('modal-off').removeClass('modal-on');
		$('body').removeClass('modal-active');

		// Remove custom active classname if there is one.
		if (dataModalActiveClassname != null) {
			$('body').removeClass(dataModalActiveClassname);
		}

		// trigger modal close event
		$(window).trigger('modal-closed');
	}

	var public_interface = {};
	public_interface.init = function() {
		init();
	};
	return public_interface;

}(jQuery));
