$(function(){
	var tabHeight=$(".tab-img").height()+35;
	console.log(tabHeight);
	$(".tab-text").css({
		height:tabHeight
	});
	
	$(".tab-contents").hide();
	$(".tab a").click(function(){
		$(".tab-contents").hide();
		$(this.hash).show();
		$(".tab a .g-img.active").removeClass("active");
		$(this).find(".g-img").addClass("active");
		return false;
	}).filter(":first").click();
});