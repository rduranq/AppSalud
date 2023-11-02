<?php
include("conexion.php");

if (isset($_POST["displayName"])) {

    $dname = (isset($_POST['displayName'])) ? $_POST['displayName'] : '';
    $name = (isset($_POST['name'])) ? $_POST['name'] : '';
    $pw = (isset($_POST['contraseña'])) ? $_POST['contraseña'] : '';

    $encryptedPassword = md5($pw);


    //Procedimineto para la fotografia
    $archivo_original = (isset($_FILES['fotografia']['name'])) ? $_FILES['fotografia']['name'] : '';
    $arreglo_img = explode(".", $archivo_original);
    $extension = $arreglo_img[1];
    $fotografia = uniqid() . '.' . $extension;


    $target_directory = 'T:/xampp/htdocs/SIS324-EMR/imágenes/';

    copy($_FILES['fotografia']['tmp_name'], $target_directory . $fotografia);

    $sql = "INSERT INTO `users`(`display_name`,
    `user_name`, `password`, `profile_picture`) VALUES ('$dname', '$name', '$encryptedPassword', '$fotografia');";
    

    if ($connect->query($sql) === TRUE) {
        echo "Usuario registrado";
    } else {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }

    $connect->close();
}
?>
