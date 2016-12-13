$(document).ready(function() {
  $("#owl-slider-top").owlCarousel({
    autoPlay : 4000,
    navigation : true,
    slideSpeed : 400  ,
    paginationSpeed : 400,
    singleItem:true
  });
});

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000,
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });
});

$(document).ready(function() {
  $("#owl-slider-tes").owlCarousel({
    autoPlay : 3000,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });
});

jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 300) {
    jQuery('.scrollToTop').fadeIn();
  } else {
    jQuery('.scrollToTop').fadeOut();
  }
});

//Click event to scroll to top

jQuery('.scrollToTop').click(function(){
  jQuery('html, body').animate({scrollTop : 0},800);
  return false;
});
