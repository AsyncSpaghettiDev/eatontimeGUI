import logo from '../Images/logo.png';
import './styles/Transition.css';

const Transition = () => {
    return (
        <div className="transition">
            <img className='transition-logo' src={logo} alt="EatOnTime logo" />
            <p className='transition-text'>EatOnTime</p>
            <div className="transition__progress"></div>
            <div className="transition__footer">
                <div className='transition__footer-balls-1'></div>
                <div className='transition__footer-balls-2'></div>
            </div>
        </div>
    )
}

export default Transition;