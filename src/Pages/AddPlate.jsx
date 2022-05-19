import './styles/AddPlate.css';

// Components
import Transition from '../Components/Transition.jsx';

// Imports
import { Link, useParams } from 'react-router-dom';

const AddPlate = () => {
    // Hooks
    let { tableID } = useParams();

    console.log(tableID)
    return (
        <main className="AddPlate">
            <Transition/>
            
            <h1>Hello to EatOnTime Menu {tableID}</h1>
            <Link to='/dashboard'>Dashboard</Link>
        </main>
    )
}

export default AddPlate;