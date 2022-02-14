$(function(){
	var cnt = clickCount = 0;
	
	//more partners 버튼클릭마다 한줄씩 보이게 하는 이벤트
	$('.sec11MoreBt').on({
		click:	function(){
			clickCount++;
			for( i=cnt; i<cnt+4; i++  ){
				$('.more').eq(i).css({display:'inline-block'}).fadeOut(0).fadeIn(1000, function(){
					if( clickCount>=6 ){
						$('.sec11-Bt').fadeOut(0);
						$('.sec11-LessBt').fadeIn(0);
						return false; 
					}
				});
			}
			cnt+=4;			
		}
	});
	
	$('.sec11AllBt').on({
		click:	function(){
			
			$('.more').css({display:'inline-block'});
			$('.sec11-Bt').hide();
			$('.sec11-LessBt').show();
			
		}
	});	
	
	$('.sec11LessBt').on({
		click:	function(){
			clickCount=1;
			cnt=4;
			
			$('.sec11-Bt').fadeIn(0);	
			$('.sec11-LessBt').fadeOut(0);			
			
			$('.more').css({display:'none'});
			
			$('.more').eq(0).css({display:'inline-block'}).fadeOut(0).fadeIn(1000);
			$('.more').eq(1).css({display:'inline-block'}).fadeOut(0).fadeIn(1000);
			$('.more').eq(2).css({display:'inline-block'}).fadeOut(0).fadeIn(1000);
			$('.more').eq(3).css({display:'inline-block'}).fadeOut(0).fadeIn(1000);
			
		}
	});	
	
});

//m2-section11Bt.js
























