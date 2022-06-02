import './styles/RegisterTable.css';

const RegisterTable = ({onDismiss}) => {
    // Handlers
    const dismissHandler = () => {
        onDismiss();
    }
    const propagationHandler = e => e.stopPropagation();

    return (
        <div className="dialog__container" onClick={dismissHandler}>
            <div onClick={propagationHandler} className='dialog' role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
                <h2 className="dialog-title"> Registrar nueva mesa</h2>
                <p className='dialog-desc' id="dialogTitle">  </p>
                <p className='dialog-desc' id="dialogDesc">  </p>
                <p className='dialog-desc' id="dialogDesc">  </p>
                <p className='dialog-desc' id="dialogDesc">  </p>
                <p className='dialog-desc' id="dialogDesc">  </p>
            </div>
        </div>
    )
}

export default RegisterTable;