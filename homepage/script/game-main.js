var can1;
var can2;
var ctx1;
var ctx2;

var canWidth;
var canHeight;
var lastTime;//上一帧执行的时间
var deltaTime;//两帧间隔的时间差

var ane;

var fruit;

var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var bigTail=[];
var bigEye=[];
var bigBodyOra=[];
var bigBodyBlue=[];


var data;

var wave;
var halo;

var dust;
var dustPic=[];
var bgPic=new Image();
// 背景和海葵绘制在canvas2上 
// 浮动生物、小鱼和游戏结果绘制在canvas1上

document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();

	
}
function init(){
	//获得canvas context
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");
	bgPic.src="images/background.jpg";

	can1.addEventListener("mousemove",onMouseMove,false);//获得鼠标的位置

	canWidth=can1.width;
	canHeight=can1.height;



	ane=new aneObj;
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;


	baby=new babyObj();
	baby.init();

	for (var i = 0; i < 8; i++) {
		babyTail[i]=new Image();
		babyTail[i].src="images/babyTail"+i+".png";
		bigTail[i]=new Image();
		bigTail[i].src="images/bigTail"+i+".png";
	}

	for (var j = 0; j < 2; j++) {
		babyEye[j]=new Image();
		babyEye[j].src=	"images/babyEye"+j+".png";	

		bigEye[j]=new Image();
		bigEye[j].src="images/bigEye"+j+".png";
	}

	for (var k = 0; k <20 ; k++) {
		babyBody[k]=new Image();
		babyBody[k].src="images/babyFade"+k+".png";
	}

	for (var i = 0; i < 8; i++) {
		bigBodyOra[i]=new Image();
		bigBodyBlue[i]=new Image();
		bigBodyOra[i].src="images/bigSwim"+i+".png";
		bigBodyBlue[i].src="images/bigSwimBlue"+i+".png";
	}	
	data=new dataObj();

	ctx1.fillStyle="white";
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();

	for (var i = 0; i < 7; i++) {
		dustPic[i]=new Image();
		dustPic[i].src="images/dust"+i+".png";
	}
	
	dust=new dustObj();
	dust.init();
}
//控制鱼的动画效果
function gameloop(){
	//浏览器开发商们提供了这个requestAnimationFrame()针对动画效果的API函数
	//requestAnimFrame导致帧与帧之间的时间间隔不统一
	//window.requestAnimFrame(gameloop);
	
	setInterval(gameloop,1000/60);
	
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	if(deltaTime>40){
		deltaTime=40;
	}


	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitsColl();

	baby.draw();

	momBabyColl();

	data.draw();

	wave.draw();

	halo.draw();

	dust.draw();
	
}

//编写onMouseMove函数 求得鼠标相对于边框左上角的位置

function onMouseMove(e){
	// offSetX||e.layerX相对于边框左上角的位置
	if(!data.gameOver){
		if(e.offsetX||e.layerX){
			mx=(e.offsetX==undefined?e.layerX:e.offsetX);
			my=(e.offsetY==undefined?e.layerY:e.offsetY);
		
		}
	}
	
}