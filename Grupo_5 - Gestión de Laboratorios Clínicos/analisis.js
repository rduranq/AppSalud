class Analisis{
    constructor(id, nombre, apellido, fecha_nacimiento, sexo, telefono, tipoAnalisis){
this.id = id;
this.nombre = nombre;
 this.apellido = apellido;
 this.fecha_nacimiento = fecha_nacimiento;
 this.sexo = sexo;
 this.telefono = telefono;
this.tipoAnalisis = tipoAnalisis;

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
        return this.tipoAnalisis;
    }

}


class CtrAnalisis {
  constructor(){
    this.listaAnalisis = [];

  }
  adicionarAnalisis(analisi){
    analisi.id=this.listaAnalisis.length+1;
    this.listaAnalisis.push(analisi);
  }

  eliminar(id) {
    for (let i = 0; i < this.listaAnalisis.length; i++) {
        if (this.listaAnalisis[i].id == id) {
            this.listaAnalisis.splice(i, 1);
            break; 
        }
    }
}



modificarAnalis(id, analisi) {
  for (let i = 0; i < this.listaAnalisis.length; i++) {
      if (this.listaAnalisis[i].id == id) {
          this.listaAnalisis[i] = analisi;
      }
  }
}


listarAnalisis(){
  for (let i = 0; i < this.listaAnalisis.length; i++) {
    console.log(this.listaAnalisis[i]);
}
}


obtenerListaAnalisis() {
  let analisis = [
      ["1", "Ronal", "Flores","1993-11-20", "M", 76543829, "Fiebre"],
      ["2", "Alberto", "Gonzales","1989-04-12", "M", 67890123, "Dolor de cabeza"],
      ["3", "Melisa", "flores", "1988-3-11", "F", 67839394, "arritmia cardiaca"],
      ["4", "Juan", "Rios","1963-12-05", "M", 78585959, "cancer pulmonar"],
      ["5", "Armando", "Orellana","1983-07-03", "M", 7684949, "gastroenteritis"]
  ];

  for (let i = 0; i < analisis.length; i++) {
      let analisi = new Analisis(
          analisis[i][0],
          analisis[i][1],
          analisis[i][2],
          analisis[i][3],
          analisis[i][4],
          analisis[i][5],
          analisis[i][6]
      );
      this.adicionarAnalisis(analisi);
  }
  return this.listaAnalisis;
}
}
