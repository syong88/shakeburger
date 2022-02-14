$(function(){
	
	var a = [];
	var b = [];
	var cnt=0;
	var n = $('.slideB').length-1;
	var setId=setTimeId=TimeCount=0;
	
	
	autoPlayFn();
	
	function autoPlayFn(){
		setId=setInterval(nextCountFn,4000);
	}
	
	//터치스와이프
	$('.section3-wrap').swipe({
		swipeLeft:	function(){
			nextCountFn();
			timePlayFn();
		},
		swipeRight:	function(){
			prevCountFn();
			timePlayFn();
		}
	});
	
	//터치후 타이머함수 : 10초동안 터치를 안하면 슬라이드 재실행 하는 타이머
	function timePlayFn(){
		//일정시간이 지난 뒤에 자동으로 실행해주는 프로그램 필요함(타이머) 함수
		clearInterval(setId); //4초마다 실행하는 자동함수 중지
		TimeCount=0; //터치 타이머 카운트변수 초기화
		clearInterval(setTimeId); //터치 타이머 실행 중지 초기화
		
		
		setTimeId = setInterval(function(){
						TimeCount++;
						if(TimeCount>=6){ //10초
							
							autoPlay();
								
							clearInterval(setTimeId); //터치 타이머 중지
							
						}
					},1000);
	}

	// 다음슬라이드 카운트 함수
	function nextCountFn(){
		cnt++;
		if( cnt>n ){
			cnt=0;
		}
		nextSlideFn(cnt);
	}
	// 이전슬라이드 카운트함수
	function prevCountFn(){
		cnt--;
		if( cnt<0 ){
			cnt=n;
		}
		prevSlideFn(cnt);
	}
	
	
	
	//다음버튼 클릭이벤트
	$('.nextBtB').on({
		click:	function(){
			nextCountFn();
		}
	});
	//이전버튼 클릭이벤트
	$('.prevBtB').on({
		click:	function(){
			prevCountFn();
		}
	});
	
	
	
	

	//페이지네이션 구현 함수
	function pageNationFn(y,z){
		pageBtFn(z);
		//현재실행중인슬라이드 = y
		//클릭해서이동하여보여질슬라이드 = z
		$('.slideB')      .css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0); 
		$('.slideB').eq(y).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1500);
		$('.slideB').eq(z).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0); 
		
	}
	
	//페이지 버튼 함수
	function pageBtFn(){
		$('.m2-pageBt').removeClass('addM2PageBt');
		$('.m2-pageBt').eq(cnt).addClass('addM2PageBt');
		
	}
	
	//pageBt 클릭 페이지네이션
	$('.m2-pageBt').each(function(index){
		$(this).on({
			click:	function(){
				if( cnt!=index ){ //현재실행중인 슬라이드가 아닐 때 실행
					
					pageNationFn(cnt,index);
					cnt=index;
				}
				pageBtFn();
			}
		});
	});


	
	//메인다음슬라이드 함수 opacity
	function nextSlideFn(z){
		
		pageBtFn();
		
		if( z==0 ){
			a = [3,0,1,2];
		}
		if( z==1 ){
			a = [0,1,2,3];
		}
		if( z==2 ){
			a = [1,2,3,0];
		}
		if( z==3 ){
			a = [2,3,0,1];
		}
		
		$('.slideB').eq(a[0]).stop().css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
		$('.slideB').eq(a[1]).stop().css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
		$('.slideB').eq(a[2]).stop().css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideB').eq(a[3]).stop().css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		
	}
	
	//메인이전슬라이드 함수 opacity
	function prevSlideFn(z){
		
		pageBtFn();
		
		if( z==3 ){
			b = [0,3,2,1];
		}
		if( z==2 ){
			b = [3,2,1,0];
		}
		if( z==1 ){
			b = [2,1,0,3];
		}
		if( z==0 ){
			b = [1,0,3,2];
		}
		
		$('.slideB').eq(b[0]).stop().css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1500);
		$('.slideB').eq(b[1]).stop().css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
		$('.slideB').eq(b[2]).stop().css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideB').eq(b[3]).stop().css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		
	}
	
	
	
	
	
}); //m2-section3SlideB.js

