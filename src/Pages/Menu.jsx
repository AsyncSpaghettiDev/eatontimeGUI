// Data
// import FullMenu from "../Data/menu.json";
import PizzasMenu from '../Data/pizzas.json';
import DessertsMenu from '../Data/desserts.json';

// Imports
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import useFormModal from '../CustomHooks/useFormModal';

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
    const { showFormModal, setShowForm, formResponse, resetFormResponse } = useFormModal();
    const [modalConfiguration, setModalConfiguration] = useState(undefined);
    const [cookies] = useCookies(['role']);

    // Inputs for modal configs
    const inputConfigAddPlate = [
        {
            "id": "plate-description",
            "label": "Descripción del platillo",
            "input__type": "textarea",
            "style": {
                "height": "4em",
                "resize": "none",
                "width" : "clamp(100px, 60%, 250px)"
            }
        },
        {
            "id": "plate-price",
            "label": "Precio del platillo (en MXN)",
            "input__type": "number",
            "style": {
                "width": "12ch"
            }
        },
        {
            "id": "plate-type",
            "label": "Tipo de platillo",
            "input": true,
            "input__type": "select",
            "style": {
                "width": "12ch"
            },
            "radios__name": "table-status-actual",
            "options": [
                {
                    "value": "table-status-free",
                    "label": "Disponible",
                    "checked": true
                },
                {
                    "value": "table-status-busy",
                    "label": "Ocupada"
                }
            ]
        }
    ]
    const inputConfigAddMenu = [
        {
            "id": "menu-title",
            "label": "Título del menú",
            "input__type": "text"
        },
        {
            "id": "menu-description",
            "label": "Descripción del menú",
            "input__type": "textarea",
            "style": {
                "height": "4em",
                "resize": "none",
                "width" : "clamp(100px, 60%, 250px)"
            }
        }
    ]

    // Configs
    const configurationAddPlate = {
        title: 'Registar nuevo platillo',
        description: 'Agregar nuevo platillo al menú',
        inputs: inputConfigAddPlate,
        confirmButtonText: 'Añadir',
        onSubmitAction: () => console.log('success')
    }

    const configurationAddMenu = {
        title: 'Crear nuevo menú',
        inputs: inputConfigAddMenu,
        confirmButtonText: 'Crear',
        onSubmitAction: () => console.log('success')
    }

    // UseEffect
    useEffect(() => {
        setPizzas(PizzasMenu);
        setDesserts(DessertsMenu);
    }, []);

    useEffect(() => {
        if (formResponse) {
            resetFormResponse();
            setTimeout((setShowForm(false), 500))
        }
    }, [formResponse]);

    const onNewPlateHandler = () => {
        setModalConfiguration(configurationAddPlate);
        setShowForm(true);
    }

    const onNewMenuHandler = () => {
        setModalConfiguration(configurationAddMenu);
        setShowForm(true);
    }

    // Render Section
    return (
        <main className="menu">
            <NavBar showUser={false} />
            <h1 className="menu__title">EatOnTime Menu</h1>
            <div className="plates">
                {
                    cookies.role === 'ADMIN' &&
                    <div className="menu__new">
                        <button className="menu__new-add" onClick={onNewPlateHandler}>Crear Platillo</button>
                        <button className="menu__new-add" onClick={onNewMenuHandler}>Crear Menú</button>
                    </div>
                }
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

            {modalConfiguration && showFormModal(modalConfiguration)}
            <Transition duration='0s' />
        </main>
    )
}

export default Menu;