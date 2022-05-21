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
    const [step, setStep] = useState({ });
    const [currentPlate, setCurrentPlate] = useState(undefined);

    // Redirect on null table
    useEffect(() => {
        state === null ? navigate('/') : setTable(state.tableID);
        setStep({ one: 1, two: 0, three: 0 });
    }, [state, navigate]);

    useEffect(() => {
        console.log(currentPlate);
    },[currentPlate])
    return (
        <main className="add_plate">
            <Transition duration='0s' />
            <h2 className="order-title">{`Orden de la mesa #${table}`}</h2>
            <form onSubmit={(e) => e.preventDefault()} className="order">
                <div className={step.one ? step.one === -1 ? 'step fade' : 'step active' : 'step'}>
                    <MenuPreview onTriggerStep={setStep} onSelectedPlate={setCurrentPlate} />
                </div>
                <div className={step.two ? step.two === -1 ? 'step fade' : 'step active' : 'step'}>

                </div>
                <div className={step.three ? step.three === -1 ? 'step fade' :  'step active' : 'step'}>
                    
                </div>
            </form>
        </main>
    )
}

export default AddPlate;