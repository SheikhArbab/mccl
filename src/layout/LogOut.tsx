import { UserState } from '@/types/index';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LogOut = () => {

    const { user } = useSelector((s: UserState) => s.auth)

    return user ? <Navigate to="/" replace /> : <main className="w-full min-h-screen pt-20">
    <Outlet />
</main>
}

export default LogOut