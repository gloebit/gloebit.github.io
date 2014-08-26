
/* JS for the Gloebit Developer pages. */
/* Uses JQuery exclusively.            */

$(function(){
    /* Move the nav element's list of section links to the Sections drop- */
    /* down menu in the header.  (See header.html.)                       */
    /* If there is no drop-down menu button, attach the nav to the header */
    /* so it can be positioned relative to the header.                    */
    if ( $('header #section-nav').length ) {
        $('nav > ul')
            .detach()
            .appendTo('header #section-nav')
            .addClass('drop-down-menu');
    }
    else {
        $('nav')
            .detach()
            .appendTo('header .wrapper');
    }

    /* Clone the header so it can stay fixed to top of window and the     */
    /* cloned header can take up space at the top of the page.  We could  */
    /* also use a div of the same height as the header to provide the     */
    /* space.  This JS is leftover from when headers were different sizes */
    /* and headers would scroll a bit before becoming fixed, and so on.   */
    /* See the commented out JS below watching the window scroll...       */
/*
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
*/
    /* Instead of cloning the header, make a div clone that has the same  */
    /* height.  It will avoid problems caused by elements in the cloned   */
    /* header, such as the image.                                         */
    $('header').after('<div class="clone" style="width:100%"></div>');
    $('header+.clone').height($('header').height());

    /* No longer need to check scroll position to fix the header.         */
    /* 
      $(window).scroll(function(){
          if ($(this).scrollTop() > 0) {
              $('header.clone').show();
          } else {
              $('header.clone').hide();
          }
      });
    */
    /* See the commented out JS below watching the window scroll...       */

    /* When we click on a drop-down div, toggle its active class, make    */
    /* its drop-down menu show/hide, and, if the click was not inside     */
    /* its drop-down menu, block the 
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
        $(this).siblings('header > div > div').toggleClass('collapsed');
    });
    $('header > div > div').addClass('collapsed');

    /* Set anchor padding/margin to offset under fixed header. */
    /* The header is fixed only for >960px.                    */
    var PADDING_FROM_HEADER = 20;
    var headerHeight = $('header').height()+PADDING_FROM_HEADER;
    /*
      try {
    */
    /* Add the default padding and negative margin for the offsets. */
    document.styleSheets[0].insertRule('.anchor:before {height: '+PADDING_FROM_HEADER+'px}', document.styleSheets[0].cssRules.length);
    /*
      document.styleSheets[0].insertRule('.anchor:before {padding: '+PADDING_FROM_HEADER+'px 0 0}', document.styleSheets[0].cssRules.length);
    */
    document.styleSheets[0].insertRule('.anchor:before {margin: -'+PADDING_FROM_HEADER+'px 0 0}', document.styleSheets[0].cssRules.length);
    /* Add the >960px padding and negative margin for the offsets. */
    document.styleSheets[0].insertRule('@media screen and (min-width:961px) { .anchor:before {height: '+headerHeight+'px} }', document.styleSheets[0].cssRules.length);
    /*
      document.styleSheets[0].insertRule('@media screen and (min-width:961px) { .anchor:before {padding: '+headerHeight+'px 0 0} }', document.styleSheets[0].cssRules.length);
    */
    document.styleSheets[0].insertRule('@media screen and (min-width:961px) { .anchor:before {margin: -'+headerHeight+'px 0 0} }', document.styleSheets[0].cssRules.length);
    /*
      }
      catch(err) {
          document.styleSheets[0].addRule('.anchor::before','padding: '+headerHeight+'px 0 0');
          document.styleSheets[0].addRule('.anchor::before','margin: -'+headerHeight+'px 0 0');
      }
    */

    /*
      Firefox fix.  When visiting a URL with a fragment that requires a
      new page load, Firefox sets the scroll position before page-ready
      javascript is called.  Becase we (currently) calculate the offset
      for the fixed header at page-ready, Firefox scrolls to the wrong
      spot.  Force the scroll here.  Optionally, we could used constants
      in the CSS instead of having JS do the work...
    */
    if (window.location.hash) {
        $('html,body').scrollTop($(window.location.hash).offset().top);
    }
});
