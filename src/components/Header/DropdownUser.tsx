import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Translatable } from "@/components/index"
import ClickOutside from '../ClickOutside'; 
import { currentUser } from '@/redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleDown } from "react-icons/fa6";
import { UserState } from '@/types/User';
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { GoGear } from "react-icons/go";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state: UserState) => state.auth)
 

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            <Translatable text={user ? user.first_name : ""} />
          </span>
       {user && <span className="block text-xs"> <Translatable text={user ? (user.roles_details && user.roles_details.role) : "user"} /></span>}
        </span>

        <figure className="h-12 w-12 border-2 border-blue-700 rounded-full overflow-hidden">
          <img src={"https://avatars.mds.yandex.net/i?id=e54e72f5db21959ef71ab3f51aabe3d9e5367590-4986689-images-thumbs&n=13"} alt="User" />
        </figure>

        <FaAngleDown />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">

            {[{
              path: "/profile",
              title: "My Profile",
              icon: AiOutlineUser
            }, {
              path: "/settings",
              title: "Account Settings",
              icon: GoGear
            },].map(v => <li key={v.title}>
              <Link
                to={v.path}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <v.icon className="fill-current" size={20} />
                <Translatable text={v.title} />
              </Link>
            </li>)}
          </ul>
          <button
            onClick={() => dispatch(currentUser({ user: null, token: null }))}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <TbLogout2 size={22} />
            <Translatable text='Log Out' />
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
