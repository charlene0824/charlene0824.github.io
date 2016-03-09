window.requestAnimFrame=(function(){
	return window.requestAnimationFrame||
	       window.webkitRequestAnimationFrame||
	       window.mozRequestAnimationFrame||
	       function(callback){
	       	window.setTimeout(callback,1000/60);
	       }
})();

//返回按照一定比率趋向于目标值的值
function lerpDistance(aim,cur,ratio){
	var delta=cur-aim;
	return aim+delta*ratio;
}

function lerpAngle(a,b,t){
	var d=b-a;
	if (d>Math.PI) {d=d-2*Math.PI;}
	if(d<-Math.PI){d=d+2*Math.PI;}
	return a+d*t;
}