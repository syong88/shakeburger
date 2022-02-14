$(function(){
	
	//앱바close버튼 클릭시 앱바박스 감추기
	$('.appBarBt').on({
		click:	function(){
			$('.appBar').css({display:'none'});
			$('#header').css({paddingTop:0});
			
		}
	});
	

	
	
	
}); //appBar.js

