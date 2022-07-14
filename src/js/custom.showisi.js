var show_customized_isi = (function($) { 

	 

   var changebrand = function(brand) {
    $('body').removeClass((function (index, className) {
    	return (className.match (/(^|\s)isi-version-\S+/g) || []).join(' ');
    }))
	 $('[data-expanding-isi]').attr('data-isi-version', brand);
	 $('body').addClass("isi-version-"+brand);
  };

  var public_interface = {};
  public_interface.changebrand = function(brand) {
    changebrand();
  };

  return public_interface;

}(jQuery));




/*
EXAMPLES ON HOW TO CALL THIS FUNCTION
*/
  // (function($) {
  //  $(document).ready(function() {
  //   	//possible variables to use
  //   	//ozempic
  //   	//victoza
  //   	//combination
  //     show_customized_isi.changebrand('ozempic');
  //    //re-initialize expandable ISI again
  //    iva_expanding_isi.init($);
//    });
  // })(jQuery);



  