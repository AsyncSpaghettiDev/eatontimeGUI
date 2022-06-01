// Styles
import './styles/Dashboard.css';

// Components
import NavBar from '../Components/NavBar.jsx';

// Imports
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useRedirectAuth from '../CustomHooks/useRedirectAuth';

const Dashboard = () => {
    let { redirect } = useRedirectAuth();
    useEffect(() => redirect(), [])
    return (
        <main className="dashboard">
            <NavBar noBack />
            <Outlet />
        </main>
    )
}

export default Dashboard;