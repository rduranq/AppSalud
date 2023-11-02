import { useState } from "react";
import "./contentHeader.css"
import Search  from "./Imagenes/icon-Search.svg";

export const ContentHeader = ({opc1, opc2, opc3, pagina, todos, buscar, buscando}) => {

    const [busqueda, setBusqueda] = useState("");

    const [active, setActive] = useState("opc1");

    const setCurrentPage = (pages) => {
        pagina(pages);
    };

    const handlebuscar = () => {
        buscar(busqueda);
    };

    return (
        <>
            <div className="contentHeader">
                {opc1 && <button className={
                    active === "opc1" ? "btn-contentHeader-active" : "btn-contentHeader"
                } onClick={() => {setCurrentPage("opc1"); setActive('opc1'); todos(true); buscando(false)}}>{opc1}</button>}
                {opc2 && <button className={
                    active === "opc2" ? "btn-contentHeader-active" : "btn-contentHeader"
                } onClick={() => {setCurrentPage("opc2"); setActive('opc2');}}>{opc2}</button>}
                {opc3 && <button className={
                    active === "opc3" ? "btn-contentHeader-active" : "btn-contentHeader"
                } onClick={() => {setCurrentPage("opc3"); setActive('opc2');}}>{opc3}</button>}
                <div className="content-search">
                <input  className="input-buscar" type="text" placeholder="Buscar un productos" onChange={
                    (e) => {
                        setBusqueda(e.target.value);
                    }
                }/>
                <a className="btn-search " onClick={
                    () => {
                        handlebuscar();
                    }
                
                }><img src={Search} alt="icono de buscar"/></a>
                </div>
            </div>
        </>
    );
}