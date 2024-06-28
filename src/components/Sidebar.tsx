import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser, FaHome } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { IconType } from 'react-icons';
import { TbLogout2 } from "react-icons/tb";
import * as C from "@/components/index"
import { useDispatch } from 'react-redux';
import { currentUser } from '@/redux/features/authSlice';
import { FcSalesPerformance } from "react-icons/fc";

const Sidebar: FC = () => {


    const dispatch = useDispatch()

    const links: {
        url: string;
        title: string;
        icon: IconType
    }[] = [
            {
                icon: FaHome,
                title: "Home",
                url: "/"
            },
            {
                icon: FcSalesPerformance,
                title: "revenue",
                url: "/revenue"
            },
            {
                icon: FaMoneyBills,
                title: "payment voucher",
                url: "/payment-voucher"
            },
            {
                icon: FaUser,
                title: "user",
                url: "/user"
            },
        ]

    return (
        <aside
            id="default-sidebar"
            className=" sticky  top-0 left-0  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-black border-0 border-t border-white pb-20"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between ">

                <ul className="space-y-5 font-medium">

                    {
                        links.map(v => <li key={v.title}>
                            <NavLink
                                to={v.url}
                                className="flex items-center p-2 text-myYellow  rounded-lg  border  hover:bg-gray-100 sidebar group"
                            >
                                <v.icon className="flex-shrink-0 w-5 h-5 transition duration-75   group-hover:text-gray-900  " />

                                <span className="flex-1 ms-3 whitespace-nowrap  transition duration-75 group-hover:text-gray-900 capitalize">
                                    <C.Translatable text={v.title} />
                                </span>
                            </NavLink>
                        </li>)
                    }
                </ul>



                <button
                    onClick={() => {
                        localStorage.removeItem("token")
                        dispatch(currentUser({ user: null, token: null }));
                    }}
                    className="flex items-center p-2 text-myYellow  rounded-lg  border  hover:bg-gray-100 sidebar group"
                >
                    <TbLogout2 className="flex-shrink-0 w-5 h-5 transition duration-75   group-hover:text-gray-900  " />

                    <span className="flex-1 ms-3 whitespace-nowrap text-start  transition duration-75 group-hover:text-gray-900 capitalize">
                        <C.Translatable text={"logout"} />
                    </span>
                </button>


            </div>
        </aside>
    )
}

export default Sidebar