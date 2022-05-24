// Styles
import './styles/Dashboard.css';

// Imports
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const returnHandler = () => {
        navigate(-1);
    }
    const homeHandler = () => {
        navigate('/');
    }
    return (
        <main className="dashboard">
            <nav className="dashboard__header">
                <span className='dashboard__back' onClick={returnHandler}> &#5176; </span>
                <h1 className='dashboard-header' onClick={homeHandler} >EatOnTime</h1>
            </nav>
            <Outlet />
            
        </main>
    )
}

export default Dashboard;