//根据用户的选项确定创建表单的样式

function GetData(form){
	// 创建一个序列化表单的函数

	var	field=null,
		result = {},
		i,
		len,
		j,
		optLen,
		option,
		optValue,
		tags=[];
	var tagsDiv=document.getElementById("tag-cont");
	if(tagsDiv){
		var span=tagsDiv.getElementsByTagName("span");
		for (var k = 0; k < span.length; k++) {
				tags.push(span[k].innerHTML);
		}
		console.log(tags);
		result.selectOpt = tags;

	}
	

	for (i = 0; i < form.elements.length; i++) {
		field=form.elements[i];
		switch(field.type){
			case "select-one": 
			case "select-multiple":
			if(field.name.length){
				for(j=0,optLen=field.options.length;j<optLen;j++){
					option=field.options[j];
					if(option.selected){
						optValue="";
						if(option.hasAttribute){
							optValue=(option.hasAttribute("value")?option.value:option.text);
						}else{
							optValue=(option.attributes["value"].specified?option.value:option.text);
						}
						result[field.name] = optValue;
						
					}

				}
			}
			break;

			case undefined:
			
			case "reset":
			case "button":
			case "file":
			break;
			case "radio":
			case "checkbox":
			if(!field.checked){
				break;
			}
			default:
			if(field.name.length){
				result[field.name] = field.value;
			}
		}
	}
	return result;

}



function show(e){
	var target = e.target;
	var rules = document.getElementById('rules');
	var limit = document.getElementById('limit');
	var select = document.getElementById('select');
	console.log(target.value);
	switch (target.value) {
		case 'text':
		case 'password':
		
			select.style.display = 'none';
			rules.style.display = 'inline-block';
			limit.style.display = 'inline-block';
			break;
		case 'textbox':
			select.style.display = 'none';
			rules.style.display = 'none';
			limit.style.display = 'inline-block';
			break;
		case 'radio':
		case 'checkbox':
		case 'select':
			select.style.display = 'inline-block';
			rules.style.display = 'none';
			limit.style.display = 'none';
			break;
		case 'button':
			select.style.display = 'none';
			rules.style.display = 'none';
			limit.style.display = 'none';
			break;
	}
}

function validate(val){
	/*验证邮箱
验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位*/
	var emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

	/*验证电话号码
验证规则：区号+号码，区号以0开头，3位或4位
号码由7位或8位数字组成
区号与号码之间可以无连接符，也可以“-”连接
如01088888888,010-88888888,0955-7777777 */
	var telReg = /^0\d{2,3}-?\d{7,8}$/;

	/*验证帐号是否合法
验证规则：字母、数字、下划线组成，字母开头，4-16位。*/
	var accountReg = /^[a-zA-z]\w{3,15}$/
	function email(){

		return emailReg.test(val);
	}
	function tel(){
		return telReg.test(val);
	}
	function account(){
		return telReg.test(val);
	}
	





	return {
		email:email,
		tel:tel,
		account:account


	}
}


//密码强度检测
	function checkStrong(sValue) {
    var modes = 0;
    //正则表达式验证符合要求的
    if (sValue.length < 6) return modes;
    if (/\d/.test(sValue)) modes++; //数字
    if (/[a-z]/.test(sValue)) modes++; //小写
    if (/[A-Z]/.test(sValue)) modes++; //大写  
    if (/\W/.test(sValue)) modes++; //特殊字符
    return modes;
    
	}
	//检测字符长度
	function getStrlen(str){
	 var json = {len:0};
	 var re = /[\u4e00-\u9fa5]/;
	 console.log(str);
	 for (var i = 0; i < str.length; i++) {
	  if(re.test(str.charAt(i))){
	   json['len']++;
	  }
	 };
	 return json['len']+str.length;
	}
function checked(elem,bool,info){

	var span = elem.parentNode.getElementsByTagName("span")[0];
	console.log(span);
	if(bool){
		span.style.color = 'green';
		span.innerHTML = info;
	} else {
		span.style.color = "red";
		span.innerHTML = info;

	}
}

