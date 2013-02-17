// Make sure that the canvas size is fixed when the window resizes.
$(window).resize(function() {
  canvasExamples.refresh();
});

// Load and render the examples.
$.getJSON('js/basic-examples.json', function(data) {
  $.each(data.examples, function(key, val) {
	val.parent = $('#exampleContainer');    
	canvasExamples.add(val);
  });

	navigation.navigateToHash();
});


