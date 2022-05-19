import './styles/ConfirmBill.css';

import { useLocation, useNavigate } from "react-router-dom";

const ConfirmBill = () => {
    // Hooks
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="dialog__container">
            <div className='dialog' role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
                <h2 className='dialog-title' id="dialogTitle"> {`Pedir Cuenta Mesa #${state.tableID}`} </h2>
                <p className='dialog-desc' id="dialogDesc">¿Desea solicitar la cuenta de la mesa?</p>
                <div className="dialog-response">
                    <button onClick={handleReturn} className='dialog-btn dialog-confirm'> Sí </button>
                    <button onClick={handleReturn} className='dialog-btn dialog-cancel'> Cancelar </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmBill;