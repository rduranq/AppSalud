class Especialidad{
    constructor(id_espc, nombreEsp, descripcion, promedioCalificacion, id_medico){
        this.id_espc = id_espc;
        this.nombreEsp = nombreEsp;
        this.descripcion = descripcion;
        this.promedioCalificacion = promedioCalificacion;
        this.id_medico = id_medico;
    }
}


class ControlEspecialidad{
    constructor(){
        this.listaEspecialidad = [];
    }
    
    adicionar_Especialidad(especialidad){
        this.listaEspecialidad.push(especialidad);
    }
    
    ver_Especialidad(){
        console.log(this.listaEspecialidad);
    }
    
    buscar_especialidad(especialidad){
        let especialidadEncontrada = this.listaEspecialidad.find(user => user.nombreEsp === especialidad.nombreEsp);
        return especialidadEncontrada;
    }
    
    obtenerListaEspecialidad(){
        return this.listaEspecialidad;
    }
    
    editar_especialidad(id, nv_nombreEsp, nv_descripcion, nv_promedioCalificacion, nv_id_medico){
        const especialidadAModificar = this.listaEspecialidad.find((especialidad) => especialidad.id_espc === id);
        if(especialidadAModificar){
            especialidadAModificar.nombreEsp = nv_nombreEsp;
            especialidadAModificar.descripcion = nv_descripcion;
            especialidadAModificar.promedioCalificacion = nv_promedioCalificacion;
            especialidadAModificar.id_medico = nv_id_medico;
        }else{
            console.log(`No se encontró una especialidad con el ID ${id}`);
        }
    }
    
    eliminar_especialidad(id){
        for (var i = 0; i < this.listaEspecialidad.length; i++) {
            if (id == this.listaEspecialidad[i].id_espc) {
                this.listaEspecialidad.splice(i, 1);
            }
        }
    }
    
    verificar_especialidad(especialidad){
        let especialidadValida = false;
        for (var i = 0; i < this.listaEspecialidad.length; i++) {
            if (
                this.listaEspecialidad[i].nombreEsp == especialidad.nombreEsp
            ) {
                especialidadValida = true;
                break;
            }
        }
        return especialidadValida;
    }

    listar_especialidad(){
        let especialidades = [
            [0, "Medicina general", "Una especialidad de varias areas", 2],
            [1, "Salud mental", "Una especialidad enfocada en la salud mental", 3],
            [2, "Especialidad en Laboratorios", "Una especialidad que realiza Patología, Microbiología", 1],
            [3, "Medicina del Deporte", "Una especialidad de medicina de deportes", 4],
            [4, "Especialidad en Pediátricas", "Una especialidad que realiza Cardiología Pediátrica, Nefrología Pediátrica, etc", 4],
            [5, "Medicina de Urgencias y Cuidados Críticos", "Una especialidad mayormente enfocado en emergencias", 0],
        ];   

        for(let i = 0; i < especialidades.length; i++){
            let especialidad = new Especialidad(
                especialidades[i][0],
                especialidades[i][1],
                especialidades[i][2],
                especialidades[i][3],
                especialidades[i][4],
                especialidades[i][5]
            );

            this.adicionar_Especialidad(especialidad);
        }
    }
}