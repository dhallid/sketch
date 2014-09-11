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
		$('tbody.container').append("<tr></tr>");
		for (j = 1; j<= myWidth; j++) {
			cellnum = 100 * i + j;
			$('tbody.container tr:last').append("<td class=\"cell\">" + cellnum + "</td>");
		}
	}
};

function myReset(){
	var newWidth = $('#width').val();
	var newHeight = $('#height').val();
	alert("Reset button pressed. H: " + newHeight + ", W: " + newWidth);
	$('.container tr td').remove();
	$('.container tr').remove();
	buildGrid(newHeight, newWidth);	
}

$(function(){
	$('.cell').hover(
					function(){ $(this).css({'background-color':'#FF0000', 'color':'#FFFFFF', 'font-weight':'bolder'})},
					function(){ $(this).css({'background-color':'#00FFFF', 'color':'#FF8000', 'font-weight':'normal'})}
	);
});
