$(document).ready(function () {
  // fadeout -> method is used to fade out a visible element.
  $(".box1").fadeOut(3000, function () {
    console.log("Box1 fadeout in 3 secs");
  });

  // fadeIn ->  method is used to fade in a hidden element.
  // $(selector).fadeIn(speed,callback);

  $(".box1").fadeIn(3000, function () {
    $(this).css("background", "cyan");
    console.log("Box1 fadein in 3 secs");
  });

  // fadeToggle -> method toggles between the fadeIn() and fadeOut() methods.
  $(".box2").fadeToggle(4000, () => {
    console.log("fadeToggle is working");
  });
  $(".box2").fadeToggle(4000, () => {
    console.log("fadeToggle is working");
  });

  $(".content").fadeOut(1000, function () {
    console.log("para fadeout in 3 secs");
  });

  // fadeIn
  $(".content").fadeIn(1000, function () {
    $(this).css("color", "cyan");
    console.log("para fadein in 3 secs");
  });

  // The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
  $("button").click(function () {
    $(".box1").fadeTo("slow", 0.15);
    $(".box2").fadeTo("slow", 0.4);
    $(".box3").fadeTo("slow", 0.5);
    $(".box4").fadeTo("slow", 0.7);
  });


//   jQuery Effects - Sliding
/*
jQuery slideDown()
Demonstrates the jQuery slideDown() method.

jQuery slideUp()
Demonstrates the jQuery slideUp() method.

jQuery slideToggle()
Demonstrates the jQuery slideToggle() method.

Syntax
$(selector).slideDown(speed,callback);
*/


// $(".box1").slideUp(1000,()=>{
//     console.log("Done SlideUp");
// })

$("div.content").slideUp(1000,()=>{
    console.log("Done SlideUp");
})
$("div.content").slideDown(1000,()=>{
    console.log("Done SlideDown");
})
$("div.content").slideToggle(3000,()=>{
    console.log("Done SlideToggle");
})
$("div.content").slideToggle(3000,()=>{
    console.log("Done SlideToggle");
})


});
