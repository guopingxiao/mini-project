var fishBabyObj = function(){
	this.x;//小鱼的位置
	this.y;//小鱼的位置
	this.angle;//小鱼的角度
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
	//计数和计时
	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}

fishBabyObj.prototype.init = function(){
	this.x = canWidth/2 +50;
	this.y = canHeight/2 -50;
	this.angle = 0;
	// this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	// this.babyTail.src = "./src/babyTail0.png";
}
//小鱼随鼠标移动而移动，运用Commjs里的lerp x,y 
//小鱼随随表转动而旋转,运用Commjs里的lerp angle，一个跟随函数； 
fishBabyObj.prototype.draw = function(){

	//lerp x,y
	this.x = lerpDistance(fishMom.x, this.x, 0.96);
	this.y = lerpDistance(fishMom.y, this.y, 0.96);

	//lerp angle
	//Math.atan2()
	var deltaX = fishMom.x - this.x;
	var deltaY = fishMom.y - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.9) ;

	//计时摇摆尾巴，切换帧匮乏儿童Yui34567890-
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 60) {
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	};
	var babyTailCount = this.babyTailCount; 

	//计时，小鱼的眼睛开闭
	this.babyEyeTimer += deltaTime;
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;
		if (this.babyEyeCount == 0 ) {//睁开眼睛，事件变长；
			this.babyEyeInterval = 1500 + Math.random()*1500;
		}else{
			this.babyEyeInterval = 200;
		};
	};
	var babyEyeCount = this.babyEyeCount;

	// 计时，小鱼身体慢慢变白
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer > 280) {
		this.babyBodyCount ++;
		if (this.babyBodyCount > 19) {
			//生命结束
			this.babyBodyCount = 19;
			data.gameOver =true;//游戏结束
		};
		this.babyBodyTimer %= 300;
	};
	var babyBodyCount = this.babyBodyCount; 

	//绘制小鱼
	cxt1.save();
	cxt1.translate(this.x, this.y);
	cxt1.rotate(this.angle);
	cxt1.drawImage(babyTails[babyTailCount], -babyTails[babyTailCount].width/2 + 22, -babyTails[babyTailCount].height/2 );
	// cxt1.drawImage(this.babyBody, -this.babyBody.width/2, -this.babyBody.height/2);
	cxt1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width/2, -babyBody[babyBodyCount].height/2);
	cxt1.drawImage(babyEyes[babyEyeCount], -babyEyes[babyEyeCount].width/2, -babyEyes[babyEyeCount].height/2);
	// cxt1.drawImage(this.babyEye, -this.babyEye.width/2, -this.babyEye.height/2);
	cxt1.restore();
}