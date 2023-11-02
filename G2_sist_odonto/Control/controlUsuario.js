class ControlUsuario {
    constructor() {
        this.usuarios = [];
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    eliminar(nombre) {
        let id = -1;
        this.usuarios.forEach((user, index) => {
            if (user.nombre === nombre) {
                id = index;
            }
        });

        if (id !== -1) {
            this.usuarios.splice(id, 1);
        }
    }

    editarUsuario(id, nuevoUsuario) {
        const usuarioIndex = this.usuarios.findIndex((user) => user.id === id);

        if (usuarioIndex != -1) {
            this.usuarios[usuarioIndex] = nuevoUsuario;
        }
    }

    mostrarUsuarios(aux) {
        let html = "";
        const listaUsuarios = document.getElementById("lista-usuarios");
        listaUsuarios.innerHTML = "";
        controlUsuarios.usuarios.forEach((usuario) => {
            const fila = listaUsuarios.insertRow();
            const celdaperfil = fila.insertCell(0);
            const celdaid = fila.insertCell(1);
            const celdaNombre = fila.insertCell(2);
            const celdaapellido = fila.insertCell(3);
            const celdaedad = fila.insertCell(4);
            const celdaCorreo = fila.insertCell(5);
            const celdasexo = fila.insertCell(6);

            celdaperfil.innerHTML = '<img type="button" src="/Contenidos/perfil_doc.png" width="60px" alt="" >  ';
            celdaid.innerHTML = usuario.id;
            celdaNombre.innerHTML = usuario.nombre;
            celdaapellido.innerHTML = usuario.apellido;
            celdaedad.innerHTML = usuario.edad;
            celdaCorreo.textContent = usuario.correo;
            celdasexo.innerHTML = usuario.sexo;

            if (aux) {
                const botonContainer = document.createElement("div");
                botonContainer.className = "button-container";

                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.className = "eliminar-button";
                botonEliminar.addEventListener("click", () => eliminarUsuario(usuario.nombre));
                botonContainer.appendChild(botonEliminar);

                const botonEditar = document.createElement("button");
                botonEditar.textContent = "Editar";
                botonEditar.className = "editar-button";
                botonEditar.addEventListener("click", () => editarUsuario(usuario.id));
                botonContainer.appendChild(botonEditar);

                const celdaBotones = fila.insertCell(7);
                celdaBotones.appendChild(botonContainer);

            }

        });

    }


}



function editarUsuario(id) {
    const usuarioAEditar = controlUsuarios.usuarios.find((usuario) => usuario.id === id);
    
    document.getElementById("editarUser").style.display = "block";
    if (usuarioAEditar) {
        let html = `
      <form> 
        <label for="nuevoid"> Nuevo id:</label>
        <input type="text" id="nuevoid" name="nuevoid" value="${usuarioAEditar.id}"/>
        <label for="nuevoNombre">Nuevo Nombre:</label>
        <input type="text" id="nuevoNombre" name="nuevoNombre" value="${usuarioAEditar.nombre}" />
        <label for="nuevoapellido">Nuevo apellido:</label>
        <input type="text" id="nuevoapellido" name="nuevoapellido" value="${usuarioAEditar.apellido}" />
        <label for="nuevaedad">Nueva edad:</label>
        <input type="text" id="nuevaedad" name="nuevaedad" value="${usuarioAEditar.edad}" />
        <label for="nuevoCorreo">Nuevo Correo:</label>
        <input type="email" id="nuevoCorreo" name="nuevoCorreo" value="${usuarioAEditar.correo}" />
        <label for="nuevosexo">Nuevo sexo:</label>
        <input type="text" id="nuevosexo" name="nuevosexo" value="${usuarioAEditar.sexo}" />

        <input type="button" value="Guardar" class="edit-button" onclick="guardarEdicion('${id}');" />
      </form>`;
        document.getElementById("editarUser").innerHTML = html;
    }

}

function guardarEdicion(id) {
    const nuevoid = document.getElementById("nuevoid").value;
    const nuevoNombre = document.getElementById("nuevoNombre").value;
    const nuevoapellido = document.getElementById("nuevoapellido").value;
    const nuevaedad = document.getElementById("nuevaedad").value;
    const nuevoCorreo = document.getElementById("nuevoCorreo").value;
    const nuevosexo = document.getElementById("nuevosexo").value;
    const nuevoUsuario = new Usuario(nuevoid, nuevoNombre, nuevoapellido, nuevaedad, nuevoCorreo, nuevosexo);
    controlUsuarios.editarUsuario(id, nuevoUsuario);
    document.getElementById("editarUser").innerHTML = "";
    controlUsuarios.mostrarUsuarios(true);
}


function eliminarUsuario(nombre) {
    controlUsuarios.eliminar(nombre);
    controlUsuarios.mostrarUsuarios(true);
}
//armando
function añadirUsuario() {
    const id=document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;
    const sexo = document.getElementById("sexo").value;
    const nuevoUsuario = new Usuario(id,nombre, apellido, edad, correo,sexo);
    controlUsuarios.agregarUsuario(nuevoUsuario);
    document.getElementById("id").value="";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("sexo").value="";
controlUsuarios.mostrarUsuarios(true);
document.getElementById("insertarUser").style.display = "none";
  }
function insetarUsuario(){ document.getElementById("insertarUser").style.display = "block";
    let html=`
    <form>
    <label for="id"> id:</label>
    <input type="text" id="id" name="id" />
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" />
    <label for="apellido">apellido:</label>
    <input type="text" id="apellido" name="apellido" />
    <label for="edad">edad:</label>
    <input type="edad" id="edad" name="edad" />
    <label for="correo">Correo:</label>
    <input type="email" id="correo" name="correo" />
    <label for="sexo">sexo:</label>
    <input type="text" id="sexo" name="sexo"/>
    
    <input
        type="button"
        value="registrar"
        class="registro-button"
        onclick="añadirUsuario();"
      />
  </form>`

    document.getElementById("insertarUser").innerHTML=html;
  }


function buscarUsuario() {
    const textoBusqueda = document.getElementById("buscar-usuario").value.toLowerCase();
    const listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = "";
    const usuariosEncontrados = controlUsuarios.usuarios.filter((usuario) => {
        return (
            usuario.nombre.toLowerCase().includes(textoBusqueda) ||
            usuario.apellido.toLowerCase().includes(textoBusqueda)
        );
    });
    if (usuariosEncontrados.length === 0) {
        alert("No se encontraron usuarios");
        return;
    }
    usuariosEncontrados.forEach((usuario) => {
        const fila = listaUsuarios.insertRow();
        const celdaperfil = fila.insertCell(0);
        const celdaid = fila.insertCell(1);
        const celdaNombre = fila.insertCell(2);
        const celdaapellido = fila.insertCell(3);
        const celdaedad = fila.insertCell(4);
        const celdaCorreo = fila.insertCell(5);
        const celdasexo = fila.insertCell(6);

        celdaperfil.innerHTML = " ";
        celdaid.innerHTML = usuario.id;
        celdaNombre.innerHTML = usuario.nombre;
        celdaapellido.innerHTML = usuario.apellido;
        celdaedad.innerHTML = usuario.edad;
        celdaCorreo.innerHTML = usuario.correo;
        celdasexo.innerHTML = usuario.sexo;


        const botonContainer = document.createElement("div");
        botonContainer.className = "button-container";

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "eliminar-button";
        botonEliminar.addEventListener("click", () => eliminarUsuario(usuario.nombre));
        botonContainer.appendChild(botonEliminar);

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.className = "editar-button";
        botonEditar.addEventListener("click", () => editarUsuario(usuario.id));
        botonContainer.appendChild(botonEditar);

        const celdaBotones = fila.insertCell(7);
        celdaBotones.appendChild(botonContainer);
    });
     document.getElementById("buscar-usuario").value = "";
}
//armando




const usuario1 = new Usuario("1", "Ramiro", "rduran", "30", "rduran@gmail.com", "M");
const usuario2 = new Usuario("2", "Alberto", "aduran", "12", "aquirogan@gmail.com", "M");
const usuario3 = new Usuario("3", "María", "mleascno", "23", "marian@gmail.com ", "F");
const usuario4 = new Usuario("4", "Juan", "aldayus", "13", "juan@gmail.com", "M");
const usuario5 = new Usuario("5", "Arminda", "arminda", "3", "arminda@gmail.com", "F");

const controlUsuarios = new ControlUsuario();
controlUsuarios.agregarUsuario(usuario1);
controlUsuarios.agregarUsuario(usuario2);
controlUsuarios.agregarUsuario(usuario3);
controlUsuarios.agregarUsuario(usuario4);
controlUsuarios.agregarUsuario(usuario5);

