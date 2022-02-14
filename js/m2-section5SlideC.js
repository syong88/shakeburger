$(function(){
	var a = [];
	var b = [];
	var cnt = 0;
	var n = $('.slideC').length-1;
	
	
	
	
	
	//다음버튼클릭 이벤트
	$('.sec5NextBt').on({
		click:	function(){
			nextCountFn();
		}
	});
	//이전버튼클릭 이벤트
	$('.sec5PrevBt').on({
		click:	function(){
			prevCountFn();
		}
	});
	
	//메인2 섹션5 메인 다음 슬라이드 카운트 함수
	function nextCountFn(){
		cnt++;
		if( cnt>n ){
			cnt=0;
		}
		nextSlideFn(cnt);
	}
	
	function prevCountFn(){
		cnt--;
		if( cnt<0 ){
			cnt=n;
		}
		prevSlideFn(cnt);
	}
	
	
	//메인2 섹션5 메인 다음 슬라이드함수
	function nextSlideFn(z){
		
		if( z==0 ){
			a = [ 8,0,1,2,3,4,5,6,7 ]
		}
		else if( z==1 ){
			a = [ 0,1,2,3,4,5,6,7,8 ]
		}
		else if( z==2 ){
			a = [ 1,2,3,4,5,6,7,8,0 ]
		}
		else if( z==3 ){
			a = [ 2,3,4,5,6,7,8,0,1 ]
		}
		else if( z==4 ){
			a = [ 3,4,5,6,7,8,0,1,2 ]
		}
		else if( z==5 ){
			a = [ 4,5,6,7,8,0,1,2,3 ]
		}
		else if( z==6 ){
			a = [ 5,6,7,8,0,1,2,3,4 ]
		}
		else if( z==7 ){
			a = [ 6,7,8,0,1,2,3,4,5 ]
		}
		else if( z==8 ){
			a = [ 7,8,0,1,2,3,4,5,6 ]
		}
		
		$('.slideC').eq(a[0]).stop().animate({left:(220*0)},0).animate({left:(220*-1)},500);
		$('.slideC').eq(a[1]).stop().animate({left:(220*1)},0).animate({left:(220*0)},500);
		$('.slideC').eq(a[2]).stop().animate({left:(220*2)},0).animate({left:(220*1)},500);
		$('.slideC').eq(a[3]).stop().animate({left:(220*3)},0).animate({left:(220*2)},500);
		$('.slideC').eq(a[4]).stop().animate({left:(220*4)},0).animate({left:(220*3)},500);
		$('.slideC').eq(a[5]).stop().animate({left:(220*5)},0).animate({left:(220*4)},500);
		$('.slideC').eq(a[6]).stop().animate({left:(220*6)},0).animate({left:(220*5)},500);
		$('.slideC').eq(a[7]).stop().animate({left:(220*7)},0).animate({left:(220*6)},500);
		$('.slideC').eq(a[8]).stop().animate({left:(220*8)},0).animate({left:(220*7)},500);

	}
	
	//메인2 섹션5 메인 이전 슬라이드함수
	function prevSlideFn(z){
		
		if( z==8 ){
			b = [ 0,8,7,6,5,4,3,2,1 ]
		}
		else if( z==7 ){
			b = [ 8,7,6,5,4,3,2,1,0 ]
		}
		else if( z==6 ){
			b = [ 7,6,5,4,3,2,1,0,8 ]
		}
		else if( z==5 ){
			b = [ 6,5,4,3,2,1,0,8,7 ]
		}
		else if( z==4 ){
			b = [ 5,4,3,2,1,0,8,7,6 ]
		}
		else if( z==3 ){
			b = [ 4,3,2,1,0,8,7,6,5 ]
		}
		else if( z==2 ){
			b = [ 3,2,1,0,8,7,6,5,4 ]
		}
		else if( z==1 ){
			b = [ 2,1,0,8,7,6,5,4,3 ]
		}
		else if( z==0 ){
			b = [ 1,0,8,7,6,5,4,3,2 ]
		}
		
		$('.slideC').eq(b[0]).stop().animate({left:(220*2)},0).animate({left:(220*3)},500);
		$('.slideC').eq(b[1]).stop().animate({left:(220*1)},0).animate({left:(220*2)},500);
		$('.slideC').eq(b[2]).stop().animate({left:(220*0)},0).animate({left:(220*1)},500);
		$('.slideC').eq(b[3]).stop().animate({left:(220*-1)},0).animate({left:(220*0)},500);
		$('.slideC').eq(b[4]).stop().animate({left:(220*-2)},0).animate({left:(220*-1)},500);
		$('.slideC').eq(b[5]).stop().animate({left:(220*-3)},0).animate({left:(220*-2)},500);
		$('.slideC').eq(b[6]).stop().animate({left:(220*-4)},0).animate({left:(220*-3)},500);
		$('.slideC').eq(b[7]).stop().animate({left:(220*-5)},0).animate({left:(220*-4)},500);
		$('.slideC').eq(b[8]).stop().animate({left:(220*-6)},0).animate({left:(220*-5)},500);

	}
	
	
	
}); //m2-section5SlideC.js









