// 绘制海葵
var aneObj=function(){

	//利用二次贝塞尔曲线绘制海葵的动画
	// 包括开始点 控制点 和结束点

	this.rootx=[];

	this.headx=[];//摆动后实际的位置
	this.heady=[];

	this.alpha=0;
	this.amp=[];//振幅
	

}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	//初始化海葵的位置和长度
	for (var i = 0; i < this.num; i++) {
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+50;
	}
	
}
aneObj.prototype.draw=function(){

	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);
	 // save：用来保存Canvas的状态。save之后，可以调用Canvas的平移、放缩、旋转、错切、裁剪等操作
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.strokeStyle="#3b154e";
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	for (var i = 0; i < this.num; i++) {
		/*绘制路径所用的方法
		首先必须调用beginPath() 表示开始绘制路径
		moveTo(x,y)将绘图游标移动到(x,y) 不划线
		lineTo(x,y)从上一点开始绘制一条直线，到(x,y)为止
		stroke()描边路径
		strokeStyle属性 设置描边路径的属性
		*/
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		
		ctx2.stroke();
		
	}
	 // restore：用来恢复Canvas之前保存的状态。防止save后对Canvas执行的操作对后续的绘制有影响
	ctx2.restore();

}