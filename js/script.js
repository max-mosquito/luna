$(document).ready(function(){

// slider1
	$('.slider1').slick({
		arrows:false,
		slidesToShow:4,
		autoplay: true,
		variableWidth:true,
	});

//tabs
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

//slider2
	$('.slider2').slick({
		arrows:false,
		centerMode: true,
		autoplay: true,
	});

//popup magnific
	$('.popup').magnificPopup();
});