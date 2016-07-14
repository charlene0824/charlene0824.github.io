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
		//self.command();
		if(text.check()){
			console.log("check");
			self.handleCom();
		}
		
	}
	
}

//向前进
Block.prototype.go = function(dir,num){
	var ctxWidth = drawing.width;

	//根据现在的方向 判断走的方向
	switch (dir) {
		case 'up': this.top -= this.width * num; break;
		case 'down': this.top += this.width * num; break;
		case 'left': this.left -= this.width * num; break;
		case 'right': this.left += this.width * num; break;
	}

	//控制位置
	if(parseInt(this.top) > ctxWidth - this.width){
		this.top = ctxWidth - this.width ;
	}
	if(parseInt(this.left) >ctxWidth - this.width) {
		
		this.left = ctxWidth - this.width ;
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
		case -90:
		case 270: this.orient = 'left';break;
		case 0: this.orient = 'up'; break;

	}
	
}

//发送指令
Block.prototype.command = function( order,num ){
	console.log('command cccc');
	console.log()
	/*this.order = document.getElementById('order').value;*/
	switch(order.toLowerCase()){
		case 'go':  {this.go(this.orient,num);this.animate()};break;
		case 'tra lef': {this.go("left",num);this.animate();}break;
		case 'tra top': {this.go("up",num);this.animate();}break;
		case 'tra rig': {this.go("right",num);this.animate();}break;
		case 'tra bac': {this.go("down",num);this.animate();}break;
		case 'mov lef': {this.rotate(-90);this.go("left",num);this.animate();}break;
		case 'mov top': {this.rotate(0);this.go("up",num);this.animate();}break;
		case 'mov rig': {this.rotate(90);this.go("right",num);this.animate();}break;
		case 'mov bot': {this.rotate(180);this.go("down",num);this.animate();}break;
	}

}


Block.prototype.handleCom = function(){
	var order = TextArea.seperate(document.querySelector('.text').value);
	console.log( order );
	for (var i = 0; i < order.length; i++) {
		//var is_order = /([a-zA-Z]+)|([0-9]+)/g;
		var is_order = order[i].split(' ');
		console.log(is_order);
		if(is_order.length == 1) {
			this.command(is_order[0],1);
		}
		if(is_order.length == 2){
			if(is_order[0].toLowerCase() == 'go'){
				this.command(is_order[0], parseInt(is_order[1]));
			}else {
				console.log('command');
				this.command(is_order[0] + ' ' + is_order[1],1);
			}

		}
		if(is_order.length == 3){
			this.command(is_order[0] + ' ' + is_order[1],parseInt(is_order[2]));
			//this.command("go",parseInt(is_order[2]))
		} 
	}

}


//动画操作
//-----------------存在的问题 只能同时动画 不能动完一个 动另一个--------
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