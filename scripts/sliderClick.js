

var imgNo = 1;
var imgNext;
var count = $(".img-container img").length;
var count2 = $(".plan-container img").length;


$(document.body).on("click", ".img-container",function(){
    console.log("working");
    
    if(imgNo == count){
    imgNext = imgNo;    
    imgNo = 1;
    $("#img" + imgNo).css("display", "unset");
    $("#img" + imgNext).css("display", "none");

    } else { 
        imgNext = imgNo + 1;

        $("#img" + imgNo).css("display", "none");
        $("#img" + imgNext).css("display", "unset");
        imgNo = imgNo + 1;
        console.log(imgNo);
        console.log(imgNext);
    }

});


$(document.body).on("click", ".plan-container",function(){
    
    if(imgNo == count2){
    imgNext = imgNo;    
    imgNo = 1;
    $("#pln" + imgNo).css("display", "unset");
    $("#pln" + imgNext).css("display", "none");

    } else { 
        imgNext = imgNo + 1;

        $("#pln" + imgNo).css("display", "none");
        $("#pln" + imgNext).css("display", "unset");
        imgNo = imgNo + 1;
        console.log(imgNo);
        console.log(imgNext);
    }

});

// _____Switch Img/plans___________

$(document.body).on("click", "#img-btn",function(){

    $(".img-container").css("display", "flex");
    $(".plan-container").css("display", "none");
    $("#pln" + imgNo).css("display", "none");
    $("#img" + imgNo).css("display", "none");
    $("#img1").css("display", "unset");
    imgNo = 1;
    console.log(imgNo);

    // line_________
    $(this).css("border-bottom", "solid 1px");
    $("#pln-btn").css("border-bottom", "none");


});

$(document.body).on("click", "#pln-btn",function(){

    $(".plan-container").css("display", "flex");
    $(".img-container").css("display", "none");
    $("#img" + imgNo).css("display", "none");
    $("#pln" + imgNo).css("display", "none");
    $("#pln1").css("display", "unset");
    imgNo = 1;
    console.log(imgNo);

    // line_________
    $(this).css("border-bottom", "solid 1px");
    $("#img-btn").css("border-bottom", "none");

});


// _______Reset switch project___________

$(document.body).on("click", ".list-item",function(){
    imgNo = 1;
});


$(document.body).on("click", ".list-item", function(){setTimeout(reCount, 200)});



function reCount(){
    count = $(".img-container img").length;
    count2 = $(".plan-container img").length;
    console.log(count);
}