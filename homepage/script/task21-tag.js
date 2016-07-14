function Tag(){
	this.queue = [];
}
Tag.prototype.init = function(){
	var tagCont = document.getElementById('tag-cont');
	var tagValue = document.getElementById('tagvalue');
	var self = this;

	tagValue.onkeydown = function(e){
		
		console.log(e.keyCode);
		if(e.keyCode == 13||e.keyCode == 32){
			e.preventDefault();
			console.log(this);
			self.add(tagValue.value);
			tagValue.value ='';
		}
	}

	tagCont.onclick = function(e){
		self.delete(e);
	}
}
Tag.prototype.add = function(value){
	if(value){
		
		this.queue.push(value)
		this.queue = Tag.delRepeat(this.queue);
	}
	this.show();
	
}
Tag.prototype.show = function(){
	var tagCont = document.getElementById('tag-cont');
	tagCont.innerHTML="";
	var fragment = document.createDocumentFragment();
	for (var k = 0; k < this.queue.length; k++) {
		var span = document.createElement("span");
		span.innerHTML = this.queue[k];
		// span.style.height=queue[k]+"px";
		fragment.appendChild(span);
		//console.log("span");
	}
	tagCont.appendChild(fragment);
}

Tag.prototype.delete = function(e){
	var target=e.target;
	if(target.tagName.toLowerCase()=="span"){
		var str=target.innerHTML;
		this.queue.splice(this.queue.indexOf(str),1);
		this.show();
	}
}
//数组去重
Tag.delRepeat = function(arr){
	var res=[];
	var json={};
	//console.log(arr.length);
	for(var i=0;i<arr.length;i++){
		if(!json[arr[i]]){
			res.push(arr[i]);
			json[arr[i]]=1;

		}
		
	}
	
	return res;
}
