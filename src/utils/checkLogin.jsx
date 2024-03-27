import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CheckLogin = () => {
    const token = useSelector((state) => state.auth.token);

    return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default CheckLogin;
