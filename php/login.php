<?php 
session_start();
session_unset();

require_once 'connection.php';

$username=mysqli_real_escape_string($con,$_POST['username']);
$password=mysqli_real_escape_string($con,$_POST['password']);



$selectquery='select * from users where user_name="'.$username .'" and password="'.$password.'";' ;
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));


$json='';
$error = 1;
$rowcount=mysqli_num_rows($result);
if($rowcount > 0)
{
	$_SESSION['usertoken'] = 'set';
	$error = 0;
}
/*
	while($row = mysqli_fetch_array($result)){
		
				$error = 0;
				$_SESSION['username'] = $row['username'];
				$_SESSION['isadmin'] = $row['isadmin'];
				$_SESSION['userid'] = $row['userid'];
		
		
				
		
	}
*/
echo '{"error":'. $error.'}';



	
mysqli_close($con);
?>