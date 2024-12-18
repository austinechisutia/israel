$(document).ready(function() {
	$("#contactform").submit(function(e) {
		e.preventDefault();
	    var form = $(this);
	    var url = form.attr("action");
	    $("#submit").html('Please wait... <span class="fas fa-circle-notch fa-spin"></span>');
	    setTimeout(
			  function() 
			  {
				$.ajax({          
			        	type: "post",
			        	url: url,
			        	data: form.serialize(),
			        	dataType: "json",
			        	cache: false,
			        	success: function(data){
			        		if(data.status == 'ok'){
						        $("#submit").html('Submit <i class="fa-solid fa-angle-right"></i>');
						    	alert(data.msg);
						    	form.trigger("reset");
						    }else{
						    	$("#submit").html('Submit <i class="fa-solid fa-angle-right"></i>');
						    	alert(data.msg);
						    	form.trigger("reset");
						    	//grecaptcha.reset();
						    }
			        	}
				});
			}, 2000);
	});
});