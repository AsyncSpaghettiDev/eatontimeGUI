// Data
import FullMenu from "../Data/menu.json";
import PizzasMenu from '../Data/pizzas.json'
import DessertsMenu from '../Data/desserts.json'

// Imports
import { useEffect, useState } from "react";

// Components
import MenuOrderPlate from '../Components/MenuOrderPlate.jsx';

// Styles
import "./styles/MenuPreview.css";

const MenuPreview = ({ onTriggerStep, onSelectedPlate, onShow, confirmStatus }) => {
    // Hooks
    const [pizzas, setPizzas] = useState([]);
    const [desserts, setDesserts] = useState([]);

    // UseEffect
    useEffect(() => {
        setPizzas(PizzasMenu);
        setDesserts(DessertsMenu);
    }, []);

    useEffect(() => {
        if (confirmStatus) confirmTrigger();
    }, [confirmStatus])

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
            <p className="plates-title">Pizzas</p>
            {pizzas.map(
                pizza =>
                    <MenuOrderPlate
                        key={pizza.id}
                        id={pizza.id}
                        img={pizza.img}
                        name={pizza.name}
                        price={pizza.price}
                        description={pizza.description}
                        onAsk={showConfirmHandler}
                    />)
            }
            <p className="plates-title">Postres</p>
            {desserts.map(
                dessert =>
                    <MenuOrderPlate
                        key={dessert.id}
                        id={dessert.id}
                        img={dessert.img}
                        name={dessert.name}
                        price={dessert.price}
                        description={dessert.description}
                        onAsk={showConfirmHandler}
                    />)
            }
        </div>
    )
}

export default MenuPreview;