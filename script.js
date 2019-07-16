let input = "";

$('.btn').click(function () {
	
	let symbol = $(this).data('value');
	document.getElementById("clearButton").onclick = function() {
		document.getElementById("textInput").value = "";
	  }
	
	if (symbol == '=') {
		result = eval($('input').val());
		$('input').val(result);
		input = "";
		return;
	}

  input += symbol;
	$('input').val(input);
})