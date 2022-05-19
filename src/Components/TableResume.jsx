import { useNavigate } from 'react-router-dom';
import './styles/TableResume.css';

const TableResume = ({ data, busy }) => {
    const navigate = useNavigate();
    const showHandler = () => {
        if (busy)
            navigate(`${data.tableNo}`);
    }
    return (
        <tr
            className={busy ? "dashboard__resume__table dashboard__resume__table--busy" : "dashboard__resume__table"}
            onClick={showHandler}
        >
            <td className='dashboard__resume__table-info' > {data.tableNo.toString().padStart(2,'0')} </td>
            <td> {data.freeSeat.toString().padStart(2,'0')} </td>
            <td> {data.status} </td>
            <td className='dashboard__resume__table-time'> {busy ? `${data.estTime} min` : '--'} </td>
        </tr>
    );
}

export default TableResume;