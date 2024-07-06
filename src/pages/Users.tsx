import { FC } from 'react';
import * as C from '@/components/index';
import { Link } from 'react-router-dom';

const Users: FC = () => {
    return (
        <>
            <C.Breadcrumb pageName="Users" />

            <div className="flex flex-col gap-10">

                <Link to={"/auth/signup"}
                    className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none   font-medium rounded-lg  
              px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 capitalize text-xs">
                    <C.Translatable text='add a new User' />
                </Link>

                <C.TableThree />

            </div>
        </>
    );
}

export default Users