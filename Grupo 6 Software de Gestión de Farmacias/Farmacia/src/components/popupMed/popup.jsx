import "./popup.css"

export const PopupMed = ({content, mostrar, set}) => {

    const handleClose = () => {
        set(false);
    };

    return ( mostrar === true &&
        <div className={
            mostrar === true ? "popup-box-active" : "popup-box-unactive"
        }>
            <div className="box">
                <div>
                    <span className="close-icon" onClick={handleClose}>x</span>
                </div>  
                <div className="descripcion">{content}</div>  
            </div>
        </div>
    );
}

