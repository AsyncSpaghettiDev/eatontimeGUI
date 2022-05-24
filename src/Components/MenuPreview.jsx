// Data
import FullMenu from "../Data/menu.json";

// Imports
import { useEffect, useState } from "react";

// Components
import MenuPlate from '../Components/MenuPlate.jsx';

// Styles
import "./styles/MenuPreview.css";

const MenuPreview = ({ onTriggerStep, onSelectedPlate, onShow, confirmStatus }) => {
    // Hooks
    const [plates, setPlates] = useState([]);

    // UseEffect
    useEffect(() => {
        setPlates(FullMenu);
    }, []);

    useEffect(() => {
        if(confirmStatus) confirmTrigger();
    },[confirmStatus])

    // Event Handlers
    const confirmTrigger = () => {
        onTriggerStep({ one: -1, two: 1, three: 0 });
    }

    const showConfirmHandler = (selectedId) => {
        onShow(true);
        onSelectedPlate(FullMenu.find(plate => plate.id === selectedId));
    }

    return (
        <div className="menu__preview">
            <h1 className="menu__title">EatOnTime Menu</h1>
            {plates.map(
                plate =>
                    <MenuPlate
                        key={plate.id}
                        id={plate.id}
                        img={plate.img}
                        name={plate.name}
                        price={plate.price}
                        description={plate.description}
                        onAsk={showConfirmHandler}
                    />)
            }
        </div>
    )
}

export default MenuPreview;