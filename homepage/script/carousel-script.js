(function(window,document){

	function Carousel( elem,options ){
		var self = this;
		self._ = carousel;
		self.defaults = {
			autoplay: true,//定义轮播图是否自动播放
			delay: 3000,//定义动画自动播放的间隔时间
			speed: "10%", //定义动画的速度
			arrows: {
				prevButton: true,
				nextButton: true

			},

			index:1,
			nav: {},//是否可以按钮控制
		
			/*定义动画方式
			line：从左向右匀速移动
			buffering：缓冲运动
			*/
			animation:'line',
			
		}
		self.options;

		
		return new Carousel.prototype.init(elem,options);

	}


	Carousel.prototype.self = this;


	Carousel.prototype.init = function(elem,options){
		
		//初始化(因为他们是根据options改变的)
		self.options = {};
		//self.parent = null;
		self.container = null;
		self.slides = null;
		self.nav = null;
		self.arrows = {};
		self.index = 1;
		self.total = 0;
		self.currentTotal = 0;
		self.animation = '';
		self.speed = 0;
		self.prefix = self._ + '-';
		self.flag = false;

		//self.eventSuffix = self.prefix + ~~(Math.random()*2e3);

		self.timmer = null;


		self.options = Carousel.extend(self.defaults,options);
		
		self.container = elem.getElementsByTagName("ul")[0];
		self.container.className = self.prefix + "wrap";
		self.slides = self.container.getElementsByTagName("li");
		console.log(self.slides.length);
		self.total = self.slides.length;
		Carousel.setup(elem);//初始化容器

		self.options.nav && Carousel.initNav(elem);
		self.options.arrows && Carousel.initArrows(elem);

		
		//一直无限循环
		Carousel.calculateSlides(elem);
		//自动播放
		self.options.autoplay && Carousel.start();
		elem.onmouseover = Carousel.stop;
		elem.onmouseout = Carousel.start;

		return this;
	}

	/**
	 * 修改ul中的li 使其能无限循环
	 * @param  {HTML元素} elem 需要焦点轮播图的元素
	 * @return {this}      方便链式操作
	 */
	Carousel.setup = function(elem){
		//在最后的li元素后添加第一个li 在第一个li前添加最后一个li
		var lastNode = self.slides[self.total-1].cloneNode(true);
		var firstNode = self.slides[0].cloneNode(true);
		self.container.appendChild(firstNode);
		self.container.insertBefore(lastNode,self.slides[0]);
		//检查是否为相对或者绝对定位
		var position = document.defaultView.getComputedStyle(elem,null).position||elem.currentStyle.position;
		if(position === 'static') {
			elem.style.position = "relative";
		}
		elem.style.overflow = "hidden";

	}

	/**
	 * 设置ul li 和包裹元素的宽度和高度
	 * @param  {HTML元素} elem 需要焦点轮播图的元素
	 * @return {this}      方便链式操作
	 */
	Carousel.calculateSlides = function(elem){
		self.slides = self.container.getElementsByTagName("li");
		var sliderWidth = self.slides[0].getElementsByTagName('img')[0].offsetWidth;
		console.log(sliderWidth);
	/*	var slideWidth = document.defaultView.getComputedStyle(elem,null).width||elem.currentStyle.width;
		var slideHeight = document.defaultView.getComputedStyle(elem,null).height||elem.currentStyle.height;*/
		elem.style.width = slideWidth;
		elem.style.height = slideHeight;
		self.currentTotal = self.slides.length;
		self.container.style.width = (self.currentTotal *100) + '%';
		for(var k = 0; k < self.currentTotal; k++){
			self.slides[k].style.width = (100/self.currentTotal) + '%';
			console.log(self.slides[k].style.width);
		}

		self.container.style.left = "-100%";
		console.log(self.container.style.left);
		
	}
	/**
	 * 初始化导航按钮
	 * @param  {HTML元素} elem 需要焦点轮播图的元素
	 * @return {this}      方便链式操作
	 */
	Carousel.initNav = function(elem){
		self.nav = document.createElement("nav");
		self.nav.className = self.prefix + 'nav';
		
		for (var i = 0; i < self.total; i++) {
			var span = document.createElement('span');
			span.setAttribute("index",i+1);
			self.nav.appendChild(span);
		}
		//第一个元素添加类
		self.nav.getElementsByTagName("span")[0].className = "on";
		elem.appendChild(nav);
		//添加点击事件 当点击第i个span的时候 显示第i个li
		self.nav.onclick = function(e){
			if (self.flag) {
    		return;
  		}
			//点击span元素时 出现相应的图片 并改变相应span的背景色
			var target = e.target;
			if ((target.tagName).toLowerCase()=="span") {
				console.log(target.getAttribute("index"));
				self.index = parseInt(target.getAttribute("index"));
				Carousel.navStyle();
				Carousel.animate(self.container, parseInt(-100*parseInt(self.index)));
				}
		}
		
	}
	/**
	 * 初始化箭头按钮
	 * @param  {HTML元素} elem 需要焦点轮播图的元素
	 * @return {this}      方便链式操作
	 */
	Carousel.initArrows = function(elem){
		//添加箭头元素
		self.arrows.prevButton = document.createElement('a');
		self.arrows.prevButton.href = 'javascript:;';
		self.arrows.prevButton.setAttribute("class","arrow");
		self.arrows.prevButton.className = 'arrow prev';
		self.arrows.prevButton.innerHTML = "&lt;";
		elem.appendChild(self.arrows.prevButton);

		self.arrows.nextButton = document.createElement('a');
		self.arrows.nextButton.href = 'javascript:;';
		self.arrows.nextButton.className = 'arrow next';
		self.arrows.nextButton.innerHTML = "&gt;";
		elem.appendChild(self.arrows.nextButton);
		//给箭头按钮添加事件 当点击按钮时 li移动
		self.arrows.prevButton.onclick = function(){
			if(self.flag){
				return;
			}
			console.log('prev');
			if (self.index == 1) {
				self.index = self.total;
			}else{
				self.index-=1;
			}
			
			Carousel.navStyle();
			Carousel.animate(self.container,(parseInt(self.container.style.left)+100));
		}

		self.arrows.nextButton.onclick = function(){
			if(self.flag){
				return;
			}

			if( self.index == self.total ){
				self.index = 1
			}else{
				self.index += 1;
			}
			console.log(self.index);
			Carousel.animate(self.container,(parseInt(self.container.style.left)-100));
			Carousel.navStyle();
		}
	}
	/**
	 * 导航按钮的样式变化（给当前导航按钮添加“on”类）
	 * @return {[type]} [description]
	 */
	Carousel.navStyle = function(){
	

		for (var i = 0; i < self.nav.getElementsByTagName("span").length; i++) {
			if(self.nav.getElementsByTagName("span")[i].className=="on"){
				self.nav.getElementsByTagName("span")[i].className="";
				break;
			}
		}

		self.nav.getElementsByTagName("span")[self.index-1].className='on';
		
	}

	/**
	 * 实现动画
	 * @param  {HTML元素} elem 在该元素内实现动画
	 * @param  {num} end  动画需要到达的终点
	 * @return {this}      方便链式操作
	 */
	Carousel.animate = function(elem, end){
		self.flag = true;
		var length = parseInt(end)-parseInt(self.container.style.left);
		var speed = 0;
		var aniStyle = self.options.animation;
		speed = ((length/100)*parseInt(self.options.speed))+"%"
		var interval = null
			clearInterval(interval);
			
			interval = setInterval(function(){

				if ((parseFloat(speed)> 0 && parseFloat(self.container.style.left)< parseFloat(end))||(parseFloat(speed) < 0 && parseFloat(self.container.style.left) > parseFloat(end))){
					console.log('first');
					self.container.style.left = (parseFloat(self.container.style.left)+parseFloat(speed))+"%" ;

				}else{
					console.log('second');
					clearInterval(interval);

					//当偏移量大于-600或小于-3000时的处理方式
          if(parseFloat(self.container.style.left) > parseFloat("-100%")){


              self.container.style.left = (-100) * (self.total)+"%";
              console.log(self.container.style.left);
          }
          console.log(parseInt(self.container.style.left)< parseInt(-100 * (self.total+1)))
          if(parseInt(self.container.style.left)< parseInt(-100 * (self.total))) {


             self.container.style.left = "-100%";
          }
          self.flag = false;
				}
			},50);
	}	
		//自动播放
	Carousel.start = function(){
		self.timer = setInterval(function(){
				self.arrows.nextButton.onclick();
			},self.options.delay);
		return this;
	}

	Carousel.stop = function(){
		clearTimeout(self.timer);
		return this;
	}



	/*深拷贝与浅拷贝：
	浅拷贝使拷贝的变量和源变量共用一个内存地址
	深拷贝是将拷贝的变量新开辟一个内存地址*/
	//将默认属性和用户定义的属性进行合并
	Carousel.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;//如果第一个参数为布尔值 表示进行浅复制还是深复制

			// skip the boolean and the target
			target = arguments[ i ] || {};//选取除了布尔值以外的其他参数
			i++;
		}

		//如果参数不是对象或者函数 将target赋值为空对象
		if ( typeof target !== "object" && !typeof target !=="function" ) {
			target = {};
		}

		// （如果i值等于length 只有一个参数，且不是布尔值）
		if ( i === length ) {
			target = this;
			i--;
			console.log(this);
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( Carousel.isPlainObject(copy) || (copyIsArray = copy instanceof Array) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && src instanceof Array ? src : [];

						} else {
							clone = src && Carousel.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = Carousel.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	}

	//检查一个对象，如果被检查的对象是对象字面量，或者new Object方法创建，则返回true
	Carousel.isPlainObject = function( obj ){
		var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || Object.prototype.toString.call(obj).slice(1,length-1).split(" ")[1] !== "object" || obj.nodeType || obj == obj.window ) {
				return false;
			}

			try {
				/*obj.constructor:obj对象是否存在constructor属性
				判断在obj实例中，是否含有constructor属性
				判断在obj.constructor对象的原型链中，是否含有isPrototyeof属性*/
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!({}).hasOwnProperty.call(obj, "constructor") &&
					!({}).hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
				// Support: IE<9
			// 就是处理那些首先循环继承来的属性而不是自身属性
			/*if ( support.ownLast ) {
				for ( key in obj ) {
					return ({}).hasOwnProperty.call( obj, key );
				}
			}*/

			// 对于正常情况，首先循环的是自身属性
	    // 如果最后一个属性还会自身属性的话，那么所有的属性都是自身属性
			for ( key in obj ) {}
				console.log("cheng");
			console.log(key);
			return key === undefined || hasOwnPrototype.call( obj, key );
	}

 	Carousel.prototype.init.prototype = Carousel.prototype;

  window.Carousel = Carousel;

})(window,document);

