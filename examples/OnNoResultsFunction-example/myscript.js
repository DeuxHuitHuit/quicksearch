$(document).ready(function(){

	$('input#input_search').quicksearch(
		'table#target_table tbody tr',
		{'enableOnNoResultsFunction': true, 'onNoResultsFound': exampleFunction}
	);

});

exampleFunction = function(){
	alert("This function is called when there is no results and you enabled the 'OnNoResultsFunction'.");
}