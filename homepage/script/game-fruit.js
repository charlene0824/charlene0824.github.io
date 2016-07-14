/*绘制果实注意
由于果实较多 定义果实对象fruitObj 并初始化果实对象fruitObj.prototype.init
fruit.prototype.draw() 绘制果实 由于果实是动态的 需要每帧都执行一次该函数
fruitObj.prototype.born() 产生果实 定义果实产生的位置、大小和颜色
fruitMonitor() 检测果实是否满足产生条件(alive==true的果实小于15个) 如果满足条件 调用sendFruit函数
sendFruit() 检测哪个果实的状态为false 如果为false 则执行born函数 产生果实
*/

var fruitObj=function(){
	//果实的状态 为布尔值
	this.alive=[];//果实的状态 (true false)
	this.orange=new Image();//果实的路径
	this.blue=new Image();

	this.x=[];//果实所在位置
	this.y=[];
	this.l=[];//果实的长度
	this.spd=[];//果实的运动速度
	this.fruitType=[];//果实的类型 判断是黄果实还是蓝果实

}
fruitObj.prototype.num=30;//果实的数量
fruitObj.prototype.init=function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.aneN=[];
		this.l[i]=0;
		this.spd[i]=Math.random()*0.015+0.0025;
		this.aneN[i]=0;
		
		this.fruitType[i]="";
	}
	this.orange.src="images/fruit.png";
	this.blue.src="images/blue.png";
}

// 画果实
fruitObj.prototype.draw=function(){
	
	for (var i = 0; i < this.num; i++) {
		//判断果实的状态 如果为真才可以画
		if(this.alive[i]){
			if(this.fruitType[i]=="orange"){
				var pic=this.orange;
			}else{
				var pic=this.blue;
			}
			//如果果实的宽度小于10 执行果实的长大过程
			if (this.l[i]<=14) {
				this.x[i]=ane.headx[this.aneN[i]];
				this.y[i]=ane.heady[this.aneN[i]];
				this.l[i]+=this.spd[i]*deltaTime;//使过程变得平缓
				ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			}else{
				//如果果实的宽度大于10 果实向上方运动
				this.y[i]-=this.spd[i]*7*deltaTime;

				//绘制果实
				ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			}
			
			//当果实运动到画布顶端的时候 将其状态改为false
			if(this.y[i]<10){
				this.alive[i]=false;
			 }
		}
		

	}
}

//初始化果实状态
fruitObj.prototype.born=function(i){
	//随机找到海葵
	this.aneN[i]=Math.floor(Math.random()*ane.num);
	
	this.l[i]=0;//图片的长度
	
	this.alive[i]=true;
	//随机出现蓝色和换色图片
	var random=Math.random();
	if(random<0.8){
		this.fruitType[i]="orange";
	}else{
		this.fruitType[i]="blue";
	}
}


fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
//检测果实是否可以出生 
function fruitMonitor(){
	var num=0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			num++;
		}
		if(num<15){
			//send fruit
			sendFruit();
			return;
		}
	}
}

//判断果实是否可以出生（每次出生一个）
function sendFruit(){
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}
