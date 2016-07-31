var fruitObj = function(){
	this.x = [];//果实的位置x
	this.y = [];//果实的位置x
	this.size = [];
	this.speed = [];
	this.alive = [];//果实的生长状态
	this.fruitType = [];//blue,orange
	this.orangeFruit = new Image();
	this.blueFruit = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.speed[i] = Math.random() * 0.01 + 0.005;
		this.fruitType[i] = "";
		//this.born(i);
	};

	//选择果实种类
	
	this.orangeFruit.src = './src/fruit.png';
	this.blueFruit.src = './src/blue.png';

}

fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			//绘制果实，位置和大小
			if (this.fruitType[i] == 'orange') {
				var pic = this.orangeFruit;
			}else{
				var pic = this.blueFruit;
			};
			if (this.size[i] <= 15) {
				this.size[i] += this.speed[i] * deltaTime;
			
			}else{
				this.y[i] -= this.speed[i] * 5 * deltaTime ;
			};
			cxt2.drawImage(pic, this.x[i] - this.size[i]/2,
					   this.y[i]- this.size[i]/2, this.size[i], this.size[i]);
			//果实漂出去了，要重置果实状态
			if (this.y[i] < 10) {
				this.alive[i] = false;
			};
		};
		
		
	}
}


fruitObj.prototype.born = function(i){
	var aneId = Math.floor(Math.random() * ane.num);//这里记得取整。
	this.x[i] = ane.x[aneId];
	this.y[i] = canHeight - ane.aneLen[aneId];
	this.size[i] = 0;
	this.alive[i] = true;

	var ran = Math.random();
	if (ran < 0.2) {
		this.fruitType[i] = 'blue';
	}else{
		this.fruitType[i] = 'orange';
	};
}

fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}

//控制果实个数，如果果实小于15个，就生15个，否则不生

fruitObj.prototype.fruitMonitor = function(){
	var fruitNum = 0;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			fruitNum ++;
		};
	}
	if (fruitNum < 15) {
		//产生一个果实
		creatFruit(i);
		return;
	};
}

//产生一个不活动的果实,注意这里的方法不是在原型上，不能用this,用fruit;
function creatFruit(i){
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		};
	};
}