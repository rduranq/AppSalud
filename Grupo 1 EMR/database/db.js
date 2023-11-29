const sqlite3 = require('sqlite3').verbose();
const dbPath = "./database/emrdb.db";
const Strings = require('../utils/strings.js');
const str = new Strings();

class Database {

    constructor() {
        this.usuarios = [];
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error al abrir la base de datos Seguridad:', err.message);
            } else {
                console.log(str.getStr('Conexion exitosa a la BD'));
                //this.crearTablas();
                this.getAllUsuarios();
            }
        });
    }

    close() {
        this.db.close((err) => {
            if (err) {
                console.error('Error al cerrar la base de datos:', err.message);
            } else {
                console.log('Conexiónn de la base de datos Seguridad cerrada');
            }
        });
    }

    crearTablas() {
        const queryUser = 'CREATE TABLE IF NOT EXISTS usuario(id integer NOT NULL PRIMARY KEY AUTOINCREMENT,nombre text NOT NULL,cuenta text NOT NULL,clave text NOT NULL,email text,rol text,estampa timestamp)';
        const queryPerfil = 'CREATE TABLE IF NOT EXISTS  perfil(id integer NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,nombre text NOT NULL,crud text NOT NULL)';
        const queryAcceso = 'CREATE TABLE IF NOT EXISTS acceso(id integer NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,fecha timestamp,usuario integer,accion text)';
        this.db.run(queryUser);
        this.db.run(queryPerfil);
        this.db.run(queryAcceso);
    }

    //callback
    // Función para recuperar todos los registros de la tabla "usuario"
    getAllUsuarios(callback) {
        const query = 'SELECT * FROM usuarios';
        this.db.all(query, [], (err, rows) => {
            if (typeof callback === 'function') {
                callback(err, rows);
            }
        });
    }

    // Función para agregar un nuevo usuario
    addUsuario(usuario) {
        const query = 'INSERT INTO usuario (nombre, cuenta, clave, email, rol, estampa) VALUES (?, ?, ?, ?, ? ,?)';
        const params = [usuario.nombre, usuario.cuenta, usuario.clave, usuario.email, usuario.rol, usuario.estampa];
        this.db.serialize(() => {
            this.db.run(query, params, function (err) {
                if (err) console.log(err.message);
                else console.log("Nuevo usuario creado con exito");
            });
        });
    }

    // Función para actualizar un usuario existente
    updateUsuario(id, nuevoDatosUsuario, callback) {
        const query = 'UPDATE usuarios SET nombre_mostrar = ?, nombre_usuario = ?, clave = ?, foto_perfil = ? WHERE id = ?';
        const params = [nuevoDatosUsuario.nombre_mostrar, nuevoDatosUsuario.nombre_usuario, nuevoDatosUsuario.clave, nuevoDatosUsuario.foto_perfil, id];
        this.db.run(query, params, function (err) {
            if (err) {
                console.error("Error al actualizar usuario: " + err.message);
                return callback(err);
            }
            console.log("Usuario actualizado con éxito");
            callback(null);
        });
    }

    // Función para eliminar un usuario por su ID
    deleteUsuario(id) {
        const query = 'DELETE FROM usuarios WHERE id = ?';
        this.db.run(query, id, function (err) {
            if (err) console.log(err.message);
            else console.log("Usuario eliminado con exito");
        });
    }

    getUsuarioPorId(id, callback) {
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        this.db.get(query, [id], (err, row) => {
            if (typeof callback === 'function') {
                callback(err, row);
            }
        });
    }

    verificarDatos(nombre_usuario, clave, callback) {
        console.log(`Verificando usuario: ${nombre_usuario} con clave: ${clave}`);
        const query = 'SELECT * FROM usuarios WHERE nombre_usuario = ? AND clave = ?';
        this.db.get(query, [nombre_usuario, clave], (err, usuario) => {
            console.log(usuario);
            if (err) {
                console.error('Error en la consulta SQL', err);
                return callback(err);
            }
            if (usuario) {
                console.log('Usuario encontrado:', usuario);
                return callback(null, usuario);
            } else {
                console.log('Credenciales incorrectas');
                return callback(null, null);
            }
        });
    }

    getHistorialMedicacion(callback) {
        const query = 'SELECT * FROM historial_medicacion_pacientes ';
        this.db.all(query, [], (err, rows) => {
            if (typeof callback === 'function') {
                callback(err, rows);
            }
        });
    }

    getHistorialCompleto(callback) {
        const query = `
        SELECT 
        hmp.id, 
        vp.fecha_visita, 
        vp.fecha_proxima_visita,
        vp.presion_arterial,
        vp.enfermedad,
        p.nombre_paciente,
        hmp.id_visita_paciente, 
        hmp.id_detalle_medicamento, 
        hmp.cantidad, 
        hmp.dosis,
        m.nombre_medicamento
    FROM 
        historial_medicacion_pacientes hmp
    JOIN 
        visitas_pacientes vp ON hmp.id_visita_paciente = vp.id
    JOIN
        pacientes p ON vp.id_paciente = p.id
    JOIN
        detalles_medicamentos dm ON hmp.id_detalle_medicamento = dm.id
    JOIN
        medicamentos m ON dm.id_medicamento = m.id;
        `;
        this.db.all(query, [], (err, rows) => {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }

    getPacientes(callback) {
        const query = 'SELECT * FROM pacientes';
        this.db.all(query, [], (err, rows) => {
            callback(err, rows);
        });
    }

    getMedicamentos(callback) {
        const query = 'SELECT * FROM medicamentos';
        this.db.all(query, [], (err, rows) => {
            callback(err, rows);
        });
    }

    getDetallesMedicamentos(callback) {
        const query = `
            SELECT dm.id, dm.id_medicamento, dm.empaque, m.nombre_medicamento
            FROM detalles_medicamentos dm
            JOIN medicamentos m ON dm.id_medicamento = m.id
        `;
        this.db.all(query, [], (err, rows) => {
            callback(err, rows);
        });
    }



    //PACIENTE

    getPacientePorId(id, callback) {
        const query = 'SELECT * FROM pacientes WHERE id = ?';
        this.db.get(query, [id], (err, row) => {
            if (typeof callback === 'function') {
                callback(err, row);
            }
        });
    }

    addPaciente(paciente, callback) {
        const query = 'INSERT INTO pacientes (nombre_paciente, direccion, ci, fecha_nacimiento, numero_telefono, genero) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [paciente.nombre_paciente, paciente.direccion, paciente.ci, paciente.fecha_nacimiento, paciente.numero_telefono, paciente.genero];
        this.db.run(query, params, function (err) {
            if (err) {
                console.error("Error al agregar paciente: " + err.message);
                return callback(err);
            }
            console.log("Paciente agregado con éxito");
            callback(null);
        });
    }

    // Función para actualizar un paciente
    actualizarPaciente(id, datosPaciente, callback) {
        const query = 'UPDATE pacientes SET nombre_paciente = ?, direccion = ?, ci = ?, fecha_nacimiento = ?, numero_telefono = ?, genero = ? WHERE id = ?';
        const params = [datosPaciente.nombre_paciente, datosPaciente.direccion, datosPaciente.ci, datosPaciente.fecha_nacimiento, datosPaciente.numero_telefono, datosPaciente.genero, id];

        this.db.run(query, params, (err) => {
            if (err) {
                console.error("Error al actualizar paciente: " + err.message);
                return callback(err);
            }
            console.log("Paciente actualizado con éxito");
            callback(null);
        });
    }

    // Función para eliminar un paciente
    eliminarPaciente(id, callback) {
        const query = 'DELETE FROM pacientes WHERE id = ?';
        this.db.run(query, [id], (err) => {
            if (err) {
                console.error("Error al eliminar paciente: " + err.message);
                return callback(err);
            }
            console.log("Paciente eliminado con éxito");
            callback(null);
        });
    }
    //

    getVisita(callback) {
        const query = 'SELECT * FROM visitas_pacientes';
        this.db.all(query, [], (err, rows) => {
            if (typeof callback === 'function') {
                callback(err, rows);
            }
        });
    }

    obtenerPacientes(callback) {
        const query = 'SELECT * FROM pacientes';
        this.db.all(query, [], (err, rows) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        });
    }


    //agregar visita
    agregarVisita(datosVisita, callback) {
        const query = 'INSERT INTO visitas_pacientes (fecha_visita, fecha_proxima_visita, presion_arterial, peso, enfermedad, id_paciente) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [datosVisita.fecha_visita, datosVisita.fecha_proxima_visita, datosVisita.presion_arterial, datosVisita.peso, datosVisita.enfermedad, datosVisita.id_paciente];

        this.db.run(query, params, (err) => {
            callback(err);
        });
    }




    //Historial médico:

    crearHistorialMedico(historial, callback) {
        const query = 'INSERT INTO historial_medicacion_pacientes (id_visita_paciente, id_detalle_medicamento, cantidad, dosis) VALUES (?, ?, ?, ?)';
        const params = [historial.id_visita_paciente, historial.id_detalle_medicamento, historial.cantidad, historial.dosis];
        this.db.run(query, params, function (err) {
            if (err) {
                console.error("Error al agregar historial médico: " + err.message);
                return callback(err);
            }
            console.log("Historial médico agregado con éxito");
            callback(null);
        });
    }

    // Funciones para rellenar los datos en el form:
    obtenerVisitasPacientes(callback) {
        const query = `SELECT vp.id, vp.fecha_visita, p.nombre_paciente
        FROM visitas_pacientes AS vp
        JOIN pacientes AS p ON vp.id_paciente = p.id;        
        `;
        this.db.all(query, [], (err, rows) => {
            if (err) {
                console.error("Error al obtener las visitas de pacientes: " + err.message);
                return callback(err, null);
            }
            console.log("Visitas de pacientes obtenidas con éxito");
            callback(null, rows);
        });
    }

    // Función para obtener todos los detalles de medicamentos
    obtenerDetallesMedicamentos(callback) {
        const query = `SELECT dm.id, m.nombre_medicamento
        FROM detalles_medicamentos AS dm
        JOIN medicamentos AS m ON dm.id_medicamento = m.id;
        `;
        this.db.all(query, [], (err, rows) => {
            if (err) {
                console.error("Error al obtener los detalles de medicamentos: " + err.message);
                return callback(err, null);
            }
            console.log("Detalles de medicamentos obtenidos con éxito");
            callback(null, rows);
        });
    }

    obtenerDetallesVisita(id, callback) {
        const query = `SELECT * FROM visitas_pacientes WHERE id = ?`;
        this.db.get(query, [id], (err, fila) => {
            if (err) {
                console.error("Error al obtener los detalles de la visita: " + err.message);
                return callback(err, null);
            }
            console.log("Detalles de la visita obtenidos con éxito");
            callback(null, fila);
        });
    }

    getHistorialPorId(id, callback) {
        const query = 'SELECT * FROM historial_medicacion_pacientes WHERE id = ?';
        this.db.get(query, [id], (err, row) => {
            if (err) {
                console.error("Error al obtener historial: " + err.message);
                return callback(err, null);
            }
            console.log("Historial obtenido con éxito");
            callback(null, row);
        });
    }
    actualizarHistorialMedico(id, datos, callback) {
        const query = `UPDATE historial_medicacion_pacientes SET
        id_visita_paciente = ?,
        id_detalle_medicamento = ?,
        cantidad = ?,
        dosis = ?
        WHERE id = ?`;

        const params = [datos.id_visita_paciente, datos.id_detalle_medicamento, datos.cantidad, datos.dosis, id];

        this.db.run(query, params, function (err) {
            if (err) {
                console.error("Error al actualizar el historial médico: " + err.message);
                callback(err);
            } else {
                console.log("Historial médico actualizado con éxito.");
                callback(null);
            }
        });
    }

    deleteHistorial(id, callback) {
        const query = 'DELETE FROM historial_medicacion_pacientes WHERE id = ?';
        this.db.run(query, [id], function (err) {
            if (err) {
                console.error("Error al eliminar historial: " + err.message);
                return callback(err);
            }
            console.log("Historial eliminado con éxito");
            callback(null);
        });
    }




    //Funciones de Búsqueda
    buscarHistorialesPorNombre(nombre, callback) {
        const query = `
            SELECT 
                hmp.id, 
                vp.fecha_visita, 
                vp.fecha_proxima_visita,
                vp.presion_arterial,
                vp.enfermedad,
                p.nombre_paciente,
                hmp.id_visita_paciente, 
                hmp.id_detalle_medicamento, 
                hmp.cantidad, 
                hmp.dosis,
                m.nombre_medicamento
            FROM 
                historial_medicacion_pacientes hmp
            JOIN 
                visitas_pacientes vp ON hmp.id_visita_paciente = vp.id
            JOIN
                pacientes p ON vp.id_paciente = p.id
            JOIN
                detalles_medicamentos dm ON hmp.id_detalle_medicamento = dm.id
            JOIN
                medicamentos m ON dm.id_medicamento = m.id
            WHERE 
                p.nombre_paciente LIKE ?;
        `;
        this.db.all(query, [`${nombre}%`], (err, rows) => {
            if (err) {
                console.error("Error al buscar historiales: " + err.message);
                return callback(err, null);
            }
            callback(null, rows);
        });
    }
    
    


    //

}

module.exports = Database;