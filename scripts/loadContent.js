var $mainContent = $(".main-parent"),
    // $pageWrap    = $("#page-wrap"),
    // baseHeight   = 0,
    $el;

// calculate wrapper heights to prevent jumping when loading new content
// $pageWrap.height($pageWrap.height());
// baseHeight = $pageWrap.height() - $mainContent.height();

function loadContent(href) {

  $mainContent
    .find(".content-child")
    .fadeOut(200, function() { // fade out the content of the current page
      $mainContent
        .hide()
        .load(href + " .content", function() { // load the contents of whatever href is
          $mainContent.fadeIn(200, function() {
            // $pageWrap.animate({
            //   height: baseHeight + $mainContent.height() + &quot;px&quot;
            });
         });
      
      $("nav a").removeClass("current");

      $("nav a[href$='" + href + "']").addClass("current");

    });

  };

