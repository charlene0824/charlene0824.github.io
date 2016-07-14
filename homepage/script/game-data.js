//定义动画过程中数据的变化 包括大鱼吃到的果实数量 大鱼吃的果实类型 游戏的得分

var dataObj=function(){
	this.fruitNum=0;
	this.double=1;//当吃到的果实为黄色果实时 值为1 蓝色为2
	this.score=0;
	this.gameOver=false;//定义游戏的状态
	/*当游戏结束时 大鱼喂小鱼 大鱼跟随鼠标移动等的动画不在触发*/

	this.alpha=0
}

//重置果实的数量和果实的类型 当大鱼喂小鱼后触发
dataObj.prototype.reset=function(){
	this.fruitNum=0;
	this.double=1;
}

//绘制分数
dataObj.prototype.draw = function() {
	// body...
	var w=can1.width;
	var h=can2.height;

	ctx1.save();

	ctx1.shadowBlur=10;
	ctx1.color="white";

	
	//canvas中文本的绘制方法 主要有font()、fillText()、fillStyle()、textAlign()

	ctx1.fillText("score "+this.score,w*0.5,h-30);
	if (this.gameOver) {
		//动态改变字体的透明度
		this.alpha+=deltaTime*0.001;
		//当透明度值大于1时 设置值为1
		if(this.alpha>1){
			this.alpha=1;
		}
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("GAME OVER", w*0.5,h*0.5);

	}
	ctx1.restore();

	}
//定义得分规律 
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.double;
	this.reset();
}