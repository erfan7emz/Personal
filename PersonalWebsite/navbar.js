$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("stick");
  } else {
    $("nav").removeClass("stick");
  }
});