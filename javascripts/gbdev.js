$(function(){
    $('nav ul').detach()
               .appendTo('header #section-nav')
               .addClass('drop-down-menu');

    var clonedHeader;
    $('header').each(function(){
        $(this).addClass('original');
        clonedHeader = $(this);
        clonedHeader
            .before(clonedHeader.clone())
            .css({'width':'100%'})
            .addClass('clone')
            .removeClass('original');
    });

    /* 
      $(window).scroll(function(){
          if ($(this).scrollTop() > 0) {
              $('header.clone').show();
          } else {
              $('header.clone').hide();
          }
      });
    */

    /* Must come after header cloning (if any)! */
    $('.drop-down').on('click', function(ev) {
        $(this).children('p').toggleClass('active');
        $(this).children('.drop-down-menu').toggle();
        if (!$(ev.target).closest('.drop-down-menu').length) {
            ev.preventDefault();
        }
    });
    $(document).on('click', function(ev) {
        var target = $(ev.target).closest('.drop-down')[0];
        $('.drop-down').each(function() {
            if (this !== target) {
                $(this).children('p').removeClass('active');
                $(this).children('.drop-down-menu').hide();
            };
        });
    });
    $('header button').on('click', function(ev) {
        $(this).siblings('.drop-down').toggleClass('collapsed');
    });
    $('header .drop-down').addClass('collapsed');

    /* Set anchor padding/margin to offset under fixed header bar. */
    /* These are added to stylesheet[0] to allow @media overrides. */
    var PADDING_FROM_HEADER = 25;
    var headerHeight = $('header.original').height()+PADDING_FROM_HEADER;
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
