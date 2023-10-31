class Medico{
    constructor(id, foto, nombre, email, password, esperiencia,educacion, direccion, hr_disponible, id_especialidad){
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.esperiencia = esperiencia;
        this.educacion = educacion;
        this.direccion = direccion;
        this.hr_disponible = hr_disponible;
        this.id_especialidad = id_especialidad;
    }
}

class ControlMedico{
    constructor(){
        this.listaMedicos = [];
    }

    adicionar_Medico(medico){
        this.listaMedicos.push(medico);
    }

    ver_Medicos(){
        console.log(this.listaMedicos);
    }

    buscar_medico(medico){
        let medicoEncontrado = this.listaMedicos.find(user => user.email === medico.email && user.password === medico.password);
        return medicoEncontrado;
    }

    obtenerListaMedicos(){
        return this.listaMedicos;
    }

    editar_medico(id, nv_foto, nv_nombre, nv_email, nv_password, nv_esperiencia, nv_educacion, nv_direccion, nv_hr_disponible, nv_id_especialidad){
        const medicoAModificar = this.listaMedicos.find((medico) => medico.id === id);

        if(medicoAModificar){
            medicoAModificar.foto = nv_foto;
            medicoAModificar.nombre = nv_nombre;
            medicoAModificar.email = nv_email;
            medicoAModificar.password = nv_password;
            medicoAModificar.esperiencia = nv_esperiencia;
            medicoAModificar.educacion = nv_educacion;
            medicoAModificar.direccion = nv_direccion;
            medicoAModificar.hr_disponible = nv_hr_disponible;
            medicoAModificar.id_especialidad = nv_id_especialidad;
        }else{
            console.log(`No se encontró un medico con el ID ${id}`);
        }
    }

    // crear una funcion para eliminar el medico si su id es igual al id introducido, buscar al medico con el metodo find()
    eliminar_medico(id){
        for (var i = 0; i < this.listaMedicos.length; i++) {
            if (id == this.listaMedicos[i].id) {
                this.listaMedicos.splice(i, 1);
            }
        }
    }

    verificar_medico(medico){
        let medicoValido = false;
        for (var i = 0; i < this.listaMedicos.length; i++) {
            if (
                this.listaMedicos[i].email == medico.email &&
                this.listaMedicos[i].password == medico.password
            ) {
                medicoValido = true;
                break;
            }
        }
        return medicoValido;
    }

    listar_medicos(){
        let medicos = [
            [0, "foto", "Juan", "juanito@gmail.com", "123", "Radioterapia", "USFX", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1],
            [1, "foto", "Pedro", "pedro@gmail.com", "1a2", "Radioterapia", "USFX", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1],
            [2, "foto", "Lucas", "lucas@gmail.com", "afed", "Radioterapia", "USFX", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1],
            [3, "foto", "Margarita", "margarita@gmail.com", "120fr3", "Radioterapia", "USFX", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1],
            [4, " Fotos", "Elena", "elena@gmail.com", "dewf", "Radioterapia", "USFX", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1],
            [5, "foto", "Franz", "franz@gmail.com", "12sasd", "Radioterapia", "USFX", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1]
        ];

        for (let i = 0; i < medicos.length; i++) {
            let medico = new Medico(
                medicos[i][0],
                medicos[i][1],
                medicos[i][2],
                medicos[i][3],
                medicos[i][4],
                medicos[i][5]

            );

            // this.listaMedicos.push(medico);
            this.adicionar_Medico(medico);
        }
    
    }

}