class ControlDentadura {
  constructor() {
      this.dentaduras = [];
  }

  agregarDentadura(dentadura){
    this.dentaduras.push(dentadura);
  }

  mostrarDentadura(aux) {
      let html = "";
      const listaDentaduras = document.getElementById("lista-nombre");
      const listaDentaduras1 = document.getElementById("lista-dentadura1");
      const listaDentaduras2 = document.getElementById("lista-dentadura2");
      const listaDentaduras3 = document.getElementById("lista-dentadura3");
      const listaDentaduras4 = document.getElementById("lista-dentadura4");
      listaDentaduras.innerHTML = "";
      listaDentaduras1.innerHTML = "";
      listaDentaduras2.innerHTML = "";
      listaDentaduras3.innerHTML = "";
      listaDentaduras4.innerHTML = "";

      controlDentadura.dentaduras.forEach((dentadura) => {
          const fila = listaDentaduras.insertRow();
          const celdaperfil = fila.insertCell(0);
          const celdaid = fila.insertCell(1);
          const celdaNombre = fila.insertCell(2);
          const celdacuenta = fila.insertCell(3);
          const tomografia = fila.insertCell(4);
  
          
          

          const fila1 = listaDentaduras1.insertRow();
          const d1 = fila1.insertCell(0);
          const d2 = fila1.insertCell(1);
          const d3 = fila1.insertCell(2);
          const d4 = fila1.insertCell(3);
          const d5 = fila1.insertCell(4);
          const d6 = fila1.insertCell(5);
          const d7 = fila1.insertCell(6);
          const d8 = fila1.insertCell(7);

          const fila2 = listaDentaduras2.insertRow();
          const d9 = fila2.insertCell(0);
          const d10 = fila2.insertCell(1);
          const d11 = fila2.insertCell(2);
          const d12 = fila2.insertCell(3);
          const d13 = fila2.insertCell(4);
          const d14 = fila2.insertCell(5);
          const d15 = fila2.insertCell(6);
          const d16 = fila2.insertCell(7);

          const fila3 = listaDentaduras3.insertRow();
          const d17 = fila3.insertCell(0);
          const d18 = fila3.insertCell(1);
          const d19 = fila3.insertCell(2);
          const d20 = fila3.insertCell(3);
          const d21 = fila3.insertCell(4);
          const d22 = fila3.insertCell(5);
          const d23 = fila3.insertCell(6);
          const d24 = fila3.insertCell(7);

          const fila4 = listaDentaduras4.insertRow();
          const d25 = fila4.insertCell(0);
          const d26 = fila4.insertCell(1);
          const d27 = fila4.insertCell(2);
          const d28 = fila4.insertCell(3);
          const d29 = fila4.insertCell(4);
          const d30 = fila4.insertCell(5);
          const d31 = fila4.insertCell(6);
          const d32 = fila4.insertCell(7);

          celdaperfil.innerHTML = '<img src="/componentes/perfil_doc.png" width="60px" alt="" >  '
          celdaid.innerHTML = dentadura.id;
          celdaNombre.innerHTML = dentadura.nombre;
          celdacuenta.innerHTML = dentadura.cuenta;
          tomografia.innerHTML = dentadura.foto; 
     
          d1.innerHTML = dentadura.dientes[0];
          d2.innerHTML = dentadura.dientes[1];
          d3.innerHTML = dentadura.dientes[2];
          d4.innerHTML = dentadura.dientes[3];
          d5.innerHTML = dentadura.dientes[4];
          d6.innerHTML = dentadura.dientes[5];
          d7.innerHTML = dentadura.dientes[6];
          d8.innerHTML = dentadura.dientes[7];
          d9.innerHTML = dentadura.dientes[8];
          d10.innerHTML = dentadura.dientes[9];
          d11.innerHTML = dentadura.dientes[10];
          d12.innerHTML = dentadura.dientes[11];
          d13.innerHTML = dentadura.dientes[12];
          d14.innerHTML = dentadura.dientes[13];
          d15.innerHTML = dentadura.dientes[14];
          d16.innerHTML = dentadura.dientes[15];
          d17.innerHTML = dentadura.dientes[16];
          d18.innerHTML = dentadura.dientes[17];
          d19.innerHTML = dentadura.dientes[18];
          d20.innerHTML = dentadura.dientes[19];
          d21.innerHTML = dentadura.dientes[20];
          d22.innerHTML = dentadura.dientes[21];
          d23.innerHTML = dentadura.dientes[22];
          d24.innerHTML = dentadura.dientes[23];
          d25.innerHTML = dentadura.dientes[24];
          d26.innerHTML = dentadura.dientes[25];
          d27.innerHTML = dentadura.dientes[26];
          d28.innerHTML = dentadura.dientes[27];
          d29.innerHTML = dentadura.dientes[28];
          d30.innerHTML = dentadura.dientes[29];
          d31.innerHTML = dentadura.dientes[30];
          d32.innerHTML = dentadura.dientes[31];
      });

  }


}


const usuario1 = new Dentadura("1", "Ramiro", "rduran", '<img src="/Contenidos/dientes-540x280.jpg" width="500px">', 
                              "Sano", "Carie", "Sano", "Sano", "Carie", "Sano", "Sano", "Sano",
                              "Sano", "Carie", "Sano", "Sano", "Carie", "Sano", "Sano", "Sano",
                              "Sano", "Carie", "Sano", "Sano", "Carie", "Sano", "Sano", "Sano",
                              "Sano", "Carie", "Sano", "Sano", "Carie", "Sano", "Sano", "Sano");

//const usuario2 = new Dentadura("2", "Alberto", "aduran", );
//const usuario3 = new Dentadura("3", "María", "mleascno", );
//const usuario4 = new Dentadura("4", "Juan", "aldayus", );
//const usuario5 = new Dentadura("5", "Arminda", "arminda", );

const controlDentadura = new ControlDentadura();
controlDentadura.agregarDentadura(usuario1);
//controlUsuarios.agregarUsuario(usuario2);
//controlUsuarios.agregarUsuario(usuario3);
//controlUsuarios.agregarUsuario(usuario4);
//controlUsuarios.agregarUsuario(usuario5);
