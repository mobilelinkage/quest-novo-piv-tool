/**
 * @file content-swap.js
 *
 * Swap out content when the user clicks on a tile.
 *
 * Assumptions:
 * - "View All" button is ONLY for the content that has 1 swap
 *
 * ex.#1 Hides previous tile when moving on to the next
 *
 *   <!-- Tile with 2 states -->
 *   <div data-swap-container>
 *     <div class="is-active" data-swap-tile>Tile 1</div>
 *     <div data-swap-tile>Tile 2</div>
 *   </div>
 *
 *   <div data-swap-view-all>View All</div>
 *
 * ex.#2 Keeps previous tile when moving on to the next
 *
 *   <!-- Tile with 2 states -->
 *   <div data-swap-container data-swap-nohide>
 *     <div class="is-active" data-swap-tile>Tile 1</div>
 *     <div data-swap-tile>Tile 2</div>
 *   </div>
 *
 * ex.#3 Toggles back and forth between between two elements only
 *
 *   <!-- Tile with 2 states -->
 *   <div data-swap-container data-swap-toggle>
 *     <div class="is-active" data-swap-tile>Tile 1</div>
 *     <div data-swap-tile>Tile 2</div>
 *   </div>
 */
var iva_content_swap = (function($) {

  var init = function() {
    // Event listeners.
    $("[data-swap-tile]").hammer().on('tap', on_tile_selected);
    $("[data-swap-view-all]").hammer().on('tap', on_view_all_selected);
  };

  /**
   * When tile is selected, switch to the next tile.
   */
  var on_tile_selected = function() {
    
    // Determine if this is the last tile.
    var index = $(this).parent().find("[data-swap-tile]").index($(this));
    var length = $(this).parent().find("[data-swap-tile]").length - 1;
        
    //Check if the container contains only 2 swap elements, and is a toggle container
    if (length == 1 && $(this).parent().attr("data-swap-toggle") !== undefined){
      $(this).removeClass('is-active');
      //If the last element is active, swap back to the first element
      if (index == length) {
        $(this).prev().addClass('is-active');
        //Since an element is back in the initial state, re-enable the view all button
        $('[data-swap-view-all]').removeAttr('data-swap-active');
      }
      //Otherwise, activate the next element
      else{
        $(this).next().addClass('is-active');
      }
    }
    else{
      
      //If it is not a proper toggle container, continue swapping down the list
      if (index == length) {
        return;
      }

      // only remove active class data attribute swap-nohide exists
      if(!$('[data-swap-nohide]').length) {
        $(this).removeClass('is-active');
      }
      // show the next tile.
      $(this).next().addClass('is-active');
      
    }
    
    // If all states are visible, hide "View All" button.
    var num_activated = $('[data-swap-container] [data-swap-tile]:last-child.is-active').length
    if ($('[data-swap-container]').length == num_activated && $('[data-swap-view-all]').length > 0) {
      $('[data-swap-view-all]').attr('data-swap-active', "");
    }

  };

  /**
   * View the next tile in the set. This only works if there are 2 states.
   */
  var on_view_all_selected = function() {

    // Loop through each set of tiles.
    $("[data-swap-container]").each(function(index, el) {
    
      // Determine if this is the last tile.
      var index = $(this).find('[data-swap-tile]').index($(this).find('.is-active'));
      var length = $(this).find('[data-swap-tile]').length - 1;

      if (index == length) {
        return;
      }

      $(this).find('.is-active')
        .removeClass('is-active')
        .next().addClass('is-active');
    });

    // Hide "View all" button.
    $(this).attr('data-swap-active', "");

  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    iva_content_swap.init($);
  });
})(jQuery);
