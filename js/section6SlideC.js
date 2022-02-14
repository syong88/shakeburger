jQuery(function(){
	
	var a=[];
	var cnt=0;
	
	
	
	//autoPlay();
	
	function autoPlay(){
		setId=setInterval(nextCountFn,2000);
	}
	
	//화살버튼 클릭 이벤트
	$('.nextBtC').on({
		click:	function(){
			nextCountFn();
		}
	});
	
	$('.prevBtC').on({
		click:	function(){
			prevCountFn();
		}
	});
	
	//다음슬라이드 카운트 함수
	function nextCountFn(){
		cnt++;
		if( cnt>7 ){
			cnt=0;
		}
		nextSlideFn(cnt);
	}
	
	//이전슬라이드 카운트 함수
	function prevCountFn(){
		cnt--;
		if( cnt<0 ){
			cnt=7;
		}
		prevSlideFn(cnt);
	}
	
	
	//메인 다음 슬라이드 함수
	function nextSlideFn(z){
		
		if(z==0){
			a=[7,0,1,2,3,4,5,6];
		}
		else if(z==1){
			a=[0,1,2,3,4,5,6,7];
		}
		else if(z==2){
			a=[1,2,3,4,5,6,7,0];
		}
		else if(z==3){
			a=[2,3,4,5,6,7,0,1];
		}
		else if(z==4){
			a=[3,4,5,6,7,0,1,2];
		}
		else if(z==5){
			a=[4,5,6,7,0,1,2,3];
		}
		else if(z==6){
			a=[5,6,7,0,1,2,3,4];
		}
		else if(z==7){
			a=[6,7,0,1,2,3,4,5];
		}
		
		
		
		$('.slideC').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},1000);
		$('.slideC').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},1000);
		$('.slideC').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},1000);
		$('.slideC').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},1000);
		$('.slideC').eq(a[4]).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},1000);
		$('.slideC').eq(a[5]).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},1000);
		$('.slideC').eq(a[6]).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},1000);
		$('.slideC').eq(a[7]).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},1000);

	}
	
	
	//메인 이전 슬라이드 함수
	function prevSlideFn(z){
		
		if(z==7){
			a=[0,7,6,5,4,3,2,1];
		}
		else if(z==6){
			a=[7,6,5,4,3,2,1,0];
		}
		else if(z==5){
			a=[6,5,4,3,2,1,0,7];
		}
		else if(z==4){
			a=[5,4,3,2,1,0,7,6];
		}
		else if(z==3){
			a=[4,3,2,1,0,7,6,5];
		}
		else if(z==2){
			a=[3,2,1,0,7,6,5,4];
		}
		else if(z==1){
			a=[2,1,0,7,6,5,4,3];
		}
		else if(z==0){
			a=[1,0,7,6,5,4,3,2];
		}
		
		
		
		$('.slideC').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*1)+'%'},1000);
		$('.slideC').eq(a[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},1000);
		$('.slideC').eq(a[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100* -1)+'%'},1000);
		$('.slideC').eq(a[3]).stop().animate({left:(100*-3)+'%'},0).animate({left:(100* -2)+'%'},1000);
		$('.slideC').eq(a[4]).stop().animate({left:(100*-4)+'%'},0).animate({left:(100* -3)+'%'},1000);
		$('.slideC').eq(a[5]).stop().animate({left:(100*-5)+'%'},0).animate({left:(100* -4)+'%'},1000);
		$('.slideC').eq(a[6]).stop().animate({left:(100*-6)+'%'},0).animate({left:(100* -5)+'%'},1000);
		$('.slideC').eq(a[7]).stop().animate({left:(100*-7)+'%'},0).animate({left:(100* -6)+'%'},1000);

	}
	
});

//section6SlideC.js