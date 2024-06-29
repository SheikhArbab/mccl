import * as C from "@/components/index";
import { FC ,useState } from 'react';
import { Outlet } from 'react-router-dom';



const RootLayout:FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <C.ScrollTop />

      <div className="flex h-screen overflow-hidden">

        <C.Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <C.Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
