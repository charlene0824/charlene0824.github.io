function Block(options){
	this.block;
	this.orient;
	this.width;
	this.order;
	this.top;
	this.left;
	this.order;
	this.angle;

}
Block.prototype.init = function(options){
	this.block = options;
	this.orient = "up";
	this.width = 50;
	this.order = '';
	this.top = 200;
	this.left = 200;
	this.angle = 0;
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
	document.onkeydown = function(e){
		
		self.keyControl(e);
	}

}

//向前进
Block.prototype.go = function(){
	var ctxWidth = drawing.width;

	//根据现在的方向 判断走的方向
	switch (this.orient) {
		case 'up': this.top -= this.width; break;
		case 'down': this.top += this.width; break;
		case 'left': this.left -= this.width; break;
		case 'right': this.left += this.width; break;
	}

	//控制位置
	if(parseInt(this.top) > ctxWidth){
		this.top = ctxWidth ;
	}
	if(parseInt(this.left) >ctxWidth) {
		
		this.left = ctxWidth ;
	}
	if(parseInt(this.top) < 0){
		this.top = 0;
	} 
	if(parseInt(this.left) <0) {
		
		this.left = 0;
	}

	//设置方块的位置
	this.block.style.top = this.top + 'px';
	this.block.style.left = this.left + 'px';

	
}

//旋转
Block.prototype.rotate = function(deg) {
	console.log("rotate");
	this.block.style.transform = "rotate(" + (this.angle + deg) + "deg)";
	this.angle += deg;
	if (this.angle >= 360) {
		this.angle -= 360;
	}
	if (this.angle < 0) {
		this.angle +=360;
	}
	//根据旋转后的角度，确定方向
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
		case 'go': this.go();break;
		case 'tun lef': this.rotate(-90);break;
		case 'tun rig': this.rotate(90);break;
		case 'tun bac': this.rotate(180);break;
	}

}


//键盘控制
Block.prototype.keyControl = function(e){
	var key = e.keyCode;
	console.log(key);
	switch (key){
		case 38: this.go();break;
		case 37: this.rotate(-90);break;
		case 39: this.rotate(90);break;
		case 40: this.rotate(180);break;
	}
}