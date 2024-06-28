import { UserState } from '@/types/index';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Admin = ({ role }: { role: string }) => {

    const { user } = useSelector((s: UserState) => s.auth)


    return role.includes(user?.role || '') ? <Outlet /> : <Navigate to="/" replace />
}

export default Admin