function blogInit(){
	$("#backBtn").on("click",function(){
		history.go(-1);
	});
	
	$('#menuBtn').on("click",function(){
		const width = $(this).width();
		if(width>20){
			$("#menuBtn").attr("class","closeMenuBtn");
			$("#leftDiv").attr("class","closeMenu");
		}else{
			$("#menuBtn").attr("class","openMenuBtn");
			$("#leftDiv").attr("class","openMenu");
		}
	});
}