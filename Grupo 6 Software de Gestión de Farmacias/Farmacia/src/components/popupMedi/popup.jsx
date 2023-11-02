import "./popup.css"
import { useEffect, useState } from "react";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from 'firebase/firestore';


export const PopupMedicamento = ({ mostrar, set, update, setUpdate, id, nro, precio, dosificacion, indicaciones, efectosSecundarios, nroLote, instruccionesAlmacenamiento, marca, descripcion, nombre, dosis, viaAdministracion, contradicciones, fechaVencimiento, nombreFabricante, interaccionesMedicamentosas, img, tipo }) => {

    const handleClose = () => {
        set(false);
        setUpdate(false);
    };

    const [Nombre, setNombre] = useState(nombre);
    const [Dosis, setDosis] = useState(dosis);
    const [Forma_dosi, setForma_dosi] = useState(dosificacion);
    const [Via_admi, setVia_admi] = useState(viaAdministracion);
    const [Indicaciones, setIndicaciones] = useState(indicaciones);
    const [Contradicciones, setContradicciones] = useState(contradicciones);
    const [Efect_secun, setEfect_secun] = useState(efectosSecundarios);
    const [Fecha_vencimiento, setFecha_vencimiento] = useState(fechaVencimiento);
    const [NroLote, setNroLote] = useState(nroLote);
    const [Nombre_fabri, setNombre_fabri] = useState(nombreFabricante);
    const [Almacenamiento, setAlmacenamiento] = useState(instruccionesAlmacenamiento);
    const [Itera_medi, setItera_medi] = useState(interaccionesMedicamentosas);
    const [Marca, setMarca] = useState(marca);
    const [Img_medi, setImg_medi] = useState(img);
    const [Descripcion, setDescripcion] = useState(descripcion);
    const [Precio, setPrecio] = useState(precio);
    const [Nro, setNro] = useState(nro);
    const [Tipo, setTipo] = useState(tipo);



    const handleSubmit = async (e) => {

        e.preventDefault();
        // Crea un objeto Timestamp para Fecha
        const medicamentoDoc = doc(db, 'Medicamentos', id);
        try {
            await updateDoc(medicamentoDoc, {

                Nro: Nro,
                Nombre: Nombre,
                Dosis: Dosis,
                Forma_dosi: Forma_dosi,
                Via_admi: Via_admi,
                Indicaciones: Indicaciones,
                Contradicciones: Contradicciones,
                Efect_secun: Efect_secun,
                Fecha_vencimiento: Fecha_vencimiento,
                NroLote: NroLote,
                Nombre_fabri: Nombre_fabri,
                Almacenamiento: Almacenamiento,
                Itera_medi: Itera_medi,
                Marca: Marca,
                Img_medi: Img_medi,
                Descripcion: Descripcion,
                Precio: Precio,
                Tipo: Tipo

            });
            setNro(0);
            setNombre("");
            setDosis("");
            setForma_dosi("");
            setVia_admi("");
            setIndicaciones("");
            setContradicciones("");
            setEfect_secun("");
            setFecha_vencimiento("");
            setNroLote("");
            setNombre_fabri("");
            setAlmacenamiento("");
            setItera_medi("");
            setMarca("");
            setImg_medi("");
            setDescripcion("");
            setPrecio("");
            setTipo("");

            console.log('Documento actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar documento:', error);
        }
    };


    return (mostrar === true &&
        <div className={
            mostrar === true ? "popup-box-active-medicamento" : "popup-box-unactive-medicamento"
        }>

            {update === true ?
                <div className="box-medicamento-ges">
                    <div>
                        <span className="close-icon" onClick={handleClose}>x</span>
                    </div>
                    <div className="datos-med-popup">

                        <form className="news-form-medi" onSubmit={handleSubmit}>


                            <label htmlFor="NroMedi">Nro del Medicamento:</label>
                            <input

                                type="Number"
                                id="NroMedi"
                                value={Nro}
                                onChange={(e) => setNro(e.target.value)}
                                required
                            />


                            <label htmlFor="NombreMedi">Nombre del Medicamento:</label>
                            <input

                                type="text"
                                id="NombreMedi"
                                value={Nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                            <label htmlFor="PrecioMedi">Precio del Medicamento:</label>
                            <input

                                type="number"
                                id="PrecioMedi"
                                value={Precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                required
                            />


                            <label htmlFor="Dosis">Dosis:</label>
                            <input


                                type="text"
                                id="Dosis"
                                value={Dosis}
                                onChange={(e) => setDosis(e.target.value)}
                                required
                            />


                            <label htmlFor="Forma_dosi">Forma de dosificacion:</label>
                            <input


                                type="text"
                                id="Forma_dosi"
                                value={Forma_dosi}
                                onChange={(e) => setForma_dosi(e.target.value)}
                                required
                            />



                            <label htmlFor="Via_admi">Vía de Administración:</label>
                            <input
                                type="text"
                                id="Via_admi"
                                value={Via_admi}
                                onChange={(e) => setVia_admi(e.target.value)}
                                required
                            />


                            <label htmlFor="Indicaciones">Indicaciones:</label>
                            <input
                                type="text"
                                id="Indicaciones"
                                value={Indicaciones}
                                onChange={(e) => setIndicaciones(e.target.value)}
                                required
                            />

                            <label htmlFor="Contradicciones">Contradicciones:</label>
                            <input
                                type="text"
                                id="Contradicciones"
                                value={Contradicciones}
                                onChange={(e) => setContradicciones(e.target.value)}
                                required
                            />

                            <label htmlFor="Efect_secun">Efectos Secundarios:</label>
                            <input
                                type="text"
                                id="Efect_secun"
                                value={Efect_secun}
                                onChange={(e) => setEfect_secun(e.target.value)}
                                required
                            />

                            <label htmlFor="Fecha_vencimiento">Fecha de Vencimiento:</label>
                            <input
                                type="date"
                                id="Fecha_vencimiento"
                                value={Fecha_vencimiento}
                                onChange={(e) => setFecha_vencimiento(e.target.value)}
                                required
                            />

                            <label htmlFor="NroLote">Número de Lote:</label>
                            <input
                                type="number"
                                id="NroLote"
                                value={NroLote}
                                onChange={(e) => setNroLote(e.target.value)}
                                required
                            />

                            <label htmlFor="Nombre_fabri">Nombre del Fabricante:</label>
                            <input
                                type="text"
                                id="Nombre_fabri"
                                value={Nombre_fabri}
                                onChange={(e) => setNombre_fabri(e.target.value)}
                                required
                            />

                            <label htmlFor="Almacenamiento">Instrucciones de Almacenamiento:</label>
                            <input
                                type="text"
                                id="Almacenamiento"
                                value={Almacenamiento}
                                onChange={(e) => setAlmacenamiento(e.target.value)}
                                required
                            />

                            <label htmlFor="Itera_medi">Interacciones con otros medicamentos:</label>
                            <input
                                type="text"
                                id="Itera_medi"
                                value={Itera_medi}
                                onChange={(e) => setItera_medi(e.target.value)}
                                required
                            />

                            <label htmlFor="Marca">Marca:</label>
                            <input
                                type="text"
                                id="Marca"
                                value={Marca}
                                onChange={(e) => setMarca(e.target.value)}
                                required
                            />

                            <label htmlFor="Img_medi">Imagen del Medicamento:</label>
                            <input
                                type="text"
                                id="Img_medi"
                                value={Img_medi}
                                onChange={(e) => setImg_medi(e.target.value)}
                                required
                            />

                            <label htmlFor="Descripcion">Descripción:</label>
                            <input
                                type="text"
                                id="Descripcion"
                                value={Descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                required
                            />
                            <label htmlFor="TipoMedi">Tipo del Medicamento:</label>
                            <select
                                id="TipoMedi"
                                value={Tipo}
                                onChange={(e) => setTipo(e.target.value)}
                                required
                            >
                                <option value="venta libre">Venta Libre</option>
                                <option value="con receta">Con receta</option>
                                <option value="genericos y de marca">Genericos y de marca</option>
                                <option value="venta controlada">Venta controlada</option>
                                <option value="Suplementos dieteticos y vitaminicos">Suplementos dieteticos y vitaminicos</option>
                                <option value="homeopaticos">Homeopaticos</option>
                                <option value="Vacunas y productos biologicos">Vacunas y productos biologicos</option>
                                <option value="cuidados paulativos">Cuidados paulativos</option>
                                <option value="epecialidad">Epecialidad</option>
                                <option value="uso topico">Uso topico</option>
                            </select>
                            <br />
                            <button className="button-medi" type="submit">
                                Editar Medicamento
                            </button>

                        </form>
                    </div>

                </div>

                :

                <div className="box-medicamento-ges">
                    <div>
                        <span className="close-icon" onClick={handleClose}>x</span>
                    </div>
                    <div className="datos-med-popup">

                        <div className="datos"><b>Número:</b> {nro}</div>
                        <div className="datos"><b>Número de Lote:</b> {nroLote}</div>
                        <div className="datos"><b>Precio:</b> {precio}</div>
                        <div className="datos"><b>Nombre:</b> {nombre}</div>
                        <div className="datos"><b>Descripción:</b> {descripcion}</div>
                        <div className="datos"><b>Dosis:</b> {dosis}</div>
                        <div className="datos"><b>Dosificación:</b> {dosificacion}</div>
                        <div className="datos"><b>Indicaciones:</b> {indicaciones}</div>
                        <div className="datos"><b>Marca:</b> {marca}</div>
                        <div className="datos"><b>Tipo:</b> {tipo}</div>
                        <div className="datos"><b>Efectos Secundarios:</b> {efectosSecundarios}</div>
                        <div className="datos"><b>Instrucciones de Almacenamiento:</b> {instruccionesAlmacenamiento}</div>
                        <div className="datos"><b>Vía de Administración:</b> {viaAdministracion}</div>
                        <div className="datos"><b>Contraindicaciones:</b> {contradicciones}</div>
                        <div className="datos"><b>Fecha de Vencimiento:</b> {fechaVencimiento}</div>
                        <div className="datos"><b>Nombre del Fabricante:</b> {nombreFabricante}</div>
                        <div className="datos"><b>Interacciones Medicamentosas:</b> {interaccionesMedicamentosas}</div>

                        <div className="datos"><b>Imagen del medicamento:</b><img src={img} alt="" width={200} height={200} /> </div>
                    </div>

                </div>
            }

        </div>
    );
}