"use strict" 
var canvasExamples = 
{
	resetColour: "#EEEEEE",
	ids: [],
	
	add: function(options)
	{
		var row 		= $("<div class='row-fluid'>");

		var description	= $("<div class='row-fluid'><div class='span11'><h3></h3><p class='description'></p><br></div><div class='span1'/></div>");
		description.find("p").text(options.description);
		description.find("h3").text(options.title);
		description.find("h3").attr("id","heading_"+ options.id);
				
		var divCanvas  	= $("<div class='span5'></div>");
		var divICanvas	= $("<div class='canvas-div'>");
		var canvas 		= $("<canvas class='example-canvas'/>");	
		var canvas_id	= "canvas_" + options.id;
		canvas.attr("id",canvas_id);	
		divCanvas.append(divICanvas.append(canvas));
		
		var divEditor  	= $("<div class='span6'></div>");
		var divIEditor 	= $("<div class='source'></div>");
		var editor_id 	= "editor_" + options.id;
		divEditor.attr("id",editor_id);
		divEditor.append(divIEditor);
		
		var divToolbar 	= $("<div class='span1'></div>");
		var btnRun 		= $("<a class='btn btn-sidebar' alt='Run'><i class='icon-play'></i></a>");
		var btnReset 	= $("<a class='btn btn-sidebar' alt='Reset'><i class='icon-refresh'></i></a>");
		var btnFS		= $("<a class='btn btn-sidebar' alt='Fullscreen'><i class='icon-fullscreen'></i></a>");
		btnRun.prop("data-exampleId",options.id);
		btnReset.prop("data-exampleId",options.id);
		btnFS.prop("data-exampleId",options.id);
		
		
		var divSep		= $("<div class='seperator'></div>");
		
		divToolbar.append(btnRun);
		divToolbar.append(btnReset);
		divToolbar.append(btnFS);
		
		
		row.append(divCanvas);
		row.append(divEditor);
		row.append(divToolbar);
			
		$(options.parent).find("footer").before(description);	
		$(options.parent).find("footer").before(row);
		$(options.parent).find("footer").before(divSep);	

	
		
		this[options.id] = {
			canvas: canvas,
			editor: CodeMirror(divIEditor[0], {
				value: '',
				mode:  "javascript"
			}),
			source: options.source,
			js_data: ""
		};

		canvasExamples.ids.push(options.id);
		

		btnRun.click(function () {
			var eId = $(this).prop("data-exampleId");
			canvasExamples.loadFromEditor(eId);
			canvasExamples.execute(eId);
		});

		btnReset.click(function () {
			var eId = $(this).prop("data-exampleId");
			canvasExamples.loadFromEditor(eId);
			canvasExamples.reset(eId);
		});			
		
		btnFS.click(function () {
			var eId = $(this).prop("data-exampleId");
			canvasExamples.fullscreenToggle(eId);
		});		
		this.reset(options.id);		
	},

	loadFromEditor: function(id)
	{
		var editor = canvasExamples[id].editor;
		canvasExamples[id].js_data = editor.getValue();
	},
	
	execute: function(id)
	{
		var canvas = canvasExamples[id].canvas;
		var editor = canvasExamples[id].editor;
		var code = canvasExamples[id].js_data;

		eval(code + "draw(canvas);");			
	},

	fullscreenToggle: function(id)
	{
		var domCanvas = canvasExamples[id].canvas.parent()[0];
		var request = domCanvas.requestFullScreen || domCanvas.webkitRequestFullScreen || domCanvas.mozRequestFullScreen;
		//var cancel = domCanvas.cancelFullScreen || domCanvas.webkitCancelFullScreen || domCanvas.mozCancelFullScreen;
	
		request.call(domCanvas);
		domCanvas.fullscreen = true;
		canvasExamples.execute(id);
		
	},
	
	reset: function(id)
	{
		var canvas = canvasExamples[id].canvas;
		var editor = canvasExamples[id].editor;
		var source = canvasExamples[id].source;	

		helper.clear(canvas, canvasExamples.resetColour);	
		
		editor.readOnly = true;		
		
		editor.setValue("Loading...");
		
		function process()
		{
		  if (xhr.readyState == 4) {
			var data = xhr.response;
			
			editor.setValue(data);
			canvasExamples[id].js_data = data;
			canvasExamples.execute(id);				
			editor.readOnly = false;
		  }
		}
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = process;
		xhr.open("GET", source, true);
		xhr.send();

		
	},
	
	refresh: function()
	{
		for (var i = 0; i < canvasExamples.ids.length; i++)
		{
			canvasExamples.execute(canvasExamples.ids[i]);
		}
	}	
}






