import { useEffect, useState, FC } from "react";
import { MdEdit } from "react-icons/md";
import Loader from '@/common/Loader';
import { Translatable, Modal } from "@/components/index";
import { useGetAllUsersQuery, useDeleteUserMutation } from '@/redux/services/auth';
import * as T from "@/types/User";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const TableThree: FC = () => {
  const [userData, setUserData] = useState<T.User[]>([]);
  const { data, isLoading, refetch } = useGetAllUsersQuery<any>({});
 

  useEffect(()=>{refetch()},[])

  const [deleteFnc] = useDeleteUserMutation<any>({});


  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFnc(id); 

      if (res.error) {
        toast.error("Something Went Wrong");
      } else if (res && res.data == null) {
        toast.success("User deleted successfully");
        refetch()
      }

    } catch (error: any) {
      toast.error(`Something Went Wrong ${error.message}`);
    }
  };

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (userData.length === 0) return <h1 className='text-center capitalize'> <Translatable text={"no users yet !"} /> </h1>;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        <Translatable text={"Users"} />
      </h4>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {["first name", "last name", "email", "role", "permissions", "action"].map(v => (
                <th key={v} className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11 capitalize">
                  <Translatable text={v} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {userData.map((user: any) => (
              <tr key={user.id} className="border-b border-[#eee] dark:border-strokedark">
                {["first_name", "last_name", "email"].map((key: string) => (
                  <td key={key} className="py-5 px-4">
                    <Translatable text={user[key]} />
                  </td>
                ))}
                <td className="py-5 px-4">
                  <Translatable text={user?.roles?.role} />
                </td>
                <td className="py-5 px-4">
                  {user.permissions_details?.map((perm: any) => (
                    <span key={perm.id}>{perm.permission}</span>
                  ))}
                </td>
                <td className="capitalize flex items-center gap-2 text-xl py-5 px-4">
                  <button className="text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center">
                    <Modal deleteFnc={() => handleDelete(user.id)} />
                  </button>
                  <Link to={`/user-settings/${user.id}`} className="dark:text-white text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center">
                    <MdEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        <Toaster />
      </div>
    </div>
  );
};

export default TableThree;
