import "./venta.css"
import Edit from "./Imagenes/icon-edit.png";
import Delete from "./Imagenes/icon-delete.png"
import See from "./Imagenes/icon-see.png"
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { PopupVenta } from "../popupVentas/popup";

export const VentaCard = ({id, nro,nombreCliente, carnet,direccion,totalLetras, total, fecha,productos }) => {

const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
const [Update, setUpdate] = useState(false);


const eliminarDocumento = async (id) => {
  try {
    await deleteDoc(doc(db, "Ventas", id));
    console.log("Documento eliminado correctamente.");

    // Actualizar la lista de documentos después de la eliminación
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
  }
};


  return (
    <>
                    <tr>
                      <td>{nro}</td>
                      <td>{nombreCliente}</td>
                      <td>{carnet}</td>
                      <td>{total}</td>
                      <td>{fecha}</td>
                      <td className="operations">
                          <button className="button-operations" onClick={() => {setMostrarDescripcion(true), setUpdate(true)}}><img src={Edit} alt="Imagen del boton editar" /></button>
                          <button className="button-operations" onClick={ () => {eliminarDocumento(id)}}><img src={Delete} alt="Imagen del boton editar"/></button>
                          <button className="button-operations" onClick={() => setMostrarDescripcion(true)} ><img  src={See} alt="Imagen del boton ver"/></button>
                      </td>
                    </tr>

                    <div className="popup">
                    <PopupVenta  
                    mostrar={mostrarDescripcion} 
                    set={setMostrarDescripcion}
                    id={id}
                    setUpdate ={setUpdate} 
                    update={Update}

                    nombreCliente={nombreCliente}
                    ci={carnet} 
                    direccion={direccion} 
                    numero={nro} 
                    totalLetras={totalLetras} 
                    total={total} 
                    fecha={fecha}
                    productos={productos}
                    />
                    </div>
    </>
  );
};