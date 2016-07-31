var dataObj = function(){
	//果实数量为零
	this.fruitNum = 0;
	// 是否吃到蓝色果实，默认为1
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

// dataObj.prototype.reset = function(){
// 	this.fruitNum = 0;
// 	this.double = 1;
// 	fishMom.momBodyCount = 0;
// }

dataObj.prototype.draw = function(){

	cxt1.save();
	
	cxt1.fillText("SCORE: " + this.score, 80, 50);
	if (this.gameOver) {
		this.alpha += deltaTime * 0.005;
		if (this.alpha > 1) {this.alpha =1};
		cxt1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
		cxt1.fillText("GAME OVER!",canWidth/2, canHeight/2);
	};
	cxt1.restore();

}

//计算分值,大鱼喂小鱼，重置果实；
dataObj.prototype.calScore = function(){
	this.score +=  data.fruitNum * 2 * this.double;
	this.fruitNum = 0;
	this.double = 1;
	fishMom.momBodyCount = 0;
}