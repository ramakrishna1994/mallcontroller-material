$(document).ready(function(){
					
					$.ajax({
						url: "php/isSessionSet.php",// give your url
						type: "GET",
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							if(response.error == 1)
								window.open("login.html", "_self")
						}
						});
				});