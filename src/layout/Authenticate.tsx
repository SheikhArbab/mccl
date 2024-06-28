import { UserState } from '@/types/index';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Authenticate = () => {

    const { token } = useSelector((s: UserState) => s.auth)

    return token ? <Outlet /> : <Navigate to="/" replace />
}

export default Authenticate