function cargarContenido(abrir) {
    var contenedor = document.getElementById('dashboard');

    const ajax = new XMLHttpRequest();

    ajax.open('GET', abrir, true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            contenedor.innerHTML = ajax.responseText;
            console.log(ajax.responseText)
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf8");

    ajax.send();
}

function registrarUsuario() {
    var formulario = document.getElementById('formUsuario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open('POST', './config/crearUsuario.php', true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            alert(ajax.responseText); // Puedes modificar esta parte para manejar la respuesta como desees
            cargarContenido('usuariosRead.php')
        }
    }

    ajax.send(datos);
}

function registrarPaciente() {
    var formulario = document.getElementById('formPaciente');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open('POST', './config/crearPaciente.php', true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            alert(ajax.responseText); // Puedes modificar esta parte para manejar la respuesta como desees
            cargarContenido('read.php');
        }
    }

    ajax.send(datos);
}
function registrarHistorialMedico() {
    var formulario = document.getElementById('formHistorial');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open('POST', './config/crearHistorialMedico.php', true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            alert(ajax.responseText); 
            cargarContenido('read.php') 
    }

    ajax.send(datos);
}
}

