///
/// Helper.js
///
/// Functions to help with HTML5 canvas drawing.
///
"use strict"
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
			var old = ctx.fillStyle;			
			ctx.fillStyle=color;			
			ctx.fillRect(0, 0, canvas.width(), canvas.height());
			ctx.fillStyle = old;
		}
		else
		{	
			ctx.clearRect(0, 0, canvas.width(), canvas.height());
		}

		
		var old = ctx.strokeStyle;
		ctx.strokeStyle = "1px #000000";			
		ctx.strokeRect(0, 0, canvas.width(), canvas.height());	
		ctx.strokeStyle = old;
	

		// Restore the transform
		ctx.restore();
	},

	setupAnimation : function()
	{
		window.requestAnimFrame = (function(){
		  return  window.requestAnimationFrame       ||
				  window.webkitRequestAnimationFrame ||
				  window.mozRequestAnimationFrame    ||
				  window.oRequestAnimationFrame      ||
				  window.msRequestAnimationFrame     ||
				  function( callback ){
				    window.setTimeout(callback, 1000 / 60);
				  };
		})();
	}
	
	
}
