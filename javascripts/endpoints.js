
/* JS for the Gloebit Developer /endpoints/ page. */
/* Uses JQuery exclusively.                       */

$(function(){
    /* Scroll the <nav> column only until it reaches its bottom.  When   */
    /* the bottom is reached, fix the column.  The content will still    */
    /* scroll though.                                                    */
    $(window).scroll(function () {
        var winTop = $(this).scrollTop(),
            winBottom = winTop + $(this).height(),
            navContainer = $('#nav-container'),
            nav = $('nav'),
            navBottom = nav.height();

        // When the user has reached the bottom of the 'nav' column, set its
        // position to fixed to prevent it from scrolling further.
        if (winBottom >= navBottom) {
            navContainer.addClass('fixed');
        }
        // When the user scrolls back up, revert its position to relative.
        else {
            navContainer.removeClass('fixed');
        }
    });
});
