function Block(options){
	this.block;
	this.orient;
	this.width;
	this.order;
	this.top;
	this.left;
	this.order;
	this.angle;
	this.selfAngle;

}
Block.prototype.init = function(options){
	this.block = options;
	this.orient = "up";
	this.width = 50;
	this.order = '';
	this.top = 200;
	this.left = 200;
	this.angle = 0;
	this.selfAngle = 0;

	this.block.style.left = this.left + "px";
	this.block.style.top = this.top + "px";
	var self = this;

	document.getElementById('send').onclick = function(){
		self.command();
	}
	document.getElementById('order').onkeydown = function(e){
		e.stopPropagation();

		if(e.keyCode == 13) {
			self.command();
		}
	}
}

//向前进
Block.prototype.go = function(dir){
	var ctxWidth = drawing.width;

	//根据现在的方向 判断走的方向
	switch (dir) {
		case 'up': this.top -= this.width; break;
		case 'down': this.top += this.width; break;
		case 'left': this.left -= this.width; break;
		case 'right': this.left += this.width; break;
	}

	//控制位置
	if(parseInt(this.top) > ctxWidth - this.width){
		this.top = ctxWidth ;
	}
	if(parseInt(this.left) >ctxWidth - this.width) {
		
		this.left = ctxWidth ;
	}
	if(parseInt(this.top) < 0){
		this.top = 0;
	} 
	if(parseInt(this.left) <0) {
		
		this.left = 0;
	}


	
}

//旋转
Block.prototype.rotate = function(deg) {
	this.angle = deg;

	switch (this.angle) {
		case 90: this.orient = 'right'; break;
		case 180: this.orient = 'down'; break;
		case 270: this.orient = 'left';break;
		case 0: this.orient = 'up'; break;

	}
	
}

//发送指令
Block.prototype.command = function(){
	console.log('command');
	this.order = document.getElementById('order').value;
	switch(this.order.toLowerCase()){
		case 'go':  this.animate();break;
		case 'tra lef': {this.go("left");this.animate();}break;
		case 'tra top': {this.go("up");this.animate();}break;
		case 'tra rig': {this.go("right");this.animate();}break;
		case 'tra bac': {this.go("down");this.animate();}break;
		case 'mov lef': {this.rotate(-90);this.go("left");this.animate();}break;
		case 'mov top': {this.rotate(0);this.go("up");this.animate();}break;
		case 'mov rig': {this.rotate(90);this.go("right");this.animate();}break;
		case 'mov bot': {this.rotate(180);this.go("down");this.animate();}break;
	}

}



//动画操作
Block.prototype.animate = function(){
	var self = this;
	var timer = null;
	var lengthSpeed;
	var angleSpeed;
	clearInterval(timer);
	//速度控制 永远大于一 并且一直是整数
	var speed = function(speedV){
		return speedV > 0 ? Math.ceil(speedV): Math.floor(speedV);
	}
	//定时器 动画操作
	timer = setInterval(function(){

		if(parseInt(self.block.style.top) != self.top || parseInt(self.block.style.left)!=self.left || self.selfAngle != self.angle ) {
			if(parseInt(self.block.style.top) != self.top){
				//速度随着距离的缩短而变小 缓冲运动
				lengthSpeed = speed((self.top - parseInt(self.block.style.top))/2);
				console.log(lengthSpeed);
				self.block.style.top= (parseInt(self.block.style.top) + lengthSpeed ) + 'px';
				
			} 
			if(parseInt(self.block.style.left)!=self.left){
				lengthSpeed = speed((self.left - parseInt(self.block.style.left))/2);
				self.block.style.left= (parseInt(self.block.style.left) + lengthSpeed) + 'px';
			}
			 
			if(self.selfAngle != self.angle) {
				console.log('rotate');
				angleSpeed = speed((self.angle - self.selfAngle)/2);
				console.log(angleSpeed);
				self.block.style.transform = "rotate(" + (self.selfAngle + angleSpeed) +"deg)";
				self.selfAngle = self.selfAngle + angleSpeed;
			}
		}else {
			//运动完后 矫正位置  关闭定时器
			self.block.style.top = self.top + "px";
			self.block.style.left = self.left + 'px';
			self.block.style.transform = "rotate(" + (self.Angle ) +"deg)";
			clearInterval(timer);
		}	

	},100)
}