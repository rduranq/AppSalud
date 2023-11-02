<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Historial de Pacientes</title>
    <script src="./ajax/ajax.js" defer></script>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .header,
        .footer {
            background-color: #353a40;
            color: white;
            padding: 10px 0;
            text-align: center;
            font-size: 20px;
        }

        .contaniner {
            background-color: #2c2f33;
            padding: 20px;
            border-radius: 5px;
            max-width: 500px;
            margin: 20px auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
        }

        table {
            width: 95%;
            border-collapse: collapse;
            margin: 20px auto;
            background-color: #353a40;
            color: white;
        }

        th,
        td {
            border: 1px solid #4c5259;
            padding: 8px 15px;
            text-align: center;
        }

        th {
            background-color: #4a4a4a;
        }

        tr:hover {
            background-color: #424242;
        }


        #registrar {
            background-color: #1E90FF;
            color: white;
            padding: 5px 2px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            text-align: center;
            display: block;
            margin: 10px auto;
            text-decoration: none;
        }

        #btnE,
        #btnD {
            background-color: #1E90FF;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            text-align: center;
            display: block;
            margin: 10px auto;
            text-decoration: none;
        }

        button:hover,
        #btnE:hover,
        #btnD:hover {
            background-color: #0073e6;
            transform: scale(1.05);
        }

        h2,
        h3 {
            text-align: center;
            color: #ffffff;
            margin-top: 10px;
        }

        .page-link {
            color: white;
            text-decoration: none;
            font-size: 18px;
            margin: 5px;
            display: inline-block;
        }

        .page-link:hover {
            background-color: #1E90FF;
            color: #ffffff;
            border-color: #1E90FF;
            cursor: pointer;
        }

        .btn {
            padding: 5px 10px;
            text-decoration: none;
            border-radius: 4px;
            border: none;
            color: white;
            text-align: center;
            display: inline-block;
            margin: 0 2px;
            transition: background-color 0.3s;
        }

        .btn-danger {
            background-color: #dc3545;
        }

        .btn-danger:hover {
            background-color: #c82333;
        }

        .btn-primary {
            background-color: #007bff;
        }

        .btn-primary:hover {
            background-color: #0069d9;
        }

        form {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            margin: 0 auto;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }

        input,
        select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        input[type="submit"] {
            width: auto;
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>

    <h2>Historial de Paciente</h2>

    <?php
    include('conexion.php');

    $sql = "SELECT 
    pv.id, pv.visit_date, pv.disease, m.medicine_name, md.packing, pmh.dosage, pmh.quantity FROM  patient_visits AS pv LEFT JOIN  patient_medication_history AS pmh ON pv.id = pmh.patient_visit_id LEFT JOIN 
    medicine_details AS md ON pmh.medicine_details_id = md.id LEFT JOIN  medicines AS m ON md.medicine_id = m.id;";

    // echo $sql;
    $result = $connect->query($sql);

    if ($result->num_rows > 0) {
    ?>
        <div class="container">
            <h2>Lista</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Fecha de consulta</th>
                    <th>Enfermedad</th>
                    <th>Nombre Medicamento</th>
                    <th>Cantidad por Empaque</th>
                    <th>Cantidad</th>
                    <th>Dosis</th>
                    <th>Operaciones</th>

                </tr>
                <?php while ($row = $result->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo $row["id"]; ?></td>
                        <td><?php echo $row["visit_date"]; ?></td>
                        <td><?php echo $row["disease"]; ?></td>
                        <td><?php echo $row["medicine_name"]; ?></td>
                        <td><?php echo $row["packing"]; ?></td>
                        <td><?php echo $row["quantity"]; ?></td>
                        <td><?php echo $row["dosage"]; ?></td>
                        <td class="operaciones">
                            <a class="btn btn-danger" href="javascript:editarAlumno(<?php echo $row['id']; ?>)">Editar</a>
                            <a class="btn btn-primary" href="javascript:deleteAlumno(<?php echo $row['id']; ?>)">Eliminar</a>
                        </td>
                    </tr>
                <?php } ?>
            </table>

        <?php
    } else {
        ?>
            <p>No existe registros que mostrar</p>
        <?php } ?>
        </div>

<!--Aquí realiza los cambios del formulario-->

</body>

</html>