$(function(){
	$(".main-nav>ul>li").click(function(){
		
		
		if($(this).find(".m-drop").is(":hidden")){
			$(".m-drop").slideUp();
			$(this).find(".m-drop").slideDown();
		}else{
			$(this).find(".m-drop").slideUp();
		}
		
	});
	$(".m-bt").click(function(){
		$(".main-nav").stop().animate({
			left:0
		});
	});
	$(".m-close").click(function(){
		$(".main-nav").stop().animate({
			left:"-100%"
		});
		$(".m-drop").delay(500).slideUp();
	});
	
});