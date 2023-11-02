<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información</title>
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

        .img-container img {
            max-width: 150px;
            max-height: 100px;
            transition: transform 0.3s;
        }

        .img-container:hover img {
            transform: scale(1.1);
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
    </style>
</head>

<body class="body">

    <h2>Crear Usuario</h2>
    <div class="contaniner">
        <form id="formUsuario" enctype="multipart/form-data">
            <h3>Registrar Usuario</h3>

            <div class="datos">
                <label for="nombre"> Nombre: </label>
                <input id="nombre" type="text" name="displayName" placeholder="Nombre">
            </div>
            <div class="datos">
                <label for="nCuenta">Nombre de la Cuenta: </label>
                <input id="nCuenta" type="text" name="name" placeholder="Nombre">
            </div>
            <div class="datos">
                <label for="pw">Contraseña: </label>
                <input id="pw" type="text" name="contraseña" placeholder="Contraseña">
            </div>
            <div class="datos">
                <label for="fotografia">Fotografía</label>
                <input type="file" name="fotografia" id="fotografia">
            </div>
        </form>
        <button id="registrar" type="submit"><a class="page-link" href="javascript:registrarUsuario()">Registrar</a></button>
    </div>
    <?php
    include('conexion.php');

    $sql = "SELECT id, display_name, user_name, password,profile_picture FROM users";

    $result = $connect->query($sql);

    if ($result->num_rows > 0) {
    ?>
        <div class="contaniner-alumnos">
            <h2>Lista de Usuarios</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Nombre de Usuario</th>
                    <th>Contraseña</th>
                    <th>Fotografía</th>
                    <th>Operaciones</th>
                </tr>
                <?php while ($row = $result->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo $row["id"]; ?></td>
                        <td><?php echo $row["display_name"]; ?></td>
                        <td><?php echo $row["user_name"]; ?></td>
                        <td><?php echo $row["password"]; ?></td>
                        <td class="img-container">
                            <img src="./imágenes/<?php echo $row["profile_picture"]; ?>" alt="">
                        </td>
                        <td class="operaciones">
                            <a id="btnE" class="page-link"" href=" javascript:editarAlumno(<?php echo $row['id']; ?>)">Editar</a>
                            <a id="btnD" class="page-link"" href=" javascript:deleteAlumno(<?php echo $row['id']; ?>)">Eliminar</a>
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