// Styles
import './styles/TableDetail.css';

// Data
import Pizzas from "../Data/pizzas.json";
import Desserts from "../Data/desserts.json";

// Components
import Transition from '../Components/Transition.jsx';
import PlateDetail from '../Components/PlateDetail';

// Custom hooks
import useConfirmModal from '../CustomHooks/useConfirmModal';

// Images
import HeroImage from '../Images/hero.svg';
import AddFood from '../Images/addFood.svg';

// Imports
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const TableDetail = () => {
    // Hooks
    let { tableID } = useParams();
    const navigate = useNavigate();
    const [plates, setPlates] = useState([]);
    const [detailedTable, setDetailedTable] = useState({});
    const { showModal, setShowConfirm, confirmResponse } = useConfirmModal();

    // useEffect
    useEffect(() => {
        if (confirmResponse) setDetailedTable({ ...detailedTable, status: 'pendiente' })
        else setDetailedTable({ ...detailedTable, status: 'ocupada' });
    }, [confirmResponse]);

    useEffect(() => {
        setPlates([
            { ...Pizzas[1], quantity: 2 },
            { ...Desserts[2], quantity: 5 },
            { ...Pizzas[15], quantity: 2 },
            { ...Pizzas[9], quantity: 1 },
            { ...Desserts[0], quantity: 1 },
            { ...Pizzas[5], quantity: 2 }
        ])
        // Fake Info
        const inTime = new Date();
        const outTime = new Date(inTime);
        outTime.setMinutes(inTime.getMinutes() + 35);

        setDetailedTable({
            status: 'ocupada',
            people: 7,
            in: inTime.getHours().toString().padStart(2, '0') + ":" + inTime.getMinutes().toString().padStart(2, '0'),
            out: outTime.getHours().toString().padStart(2, '0') + ":" + outTime.getMinutes().toString().padStart(2, '0')
        })
    }, [])

    // Handlers
    const showConfirmHandler = () => setShowConfirm(true);

    const addHandler = () => {
        navigate('/dashboard/addPlate', {
            state: {
                tableID: tableID
            }
        });
    }
    // Component
    return (
        <main className="table__detail">
            <Transition duration='0s' />
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
                <input onClick={showConfirmHandler} className='table__form-submit' type="button" value="Pedir Cuenta" />
            </div>
            {showModal(`Pedir Cuenta Mesa #${tableID}`, '¿Desea solicitar la cuenta de la mesa?')}
        </main>
    )
}

export default TableDetail;