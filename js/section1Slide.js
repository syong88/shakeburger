jQuery(function(){
	var a=[];
	var b=[];
	var c=[];
	var cnt=0;
	var n=t=x=z=y=0;
	
	
	autoPlay();
	
	
	
	function autoPlay(){
		setId=setInterval(nextCountFn, 4000);
		
	}
	
	
	//슬라이드 그룹박스 터치 이벤트 swipe
	$('.section1-slide-wrap').swipe({
		swipeLeft:	function(){
			
			nextCountFn();
			
			
		},
		swipeRight:	function(){
			
			prevCountFn();
			
		}
	});

	
	//pageBt 클릭 페이지네이션
	$('.pageBt').each(function(index){
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
	
	//페이지네이션 구현 함수
	function pageNationFn(y,z){
		pageBtFn(z);
		//현재실행중인슬라이드 = y
		//클릭해서이동하여보여질슬라이드 = z
		$('.slideA')      .css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0); 
		$('.slideA').eq(y).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1500);
		$('.slideA').eq(z).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0); 
		
	}
	
	//페이지 버튼 함수
	function pageBtFn(){
		$('.pageBt').removeClass('addPageBt');
		$('.pageBt').eq(cnt).addClass('addPageBt');
		
	}
	
	//플레이정지버튼
	$('.stopBt').on({
		click:	function(){
			if( t==0 ){
				t=1;	
				clearInterval(setId);	
				$(this).find('img').attr('src','img/button_play.png');
			}
			else if( t==1 ){
				t=0;
				autoPlay();
				$(this).find('img').attr('src','img/button_stop.png');
			}
			
		}
	});
	
	
	//다음버튼 클릭이벤트
	$('.arrowNextBt').on({
		click:	function(){
			nextCountFn();
		}
	});
	//이전버튼 클릭이벤트
	$('.arrowPrevBt').on({
		click:	function(){
			prevCountFn();
		}
	});
	
	//다음슬라이드 카운트 함수
	function nextCountFn(){
		cnt++;
		if( cnt>8 ){
			cnt=0;
		}
		mainNextSlideFn(cnt);
	}
	
	//이전슬라이드 카운트 함수
	function prevCountFn(){
		cnt--;
		if( cnt<0 ){
			cnt=8;
		}
		mainPrevSlideFn(cnt);
	}
	
	//메인 다음 슬라이드 다음함수
	function mainNextSlideFn(z){
		pageBtFn();
		if(z==0){
			a=[8,0,1,2,3,4,5,6,7];
		}
		else if(z==1){
			a=[0,1,2,3,4,5,6,7,8];
		}
		else if(z==2){
			a=[1,2,3,4,5,6,7,8,0];
		}
		else if(z==3){
			a=[2,3,4,5,6,7,8,0,1];
		}
		else if(z==4){
			a=[3,4,5,6,7,8,0,1,2];
		}
		else if(z==5){
			a=[4,5,6,7,8,0,1,2,3];
		}
		else if(z==6){
			a=[5,6,7,8,0,1,2,3,4];
		}
		else if(z==7){
			a=[6,7,8,0,1,2,3,4,5];
		}
		else if(z==8){
			a=[7,8,0,1,2,3,4,5,6];
		}
		
		//보일 슬라이드가 나타난다. $('.slide').eq(a[1]).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
		$('.slideA').eq(a[0]).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
		$('.slideA').eq(a[1]).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
		$('.slideA').eq(a[2]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(a[3]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(a[4]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(a[5]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(a[6]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(a[7]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(a[8]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		
	}
	
	
	
	
	
	//메인 이전 슬라이드 함수
	function mainPrevSlideFn(z){
		pageBtFn();
		if(z==8){
			b=[0,8,7,6,5,4,3,2,1];
		}
		else if(z==7){
			b=[8,7,6,5,4,3,2,1,0];
		}
		else if(z==6){
			b=[7,6,5,4,3,2,1,0,8];
		}
		else if(z==5){
			b=[6,5,4,3,2,1,0,8,7];
		}
		else if(z==4){
			b=[5,4,3,2,1,0,8,7,6];
		}
		else if(z==3){
			b=[4,3,2,1,0,8,7,6,5];
		}
		else if(z==2){
			b=[3,2,1,0,8,7,6,5,4];
		}
		else if(z==1){
			b=[2,1,0,8,7,6,5,4,3];
		}
		else if(z==0){
			b=[1,0,8,7,6,5,4,3,2];
		}
		
		$('.slideA').eq(b[0]).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1500);
		$('.slideA').eq(b[1]).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
		$('.slideA').eq(b[2]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(b[3]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(b[4]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(b[5]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(b[6]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(b[7]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		$('.slideA').eq(b[8]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		
	}
	
});
//section1Slide.js