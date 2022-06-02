import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import RequireAuth from './Components/RequireAuth';

// Pages
import Menu from './Pages/Menu.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import AddPlate from './Pages/AddPlate.jsx';
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
            </Routes>
        </BrowserRouter >
    )
}

export default App;