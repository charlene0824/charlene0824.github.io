console.log('cheng');
//$(window).load(function(){
	console.log('onload');
	//获得容器对象
	var sliderCont=document.getElementById("slider-cont");
	var img=sliderCont.getElementsByTagName("img");
	//取得单张图片的宽度
	$("img").load(function(){
		var imgWidth=img[0].offsetWidth;//offsetWidth为元素可见宽度的大小
	console.log(imgWidth);
	//设置掩藏门体露出的宽度
	var exposeWidth=160;
	//设置容器总宽度
	var boxWidth=imgWidth+exposeWidth*(img.length-1);
	sliderCont.style.width=boxWidth+"px";

	//设置每道门的初始位置
	function set(){
		for (var i = 1; i < img.length; i++) {
		img[i].style.left=imgWidth+exposeWidth*(i-1)+"px";
		};
	}
	set();
	
	//计算每道门打开时应移动的距离
	var translate=imgWidth-exposeWidth;
	for (var i = 0; i < img.length; i++) {
		//使用立即调用函数 为了利用不同的i值
		(function(i){
			img[i].onmouseover=function(){
				//先将每道门复位
				set();
				for (var j = 1; j < i+1; j++) {
					img[j].style.left=parseInt(img[j].style.left,10)-translate+"px";
				};
				
		};
	})(i);
		
};
})
	
//})