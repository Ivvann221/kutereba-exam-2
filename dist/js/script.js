let slider = $(document).ready(function () {
  $('.slider-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
{
  breakpoint: 851,
  settings: {
    slidesToShow: 2,
  }
},{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
  }
}
    ]
  });
});

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});
$(".menu-collapsed").click(function() {
  $(".header__content_logo").toggleClass("header-active");
});


