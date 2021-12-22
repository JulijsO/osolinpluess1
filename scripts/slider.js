// VARIABELN DEFINIEREN
// _________________________________________________________

var imgNo = 1;
var imgNext;
var count = $(".img-container img").length;
var count2 = $(".plan-container img").length;

var buNo = 1;
var buNext;

// BILDER
// ___________________________________________________________

// VORWÄRTS__________________

$(document.body).on("click", ".ar-r-img",function(){
    console.log("working");
    
    if(imgNo == count){
    imgNext = imgNo;    
    imgNo = 1;
    $("#img" + imgNo).css("display", "unset");
    $("#img" + imgNext).css("display", "none");

    // ____Bildunterschrift____
    buNext = buNo;
    buNo= 1 ;
    $("#bildus" + buNo).css("display", "unset");
    $("#bildus" + buNext).css("display", "none");

    } else { 
        imgNext = imgNo + 1;

        $("#img" + imgNo).css("display", "none");
        $("#img" + imgNext).css("display", "unset");
        imgNo = imgNo + 1;
        console.log(imgNo);
        console.log(imgNext);

        // ____Bildunterschrift____
        buNext = buNo + 1;

        $("#bildus" + buNo).css("display", "none");
        $("#bildus" + buNext).css("display", "unset");
        buNo = buNo + 1;

    }

});

// RÜCKWÄRTS__________________

$(document.body).on("click", ".ar-l-img",function(){
    console.log("working");
    
    if(imgNo == 1){
    imgNext = imgNo;    
    imgNo = count;
    $("#img" + imgNo).css("display", "unset");
    $("#img" + imgNext).css("display", "none");

    // ____Bildunterschrift____

    buNext = buNo;
    buNo = count;
    $("#bildus" + buNo).css("display", "unset");
    $("#bildus" + buNext).css("display", "none");

    } else { 
        imgNext = imgNo - 1;

        $("#img" + imgNo).css("display", "none");
        $("#img" + imgNext).css("display", "unset");
        imgNo = imgNo - 1;
        console.log(imgNo);
        console.log(imgNext);

        // ____Bildunterschrift______

        buNext = buNo - 1;

        $("#bildus" + buNo).css("display", "none");
        $("#bildus" + buNext).css("display", "unset");
        buNo = buNo - 1;

        
    }

});

// PLÄNE
// _______________________________________________________________________

// VORWÄRTS________________

$(document.body).on("click", ".ar-r-pln",function(){
    
    if(imgNo == count2){
    imgNext = imgNo;    
    imgNo = 1;
    $("#pln" + imgNo).css("display", "unset");
    $("#pln" + imgNext).css("display", "none");

        // ____Bildunterschrift____
    buNext = buNo;
    buNo= 1 ;
    $("#bildusP" + buNo).css("display", "unset");
    $("#bildusP" + buNext).css("display", "none");

    } else { 
        imgNext = imgNo + 1;

        $("#pln" + imgNo).css("display", "none");
        $("#pln" + imgNext).css("display", "unset");
        imgNo = imgNo + 1;
        console.log(imgNo);
        console.log(imgNext);

        // ____Bildunterschrift____
        buNext = buNo + 1;

        $("#bildusP" + buNo).css("display", "none");
        $("#bildusP" + buNext).css("display", "unset");
        buNo = buNo + 1;

        
    }

});

// RÜCKWERTS_________________

$(document.body).on("click", ".ar-l-pln",function(){
    
    if(imgNo == 1){
    imgNext = imgNo;    
    imgNo = count2;
    $("#pln" + imgNo).css("display", "unset");
    $("#pln" + imgNext).css("display", "none");

    // ____Bildunterschrift____

    buNext = buNo;
    buNo = count;
    $("#bildus" + buNo).css("display", "unset");
    $("#bildus" + buNext).css("display", "none");

    } else { 
        imgNext = imgNo - 1;

        $("#pln" + imgNo).css("display", "none");
        $("#pln" + imgNext).css("display", "unset");
        imgNo = imgNo - 1;
        console.log(imgNo);
        console.log(imgNext);

        // ____Bildunterschrift______

        buNext = buNo - 1;

        $("#bildus" + buNo).css("display", "none");
        $("#bildus" + buNext).css("display", "unset");
        buNo = buNo - 1;
    }

});



// _____Switch Img/plans_______________________________________________________

$(document.body).on("click", "#img-btn",function(){

    $(".img-container").css("display", "flex");
    $(".plan-container").css("display", "none");
    $("#pln" + imgNo).css("display", "none");
    $("#img" + imgNo).css("display", "none");
    $("#img1").css("display", "unset");
    imgNo = 1;
    console.log(imgNo);

    // Bildunterschrift
    $("#bildus" + buNo).css("display", "none");
    $("#bildusP" + buNo).css("display", "none");
    $("#bildus1").css("display", "unset");
    buNo = 1;

    // line_________
    $(this).css("border-bottom", "solid 1px");
    $("#pln-btn").css("border-bottom", "none");

    $("#img-arrows").css("display", "flex");
    $("#pln-arrows").css("display", "none");


});

$(document.body).on("click", "#pln-btn",function(){

    $(".plan-container").css("display", "flex");
    $(".img-container").css("display", "none");
    $("#img" + imgNo).css("display", "none");
    $("#pln" + imgNo).css("display", "none");
    $("#pln1").css("display", "flex");
    imgNo = 1;
    console.log(imgNo);

    // Bildunterschrift
    $("#bildusP" + buNo).css("display", "none");
    $("#bildus" + buNo).css("display", "none");
    $("#bildusP1").css("display", "unset");
    buNo = 1;

    // line_________
    $(this).css("border-bottom", "solid 1px");
    $("#img-btn").css("border-bottom", "none");

    $("#pln-arrows").css("display", "flex");
    $("#img-arrows").css("display", "none");

});


// _________SWIPE-MOBILE____________________________________________//















// _______Reset switch project___________

$(document.body).on("click", ".list-item",function(){
    imgNo = 1;
    buNo = 1;
});


$(document.body).on("click", ".list-item", function(){setTimeout(reCount, 200)});



function reCount(){
    count = $(".img-container img").length;
    count2 = $(".plan-container img").length;
    console.log(count);
}




