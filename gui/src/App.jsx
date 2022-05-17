import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import TableDetail from './Pages/TableDetail.jsx';
import TableDashboad from './Pages/TableDashboard.jsx';

// Components
import ConfirmModal from './Components/ConfirmBill.jsx';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/dashboard' element={<Dashboard/>} >
                    <Route index element={<TableDashboad/>} />
                    <Route path=':tableID' element={<TableDetail/>} > 
                        <Route path='confirmBill' element={<ConfirmModal />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;