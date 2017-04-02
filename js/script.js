$(document).ready(function(){
	
	  $('.asideFlex').click(function(e){
		 
		 var smoothScroll = $(this).attr('href');
		 
		 $('html, body').animate({
			 scrollTop: $(smoothScroll).offset().top
		 }, 800);
		 
		 e.preventDefault();
	 });
	 
});