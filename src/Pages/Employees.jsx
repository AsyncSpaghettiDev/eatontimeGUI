import './styles/Employees.css';

import NavBar from '../Components/NavBar.jsx';
import EmployeeResume from '../Components/EmployeeResume'

import Users from '../Data/users.json';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        setEmployees(Users.filter(usr => usr.USER_ROLE === 'EMPLOYEE'));
        setChefs(Users.filter(usr => usr.USER_ROLE === 'CHEF'));
    }, []);
    return (
        <main className="employees">
            <NavBar noBack />
            <div className="employees__add">
                <h2 className="employees__add-title">Lista de empleados</h2>
                <button className="employees__add-new">Nuevo</button>
            </div>
            <table className='employees__list' >
                <tbody id='gral__employees'>
                    <tr className="employees__list__headers">
                        <th>No. Empleado</th>
                        <th>Nombre empleado</th>
                        <th>Rol</th>
                        <th>Fecha de creación</th>
                    </tr>
                    {
                        employees.map(
                            emp =>
                                <EmployeeResume
                                    key={emp.R_USER_ID}
                                    empNo={emp.R_USER_ID}
                                    empName={emp.R_USER_NAME}
                                    empRole={emp.USER_ROLE}
                                    empDate={emp.CREATED_ON}
                                />)
                    }
                </tbody>
                <tbody id='chef__employees'>
                    <tr className="employees__list__headers">
                        <th>No. Empleado</th>
                        <th>Nombre empleado</th>
                        <th>Rol</th>
                        <th>Fecha de creación</th>
                    </tr>
                    {
                        chefs.map(
                            chef =>
                                <EmployeeResume
                                    key={chef.R_USER_ID}
                                    empNo={chef.R_USER_ID}
                                    empName={chef.R_USER_NAME}
                                    empRole={chef.USER_ROLE}
                                    empDate={chef.CREATED_ON}
                                />)
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Employees;