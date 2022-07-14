/**
 * @file hotlink.js
 *
 * Adds direct slide navigation on tap
 * If slide contains zip extension, we can assume we want to use the full path given
 * Added ability to handle dynamically generated html
 *
 * Dependencies:
 * - veeva-library.js
 * - hammer.js
 * - jquery.hammer.js
 *
 * <div data-slide="slide_name" data-presentation="presentation_name"></div>
 *  data-slide attribute is Mandatory
 *  data-presentation attribute is optional, if no value exists, we assume we are staying in this presentation
 *
 *
 */
(function($) {
  $.hotlink = function() {
    var config = {};
    config.data_attr_slide = 'data-slide';
    config.data_attr_presentation = 'data-presentation';
    config.pathway_ext = 'zip';

    var public_interface = {};

    function tapBinding(e) {
      var _this = $(this),
        presentation_name = (_this.attr(config.data_attr_presentation) !== undefined) ? _this.attr(config.data_attr_presentation) : iva_presentation_name,
        slide_path = _this.attr(config.data_attr_slide);

      // Build path.
      // check if pathway ext exists
      // fix for briefcase and other presentations where we do not need the presentation prefix appended to the slidename
      var full_slide_path = (slide_path.search(config.pathway_ext) > -1)? slide_path : presentation_name + "_" + slide_path + '.' + config.pathway_ext;

      console.log('Slide Path:', full_slide_path);
      console.log('Presentation Name:', presentation_name);

      if (typeof clickstream != "undefined") {
        clickstream.trackButtonTap($(this).attr('data-button-name') + ' hotlink', function() {
          com.veeva.clm.gotoSlide(full_slide_path, presentation_name); //Go to Slide specified
        });
      } else {
        com.veeva.clm.gotoSlide(full_slide_path, presentation_name); //Go to Slide specified
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
  $.hotlink.init();
}(jQuery));
