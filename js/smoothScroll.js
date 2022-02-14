jQuery(function(){
	
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
	
	$(window).scroll(function(){
		
		if( $(window).scrollTop()<330 ){
			$('.goTop').hide(300);
		}
		else{
			$('.goTop').show(300);
		}
		
	});
});

//smoothScroll.js