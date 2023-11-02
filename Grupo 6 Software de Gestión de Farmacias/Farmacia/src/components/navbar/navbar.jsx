import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//para los estilos
import "./navbar.css"
import logo from "./Imagenes/logo-farmacia.png";
import medicamentos from "./Imagenes/logo-medicamentos.png";
import recetas from "./Imagenes/logo-recetas.png";
import ventas from "./Imagenes/logo-ventas.png";
import admin from "./Imagenes/logo-admin.svg";
import logoutImg from "./Imagenes/logout.png";
import { useAuth } from '../../context/authContext';
import { usePage } from "../../context/pageContext";
import { Clock } from "../../components/horaAct/horaAct";


export const Navbar = () => {

    const {setCurrentPage} = usePage();

    const {logout, userRole} = useAuth();

    const salir = async () => {
        await logout().then(() => {
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <div className="navbar">
                <div className="titulo centerd-text">
                    <div>
                        <img src={logo} alt="png de la farmancia" width={100} height={100} />
                    </div>
                    <div>
                        <h1 className="bold-text">Farmacia</h1>
                    </div>
                </div>
                <div className="tiempo">
                    <div className="hora"><Clock/></div>
                </div>
                <div className="componentes">
                <a className="button centered-text" onClick={
                    () => {
                        setCurrentPage('med');
                    }
                }><img src={medicamentos} alt="logo medicamentos" className="icon" width={30} height={30}/> Medicamentos</a>
                <a className="button centered-text" onClick={
                    () => {
                        setCurrentPage('rec');
                    }
                }><img src={recetas} alt="logo medicamentos" className="icon" width={30} height={30}/> Recetas</a>
                <a className="button centered-text" onClick={
                    () => {
                        setCurrentPage('ven');
                    }
                }><img src={ventas} alt="logo medicamentos" className="icon" width={30} height={30}/> Ventas</a>
                </div>
                <button style={userRole === 'Admin' ? {} : {display: 'none'}} className="button centered-text" onClick={
                    () => {
                        setCurrentPage('admin');
                    }
                    } ><img src={admin} alt="logo admin" className="icon" width={30} height={30} />Modo administrador</button>
                <button  className="button centered-text bordered-button" onClick={salir}><img src={logoutImg} alt="logo medicamentos" className="icon" width={30} height={30}/>Cerrar sesion</button>

            </div>

        </>
    )

}