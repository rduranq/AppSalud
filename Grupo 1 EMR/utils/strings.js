class Strings {
    constructor() {
        this.mensajes = {
            'Conexion exitosa a la BD': 'Conexión exitosa a la base de datos.',
            'Error al abrir la base de datos': 'Error al abrir la base de datos.',
        };
    }

    getStr(key) {
        return this.mensajes[key];
        //return this.mensajes[key] || 'Mensaje no definido.';
    }
}

module.exports = Strings;
