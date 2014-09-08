$(document).ready(function(){
	var initialHeight = 16;
	var initialWidth = 16;
	$('#height').val(initialHeight);
	$('#width').val(initialWidth);
	buildGrid(initialHeight,initialWidth);
});

function buildGrid(myHeight, myWidth){	
	var cellnum = 0;
	for (i = 1; i <= myHeight; i++) {
		$('tbody').append("<tr>");
		for (j = 1; j<= myWidth; j++) {
			cellnum = 100 * i + j;
			$('tbody').append("<td><div class=\"cell\">" + cellnum + "</div></td>");
		}
		$('tbody').append("</tr>");
	}
};

function myReset(){
	var newWidth = $('#width').val();
	var newHeight = $('#height').val();
	alert("Reset button pressed. H: " + newHeight + ", W: " + newWidth);
	$('.container tbody tr').remove(); // doesn't behave as expected.
	buildGrid(newHeight, newWidth);	
}

$(function(){
	$('.cell').hover(
		function(){ $(this).css('background-color', '#FF0000');
					$(this).css('color', '#FFFFFF');
					$(this).css('font-weight', 'bolder');
					},
		function(){ $(this).css('background-color', '#00FFFF'); 
					$(this).css('color', '#FF8000');
					$(this).css('font-weight', 'normal');
					}
	);
});
