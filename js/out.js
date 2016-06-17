$(".button-collapse").sideNav();
	
$(document).ready(function() {
    $('select').material_select();
  });
  
   $(document).ready(function() {
    $('input#mobile_number').characterCounter();
  });
  
  function makeCustOut()
{
	document.getElementById("loader").className = "preloader-wrapper small active";
	document.getElementById("status").className = "input-field col s12 hide";
	checkOutParameters();
}


function checkOutParameters()
{
				if(document.getElementById("district").value == "")
				{
					document.getElementById("district").focus();
					document.getElementById("loader").className = "preloader-wrapper small active hide";
					document.getElementById("status").className = "input-field col s12";
					$('#status').html('<font color="red">Please Fill Vehicle Number</font>');
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

				if(document.getElementById("code").value == "")
				{
					document.getElementById("code").focus();
					document.getElementById("loader").className = "preloader-wrapper small active hide";
					document.getElementById("status").className = "input-field col s12";
					$('#status').html('<font color="red">Please Fill Vehicle Number</font>');
					return false;
				}
				
				if(document.getElementById("mobile_number").value == "")
				{
					document.getElementById("mobile_number").focus();
					document.getElementById("loader").className = "preloader-wrapper small active hide";
					document.getElementById("status").className = "input-field col s12";
					$('#status').html('<font color="red">Please Enter Mobile Number</font>');
					return false;
				}

				return searchCust();


}

function searchCust()
{
	var vehicleNumber = document.getElementById("state").value + document.getElementById("district").value + document.getElementById("jilla").value + document.getElementById("code").value;
	
	var mobileNumber = document.getElementById("mobile_number").value;
	var formData = new FormData();
				formData.append( 'vehicle_number', vehicleNumber);
				formData.append( 'mobile_number',mobileNumber);
				$(document).ready(function(){
					
					$.ajax({
						url: "php/searchCust.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							document.getElementById("loader").className = "preloader-wrapper small active hide";
							document.getElementById("status").className = "input-field col s12";
							document.getElementById("district").value = "";
							document.getElementById("code").value = "";
							document.getElementById("mobile_number").value = "";
							console.log(response.error);
							$('#status').html('<font color="green">Successfully entered and token generated is '+response.token+'</font>');
						}
						});
				});
}

