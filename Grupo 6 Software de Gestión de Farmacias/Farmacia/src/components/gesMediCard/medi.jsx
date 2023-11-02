import "./medi.css"
import Edit from "./Imagenes/icon-edit.png";
import Delete from "./Imagenes/icon-delete.png"
import See from "./Imagenes/icon-see.png"
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { PopupMedicamento } from "../popupMedi/popup";



export const GesMediCard = ({id, nro, precio, dosificacion, indicaciones, efectosSecundarios, nroLote, instruccionesAlmacenamiento, marca, descripcion, nombre, dosis, viaAdministracion, contradicciones, fechaV, nombreFabricante, interaccionesMedicamentosas, img, tipo  }) => {
  
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [Update, setUpdate] = useState(false);

const eliminarDocumento = async (id) => {
  try {
    await deleteDoc(doc(db, "Medicamentos", id));
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
                      <td>{nombre}</td>
                      <td>{dosis}</td>
                      <td>{nroLote}</td>
                      <td>{fechaV}</td>
                      <td className="operations">
                          <button className="button-operations" onClick={() => {setMostrarDescripcion(true), setUpdate(true)}}><img src={Edit} alt="Imagen del boton editar" /></button>
                          <button className="button-operations" onClick={ () => {eliminarDocumento(id)}}><img src={Delete} alt="Imagen del boton editar"/></button>
                          <button className="button-operations" onClick={() => setMostrarDescripcion(true)}  ><img  src={See} alt="Imagen del boton ver"/></button>
                      </td>
                      <div className="popup">
                    <PopupMedicamento  mostrar={mostrarDescripcion} 
                    set={setMostrarDescripcion} 
                    

                    setUpdate ={setUpdate} 
                    update={Update}

                    id={id}
                    nro={nro}
                    precio={precio}
                    dosificacion={dosificacion}
                    indicaciones={indicaciones}
                    efectosSecundarios={efectosSecundarios}
                    nroLote={nroLote}
                    instruccionesAlmacenamiento={instruccionesAlmacenamiento}
                    marca={marca}
                    descripcion={descripcion}
                    nombre={nombre}
                    dosis={dosis}
                    viaAdministracion={viaAdministracion}
                    contradicciones={contradicciones}
                    fechaVencimiento={fechaV}
                    nombreFabricante={nombreFabricante}
                    interaccionesMedicamentosas={interaccionesMedicamentosas}
                    img={img}
                    tipo={tipo}
                    
                   />
                    </div>
                    </tr>
    </>
  );
};