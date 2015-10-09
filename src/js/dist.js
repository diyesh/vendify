
var 

$document = $(document);
$triggers = $('#filter a');

$document.ready(function(){

	// Scroll to letter
	//
	triggers.click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 200
		}, 200);
	});

	// Initiate Savvior for masonry like grid
	//
	savvior.init(".savvior-grid", {
		"screen and (max-width: 480px)": { columns: 1 },
		"screen and (max-width: 768px)": { columns: 2 },
		"screen and (min-width: 768px) and (max-width: 980px)": { columns: 3 },
		"screen and (min-width: 980px)": { columns: 4 },
	});
});