<?php
$server=getenv("IP");
$username=getenv("C9_USER");
$password="";
$database="lads";
$port=3306;
$db=mysqli_connect($server, $username, $password, $database, $port);
?>