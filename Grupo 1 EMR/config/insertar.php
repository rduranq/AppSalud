<?php
// Conexión a la base de datos
include('conexion.php');

// Recogida de datos del formulario
$visit_date = $_POST['visit_date'];
$disease = $_POST['disease'];
$medicine_name = $_POST['medicine_name'];
$packing = $_POST['packing'];
$quantity = $_POST['quantity'];
$dosage = $_POST['dosage'];

// Consulta SQL para insertar los datos

if ($connect->query($sql) === TRUE) {
    echo "Historial registrado con éxito";
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

$connect->close();
?>
