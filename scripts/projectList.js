$(document.body).on("click", ".clickable-pl",function(){

    $(".list-container").addClass("list-container-on");

    $(".list-padding").addClass("list-padding-on");

    $(".projectlist-child").addClass("projectlist-child-on");

    // $(this).addClass("projectlist-on");

    $(".projectlist-title").addClass("projectlist-title-on");

    $(".closed-list").addClass("close-list");

});

$(document.body).on("click", ".close-list",function(){

    $(".list-container").removeClass("list-container-on");

    $(".list-padding").removeClass("list-padding-on");

    $(".projectlist-child").removeClass("projectlist-child-on");

    // $(this).toggleClass("projectlist-on");

    $(".projectlist-title").removeClass("projectlist-title-on");

    $(this).removeClass("close-list");

});


$(document.body).on("click", ".logo-title",function(){

    // $(".list-container").removeClass("list-container-on");

    // $(".list-padding").removeClass("list-padding-on");

    // $(".projectlist-child").removeClass("projectlist-child-on");

    // // $(this).toggleClass("projectlist-on");

    // $(".projectlist-title").removeClass("projectlist-title-on");

    $(".close-list").removeClass("close-list");

});

