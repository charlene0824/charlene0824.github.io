//window.onload=function(){
	
var top=document.getElementById("top");
var login=document.getElementById("login");
autoCenter(login);
top.onmousedown=function(event){
	
	console.log(event.clientX);
	console.log(login.offsetLeft);

	var rLeft=event.clientX-login.offsetLeft;
	var rTop=event.clientY-login.offsetTop;

	console.log("rLeft"+rLeft);
	document.onmousemove=function(event){
		event=event||window.event;

		winW=document.documentElement.clientWidth||document.body.clientWidth;
		winH=document.documentElement.clientHeight||document.body.clientHeight;
		maxW=winW-login.offsetWidth;
		maxH=winH-login.offsetHeight;
		var moveX=event.clientX-rLeft;
		var moveY=event.clientY-rTop;
		console.log('maxW='+maxW);
		console.log('moveX='+moveX);
		if(moveX<0){
			moveX=0;
		}else if(moveX>maxW){
			moveX=maxW;
		}
		if(moveY<0){
			moveY=0;
		}else if(moveY>maxH){
			moveY=maxH;
		}
		login.style.left=moveX+'px';
		login.style.top=moveY+'px';

	}
}
document.onmouseup=function(){
	document.onmousemove = null;
}

function autoCenter( el ){
		var bodyW = document.documentElement.clientWidth;
		var bodyH = document.documentElement.clientHeight;

		var elW = el.offsetWidth;
		var elH = el.offsetHeight;

		el.style.left = (bodyW-elW)/2 + 'px';
		el.style.top = (bodyH-elH)/2 + 'px';
		
	}
//}