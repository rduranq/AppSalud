import React, { useState } from "react";
import { collection, addDoc, Firestore } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./addReceta.css";
import { Timestamp } from "firebase/firestore";

export const AddReceta = () => {

    const [NombreDoctor,setNombreDoctor] =useState("");
    const [NombrePaciente,setNombrePaciente] =useState("");
    const[Edad, setEdad]=useState("");
    const[Temperatura, setTemperatura]=useState("");
    const[Peso, setPeso]=useState("");
    const[Fecha, setFecha]=useState("");
    const[DiagnosticoMedi, setDiagnosticoMedi]=useState("");
    const[Medicamentos, setMedicamentos]=useState("");

    const[Nro,setNro]=useState("");
    const[NombreFarmacia,setNombreFarmacia]=useState("");
    const[Carnet,setCarnet]= useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    

    // const totalAsNumber = parseFloat(Total);
    const NroAsNumber = parseInt(Nro);
    const EdadAsNumber = parseInt(Edad);

    // Crea un objeto Timestamp para Fecha
    //const timestamp = Timestamp.Fecha_vencimiento;
    const current_timestamp = Timestamp.now();

    try {
      const recetasRef = collection(db, "Recetas");
      await addDoc(recetasRef, {

        NombreDoctor,
        NombrePaciente,
        Edad:EdadAsNumber,
        Temperatura,
        Peso,
        Fecha: current_timestamp, // Almacena la fecha como Timestamp
        DiagnosticoMedi,
        Medicamentos,

        Nro:NroAsNumber,
        NombreFarmacia,
        Carnet

        // Direccion,
        // Fecha: current_timestamp,
        // NombreCliente, // El valor de "NombreCliente" se establece según la selección del usuario
        // Numero: numeroAsNumber,
        // Total: totalAsNumber,
        // TotalLetras
      });

      console.log("Venta guardada correctamente en Firestore.");

        setNombreDoctor('');
        setNombrePaciente('');
        setEdad('');
        setTemperatura('');
        setPeso('');
        setFecha('');
        setDiagnosticoMedi('');
        setMedicamentos('');
        setNro("");
        setNombreFarmacia("");
        setCarnet("");
      
    } catch (error) {
      console.error("Error al guardar la noticia en Firestore:", error);
    }
  };

  return (

    <div className="form-container-receta">
        <div className="tittle-add">
            <span>Añadir receta</span>
        </div>
      <form className="news-form-receta" onSubmit={handleSubmit}>

        <div className="content-receta">
        <label htmlFor="NombreDoctor">Nombre del Doctor:</label>
          <input
          className="input-2"
            type="text"
            id="NombreDoctor"
            value={NombreDoctor}
            onChange={(e) => setNombreDoctor(e.target.value)}
            required
          />
        </div>

        <div className="content-receta">
          <label htmlFor="NombrePaciente">Nombre del Paciente:</label>
          <input
          className="input-2"
            type="text"
            id="NombrePaciente"
            value={NombrePaciente}
            onChange={(e) => setNombrePaciente(e.target.value)}
            required
          />
        </div>

        <div className="content-receta">
          <label htmlFor="NombreFarmacia">Nombre de la Farmacia:</label>
          <input
          className="input-2"
            type="text"
            id="NombreFarmacia"
            value={NombreFarmacia}
            onChange={(e) => setNombreFarmacia(e.target.value)}
            required
          />
        </div>

        <div className="content-receta">

          <label htmlFor="Nro">Número:</label>
          <input
            className="input-1"
            type="number"
            id="Nro"
            value={Nro}
            onChange={(e) => setNro(e.target.value)}
            required
          />
          <label htmlFor="Carnet">Carnet:</label>
          <input
          className="input-1"
            type="text"
            id="Carnet"
            value={Carnet}
            onChange={(e) => setCarnet(e.target.value)}
            required
          />
          <label htmlFor="Edad">Edad:</label>
          <input
          className="input-1"
            type="number"
            id="Edad"
            value={Edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
           <label htmlFor="Temperatura">Temperatura:</label>
          <input
          className="input-1"
            type="text"
            id="Temperatura"
            value={Temperatura}
            onChange={(e) => setTemperatura(e.target.value)}
            required
          />
          <label htmlFor="Peso">Peso:</label>
          <input
          className="input-1"
            type="text"
            id="Peso"
            value={Peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
          
        </div>

        <div className="content-receta">
          <label htmlFor="DiagnosticoMedi">Diagnóstico Médico:</label>
          <input
          className="input-2"
            type="text"
            id="DiagnosticoMedi"
            value={DiagnosticoMedi}
            onChange={(e) => setDiagnosticoMedi(e.target.value)}
            required
          />
        </div>

        <div className="content-receta">
          <label htmlFor="Medicamentos">Medicamentos:</label>
          <input
          className="input-2"
            type="text"
            id="Medicamentos"
            value={Medicamentos}
            onChange={(e) => setMedicamentos(e.target.value)}
            required
          />
        </div>

          <button className="button-medi" type="submit">
            Añadir Receta
          </button>

      </form>
    </div>

    
    

  );
};
