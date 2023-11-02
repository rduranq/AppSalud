import "./menuAdmin.css"
import Medi from "./Imagenes/ges-medi.png"
import Usu from "./Imagenes/ges-usu.png"
import { usePage } from "../../context/pageContext";

export const MenuAdmin = () => {

    const {setCurrentPage} = usePage();

    return (
        <>
        <div className="container-admin">
            <div className="content-admin">
                <div><button className="button-gestion" onClick={
                    () => {
                        setCurrentPage('medGes');
                    }
                } ><img src={Usu} alt="Medicamentos" /><span className="text-color">Administra medicamentos</span></button></div>
                <div><button className="button-gestion" onClick={
                    () => {
                        setCurrentPage('usuGes');
                    }
                } ><img src={Medi} alt="usuarios" /><span className="text-color">Insertar usuarios</span></button></div>
            </div>
        </div>
            

        </>
    )

}