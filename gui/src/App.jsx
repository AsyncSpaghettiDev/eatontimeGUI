import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';

import Splash from './Pages/Splash';
import Dashboard from './Pages/Dashboard';
import TableDetail from './Pages/TableDetail';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Splash/>} />
                <Route path='/dashboard' element={<Dashboard/>} >
                    <Route path=':tableID' element={<TableDetail/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;