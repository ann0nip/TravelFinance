$(document).ready(function(){
		
	if(!localStorage.getItem('user')){
		$(location).attr('href','index.html');
	}else{
		$( "#openForm" ).click(function() {
	  		$( "#formData" ).toggle( "drop");
		});
		var f = new Date();
		var date = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
		$("#date").val(date);
	}

});