
/* JS for the Gloebit Developer /endpoints/ page. */
/* Uses JQuery exclusively.                       */

$(function(){
    /* Don't let the nav menu cover the footer.  When scrolling toward the */
    /* bottom of the page, adjust the nav height to shorten it.            */
    var navHeight = function () {
        var winTop = $(this).scrollTop(),
            winBottom = winTop + $(this).height(),
            navBaseHeight = $(this).height() - 81;  /* match CSS */
            footerTop = $('footer').offset().top - 5;  /* extra padding */

        if ( footerTop < winBottom ) {
            $('nav').css({'height':'calc(100vh - 81px - ' + (winBottom-footerTop) + 'px)'});
            // $('nav').height( navBaseHeight - ( winBottom - footerTop ) );
        }
        else {
            $('nav').css({'height':'calc(100vh - 81px)'});
            // $('nav').height( navBaseHeight );
        }
    };
    $(window).scroll(navHeight);
    $(window).resize(navHeight);
});
