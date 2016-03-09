//判断大鱼和果实的距离
function momFruitsColl(){
	if(!data.gameOver){
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			//colculate length

			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y); 
			if(l<900){
				fruit.dead(i);
				data.fruitNum++;
				mom.bigBodyCount++;
				if(mom.bigBodyCount>7){
					mom.bigBodyCount=7;
				}
				if(fruit.fruitType[i]=="blue"){
					data.double=2;
				}
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
}
}
function calLength2(x1,y1,x2,y2){
	return Math.pow(x1-x2,2)+Math.pow(y1-y2,2);
}

//大鱼喂小鱼
function momBabyColl(){
	var l=calLength2(mom.x,mom.y,baby.x,baby.y);
	if (l<900&&baby.babyBodyCount!=19&&data.fruitNum>0&&!data.gameOver) {

		baby.babyBodyCount=0;

		data.addScore();
		//data归零
		//data.reset();
		mom.bigBodyCount=0;
		halo.born(baby.x,baby.y);
		//wave.born(baby.x,baby.y,20);
	}

}