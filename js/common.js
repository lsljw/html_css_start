$(function(){
	$(".main-nav>ul>li").each(function(index){
		$(this).hover(
			function(){
				$(".drop-down>li").eq(index).children(".drop-list").css({
					background:"#666666"
				});
				$(this).children("a").css({
					background:"darkred"
				});
			},
			function(){
				$(".drop-down>li>.drop-list").css({
					background:"orange"
				});
				$(".main-nav>ul>li>a").css({
					background:"black"
				});
				
			}
		);
	});
	
	$(".drop-down>li").each(function(index){
		$(this).hover(
			function(){
				$(this).children(".drop-list").css({
					background:"#666666"
				});
				$(".main-nav>ul>li").eq(index).children("a").css({
					background:"darkred"
				});
			},
			function(){
				$(".drop-list").css({
					background:"orange"
				});
				$(".main-nav>ul>li>a").css({
					background:"black"
				});
				
			}
		);
	});
	
	$(".main-nav>ul>li").mouseenter(function(){
		$(".drop-wrap").slideDown();
	});
	
	$(document).mouseover(function(e){
		if($(e.target).parents(".nav").length==0){
			$(".drop-wrap").slideUp();
		}
	});
	
	
	
	
	
	
	
	
	
});