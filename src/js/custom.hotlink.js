(function($) {
  $.hotlink_active_tab_modal = function() {
    var config = {};
    config.data_attr_slide = 'data-slide';
    config.data_attr_presentation = 'data-presentation';
    config.active_tab = 'data-active-tab';
    config.active_modal = 'data-active-modal';

    var public_interface = {};

    function tapBinding(e) {
      var _this = $(this);
      var presentation_name;
      
      // Check if link is to an external presentation, set presentation name accordingly
      if (_this.attr(config.data_attr_presentation) != undefined) {
        presentation_name = _this.attr(config.data_attr_presentation);
      } else {
        presentation_name = iva_presentation_name;
      }

      // Set active tab in local storage
      if (_this.attr(config.active_tab)) {
        window.localStorage.setItem(presentation_name + '_active_tab', _this.attr(config.active_tab));
        window.localStorage.setItem(presentation_name + '_active_tab_slideid', _this.attr(config.data_attr_slide));
      } else {
        window.localStorage.removeItem(presentation_name + '_active_tab');
        window.localStorage.removeItem(presentation_name + '_active_tab_slideid');
      }

      // Set active modal in local storage
      if (_this.attr(config.active_modal)) {
        window.localStorage.setItem(presentation_name + '_active_modal', _this.attr(config.active_modal));
        window.localStorage.setItem(presentation_name + '_active_modal_slideid', _this.attr(config.data_attr_slide));
      } else {
        window.localStorage.removeItem(presentation_name + '_active_modal');
        window.localStorage.removeItem(presentation_name + '_active_modal_slideid');
      }
    }

    /**
     * Parent can be either an element or a selector.
     *
     * @param {String|Element} parent
     */
    public_interface.bindEvents = function(parent) {
      parent = parent || 'body';
      // Remove all hotlink taps
      $(parent).find('[' + config.data_attr_slide + ']').hammer().off('tap', tapBinding);
      // Readd a single hotlink to all targets
      $(parent).find('[' + config.data_attr_slide + ']').hammer().bind('tap', tapBinding);
    };

    public_interface.init = function () {
      this.bindEvents();
    };

    return public_interface;
  }();
})(jQuery);

(function($) {
  $.hotlink_active_tab_modal.init();
}(jQuery));
