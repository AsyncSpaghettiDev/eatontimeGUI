import './styles/Login.css';

import EOTLogo from '../Images/logo.png';

import Users from '../Data/users.json';

import NavBar from "../Components/NavBar";
import Transition from '../Components/Transition';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

const Login = () => {
    // Hooks
    let navigate = useNavigate();
    const [_, setCookie] = useCookies(['role', 'user']);
    const [validForm, setValidForm] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('user') != null)
            console.log(searchParams.get('user'));
    }, [])

    // Handlers
    const submitHandler = e => {
        e.preventDefault();
        const [valid, name, role] = fakeValidation(e.target[0].value, e.target[1].value);

        if (valid) {
            setValidForm(true);
            setCookie('name', name, {
                path: '/',
                maxAge: role === 'TABLE' ? 10800 : 86400
            });
            setCookie('role', role, {
                path: '/',
                maxAge: role === 'TABLE' ? 10800 : 86400
            });
            navigate('/');
        }
        else
            setValidForm(false);

    }
    // Functions
    const fakeValidation = (user, password) => {
        const {R_USER_NAME, USER_ROLE} = Users.find(reg => reg.R_USER_NAME == user && reg.USER_PASSWORD == password)
        if (R_USER_NAME && USER_ROLE)
            return [true, R_USER_NAME, USER_ROLE];
        return [false, null, null];
    }
    return (
        <main className="login">
            <NavBar />
            <form onSubmit={submitHandler} className="login__form" autoComplete='off' >
                <img className='login__form-img' src={EOTLogo} alt="" />
                <label className="login__form-label" htmlFor="usr-name">Nombre de usuario</label>
                <input className="login__form-input" placeholder='Ingrese su usuario' type="text" name="usr-name" id="usr-name" />
                <label className="login__form-label" htmlFor="usr-pswd">Contraseña</label>
                <input className="login__form-input" placeholder='Ingrese su contraseña' type="password" name="usr-pswd" id="usr-pswd" />
                <input className="login__form-submit" type="submit" value="Ingresar" />
            </form>
            <Transition duration='0s' />
        </main>
    )
}

export default Login;