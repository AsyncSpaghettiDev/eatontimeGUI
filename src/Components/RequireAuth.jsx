import { useCookies } from "react-cookie";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children, requiredRole }) {
    let [cookies] = useCookies();
    let location = useLocation();

    if (cookies.role === undefined)
        return <Navigate to="/login" state={{ from: location }} replace />;

    if (cookies.role === 'TABLE')
        return <Navigate to={`/dashboard/${cookies.name[5]}`} />

    if (cookies.role !== requiredRole) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RequireAuth;