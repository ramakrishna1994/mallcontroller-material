$(".button-collapse").sideNav();
intelliSearch();
var starting = 0;
 function intelliSearch()
{
	
	fillLoader();
	var mobileNumber = document.getElementById("mobileNumber").value;
	var vehicleNumber = document.getElementById("vehicleNumber").value;
	var token = document.getElementById("token").value;
	var limit = 100;
	var from = 0;
	
	
	
				var formData = new FormData();
				
				formData.append( 'mobile_number',mobileNumber);
				formData.append( 'vehicle_number',vehicleNumber);
				formData.append( 'token',token);
				formData.append( 'limit',limit);
				formData.append( 'from',from);
				
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
							starting = 0;
							fillLoader();
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
											
								starting = starting + 1;
							}
							
							document.getElementById("tbody").innerHTML = innerhtml;
							document.getElementById("show").innerHTML = "showing "+starting+" of "+response[response.length-1].totalResults+" results";
							//alert(response[response.length-1].moreResults);
							if(response[response.length-1].moreResults == 1)
								document.getElementById('loadmore').className = "card-panel hoverable white lighten-2 center-align ";
							else
								document.getElementById('loadmore').className = "card-panel hoverable white lighten-2 center-align hide";
							
							
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


function loadMore()
{
	document.getElementById('loader').className = "card-panel hoverable white lighten-2 center-align";
	document.getElementById('loadmore').className = "card-panel hoverable white lighten-2 center-align hide";
	var mobileNumber = document.getElementById("mobileNumber").value;
	var vehicleNumber = document.getElementById("vehicleNumber").value;
	var token = document.getElementById("token").value;
	var limit = 100;
	var from = document.getElementById('from').value;

	var innerhtml = document.getElementById('tbody').innerHTML;
	
				var formData = new FormData();
				
				formData.append( 'mobile_number',mobileNumber);
				formData.append( 'vehicle_number',vehicleNumber);
				formData.append( 'token',token);
				formData.append( 'limit',limit);
				formData.append( 'from',from);
				
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
							
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr>'
											+'	<td>'+(starting+1)+'</td>'
											+'	<td>'+response[i].token+'</td>'
											+'	<td>'+response[i].vehcNo+'</td>'
											+'	<td>'+response[i].mobNo+'</td>'
											+'	<td>'+response[i].inTime+'</td>'
											+'	<td>'+response[i].outTime+'</td>'
											+'	<td>'+response[i].totalTime+'</td>'
											+'	</tr>';
											
								starting+=1;
							}
							document.getElementById('loader').className = "card-panel hoverable white lighten-2 center-align hide";
							document.getElementById("tbody").innerHTML = innerhtml;
							if(response[response.length-1].moreResults == 1)
								document.getElementById('loadmore').className = "card-panel hoverable white lighten-2 center-align ";
							else
								document.getElementById('loadmore').className = "card-panel hoverable white lighten-2 center-align hide";
							
							document.getElementById("show").innerHTML = "showing "+starting+" of "+response[response.length-1].totalResults+" results";
							document.getElementById('from').value = response[response.length-1].from;
						}
						});
				});
	
	
}