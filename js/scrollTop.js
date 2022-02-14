$(function(){

	
	$(window).scroll(function(){
		
		if( $(window).scrollTop() >= 30 ){
			$('.goTop').addClass('addGoTop');
		}
		else{
			$('.goTop').removeClass('addGoTop');
		}
		
	});
	
	

}); //scrollTop.js


