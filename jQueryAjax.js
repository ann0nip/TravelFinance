$(document).ready(function(){
	
	   // Save input value to localStorage
	   $( "button[name='sign']" ).on('click', function() {
		var username = $('#user').val();
		var password = $('#pass').val();
		$.ajax({
			type: "POST",
			url: "http://id-juanma.com.ar/Travel/response.php",
			data: { user: username, pass: password }
		})
		.done(function( msg ) {
			if(msg == "Oka"){						
				localStorage.setItem("user", username);			
				localStorage.setItem("pass", password);
				$(location).attr('href','main.html');
			}
		});
	   });
	   
	});