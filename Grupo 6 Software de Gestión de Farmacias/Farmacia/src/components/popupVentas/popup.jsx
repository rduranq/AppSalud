import "./popup.css"
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from 'firebase/firestore';



export const PopupVenta = ({ id, mostrar, set, setUpdate, update, nombreCliente, ci, direccion, numero, totalLetras, total, fecha, productos }) => {

    const [CI, setCI] = useState(ci);
    const [Direccion, setDireccion] = useState(direccion);
    const [Fecha, setFecha] = useState(fecha);
    const [NombreCliente, setNombreCliente] = useState(nombreCliente);
    const [Numero, setNumero] = useState(numero);
    const [Total, setTotal] = useState(total);
    const [TotalLetras, setTotalLetras] = useState(totalLetras);
    const [Productos, setProductos] = useState(productos)

    const handleClose = () => {
        set(false);
        setUpdate(false);
    };

    console.log(update);

    

    const handleSubmit = async (e) => {

        e.preventDefault();
        // Crea un objeto Timestamp para Fecha

        const ventaDoc = doc(db, 'Ventas', id);
        try {
            await updateDoc(ventaDoc, {

                CI: CI,
                Direccion: Direccion,
                NombreCliente: NombreCliente, // El valor de "NombreCliente" se establece según la selección del usuario
                Numero: Numero,
                Total: Total,
                TotalLetras: totalLetras,
                productos: Productos

            });
            setCI("");
            setDireccion("");
            //setFecha("");
            setNombreCliente(""); // Establecer el valor predeterminado de "NombreCliente" como "post"
            setNumero(0);
            setTotal(0);
            setTotalLetras("");
            setProductos("");

            console.log('Documento actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar documento:', error);
        }
    };





    return (mostrar === true &&
        <div className={
            mostrar === true ? "popup-box-active-venta" : "popup-box-unactive-venta"
        }>
            {update === true ?
                <div className="box-venta">
                    <div>
                        <span className="close-icon" onClick={handleClose}>x</span>
                    </div>
                    <form className="news-form-ventas" onSubmit={handleSubmit}>
                        <div className="grid-form-ventas">
                            <div className="datos">
                                <label htmlFor="numero">Numero de la venta:</label>
                                <input
                                    className="input_edit_venta"
                                    type="text"
                                    id="numero"
                                    value={Numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="datos"><label htmlFor="nombreCliente">Nombre del cliente:</label>
                                <input
                                    className="input_edit_venta"
                                    type="text"
                                    id="nombreCliente"
                                    value={NombreCliente}
                                    onChange={(e) => setNombreCliente(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="datos"><label htmlFor="CI">CI o NIT:</label>
                                <input
                                    className="input_venta"
                                    placeholder="CI o Nit"
                                    type="text"
                                    id="CI"
                                    value={CI}
                                    onChange={(e) => setCI(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="datos"><label htmlFor="Direccion">Direccion:</label>
                                <input
                                    className="input_venta"
                                    type="text"
                                    placeholder="Direccion"
                                    id="Direccion"
                                    value={Direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                            <div className="datos"><label htmlFor="Total-letras">Total en letras:</label>
                                <input
                                    className="input_totalLetras"
                                    type="text"
                                    id="Total-letras"
                                    placeholder="Total en letras"
                                    value={TotalLetras}
                                    onChange={(e) => setTotalLetras(e.target.value)}
                                    required
                                /></div>
                            <div className="datos"><label htmlFor="Total">Total:</label>
                                <input
                                    className="input_venta"
                                    type="Number"
                                    id="Total"
                                    placeholder="Total"
                                    value={Total}
                                    onChange={(e) => setTotal(e.target.value)}
                                    required
                                />
                            </div>
                        <div className="datos"><label htmlFor="productos">Productos vendidos:</label>
                            <textarea
                                className="texto"
                                id="productos"
                                cols="30"
                                rows="10"
                                value={Productos}
                                onChange={(e) => setProductos(e.target.value)}
                                required
                            >

                            </textarea></div>
                        <div className="datos"><b>Fecha de creacion de la venta: </b>{fecha}</div>
                        <button className="button-venta" type="submit"> Actualizar Venta</button>
                    </form>
                </div> :

                <div className="box-venta">
                    <div>
                        <span className="close-icon" onClick={handleClose}>x</span>
                    </div>
                    <div className="datos"><b>Numero:</b>{numero}</div>
                    <div className="datos"><b>Nombre del cliente: </b>{nombreCliente}</div>
                    <div className="datos"><b>Carnte o Nit: </b>{ci}</div>
                    <div className="datos"><b>Direccion del cliente: </b>{direccion}</div>
                    <div className="datos"><b>Total a pagar en letras: </b>{totalLetras}</div>
                    <div className="datos"><b>Total: </b>{total}</div>
                    <div className="datos"><b>Productos: </b>{productos}</div>
                    <div className="datos"><b>Fecha de creacion de la venta: </b>{fecha}</div>
                </div>}

        </div>
    );
}