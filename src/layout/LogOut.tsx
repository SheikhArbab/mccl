import { UserState } from '@/types/User';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LogOut = () => {

    const { token } = useSelector((s: UserState) => s.auth)

    return token ? <Navigate to="/" replace /> :  <Outlet />
}

export default LogOut