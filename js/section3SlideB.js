jQuery(function(){
  
   var winW = $(window).innerWidth();
  var cnt=0;
  
  
  $('.section3-slide-wrap').swipe({
	  swipeLeft:	function(){
		nextCountFn();
	  },
	  swipeRight:	function(){
		prevCountFn();
	  }
  });
  
  $('.nextBtB').on({
		click:	function(){
			if( !$('.section3-slide-wrap').is(':animated') ){
				nextCountFn();
			}
		}
  });
  $('.prevBtB').on({
		click:	function(){
			if( !$('.section3-slide-wrap').is(':animated') ){
				prevCountFn();
			}	
		}
  });
  
  nextCountFn();
  //다음,이전슬라이드 카운트 함수
  function nextCountFn(){
	  cnt++;
	  mainSlideFn(cnt);
	  resizeSlideFn(cnt);
	  
  }
  function prevCountFn(){
	  cnt--;
	  mainSlideFn(cnt);
	  resizeSlideFn(cnt);
  }
  
  //리사이즈 슬라이드 함수
  function resizeSlideFn(k){
	  
	if( winW<400 ){
				
		$('.section3-slide-wrap').stop().animate({left:-((390*1)*cnt)},400, function(k){
			
			if(k>=7){  
				cnt=0; 
				$('.section3-slide-wrap').stop().animate({left:-((390*1)*cnt)},0);	
			}
			if(k<0){  
				cnt=7;  
				$('.section3-slide-wrap').stop().animate({left:-((390*1)*cnt)},0);	
			}
			
		});	
	}
		  
  }
  
  //메인 슬라이드 함수
  function mainSlideFn(z){
	  
	  
		$('.section3-slide-wrap').filter(':not(:animated)').stop().animate({left:-((390*2)*z)},400, function(){
			
			if(z>=4){   
				cnt=0; 
				$('.section3-slide-wrap').stop().animate({left:-((390*2)*cnt)},0);	
			}
			if(z<0){  
				cnt=3;  
				$('.section3-slide-wrap').stop().animate({left:-((390*2)*cnt)},0);	
			}

			
		});
		
		
		
				
  }
	
});
//section3SlideB.js
	