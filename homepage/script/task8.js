
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  var data=[];
  var source=document.getElementById("source");
  var li=source.getElementsByTagName("li");
  //正则表达式的使用
  var reg=/([\u4e00-\u9fa5]+)\：\<b\>([0-9]+)\<\/b\>/;
  for (var i = 0; i < li.length; i++) {
    //var matches=li[i].innerHTML.match(reg);
    var matches=reg.exec(li[i].innerHTML);
    data[i]=[];
    data[i][0]=matches[1].substr(0,2);
    data[i][1]=matches[2];   
  }
  return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    data.sort(function(a,b){
      //二维数组排序
      return a[1]<b[1];
    });
    return data;
}
/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
  var resort=document.getElementById("resort");
  var fragment=document.createDocumentFragment();
  var li=null;
  var str="";
  for (var i = 0; i < data.length; i++) {
    li=document.createElement("li");
    str="第"+(i+1)+"名--"+data[i][0]+"空气质量:"+"<b>"+data[i][1]+"</b>";
    li.innerHTML=str;
    fragment.appendChild(li);
  }
  resort.appendChild(fragment);
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数 
var sortBtn=document.getElementById("sort-btn");
sortBtn.onclick=function(){
btnHandle();
}
}
init();
