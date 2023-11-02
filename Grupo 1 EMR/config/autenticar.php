<?php 
session_start();
include("conexion.php");

$user = $_POST['user_name'];
$password = md5($_POST['contraseña']);

$sql = "SELECT `user_name`,`password` from users where `user_name`='$user' and `password`='$password'";
//echo $sql;

$resultado = $connect->query($sql);
if ($resultado->num_rows > 0) {
    $fila = $resultado->fetch_assoc();
    $_SESSION['user_name'] = $fila['user_name'];
    $_SESSION['password'] = $fila['password'];
    echo "success"; 
}else{
    echo "error";
}
?>