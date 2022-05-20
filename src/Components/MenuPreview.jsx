// Data
import FullMenu from "../Data/menu.json";

// Imports
import { useEffect, useState } from "react";

// Components
import MenuPlate from '../Components/MenuPlate.jsx';

// Styles
import "./styles/MenuPreview.css";

const MenuPreview = ({ triggerStep }) => {
    const [plates, setPlates] = useState([]);
    // UseEffect
    useEffect(() => {
        setPlates(FullMenu);
    }, [])

    // Event Handlers
    const handlerTrigger = () => {
        triggerStep({ one: false, two: true, three: false})
    }
    return (
        <div className="menu__preview">
            <h1 className="menu__title">EatOnTime Menu</h1>
            {plates.map(plate => <MenuPlate key={plate.id} img={plate.img} name={plate.name} price={plate.price} description={plate.description} onConfirm={handlerTrigger} />)}
        </div>
    )
}

export default MenuPreview;