$(function() {
  //js to toggle offcanvas contacts menu
  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });

  //js for search
  $("#search").on("click", function() {
    $("#search-form").toggle();
  });

  //js for freatured products slider
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

// to initiate banner parallax
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
