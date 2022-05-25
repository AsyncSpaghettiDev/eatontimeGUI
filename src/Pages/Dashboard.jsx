// Styles
import './styles/Dashboard.css';

// Components
import NavBar from '../Components/NavBar.jsx';

// Imports
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main className="dashboard">
            <NavBar />
            <Outlet />
        </main>
    )
}

export default Dashboard;