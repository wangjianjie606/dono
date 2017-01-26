function blogInit(){
	$("#backBtn").on("click",function(){
		history.go(-1);
	});
	
	$('#menuBtn').on("click",function(){
		const width = $(this).parent().width();
		if(width>40){
			$("#menuBtn").attr("class","closeMenuBtn");
			$("#leftDiv").attr("class","closeMenu");
			$("#sidebarContent").attr("class","closeSidebarContent");
		}else{
			$("#menuBtn").attr("class","openMenuBtn");
			$("#leftDiv").attr("class","openMenu");
			$("#sidebarContent").attr("class","openSidebarContent");
		}
	});
}