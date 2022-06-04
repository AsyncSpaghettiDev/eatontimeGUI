import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import FormModal from './Components/FormModal';
import RequireAuth from './Components/RequireAuth.jsx';

// Pages
import Menu from './Pages/Menu.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import NotFound from './Pages/NotFound.jsx';
import AddPlate from './Pages/AddPlate.jsx';
import Employees from './Pages/Employees.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import TableDetail from './Pages/TableDetail.jsx';
import RegisterTable from './Pages/RegisterTable.jsx';
import TableDashboard from './Pages/TableDashboard.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route index element={
                        <RequireAuth requiredRole='ADMIN'>
                            <TableDashboard />
                        </RequireAuth>
                    } />
                    <Route path=':tableID' element={<TableDetail />} />
                    <Route path='addPlate' element={<AddPlate />} />
                    <Route path='newTable' element={
                        <RequireAuth requiredRole='ADMIN'>
                            <RegisterTable />
                        </RequireAuth>
                    } />

                </Route>
                <Route path='/menu' element={<Menu />} />
                <Route path='/login' element={<Login />} />
                <Route path='/employees' element={
                    <RequireAuth requiredRole='ADMIN'>
                        <Employees />
                    </RequireAuth>}
                >
                </Route>
                <Route path='test' element={
                    <FormModal
                        title='Registrar nuevo empleado'
                        errorMessage='Error en algún campo'
                        inputs={
                            [
                                {
                                    id: 'emp-number',
                                    label: 'Número de empleado',
                                    input__type: 'number',
                                    style: { width: '12ch' },
                                },
                                {
                                    id: 'emp-name',
                                    defaultValue: 'hello',
                                    label: 'Nombre del empleado',
                                    input__type: 'text'
                                },
                                {
                                    id: 'emp-role',
                                    label: 'Rol del empleado',
                                    input: true,
                                    input__type: 'radio',
                                    radios__name: 'employee-role',
                                    radios__buttons: [
                                        {
                                            id: 'employee-role-employee',
                                            label: 'Empleado',
                                            checked: true
                                        },
                                        {
                                            id: 'employee-role-chef',
                                            label: 'Chef',
                                            lbl__style: {marginInlineStart: '0.5em'}
                                        }
                                    ]
                                }
                            ]
                        }
                    />
                } />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App;