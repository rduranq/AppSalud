import "./home.css"
import {Navbar} from "../../components/navbar/navbar"
import { useAuth } from "../../context/authContext"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { ContentMed } from "../../layouts/contentMed/medicamentos"
import { usePage } from "../../context/pageContext"
import { ContentVen } from "../../layouts/contentVen/ventas"
import {ContentRecet} from "../../layouts/contentRecet/recetas"
import { MenuAdmin } from "../../components/menuAdmin/menuAdmin"
import {ContentGesMedi} from "../../layouts/contentGesMed/medicamentos"
import {ContentGesUsu} from "../../layouts/contentGesUsu/usuarios"

export const Home = () => {

    const {currentPage} = usePage();

    

    return (
        <>
        <div className="home-container">
            <Navbar/>
            {currentPage === "med" && <ContentMed/>}
            {currentPage === "rec" && <ContentRecet/>}
            {currentPage === "ven" && <ContentVen/>}
            {currentPage === "admin" && <MenuAdmin/>}
            {currentPage === "medGes" && <ContentGesMedi/>}
            {currentPage === "usuGes" && <ContentGesUsu/>}
        </div>
        </>
    )

}