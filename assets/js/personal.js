$(document).ready(function(){ 
	const _headHeight = homeHead.style.height;
	const headHeight = _headHeight.substr(_headHeight.length-2) == "px"?parseInt(_headHeight.substring(0,_headHeight.length-2)):parseInt(_headHeight);	
	const moveValue = 120;
		
	(()=>{
		(()=>{
			if(window.scrollY > headHeight){
				homeMenuBtnDiv.style.top = "0px";
				homeSideBarDiv.style.top = "0px";
			}else{
				homeMenuBtnDiv.style.top = headHeight-window.scrollY+"px";
				homeSideBarDiv.style.top = headHeight-window.scrollY+"px";
			}
			
			if(window.scrollY > 3*headHeight){
				homeTopBtnDiv.style.bottom = "35px";
			}else{
				homeTopBtnDiv.style.bottom = "-48px";
			}
		})();
		
		homeMenuBtn.onclick=()=>{
			const left = $("#homeBodyDiv").css("margin-left");
			if(typeof left === "string"){
				left.substr(left.length-2) == "px" ? moveDiv(parseInt(left.substring(0,left.length-2))):console.error("wrong string");
			}else if(typeof left === "number"){
				moveDiv(left);
			}else console.error("wrong type");
		};
		
		const moveDiv = left =>{
			//主体往左移动120px，显示菜单div 宽度280px 显示为分类及其子项
			if( $("#homeSideBarDiv").css("width") === "0px" ){
				$("#homeMenuBtn").attr("class","btn homeMenuBtnOpen");
				$("#homeBodyDiv").animate({"margin-left" : left-moveValue});
				$("#homeSideBarDiv").animate({"width" : moveValue*2+"px"});
				$("#homeMenuBtnDiv").animate({"right" : "+="+(moveValue-8)+"px"});
			}else{
				$("#homeMenuBtn").attr("class","btn homeMenuBtnClose");
				$("#homeBodyDiv").animate({"margin-left" : left+moveValue},"normal",()=>{$("#homeBodyDiv").css("margin-left","auto")});
				$("#homeSideBarDiv").animate({"width" : "0px"},"normal",()=>{});
				$("#homeMenuBtnDiv").animate({"right" : "-="+(moveValue)+"px"});
			}
		}
		
		//菜单随滚动条滚动
		window.onscroll=()=>{
			const scrollY = window.scrollY;
			if(scrollY<headHeight){
				homeMenuBtnDiv.style.top = headHeight-scrollY+"px";
				homeSideBarDiv.style.top = headHeight-scrollY+"px";
			}else if($("#homeMenuBtnDiv").css("left") != headHeight+"px"){
				homeMenuBtnDiv.style.top = "0px";
				homeSideBarDiv.style.top = "0px";
			}
			
			if(scrollY<900)
				$("#homeTopBtnDiv").animate({"bottom":"-48px"},{queue:false});
			else	
				$("#homeTopBtnDiv").animate({"bottom":"35px"},{queue:false});
		};

		$(".category").on("click",function(){
			const right="3,0  10,5  3,10",down="0,3  10,3  5,10";
			const o = $(this).parent().children("div");
			if(o.css("display")=="none"){
				o.css("display","block");
				$(this).children().children().attr("points",down);
			}else{ 
				o.css("display","none");
				$(this).children().children().attr("points",right);
			}
		});
		
		$("#homeTopBtn").click(()=>{
			$("html, body, .content").animate({scrollTop:0}); 
		});
		
		
		
		
		/* google analytics*/
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-91619330-1', 'auto');
		ga('send', 'pageview');
		
		try{
		　　top.location.hostname;
			top.location.hostname != window.location.hostname?top.location.href =window.location.href:"";
		}catch(e){
		　　top.location.href = window.location.href;
		}
		
		/* baidu tongji */
		var _hmt = _hmt || [];
		(function() {
		  var hm = document.createElement("script");
		  hm.src = "https://hm.baidu.com/hm.js?dc66aa59934745c101e361e554e66cd9";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(hm, s);
		})();
		
	})();

});