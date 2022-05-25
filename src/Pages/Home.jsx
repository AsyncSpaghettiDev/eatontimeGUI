// Resources
import MenuImage from '../Images/menu.png';
import DashboardImage from '../Images/dashboard.svg';

// Styles
import './styles/Home.css';

// Components
import Transition from '../Components/Transition.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="home">
            <Transition duration='0s'/>
            <h1 className='home-title'>Bienvenido a EatOnTime</h1>
            <Link className='home__link' to='/dashboard'>
                <img className='home__link-image' src={DashboardImage} alt="eat on time tables dashboard" />
                <p className="home__link-text">Dashboard</p>
            </Link>
            <Link className='home__link' to='/menu'>
                <img className='home__link-image' src={MenuImage} alt="eat on time tables dashboard" />
                <p className="home__link-text">Menu</p>
            </Link>
        </main>
    )
}

export default Home;