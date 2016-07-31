var aneObj = function(){
	this.x = [];//海葵画布的横坐标
	this.aneLen = [];//海葵的高度
}

aneObj.prototype.num = 50; //海葵数目
aneObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.x[i] = i*16 + 20 * Math.random();
		this.aneLen[i] = 150 + 100 * Math.random();
	}
}

aneObj.prototype.draw = function(){
	cxt2.save();
	cxt2.globalAlpha = 0.5;
	cxt2.lineWidth = 16;
	cxt2.lineCap = "round";
	cxt2.strokeStyle = "#3b1541";
	for (var i = 0; i < this.num; i++) {
		cxt2.beginPath();
		cxt2.moveTo(this.x[i], canHeight);
		cxt2.lineTo(this.x[i], canHeight - this.aneLen[i]);
		cxt2.stroke();
	}
	cxt2.restore();

}