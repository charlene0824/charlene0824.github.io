/*该对象实现大鱼吃到果实时的动画效果 
在吃到果实时在果实处生成白圈 并慢慢放大 慢慢消失*/

/*定义一个物体池 物体池中含有10个物体  */
var waveObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];

}
waveObj.prototype.num=10;
waveObj.prototype.init = function(){
	// body...
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.r[i]=0;
	}

}

// 绘制物体
waveObj.prototype.draw=function(){

	ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";

	for (var i = 0; i < this.num; i++) {

		//如果alive状态为true时 开始绘制物体
		if(this.alive[i]){
			//半径随着时间增大
			this.r[i]+=deltaTime*0.05;
			if(this.r[i]>50){
				//当半径达到最大值时 将其alive变为false
				this.alive[i]=false;
				break;//跳出for循环，防止出现透明度风大于1
			}

			//半径越大 透明度越小
			var alpha=1-this.r[i]/50;
			ctx1.beginPath();
			//以果实为圆心绘制圆 
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
			ctx1.stroke();

		}
	}
	ctx1.restore();
}

//判断物体池中能出生的物体
waveObj.prototype.born=function(x,y){
	for (var i = 0; i < this.num; i++) {
		/*当物体池中的物体的alive状态为false 表示当前物体可出生*/
		if(!this.alive[i]){
			this.alive[i]=true;
			//console.log("born");
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;
			//找到能出生的物体后 跳出函数
			return;
		}
	}
}