$(function(){
	// 设置滚动条
    var myscroll;
	myscroll = new IScroll('#scroll', {mouseWheel:true,click:true});
	function loaded(){
	    setTimeout(function(){
	        myscroll=new IScroll("#scroll");
	    },100);
	}
	window.addEventListener("load",loaded,false);
	//设置点击样式
	$("a").on('touchstart',this,function(){
		$(this).parent().addClass('active');
	}).on('touchend',this,function(){
		$('a').parent().removeClass('active');
	})
	//设置回退
	$(".back").on('tap',function(){
		window.history.go(-1);
	})

	//设置点击list
	$(".sub-nav").find('a').on("tap",this,function(){
		var _inex=$(this).index();
		$(this).addClass("sub-nav-focus").siblings().removeClass("sub-nav-focus");
		$(".list").eq(_inex).css("display","block").siblings().css("display","none");
	})

	//设置dialog点击
	$(".dialog-click").find('button').on('tap',this,function(){
		$(".dialog-bg").css("display","block");
		$(".float-dialog").css("display","block");
	})
	$(".float-dialog-btn").find('a').on('tap',this,function(){
		$(".dialog-bg").css("display","none");
		$(".float-dialog").css("display","none");
	})
	
})