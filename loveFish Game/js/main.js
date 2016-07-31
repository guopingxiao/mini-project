var can1;
var can2;
var cxt1;
var cxt2;
var canHeight, canWidth;
var lastTime;
var deltaTime;
var ane,fruit,fishMom;

//定义鼠标位置
var mx,my;

//定义小鱼的尾巴动画组
var babyTails = [];
var babyEyes = [];
var babyBody = [];

var momTails = [];
var momEyes = [];
var momBodyOrange = [];
var momBodyBlue = [];

//计算分数的数据信息
var data;

document.body.onload = game;


function game(){
	init();
	lastTime= Date.now();
	deltaTime = 0;
	gameLoop();
}

function init(){
	//获得canvas和context环境；布局在不同的画布上绘制不同的
	//物体，两个canvas分开绘制一些东西；
	can1 = document.getElementById('canvas1');//前面的绘制fish,dust，UI,circle
	can2 = document.getElementById('canvas2');//后面的绘制background,ane,friut;
	//获得画布环境
	cxt1 = can1.getContext('2d');
	cxt2 = can2.getContext('2d');
	cxt1.font = "30px Verdana";
	cxt1.textAlign = "center";
	cxt1.shadowBlur = 10;
	cxt1.shadowColor = "white";
	cxt1.fillStyle = 'white';

	//监听鼠标事件
	can1.addEventListener('mousemove',onMouseMove, false);
	canHeight = can1.height;
	canWidth = can1.width;
	//初始化鼠标位置为屏幕中间
	mx = canWidth/2;
	my = canHeight/2;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	fishMom = new fishMomObj();
	fishMom.init();

	fishBaby = new fishBabyObj();
	fishBaby.init();

	data = new dataObj();

	
	//小鱼动画的初始化
	for (var i = 0; i < 8; i++) {
		babyTails[i] = new Image();
		babyTails[i].src = "./src/babyTail" + i + ".png";
	};

	for (var i = 0; i < 2; i++) {
		babyEyes[i] = new Image();
		babyEyes[i].src = "./src/babyEye" + i + ".png";
	};

	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	};

	//大鱼动画的初始化
	for (var i = 0; i < 8; i++) {
		momTails[i] = new Image();
		momTails[i].src = "./src/bigTail" + i + ".png";
	};

	for (var i = 0; i < 2; i++) {
		momEyes[i] = new Image();
		momEyes[i].src = "./src/bigEye" + i + ".png";
	};

	for (var i = 0; i < 8; i++) {
		momBodyOrange[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrange[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	};

}

function gameLoop(){
	window.requestAnimFrame(gameLoop);//区别于定时器
	var now = Date.now();
	deltaTime = now - lastTime;
	if (deltaTime > 40 ) {deltaTime = 40};
	lastTime = now;
	
	//console.log(deltaTime);
	drawBackGround();
	ane.draw();
	fruit.draw();
	fruit.fruitMonitor();

	//清除前面的画布cxt1
	cxt1.clearRect(0,0, canWidth, canHeight);
	fishMom.draw();
	fishBaby.draw();

	eatFruit();
	sendFruit();

	data.draw();
}

function drawBackGround(){
	
	var bgPic = new Image();
	bgPic.src = "src/background.jpg";
	cxt2.drawImage(bgPic, 0, 0, canWidth, canHeight);
	
}

function onMouseMove(e){//获取鼠标的实时位置
	if (!data.gameOver) {
		if (e.offsetX || e.layerX) {
			mx = e.offsetX || e.layerX;
			my = e.offsetY || e.layerY;
		};
	//console.log(mx);	
	};

}