<?php
require_once 'connection.php';
//echo phpinfo();
/*****setting the default timezone*******/
date_default_timezone_set('Asia/Kolkata');
$t=time();
$now = date("Y-m-d H:i:s",$t);

for($i=0;$i<100000;$i++)
{
		/*******generating a token**********/
		$token = "inorb".rand(1000,9999);
		$vehiclenumber = "AP" . rand(10,99) . "CG" . rand(1000,9999);
		$mobilenumber = rand(1000000000,9999999999);
		sleep(1);
		
		$insertquery="insert into full_cust_details(vehc_no,in_time,mobile_no,token) values('".$vehiclenumber."','".$now."','".$mobilenumber."','".$token."');" ;
		$result=mysqli_query($con,$insertquery) or die(mysqli_error($con));
		
		$insertquery="insert into in_cust(vehc_no,in_time,mobile_no,token) values('".$vehiclenumber."','".$now."','".$mobilenumber."','".$token."');" ;
		$result=mysqli_query($con,$insertquery) or die(mysqli_error($con));
		echo "----".$i."------";
		echo "";
}

?>