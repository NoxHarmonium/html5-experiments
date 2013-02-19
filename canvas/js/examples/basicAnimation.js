///
/// basicAnimation.js
///
/// Basic animation example.
///
function draw(canvas)
{	
	helper.clear(canvas) // Clear canvas and set size
    var text = "Hello World";
	var ctx=canvas[0].getContext("2d");
	var x = 0;
	ctx.strokeStyle = "1px #FF0000";
	helper.setupAnimation();
	(function animloop(){
		requestAnimFrame(animloop);
		helper.clear(canvas,"#FFFFFF",true);
		x += canvas.width() / 100;
		ctx.fillRect(x % canvas.width(), x % canvas.height(), 
			canvas.width()/5, canvas.height()/5);
	})();
}




