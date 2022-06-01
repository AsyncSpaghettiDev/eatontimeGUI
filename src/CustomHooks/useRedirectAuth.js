import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useRedirectAuth = () => {
    let navigate = useNavigate();
    const [cookies] = useCookies(['role', 'name']);

    const redirect = () => {
        if(!cookies.role && !cookies.name)
            navigate('/login');
        if (cookies.role === 'TABLE')
            navigate(`/dashboard/${cookies.name[5]}`)
    }
    
    return {
        redirect
    }
}

export default useRedirectAuth;