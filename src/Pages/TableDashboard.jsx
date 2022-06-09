// Imports
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// Styles
import './styles/TableDashboard.css';

// Images
import HeroImage from '../Images/hero.svg';

// Components
import Transition from '../Components/Transition.jsx';
import TableResume from '../Components/TableResume.jsx';

// Custom Hooks
import useFormModal from '../CustomHooks/useFormModal';

const TableDashboard = () => {
    // Hooks
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [editMode, setEditMode] = useState(false);
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
        /* 
            async function fetchData() {
                const res = await fetch('api/GetTables');
                const data = await res.json();
                console.log(data);
            }
            fetchData(); 
        */
        /**
         * EstTime: "00:00:00"
         * QtyLimit: 2
         * TableId: 1
         * TableStatus: "DISPONIBLE"
         */

        fetch('api/GetTables').then(res => res.json()).then(data => {
            console.log(data);
            //setTables(data.data);
        });
    }, []);

    useEffect(() => {
        if (formResponse) {
            resetFormResponse();
            setTimeout((setShowForm(false), 500))
        }
    }, [formResponse]);

    useEffect(() => {
        if (selectedTable !== null) {

            const inputConfigUpdate = [
                {
                    "id": "table-number",
                    "label": "Número de mesa",
                    "input__type": "number",
                    "style": {
                        "width": "12ch"
                    },
                    "defaultValue": selectedTable.TableId
                },
                {
                    "id": "table-capacity",
                    "label": "Capacidad de la mesa",
                    "input__type": "number",
                    "style": {
                        "width": "12ch"
                    },
                    "defaultValue": selectedTable.QtyLimit
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
                            "checked": selectedTable.TableStatus === "DISPONIBLE"
                        },
                        {
                            "id": "table-status-busy",
                            "label": "Ocupada",
                            "checked": selectedTable.TableStatus === "OCUPADA"
                        }
                    ]
                }
            ]

            const configurationUpdate = {
                title: 'Actualizar mesa',
                description: 'Actualizar mesa del restaurant',
                inputs: inputConfigUpdate,
                confirmButtonText: 'Actualizar',
                onSubmitAction: () => console.log('user updated')
            }
            setModalConfiguration(configurationUpdate);
            setShowForm(true);
            setSelectedTable(null);
        }
    }, [selectedTable]);

    // Handlers
    const onNewHandler = () => {
        setModalConfiguration(configurationAdd);
        setShowForm(true);
    }

    const onToggleEditMode = () => {
        setEditMode(!editMode);
    }

    const onUpdateHandler = (tblNo) => {
        const findTable = tables.find(tbl => tbl.TableId == tblNo);
        setSelectedTable(findTable);
    }

    // Render Section
    return (
        <section className="table__dashboard">
            <Transition duration='2s' />
            |
            <div className="dashboard__hero">
                <img className="dashboard__hero-img" src={HeroImage} alt="dashboard logo" />
                <h2 className="dashboard__hero-title">Mesas {editMode && "(Edit Mode)"} </h2>
            </div>
            {
                cookies.role === 'ADMIN' &&
                <div className="dashboard__new">
                    <button className="dashboard__new-add" onClick={onNewHandler}>Agregar Mesa</button>
                    <button className="dashboard__new-add" onClick={onToggleEditMode}>Alternar modo editar</button>
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
                        tables.map(table =>
                            <TableResume
                                editingMode={editMode}
                                onClick={onUpdateHandler}
                                key={table.TableId}
                                data={table}
                                busy={table.TableStatus !== 'DISPONIBLE'}
                            />)
                    }
                </tbody>
            </table>
            {modalConfiguration && showFormModal(modalConfiguration)}
        </section>
    )
}

export default TableDashboard;