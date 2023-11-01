class Paciente{
    constructor(id, nombre, apellido, fecha_nacimiento, sexo, telefono, tratamiento){
this.id = id;
this.nombre = nombre;
 this.apellido = apellido;
 this.fecha_nacimiento = fecha_nacimiento;
 this.sexo = sexo;
 this.telefono = telefono;
this.tratamiento = tratamiento;

    }

    toString(){
        return this.nombre;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getFecha_nacimiento(){
        return this.fecha_nacimiento;
    }
    getSexo(){
        return this.sexo;
    }
    getTelefono(){
        return this.telefono;
    }
    getTratamiento(){
        return this.tratamiento;
    }

}


class controlPaciente {
  constructor(){
    this.listaPacientes = [];

  }
  adicionarPaciente(paciente){
    paciente.id=this.listaPacientes.length+1;
    this.listaPacientes.push(paciente);
  }

  eliminarPaciente(id) {
    for (let i = 0; i < this.listaPacientes.length; i++) {
        if (this.listaPacientes[i].id == id) {
            this.listaPacientes.splice(i, 1);
            break; 
        }
    }
}



modificarPaciente(id, paciente) {
  for (let i = 0; i < this.listaPacientes.length; i++) {
      if (this.listaPacientes[i].id == id) {
          this.listaPacientes[i] = paciente;
      }
  }
}


listarPacientes(){
  for (let i = 0; i < this.listaPacientes.length; i++) {
    console.log(this.listaPacientes[i]);
}
}


obtenerListaPacientes() {
  let pacientes = [
      ["1", "Ronal", "Flores","1993-11-20", "M", 76543829, "Fiebre"],
      ["2", "Alberto", "Gonzales","1989-04-12", "M", 67890123, "Dolor de cabeza"],
      ["3", "Melisa", "flores", "1988-3-11", "F", 67839394, "arritmia cardiaca"],
      ["4", "Juan", "Rios","1963-12-05", "M", 78585959, "cancer pulmonar"],
      ["5", "Armando", "Orellana","1983-07-03", "M", 7684949, "gastroenteritis"]
  ];

  for (let i = 0; i < pacientes.length; i++) {
      let paciente = new Paciente(
          pacientes[i][0],
          pacientes[i][1],
          pacientes[i][2],
          pacientes[i][3],
          pacientes[i][4],
          pacientes[i][5],
          pacientes[i][6]
      );
      this.adicionarPaciente(paciente);
  }
  return this.listaPacientes;
}
}

