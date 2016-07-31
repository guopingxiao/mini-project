var fishMomObj = function(){
	this.x;//大鱼的位置
	this.y;//大鱼的位置
	this.angle;//大鱼的角度
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
	//计数和计时
	this.momTailTimer = 0;
	this.momTailCount = 0;
	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;
	this.momBodyCount = 0;
}

fishMomObj.prototype.init = function(){
	this.x = canWidth/2;
	this.y = canHeight/2;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
//大鱼随鼠标移动而移动，运用Commjs里的lerp x,y 
//大鱼随随表转动而旋转,运用Commjs里的lerp angle，一个跟随函数； 
fishMomObj.prototype.draw = function(){

	//lerp x,y
	this.x = lerpDistance(mx, this.x, 0.96);
	this.y = lerpDistance(my, this.y, 0.96);

	//lerp angle
	//Math.atan2()
	var deltaX = mx - this.x;
	var deltaY = my - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.9) ;


	//计时摇摆尾巴，切换帧匮乏儿童Yui34567890-
	this.momTailTimer += deltaTime;
	if (this.momTailTimer > 60) {
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	};
	var momTailCount = this.momTailCount; 

	//计时，小鱼的眼睛开闭
	this.momEyeTimer += deltaTime;
	if (this.momEyeTimer > this.momEyeInterval) {
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if (this.momEyeCount == 0 ) {//睁开眼睛，事件变长；
			this.momEyeInterval = 1500 + Math.random()*1500;
		}else{
			this.momEyeInterval = 200;
		};
	};
	var momEyeCount = this.momEyeCount;
	var momBodyCount = this.momBodyCount;
	

	cxt1.save();
	cxt1.translate(this.x, this.y);
	cxt1.rotate(this.angle);
	cxt1.drawImage(momTails[momTailCount], -momTails[momTailCount].width/2 + 30, -momTails[momTailCount].height/2 );
	if (data.double == 1 ) {
		cxt1.drawImage(momBodyOrange[momBodyCount], -momBodyOrange[momBodyCount].width/2, -momBodyOrange[momBodyCount].height/2);
	}else if(data.double == 2){
		cxt1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width/2, -momBodyBlue[momBodyCount].height/2);
	};
	cxt1.drawImage(momEyes[momEyeCount], -momEyes[momEyeCount].width/2, -momEyes[momEyeCount].height/2);
	//cxt1.drawImage(this.bigTail, -this.bigTail.width/2 + 30, -this.bigTail.height/2 );
	//cxt1.drawImage(this.bigBody, -this.bigBody.width/2, -this.bigBody.height/2);
	//cxt1.drawImage(this.bigEye, -this.bigEye.width/2, -this.bigEye.height/2);
	cxt1.restore();
}