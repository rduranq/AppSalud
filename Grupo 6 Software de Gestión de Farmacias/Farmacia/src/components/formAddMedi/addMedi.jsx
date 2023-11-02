import React, { useState } from "react";
import { collection, addDoc, Firestore } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./addMedi.css";
import { Timestamp } from "firebase/firestore";

export const AddMedi = () => {

    const [Nombre,setNombre] =useState("");
    const[Dosis, setDosis]= useState("");
    const [Forma_dosi,setForma_dosi] =useState("");
    const [Via_admi, setVia_admi] =useState("");
    const [Indicaciones, setIndicaciones] = useState("");
    const [Contradicciones, setContradicciones]= useState("");
    const [Efect_secun, setEfect_secun] =useState("");
    const [Fecha_vencimiento, setFecha_vencimiento]=useState("");
    const [NroLote,setNroLote] =useState("");
    const [Nombre_fabri, setNombre_fabri]=useState("");
    const [Almacenamiento, setAlmacenamiento]=useState("");
    const[Itera_medi,setItera_medi]=useState("");
    const [Marca,setMarca]=useState("");
    const[Img_medi,setImg_medi]=useState("");
    const[Descripcion,setDescripcion]=useState("");
    const[Precio, setPrecio]=useState("");
    const[Nro, setNro]=useState("");
    const[Tipo, setTipo]=useState("");


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const NroLoteAsNumber = parseInt(NroLote);
    const PrecioAsNumber = parseFloat(Precio);
    const NroAsNumber= parseInt(Nro);
    const fechaVencimientoDate = new Date(Fecha_vencimiento);
    const fechaVencimientoTimestamp = Timestamp.fromDate(fechaVencimientoDate);
    // const totalAsNumber = parseFloat(Total);
    // const numeroAsNumber = parseInt(Numero);

    // Crea un objeto Timestamp para Fecha
    //const timestamp = Timestamp.Fecha_vencimiento;

    try {
      const medisRef = collection(db, "Medicamentos");
      await addDoc(medisRef, {
        Nro:NroAsNumber,
        Nombre,
        Dosis,
        Forma_dosi,
        Via_admi,
        Indicaciones,
        Contradicciones,
        Efect_secun,
        Fecha_vencimiento:fechaVencimientoTimestamp,
        NroLote: NroLoteAsNumber,
        Nombre_fabri,
        Almacenamiento,
        Itera_medi,
        Marca,
        Img_medi,
        Descripcion,
        Precio:PrecioAsNumber,
        Tipo

        // Direccion,
        // Fecha: current_timestamp,
        // NombreCliente, // El valor de "NombreCliente" se establece según la selección del usuario
        // Numero: numeroAsNumber,
        // Total: totalAsNumber,
        // TotalLetras
      });

      console.log("Venta guardada correctamente en Firestore.");

      setNro(0);
      setNombre("");
      setDosis("");
      setForma_dosi("");
      setVia_admi("");
      setIndicaciones("");
      setContradicciones("");
      setEfect_secun("");
      setFecha_vencimiento("");
      setNroLote("");
      setNombre_fabri("");
      setAlmacenamiento("");
      setItera_medi("");
      setMarca("");
      setImg_medi("");
      setDescripcion("");
      setPrecio("");
      setTipo("");
    //   setCI("");
    //   setDireccion("");
    //   //setFecha("");
    //   setNombreCliente(""); // Establecer el valor predeterminado de "NombreCliente" como "post"
    //   setNumero(0);
    //   setTotal(0);
    //   setTotalLetras("");
      
    } catch (error) {
      console.error("Error al guardar la noticia en Firestore:", error);
    }
  };

  return (

    <div className="form-container-medi">
        <div className="tittle-add">
            <span>Añadir Medicamentos</span>
        </div>
      <form className="news-form-medi" onSubmit={handleSubmit}>
        

      <label htmlFor="NroMedi">Nro del Medicamento:</label>
          <input

            type="Number"
            id="NroMedi"
            value={Nro}
            onChange={(e) => setNro(e.target.value)}
            required
          />
         

        <label htmlFor="NombreMedi">Nombre del Medicamento:</label>
          <input

            type="text"
            id="NombreMedi"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        <label htmlFor="PrecioMedi">Precio del Medicamento:</label>
          <input

            type="number"
            id="PrecioMedi"
            value={Precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />


        <label htmlFor="Dosis">Dosis:</label>
          <input

 
            type="text"
            id="Dosis"
            value={Dosis}
            onChange={(e) => setDosis(e.target.value)}
            required
          />


        <label htmlFor="Forma_dosi">Forma de dosificacion:</label>
          <input


            type="text"
            id="Forma_dosi"
            value={Forma_dosi}
            onChange={(e) => setForma_dosi(e.target.value)}
            required
          />

        

        <label htmlFor="Via_admi">Vía de Administración:</label>
        <input
          type="text"
          id="Via_admi"
          value={Via_admi}
          onChange={(e) => setVia_admi(e.target.value)}
          required
        />


        <label htmlFor="Indicaciones">Indicaciones:</label>
        <input
          type="text"
          id="Indicaciones"
          value={Indicaciones}
          onChange={(e) => setIndicaciones(e.target.value)}
          required
        />

        <label htmlFor="Contradicciones">Contradicciones:</label>
        <input
          type="text"
          id="Contradicciones"
          value={Contradicciones}
          onChange={(e) => setContradicciones(e.target.value)}
          required
        />

        <label htmlFor="Efect_secun">Efectos Secundarios:</label>
        <input
          type="text"
          id="Efect_secun"
          value={Efect_secun}
          onChange={(e) => setEfect_secun(e.target.value)}
          required
        />

        <label htmlFor="Fecha_vencimiento">Fecha de Vencimiento:</label>
        <input
          type="date"
          id="Fecha_vencimiento"
          value={Fecha_vencimiento}
          onChange={(e) => setFecha_vencimiento(e.target.value)}
          required
        />

        <label htmlFor="NroLote">Número de Lote:</label>
        <input
          type="number"
          id="NroLote"
          value={NroLote}
          onChange={(e) => setNroLote(e.target.value)}
          required
        />

        <label htmlFor="Nombre_fabri">Nombre del Fabricante:</label>
        <input
          type="text"
          id="Nombre_fabri"
          value={Nombre_fabri}
          onChange={(e) => setNombre_fabri(e.target.value)}
          required
        />

        <label htmlFor="Almacenamiento">Instrucciones de Almacenamiento:</label>
        <input
          type="text"
          id="Almacenamiento"
          value={Almacenamiento}
          onChange={(e) => setAlmacenamiento(e.target.value)}
          required
        />

        <label htmlFor="Itera_medi">Interacciones con otros medicamentos:</label>
        <input
          type="text"
          id="Itera_medi"
          value={Itera_medi}
          onChange={(e) => setItera_medi(e.target.value)}
          required
        />

        <label htmlFor="Marca">Marca:</label>
        <input
          type="text"
          id="Marca"
          value={Marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />

        <label htmlFor="Img_medi">Imagen del Medicamento:</label>
        <input
          type="text"
          id="Img_medi"
          value={Img_medi}
          onChange={(e) => setImg_medi(e.target.value)}
          required
        />

        <label htmlFor="Descripcion">Descripción:</label>
        <input
          type="text"
          id="Descripcion"
          value={Descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
    <label htmlFor="TipoMedi">Tipo del Medicamento:</label>
          <select
            id="TipoMedi"
            value={Tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="venta libre">Venta Libre</option>
            <option value="con receta">Con receta</option>
            <option value="genericos y de marca">Genericos y de marca</option>
            <option value="venta controlada">Venta controlada</option>
            <option value="Suplementos dieteticos y vitaminicos">Suplementos dieteticos y vitaminicos</option>
            <option value="homeopaticos">Homeopaticos</option>
            <option value="Vacunas y productos biologicos">Vacunas y productos biologicos</option>
            <option value="cuidados paulativos">Cuidados paulativos</option>
            <option value="epecialidad">Epecialidad</option>
            <option value="uso topico">Uso topico</option>
          </select>
          <br />
          <button className="button-medi" type="submit">
            Añadir Medicamento
          </button>

      </form>
    </div>

    
    

  );
};
