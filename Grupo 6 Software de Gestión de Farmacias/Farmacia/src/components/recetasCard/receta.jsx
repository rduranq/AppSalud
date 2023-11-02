import "./receta.css"
import Edit from "./Imagenes/icon-edit.png";
import Delete from "./Imagenes/icon-delete.png"
import See from "./Imagenes/icon-see.png"
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { PopupReceta } from "../popupRecetas/popup";


export const RecetaCard = ({id, nro,nombrePaciente,nombreFarmacia, nombreDoctor, carnet, fecha, diagnosticoMedi, edad, peso,temperatura, medicamentos}) => {

const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
const [Update, setUpdate] = useState(false);

const eliminarDocumento = async (id) => {
  try {
    await deleteDoc(doc(db, "Recetas", id));
    console.log("Documento eliminado correctamente.");

    // Actualizar la lista de documentos después de la eliminación
    
    
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
  }
}

console.log(id, nro,nombrePaciente, nombreFarmacia, carnet, fecha);
console.log("mostrando recetas xd");
  return (
    <>
                    <tr>
                      <td>{nro}</td>
                      <td>{nombrePaciente}</td>
                      <td>{nombreFarmacia}</td>
                      <td>{carnet}</td>
                      <td>{fecha}</td>
                      <td className="operations">
                          <button className="button-operations" onClick={() => {setMostrarDescripcion(true), setUpdate(true)}}><img src={Edit} alt="Imagen del boton editar" /></button>
                          <button className="button-operations" onClick={ () => {eliminarDocumento(id)}} ><img src={Delete} alt="Imagen del boton editar" /></button>
                          <button className="button-operations" onClick={() => setMostrarDescripcion(true)} ><img  src={See} alt="Imagen del boton ver"/></button>
                      </td>
                    </tr>
                    <div className="popup">
                    <PopupReceta  
                    mostrar={mostrarDescripcion} 
                    set={setMostrarDescripcion}
                    
                    setUpdate ={setUpdate} 
                    update={Update}

                    id={id}
                    nro={nro}
                    nombrePaciente={nombrePaciente}
                    nombreDoctor={nombreDoctor}
                    nombreFarmacia={nombreFarmacia}
                    carnet={carnet}
                    fecha={fecha}
                    diagnosticoMedi={diagnosticoMedi}
                    edad={edad}
                    peso={peso}
                    temperatura={temperatura}
                    medicamentos={medicamentos}
                   />
                    </div>
    </>
  );
};