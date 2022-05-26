import './styles/OrderLoader.css';
import { useEffect } from "react";

const OrderLoader = ({ onFocus, onTriggerStep }) => {
    useEffect(() => {
        if(onFocus) setTimeout(() => onTriggerStep({ one: 0, two: 0, three: -1, four: 1 }), 4000)
    }, [onFocus]);

    return (
        <div className="order-loader">
            <span className="loader-ball"></span>
            <span className="loader-ball"></span>
            <span className="loader-ball"></span>
            <span className="loader-text">Generando Pedido</span>
        </div>
    )
}

export default OrderLoader;