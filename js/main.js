var codeCache = {};
var cm;

$.getScript("js/examples/helloworld.js", function(data, textStatus, jqxhr) {
	console.log(data); //data returned
	console.log(textStatus); //success
	console.log(jqxhr.status); //200
	console.log('Load was performed.');
	
	cm = CodeMirror($('#source-helloworld')[0], {
		value: data,
		mode:  "javascript"
	});
	

	eval(data);
	draw($('#canvas-helloworld'));

});

$('.execute').click(function () {
	var	canvas = $(this).parent().parent().find('canvas.example-canvas');
	var code = $(this).siblings('.source');

	
	eval(cm.getValue());
	draw(canvas);
});



