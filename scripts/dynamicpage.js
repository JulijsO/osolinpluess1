$(function () {
    if (Modernizr.history) {
        // history is supported; do magical things

        // hijack the nav click event
        $(".list-container").delegate(".clickable", "click",
            function () {
                _href = $(this).attr("title");

                // change the url without a page refresh and add a history entry.
                history.pushState(null, null, _href);

                // load the content
                loadContent(_href); // fear not! we're going to build this function in the next code block
                console.log("ok");

                $(".clickable").removeClass("active-project");
                $(this).addClass("active-project");
            });
    } else {
        // history is not supported; nothing fancy here
    }
});



// _______________________Hide Projectlist when jumping to landingpage (index.html)___________________

$(function () {
    if (Modernizr.history) {
        // history is supported; do magical things

        // hijack the nav click event
        $(".logo-title").delegate(".logo-bg", "click",
            function () {
                _href = $(this).attr("title");

                // change the url without a page refresh and add a history entry.
                history.pushState(null, null, _href);

                // load the content
                loadContent(_href); // fear not! we're going to build this function in the next code block
                console.log("pl hidden");

                $(".list-container").removeClass("list-container-on");

                $(".list-padding").removeClass("list-padding-on");

                $(".projectlist-child").removeClass("projectlist-child-on");

                $(".projectlist").removeClass("projectlist-on");

                $(".projectlist-title").removeClass("projectlist-title-on");

                $(".clickable").removeClass("active-project");



            });
    } else {
        // history is not supported; nothing fancy here
    }
});

// _______________________funktion für kontakt/büro_______________________________________


$(function () {
    if (Modernizr.history) {
        // history is supported; do magical things

        // hijack the nav click event
        $(".header-links").delegate(".clickable", "click",
            function () {
                _href = $(this).attr("title");

                // change the url without a page refresh and add a history entry.
                history.pushState(null, null, _href);

                // load the content
                loadContent(_href); // fear not! we're going to build this function in the next code block
                console.log("ok");

                $(".list-container").removeClass("list-container-on");

                $(".list-padding").removeClass("list-padding-on");

                $(".projectlist-child").removeClass("projectlist-child-on");

                $(".projectlist").removeClass("projectlist-on");

                $(".projectlist-title").removeClass("projectlist-title-on");

                $(".close-list").removeClass("close-list");

                $(".clickable").removeClass("active-project");

            });
    } else {
        // history is not supported; nothing fancy here
    }



});



// __________________________________

var $mainContent = $(".content-wrapper"),
    $el;





function loadContent(href) {

    $mainContent
        .find(".content-child")
        .fadeOut(100, function () { // fade out the content of the current page
            $mainContent.hide().load(href + " .content-child", function () { // load the contents of whatever href is
                $mainContent.fadeIn(200, function () {

                });
            });


        });

};



// _________________________________________
// Funktion Pfeiltasten








$(window).bind("popstate", function () {
    link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
    loadContent(link);
});




