// Data
import FullMenu from "../Data/menu.json";

// Imports
import { useEffect, useState } from "react";

// Components
import MenuPlate from '../Components/MenuPlate.jsx';

// Custom Hooks
import useConfirmModal from '../CustomHooks/useConfirmModal';

// Styles
import "./styles/MenuPreview.css";

const MenuPreview = ({ onTriggerStep, onSelectedPlate }) => {
    // Hooks
    const [plates, setPlates] = useState([]);
    const { showModal, setShowConfirm, confirmResponse } = useConfirmModal();

    // UseEffect
    useEffect(() => {
        setPlates(FullMenu);
    }, [])

    // Event Handlers
    const handlerTrigger = (selectedId) => {
        onTriggerStep({ one: -1, two: 1, three: 0 });
        onSelectedPlate(FullMenu.find(plate => plate.id === selectedId));
    }

    const showConfirmHandler = () => setShowConfirm(true);

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
                        onConfirm={handlerTrigger}
                        onAsk={showConfirmHandler}
                    />)
            }
            {showModal()}
        </div>
    )
}

export default MenuPreview;