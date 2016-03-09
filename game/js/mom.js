/*定义大鱼的对象momObj,并将该对象初始化momObj.prototype.init()
momObj.prototype.draw() 绘制大鱼的眼睛、身体和尾巴 并添加大鱼运动时的动画
*/


var momObj=function(){
	this.x;
	this.y;
	this.angle;
	//this.bigEye=new Image();
	//this.bigBody=new Image();
	//this.bigTail=new Image();

	this.bigTailTimer;
	this.bigTailCount;

	this.bigEyeTimer;
	this.bigEyeCount;
	this.bigEyeInterval;

	this.bigBodyCount;


}
momObj.prototype.init=function(){
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
	//this.bigEye.src="./src/bigEye0.png";
	//this.bigBody.src="./src/bigSwim0.png";
	//this.bigTail.src="./src/bigTail0.png";


	this.bigTailTimer=0;
	this.bigTailCount=0;

	this.bigEyeCount=0;
	this.bigEyeTimer=0;
	this.bigEyeInterval=0;

	this.bigBodyCount=0;



}
momObj.prototype.draw=function(){

	// 令大鱼的位置不断趋近于鼠标的位置
	this.x =lerpDistance(mx,this.x,0.98);
	this.y =lerpDistance(my,this.y,0.98);

	//计算大鱼旋转的角度
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	//atan2(y,x)返回y/x的反正切值 该函数返回[-PI,PI]的值
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//鼠标和大鱼之间的角度差
	

	this.angle=lerpAngle(beta,this.angle,0.6);

	this.bigTailTimer+=deltaTime;
	if (this.bigTailTimer>50) {
		this.bigTailCount=(this.bigTailCount+1)%8
		this.bigTailTimer%=50;
	}

	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval){
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
	}
	if(this.bigEyeCount==0){
		this.bigEyeInterval=Math.random()*1500+2000;
	}else{
		this.bigEyeInterval=200;
	}



	ctx1.save();
	// translate() 方法重新映射画布上的 (0,0) 位置
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);

	
	
	var bigBodyCount=this.bigBodyCount;
	if(data.double==1){
		ctx1.drawImage(bigBodyOra[bigBodyCount],-bigBodyOra[bigBodyCount].width*0.5,-bigBodyOra[bigBodyCount].height*0.5);
	}else{
		ctx1.drawImage(bigBodyBlue[bigBodyCount],-bigBodyBlue[bigBodyCount].width*0.5,-bigBodyBlue[bigBodyCount].height*0.5);
	}
	var bigEyeCount=this.bigEyeCount;
	ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,bigEye[bigEyeCount].height*0.5-12);
	
	var bigTailCount=this.bigTailCount
	ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width*0.5+30,-bigTail[bigTailCount].height*0.5);
	ctx1.restore();
}

