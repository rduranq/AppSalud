//* Clase Usuario
class Usuario {
  constructor(id, nombre, cuenta, clave, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.cuenta = cuenta;
    this.clave = clave;
    this.email = email;
    this.rol = rol;
  }

  toString() {
    return this.nombre;
  }

  getRol() {
    return this.rol;
  }
}

//Todo: Contol Usuario
class ControlUsuario {
  constructor() {
    this.listaUsuario = [];
  }

  adicionar_Usuario(usuario) {
    this.listaUsuario.push(usuario);
  }

  ver_Usuarios() {
    console.log(this.listaUsuario);
  }

  buscar_usuario(usuario){
    let usuarioEncontrado = this.listaUsuario.find(user => user.email === usuario.email && user.clave === usuario.clave);
    return usuarioEncontrado;
  }

  obtenerListaUsuarios() {
    return this.listaUsuario;
  }

  editar_Usuario(id, nuevoNombre, nuevaCuenta, nuevaClave, nuevoEmail, nuevoRol) {
    const usuarioAModificar = this.listaUsuario.find(
      (usuario) => usuario.id === id
    );

    if (usuarioAModificar) {
      usuarioAModificar.nombre = nuevoNombre;
      usuarioAModificar.cuenta = nuevaCuenta;
      usuarioAModificar.clave = nuevaClave;
      usuarioAModificar.email = nuevoEmail;
      usuarioAModificar.rol = nuevoRol;
    } else {
      console.log(`No se encontró un usuario con el ID ${id}`);
    }
  }

  verificar_Usuario(usuario) {
    let usuarioValido = false;
    for (var i = 0; i < this.listaUsuario.length; i++) {
      if (
        this.listaUsuario[i].email == usuario.email &&
        this.listaUsuario[i].clave == usuario.clave
      ) {
        usuarioValido = true;
        break;
      }
    }
    return usuarioValido;
  }

  eliminar_Usuario(id) {
    for (var i = 0; i < this.listaUsuario.length; i++) {
      if (id == this.listaUsuario[i].id) {
        this.listaUsuario.splice(i, 1);
      }
    }

    // const indiceUsuario = this.listaUsuario.findIndex(
    //   (usuario) => usuario.id === id
    // );
    // if (indiceUsuario !== -1) {
    //   this.listaUsuario.splice(indiceUsuario, 1);
    // } else {
    //   console.log(`No se encontró un usuario con el ID ${id}`);
    // }
  }
}



var controlUsuario = new ControlUsuario();

var Iniciar_secion = () => {
  var email = document.getElementById("email").value;
  var clave = document.getElementById("clave").value;

  let usuario = {
    email: email,
    clave: clave,
  };

  let usuarioValido = controlUsuario.verificar_Usuario(usuario);
  var listaUsuario = controlUsuario.obtenerListaUsuarios();

  var usuario_ = listaUsuario.find(user => user.email == email || user.clave == clave);
  
  if (usuarioValido) {
    alert("Bienvenido " + usuario_.nombre);
    open("usuarios.html");
  } else {
    alert("Usuario inválido");
  }
};

var Listar_Usuarios = function () {
  let usuarios = [
    [0, "Juan", "Perez", "abc", "juan@gmail.com", "Admin"],
    [1, "Lucas", "Mendez", "def", "lucas@gmail.com", "Usuario"],
    [2, "Elena", "Paredes", "ghi", "elena@gmail.com", "Usuario"],
    [3, "Margarita", "Loaiza", "jkl", "margarita@gmail.com", "Admin"],
    [4, "Franz Reinaldo", "Gonzales", "frgs", "gonzalesfranz2019@gmail.com", "Admin"],
    [5, "Pedro", "Perez", "polo", "pedro@gmail.com", "Usuario"],
  ];

  //  var pos = 0;
  for (let i = 0; i < usuarios.length; i++) {
    let user = new Usuario(
      usuarios[i][0],
      usuarios[i][1],
      usuarios[i][2],
      usuarios[i][3],
      usuarios[i][4],
      usuarios[i][5]
    );

    // listaUsuarios.push(user);
    controlUsuario.adicionar_Usuario(user);
  }
};

Listar_Usuarios();

