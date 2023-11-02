<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = array(); // Respuesta AJAX

    $patientName = $_POST['patient_name'];
    $address = $_POST['address'];
    $cnic = $_POST['cnic'];
    $dateBirth = $_POST['date_of_birth'];
    $phone_number = $_POST['phone_number'];
    $gender = $_POST['gender'];

    $sql = "INSERT INTO `patients` (`patient_name`, `address`, `cnic`, `date_of_birth`, `phone_number`, `gender`)
    VALUES ('$patientName', '$address', '$cnic', '$dateBirth', '$phone_number', '$gender')";
    
    if ($connect->query($sql) === TRUE) {
        $response['status'] = 'success';
        $response['message'] = 'Paciente agregado exitosamente.';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error en la consulta SQL: ' . $sql . '<br>' . $connect->error;
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
