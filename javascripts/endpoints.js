
/* JS for the Gloebit Developer /endpoints/ page. */
/* Uses JQuery exclusively.                       */

$(function(){
    /* Don't let the nav menu cover the footer.  When scrolling toward the */
    /* bottom of the page, adjust the nav height to shorten it.            */
    var navHeight = function () {
        var winTop = $(this).scrollTop(),
            winBottom = winTop + $(this).height(),
            headerHeight = $('header').height(),
            navHeightAdjust = headerHeight + 30;
            footerTop = $('footer').offset().top - 5;  /* extra padding */

        if ( winTop < headerHeight ) {
            $('nav #nav').css({'top': 'calc(' + (headerHeight-winTop) + 'px + 11px)'});
            navHeightAdjust = 30 + headerHeight - winTop;
        }
        else {
            $('nav #nav').css({'top':'11px'});
            navHeightAdjust = 30;
        }
        if ( footerTop < winBottom ) {
            $('nav #nav').css({'height':'calc(100vh - ' + (navHeightAdjust+winBottom-footerTop) + 'px)'});
        }
        else {
            $('nav #nav').css({'height':'calc(100vh - ' + navHeightAdjust + 'px)'});
        }
    };
    $(window).scroll(navHeight);
    $(window).resize(navHeight);

    $('nav h3').on('click', function(ev) {
        $(this).next('ul').toggleClass('collapsed');
        $(this).children('.caret').toggleClass('collapsed');
    });
});
