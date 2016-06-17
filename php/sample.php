<?php 
$to_time = strtotime("2016-06-17 17:00:28");
$from_time = strtotime("2016-06-17 17:35:16");
echo round(abs($to_time - $from_time) / 60,2). " minute";
$timezone = date_default_timezone_get();
echo "The current server timezone is: " . $timezone;
date_default_timezone_set('Asia/Kolkata');
$t=time();
echo($t . "<br>");
echo(date("Y-m-d h:i:s",$t));

$now = date("Y-m-d H:i:s",$t);
echo $now;
?>