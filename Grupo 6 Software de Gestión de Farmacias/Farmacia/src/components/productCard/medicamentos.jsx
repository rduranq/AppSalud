import "./medicamentos.css"
import { PopupMed } from "../popupMed/popup";
import { useState } from "react";

export const ProductCard = ({id, img, nombre, precio, dosis, marca,descripcion}) => {

  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <>
        <div className="contentmed">
          <div className="medicamentos-container2">
              <div className="medicamento" key={id}>
                <div className="medicamento-header">

                  <div className="medicamento-img"><img src={img} alt="img"/></div>
                  
                  <div className="medicamento-body">
                    <p><b>Nombre: </b>{nombre}</p>
                    <p><b>Precio: </b>{precio}</p>
                    <p><b>Dosis: </b>{dosis} </p>
                    <p><b>Marca: </b>{marca}</p>

                  </div>

                  <div className="Descripcion"><button className="btnDescripcion" onClick={() => setMostrarDescripcion(true)}>Descripcion</button></div>
                </div>
              </div>
          </div>
          <div className="popup">
            <PopupMed content={descripcion} mostrar={mostrarDescripcion} set={setMostrarDescripcion}/>
          </div>
        </div>
    </>
  );
};
