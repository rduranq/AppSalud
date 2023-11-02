import { ContentHeader } from "../../components/contentHeader/contentHeader";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

import { RecetaCard } from "../../components/recetasCard/receta";
import { Timestamp } from "firebase/firestore";
import "./recetas.css"
import { CreateForm } from "../../components/createForm/createForm";

export const ContentRecet = () => {
    
    const [page, setPage] = useState("opc1");

    const [data, setData] = useState([]);
    const collectionRef = collection(db, 'Recetas');
    const setCurrentPage = (page) => {
        setPage(page);
        console.log(page);
    };

    useEffect(() => {
        const getrecetasList = async () => {
            try {
                const recetasList = await getDocs(collectionRef);
        
                const recetasListArray = recetasList.docs.map((doc) => ({
                ...doc.data(),

                id: doc.id,

                }));
                setData(recetasListArray);
            } catch (error) {
                console.log(error);
            }
            console.log(data);
        };
        
        getrecetasList();
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
            <ContentHeader opc1={"Todos"} opc2={"Añadir Receta"} pagina={setCurrentPage}/>
            {page === "opc2" && <h1> <CreateForm form= {"addReceta"}/></h1>}
            {page === "opc1" && 
                <div>
                <table className="table-recetas">
                    <thead>
                    <tr>
                      <th>Nro</th>
                      <th>Nombre del paciente</th>
                      <th>Nombre de farmacia</th>
                      <th>Carnet o NIT</th>
                      <th>Fecha</th>
                      <th>Operaciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((receta) => (
                    <RecetaCard
                        key={receta.id}
                        id={receta.id}
                        nro={receta.Nro}
                        nombrePaciente={receta.NombrePaciente}
                        nombreFarmacia={receta.NombreFarmacia}
                        nombreDoctor={receta.NombreDoctor}
                        carnet={receta.Carnet}
                        fecha={formatDate(receta.Fecha)}
                        diagnosticoMedi={receta.DiagnosticoMedi}
                        edad={receta.Edad}
                        peso={receta.Peso}
                        temperatura={receta.Temperatura}
                        medicamentos={receta.Medicamentos}

                    /> 
                    ))}
                  </tbody>
                </table>

                </div>}
        </div>
        </>
    );
}