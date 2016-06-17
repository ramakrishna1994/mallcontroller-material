<?php 
session_start();
require_once 'connection.php';

$vehicle_number=mysqli_real_escape_string($con,$_POST['vehicle_number']);

$selectquery = "select * from in_cust where vehc_no = '".$vehicle_number."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$json = "[";
$error = 1;
while($row = mysqli_fetch_array($result)){
	$error = 0;
	$json.='{';
	$json.='"token":"'.$row['token'].'",';
	$json.='"vehcNo":"'.$row['vehc_no'].'",';
	$json.='"mobNo":"'.$row['mobile_no'].'",';
	$json.='"inTime":"'.$row['in_time'].'"';
	$json.='},';
			
}

$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>