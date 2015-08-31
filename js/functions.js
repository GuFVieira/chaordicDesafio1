$('#myCarousel').on('slid', '', function() {
  var $this = $(this);

  if($('.carousel-inner .item:first').hasClass('active')) {
    $this.children('.left.carousel-control').hide();
  } else if($('.carousel-inner .item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
  } else {
    $this.children('.carousel-control').show();
  }

});