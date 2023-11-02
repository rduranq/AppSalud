import "./popup.css"
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from 'firebase/firestore';


export const PopupReceta = ({ mostrar, set, update, setUpdate, id, nro, nombrePaciente, nombreFarmacia, nombreDoctor, carnet, fecha, diagnosticoMedi, edad, peso, temperatura, medicamentos }) => {

    const handleClose = () => {
        set(false);
        setUpdate(false);
    };

    //console.log(update);

    const [NombreDoctor,setNombreDoctor] =useState(nombreDoctor);
    const [NombrePaciente,setNombrePaciente] =useState(nombrePaciente);
    const[Edad, setEdad]=useState(edad);
    const[Temperatura, setTemperatura]=useState(temperatura);
    const[Peso, setPeso]=useState(peso);
    const[Fecha, setFecha]=useState(fecha);
    const[DiagnosticoMedi, setDiagnosticoMedi]=useState(diagnosticoMedi);
    const[Medicamentos, setMedicamentos]=useState(medicamentos);

    const[Nro,setNro]=useState(nro);
    const[NombreFarmacia,setNombreFarmacia]=useState(nombreFarmacia);
    const[Carnet,setCarnet]= useState(carnet);



    const handleSubmit = async (e) => {

        e.preventDefault();
        // Crea un objeto Timestamp para Fecha
        const recetaDoc = doc(db, 'Recetas', id);
        try {
            await updateDoc(recetaDoc, {

                NombreDoctor: NombreDoctor,
                NombrePaciente: NombrePaciente,
                Edad:Edad,
                Temperatura: Temperatura,
                Peso: Peso,// Almacena la fecha como Timestamp
                DiagnosticoMedi: DiagnosticoMedi,
                Medicamentos: Medicamentos,
        
                Nro: Nro,
                NombreFarmacia: NombreFarmacia,
                Carnet: Carnet

            });
            setNombreDoctor('');
            setNombrePaciente('');
            setEdad('');
            setTemperatura('');
            setPeso('');
            setFecha('');
            setDiagnosticoMedi('');
            setMedicamentos('');
            setNro("");
            setNombreFarmacia("");
            setCarnet("");

            console.log('Documento actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar documento:', error);
        }
    };

    return (mostrar === true &&
        <div className={
            mostrar === true ? "popup-box-active-receta" : "popup-box-unactive-venta"
        }>
            {update === true ?
                <div className="box-receta">
                     <div>
                        <span className="close-icon" onClick={handleClose}>x</span>
                    </div>
                    <form className="news-form-receta" onSubmit={handleSubmit}>

                        <div className="grid-form-ventas">
                            <label htmlFor="NombreDoctor">Nombre del Doctor:</label>
                            <input
                                className="input-2"
                                type="text"
                                id="NombreDoctor"
                                value={NombreDoctor}
                                onChange={(e) => setNombreDoctor(e.target.value)}
                                required
                            />
                        </div>

                        <div className="content-receta">
                            <label htmlFor="NombrePaciente">Nombre del Paciente:</label>
                            <input
                                className="input-2"
                                type="text"
                                id="NombrePaciente"
                                value={NombrePaciente}
                                onChange={(e) => setNombrePaciente(e.target.value)}
                                required
                            />
                        </div>

                        <div className="content-receta">
                            <label htmlFor="NombreFarmacia">Nombre de la Farmacia:</label>
                            <input
                                className="input-2"
                                type="text"
                                id="NombreFarmacia"
                                value={NombreFarmacia}
                                onChange={(e) => setNombreFarmacia(e.target.value)}
                                required
                            />
                        </div>

                        <div className="content-receta">

                            <label htmlFor="Nro">Número:</label>
                            <input
                                className="input-1"
                                type="number"
                                id="Nro"
                                value={Nro}
                                onChange={(e) => setNro(e.target.value)}
                                required
                            />
                            <label htmlFor="Carnet">Carnet:</label>
                            <input
                                className="input-1"
                                type="text"
                                id="Carnet"
                                value={Carnet}
                                onChange={(e) => setCarnet(e.target.value)}
                                required
                            />
                            <label htmlFor="Edad">Edad:</label>
                            <input
                                className="input-1"
                                type="number"
                                id="Edad"
                                value={Edad}
                                onChange={(e) => setEdad(e.target.value)}
                                required
                            />
                            <label htmlFor="Temperatura">Temperatura:</label>
                            <input
                                className="input-1"
                                type="text"
                                id="Temperatura"
                                value={Temperatura}
                                onChange={(e) => setTemperatura(e.target.value)}
                                required
                            />
                            <label htmlFor="Peso">Peso:</label>
                            <input
                                className="input-1"
                                type="text"
                                id="Peso"
                                value={Peso}
                                onChange={(e) => setPeso(e.target.value)}
                                required
                            />

                        </div>

                        <div className="content-receta">
                            <label htmlFor="DiagnosticoMedi">Diagnóstico Médico:</label>
                            <input
                                className="input-2"
                                type="text"
                                id="DiagnosticoMedi"
                                value={DiagnosticoMedi}
                                onChange={(e) => setDiagnosticoMedi(e.target.value)}
                                required
                            />
                        </div>

                        <div className="content-receta">
                            <label htmlFor="Medicamentos">Medicamentos:</label>
                            <input
                                className="input-2"
                                type="text"
                                id="Medicamentos"
                                value={Medicamentos}
                                onChange={(e) => setMedicamentos(e.target.value)}
                                required
                            />
                        </div>

                        <button className="button-medi" type="submit">
                            Actualizar Receta
                        </button>

                    </form>
                </div> :
                <div className="box-receta">
                    <div>
                        <span className="close-icon" onClick={handleClose}>x</span>
                    </div>
                    <div className="datos"><b>Número de consulta:</b> {nro}</div>
                    <div className="datos"><b>Nombre del paciente:</b> {nombrePaciente}</div>
                    <div className="datos"><b>Nombre de la farmacia:</b> {nombreFarmacia}</div>
                    <div className="datos"><b>Nombre del doctor:</b> {nombreDoctor}</div>
                    <div className="datos"><b>Carnet:</b> {carnet}</div>
                    <div className="datos"><b>Fecha de consulta:</b> {fecha}</div>
                    <div className="datos"><b>Diagnóstico médico:</b> {diagnosticoMedi}</div>
                    <div className="datos"><b>Edad:</b> {edad}</div>
                    <div className="datos"><b>Peso:</b> {peso}</div>
                    <div className="datos"><b>Temperatura:</b> {temperatura}</div>
                    <div className="datos"><b>Medicamentos:</b> {medicamentos}</div>
                </div>
            }

        </div>
    );
}