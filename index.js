//导航部分子导航
$(function(){
	$("#second").children("li").mouseover(function(){	
		$("#second").children("li:not(:eq("+$(this).index()+"))").children("ul").removeClass("show");

		$(this).children("ul").addClass("show");
	});
});

//导航下面图片的效果
$(function(){
	$("#photo #last li").mouseover(function(){
		$(this).children("img").animate({
			"width":"183px",
			"height":"150px",
			"left":"-5px",
			"top":"-5px"
			
		},1000,function(){
			$(this).children("img").animate({
				"width":"173px",
				"height":"140px",
				"right":"-5px",
				"bottom":"-5px"
			},1000);
		});
	});
	$("#photo #last li").mouseout(function(){
		$(this).children("img").animate({
			"width":"173px",
			"height":"140px",
			"left":"0px",
			"top":"0px"
		},1000);		
	});
});

//轮播图效果
$(function(){
//	$("#autoPlay div").mouseover(function(){
//		$(this).children("img").animate({
//			"width":"183px",
//			"height":"150px",
//			"left":"-5px",
//			"top":"-5px"
//			
//		},1000,function(){
//			$(this).children("img").animate({
//				"width":"173px",
//				"height":"140px",
//				"right":"-5px",
//				"bottom":"-5px"
//			},1000);
//		});
//	});
//	$("#photo #last li").mouseout(function(){
//		$(this).children("img").animate({
//			"width":"173px",
//			"height":"140px",
//			"left":"0px",
//			"top":"0px"
//		},1000);		
//	});
});

//新车上市效果
$(function(){
	$("#box-right ul li").mouseover(function(){	
		$("#box-right").children("div:not(:eq("+$(this).index()+"))").removeClass("show");
		$("#box-right").children("div:eq("+$(this).index()+")").addClass("show");
	});
});



//汽车问答效果
//变大效果
$(function(){
	$("#pic ul").mouseover(function(){
		$(this).find("img").stop();
		$(this).find("img").animate({
			"width":"380px",
			"height":"260px",
			"left":"-10px",
			"top":"-10px"
			
		},1000,function(){
			$(this).find("img").animate({
				"width":"360px",
				"height":"240px",
				"right":"-10px",
				"bottom":"-10px"
			},1000);
		});
	});
	$("#pic ul").mouseout(function(){
		$(this).find("img").stop();
		$(this).find("img").animate({
			"width":"360px",
			"height":"240px",
			"left":"0px",
			"top":"0px"
		},1000);		
	});
});


//轮播效果
var n = 0;
var timer;
function goStep(){
	n++;
	
	if(n==4){
		n = 1;
		$("#pic ul").css("left","0px");
	}
	$("#pic ul").animate({
		"left":-1*(n*360)+"px"
	},1000);
	
}

$(function(){
	timer = setInterval(goStep,5000);
	$("#pic").mouseover(function(){
		clearInterval(timer);
	});	
	$("#pic").mouseout(function(){
		timer = setInterval(goStep,5000);
	});
	
	//点击的时候
	$("#pic-left").click(function(){
		n--;
		if(n==-1){
			n = 3;
			$("#pic ul").css("left","-1080px");	
		}
		$("#pic ul").animate({
			"left":-1*(n*360)+"px"
		},1000);	
	});
	
	$("#pic-right").click(function(){
		n++;
		if(n==4){
			n = 1;
			$("#pic ul").css("left","0px");	
		}
		$("#pic ul").animate({
			"left":-1*(n*360)+"px"
		},1000);	
	});
});












//汽车视频效果

//汽车视频选项卡效果
$(function(){
	$("#video li").mouseover(function(){
		$(this).index();
		$(this).parents("#video").children("div:not(:eq("+($(this).index()+1)+"))").removeClass("visible");
		$(this).parents("#video").children("div:eq("+($(this).index()+1)+")").addClass("visible");
	});
});

//左边大图
$(function(){
	$(".big").mouseover(function(){
		$(this).children("img").animate({
			"width":"380px",
			"height":"306px",
			"left":"-10px",
			"top":"-10px"
			
		},1000,function(){
			$(this).children("img").animate({
				"width":"360px",
				"height":"286px",
				"right":"-10px",
				"bottom":"-10px"
			},1000);
		});
	});
	$(".big").mouseout(function(){
		$(this).children("img").animate({
			"width":"360px",
			"height":"286px",
			"left":"0px",
			"top":"0px"
		},1000);		
	});
});

//右边小图
$(function(){
	$("#video dt").mouseover(function(){
		$(this).children("img").animate({
			"width":"240px",
			"height":"163px",
			"left":"-5px",
			"top":"-5px"
			
		},1000,function(){
			$(this).children("img").animate({
				"width":"230px",
				"height":"153px",
				"right":"-5px",
				"bottom":"-5px"
			},1000);
		});
	});
	$("#video dt").mouseout(function(){
		$(this).children("img").animate({
			"width":"230px",
			"height":"153px",
			"left":"0px",
			"top":"0px"
		},1000);		
	});
});

//社区视频效果
$(function(){
	$("#content div:eq(0)").mouseover(function(){
		$(this).children("img").animate({
			"width":"250px",
			"height":"170px",
			"left":"-5px",
			"top":"-5px"
			
		},1000,function(){
			$(this).children("img").animate({
				"width":"240px",
				"height":"160px",
				"right":"-5px",
				"bottom":"-5px"
			},1000);
		});
	});
	$("#content div:eq(0)").mouseout(function(){
		$(this).children("img").animate({
			"width":"240px",
			"height":"160px",
			"left":"0px",
			"top":"0px"
		},1000);		
	});
});
