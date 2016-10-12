$(function(){
	$("#menu").click(function(){ 
			$(this).siblings("#nav").animate({right: '0'}, 1000);	
			
	});
	$("#close_menu").click(function(){ 
			$(this).parent("#nav").animate({right: '-55%'}, 1000);	
	
	});
})
$(function(){
	$(".wenhua li").hover(function(){
		$(this).find("div").stop().animate({"bottom":"0px"},700);
	},function(){
		$(this).find("div").stop().animate({"bottom":"-200px"},700);
	});
})