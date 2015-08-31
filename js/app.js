$(document).ready(function() {

	$('.navbar a').smoothScroll();

    $('.navbar a').click(function() {
        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');
    });

});