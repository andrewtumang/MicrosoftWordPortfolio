$('img').on('dragstart', function(event) { event.preventDefault(); });


$(".pressable").mousedown(function() {
  if($(this).attr("src").includes("hover")) {
    $(this).attr("src",$(this).attr("src").slice(0,-10).concat("_press.png"));
  }
  else {
    $(this).attr("src",$(this).attr("src").slice(0,-4).concat("_press.png"));
  }
});
$(".pressable").mouseup(function() {
  if($(this).attr("src").includes("press")) {
    if($(this).hasClass("hoverable")) {
      $(this).attr("src",$(this).attr("src").slice(0,-10).concat("_hover.png"));
    }
    else {
      $(this).attr("src",$(this).attr("src").slice(0,-10).concat(".png"));
    }
  }
});
$(".pressable").mouseleave(function() {
  if($(this).attr("src").includes("press")) {
    $(this).attr("src",$(this).attr("src").slice(0,-10).concat(".png"));
  };
});
$(".hoverable").mouseover(function() {
  $(this).attr("src",$(this).attr("src").slice(0,-4).concat("_hover.png"));
});
$(".hoverable").mouseleave(function() {
  if($(this).attr("src").includes("hover")) {
    $(this).attr("src",$(this).attr("src").slice(0,-10).concat(".png"));
  };
});



// ASSISTANT

$(".options").on("click", "#close", function(event) {
  $(".bubble-text").text("Goodbye!");
  $(".options").css("display", "none");
  setTimeout(function(){
    $(".assistant").css("display", "none");
  }, 1000);
});

$(".options").on("click", "#projects", function(event) {
  window.location.assign("DTPC.html")
});