
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
        let medicoEncontrado = this.listaMedicos.find(medico => medico.email === medico.email && medico.password === medico.password);
        return medicoEncontrado;
    }

    obtenerListaMedicos(){
        return this.listaMedicos;
    }

    editar_medico(id, nv_foto, nv_nombre, nv_apellido, nv_telefono, nv_email, nv_password, nv_esperiencia, nv_educacion, nv_direccion, nv_hr_disponible, nv_id_especialidad){
        const medicoAModificar = this.listaMedicos.find((medico) => medico.id === id);

        if(medicoAModificar){
            medicoAModificar.foto = nv_foto;
            medicoAModificar.nombre = nv_nombre;
            medicoAModificar.apellido = nv_apellido;
            medicoAModificar.telefono = nv_telefono;
            medicoAModificar.email = nv_email;
            medicoAModificar.password = nv_password;
            medicoAModificar.descripcion = nv_descripcion;
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
}




var controlMedico = new ControlMedico();
function listar_medicos(){
    let medicos = [
        [0, "juan.jpg", "Juan", "Perez", 72732323, "juanito@gmail.com", "123", "De educación católica Jesuita realizó sus estudios primarios y secundarios en la escuela y colegio Cristo Rey de la ciudad de Portoviejo.", 
        "Universidad de USFX.", "Calle Brazil N# 231.", "08:00am - 12:00pm", 1],
        [1, "pedro.jpg", "Pedro", "Castro", 65434342, "pedro@gmail.com", "1a2", "De educación católica Jesuita realizó sus estudios primarios y secundarios en la escuela y colegio Cristo Rey de la ciudad de Portoviejo.", 
        "Universidad Domingo Savio.", "Calle Loa Nr: 122", "10:00am a 12:00pm", 1],
        [2, "lucas.png", "Lucas", "Martinez", 75633232, "lucas@gmail.com", "afed", "De educación católica Jesuita realizó sus estudios primarios y secundarios en la escuela y colegio Cristo Rey de la ciudad de Portoviejo.", 
        "Universidad de USFX.", "Av. las Americas Nr: 122", "14:00pm a 18:00pm", 4],
        [3, "andres.jpg", "Andres", "Flores", 673346323, "andres@gmail.com", "120fr3", "De educación católica Jesuita realizó sus estudios primarios y secundarios en la escuela y colegio Cristo Rey de la ciudad de Portoviejo.", 
        "Universidad Domingo Savio.", "Calle Junin Nr: 122", "07:00am a 11:00pm", 2],
        [4, "jhonny.jpg", "Jhonny", "Rios", 76374343, "jhonny@gmail.com", "dewf", "De educación católica Jesuita realizó sus estudios primarios y secundarios en la escuela y colegio Cristo Rey de la ciudad de Portoviejo.", 
        "Universidad de USFX.", "Av. 6 de Agosto: 122", "14:00pm a 20:00pm", 5],
        [5, "franz.jpg", "Franz", "Gonzales", 74734923, "franz@gmail.com", "12sasd", "De educación católica Jesuita realizó sus estudios primarios y secundarios en la escuela y colegio Cristo Rey de la ciudad de Portoviejo.", 
        "Universidad Domingo Savio.", "Zona Alto Sucre", "08:00am a 21:00pm", 3]
    ];

    for (let i = 0; i < medicos.length; i++) {
        let medico = new Medico(
            medicos[i][0],
            medicos[i][1],
            medicos[i][2],
            medicos[i][3],
            medicos[i][4],
            medicos[i][5],
            medicos[i][6],
            medicos[i][7],
            medicos[i][8],
            medicos[i][9],
            medicos[i][10],
            medicos[i][11]

        );
        
        controlMedico.adicionar_Medico(medico);
    }

}

listar_medicos();
