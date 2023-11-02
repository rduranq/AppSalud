<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Paciente</title>

    <!-- Agrega las bibliotecas de Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- Agrega las bibliotecas de Bootstrap JS y jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
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

        input[type="text"],
        input[type="file"] {
            width: calc(100% - 16px);
            padding: 8px;
            border: 1px solid #444;
            border-radius: 4px;
            background-color: #fff;
            color: #000;
            margin-bottom: 15px;
        }

        input[type="text"]:focus,
        input[type="file"]:focus {
            border-color: #1E90FF;
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
        label{
            color: white;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Agregar Paciente</h2>
        <form method="post" action="addPacientes.php" id="formPaciente">
            <div class="form-group">
                <label for="patient_name">Nombre del Paciente:</label>
                <input type="text" id="patient_name" name="patient_name" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="add">Dirección:</label>
                <input type="text" id="add" name="address" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="cnic">CI:</label>
                <input type="number" id="cnic" name="cnic" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="date_of_birth">Fecha de Nacimiento:</label>
                <input type="date" id="date_of_birth" name="date_of_birth" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="phone_number">Número de Teléfono:</label>
                <input type="text" id="phone_number" name="phone_number" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="gender">Género:</label>
                <select id="gender" name="gender" class="form-control">
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>

            <button type="button" onclick="registrarPaciente()" class="btn btn-primary">Registrar</button>
        </form>
    </div>
    <?php
    include 'conexion.php';
    $sql = "SELECT id, patient_name, address, cnic, date_of_birth, phone_number, gender FROM patients";

    $result = $connect->query($sql);

    if ($result->num_rows > 0) {
    ?>
        <div class="contaniner-alumnos">
            <h2>Lista de Pacientes</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre del Paciente</a></th>
                    <th>Dirección</th>
                    <th>CI</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Celular</th>
                    <th>Género</th>
                    <th>Operaciones</th>

                </tr>
                <?php while ($row = $result->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo $row["id"]; ?></td>
                        <td><?php echo $row["patient_name"]; ?></td>
                        <td><?php echo $row["address"]; ?></td>
                        <td><?php echo $row["cnic"]; ?></td>
                        <td><?php echo $row["date_of_birth"]; ?></td>
                        <td><?php echo $row["phone_number"]; ?></td>
                        <td><?php echo $row["gender"]; ?></td>

                        <td class="operaciones">
                            <a class="btn btn-primary" href="javascript:editarAlumno(<?php echo $row['id']; ?>)">Editar</a>
                        </td>
                    </tr>
                <?php } ?>
            </table>
        </div>
    <?php
    } else {
    ?>
        <p>No existen registros que mostrar.</p>
    <?php } ?>
</body>

</html>