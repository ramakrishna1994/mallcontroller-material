<?php 
session_start();
//error_reporting(E_ALL);
//ini_set('display_errors', '1');
//unset($_SESSION['access_token'])
session_unset();
session_destroy();
header("location:login.html");
?>