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
    var headerHeight = $('header.floating').height()+5;
    document.styleSheets[0].addRule('.anchor::before','padding: '+headerHeight+'px 0 0');
    document.styleSheets[0].addRule('.anchor::before','margin: -'+headerHeight+'px 0 0');
});
