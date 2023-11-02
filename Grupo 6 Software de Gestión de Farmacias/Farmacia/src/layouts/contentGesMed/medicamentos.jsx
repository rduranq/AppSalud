import { ContentHeader } from "../../components/contentHeader/contentHeader";
import { CreateForm } from "../../components/createForm/createForm";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { GesMediCard } from "../../components/gesMediCard/medi";
import { Timestamp } from "firebase/firestore";
import "./medicamentos.css"

export const ContentGesMedi = () => {
    
    const [page, setPage] = useState("opc1");

    const [data, setData] = useState([]);
    const collectionRef = collection(db, 'Medicamentos');

    const setCurrentPage = (page) => {
        setPage(page);
        console.log(page);
    };

    useEffect(() => {
        const getmedisList = async () => {
            try {
                const medisList = await getDocs(collectionRef);
        
                const medisListArray = medisList.docs.map((doc) => ({
                ...doc.data(),

                id: doc.id,

                }));
                setData(medisListArray);
            } catch (error) {
                console.log(error);
            }
        };
        
        getmedisList();
    }, []);

    function formatDate(timestamp) {
        if (timestamp instanceof Timestamp) {
          const date = timestamp.toDate();
          const options = { year: "numeric", month: "long", day: "numeric" };
          return date.toLocaleDateString(undefined, options);
        } else {
          return "Fecha no disponible";
        }
      }


    return (
        <>
        <div className="content">
            <ContentHeader opc1={"Todos"} opc2={"Añadir Medicamento"} pagina={setCurrentPage}/>
            {page === "opc2" && <CreateForm form={"addMedi"}/>}
            {page === "opc1" && 
                <div className="medicamentos-ges-container">
                <table className="table-venta ">
                    <thead>
                    <tr>
                      <th>Nro</th>
                      <th>Nombre del producto</th>
                      <th>Dosis</th>
                      <th>Numero Lote</th>
                      <th>Fecha de vencimiento</th>
                      <th>Operaciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((medicamento) => (
                    <GesMediCard
                        key={medicamento.id}

                        id={medicamento.id}
                        nro={medicamento.Nro}
                        precio={medicamento.Precio}
                        nombre={medicamento.Nombre}
                        dosis={medicamento.Dosis}
                        dosificacion={medicamento.Forma_dosi}
                        indicaciones={medicamento.Indicaciones}
                        efectosSecundarios={medicamento.Efect_secun}
                        nroLote={medicamento.NroLote}
                        instruccionesAlmacenamiento={medicamento.Almacenamiento}
                        marca={medicamento.Marca}
                        descripcion={medicamento.Descripcion}
                        viaAdministracion={medicamento.Via_admi}
                        contradicciones={medicamento.Contradicciones}
                        fechaV={formatDate(medicamento.Fecha_vencimiento)}
                        nombreFabricante={medicamento.Nombre_fabri}
                        interaccionesMedicamentosas={medicamento.Itera_medi}
                        img={medicamento.Img_medi}
                        tipo={medicamento.Tipo}
                    /> 
                    
                    ))}
                  </tbody>
                </table>

                </div>}
                {/* <input type="hidden" name="a" value={prueba} /> */}
        </div>
        </>
    );
}