$(document).ready(function(){

	// set up 16x16 grid of boxes/divs
	var cellnum = 0;
	for (i = 1; i <= 16; i++) {
		$('tbody').append("<tr>");
		for (j = 1; j<= 16; j++) {
			cellnum = 100 * i + j;
			$('tbody').append("<td><div class=\"cell\">" + cellnum + "</div></td>");
		}
		$('tbody').append("</tr>");
	}
});

$(function(){
	$('.cell').hover(
		function(){ $(this).css('background-color', '#FF0000');
					$(this).css('color', '#00FFFF');
					},
		function(){ $(this).css('background-color', '#00FFFF'); 
					$(this).css('color', '#FF8000');
					}
	);
});