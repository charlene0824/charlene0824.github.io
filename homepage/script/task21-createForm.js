function CreateForm(options){
	this.formShow = document.getElementById('form-show');

}
CreateForm.prototype.init = function(options){
	var type = options.type;
	switch (type) {
		
		case 'password':CreateForm.extend().createPass(options);break;
		case 'textbox':
		case 'text': CreateForm.extend().createText(options);break;
		case 'checkbox':
		case 'radio': CreateForm.extend().createRadio(options);break;
		case 'button': CreateForm.extend().createButton(options);break;

	}

	//添加失去焦点事件 失去焦点时 验证填写的内容是否符合格式要求
	this.formShow.addEventListener('focusout',function(e){
		console.log("ccc");
		if(e.target.type === 'text'){
			console.log("eeee");
			var rules = e.target.getAttribute('rules');
			console.log(rules);
			if(validate(e.target.value)[rules]()) {
				document.getElementById('rule-tip').innerHTML = e.target.getAttribute('rule_succ');
				document.getElementById('rule-tip').style.color = 'green';
			}else{
				document.getElementById('rule-tip').innerHTML = e.target.getAttribute('rule_fail');
				document.getElementById('rule-tip').style.color = 'red';
				e.target.value = "";
			}			
		}
	},false)

	//对密码添加输入事件
	var pass = document.querySelector("input[type='password']");
	pass.oninput = function(e){
		console.log("inout");
		this.parentNode.getElementsByTagName("span")[0].style.display = "none";
		this.parentNode.getElementsByTagName("span")[1].style.display = "inline";
		var e= event? event: window.event;
		var target = e.target||e.srcElement;
		var passValue = pass.value;
		var level = checkStrong(passValue);
		var levelView = pass.parentNode.getElementsByTagName("i");
		var passSpan = pass.parentNode.getElementsByTagName("span")[0];
		for (var i = 0; i < levelView.length; i++) {
			levelView[i].style.backgroundColor = '';
		}
		console.log(levelView);
		switch (level) {
			case 0: {	target.parentNode.getElementsByTagName("span")[1].style.display = "inline";checked(passSpan,false,"密码至少6位");};break;
			case 1: levelView[0].style.backgroundColor = "red";break;
			case 2: {levelView[0].style.backgroundColor = "red";levelView[1].style.backgroundColor = "yellow"};break;
			case 3: {levelView[0].style.backgroundColor = "red";levelView[1].style.backgroundColor = "yellow";levelView[2].style.backgroundColor = "green";};break;

		}
	}
}

CreateForm.extend = function(){
	var formShow = document.getElementById('form-show');
	// 添加文本框
	function createText(options){
		var box = document.createElement('div');
		var input = "<label>"+options.label+"</label><input type='"+options.type+"' rules='"+options.rules+"' name='"+options.name+"' rule_succ='"+options.rule_succ+"' rule_fail='"+options.rule_fail+"'><span id='rule-tip'>"+options.rules_tip+"<span>" ;
		box.innerHTML = input;
		box.className = "item";
		formShow.appendChild(box);
		
	}
	//添加单选框
	function createRadio(options){
		var box = document.createElement('div');
		var str = "<label>"+options.label+"：</label>";
		console.log(options);
		for(var i = 0; i < options.selectOpt.length; i++){
			str += "<input type='"+options.type+"' name='"+options.name+"'>" + options.selectOpt[i];
		}
		box.innerHTML = str;
		console.log(box);
		formShow.appendChild(box);
	}

	//添加密码
	function createPass(options){
		var box = document.createElement('div');
		var input = "<label>"+options.label+"</label><input type='"+options.type+"' name='"+options.name+"'><span id='rule-tip'>"+options.rules_tip+"</span><span class='level'><i class='pass-level'></i> <i class='pass-level'></i><i class='pass-level'></i></span>" ;
		box.innerHTML = input;
		box.className = "item";
		formShow.appendChild(box);
		
	}

	//添加按钮
	function createButton(options){
		var box = document.createElement('div');
		var input = "<input type='"+options.type+"' name='"+options.name+"'" ;
		box.innerHTML = input;
		formShow.appendChild(box);
	}
	return {
		createText:createText,
		createRadio:createRadio,
		createPass:createPass
	}
}
