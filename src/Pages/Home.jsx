import './styles/Home.css';

// Components
import Transition from '../Components/Transition.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="home">
            <Transition/>
            <h1>Hello to EatOnTime Menu</h1>
            <Link to='/dashboard'>Dashboard</Link>
        </main>
    )
}

export default Home;