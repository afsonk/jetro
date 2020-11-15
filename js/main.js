$(function(){
  $('.slider__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: false,
      }
    }
  ],
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider__inner',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 455,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});


$('.header__menu-btn').on('click',function(){
   $('.header__menu ul').slideToggle();
});

});
 