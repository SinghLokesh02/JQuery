$(document).ready(function () {
  $(".box").animate({
    left: "250px",
    height: "+=150px",
    width: "+=150px",
  });

  // We can also use the toggleClass() method to toggle between adding and removing a class name from selected elements.
  $("button").click(function () {
    $("div").toggleClass("main");
  });

  // $("button").click(function(){
  //     $("div").fadeToggle(1000,()=>{
  //         alert("Fade Completed");
  //     });
  // });

//   $("div").fadeOut(1000, () => {
//     console.log("Fade Completed");
//   });

//   $("div").fadeIn(3000, () => {
//     console.log("FadeIn Completed");
//   });

//   Queuing the animations
  $(".box").animate({opacity: 0.5},2000);
  $(".box").animate({width: "300px"},5000);
  $(".box").animate({height: "300px"},5000);

// Stop the animation
$("button#btn").click(()=>{
    $(".box").stop();
});

// Get text of the html
$("button#btn2").click(()=>{
    console.log($("p#p2").text());
});

// Set text of the html
$("button#btn2").click(()=>{
    $("p#p2").text("Hello World");
});

// Get html of the html
$("button#btn2").click(()=>{
    console.log($("p#p2").html());
});

// Set html of the html
$("button#btn2").click(()=>{
    $("p#p2").html("<h1>Hello World</h1>");
});


});
