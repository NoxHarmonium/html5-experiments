"use strict" 

var canvasExamples = 
{
	resetColour: "#EEEEEE",
	ids: [],
	
	add: function(options)
	{
		var row 		= $("<div class='row-fluid'>");
		
		var heading 	= $("<h3></h3>");	
		heading.text(options.title);
		
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
			
		$(options.parent).find("footer").before(heading);	
		$(options.parent).find("footer").before(row);	
		//$(options.parent).find("footer").before(divSep);	
		
		this[options.id] = {
			canvas: canvas,
			editor: CodeMirror(divIEditor[0], {
				value: '',
				mode:  "javascript"
			}),
			source: options.source,
		};

		canvasExamples.ids.push(options.id);
		

		btnRun.click(function () {
			var eId = $(this).prop("data-exampleId");
			canvasExamples.execute(eId);
		});
		btnReset.click(function () {
			var eId = $(this).prop("data-exampleId");
			canvasExamples.reset(eId);
		});			
		
		this.reset(options.id);
		
		
		
	},
	
	execute: function(id)
	{
		console.log('Execute called on #' + id);
		var canvas = canvasExamples[id].canvas;
		var editor = canvasExamples[id].editor;
		var code = editor.getValue();		


		var draw = eval(code + "draw(canvas);");	
		
	},
	
	reset: function(id)
	{
		var canvas = canvasExamples[id].canvas;
		var editor = canvasExamples[id].editor;
		var source = canvasExamples[id].source;	

		helper.clear(canvas, canvasExamples.resetColour);	
		
		editor.readOnly = true;		
		
		editor.setValue("Loading...");
		/*
		$.ajax(source).done(function(data, textStatus, jqxhr) {
			console.log(data); //data returned
			console.log(textStatus); //success
			console.log(jqxhr.status); //200
			console.log('Load was performed.');	

			if (textStatus == "success")
			{
				editor.setValue(data);
				canvasExamples.execute(id);				
				editor.readOnly = false;
			}
		});
		*/
		
		function process()
		{
		  if (xhr.readyState == 4) {
			var data = xhr.response;
			
			editor.setValue(data);
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
		for (var i = 0; i < canvasExamples.length; i++)
		{
			canvasExamples.execute(canvasExamples.ids[i]);
		}
	}
	
	


}

canvasExamples.add({
	title: "Hello World!",
	id: "helloWorld",
	parent: $('#exampleContainer'),
	source: "js/examples/helloworld.js"
});

canvasExamples.add({
	title: "Basic Gradients",
	id: "gradients",
	parent: $('#exampleContainer'),
	source: "js/examples/gradients.js"
});

canvasExamples.add({
	title: "Adding Some Code",
	id: "gradientsCode",
	parent: $('#exampleContainer'),
	source: "js/examples/gradientsCode.js"
});

$(window).resize(function() {
  canvasExamples.refresh();
});



