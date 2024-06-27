import { UserState } from '@/types/index';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Admin = ({ role }: { role: string }) => {

    const { user } = useSelector((s: UserState) => s.auth)


    return role.includes(user?.role || '') ? <main className="w-full min-h-screen pt-20">
    <Outlet />
</main> : <Navigate to="/" replace />
}

export default Admin