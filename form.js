$(document).ready(function() {
	$('button').on('click', function() {
		var abv = $('#abv').val();
		var	price = $('#price').val();
		var	oz = $('#oz').val();
		var total = ((abv*oz)/price);
		console.log(total);
		// set to 0.00 decimals
		var formattedTotal = total.toFixed(2);
		$('#money').html("<h1>$</h1>" + formattedTotal);
	});
})
