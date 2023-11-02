<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información</title>
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
    </style>
</head>

<body class="body">

    <h2>Medicamentos</h2>

    <?php
    include('conexion.php');

    $sql = "SELECT id, medicine_name FROM medicines";

    // echo $sql;
    $result = $connect->query($sql);

    if ($result->num_rows > 0) {
    ?>
        <div class="contaniner-alumnos">
            <h2>Lista</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre del Medicamento</a></th>
                    <th>Operaciones</th>

                </tr>
                <?php while ($row = $result->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo $row["id"]; ?></td>
                        <td><?php echo $row["medicine_name"]; ?></td>

                        <td class="operaciones">
                            <a class="btn btn-danger" href="javascript:editarAlumno(<?php echo $row['id']; ?>)">Editar</a>
                            <!--<a href="form_update_alumnos.php?id=<?php echo $row['id']; ?>"><button class="button1">Editar</button></a>-->
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
</body>

</html>