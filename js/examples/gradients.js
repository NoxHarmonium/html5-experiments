///
/// gradients.js
///
/// An example of how to use gradients
///
function draw(canvas)
{	
	helper.clear(canvas,"#EEEEEE") // Clear canvas and set size
	var ctx=canvas[0].getContext("2d");
	
    var grad = ctx.createLinearGradient(0, 0, canvas.width(), canvas.height());
    grad.addColorStop(0, '#FF0000');   
    grad.addColorStop(1, '#0000FF');
    ctx.fillStyle = grad;
	ctx.fillRect(130,80,150,150);
}


