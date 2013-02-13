///
/// helloworld.js
///
/// Basic canvas example.
///
function draw(canvas)
{	
	var ctx=canvas[0].getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(0, 0, canvas.width(), canvas.height());
	ctx.fillStyle="#FFFFFF";
	ctx.font="30px Arial";
	ctx.fillText("Hello World",10,50);
}


