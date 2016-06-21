<?php 
session_start();
require_once 'connection.php';


$mobilenumber=mysqli_real_escape_string($con,$_POST['mobile_number']);
$vehiclenumber=mysqli_real_escape_string($con,$_POST['vehicle_number']);
$token=mysqli_real_escape_string($con,$_POST['token']);
$limit = mysqli_real_escape_string($con,$_POST['limit']);
$from = mysqli_real_escape_string($con,$_POST['from']);


/*
$mobilenumber = "";
$vehiclenumber = "";
$token = "";
*/
$noOfResults = 0;


$selectquery = "select * from full_cust_details where mobile_no like '%".$mobilenumber."%' and vehc_no like '%".$vehiclenumber."%' and token like '%".$token."%' order by cust_id limit ".$from.",".$limit." ;";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$json = "[";
$error = 1;
while($row = mysqli_fetch_array($result)){
	$error = 0;
	$json.='{';
	$json.='"token":"'.$row['token'].'",';
	$json.='"vehcNo":"'.$row['vehc_no'].'",';
	$json.='"mobNo":"'.$row['mobile_no'].'",';
	$json.='"inTime":"'.$row['in_time'].'",';
	$json.='"outTime":"'.$row['out_time'].'",';
	$json.='"totalTime":"'.$row['total_time'].'"';
	$json.='},';
			
}




$selectquery = "select count(*) as count from (select * from full_cust_details as ft where ft.mobile_no like '%".$mobilenumber."%' and ft.vehc_no like '%".$vehiclenumber."%' and ft.token like '%".$token."%') as nt;";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
while($row = mysqli_fetch_array($result)){
	
			$totalResults = $row['count'];
}


$from = $from + 100;
$selectquery = "select count(*) as count from (select * from full_cust_details as ft where ft.mobile_no like '%".$mobilenumber."%' and ft.vehc_no like '%".$vehiclenumber."%' and ft.token like '%".$token."%' order by cust_id limit ".$from.",1111111111 ) as nt;";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
while($row = mysqli_fetch_array($result)){
	
			$noOfResults = $row['count'];
}

if($noOfResults == 0)
	$moreResults = 0;
else
	$moreResults = 1;


$json.='{"error":'.$error.',"moreResults":'.$moreResults.',"from":'.$from.',"totalResults":'.$totalResults.'}]';


echo $json;

mysqli_close($con);
?>