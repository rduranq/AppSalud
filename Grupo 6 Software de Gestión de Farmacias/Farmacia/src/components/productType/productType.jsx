import "./productType.css"
import Img1 from "./Imagenes/img1.png"
import Img2 from "./Imagenes/img2.png"
import Img3 from "./Imagenes/img3.png"
import Img4 from "./Imagenes/img4.png"
import Img5 from "./Imagenes/img5.png"
import Img6 from "./Imagenes/img6.png"
import Img7 from "./Imagenes/img7.png"
import Img8 from "./Imagenes/img8.png"
import Img9 from "./Imagenes/img9.png"
import Img10 from "./Imagenes/img10.png"
import { useState } from "react";
import { db } from "../../config/firebase";


export const ProductType = ({tipo}) => {


    const settype = (types) => {
        tipo(types);
        console.log(types);
    };

    return (
        <>
        <div className="container-tipos">

            <button className="btnTipo orange" onClick={ () => settype("venta libre")}><img src={Img1} alt="logo medicamentos"/>Medicamentos de venta libre</button>
            <button className="btnTipo skyblue" onClick={ () => settype("con receta")}><img src={Img2} alt="logo medicamentos" />Medicamentos con receta</button>
            <button className="btnTipo gray" onClick={ () => settype("genericos y de marca")}><img src={Img3} alt="logo medicamentos" />Genericos y de marca</button>
            <button className="btnTipo lilac"  onClick={ () => settype("venta controlada")}><img src={Img4} alt="logo medicamentos" />Venta controlada</button>
            <button className="btnTipo yellow-green" onClick={ () => settype("Suplementos dieteticos y vitaminicos")} ><img src={Img5} alt="logo medicamentos" />Suplementos dieteticos</button>
            <button className="btnTipo red-orange" onClick={ () => settype("homeopaticos")}><img src={Img6} alt="logo medicamentos" />Medicamentos homeopaticos</button>
            <button className="btnTipo blue" onClick={ () => settype("Vacunas y productos biologicos")}><img src={Img7} alt="logo medicamentos" />vacunas y productos biologicos</button>
            <button className="btnTipo pink" onClick={ () => settype("cuidados paulativos")}><img src={Img8} alt="logo medicamentos" />Medicamentos de cuidados paulativos</button>
            <button className="btnTipo green" onClick={ () => settype("epecialidad")}><img src={Img9} alt="logo medicamentos" />Medicamentos de especialidad</button>
            <button className="btnTipo purple"onClick={ () => settype("uso topico")} ><img src={Img10} alt="logo medicamentos" />Medicamentos de uso topico</button>

        </div>
        </>
            
    )

}