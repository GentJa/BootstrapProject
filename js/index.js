$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbarContainer").addClass("sticky");
    } else {
      $(".navbarContainer").removeClass("sticky");
    }
  });
});

$(".menu-btn").click(function () {
  $(".navbarContainer .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});


