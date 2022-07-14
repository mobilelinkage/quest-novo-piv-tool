var show_active_tab = (function ($) {
  var active_tab = window.localStorage.getItem(iva_presentation_name + '_active_tab');
  var active_tab_slideid = window.localStorage.getItem(iva_presentation_name + '_active_tab_slideid');
  var current_slideid = $('body').attr('data-slideid');

  var init = function() {
    // check if active tab slide ID matches current slide ID
    if (active_tab != null && active_tab_slideid == current_slideid) {
      //check if there is forced flow popup
      
      if($('[data-tab-id='+active_tab+']').attr('data-modal-open-on-tab') != undefined){
          // SHOW active tab
          $('[data-tab]').attr('data-tab', active_tab);
          //TRIGGER MODAL
          setTimeout(function () {
          $('[data-modal-open-on-tab]').trigger('tap');
          }, 500);
      }else{
          // SHOW active tab
          $('[data-tab]').attr('data-tab', active_tab);
      }

    
      // Change the selected tab look
      // Note : Seems like not used anywhere so commenting out
      // $("[data-slide='" + active_tab + "']").addClass("selected");

      // clear local storage after
      window.localStorage.removeItem(iva_presentation_name + '_active_tab');
      window.localStorage.removeItem(iva_presentation_name + '_active_tab_slideid');
    } else {
      // clear local storage
      window.localStorage.removeItem(iva_presentation_name + '_active_tab');
      window.localStorage.removeItem(iva_presentation_name + '_active_tab_slideid');
    }
  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;
}(jQuery));

(function ($) {
  $(document).ready(function () {
    show_active_tab.init($);
  });
})(jQuery);