import { ProductCard } from "../../components/productCard/medicamentos";
import {ContentHeader} from "../../components/contentHeader/contentHeader"
import { ProductType } from "../../components/productType/productType";
import { PopupMed } from "../../components/popupMed/popup";
import "./medicamentos.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export const ContentMed = () => {

    const [page, setPage] = useState("opc1");

    const [type, setType] = useState("venta controlada");

    const [search, setSearch] = useState("");

    const [defaultfilter, setDefaultfilter] = useState(true);

    const [buscando, setBuscando] = useState(false);

    const [data, setData] = useState([]);
    const collectionRef = collection(db, 'Medicamentos');

    const setCurrentPage = (page) => {
        setDefaultfilter(false);
        setPage(page);
        console.log(page);
    };

    const setBusqueda = (busqueda) => {
        setDefaultfilter(false);
        setBuscando(true);
        setSearch(busqueda);
        setPage("opc1");
        console.log(busqueda);
    };

    const setCurrentType = (type) => {
        setType(type);
        setPage("opc1");
        console.log(type);
    };


    useEffect(() => {
        const getmedicamentosList = async () => {
            try {
                const medicamentosList = await getDocs(collectionRef);
        
                const medicamentosListArray = medicamentosList.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                }));
                setData(medicamentosListArray);
            } catch (error) {
                console.log(error);
            }
        };
        
        getmedicamentosList();
    }, []);

    return (
        <>
        <div className="content">

            <ContentHeader opc1={"Todos"} opc2={"Tipos"} pagina={setCurrentPage} todos={setDefaultfilter} buscar={setBusqueda} buscando={setBuscando}/>
            {page === "opc2" && <ProductType tipo={setCurrentType} />}
            {page === "opc1" &&             
            <div className="medicamentos-container">
                {defaultfilter && data.map((medicamento) => (
                    <>
                        <ProductCard
                            key={medicamento.id}
                            id={medicamento.id}
                            img={medicamento.Img_medi}
                            nombre={medicamento.Nombre}
                            precio={medicamento.Precio}
                            dosis={medicamento.Dosis}
                            marca={medicamento.Marca}
                            descripcion={medicamento.Descripcion}
                        /> 
                    </>       
                    ))}

                {!defaultfilter && !buscando && data.filter((medicamento) => medicamento.Tipo === type ).map((medicamento) => (
                        <ProductCard 
                            key={medicamento.id}
                            id={medicamento.id}
                            img={medicamento.Img_medi}
                            nombre={medicamento.Nombre}
                            precio={medicamento.Precio}
                            dosis={medicamento.Dosis}
                            marca={medicamento.Marca}
                            descripcion={medicamento.Descripcion}
                        /> 
                    ))}

                {buscando && data.filter((medicamento) => medicamento.Nombre.toLowerCase().includes(search.toLowerCase())).map((medicamento) => (
                        <ProductCard 
                            key={medicamento.id}
                            id={medicamento.id}
                            img={medicamento.Img_medi}
                            nombre={medicamento.Nombre}
                            precio={medicamento.Precio}
                            dosis={medicamento.Dosis}
                            marca={medicamento.Marca}
                            descripcion={medicamento.Descripcion}
                        /> 
                    ))}
                    
            </div>
            
            }
        </div>
        </>
    );
}
