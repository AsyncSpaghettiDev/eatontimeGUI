import './styles/AddPlate.css';

// Components
import Transition from '../Components/Transition.jsx';
import MenuPreview from '../Components/MenuPreview.jsx';

// Imports
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AddPlate = () => {
    // Hooks
    let navigate = useNavigate();
    let { state } = useLocation();
    const [table, setTable] = useState();
    const [step, setStep] = useState({ one: true, two: false, three: false });

    // Redirect on null table
    useEffect(() => {
        state === null ? navigate('/') : setTable(state.tableID);
    }, [state, navigate]);

    return (
        <main className="AddPlate">
            <Transition duration='0s' />
            <h2 className="order-title">{`Orden de la mesa #${table}`}</h2>
            <form onSubmit={(e) => e.preventDefault()} className="order">
                <div className={step.one ? 'step-one active' : 'step-one'}>
                    <MenuPreview triggerStep={setStep} />
                </div>
                <div className={step.two ? 'step-two active' : 'step-two'}>
                    
                </div>
                <div className={step.three ? 'step-three active' : 'step-three'}>
                    
                </div>
            </form>
        </main>
    )
}

export default AddPlate;