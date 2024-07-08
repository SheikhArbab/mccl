import { UserState } from '@/types/User';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';



interface Pros {
    roles: string[]
}


const Authorized: FC<Pros> = ({ roles }) => {

    const { user } = useSelector((s: UserState) => s.auth)

    return user && roles.includes(user.roles.role) ? <Outlet /> : <Navigate to="/dashboard" replace /> 
}

export default Authorized