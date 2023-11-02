class ControlUsuario {

    constructor() {
        this.lista = [];
    }

    adicionar(usuario) {
        let maxId = 0;
        this.lista.forEach(function (usuario) {
            if (usuario.id > maxId) maxId = usuario.id;
        });
        usuario.id = maxId + 1;
        this.lista.push(usuario);
    }

    eliminar(id) {
        let user;
        for (let i = 0; i < this.lista.length; i++) {
            user = this.lista[i];
            if (user.id == id) this.lista.splice(i, 1);
        }
        return this.lista;
    }

    modificar(id, usuarioAct) {
        let user;
        for (let i = 0; i < this.lista.length; i++) {
            user = lista[i];
            if (user.id == id) lista[i] = usuarioAct;
        }
        return this.lista;
    }

    accesoPermitido(cuenta, clave) {
        let usuario;
        let user = null;
        for (let i = 0; i < this.lista.length; i++) {
            usuario = this.lista[i];
            if (usuario.cuenta == cuenta && usuario.claveValida(clave))
            user = usuario;
        }
        return user;
    }

    obtenerListaUsuarios() {
        let usuarios = [
            ["1", "Ramiro ", "rduran ", "abc", "rduran@gmail.com", "admin"],
            ["2", "Alberto ", "aduran ", "1234", "aquirogan@gmail.com", "medico"],
            ["3", "Maria", "mleascno ", "0123", "marian@gmail.com", "operador"],
            ["4", "Juan", "aldayus ", "12563", "juan@gmail.com", "admin"],
            ["5", "Arminda", "arminda ", "123223", "arminda@gmail.com", "medico"],
        ];

        for (let i = 0; i < usuarios.length; i++) {
            let user = new Usuario(
            usuarios[i][0],
            usuarios[i][1],
            usuarios[i][2],
            usuarios[i][3],
            usuarios[i][4],
            usuarios[i][5]
        );
        this.adicionar(user);
        }
        return this.lista;
    }

}
