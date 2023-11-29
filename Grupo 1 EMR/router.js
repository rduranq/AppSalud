const express = require("express");
const router = express.Router();

const Database = require('./database/db');
const db = new Database();

router.get('/', (req, res) => {
    res.render("login");
});

router.post('/login', (req, res) => {
    const nombre_usuario = req.body.usuario;
    const clave = req.body.pw;

    db.verificarDatos(nombre_usuario, clave, (err, user) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error durante el inicio de sesión");
        } else if (user) {
            res.redirect('/index');
        } else {
            res.render("login", { error: "Usuario o contraseña incorrectos" });
        }
    });
});

router.get('/historial_paciente', (req, res) => {
    db.getHistorialMedicacion((err, historial) => {
        if (err) {
            res.status(500).send("Error al obtener el historial de paciente");
        } else {
            res.render("historial_paciente", { listaHistorial: historial });
        }
    });
});


router.get('/index', (req, res) => {
    res.render("index");
});

router.get('/usuarios', (req, res) => {
    db.getAllUsuarios((err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al recuperar los usuarios");
        } else {
            res.render("listaUsuarios", { lista: rows });
        }
    });
});

router.get('/crearU', (req, res) => {
    res.render("crearUsuario");
});

router.use(express.urlencoded({ extended: true }));

router.post('/crearUsuario', (req, res) => {
    // Recoge los datos del formulario desde req.body
    const nuevoUsuario = {
        nombre: req.body.nombre,
        cuenta: req.body.cuenta,
        clave: req.body.clave,
        email: req.body.email,
        rol: req.body.rol,
        estampa: req.body.estampa
    };

    db.addUsuario(nuevoUsuario, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            res.redirect('/');
        }
    });
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    db.getUsuarioPorId(id, (err, usuario) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al recuperar el usuario");
        } else {
            res.render("edit_usuario", { usuario: usuario });
        }
    });
});

router.post('/editar/:id', (req, res) => {
    const id = req.params.id; // Captura el ID del usuario desde la URL

    // Primero, obtén el usuario actual de la base de datos para tener acceso a su foto de perfil actual
    db.getUsuarioPorId(id, (err, usuarioActual) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al recuperar el usuario");
        }

        // Luego, construye el objeto de usuario con la nueva información
        console.log(req.body.nombre_mostrar, req.body.nombre_usuario, req.body.clave)
        const nuevoDatosUsuario = {
            nombre_mostrar: req.body.nombre_mostrar,
            nombre_usuario: req.body.nombre_usuario,
            clave: req.body.clave,
            // Usa la imagen actual si no se cargó una nueva
            foto_perfil: req.file ? req.file.filename : usuarioActual.foto_perfil
        };

        // Ahora llama a la función de actualización con los nuevos datos
        db.updateUsuario(id, nuevoDatosUsuario, (error) => {
            if (error) {
                console.error(error.message);
                // Puedes optar por mostrar un mensaje de error en la vista de edición
                return res.status(500).render('edit_usuario', { error: "Error al actualizar el usuario", usuario: nuevoDatosUsuario });
            }
            res.redirect('/index');
        });
    });
});


router.post('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    console.log('Eliminado');
    db.deleteUsuario(id, (err) => {
        //res.redirect('/crear');
    });
});


router.get('/historial-completo', (req, res) => {
    db.getHistorialCompleto((err, historial) => {
        if (err) {
            res.status(500).send("Error al obtener el historial completo de medicación");
        } else {
            res.render("historial_paciente", { listaHistorial: historial });
        }
    });
})

router.get('/listar-pacientes', (req, res) => {
    db.getPacientes((err, pacientes) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al obtener los pacientes");
        } else {
            res.render("listar_pacientes", { listaPacientes: pacientes });
        }
    });
});

router.get('/medicamentos', (req, res) => {
    db.getMedicamentos((err, medicamentos) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al obtener los medicamentos");
        } else {
            res.render("medicamentos", { listaMedicamentos: medicamentos });
        }
    });
});


router.get('/detalles', (req, res) => {
    db.getDetallesMedicamentos((err, detalles) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al obtener los detalles de los medicamentos");
        } else {
            res.render("detalles_medicamentos", { listaDetalles: detalles });
        }
    });
});


// PACIENTE
router.get('/crearPaciente', (req, res) => {
    console.log('se llama')
    res.render('crearPaciente');
});

router.post('/agregarPaciente', (req, res) => {
    console.log('daskdasj')
    const nuevoPaciente = {
        nombre_paciente: req.body.nombre_paciente,
        direccion: req.body.direccion,
        ci: req.body.ci,
        fecha_nacimiento: req.body.fecha_nacimiento,
        numero_telefono: req.body.numero_telefono,
        genero: req.body.genero
    };

    db.addPaciente(nuevoPaciente, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al crear el paciente");
        } else {
            res.redirect('/index');
        }
    });
});

router.get('/editarPaciente/:id', (req, res) => {
    const id = req.params.id;
    db.getPacientePorId(id, (err, paciente) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al recuperar el paciente");
        }
        res.render("editarPaciente", { paciente: paciente });
    });
});

router.post('/actualizarPaciente/:id', (req, res) => {
    const id = req.params.id;

    // Extrayendo los datos del formulario
    const datosActualizados = {
        nombre_paciente: req.body.nombre_paciente,
        direccion: req.body.direccion,
        ci: req.body.ci,
        fecha_nacimiento: req.body.fecha_nacimiento,
        numero_telefono: req.body.numero_telefono,
        genero: req.body.genero
    };

    db.actualizarPaciente(id, datosActualizados, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al actualizar el paciente");
        }
        res.redirect('/index');
    });
});


router.post('/eliminarPaciente/:id', (req, res) => {
    const id = req.params.id;

    db.eliminarPaciente(id, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al eliminar el paciente");
        }
        res.redirect('/index');
    });
});

//

router.get('/crearVisita', (req, res) => {
    db.obtenerPacientes((error, listaPacientes) => {
        if (error) {
            console.error("Error al obtener la lista de pacientes: ", error);
            return res.status(500).send("Error al obtener la lista de pacientes.");
        }
        res.render('crearVisita', { listaPacientes: listaPacientes });
    });
});

//Agregar Visita:

//Vista Paciente
router.get('/visitaP', (req, res) => {
    db.getVisita((err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al recuperar los usuarios");
        } else {
            res.render("listaVisita", { lista: rows });
        }
    });
});
//

router.post('/agregarVisita', (req, res) => {
    const nuevaVisita = {
        fecha_visita: req.body.fecha_visita,
        fecha_proxima_visita: req.body.fecha_proxima_visita,
        presion_arterial: req.body.presion_arterial,
        peso: req.body.peso,
        enfermedad: req.body.enfermedad,
        id_paciente: req.body.paciente  
    };

    db.agregarVisita(nuevaVisita, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al agregar la visita");
        }
        res.redirect('/index');
    });
});


//HISTORIAL MÉDICO
router.get('/crearHistorialMedico', (req, res) => {
    db.obtenerVisitasPacientes((errVisitas, visitas) => {
      if (errVisitas) {
        console.error(errVisitas);
        return res.status(500).send("Error al obtener las visitas de pacientes.");
      }
  
      db.obtenerDetallesMedicamentos((errDetalles, detalles) => {
        if (errDetalles) {
          console.error(errDetalles);
          return res.status(500).send("Error al obtener los detalles de medicamentos.");
        }
  
        res.render('crearHistorial', { visitas: visitas, detalles: detalles });
      });
    });
  });


router.post('/agregarHistorialMedico', (req, res) => {
    const nuevoHistorial = {
        id_visita_paciente: req.body.id_visita_paciente,
        id_detalle_medicamento: req.body.id_detalle_medicamento,
        cantidad: req.body.cantidad,
        dosis: req.body.dosis
    };

    db.crearHistorialMedico(nuevoHistorial, (error) => {
        if (error) {
            console.error("Error al agregar historial médico: ", error);
            return res.status(500).send("Error al agregar historial médico.");
        }
        res.redirect('/index');
    });
});


router.get('/editarHistorial/:id', (req, res) => {
    const id = req.params.id;
    db.getHistorialPorId(id, (err, historial) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al recuperar el historial médico");
        }
        db.obtenerVisitasPacientes((errVisitas, visitas) => {
            if (errVisitas) {
                console.error(errVisitas.message);
                return res.status(500).send("Error al recuperar las visitas de pacientes");
            }
            db.obtenerDetallesMedicamentos((errDetalles, detalles) => {
                if (errDetalles) {
                    console.error(errDetalles.message);
                    return res.status(500).send("Error al recuperar detalles de medicamentos");
                }
                res.render("editarHistorial", {
                    historial: historial,
                    visitas: visitas,
                    detalles: detalles
                });
            });
        });
    });
});

router.post('/actualizarHistorial/:id', (req, res) => {
    const id = req.params.id;
    const datosActualizados = {
        id_visita_paciente: req.body.id_visita_paciente,
        id_detalle_medicamento: req.body.id_detalle_medicamento,
        cantidad: req.body.cantidad,
        dosis: req.body.dosis
    };

    db.actualizarHistorialMedico(id, datosActualizados, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error al actualizar el historial médico.");
        } else {
            res.redirect('/index'); 
        }
    });
});

router.post('/eliminarHistorial/:id', (req, res) => {
    const id = req.params.id;
    db.deleteHistorial(id, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al eliminar el historial");
        }
        res.redirect('/index');
    });
});



//


router.get('/detallesVisita/:id', (req, res) => {
    const id = req.params.id;
  
    db.obtenerDetallesVisita(id, (err, detallesVisita) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error al obtener los detalles de la visita" });
      } else {
        res.json(detallesVisita);
      }
    });
  });
  

//

/*router.get('/buscarHistorial', (req, res) => {
    const nombreBuscado = req.query.nombre || '';
    db.buscarHistorialesPorNombre(nombreBuscado, (err, historiales) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(historiales);
    });
});*/

router.get('/resultadosBusqueda', (req, res) => {
    const nombreBuscado = req.query.nombre;
    db.buscarHistorialesPorNombre(nombreBuscado, (err, historiales) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al buscar los historiales");
        }
        res.render('resultadosBusqueda', { listaHistorial: historiales });
    });
});



//


module.exports = router;
