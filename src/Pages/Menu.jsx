// Data
import FullMenu from "../Data/menu.json";
import PizzasMenu from '../Data/pizzas.json';
import DessertsMenu from '../Data/desserts.json';

// Imports
import { useEffect, useState } from "react";

// Components
import NavBar from '../Components/NavBar.jsx';
import MenuPlate from '../Components/MenuPlate.jsx';
import Transition from '../Components/Transition.jsx';

// Styles
import "./styles/Menu.css";

const Menu = () => {
    // Hooks
    const [pizzas, setPizzas] = useState([]);
    const [desserts, setDesserts] = useState([]);

    // UseEffect
    useEffect(() => {
        setPizzas(PizzasMenu);
        setDesserts(DessertsMenu);
    }, []);

    return (
        <main className="menu">
            <NavBar />
            <h1 className="menu__title">EatOnTime Menu</h1>
            <div className="plates">
                <p className="plates-title">Pizzas</p>
                {pizzas.map(
                    pizza =>
                        <MenuPlate
                            key={pizza.id}
                            img={pizza.img}
                            name={pizza.name}
                            description={pizza.description}
                        />)
                }
                <p className="plates-title">Postres</p>
                {desserts.map(
                    dessert =>
                        <MenuPlate
                            key={dessert.id}
                            img={dessert.img}
                            name={dessert.name}
                            description={dessert.description}
                        />)
                }
            </div>
            <Transition duration='0s' />
        </main>
    )
}

export default Menu;