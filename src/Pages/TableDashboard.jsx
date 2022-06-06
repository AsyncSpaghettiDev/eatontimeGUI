// Styles
import './styles/TableDashboard.css';

// Images
import HeroImage from '../Images/hero.svg';

// Components
import TableResume from '../Components/TableResume.jsx';
import Transition from '../Components/Transition.jsx';

// Imports
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import useFormModal from '../CustomHooks/useFormModal';

const TableDashboard = () => {
    // Hooks
    const [tables, setTables] = useState([]);
    const { showFormModal, setShowForm, formResponse, resetFormResponse } = useFormModal();
    const [modalConfiguration, setModalConfiguration] = useState(undefined);
    const [cookies] = useCookies(['role']);

    // Inputs for modal configs
    const inputConfigAdd = [
        {
            "id": "table-number",
            "label": "Número de mesa",
            "input__type": "number",
            "style": {
                "width": "12ch"
            }
        },
        {
            "id": "table-capacity",
            "label": "Capacidad de la mesa",
            "input__type": "number",
            "style": {
                "width": "12ch"
            }
        },
        {
            "id": "table-status",
            "label": "Estado de la mesa",
            "input": true,
            "input__type": "radio",
            "radios__name": "table-status-actual",
            "radios__buttons": [
                {
                    "id": "table-status-free",
                    "label": "Disponible",
                    "checked": true
                },
                {
                    "id": "table-status-busy",
                    "label": "Ocupada"
                }
            ]
        }
    ]

    // Configs
    const configurationAdd = {
        title: 'Registar nueva mesa',
        description: 'Agregar mesa del restaurant',
        inputs: inputConfigAdd,
        confirmButtonText: 'Añadir',
        onSubmitAction: () => console.log('success')
    }

    // UseEffect
    useEffect(() => {
        setTables([
            { tableNo: 1, freeSeat: 0, status: 'ocupada', estTime: 10 },
            { tableNo: 2, freeSeat: 3, status: 'ocupada', estTime: 30 },
            { tableNo: 3, freeSeat: 12, status: 'libre', estTime: 0 },
            { tableNo: 4, freeSeat: 8, status: 'libre', estTime: 0 },
            { tableNo: 5, freeSeat: 5, status: 'libre', estTime: 0 },
            { tableNo: 6, freeSeat: 4, status: 'libre', estTime: 0 },
            { tableNo: 7, freeSeat: 2, status: 'ocupada', estTime: 25 },
            { tableNo: 8, freeSeat: 3, status: 'libre', estTime: 0 },
            { tableNo: 9, freeSeat: 6, status: 'libre', estTime: 0 },
            { tableNo: 10, freeSeat: 0, status: 'ocupada', estTime: 60 }
        ])
    }, []);

    useEffect(() => {
        if (formResponse) {
            resetFormResponse();
            setTimeout((setShowForm(false), 500))
        }
    }, [formResponse]);

    const onNewHandler = () => {
        setModalConfiguration(configurationAdd);
        setShowForm(true);
    }

    // Render Section
    return (
        <section className="table__dashboard">
            <Transition duration='0s' />

            <div className="dashboard__hero">
                <img className="dashboard__hero-img" src={HeroImage} alt="dashboard logo" />
                <h2 className="dashboard__hero-title">Mesas</h2>
            </div>
            {
                cookies.role === 'ADMIN' &&
                <div className="dashboard__new">
                    <button className="dashboard__new-add" onClick={onNewHandler}>Agregar Mesa</button>
                </div>
            }
            <table className="dashboard__resume">
                <tbody>
                    <tr className="dashboard__resume__headers">
                        <th>Table No</th>
                        <th>Free Seat</th>
                        <th>Status</th>
                        <th>Est.Time</th>
                    </tr>
                    {
                        tables.map(table => <TableResume key={table.tableNo} data={table} busy={table.status === 'ocupada'} />)
                    }
                </tbody>
            </table>
            {modalConfiguration && showFormModal(modalConfiguration)}
        </section>
    )
}

export default TableDashboard;