import './styles/Login.css';

import EOTLogo from '../Images/logo.png';

import NavBar from "../Components/NavBar";
import Transition from '../Components/Transition';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [cookies, setCookie] = useCookies(['role']);
    let navigate = useNavigate();
    // Handlers
    const submitHandler = e => {
        console.log(e);
        
        localStorage.setItem('role', e.target[0].value );
        e.preventDefault();
        //navigate(-1);
    }
    return (
        <main className="login">
            <NavBar />
            <form onSubmit={submitHandler} className="login__form">
                <img   className='login__form-img' src={EOTLogo} alt="" />
                <label className="login__form-label" htmlFor="usr-name">Nombre de usuario</label>
                <input className="login__form-input" placeholder='Ingrese su usuario' type="text" name="usr-name" id="usr-name" />
                <label className="login__form-label" htmlFor="usr-pswd">Contraseña</label>
                <input className="login__form-input" placeholder='Ingrese su contraseña' type="text" name="usr-pswd" id="usr-pswd" />
                <input className="login__form-submit" type="submit" value="Ingresar"/>
            </form>
            <Transition duration='0s' />
        </main>
    )
}

export default Login;