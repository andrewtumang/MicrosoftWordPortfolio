

$(window).resize(function() {
  $(".items").children().each(function() {
    $(this).removeClass("hidden");
    var r = $(this).offset().left + $(this).width()+25;
    
    if($(window).width() > r && $(this).hasClass("hidden")) {
      $(this).removeClass("hidden");
    }
    else if($(window).width() < r && !$(this).hasClass("hidden")) {
      $(this).addClass("hidden");
    }
    
  });
    
  if($(window).width() <= 715) {
    $(".bar-end1").attr("src", $(".bar-end1").attr("src").replace("1","2"));
    $(".bar-end2").attr("src", $(".bar-end2").attr("src").replace("1","2"));
  }
  else if($(window).width() <= 770) {
    $(".bar-end1").attr("src", $(".bar-end1").attr("src").replace("1","2"));
    $(".bar-end2").attr("src", $(".bar-end2").attr("src").replace("2","1"));
  }
  else {
    $(".bar-end1").attr("src", $(".bar-end1").attr("src").replace("2","1"));
    $(".bar-end2").attr("src", $(".bar-end2").attr("src").replace("2","1"));}
});

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
  $(".clippy").css("background","url('images/clippy_fly.png')");
  $(".clippy").css("animation", "fly 4s steps(50)");
  setTimeout(function(){
    $(".assistant").css("display", "none");
  }, 4000);
});


$(".options").on("click", "#projects", function(event) {
  window.location.assign("DTPC.html")
});