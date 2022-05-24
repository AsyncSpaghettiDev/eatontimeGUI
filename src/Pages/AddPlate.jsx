import './styles/AddPlate.css';

// Components
import Transition from '../Components/Transition.jsx';
import MenuPreview from '../Components/MenuPreview.jsx';
import CustomizePlate from '../Components/CustomizePlate.jsx';

// Imports
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Custom Hooks
import useConfirmModal from '../CustomHooks/useConfirmModal';

const AddPlate = () => {
    // Hooks
    let navigate = useNavigate();
    let { state } = useLocation();
    const [table, setTable] = useState();
    const [step, setStep] = useState({ });
    const [currentPlate, setCurrentPlate] = useState(undefined);
    const { showModal, setShowConfirm, confirmResponse } = useConfirmModal();

    // Redirect on null table
    useEffect(() => {
        state === null ? navigate('/') : setTable(state.tableID);
        setStep({ one: 1, two: 0, three: 0 });
    }, [state, navigate]);

    useEffect(() => {
        if(currentPlate !== undefined) console.log(currentPlate);
    },[currentPlate]);

    return (
        <main className="add_plate">
            <Transition duration='0s' />
            <h2 className="order-title">{`Orden de la mesa #${table}`}</h2>
            <form onSubmit={(e) => e.preventDefault()} className="order">
                <div className={step.one ? step.one === -1 ? 'step fade' : 'step active' : 'step'}>
                    <MenuPreview onTriggerStep={setStep} onSelectedPlate={setCurrentPlate} onShow={setShowConfirm} confirmStatus={confirmResponse} />
                </div>
                <div className={step.two ? step.two === -1 ? 'step fade' : 'step active' : 'step'}>
                    <button onClick={() => window.location.reload()}>Volver al menú</button>
                    {currentPlate !== undefined ? <CustomizePlate
                        id={currentPlate.id}
                        img={currentPlate.img}
                        name={currentPlate.name}
                        price={currentPlate.price}
                        description={currentPlate.description}
                    /> : null}
                </div>
                <div className={step.three ? step.three === -1 ? 'step fade' :  'step active' : 'step'}>
                    
                </div>

            </form>
            {showModal(currentPlate !== undefined ? `¿Desea ordenar ${currentPlate.name}?` : "Contact support for help")}
        </main>
    )
}

export default AddPlate;