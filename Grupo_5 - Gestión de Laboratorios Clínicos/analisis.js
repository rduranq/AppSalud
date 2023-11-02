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
      ["1", "Ramon", "Vargas","1999-10-10", "M", 60879543, "analisis de hemoglobina"],
      ["2", "Maria", "Gonzales","2001-06-12", "F", 79867845, "Analisis de glucosa"],
      ["3", "Ruth", "Torrez", "2000-09-11", "F", 79806528, "Analisis de lipidos"],
      ["4", "Juan", "Juanes","1991-10-09", "M", 78585959, "Analisis de eletrolitos"],
      ["5", "Jhonn", "Saavedra","2002-12-03", "M", 75794549, "analisis de orina"]
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
