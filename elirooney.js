$(document).ready(function() { // START OF JQUERY

	var headerText = $(".headerText")
	console.log( headerText.text())

	$(".b1").click(function() {
		$(".p1").toggle();
	});

}); // END OF JQUERY