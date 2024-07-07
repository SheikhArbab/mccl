import { FC } from 'react';
import * as C from '@/components/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '@/types/User';

const Users: FC = () => {

    const { user } = useSelector((state: UserState) => state.auth)

    return (
        <>
            <C.Breadcrumb pageName="Users" />

            <div className="flex flex-col gap-10">

                {user && user?.roles && user?.roles.role == "Admin" && <Link to={"/auth/signup"}
                    className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none   font-medium rounded-lg  
              px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 capitalize text-xs">
                    <C.Translatable text='add a new User' />
                </Link>}

                <C.TableThree />

            </div>
        </>
    );
}

export default Users