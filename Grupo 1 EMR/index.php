<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login - Clinic's Patient Management System in PHP</title>
  <link rel="stylesheet" href="./css/style1.css">

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="./css/adminlte.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


  <style>
    .login-box {
      width: 430px;
    }

    #system-logo {
      width: 5em !important;
      height: 5em !important;
      object-fit: cover;
      object-position: center center;
    }
  </style>
</head>

<body class="hold-transition login-page dark-mode">
  <div class="login-box">
    <div class="login-logo mb-4">
      <img src="./imágenes/logo.jpg" class="img-thumbnail p-0 border rounded-circle" id="system-logo">
      <div class="text-center h2 mb-0">Sistema de Gestión de Registros Médicos Electrónicos (EMR)</div>
    </div>
    <!-- /.login-logo -->
    <div class="card card-outline card-primary rounded-0 shadow">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Ingresa tus credenciales</p>
        <form action="./config/autenticar.php" method="post" id="loginForm">
          <div class="input-group mb-3">
            <input type="text" class="form-control form-control-lg rounded-0 autofocus" placeholder="Nombre de Usuario" id="user_name" name="user_name">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password" id="contraseña" name="contraseña">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button name="login" type="submit" class="btn btn-primary rounded-0 btn-block">Iniciar Sesión</button>
            </div>
          </div>
        </form>
        <div id="errorDiv" style="color: red;"></div>
      </div>
    </div>
  </div>


  <!-- jQuery -->
  <script>
    $(document).ready(function() {
      $("#loginForm").submit(function(e) {
        e.preventDefault();

        $.ajax({
          type: "POST",
          url: "config/autenticar.php",
          data: $(this).serialize(),
          success: function(response) {
            if (response == "success") {
              window.location.href = "main.php";
            } else {
              $("#errorDiv").text("Usuario o contraseña incorrectos");
            }
          }
        });
      });
    });
  </script>

</body>

</html>