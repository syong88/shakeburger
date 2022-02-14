$(function(){
	
	var sec2Top = $('#section2').offset().top;
	var t = 0;
	var url='';
	
	//고탑버튼클릭 스무스 스크롤링 이벤트
	$('.gotopBt').on({
		click:	function(){
			src=1;
			event.preventDefault();
			url = $(this).attr('href');
			
			$('html,body').stop().animate({ scrollTop: $( url ).offset().top-60 },600,'swing');
		}
	});
	
	
	
	

	
	
}); //scroll.js

