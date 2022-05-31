import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Menu from './Pages/Menu.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import AddPlate from './Pages/AddPlate.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import TableDetail from './Pages/TableDetail.jsx';
import TableDashboad from './Pages/TableDashboard.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route index element={<TableDashboad />} />
                    <Route path=':tableID' element={<TableDetail />} />
                    <Route path='addPlate' element={<AddPlate />} />
                </Route>
                <Route path='/menu' element={<Menu />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;