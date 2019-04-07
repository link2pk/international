$(function() {
  //alert($.fn.jquery)
  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });

  $(".products").slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 5
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}); //End of document ready

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
