/**
 * @file boilerplate.modal.js
 *
 * Trigger and dismiss modals.
 * Automatically add a 'x' close button to the modal dialog.
 *
 * Assumptions:
 * - anything that can close a modal has attribute: data-modal-trigger-close
 * - anything that opens a modal has attribute: data-modal-trigger-open
 *   as well as data-modal-target="(selector for the modal element to show)"
 *
 * - pagination buttons are only for group modals and are NOT interactive
 * - the background overlay is .modal-overlay
 * - the common 'x' close button is .modal-button-close
 *
 * e.g.:
 *
 *   <a data-modal-trigger-close>
 *     Close modals
 *   </a>
 *
 *   <a data-modal-trigger-open data-modal-target=".img--modal-content">
 *     Show a modal
 *   </a>
 *   <div class="img--modal-content">
 *     <a class="modal-button-close" data-modal-trigger-close></a>
 *   </div>
 *
 * Events:
 * -------
 * When a modal is opened, send a 'modal-opened' event.
 * When a modal is closed, send a 'model-closed' event.
 *
 * Listeners:
 * ----------
 * Listen for 'close-modal' event.
 */

var iva_modals = (function($) {

  var custom_active_classname;

  /**
   * Add bindings for modal events.
   */
  var init = function() {
    hide_modals();

    bind_new_modal_trigger_target();
    bind_open();
    bind_close();
    bind_group_navigation();
  };


  /**
   * Find all elements that have been identified as modals (through their
   * triggers), and make them hidden by default.
   */
  var hide_modals = function() {
    $("[data-modal-trigger-open]").each(function() {
      var el_modal = $(this).attr('data-modal-target');
      $(el_modal).addClass('modal-hidden');
    });
  };


  /**
   * Bind triggers to open a modal.
   *
   * This occurs when we click an item with the attribute 'data-modal-trigger-open'.
   * The clicked element must have an accompanying 'data-modal-target' attribute
   * which tells us which DOM element to display as the modal dialog.
   */
  var bind_open = function() {
    $("[data-modal-trigger-open]").hammer().on('tap', function(event) {
      if (typeof clickstream != "undefined") {
        clickstream.trackButtonTap($(this).attr('data-button-name') + ' modal', function(){});
      }
      // First, close any open modals.
      if (!$(this).hasClass("disable")) {
        modal_close();
        modal_open(this);

        var $target = $($(this).attr('data-modal-target'));
        var group_container = $target.attr('data-modal-group-container');
        build_group_navigation(group_container);
      }

      if ($(this).hasClass('disable-swipe')) {
        $('body').addClass('swipe-disabled');
      }

    });
  };

  /**
   * Bind triggers to close all modals.
   *
   * This occurs when we click an item with the attribute 'data-modal-trigger-close'.
   *
   * By default the background overlay (present when a modal is open) and the
   * 'x' close button on a modal dialog will react to this.
   */
  var bind_close = function() {
    $("[data-modal-trigger-close]").hammer().on('tap', function(event) {
      modal_close();
      destroy_group_navigation();
    });

    // If a 'close-modal' event is heard, close any open modal.
    $(window).on('close-modal', function(event) {
      modal_close();
      destroy_group_navigation();
    });
  };

  /**
   * Bind group modal navigation controls, to page between all modals within
   * a defined group.
   */
  var bind_group_navigation = function() {
    // @todo is the .prev, .next selector here specific enough? Probably
    // should ensure it's within a .modal-group-btn parent?
    $(document).on('touchend', '.prev, .next', function(e) {

      var group_container = $(this).parent().eq(0).attr('data-modal-group-container');

      var modal_group = $('[data-modal-group]');
      modal_group = (group_container)
        ? modal_group.filter('[data-modal-group-container="' + group_container + '"]')
        : modal_group.filter(':not([data-modal-group-container])');

      var modal = modal_group.filter('.modal-visible'),
          modal_index = modal_group.index(modal),
          is_next_pressed = $(this).hasClass('next');

      destroy_group_navigation();

      if (!is_next_pressed) {
        //go to previous
        var prev_index = modal_index - 1,
            prev_modal = $(modal_group[prev_index]);

        $('.modal-group-btn.active')
          .removeClass('active')
          .addClass('inactive');

        $('.modal-group-btn:eq(' + prev_index + ')')
          .removeClass('inactive')
          .addClass('active');

        // hide current and go to next
        modal.removeClass('modal-visible').addClass('modal-hidden');
        prev_modal.removeClass('modal-hidden').addClass('modal-visible');
      }
      else {
        var next_index = modal_index + 1,
            next_modal = $(modal_group[next_index]);

        $('.modal-group-btn.active')
          .removeClass('active')
          .addClass('inactive');

        $('.modal-group-btn:eq(' + next_index + ')')
          .removeClass('inactive')
          .addClass('active');

        // hide current and go to next
        modal.removeClass('modal-visible').addClass('modal-hidden');
        next_modal.removeClass('modal-hidden').addClass('modal-visible');
      }

      build_group_navigation(group_container);

    });
  };

  /**
   * Build controls for active modal
  */
  var build_group_navigation = function(group_container) {

    var modal_group = $('[data-modal-group]');
    modal_group = (group_container)
      ? modal_group.filter('[data-modal-group-container="' + group_container + '"]')
      : modal_group.filter(':not([data-modal-group-container])');

    var modal_count = modal_group.length,
        is_modal_group = (modal_count > 1) ? true : false;

    if (!is_modal_group) {
      return false;
    }

    var modal = modal_group.filter('.modal-visible'),
        control_prev = '<div class="prev"></div>',
        control_next = '<div class="next"></div>',
        modal_index = modal_group.index(modal),
        is_first_modal = (modal_index === 0) ? true : false,
        is_last_modal = ((modal_index + 1) === modal_count) ? true : false;

    if (!is_first_modal) {
      modal.append(control_prev);
    }

    if (!is_last_modal) {
      modal.append(control_next);
    }

    build_pagination_buttons();

  };

  /**
   * Build pagination icons for the group modals.
   */
  var build_pagination_buttons = function() {

    var modal_group = $('[data-modal-group][data-enable-pagination]'),
        modal_count = modal_group.length;

    // Only apply pagination buttons to group modals.
    if (modal_count <= 1) {
      return false;
    }

    var active_modal_index = $('.modal-visible').index('[data-modal-group][data-enable-pagination]');
    var el_pagination = '<ul class="pagination-container">';

    // Create pagination in the active modal.
    for (var i = 0; i < modal_count; i++) {

      // Determine active modal.
      if (i == active_modal_index) {
        el_pagination += '<li class="is-active"></li>';
      }
      else {
        el_pagination += '<li></li>';
      }
    }

    el_pagination += '</ul>';

    $('.modal-visible').append(el_pagination);

  };

  /**
   * Destroy controls for active modal
   */
  var destroy_group_navigation = function(modal_group) {
    $('.next').remove();
    $('.prev').remove();
    $('.pagination-container').remove();
  };


  /**
   * Destroy controls for active modal
   */
  var destroy_group_navigation = function(modal_group) {
    $('.next').remove();
    $('.prev').remove();
    $('.pagination-container').remove();
  };


  /**
   * Binds event if the modal trigger for one button needs to change.
   *
   * Listens when an element with the [data-update-modal-trigger] attribute is selected.
   * [data-update-modal-trigger] holds the selector value of the modal trigger that will change.
   *
   */
  var bind_new_modal_trigger_target = function() {
    $('[data-update-modal-trigger]').hammer().on('tap', update_modal_trigger_target)
  };

  /**
   * Changes the modal trigger to open a different modal.
   *
   * Element MUST contain the [data-update-modal-trigger-target] attribute. This attribute
   * holds a jQuery selector string to new modal that will be shown.
   *
   */
  var update_modal_trigger_target = function() {
    var modal_btn = $(this).data('update-modal-trigger');
    var modal_target = $(this).data('update-modal-trigger-target');

    // [data-update-modal-trigger-target] is mandatory
    if (!modal_target)
      return;

    // Find modal trigger and change the [data-modal-target] value.
    $(modal_btn).data('modal-target', modal_target);
  };


  /**
   * Close all modals, dismiss the background overlay and dialog 'x' close button.
   */
  var modal_close = function() {
    // Hide the background overlay and 'x' close button.
    $('.modal-overlay')
      .removeClass('active');

      $('body').removeClass('swipe-disabled');
      
    // Hide the modal dialog.
    $('.modal-visible').addClass('modal-hidden').removeClass('modal-visible');
    $('body')
      .removeClass('modal-active')
      .removeClass('references-active');

    // Remove custom active classname if there is one.
    if (custom_active_classname != null) {
      $('body').removeClass(custom_active_classname);
    }

    // If this is a group modal.
    if ($('.modal-group-btn').length > 0) {
      $('.modal-group-btn').removeClass('inactive').removeClass('active');
    }

    // trigger modal close event
    $(window).trigger('modal-closed');

  };

  var modal_open = function(_this) {

    // Trigger custom event that modal has open.
    $(window).trigger('modal-opened');

    // Display the overlay.
    $('.modal-overlay').addClass('active');
    $('body').addClass('modal-active');


    // Apply active class name to the body if it exists.
    if ($(_this).data('modal-active-classname') != null) {
      custom_active_classname = '' + $(_this).data('modal-active-classname');
      $('body').addClass(custom_active_classname);
    }

    // If this is a group modal.
    if ($(_this).hasClass('modal-group-btn')) {
      $('.modal-group-btn').addClass('inactive');
      $(_this).removeClass('inactive').addClass('active');
    }

    // If the reference modal is active.
    if ($(_this).hasClass('references')) {
      $('body').addClass('references-active');
    }

    // Open the modal defined by the target.
    var modal_target = $(_this).data('modal-target');
    $(modal_target).removeClass('modal-hidden').addClass('modal-visible');
    if (typeof clickstream != "undefined") {
      clickstream.trackModalOpen($(modal_target).attr('data-modal-name'));
    }

  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    iva_modals.init();
  });
})(jQuery);