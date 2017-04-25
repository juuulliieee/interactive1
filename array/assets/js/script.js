$(document).ready(function(){
	
	var colors = ["red", "blue", "green", "yellow", "black", "white"];

	$('body').click(function() {
		// updates the body's html with the first value in the colors array
		$('body').html(colors[1]);	
	});

});