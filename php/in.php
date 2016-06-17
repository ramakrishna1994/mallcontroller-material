<?php 
session_start();
require_once 'connection.php';

$vehiclenumber=mysqli_real_escape_string($con,$_POST['vehicle_number']);
$mobilenumber=mysqli_real_escape_string($con,$_POST['mobile_number']);

/*****setting the default timezone*******/
date_default_timezone_set('Asia/Kolkata');
$t=time();
$now = date("Y-m-d h:i:s",$t);

/*******generating a token**********/
$token = "inorb".rand(1000,9999);

$insertquery="insert into in_cust(vehc_no,in_time,mobile_no,token) values('".$vehiclenumber."','".$now."','".$mobilenumber."','".$token."');" ;
$result=mysqli_query($con,$insertquery) or die(mysqli_error($con));

$insertquery="insert into full_cust_details(vehc_no,in_time,mobile_no,token) values('".$vehiclenumber."','".$now."','".$mobilenumber."','".$token."');" ;
$result=mysqli_query($con,$insertquery) or die(mysqli_error($con));

$selectquery = "select token from in_cust where vehc_no = '".$vehiclenumber."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$token = -1;
while($row = mysqli_fetch_array($result)){
	
	$token = $row['token'];
			
}


echo '{"error":0,"token":"'.$token.'"}';

mysqli_close($con);
?>