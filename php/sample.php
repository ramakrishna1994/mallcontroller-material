<?php 
date_default_timezone_set('Asia/Kolkata');
$to_time = strtotime("2016-06-18 22:40:52");
$from_time = strtotime("2016-06-18 22:41:01");
//echo $to_time;
//echo $from_time;
echo round(abs($to_time - $from_time) / 60,2). " minute";
$timezone = date_default_timezone_get();
echo "The current server timezone is: " . $timezone;
date_default_timezone_set('Asia/Kolkata');
$t=time();
echo($t . "<br>");
echo(date("Y-m-d h:i:s",$t));

$now = date("Y-m-d H:i:s",$t);
echo $now;


$datetime1 = new DateTime('2016-06-18 22:40:52');
$datetime2 = new DateTime('2016-06-18 22:43:59');
$interval = $datetime1->diff($datetime2);
$elapsed = $interval->format('%y years %m months %a days %h hours %i minutes %S seconds');
echo $elapsed;
?>