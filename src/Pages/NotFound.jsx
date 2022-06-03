import './styles/NotFound.css';
import NFLogo from '../Images/dinnerPlate.svg';

import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const returnHandler = () => navigate('/', { replace: true });
    return (
        <main className="notfound">
            <img className="notfound-image" src={NFLogo} alt="Not found page logo" />
            <h1 className="notfound-title">
                Oops... Página no encontrada
            </h1>
            <p className="notfound-desc">
                La página que ingresaste no existe, prueba otra vez.
            </p>
            <button onClick={returnHandler} className="notfound-return">Volver</button>
        </main>
    )
}

export default NotFound;