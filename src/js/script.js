let slider = $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

$('.item').on('click', function () {
  $('.item').removeClass('active');
  $(this).addClass('active');
  let tabs = $(this).data("tabs");

  $('.pages').addClass('d-none');
  $('.pages[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.pages[data-tabs = ' + tabs + ']').addClass('d-block');
}) 

$('.item-tabs').on('click', function () {
  $('.item-tabs').removeClass('active-tabs');
  $(this).addClass('active-tabs');
  let tabs = $(this).data("tabs");

  $('.content-tabs').addClass('d-none');
  $('.content-tabs[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.content-tabs[data-tabs = ' + tabs + ']').addClass('d-block');
}) 
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});