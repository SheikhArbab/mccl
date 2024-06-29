import * as C from "@/components/index";
import { UserState } from "@/types/User";
import { FC, useState } from 'react';
import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';



const RootLayout: FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useSelector((state:UserState)=> state.auth)

  return (

    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <C.ScrollTop />

      <div className="flex h-screen overflow-hidden">

        {user && <C.Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}


        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <C.Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          <C.Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
