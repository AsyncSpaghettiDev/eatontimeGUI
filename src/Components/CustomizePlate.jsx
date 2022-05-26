import './styles/CustomizePlate.css';

import useCounter from '../CustomHooks/useCounter';
import { useEffect } from 'react';

const CustomizePlate = ({ img, name, price, description, onShow, confirmStatus, onTriggerStep, resetModal }) => {
    const { counter, increase, decrease, greaterOne } = useCounter();

    useEffect(() => {
        if (confirmStatus){
            confirmTrigger();
            resetModal();
        }
    }, [confirmStatus])

    // Event Handlers
    const showConfirmHandler = () => {
        onShow(true);
    }
    
    const confirmTrigger = () => {
        onTriggerStep({ one: 0, two: -1, three: 1 });
    }
    return (
        <div className="customize__plate">
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-price"> {`$${price} MXN`} </p>
            <p className="plate-desc"> {description} </p>
            <div className="plate__counter">
                <button onClick={decrease} className="plate__counter-btn" disabled={(!greaterOne())} >-</button>
                <output className="plate__counter-res">{counter.toString().padStart(2,0)}</output>
                <button onClick={increase} className="plate__counter-btn">+</button>
            </div>
            <button className="plate-confirm" onClick={showConfirmHandler} >Ordenar</button>
            <button className='reload-menu' onClick={() => onTriggerStep({ one: 1, two: -1, three: 0 })}>Volver al menú</button>
        </div>
    )
}

export default CustomizePlate;