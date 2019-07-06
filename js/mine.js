$(document).ready(function(){
    
//    Start of Preloader-spinner
    $(".preloader").fadeOut(300, function(){
       $("body").css('overflow-y', 'auto'); 
       $(".preloader").addClass("hide_preloader");
       $(".preloader img").addClass("hide_preloader");
//        $(".preloader").css("display", "none");
    });
    
    
//    Start of NiceScrolling
    $("body, html").niceScroll({
        cursorcolor:"#4bacf1",
        cursorwidth:"6px"
    });
    
//    ES6
//    const createCars = (() => {
//                     console.log("lk ngewg");   
//                        
//                        
//                       })();
    
    
});
