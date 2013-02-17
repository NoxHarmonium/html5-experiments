///
/// helloworld.js
///
/// Basic canvas example.
///
function draw(canvas)
{	
	helper.clear(canvas) // Clear canvas and set size
    var text = "Hello World";
	var ctx=canvas[0].getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(0, 0, canvas.width(), canvas.height());
	ctx.fillStyle="#FFFFFF";  	
  	var textHeight = (canvas.height() * 0.2);
  	ctx.font = textHeight + "px Arial"; 	
  	var textWidth = ctx.measureText(text).width;	 
  	ctx.fillText(text,
                 (canvas.width()* 0.5) - (textWidth*0.5),
                 (canvas.height()*0.5) + (textHeight*0.25)
                 );
}




