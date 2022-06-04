import './styles/EmployeeResume.css';

const EmployeeResume = ({ empNo, empName, empRole, empDate, onClick }) => {
    return (
        <tr className="employee__resume__table" onClick={onClick} >
            <td> {empNo} </td>
            <td> {empName} </td>
            <td className="employee__resume__table-rol"> {empRole} </td>
            <td> {empDate} </td>
        </tr>
    )
}

export default EmployeeResume;