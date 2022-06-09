// Style
import './styles/PlateStatusModal.css';

const PlateStatusModal = ({ origin, data, onDismiss }) => {
    // Handlers
    const dismissHandler = () => {
        onDismiss();
    }
    const propagationHandler = e => e.stopPropagation();

    // Render section
    return (
        <div className="dialog__container" onClick={dismissHandler}>
            <div onClick={propagationHandler} className='dialog' role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
                <h2 className="dialog-title"> {`Orden de la mesa #${origin}`} </h2>
                <p className='dialog-desc' id="dialogTitle"> {`Nombre del platillo: ${data.ProductName}`} </p>
                <p className='dialog-desc' id="dialogDesc"> {`Costo: $${Number(data.UnitPrice).toFixed(2)} MXN`} </p>
                <p className='dialog-desc' id="dialogDesc"> {`Cantidad: ${data.QtyPO} pzs`} </p>
                <p className='dialog-desc' id="dialogDesc"> {`Hora de la orden: ${data.CreatedOn}`} </p>
                <p className='dialog-desc' id="dialogDesc"> {`Estado actual: ${data.Served === 'FALSE' ? 'No servido' : 'Servido'}`} </p>
            </div>
        </div>
    )
}

export default PlateStatusModal;