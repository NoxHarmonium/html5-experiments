///
/// Helper.js
///
/// Functions to help with HTML5 canvas drawing.
///
var helper = 
{
	clear: function (canvas, color) {
		// Make sure that the canvas knows what size it is.
		// If you set the style to a certain size or 
		// percentage without setting the canvas properties
		// it will scale and look blurry.
		canvas.prop('width',canvas.parent().width());
		canvas.prop('height',canvas.parent().height());
		
		var ctx=canvas[0].getContext("2d");
		
		// Clear the canvas without messing with 
		// the current transform matrix.
		//Source: http://stackoverflow.com/a/6722031/1153203	
		
		// Store the current transformation matrix.
		ctx.save();

		// Use the identity matrix while clearing the canvas
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		
		if (color)
		{
			ctx.fillStyle=color;			
			ctx.fillRect(0, 0, canvas.width(), canvas.height());
		}
		else
		{	
			ctx.clearRect(0, 0, canvas.width(), canvas.height());
		}

		// Restore the transform
		ctx.restore();
	}
	
}