$(document).ready(function(){

	$('#sbox').keyup(function(e){
		if(e.which == 13){
			$('#searchbutton').click();
		}
	});

	$('#searchbutton').on('click', function(){
		//document.getElementById('results').innerHTML="";
		var search = $('#sbox').val();
		$.ajax({
			url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search +"&format=json&callback=?",
			type: "GET",
			async: false,
			dataType: "json",
			success: function(response){
				var title;
				var description;
				var lin;
				$('#results').html('');
				for( var i=response[1].length-1; i >= 0; i--){
					title = response[1][i];
					description = response[2][i];
					lin = response[3][i];
					$('#results').prepend("<div><div class='pages'><a class='pages' href="+lin+"><h2>"+title+"</h2>"+"<p>"+description+"</p></a></div></div>")
				}		
			}
		})
		
	});
});