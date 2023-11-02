import React, { useState } from "react";
import { collection, addDoc, Firestore } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./updateVenta.css";
import { Timestamp } from "firebase/firestore";

export const AddVenta = ({id}) => {
  const [CI, setCI] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Fecha, setFecha] = useState("");
  const [NombreCliente, setNombreCliente] = useState("");
  const [Numero, setNumero] = useState(""); 
  const [Total, setTotal] = useState(0);
  const [TotalLetras, setTotalLetras] = useState("");
  const [productos, setProductos] = useState("")

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const totalAsNumber = parseFloat(Total);
    const numeroAsNumber = parseInt(Numero);

    // Crea un objeto Timestamp para Fecha
    const current_timestamp = Timestamp.now();

    try {
      const ventasRef = collection(db, "Ventas");
      await addDoc(ventasRef, {
        CI,
        Direccion,
        Fecha: current_timestamp,
        NombreCliente, // El valor de "NombreCliente" se establece según la selección del usuario
        Numero: numeroAsNumber,
        Total: totalAsNumber,
        TotalLetras,
        productos
      });

      console.log("Venta guardada correctamente en Firestore.");

      setCI("");
      setDireccion("");
      //setFecha("");
      setNombreCliente(""); // Establecer el valor predeterminado de "NombreCliente" como "post"
      setNumero(0);
      setTotal(0);
      setTotalLetras("");
      setProductos("");
      
    } catch (error) {
      console.error("Error al guardar la noticia en Firestore:", error);
    }
  };

  return (

    <div className="form-container">
      <form className="news-form" onSubmit={handleSubmit}>
        <div className="form-group_1">
          <label htmlFor="NombreCliente">Nombre Cliente:</label>
          <input
            className="input_totalLetras"
            placeholder="Nombre del Cliente"
            type="text"
            id="NombreCliente"
            value={NombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-group_2">
          <div className="input-content">
            <label htmlFor="CI">CI o NIT:</label>
            <input
              className="input_venta"
              placeholder="CI o Nit"
              type="text"
              id="CI"
              value={CI}
              onChange={(e) => setCI(e.target.value)}
              required
            />
          </div>

          <div className="input-content">
            <label htmlFor="Direccion">Direccion:</label>
            <input
              className="input_venta"
              type="text"
              placeholder="Direccion"
              id="Direccion"
              value={Direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Numero">Numero:</label>
            <input
              className="input_venta"
              type="number"
              placeholder="Numero"
              id="Numero"
              value={Numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="content-ventas">
        <label htmlFor="productos">Productos vendidos:</label>
          <textarea 
          className="texto" 
          id="productos" 
          cols="30" 
          rows="10" 
          value={productos}
          onChange={(e) => setProductos(e.target.value)}
          required
          >

          </textarea>

        </div>
        <br />

        <div className="content-total">
          <div className="input-content">

            <label htmlFor="Total-letras">Total en letras:</label>
            <input
              className="input_totalLetras"
              type="text"
              id="Total-letras"
              placeholder="Total en letras"
              value={TotalLetras}
              onChange={(e) => setTotalLetras(e.target.value)}
              required
            />
            
          </div>

          <div className="input-content">
            <label htmlFor="Total">Total:</label>
            <input
              className="input_venta"
              type="Number"
              id="Total"
              placeholder="Total"
              value={Total}
              onChange={(e) => setTotal(e.target.value)}
              required
            />
          </div>

        </div>
        
        <div className="buttons-venta">
          <div className="back-menu">
            <a href="/">Volver al Menú</a>
          </div>
          <button className="button-venta" type="submit">
            Crear Venta
          </button>
        </div>
      </form>
    </div>

    
    

  );
};
