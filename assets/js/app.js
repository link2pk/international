$(function() {
  //alert($.fn.jquery)
  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });
}); //End of document ready
