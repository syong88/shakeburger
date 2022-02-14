$(function(){
	
	

	
	//화면 너비가 1100초과하면 모두 사이트맵 메인버튼, 서브메뉴가 아이콘 초기화 slideDown
	function sitemapFormatFn(){
		
		//언제? 1100초과이면 서브메뉴가 펼쳐진 모양
		if( $(window).innerWidth() > 770 ){
			
			$('.mobile-modal-footer-list').stop().slideDown(0);
			$('.modalFooterBt').removeClass('addUpIcon');
			t = false; //거짓
			
		}	
		else{ //언제? 1100이하이면 서브메뉴가 접힌 모양
			
			if( t===false ){
				t = true; //참
				$('.modalFooterBt').removeClass('addUpIcon');
				$('.mobile-modal-footer-list').stop().slideUp(0);
			}
		}	
	}

	$(window).resize(function(){
		sitemapFormatFn();
	});

	
	


	$('.modalFooterBt').each(function(index){
		$(this).on({
			click:	function(){
				$('.mobile-modal-footer-list').stop().slideUp(300);
				$(this).next().stop().slideToggle(300);
				
				//사이트맵 메인버튼 초기화및이벤트
				$('.modalFooterBt').eq(index).toggleClass('addUpIcon'); //클릭된 자신의 버튼을 삭제를 못하는 문제발생.
				
				
				for( i=0; i<$('.modalFooterBt').length; i++ ){;
					if( i!=index ){ //현재 클릭된 자신을 제외
						
						if( $('.modalFooterBt').eq(i).attr('class').indexOf('addUpIcon') >= 0 ){
						
							$('.modalFooterBt').eq(i).removeClass('addUpIcon');
							
						}
					}
				}
			}
		});
	});
})

//footer.js