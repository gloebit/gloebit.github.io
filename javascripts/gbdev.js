
/* JS for the Gloebit Developer pages. */
/* Uses JQuery exclusively.            */

$(function(){
    /* Move the nav element's list of section links to the Sections drop- */
    /* down menu in the header.  (See header.html.)                       */
    $('nav ul').detach()
               .appendTo('header #section-nav')
               .addClass('drop-down-menu');

    /* Clone the header so it can stay fixed to top of window and the     */
    /* cloned header can take up space at the top of the page.  We could  */
    /* also use a div of the same height as the header to provide the     */
    /* space.  This JS is leftover from when headers were different sizes */
    /* and headers would scroll a bit before becoming fixed, and so on.   */
    /* See the commented out JS below watching the window scroll...       */
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
        $(this).siblings('.drop-down').toggleClass('collapsed');
    });
    $('header .drop-down').addClass('collapsed');

    /* Set anchor padding/margin to offset under fixed header. */
    /* The header is fixed only for >960px.                    */
    var PADDING_FROM_HEADER = 20;
    var headerHeight = $('header.original').height()+PADDING_FROM_HEADER;
    /*
      try {
    */
    /* Add the default padding and negative margin for the offsets. */
    document.styleSheets[0].insertRule('.anchor:before {padding: '+PADDING_FROM_HEADER+'px 0 0}', document.styleSheets[0].cssRules.length);
    document.styleSheets[0].insertRule('.anchor:before {margin: -'+PADDING_FROM_HEADER+'px 0 0}', document.styleSheets[0].cssRules.length);
    /* Add the >960px padding and negative margin for the offsets. */
    document.styleSheets[0].insertRule('@media screen and (min-width:961px) { .anchor:before {padding: '+headerHeight+'px 0 0} }', document.styleSheets[0].cssRules.length);
    document.styleSheets[0].insertRule('@media screen and (min-width:961px) { .anchor:before {margin: -'+headerHeight+'px 0 0} }', document.styleSheets[0].cssRules.length);
    /*
      }
      catch(err) {
          document.styleSheets[0].addRule('.anchor::before','padding: '+headerHeight+'px 0 0');
          document.styleSheets[0].addRule('.anchor::before','margin: -'+headerHeight+'px 0 0');
      }
    */
});
