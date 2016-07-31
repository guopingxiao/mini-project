//大鱼吃果实
function eatFruit(){
	if (!data.gameOver) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i]) {
				var dist = calLength2(fruit.x[i], fruit.y[i], fishMom.x, fishMom.y);
				if (dist < 800) {
					fruit.dead(i);
					//吃到果实
					data.fruitNum ++;
					fishMom.momBodyCount ++;
					if (fishMom.momBodyCount > 7) {
						fishMom.momBodyCount = 7;
					};
					if (fruit.fruitType[i] == 'blue') {//blue
						data.double = 2;
					};
				};
			};
		};
	};
	
}

//大鱼喂小鱼
function sendFruit(){
	if (data.fruitNum > 0 && !data.gameOver) {
		var dist2 = calLength2(fishMom.x, fishMom.y, fishBaby.x, fishBaby.y);
		if (dist2 < 800) {
			fishBaby.babyBodyCount = 0;
			//喂完果实，一切都归零
			data.calScore();
		};
	};
	
}