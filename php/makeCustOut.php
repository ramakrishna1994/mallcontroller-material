<?php 
session_start();
require_once 'connection.php';

$token=mysqli_real_escape_string($con,$_POST['token']);




$selectquery = "select * from in_cust where token = '".$token."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));



while($row = mysqli_fetch_array($result))
{
					$from = $row['in_time'];
					/*****setting the default timezone*******/
					date_default_timezone_set('Asia/Kolkata');
					$t=time();
					$to = date("Y-m-d H:i:s",$t);
					echo $from."x";
					echo $to."x";
					/****calculatin the difference********/
					$total = (round(abs($to - $from) / 60,2)) . " minutes";
					echo $total."x";
					/*******updating the full customer details table**************/
					$updatequery = "update table full_cust_details set out_time='".$to."',total_time='".$total."' where token = '".$token."'";
					mysqli_query($con,$updatequery) or die(mysqli_error($con));
					
					/********deleting the row from in_cust table*************/
					$deletequery = "delete from in_cust where token = '".$token."';";
					mysqli_query($con,$deletequery) or die(mysqli_error($con));
}


mysqli_close($con);
?>