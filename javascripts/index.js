
/* JS for Gloebit Developer front page. */
/* Uses JQuery exclusively.             */

$(function(){

    /* The service boxes in the Gloebit Services section can collapse.   */
    /* Clicking on them toggles the active class.  The active class      */
    /* shows them.  We do not set active on load, so they start out      */
    /* collapsed.  Use ${'.service').addClass('active'); to start them   */
    /* as not collapsed.                                                 */
    $('.service').click(function(ev) {
        $(this).toggleClass('active');
    });

});
