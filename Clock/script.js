//Canvas Ids
var canvas = document.getElementById("myClock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
//The Code
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();
//Timing it;
setInterval(drawClock, 1000);

//How to draw a clock 101
function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}
// The Face
function drawFace(ctx, radius) {
	var grad;
	var grad2;
	//Circle
	ctx.beginPath();
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
	//Grad
	grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius *1.05);
	grad.addColorStop(0, "rgb(30, 0, 0)");
	grad.addColorStop(0.5, "rgb(80, 30, 10)");
	grad.addColorStop(1, "rgb(90, 50, 0)");
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius*0.21;
	ctx.stroke();

	//Center
	ctx.beginPath();
	ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
}
// Numbers 1 to 24

function drawNumbers(ctx, radius) {
	
	var ang;
	var num;
	ctx.font = radius*0.15 + "px Times New Roman";
	ctx.textBaseline="middle";
	ctx.textAlign="center";
	
	//Draw Dots
	ctx.fillStyle = "rgb(150,150,150)";
	ctx.font = radius*0.1 + "px Times New Roman";
	for(num = 1; num < 61; num++) {
		ang = num * Math.PI / 30;
		
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.855);
		//ctx.rotate(-ang);
		ctx.fillText("|", 0, 0);
		//ctx.rotate(ang);
		ctx.translate(0, radius*0.855);
		//ctx.rotate(-ang);
		ctx.rotate(-ang);
		
	}
	//1 to 12
	for(num = 1; num < 13; num++) {
		//Dasher Dots
		ctx.fill();
		ctx.fillStyle = "rgb(150,150,150)";
		ctx.font = radius*0.10 + "px Arial";
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.855);
		ctx.fillText("|", 0, 0);
		ctx.translate(0, radius*0.855);
		ctx.rotate(-ang);
		//ReFontalization
		ctx.font = radius*0.15 + "px Times New Roman";
		ctx.fill();
		//Nums 1 to 12
		ang = num * Math.PI / 6;
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.80);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius*0.80);
		ctx.rotate(-ang);
		
	}
	//13 to 24
	ctx.font = radius*0.1 + "px Times New Roman";
	for(num = 13; num < 25; num++) {
		ang = num * Math.PI / 6;
		
		ctx.rotate(ang);
		ctx.translate(-2, -radius*0.65);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(2, radius*0.65);
		ctx.rotate(-ang);
	}
}
	// Get Time
function drawTime(ctx, radius){
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour=hour%12;
	hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
	drawHand(ctx, hour, radius*0.45, radius*0.05, "black");
	//minute
	minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
	drawHand(ctx, minute, radius*0.55, radius*0.07, "grey");
	// second
	second=(second*Math.PI/30);
	drawHand(ctx, second, radius*0.8, radius*0.02, "red");
	//Recenter
	ctx.beginPath();
	ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
}
	//Drawing Hands
function drawHand(ctx, pos, length, width, colour) {
	ctx.beginPath();
	ctx.strokeStyle = colour;
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
	}
				