$(".button-collapse").sideNav();

function login()
{
	document.getElementById("loader").className = "preloader-wrapper small active";
	document.getElementById("status").className = "input-field col s12 hide";
	checkLoginParameters();
}



function checkLoginParameters()
{
				if(document.getElementById("username").value == "")
				{
					document.getElementById("username").focus();
					document.getElementById("loader").className = "preloader-wrapper small active hide";
					document.getElementById("status").className = "input-field col s12";
					$('#status').html('<font color="red">Please Enter User Name</font>');
					return false;
				}
			/******* Email verification
				if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("loginemailid").value)))  
				{  
					document.getElementById("loginemailid").focus();
					$('#loginstatus').html('<font color="red">Please Enter Valid Email address</font>');
					return false;
				  
				}  
			********/

				if(document.getElementById("password").value == "")
				{
					document.getElementById("password").focus();
					document.getElementById("loader").className = "preloader-wrapper small active hide";
					document.getElementById("status").className = "input-field col s12";
					$('#status').html('<font color="red">Please Enter Password</font>');
					return false;
				}

				return doLogin();


}


function doLogin()
{
				
				var username = document.getElementById('username').value;
				var password = document.getElementById('password').value;
				var formData = new FormData();
				formData.append( 'username', username);
				formData.append( 'password',password );
				$(document).ready(function(){
					
					$.ajax({
						url: "php/login.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							document.getElementById("loader").className = "preloader-wrapper small active hide";
							document.getElementById("status").className = "input-field col s12";
							console.log(response.error);
							if(response.error == 1)
								$('#status').html('<font color="red">The username and password you entered don\'t match.</font>');
							else
							{
								$('#status').html('<font color="green">Success</font>');
								window.open("in.html","_self");
							}
						}
						});
				});
}
		



