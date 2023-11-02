class Usuario {
    // Constructor para inicializar un objeto Usuario
    constructor(id, nombre, apellido, edad, email, sexo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = email;
        this.sexo = sexo;
    }

    // // Método para obtener los detalles de un usuario
    // getUsuario() {
    //     return `ID: ${this.id}\nNombre: ${this.nombre}\napellido: ${this.apellido}\nEmail: ${this.email}\nsexo: ${this.sexo}`;
    // }

    // // Método para verificar si la clave proporcionada coincide con la clave del usuario
    // verificarClave(clave) {
    //     return this.clave === clave;
    // }

    // // Método para obtener la última fecha de acceso del usuario
    // ultimoAcceso() {
    //     return `Último acceso: ${this.estampa}`;
    // }
}

