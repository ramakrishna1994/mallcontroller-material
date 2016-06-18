<?php 
session_start();
require_once 'connection.php';

$token=mysqli_real_escape_string($con,$_POST['token']);




$selectquery = "select * from in_cust where token = '".$token."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));



while($row = mysqli_fetch_array($result))
{
					/*****setting the default timezone*******/
					date_default_timezone_set('Asia/Kolkata');
					$t=time();
					
					$from = $row['in_time'];
					$to = date("Y-m-d H:i:s",$t);
					
					/****calculatin the difference********/
					$datetime1 = new DateTime($from);
					$datetime2 = new DateTime($to);
					$interval = $datetime1->diff($datetime2);
					$elapsed = $interval->format('%h hours %i minutes %S seconds');
					
					/*******updating the full customer details table**************/
					$updatequery = "update full_cust_details set out_time='".$to."',total_time='".$elapsed."' where token = '".$token."';";
					mysqli_query($con,$updatequery) or die(mysqli_error($con));
					
					/********deleting the row from in_cust table*************/
					$deletequery = "delete from in_cust where token = '".$token."';";
					mysqli_query($con,$deletequery) or die(mysqli_error($con));
}


mysqli_close($con);
?>