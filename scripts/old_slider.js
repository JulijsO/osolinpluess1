
var imgNo = 1;
var imgNext;
var count = $(".img-container img").length;
var count2 = $(".plan-container img").length;



$(".img-container").click(function(){
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


$(".plan-container").click(function(){
    
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



$("#img-btn").click(function(){

    $(".img-container").css("display", "flex");
    $(".plan-container").css("display", "none");
    $("#pln" + imgNo).css("display", "none");
    $("#img" + imgNo).css("display", "none");
    $("#img1").css("display", "unset");
    imgNo = 1;
    console.log(imgNo);

});

$("#pln-btn").click(function(){

    $(".plan-container").css("display", "flex");
    $(".img-container").css("display", "none");
    $("#img" + imgNo).css("display", "none");
    $("#pln" + imgNo).css("display", "none");
    $("#pln1").css("display", "unset");
    imgNo = 1;
    console.log(imgNo);
});