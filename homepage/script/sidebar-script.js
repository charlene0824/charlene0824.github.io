// (function(){})()为匿名函数自执行 函数体为块级作用域（私有作用域） 防止变量被污染
(function(){

	//定义侧边栏的构造函数（传递的参数为侧边栏中的菜单导航元素的id和菜单导航元素中的关闭元素的id
	var Sidebar=function(eId,closeBarId){
		this.state='opened';//侧边栏的状态（opend或closed）
		var self=this;
		this.menuBar=new Menubar();//menuBar为点击菜单栏后出现的展示信息的区域 将Menubar作为Sidebar的一个属性
		//采用构造函数方法为属性赋值
		this.el=document.getElementById(eId||'sideBar');
		this.closeBarEl=document.getElementById(closeBarId||'closeBar');



		//为菜单导航增加click监听事件
		this.el.addEventListener('click',function(event){
			//target只包含事件的实际目标（菜单导航元素或关闭元素）
			console.log(self.el);
			console.log(event.target);
			if(event.target!==self.el){
				//console.log("调用troggerSwitch函数");
				//console.log(this);
				//调用该函数 判断目标元素
				self.triggerSwitch();
			}
		})
	}

	//原型对象函数
	Sidebar.prototype.close=function(){
		console.log('close');
		this.el.className='sidebar-move-left';
		this.closeBarEl.className='closeBar-move-right';
		this.state='closed';
	};
	Sidebar.prototype.open=function(){
		console.log('open');
		this.el.style.left='-120px';
		this.el.className='sidebar-move-right';
		this.closeBarEl.style.left='160px';
		this.closeBarEl.className='closeBar-move-left';
		this.state='opened';

	};
	Sidebar.prototype.triggerSwitch=function(){
		console.log("进入triggerSwitch函数");
		//根据状态选择是调用打开还是关闭函数
		if(this.state==='opened'){
			//如果当前状态是打开的 则关闭该侧边栏 并调用close()函数
			console.log('调用打开函数');
			this.close();
		}else if(this.state==='closed'){
			//如果当前状态是关闭的 则打开该侧边栏 并调用open()函数
			console.log('调用关闭函数');
			this.open();
		}

	}
	var sidebar=new Sidebar();
	//创建菜单项的构造函数
	function Menubar(){
		this.currentOpenedMenuContentEl=null;//定义当前打开的菜单项
		//document.querySelector()返回当前文档中的第一个匹配特定选择器的元素
		this.el=document.querySelector('#sideBar ul');
		this.state='allClosed';//初始化菜单项的状态全为关闭

		//阻止事件冒泡，这样点击菜单项时，只响应菜单项事件 不干扰sidebar
		this.el.addEventListener('click',function(e){
			e.stopPropagation();
		})

		var self=this;
		//选取出菜单栏中的li元素
		this.meauList=document.querySelectorAll('#sideBar ul>li');
		console.log(this.meauList);//输出正常
		for (var i = 0; i < this.meauList.length; i++) {
			//为li元素添加点击事件
			this.meauList[i].addEventListener('click',function(e){
				//console.log(e.currentTarget.id);
				//获取菜单栏中点击各菜单出现的展示信息的元素的id
				var menuContentEl=document.getElementById(e.currentTarget.id+'-content');
				//console.log(menuContentEl);
				if(self.state==='allClosed'){
					console.log('打开'+menuContentEl.id);
					//添加打开时的动画（为css3中的动画重置元素的位置）
					menuContentEl.style.top='0';
					menuContentEl.style.left='-85px';
					// menuContentEl.className='nav-content';
					menuContentEl.classList.add('menuContent-move-right');
					self.state='hasOpend';
					self.currentOpenedMenuContentEl=menuContentEl;
				}else{
					console.log('关闭'+self.currentOpenedMenuContentEl.id);
					self.currentOpenedMenuContentEl.className='nav-content';
					// 初始化展示信息元素的位置
					self.currentOpenedMenuContentEl.style.top='0';
					self.currentOpenedMenuContentEl.style.left='35px';
					self.currentOpenedMenuContentEl.classList.add('menuContent-move-left');

					console.log('打开'+menuContentEl.id);
					menuContentEl.className='nav-content';
					menuContentEl.style.top='250px';
					menuContentEl.style.left='35px';
					menuContentEl.classList.remove('menuContent-move-left');
					menuContentEl.classList.add('menuContent-move-up');
					self.state='hasOpend';
					self.currentOpenedMenuContentEl=menuContentEl;
				}
			})
		};
		this.menuContentList=document.querySelectorAll(".nav-content>div.nav-con-close");

		for (var i = 0; i < self.menuContentList.length; i++) {
			self.menuContentList[i].addEventListener('click',function(e){
				//在事件处理程序内部 对象this始终等于currentTarget的值
				var menuContent=e.currentTarget.parentNode;
				menuContent.className = 'nav-content';
				//menuContent.className='nav-content';
				menuContent.style.top='0';
				menuContent.style.left='35px';
				menuContent.classList.add('menuContent-move-left');
				self.state='allClosed';

			})
		};
	}



})();