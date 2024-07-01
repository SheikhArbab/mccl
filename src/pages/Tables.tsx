import * as C from '@/components/index';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <>
      <C.Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">

        <Link to={"/auth/signup"}
          className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none   font-medium rounded-lg  
          px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 capitalize text-xs">
          <C.Translatable text='add a new User' />
        </Link>

        <C.TableThree />

        <Link to={"/add-expenses"}
          className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none   font-medium rounded-lg  
          px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 capitalize text-xs">
          <C.Translatable text='add a new expenses' />
        </Link>

        <C.TableOne />

        <C.TableTwo />

      </div>
    </>
  );
};

export default Tables;
