///
/// gradientsCode.js
///
/// A basic example of using code to draw 
/// shapes programmatically.
function draw(canvas)
{	
	helper.clear(canvas,"#EEEEEE") // Clear canvas and set size
	var ctx=canvas[0].getContext("2d");
	
    var grad = ctx.createLinearGradient(0, 0, canvas.width(), canvas.height());
    grad.addColorStop(0, '#FF0000');   
    grad.addColorStop(1, '#0000FF');
    ctx.fillStyle = grad;
	var offsetX = canvas.width() * 0.3;
	var offsetY = canvas.height() * 0.2;
	var step = (canvas.width() * 0.4) * 0.2;
	for (var i = 0; i < 5; i++)
	{
		ctx.fillRect((i*step)+offsetX,(i*step)+offsetY,step,step);		
	}
}


