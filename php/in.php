<?php 
session_start();
require_once 'connection.php';

$vehiclenumber=mysqli_real_escape_string($con,$_POST['vehicle_number']);
$mobilenumber=mysqli_real_escape_string($con,$_POST['mobile_number']);



$insertquery="insert into in_cust(vehc_no,in_time,mobile_no) values('".$vehiclenumber."',NOW(),'".$mobilenumber."');" ;
$result=mysqli_query($con,$insertquery) or die(mysqli_error($con));

$selectquery = "select cust_id from in_cust where vehc_no = '".$vehiclenumber."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$token = -1;
while($row = mysqli_fetch_array($result)){
	
	$token = $row['cust_id'];
			
}


echo '{"error":0,"token":"'.$token.'"}';

mysqli_close($con);
?>