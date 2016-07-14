function TextArea(cont){
	this.cont = cont;
	this.line;
	this.lineCont;
	this.text;
	this.lineNum;
}

TextArea.prototype.init = function(){

	var self = this;

	this.lineNum = 1;

	this.createCont();
	this.createLine();

	this.text.onkeyup = function(e){
		console.log(e.keyCode);
		if(e.keyCode == 13){
			console.log("keyCode");
			self.lineNum++;
			self.createLine();
		}
	}

	//文本框的滚动事件 
	this.text.onscroll = function(e){
		console.log('scroll');
		self.line.style.top =  - this.scrollTop +'px';
		console.log(TextArea.extend().getStyle(self.line,"top"));
		console.log(self.line.style.top);

	}

}

//创建行的容器
TextArea.prototype.createCont = function(){
	this.lineCont = document.createElement('div')
	this.line = document.createElement('div');

	this.text = document.createElement('textarea');
	
	this.lineCont.className = 'line';
	this.line.className = 'in-line';

	this.text.className = 'text';
	this.lineCont.appendChild(this.line);
	this.cont.appendChild(this.lineCont);
	this.cont.appendChild(this.text);
}

//创建新的行号
TextArea.prototype.createLine = function(){
	var span = document.createElement('span');
	span.innerHTML = this.lineNum;
	span.className = 'line-num';
	this.line.appendChild(span);

}


//将文本的内容分离出命令
TextArea.seperate = function(value){
	var is_arr  = /(.+)/g;//匹配\r \n之外的任何字符
	//得到各个命令
	var checked = value;
	var order = checked.match(is_arr);
	return order;

}
//检查文本框中的内容
TextArea.prototype.check = function(){
	var order = TextArea.seperate(this.text.value);
	var checked = this.text.value;
	var pre_order = ['go','tra','mov'];
	var post_order = ['top','rig','bot','lef'];

	var is_num = /[0-9]/;
	var  line_span = this.line.getElementsByTagName('span');

	for(var i = 0; i < line_span.length; i++){
		line_span[i].style.background = '';
	}
	
	for (var i = 0; i < order.length; i++) {
		var order_part = order[i].split(' ');//各个空格分开的字符串

		//如果长度为一 只能是go
		if(order_part.length == 1){
			if(order_part[0].toLowerCase() != pre_order[0]){

				line_span[i].style.background = 'red';
				console.log(line_span[i].className);
				return i;
				
				
			}
		}
		// 如果长度是二
		if(order_part.length == 2) {
			//检测数组的最后一个值是否为数字，如果是数字 则第一个值只能是go
			if(is_num.test(order_part[order_part.length - 1])){
				
				
				if(order_part[0].toLowerCase() != pre_order[0]){
					
					line_span[i].style.background = 'red';
					return false;
				}
			}else {
				//如果不为数字 
				if(pre_order.indexOf(order_part[0].toLowerCase())<1 || post_order.indexOf(order_part[1].toLowerCase())<0){
					
					line_span[i].style.background = 'red';
					return false;
				}
			}
		}

		if(order_part.length == 3){

		// 如果长度为三 第一个值不可能为go
			if(order_part[0].toLowerCase() == pre_order[0]){
				line_span[i].style.background = 'red';
				
				return false;
			}

			if(pre_order.indexOf(order_part[0].toLowerCase())<1 || post_order.indexOf(order_part[1].toLowerCase())<0 || !is_num.test(order_part[order_part.length - 1])){
				
				line_span[i].style.background = 'red';
				return false
			}
		} 
		if(order_part.length > 3) {
			line_span[i].style.background = 'red';
			return false
		}
	}
	console.log('cheng');
	return true;


}

//工具方法
TextArea.extend = function(){
	//获得计算后的样式
	var getStyle = function(ele,style){
		return document.defaultView.getComputedStyle? document.defaultView.getComputedStyle(ele,null)[style]:ele.currentStyle[style];
	}
	return{
		getStyle:getStyle,
	}
}
//删除行号------------------------未完成
/*TextArea.prototype.deleteLine = function(){
	this.line.onkeyup = function(e){
		if(e.keyCode == 8)
	}
}
*/
