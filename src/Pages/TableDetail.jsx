// Styles
import './styles/TableDetail.css';

// Data
import Pizzas from "../Data/pizzas.json";
import Desserts from "../Data/desserts.json";

// Components
import Transition from '../Components/Transition.jsx';
import PlateDetail from '../Components/PlateDetail';

// Images
import HeroImage from '../Images/hero.svg';
import AddFood from '../Images/addFood.svg';

// Imports
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const TableDetail = () => {
    // Hooks
    let { tableID } = useParams();
    const [plates, setPlates] = useState([]);
    const navigate = useNavigate();

    // Fake Info
    const inTime = new Date();
    const outTime = new Date(inTime);
    outTime.setMinutes(inTime.getMinutes() + 35);
    const detailedTable = {
        status: 'ocupada',
        people: 7,
        in: inTime.getHours().toString().padStart(2, '0') + ":" + inTime.getMinutes().toString().padStart(2, '0'),
        out: outTime.getHours().toString().padStart(2, '0') + ":" + outTime.getMinutes().toString().padStart(2, '0')
    }

    useEffect(() => {
        setPlates([
            { ...Pizzas[1], quantity: 2 },
            { ...Desserts[2], quantity: 5 },
            { ...Pizzas[15], quantity: 2 },
            { ...Pizzas[9], quantity: 1 },
            { ...Desserts[0], quantity: 1 },
            { ...Pizzas[5], quantity: 2 }
        ])
    }, [])

    // Handlers
    const confirmHandler = () => {
        navigate('confirmBill', {
            state: {
              tableID: tableID
            }
          });
    }
    const addHandler = () => {
        navigate('/dashboard/addPlate' , {
            state: {
              tableID: tableID
            }
        });
    }
    return (
        <main className="table__detail">
            <Transition duration='0s'/>
            <div className="table__hero">
                <img className="table__hero-img" src={HeroImage} alt="dashboard logo" />
                <h2 className="table__hero-title">{`Table No: ${tableID}`}</h2>
                <button className="table__hero-btn" onClick={addHandler}> <img src={AddFood} alt="add food icon eat on time" /> Ordenar</button>
            </div>
            <div className="table__info">
                <span className="table__info-status">
                    {`Estado: ${detailedTable.status}`}
                    <span className={detailedTable.status === 'ocupada' ? 'table__info--active' : 'table__info--inactive'}></span>
                </span>
                <span className="table__info-people">{`Personas: ${detailedTable.people}`} </span>
                <span className="table__info-in">{`Hora de Entrada: ${detailedTable.in}`} </span>
                <span className="table__info-out">{`Hora de Salida: ${detailedTable.out}`} </span>
            </div>
            <div className="table__plates">
                {
                    plates.map(plate => <PlateDetail key={plate.id} img={plate.img} name={plate.name} price={plate.price} quantity={plate.quantity} />)
                }
            </div>
            <div className='table__form'>
                <input onClick={confirmHandler} className='table__form-submit' type="button" value="Pedir Cuenta" />
            </div>
            <Outlet />
        </main>
    )
}

export default TableDetail;