///
/// myFirstCanvas.js
///
/// Basic canvas example.
///
function draw(canvas)
{	
	helper.clear(canvas) // Clear canvas and set size
   	var ctx=canvas[0].getContext("2d");	
	ctx.fillStyle="green";
	ctx.fillRect(0, 0, canvas.width(), canvas.height());
}




