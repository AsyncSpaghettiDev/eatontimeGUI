// Styles
import './styles/TableDashboard.css';

// Images
import HeroImage from '../Images/hero.svg';

// Components
import TableResume from '../Components/TableResume.jsx';
import Transition from '../Components/Transition.jsx';

// Imports
import { useEffect, useState } from 'react';

const TableDashboard = () => {
    const [tables, setTables] = useState([]);
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
    }, [])
    return (
        <section className="table__dashboard">
            <Transition duration='0s'/>
            
            <div className="dashboard__hero">
                <img className="dashboard__hero-img" src={HeroImage} alt="dashboard logo" />
                <h2 className="dashboard__hero-title">Mesas</h2>
            </div>
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
        </section>
    )
}

export default TableDashboard;