//   Syntax of JQuery
//   $(selector).action()
console.log($);
console.log(jQuery);

// below is the syntax of jquery
// $(selector).action()
$("p").click(); //click on the p tag it is automatically clicked

$(document).ready(function () {
  //   all the jquery code will be written here
  // Why we write all jquery code here ?
  // Because we want to make sure that all the html elements are loaded before we run the jquery code
});

//   We can also use the function like this
$(function () {
  //   all the jquery code will be written here
});

// we can also use the function on click event
$("p").click(function () {
  console.log("You clicked on p", this);

  // Change style of the p tag
  // $(this).hide()

  // Change color of the p tag

  //   Both will execute
  $(this).css("color", "red");
  $("p").css("color", "magenta");

  // Change the background of the p tag
  $(this).css("background", "cyan");

  // Change the border of the p tag
  $(this).css("border", "2px solid black");
  $(this).css("border-radius", "15px");
});

// Jquery for id
$("#h1").click(function () {
  $(this).css("color", "blue");
  $(this).css("text-align", "center");
});

// Jquery for class
$(".h2").click(function () {
  $(this).css("color", "green");
  $(this).css("text-align", "center");
});
