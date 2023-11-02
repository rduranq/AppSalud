<?php 
$host = "localhost";
$user = "root";
$password = "";
$db = "pms_db";
try{
  $connect = new mysqli($host, $user, $password, $db);
} catch (PDOException $Error){
  echo "Error en la conexión" . $Error->getMessage();
}

?>