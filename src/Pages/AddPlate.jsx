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
    const [step, setStep] = useState({});
    const [currentPlate, setCurrentPlate] = useState(undefined);
    const { showModal, setShowConfirm, confirmResponse, resetResponse } = useConfirmModal();

    // Redirect on null table
    useEffect(() => {
        state === null ? navigate('/') : setTable(state.tableID);
        setStep({ one: 1, two: 0, three: 0 });
    }, [state, navigate]);

    useEffect(() => {
        if (step.one === -1) window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }, [step]);

    return (
        <section className="add_plate">
            <h2 className="order-title">{`Orden de la mesa #${table}`}</h2>
            <form onSubmit={(e) => e.preventDefault()} className="order">
                <div className={step.one ? step.one === -1 ? 'step fade' : 'step active' : 'step'} >
                    <MenuPreview
                        onTriggerStep={setStep}
                        onSelectedPlate={setCurrentPlate}
                    />
                </div>
                <div className={step.two ? step.two === -1 ? 'step fade' : 'step active' : 'step'}>
                    {currentPlate !== undefined ? <CustomizePlate
                        id={currentPlate.id}
                        img={currentPlate.img}
                        name={currentPlate.name}
                        price={currentPlate.price}
                        description={currentPlate.description}
                        onShow={setShowConfirm}
                        onTriggerStep={setStep}
                        resetModal={resetResponse}
                        confirmStatus={confirmResponse}
                    /> : null}
                </div>
                <div className={step.three ? step.three === -1 ? 'step fade' : 'step active' : 'step'}>
                    
                    <button className='reload-menu' onClick={() => setStep({ one: 1, two: 0, three: -1 })}>Volver al menú</button>
                </div>

            </form>
            {showModal(currentPlate !== undefined ? `¿Desea ordenar ${currentPlate.name}?` : "Contact support for help")}
            <Transition duration='0s' />
        </section>
    )
}

export default AddPlate;