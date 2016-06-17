$(".button-collapse").sideNav();
	
$(document).ready(function() {
    $('select').material_select();
  });
  
   $(document).ready(function() {
    $('input#mobile_number').characterCounter();
  });
  
 

 function searchCustUsingMobNum()
{
	var mobileNumber = document.getElementById("mobile_number").value;
	document.getElementById("loader").className = "card-panel hoverable white lighten-2";
	document.getElementById("status").className = "input-field col s12 hide";
	document.getElementById("table").className = "card-panel hoverable white lighten-2 hide";
	document.getElementById("noresults").className = "card-panel hoverable white lighten-2 hide";
	if(mobileNumber == "")
	{
					document.getElementById("mobile_number").focus();
					document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
					document.getElementById("status").className = "col s12";
					$('#status').html('<font color="red">Please Enter Mobile Number</font>');
					return false;
	}
	
				var formData = new FormData();
				
				formData.append( 'mobile_number',mobileNumber);
				$(document).ready(function(){
					console.log("hi");
					$.ajax({
						url: "php/searchCustByMob.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
							if(response[response.length-1].error == 0)
								filltable(response);
							else
								document.getElementById("noresults").className = "card-panel hoverable white lighten-2";
						}
						});
				});
	
}


function searchCustUsingVehcNo()
{
	
	document.getElementById("loader").className = "card-panel hoverable white lighten-2";
	document.getElementById("status").className = "input-field col s12 hide";
	document.getElementById("table").className = "card-panel hoverable white lighten-2 hide";
	document.getElementById("noresults").className = "card-panel hoverable white lighten-2 hide";
	
				if(document.getElementById("district").value == "")
				{
					document.getElementById("district").focus();
					document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
					document.getElementById("status").className = "col s12";
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
					document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
					document.getElementById("status").className = "col s12";
					$('#status').html('<font color="red">Please Fill Vehicle Number</font>');
					return false;
				}
				
				var vehicleNumber = document.getElementById("state").value + document.getElementById("district").value + document.getElementById("jilla").value + document.getElementById("code").value;
				var formData = new FormData();
				
				formData.append( 'vehicle_number', vehicleNumber);
				$(document).ready(function(){
					
					$.ajax({
						url: "php/searchCustByVehc.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
							if(response[response.length-1].error == 0)
								filltable(response);
							else
								document.getElementById("noresults").className = "card-panel hoverable white lighten-2";
						}
						});
				});
}

function searchCustUsingToken()
{
	var token = document.getElementById("token").value;
	document.getElementById("loader").className = "card-panel hoverable white lighten-2";
	document.getElementById("status").className = "input-field col s12 hide";
	document.getElementById("table").className = "card-panel hoverable white lighten-2 hide";
	document.getElementById("noresults").className = "card-panel hoverable white lighten-2 hide";
	if(token == "")
	{
					document.getElementById("token").focus();
					document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
					document.getElementById("status").className = "col s12";
					$('#status').html('<font color="red">Please Enter Mobile Number</font>');
					return false;
	}
	
				var formData = new FormData();
				
				formData.append( 'token',token);
				$(document).ready(function(){
					console.log("hi");
					$.ajax({
						url: "php/searchCustByToken.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							document.getElementById("loader").className = "card-panel hoverable white lighten-2 hide";
							if(response[response.length-1].error == 0)
								filltable(response);
							else
								document.getElementById("noresults").className = "card-panel hoverable white lighten-2";
						}
						});
				});
}
	
function filltable(data)
{
	document.getElementById("table").className = "card-panel hoverable white lighten-2 ";
	
	var innerhtml = 	'<table class="centered">'
						+'<thead>'
						+'<tr>'
						+'<th >S.No</th>'
						+'<th >Token</th>'
						+'<th >Vehc #</th>'
						+'<th >Mob #</th>'
						+'<th >In Time</th>'
						+'<th ></th>'
						+'</tr>'
						+'</thead>'
						+'<tbody>';
		for(var i=0;i<data.length-1;i++)
		{
						innerhtml +='<tr>'
								+'<td>'+(i+1)+'</td>'
								+'<td>'+data[i].token+'</td>'
								+'<td>'+data[i].vehcNo+'</td>'
								+'<td>'+data[i].mobNo+'</td>'
								+'<td>'+data[i].inTime+'</td>'
								+'<td><a class="waves-effect waves-light btn" onclick="makeCustOut(\''+data[i].token+'\')"><i class="material-icons left">cloud</i>OUT</a></td>'
								+'</tr>';
		}
						  
						  
		innerhtml	+='</tbody>'
					+'</table>';
					
		document.getElementById("table").innerHTML = innerhtml;
}



function makeCustOut(token)
{
				var formData = new FormData();
				
				formData.append( 'token',token);
				$(document).ready(function(){
					
					$.ajax({
						url: "php/makeCustOut.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							alert("success");
						}
						});
				});
	}