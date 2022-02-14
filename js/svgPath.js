$(function(){
	var _path=$('#svgPath1').find('path');
	var objTotLen = [];
	
	
	svgPathFn();
	setInterval(svgPathFn, 8000);
	
	function svgPathFn(){
		$.each(_path,function(index, obj){
			
			objTotLen[index] = obj.getTotalLength();
			
			obj.style.strokeDasharray = objTotLen[index];
			obj.style.strokeDashoffset = objTotLen[index];
			
		
			$(obj).stop().animate({strokeDashoffset:0},5000, function(){
				$(this).stop().animate({strokeDashoffset:objTotLen[index]},2000);
			});
			
		});
	}
	

	
});

//svgPath.js