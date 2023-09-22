$(document).ready(function () {
  // While we are changing the value of the input field then we can use the val() method and we can also get the value of the input field and for HTML we can use the html() method and we can also get the html of the input field
  $("#submit").click(function () {
    console.log($("input#name").val());
  });

  // Changing text area value
  $("textarea").val("Testing Jquery");
  

    // Changing the value of the input field
    $("input#name").val("Testing Jquery");

    // Empty the value of the input field
    // $("input#email").val("");   OR

    // Empty the value of the html element
    $(".check").empty();

    $(".check").text("Hello World");
    $(".check").append("<br>Hello World2");

    // Changing the html of the element
    $(".check").html("<b>Hello World</b>");

    // Remove the element
    $(".content>span").remove();

    // Adding the class
    $(".content").addClass("newClass");

    // Removing the class
    $(".content").removeClass("newClass");

    // Toggle the class
    $(".content").toggleClass("newClass");

    // Changing the css
    $(".newClass").css("background", "red");

    // get the value of the attribute
    console.log($(".newClass").css("background"));


    // Ajax using jquery
    




});
