import { UserState } from '@/types/index';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LogOut = () => {

    const { token } = useSelector((s: UserState) => s.auth)

    return token ? <Navigate to="/" replace /> : <main className="w-full min-h-screen pt-20">
    <Outlet />
</main>
}

export default LogOut