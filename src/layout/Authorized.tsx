import { UserState } from '@/types/index';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Authorized = ({ roles }: { roles: string[] }) => {

    const { user } = useSelector((s: UserState) => s.auth)


    return roles.includes(user?.role || '') ?  <Outlet /> : <Navigate to="/" replace />
}

export default Authorized