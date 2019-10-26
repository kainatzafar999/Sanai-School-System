$(window).scroll(function(){
	
	if($(this).scrollTop()>5){
		
		$(".cn-stick-nav").addClass("fixed-top nav-bga nav-bdr");
	}
	else{
	$(".cn-stick-nav").removeClass("fixed-top nav-bga nav-bdr");
	}
});
/*var height = $('#header').height();
$window.scroll(function(){
	if($(this).scrollTop()>height){
		$('.nav-stick').addClass('fixed-top');
	}
	else{
		$('.nav-stick').removeClass('fixed-top');
	}
});*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//images events gallery
$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});
    
/*===============events images ======*/
// MDB Lightbox Init
