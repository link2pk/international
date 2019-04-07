$(function() {
  //alert($.fn.jquery)
  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });
}); //End of document ready

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
