import { useNavigate } from "react-router-dom";

import './styles/NavBar.css';

const NavBar = () => {
    
    const navigate = useNavigate();
    const returnHandler = () => {
        navigate(-1);
    }
    const homeHandler = () => {
        navigate('/');
    }

    return (
        <nav className="navbar__header">
            <span className='navbar__back' onClick={returnHandler}> &#5176; </span>
            <h1 className='navbar-header' onClick={homeHandler} >EatOnTime</h1>
        </nav>
    )
}

export default NavBar;