var app = angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/ui',{
		templateUrl:'ui/carousel.html',
		controller:'firstController',
	})
	/*.when('/ui',{
		templateUrl:'ui/carousel.html',
		controller:'secondController'
	})*/
	.when('/ui/slider',{
		templateUrl:'ui/slider.html',
		controller:'secondController'
	})
	.when('/ui/sidebar',{
		templateUrl:'ui/sidebar.html',
		controller:'secondController'
	})
	.when('/ife',{
		templateUrl:'ife/index.html',
		controller:'firstController',
	})
	.when('/game',{
		templateUrl:'game/calendar.html',
		controller:'firstController',

	}) 
	.when('/demo',{
		templateUrl:'small-demo/index.html',
		controller:'firstController',
	})
	.when('/demo/waterfall',{
		templateUrl:'small-demo/waterfall.html',
		controller:'secondController',
	})
	.when('/demo/dragqq',{
		templateUrl:'small-demo/dragqq.html',
		controller:'secondController',
	})
	.when('/demo/streach',{
		templateUrl:'small-demo/streach.html',
		controller:'secondController',
	})
	.when('/demo/tab',{
		templateUrl:'small-demo/tab.html',
		controller:'secondController',
	})
	.when('/demo/buju',{
		templateUrl:'small-demo/buju.html',
		controller:'secondController',
	})
	.when('/ife/task1',{
		templateUrl:'ife/task1.html',
		controller:'secondController',
	})
	.when('/ife/task2',{
		templateUrl:'ife/task2.html',
		controller:'secondController',
	})
	.when('/ife/task3',{
		templateUrl:'ife/task3.html',
		controller:'secondController',
	})
	.when('/ife/task4',{
		templateUrl:'ife/task4.html',
		controller:'secondController',
	})
	.when('/ife/task5',{
		templateUrl:'ife/task5.html',
		controller:'secondController',
	})
	.when('/ife/task6',{
		templateUrl:'ife/task6.html',
		controller:'secondController',
	})
	.when('/ife/task7',{
		templateUrl:'ife/task7.html',
		controller:'task7Controller',
	})
	.when('/ife/task8',{
		templateUrl:'ife/task8.html',
		controller:'secondController',
	})
	.when('/ife/task9',{
		templateUrl:'ife/task9.html',
		controller:'secondController',
	})
	.when('/ife/task10',{
		templateUrl:'ife/task10.html',
		controller:'secondController',
	})
	.when('/ife/task11',{
		templateUrl:'ife/task11.html',
		controller:'second',
	})
	.when('/ife/task12',{
		templateUrl:'ife/task12.html',
		controller:'secondController',
	})
	.when('/ife/task13',{
		templateUrl:'ife/task13.html',
		controller:'secondController',
	})
	.when('/ife/task14',{
		templateUrl:'ife/task14.html',
		controller:'secondController',
	})
	.when('/ife/task15',{
		templateUrl:'ife/task15.html',
		controller:'secondController',
	})
	.when('/ife/task16',{
		templateUrl:'ife/task16.html',
		controller:'secondController',
	})
	.when('/ife/task17',{
		templateUrl:'ife/task17.html',
		controller:'secondController',
	})
	.when('/ife/task18',{
		templateUrl:'ife/task18.html',
		controller:'secondController',
	})
	.when('/ife/task19',{
		templateUrl:'ife/task19.html',
		controller:'secondController',
	})
	.when('/ife/task20',{
		templateUrl:'ife/task20.html',
		controller:'secondController',
	})
	.when('/ife/task21',{
		templateUrl:'ife/task21.html',
		controller:'secondController',
	})
	.when('/ife/task22',{
		templateUrl:'ife/task22.html',
		controller:'secondController',
	})
	.when('/ife/task23',{
		templateUrl:'ife/task23.html',
		controller:'secondController',
	})
	.when('/ife/task24',{
		templateUrl:'ife/task24.html',
		controller:'secondController',
	})


}])


app.controller('firstController',function($scope){
		$scope.classname = 'first';
})
app.controller('secondController',function($scope){
	$scope.classname = 'second'
})
app.controller('task7Controller',function($scope){
	$scope.classname = 'second';
	(function () {
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

    // 存放城市排名
    var rank = '';

    aqiData.filter(function(city) {       // 过滤符合条件的城市
      console.log(city);
      return city[1] > 60 ? city : false;
    }).sort(function (a, b) {         // 排名
      return a < b;
    }).forEach(function(list, index) {      // 遍历并把最终排名放入标签，字符串拼接
      rank += '<li>第' + (index + 1) + '名：' + list[0] + '（样例:' + list[1] + '）</li>';
    });

    // 结果显示在网页中
    document.getElementById('aqi-list').innerHTML = rank;
 
})();

})
/*app.directive('demoShow',function(){
	return{
		restrict:
	}
})*/
