<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Control EMR</title>
    <link rel="stylesheet" href="./css/style1.css">
</head>

<body>
    <div class="contenedor">
        <div class="header">
            <div class="logo">
                <div class="img">
                    <p> Clínica ERM </p>
                </div>
            </div>
            <div class="nombre">Sistema de Gestión de Pacientes de la Clínica</div>
        </div>
        <div class="contenedor1">
            <div class="aside">
                <div class="perfil">Administrador</div>
                <div class="menu">
                    <div class="item"> <a href="javascript:cargarContenido('./config/read.php')"> Historial de Pacientes </a></div>
                    <div class="item"><a href="javascript:cargarContenido('./config/AddPaciente.php')"> Pacientes </a></div>
                    <div class="item"><a href="javascript:cargarContenido('./config/readmedicamentos.php')"> Medicinas </a></div>
                    <div class="item"><a href="javascript:cargarContenido('./config/medicamentosDetalles.php')"> Medicinas detalles </a></div>
                    <div class="item"> <a href="javascript:cargarContenido('./config/UsuariosRead.php')"> Usuarios </a></div>
                    <div class="item"><a href="index.php"> Logout </a></div>
                </div>
            </div>
            <div class="main">
                <div id="dashboard" class="dashboard">
                    <!-- Ajax  -->
                </div>
                <div class="footer">
                    Copyright © 2023 Sistema de Gestión de Pacientes de la Clínica - CPMS Version 2.0
                </div>
            </div>
        </div>
    </div>
    <script src="./ajax/ajax.js"></script>
</body>

</html>