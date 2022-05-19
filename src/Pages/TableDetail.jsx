// Styles
import './styles/TableDetail.css';

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
        in: inTime.getHours().toString().padStart(2, '0') + ":" + inTime.getMinutes(),
        out: outTime.getHours().toString().padStart(2, '0') + ":" + outTime.getMinutes()
    }

    useEffect(() => {
        setPlates([
            { id: 1, img: 'https://picsum.photos/id/237/400/400', name: 'Nam libero', price: 75, quantity: 2 },
            { id: 2, img: 'https://picsum.photos/id/107/400/400', name: 'non provident', price: 95, quantity: 4 },
            { id: 3, img: 'https://picsum.photos/id/98/400/400', name: 'molestie in', price: 130, quantity: 3 },
            { id: 4, img: 'https://picsum.photos/id/192/400/400', name: 'Cras suscipit', price: 105, quantity: 6 },
            { id: 5, img: 'https://picsum.photos/id/305/400/400', name: 'molestias excepturi', price: 45, quantity: 1 }
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