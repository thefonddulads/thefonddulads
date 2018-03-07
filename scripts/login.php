<?php
include("connect.php");
$test=false;
$Statement="SELECT MIN(id), MAX(id) FROM login";
$query2=mysqli_query($db, $Statement);
$row=mysqli_fetch_array($query2);

echo $row[0], $row[1];
for($i=$row[0]-1;$i<=$row[1]+1;$i++){
    $statement2="select username, password from login where id='".$i."'";
    $query=mysqli_query($db, $statement2);
    $row2=mysqli_fetch_array($query);
    echo $row2[0], $row2[1], $i;
    if($_POST['username']===$row2[0]){
        echo 'user';
        if($_POST['password']===$row2[1]){
          echo 'password';
          session_start();
          $_SESSION['username']=$_POST['username'];
          header('location: ../resources/index.php');
         break;
        }
        else if($i===$row[1]){
          $test=true;
          break;
         }
        else{
          continue;
        }
    }
    else if($i===$row[1]){
        $test=true;
        break;
         }
    else{
        continue;
    }
}
if($test){
    echo 'fuck';
    header('location: ../login.html');
}
?>

