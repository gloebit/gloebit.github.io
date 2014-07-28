$(function(){
    var clonedHeader;
    $('header').each(function(){
        clonedHeader = $(this);
        clonedHeader
            .before(clonedHeader.clone())
            .css({'width':'100%'})
            .addClass('floating');
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('header.floating').css({'visibility':'visible'});
        } else {
            $('header.floating').css({'visibility':'hidden'});
        }
    });

    /* Set anchor padding/margin to offset under fixed header bar. */
    /* These are added to stylesheet[0] to allow @media overrides. */
    var headerHeight = $('header.floating').height()+8;
    try {
        document.styleSheets[0].addRule('.anchor::before','padding: '+headerHeight+'px 0 0');
        document.styleSheets[0].addRule('.anchor::before','margin: -'+headerHeight+'px 0 0');
    }
    catch(err) {
        /* Firefox */
        document.styleSheets[0].insertRule('.anchor:before {padding: '+headerHeight+'px 0 0}', document.styleSheets[0].cssRules.length);
        document.styleSheets[0].insertRule('.anchor:before {margin: -'+headerHeight+'px 0 0}', document.styleSheets[0].cssRules.length);
    }
});
