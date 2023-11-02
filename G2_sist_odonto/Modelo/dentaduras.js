class Dentadura {

    constructor(id, nombre, cuenta, foto, ...dientes) {
        this.id = id;
        this.nombre = nombre;
        this.cuenta =  cuenta;
        this.dientes = dientes;
        this.foto = foto;
    }

    
    obtenerNombresDientes() {
        return this.dientes;
    }

    obtenerFotoDentadura() {
        return this.foto;
    }
}

