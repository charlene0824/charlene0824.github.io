// window.onload=function(){

	waterfall("main","box");
	//拖动滚动条时触发的事件
	var dataInt={"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]};
	window.onscroll=function(){
		if(checkScrollSlide()){
			//将数据块渲染到文档底部
			for (var i = 0; i < dataInt.data.length; i++) {
				var oParent=document.getElementById("main");
				var oBox=document.createElement("div");
				oBox.className="box";
				oParent.appendChild(oBox);
				var oPic=document.createElement("div");
				oPic.className="pic";
				oBox.appendChild(oPic);
				var oImg=document.createElement("img");
				oImg.src="images/waterfall/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
				
			};
			waterfall("main","box");
		}
		
	}
// }

function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//计算整个页面显示的列数（页面宽/box的宽)
	var oBoxW=oBoxs[0].offsetWidth;
	var clientW = document.documentElement.clientWidth || document.body.clientWidth;
	var cols=Math.floor(clientW/oBoxW);
	//设置main的宽度
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
	//存放每列高度的数组
	var hArr=new Array();
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			//求出数组中最小的值
			// Math.min()的参数只能是数值，利用Apply方法使其能在数组中使用

			var minH=Math.min.apply(null,hArr);
			var index=getMinIndex(hArr,minH);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			//改变数组的值 使数组的值等于每列的高度
			hArr[index]+=oBoxs[i].offsetHeight;

		}
	}
	//console.log(hArr);
}

//根据class获取元素
function getByClass(parent,clsName){
	var boxArr=new Array(),//用来存储获取到的class元素
	    oElements=parent.getElementsByTagName("*");
	for(var i=0;i<oElements.length;i++){   
	if(oElements[i].className==clsName){
		boxArr.push(oElements[i]);
	}
}
return boxArr;
} 
function getMinIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i
		}
	}
}
//检测是否具备了滚动条加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById("main");
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1]/2);
	
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var height=document.documentElement.clientHeight||document.body.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}
