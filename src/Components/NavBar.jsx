import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import './styles/NavBar.css';

const NavBar = ({ noBack = false, showUser = true }) => {
    // Hooks
    const [cookies, _, removeCookie] = useCookies(['role', 'name']);
    const navigate = useNavigate();

    // Handlers
    const onClickHandler = () => {
        removeCookie('role');
        removeCookie('name');
        navigate('/');
    }
    const returnHandler = () => {
        navigate(-1);
    }
    const homeHandler = () => {
        navigate('/');
    }

    return (
        <nav className="navbar__header">
            {
                !noBack || cookies.role === 'ADMIN' &&
                <span className='navbar__back' onClick={returnHandler}> &#5176; </span>
            }
            <h1 className='navbar-header' onClick={homeHandler} >EatOnTime</h1>
            {
                showUser && cookies.role &&
                <span className="navbar__logout" onClick={onClickHandler}>Welcome {cookies.name} ({cookies.role}) </span>
            }
        </nav>
    )
}

export default NavBar;