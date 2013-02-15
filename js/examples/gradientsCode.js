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
	var offsetX = 100;
	var offsetY = 30;
	for (var i = 0; i < 5; i++)
	{
		ctx.fillRect((i*50)+offsetX,(i*50)+offsetY,50,50);		
	}
}


