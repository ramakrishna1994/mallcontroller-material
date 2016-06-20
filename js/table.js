$(".button-collapse").sideNav();
intelliSearch();

 function intelliSearch()
{
	fillLoader();
	var mobileNumber = document.getElementById("mobileNumber").value;
	var vehicleNumber = document.getElementById("vehicleNumber").value;
	var token = document.getElementById("token").value;
	
	
	
				var formData = new FormData();
				
				formData.append( 'mobile_number',mobileNumber);
				formData.append( 'vehicle_number',vehicleNumber);
				formData.append( 'token',token);
				$(document).ready(function(){
					
					$.ajax({
						url: "php/tableSearch.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							var innerhtml = "";
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr>'
											+'	<td>'+(i+1)+'</td>'
											+'	<td>'+response[i].token+'</td>'
											+'	<td>'+response[i].vehcNo+'</td>'
											+'	<td>'+response[i].mobNo+'</td>'
											+'	<td>'+response[i].inTime+'</td>'
											+'	<td>'+response[i].outTime+'</td>'
											+'	<td>'+response[i].totalTime+'</td>'
											+'	</tr>';
							}
							
							document.getElementById("tbody").innerHTML = innerhtml;
						}
						});
				});
	
}



function fillLoader()
{
	var loader = '<tr class="center-align"><td colspan="7"><div class="preloader-wrapper small active">'
				+'	<div class="spinner-layer spinner-green-only">'
				+'	<div class="circle-clipper left">'
				+'	<div class="circle"></div>'
				+'	</div><div class="gap-patch">'
				+'	<div class="circle"></div>'
				+'	</div><div class="circle-clipper right">'
				+'	<div class="circle"></div>'
				+'	</div>'
				+'	</div>'
				+'	</div></td></tr>';
				
	document.getElementById("tbody").innerHTML = loader;
}