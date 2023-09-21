$(document).ready(function () {
  // *** Mouse Events *** -> Single click Event

  // hover

  $("body").hover(function () {
    console.log("Hovering on the body");
  });
  $("p[id='p1']").click(function () {
    console.log("You clicked on para with id p2", this);
    $(this).css("background", "yellow");
  });

  //   Double click Event
  $("p[id='p1']").dblclick(function () {
    console.log("You double clicked on para with id p2", this);
    $(this).css("background", "orange");
  });

  //   Mouse Enter Event
  $("p[id='p1']").mouseenter(function () {
    console.log("Your mouse is inside the para with id p2", this);
    $(this).css("background", "red");
  });

  //   Mouse leave Event
  $("p[id='p1']").mouseleave(function () {
    console.log("Your mouse is outside the para with id p2", this);
    $(this).css("background", "red");
  });

  // Mouse over Event
  $("p[id='p1']").mouseover(function () {
    console.log("Your mouse is over the para with id p2", this);
    $(this).css("background", "magenta");
  });

  //   Mouse out Event
  $("p[id='p1']").mouseout(function () {
    console.log("Your mouse is out of para with id p2", this);
    $(this).css("background", "pink");
  });

  // Keyboard Event

  // Keypress
  $("input:eq(0)").keypress(function () {
    console.log("Key pressed in Input 1");
  });

  // Keydown
  $("input:eq(1)").keydown(function () {
    console.log("Key Up in Input 2");
  });

  // keyup
  $("input:eq(2)").keyup(function () {
    console.log("Key down in Input 3");
  });

  // on method in jQuery
  $(".box").on("mouseenter", function () {
    $(this).css("background", "lime");
  });

  $(".box").on("mouseleave", function () {
    $(this).css("background", "green");
  });

  $(".box").on("click", function () {
    console.log("Clicked on box");
    $(this).css("background", "orange");
  });

  // Hide and Show using JQuery

  // For directly hide and show
  // $("div.para").hide()
  // $("div.para").show()

  // But hide and show takes two params
  // $("div").hide(time_in_ms,callback)

  $("div.para").hide(2000, () => {
    console.log("The para is hidden Now");
  });

  $("div.para").show(2000, () => {
    console.log("The para is visible Now");
  });
  
});
