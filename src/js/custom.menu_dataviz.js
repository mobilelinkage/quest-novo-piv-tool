var dataviz_menu = (function($) {

  var init = function() {
    customize_menu();
  };
  
  var customize_menu = function() {
    //remove patient support button
    $('.support-button').remove()

    //disables quickflow migration
    $('.migration-trigger.modal-trigger.sprite').removeAttr("data-modal-trigger-open data-modal-target")
    
    //add data presentation attr for menu 
    $('.menu-modal .menu-link').each(function(){

      $(this).attr("data-presentation","novo_ozempic_cv_iva")

    });
  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    dataviz_menu.init();
  });
})(jQuery);
