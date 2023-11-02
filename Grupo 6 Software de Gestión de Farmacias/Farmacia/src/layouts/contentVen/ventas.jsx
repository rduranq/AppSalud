import { ContentHeader } from "../../components/contentHeader/contentHeader";
import { CreateForm } from "../../components/createForm/createForm";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { VentaCard } from "../../components/ventaCard/venta";
import { Timestamp } from "firebase/firestore";
import "./ventas.css"

export const ContentVen = () => {
    
    const [page, setPage] = useState("opc1");

    const [data, setData] = useState([]);
    const collectionRef = collection(db, 'Ventas');

    const setCurrentPage = (page) => {
        setPage(page);
        console.log(page);
    };


    useEffect(() => {
        const getventasList = async () => {
            try {
                const ventasList = await getDocs(collectionRef);
        
                const ventasListArray = ventasList.docs.map((doc) => ({
                ...doc.data(),

                id: doc.id,

                }));
                setData(ventasListArray);
            } catch (error) {
                console.log(error);
            }
        };
        
        getventasList();
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
            <ContentHeader opc1={"Todos"} opc2={"Añadir Venta"} pagina={setCurrentPage}/>
            {page === "opc2" && <CreateForm form= {"addVenta"} />}
            {page === "opc1" && 
                <div>
                <table className="table-venta ">
                    <thead>
                    <tr>
                      <th>Nro</th>
                      <th>Nombre del cliente</th>
                      <th>Carnte o NIT</th>
                      <th>Total</th>
                      <th>Fecha</th>
                      <th>Operaciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((venta) => (
                    <VentaCard
                        key={venta.id}

                        id={venta.id}
                        nro={venta.Numero}
                        nombreCliente={venta.NombreCliente}
                        carnet={venta.CI}
                        total={venta.Total}
                        fecha={formatDate(venta.Fecha)}
                        totalLetras={venta.TotalLetras}
                        direccion={venta.Direccion}
                        productos={venta.productos}
                        
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