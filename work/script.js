var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

//阳历天数
var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");

//节气数据
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);

var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十' ,'十一','十二');
var nStr2 = new Array('初','十','廿','卅','　');
var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");

//国历节日 *表示放假日
var sFtv = new Array(
"0101*元旦",
"0214 情人节",
"0308 妇女节",
"0312 植树节",
"0315 消费者权益日",
"0317 St. Patrick's",
"0401 愚人节",
"0422 世界地球日",
"0501 劳动节",
"0504 青年节",
"0512 护士节",
"0512 茵生日",
"0601 儿童节",
"0614 Flag Day",
"0623 国际奥林匹克日",
"0701 建党节 香港回归纪念",
"0703 炎黄在线诞辰",
"0718 托普诞辰",
"0801 建军节",
"0808 父亲节",
"0909 毛泽东逝世纪念",
"0910 教师节",
"0928 孔子诞辰",
"1001*国庆节",
"1006 老人节",
"1024 联合国日",
"1111 Veteran's / Remembrance Day",
"1112 孙中山诞辰纪念",
"1220 澳门回归纪念",
"1225 Christmas Day",
"1226 毛泽东诞辰纪念")

//农历节日 *表示放假日
var lFtv = new Array(
"0101*春节",
"0115 元宵节",
"0505 端午节",
"0707 七夕情人节",
"0715 中元节",
"0815 中秋节",
"0909 重阳节",
"1208 腊八节",
"1224 小年",
"0100*除夕")

//某月的第几个星期几
var wFtv = new Array(
"0131 Martin Luther King Day",
"0231 President's Day",
"0520 母亲节",
"0530 Armed Forces Day",
"0531 Victoria Day",
"0716 合作节",
"0730 被奴役国家周",
"0811 Civic Holiday",
"0911 Labor Holiday",
"1021 Columbus Day",
"1144 Thanksgiving")


//====================================== 传回农历 y年的总天数
function lYearDays(y) {
   var i, sum = 348;
   //判断lunarInfo数组中的值 判断月份的天数 若为30天 则将sum加1
   for(i=0x8000; i>0x8; i>>=1){
   		sum += (lunarInfo[y-1900] & i)? 1: 0;
   	}
   //十二月的天数加上闰月的天数 为一年的整天数
   return(sum+leapDays(y));
}

//====================================== 传回农历 y年闰月的天数
function leapDays(y) {

   if(leapMonth(y)){
   		return((lunarInfo[y-1900] & 0x10000)? 30: 29);
   }
   else{
   		return(0);
   	}
}

//====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf);
}

//====================================== 传回农历 y年m月的总天数
function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
}

//====================================== 算出农历, 传入日期物件, 传回农历日期物件
//                                       该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
function Lunar(objDate) {

   	var i, leap=0, temp=0;
   	//基于1990.1.31 （农历正月初一）
   	var baseDate = new Date(1900,0,31);
   	//天数
   	var offset   = (objDate - baseDate)/86400000;

   	this.dayCyl = offset + 40;
   	this.monCyl = 14;

   for(i=1900; i<2050 && offset>0; i++) {
    	temp = lYearDays(i);//第i年的天数
    	offset -= temp;//偏移量减去i年的天数
    	this.monCyl += 12;//月数加12
   }
   //如果偏移量为负值 加上上一年的天数 年数减一 月数减12
   	if(offset<0) {
      	offset += temp;
      	i--;
        this.monCyl -= 12;
   	}

   	this.year = i;//该年的年数
   	this.yearCyl = i-1864;

   	leap = leapMonth(i); //i年闰哪个月
   	this.isLeap = false;//表示是否闰月

   	for(i=1; i<13 && offset>0; i++) {
      //闰月
      	if(leap>0 && i==(leap+1) && this.isLeap==false){
      		--i; 
         	this.isLeap = true;
         	temp = leapDays(this.year); 
      	}else{
          	temp = monthDays(this.year, i);//存储的该年第i个月的天数
        }

      	//解除闰月
      	if(this.isLeap==true && i==(leap+1)){
      		this.isLeap = false;
      	} 

      	offset -= temp;//偏移量减去i月的天数

      	if(this.isLeap == false){
      		this.monCyl ++;
      	} 
   }
   //如果偏移量为0 有闰月 并且月份等于闰月的月份
   	if(offset==0 && leap>0 && i==leap+1){
      	//如果是闰月的第二个月
      	if(this.isLeap){
      		this.isLeap = false;
      	}
      	else{ 
         	//闰月的第一个
         	this.isLeap = true;
         	--i; 
         	--this.monCyl;
        }
    }

      

   	if(offset < 0){ 
   		offset += temp;
   		--i; 
   		--this.monCyl; 
   	}

   this.month = i;
   this.day = offset + 1;
}


//==============================传回公历 y年某m+1月的天数
function solarDays(y,m) {
   	if(m==1){

      	return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
   	}else{
   	
      	return(solarMonth[m]);
    }
}
//============================== 传入 offset 传回干支, 0=甲子
function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12]);
}
//===== 某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) );
   return(offDate.getUTCDate());
}
//============================== 月历属性
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;
      //国历
      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;
      //农历
      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;
      //干支
      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;

      this.color      = '';

      this.lunarFestival = ''; //农历节日
      this.solarFestival = ''; //国历节日
      this.solarTerms    = ''; //节气

}


//============================== 传回月历物件 (y年,m+1月)
function calendar(y,m) {

   	var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
   	var lDPOS = new Array(3);
   	var n = 0;
   	var firstLM = 0;

   	sDObj = new Date(y,m,1);            //当月一日日期

   	this.length    = solarDays(y,m);    //国历当月天数
   	this.firstWeek = sDObj.getDay();    //国历当月1日星期几


   	for(var i=0;i<this.length;i++) {

      	if(lD>lX) {
         	sDObj = new Date(y,m,i+1);    //当月一日日期
         	lDObj = new Lunar(sDObj);     //农历
         	lY    = lDObj.year;           //农历年
         	lM    = lDObj.month;          //农历月
         	lD    = lDObj.day;            //农历日
         	lL    = lDObj.isLeap;         //农历是否闰月
         	lX    = lL? leapDays(lY): monthDays(lY,lM); //农历当月最後一天

         	if(n==0) {
         		firstLM = lM;
         	}
         	lDPOS[n++] = i-lD+1;

      	}
      	

      	//sYear,sMonth,sDay,week,
      	//lYear,lMonth,lDay,isLeap,
      	//cYear,cMonth,cDay
      	this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) )


      	if((i+this.firstWeek)%7==0||(i+this.firstWeek)%7==6){
      		this[i].color = '#9F1A1A';  //周日颜色
      	}
      	/*if((i+this.firstWeek)%14==13){
      		this[i].color = 'red';  //周休二日颜色
      	} */
   	}

   	//节气(每个月大概有两个节气)
   	tmp1=sTerm(y,m*2  )-1;
   	tmp2=sTerm(y,m*2+1)-1;
   	
   	this[tmp1].solarTerms = solarTerm[m*2];
   	this[tmp2].solarTerms = solarTerm[m*2+1];
   	

   //国历节日
   	for(i in sFtv){

      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))

         	if(Number(RegExp.$1)==(m+1)) {
         		
            	this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' ';
            	
         }
   	}

   	//月周节日
   	for(i in wFtv){
      	if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)){
      		if(Number(RegExp.$1)==(m+1)) {
            	tmp1=Number(RegExp.$2);
            	tmp2=Number(RegExp.$3);

            	this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
         	}
      	}
         	
   	}

   	//农历节日
   	for(i in lFtv){
      	if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
         	tmp1=Number(RegExp.$1)-firstLM;
         	if(tmp1==-11){
         		tmp1=1;
         	} 
         	
         	if(tmp1 >=0 && tmp1<n) {
            	tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1;
            	
            
            	if( tmp2 >= 0 && tmp2<this.length) {
            		
               		this[tmp2].lunarFestival += RegExp.$4 + ' ';
               	
               		
            	}
         
      		}
		}
	}

   //今日
   	if(y==tY && m==tM){
   		this[tD-1].isToday = true;
   	}  	
}

//====================== 中文日期
function cDay(d){
   	var s;

   	switch (d) {
      	case 10:
         	s = '初十'; break;
      	case 20:
         	s = '二十'; break;
      	case 30:
         	s = '三十'; break;
      	default :
         	s = nStr2[Math.floor(d/10)];
         	s += nStr1[d%10];
   }
   return(s);
}
	
function subShow(cld, i,sD){


	if(cld[sD].isToday) {
		td[i].className = 'todayColor'; //今日颜色
	}else{
		td[i].className="";
	}

	td[i].style.color = cld[sD].color; //国定假日颜色

	if(cld[sD].lDay==1){
		//显示农历月
	div[i].innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + cld[sD].lMonth + '月' + (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'小':'大')+'</b>';
	}else {
		//显示农历日
		div[i].innerHTML = cDay(cld[sD].lDay);
	}

	s=cld[sD].lunarFestival;

	
	if(s.length>0) { //农历节日
	if(s.length>6){
		s = s.substr(0, 4)+'…';

	}
	//农历节日颜色为红色
	s = s.fontcolor('red');

	}else {
		//国历节日
	s=cld[sD].solarFestival;
	if(s.length>0) {
   	size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;
   	if(s.length>size+2) {
   		s = s.substr(0, size)+'…';
   	}
   	//国历节日颜色为蓝色
   	s = s.fontcolor('blue');
	}else { //廿四节气
   		s=cld[sD].solarTerms;
   		if(s.length>0) {
   			//二十四节气颜色为绿色
   			s = s.fontcolor('limegreen');
   		}
	}

	}
	
	if(s.length>0) {
		div[i].innerHTML = s;
	}

}
var cld;
//日历内容信息
function show(SY,SM){
	
	yearShow.value=SY+"年";
	monthShow.value=(SM+1)+"月";

	
	var lastCld;
	var nextCld;
   	var i,sD,s,size;
   	cld = new calendar(SY,SM);
   	
   	switch ( SM ) {
   		case 11 : { nextCld=new calendar(SY+1,0); lastCld=new calendar(SY,SM-1)}; break;
   		case 0 : { lastCld=new calendar(SY-1,11);nextCld=new calendar(SY,SM+1);};break;
   		default : { lastCld=new calendar(SY,SM-1);nextCld=new calendar(SY,SM+1);}
   	}
   	for(i=0;i<42;i++) {
   		td[i].className="";
      	sD = i - cld.firstWeek;
      	//从sD>-1的表格处开始写
      	if(sD>-1 && sD<cld.length) { //日期内
      		span[i].innerHTML = sD+1;
      		subShow(cld,i,sD);
         
      	}else if(sD<0) { 
      		//上月日期
      		var lsD=lastCld.length+sD;
         	span[i].innerHTML = lsD;
         	subShow(lastCld,i,lsD);
         	td[i].className='nonMonth';

         	
      	}else{
      		//下月日期
      		var nsD=i-cld.length-cld.firstWeek+1;
      		//console.log(nextCld);
         	span[i].innerHTML = nsD;
         	//subShow(nextCld,i,nsD);
         	td[i].className='nonMonth';
        }
   	}
}
//详细信息的显示
function showDetail(SY,SM,calD){
	
	
	//console.log(cld[calD]);
	asideSunlar.innerHTML=cld[calD].sYear+"年"+cld[calD].sMonth+"月"+(cld[calD].sDay)+"日"+" 星期"+cld[calD].week;
	sunlarDay.innerHTML=cld[calD].sDay;
	asideLunar.innerHTML="农历"+nStr1[cld[calD].lMonth]+"月"+cDay(cld[calD].lDay);
	asideCycle.innerHTML=cld[calD].cYear+"年"+cld[calD].cMonth+"月"+cld[calD].cDay+"日";
	aniYear.innerHTML=Animals[(cld[calD].sYear-4)%12]+"年";

}
//时间的显示
function formatTime(num){
	if(num<10){
		num="0"+num;
		
	}
	return num;
}
function showTime(){
    clearTimeout(t);//清除定时器
      
	var date=new Date();
  
	var dateH=date.getHours();  
	var dateMs=date.getMinutes();  
	var dateS=date.getSeconds();  
	now.innerHTML=formatTime(dateH)+":"+formatTime(dateMs)+":"+formatTime(dateS);  
	t=setTimeout(showTime,500); 
}
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay){
	this.isToday    = false;
  	//国历
  	this.sYear      = sYear;
  	this.sMonth     = sMonth;
  	this.sDay       = sDay;
  	this.week       = week;
  	//农历
  	this.lYear      = lYear;
  	this.lMonth     = lMonth;
  	this.lDay       = lDay;
  	this.isLeap     = isLeap;
  	//干支
  	this.cYear      = cYear;
  	this.cMonth     = cMonth;
  	this.cDay       = cDay;

  	this.color      = '';

  	this.lunarFestival = ''; //农历节日
  	this.solarFestival = ''; //国历节日
  	this.solarTerms    = ''; //节气

}

var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var data={
	year: tY,
	month: tM
};
var tD = Today.getDate();

var tbody=document.getElementById("cal");
var span=cal.getElementsByTagName("span");
var div=cal.getElementsByTagName("div");
var td=document.getElementsByTagName("td");

var yearLeft=document.getElementById("year-left");
var yearRight=document.getElementById("year-right");
var monthLeft=document.getElementById("month-left");
var monthRight=document.getElementById("month-right");
var now=document.getElementById("now");

var asideSunlar=document.getElementById("sunlar");
var sunlarDay=document.getElementById("sunlar-day");
var asideLunar=document.getElementById("lunar");
var asideCycle=document.getElementById("cycle");
var aniYear=document.getElementById("ani-year");

var monthShow=document.getElementById("month");
var yearShow=document.getElementById("year");
var yearSelect='';
var monthSelect='';

function init(){
	//年选择框的显示
	for (var i = 0; i < 150; i++) {
		var options="<option>"+(1901+i)+"年";
		yearSelect+=options;
	}
	yearShow.innerHTML=yearSelect;
	
	//月选择框的显示
	for(var i=0;i<12;i++){
		var options="<option>"+(1+i)+"月";
		monthSelect+=options;

	}
	monthShow.innerHTML=monthSelect;
	

	t=setTimeout(showTime,0);

	show(data.year,data.month);

	showDetail(tY,tM,tD-1);
}

window.onload=function(){
	init();


	// 年数改变时触发的事件
EventUtil.addHandler(yearShow,"change",function(e){
	
	var value=parseInt(this.value);
	data.year=value;
	show(data.year,data.month);
	
})

EventUtil.addHandler(yearLeft,"click",function(e){
	data.year-=1;
	if(year<1901){
		data.year=1901;
	}

	
	show(data.year,data.month);
	
})

EventUtil.addHandler(yearRight,"click",function(e){
	

	data.year+=1;
	if(year>2049){
		data.year=2049;
	}
	show(data.year,data.month);
	
})

EventUtil.addHandler(monthLeft,"click",function(e){

	data.month-=1;
	if(data.month>11){
		data.month=1;
	}
	if(data.month<0){
		data.month=11;
	}
	
	show(data.year,data.month);
	
})


EventUtil.addHandler(monthRight,"click",function(e){
	

	data.month+=1;
	if(data.month>11){
		data.month=1;
	}
	if(data.month<0){
		data.month=11;
	}
	show(data.year,data.month);
	
})

//月数改变时触发的事件
EventUtil.addHandler(monthShow,"change",function(e){
	
	var value=parseInt(this.value);

	data.month=value-1;

	show(data.year,data.month);
	
})


//点击日期时触发的事件

EventUtil.addHandler(tbody,"click",function(e){
	//console.log
	var e=EventUtil.getEvent(e);
	var target=EventUtil.getTarget(e);
	var flag=false;
	while(target){
		if(target.tagName.toLowerCase()=="td"){
			flag=true;
			break;
		}else{
			target=target.parentNode;
		}
	}

	if(flag&&target.className!="nonMonth"){
		var calD=target.getElementsByTagName("span")[0].innerHTML;
		console.log(calD);

		showDetail(parseInt(yearShow.value),parseInt(monthShow.value),calD-1);
	}
	
})
}