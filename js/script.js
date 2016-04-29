$(function(){
	if($(window).width()>640){
		$('body').css({'width':'640px'});
		
	}
	
	$('html').css('font-size',$('body').width()/10);
	
	  var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    
	    // 如果需要滚动条
//	    scrollbar: '.swiper-scrollbar',
	  })        

	
	shop.conul();
	
	
	var scrollPage = new NeuF.ScrollPage(window, { delay: 1000, marginBottom: 30 }, function (offset) {
        if (shop.isload) return;
        shop.isAppend = true;
        shop.isload = true;
        if (offset > 0) {
        	$('#recommendListload').show();
        	$('#recommendListLoadMoreBtn').show()
            $('#recommendListloadImg').show();
            shop.getlist();//插入数据
            

        }
	
	
})

})
var shop={
	isAppend:false,
	pageindex:0,
	isload:false,
	bind:function(){
		
	},
	
	getlist:function(){
		
		var html='<li class="love-item"><a class="J_ping"><div alt=""class="love-item-pic"><img src="img/566780baN7df4d973.jpg"></div><div class="love-item-title"><span>茨欧尼（Ciciolne）男包休闲单肩包男士商务斜挎包背包ipad日字包包8860板扣腰带+钱包+8860-1深棕色套装</span></div></a><div class="love-item-bottom"><span class="love-item-price">￥<i>89.00</i></span><a class="J_ping"><span class="love-item-icon">看相似</span></a></div></li><li class="love-item"><a class="J_ping"><div alt=""class="love-item-pic"><img src="img/566780baN7df4d973.jpg"></div><div class="love-item-title"><span>茨欧尼（Ciciolne）男包休闲单肩包男士商务斜挎包背包ipad日字包包8860板扣腰带+钱包+8860-1深棕色套装</span></div></a><div class="love-item-bottom"><span class="love-item-price">￥<i>89.00</i></span><a class="J_ping"><span class="love-item-icon">看相似</span></a></div></li>';
		var time=setTimeout(function(){
				$('#recommendList').append(html);
				shop.PageIndex++;
				shop.isload = false;
				 $('#recommendListload').hide();
        	$('#recommendListLoadMoreBtn').hide()
            $('#recommendListloadImg').hide();
		},1500);
	},
	//时时播报滚动	
	conul:function(){
			 var scrtime; 
				$("#con").hover(function(){ 
					 clearInterval(scrtime);//停止滚动 
				},function(){ 
					scrtime = setInterval(function(){ 
							var ul = $("#con ul"); 
							var liHeight = ul.find("li:last").height();//计算最后一个li元素的高度 
							ul.animate({marginTop : liHeight +"px"},1000,function(){ 
								ul.find("li:last").prependTo(ul) 
								ul.find("li:first").hide(); 
								ul.css({marginTop:0}); 
								ul.find("li:first").fadeIn(1000); 
							});         
					},3000); 
				 }).trigger("mouseleave"); 
		},
	init:function(){
		
	}
	
}

