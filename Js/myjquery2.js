$(document).ready(function () {
  // 1) Element Selector
  // Hide Element
  $("p").click(function () {
    console.log("You clicked on p", this);
    $("p").css("background", "cyan");
  });

  // 2) ID Selector
  $("#h1").click(function () {
    console.log("You clicked on h1", this);
    $(this).css("color", "red");
  });

  $("h1").click();


  // 3) Class Selector
  $(".h2").click(function () {
    console.log("You clicked on h2", this);
    $(this).css("color", "green");
  });


  // 4) Multiple Selector
  $("p, #h1, .h2").click(function () {
    console.log("You clicked on p, h1, h2", this);
    $(this).css("color", "blue");
  });


  // 5) Universal Selector
  $("*").click(function () {
    console.log("You clicked on everything", this);
    $(this).css("color", "yellow");
  });


  // Select the first para
  $("p:first").click(function () {
    console.log("You clicked on first para", this);
    $(this).css("color", "orange");
  });


  // Select the last para
  $("p:last").click(function () {
    console.log("You clicked on last para", this);
    $(this).css("color", "pink");
  });

  
  // Select the even para
  $("p:even").click(function () {
    console.log("You clicked on even para", this);
    $(this).css("color", "purple");
  });

  // Select the odd para
  $("p:odd").click(function () {
    console.log("You clicked on odd para", this);
    $(this).css("color", "brown");
  });

  // Select the para with id p2
  $("p[id='p2']").click(function () {
    console.log("You clicked on para with id p2", this);
    $(this).css("color", "gray");
  });

  // Select the para with class f2
  $("p.f2").click(function () {
    console.log("You clicked on para with class f2", this);
    $(this).css("color", "lime");
  });

  // Select para with index 1 (indexing starts from 0)
  $("p:eq(0)").click(function () {
    console.log("You clicked on para with index 1", this);
    $(this).css("color", "red");
  });

  // Select para with index greater than 1
  $("p:gt(1)").click(function () {
    console.log("You clicked on para with index greater than 1", this);
    $(this).css("color", "blue");
  });



});
