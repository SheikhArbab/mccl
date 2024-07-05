import { Link } from 'react-router-dom';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import DarkModeSwitcher from './DarkModeSwitcher';
import { Translatable } from "@/components/index"
// import { useState } from 'react';
// import { FaAngleDown } from "react-icons/fa6";
// import { useLanguage } from '@/hooks/Language';
import { useSelector } from 'react-redux';
import { UserState } from '@/types/User';


const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {

  // const [langDropDown, setLangDropDown] = useState<boolean>(false)


  const { user } = useSelector((state: UserState) => state.auth)


  // const { translateText } = useLanguage();


  // const handleTranslateSite = async (source: string, targetLang: string) => {
  //   const elementsToTranslate = document.querySelectorAll('[data-translate]');

  //   try {
  //     await Promise.all(Array.from(elementsToTranslate).map(async (element: any) => {
  //       const text = element.textContent || '';
  //       const translatedText = await translateText(text, targetLang, source);
  //       element.textContent = translatedText;
  //     }));
  //   } catch (error) {
  //     console.error('Error translating elements:', error);
  //   }
  // };




  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          {user && <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!w-full delay-300'
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && 'delay-400 !w-full'
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!w-full delay-500'
                    }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!h-0 !delay-[0]'
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!h-0 !delay-200'
                    }`}
                ></span>
              </span>
            </span>
          </button>}
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={"/logo/w.png"} className='w-8 object-contain hidden dark:block' alt="Logo" />
            <img src={"/logo/b.png"} className='w-8 object-contain dark:hidden' alt="Logo" />
          </Link>
        </div>


        <div></div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {user && <DropdownNotification />}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {user && <DropdownMessage />}
            {/* <!-- Chat Notification Area --> */}

            {/* <li className='relative'>
              <button
                onClick={() => setLangDropDown(!langDropDown)}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800   focus:outline-none  
                 font-medium rounded-lg  px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700
                    capitalize text-xs"
                type="button"
              >
                <Translatable text='change language' /> {" "}
                <FaAngleDown className="w-2.5 h-2.5 ms-3" />
              </button>

              {langDropDown && <div onClick={() => setLangDropDown(!langDropDown)} className='fixed inset-0  z-50 top-0 left-0 w-screen h-screen'></div>}

              {langDropDown && <div
                id="dropdown"
                className=" absolute top-10 right-0 z-[60] bg-white dark:bg-black divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li onClick={() => handleTranslateSite("ar", "en")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-900 cursor-pointer capitalize">
                    <Translatable text='English' />
                  </li>
                  <li onClick={() => handleTranslateSite("en", "ar")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-900 cursor-pointer capitalize">
                    <Translatable text='Arabic' />
                  </li>

                </ul>
              </div>}
            </li> */}

            {!user && <li>
              <Link to={"/auth/signin"} className="text-white bg-blue-700 hover:bg-blue-800   focus:outline-none  
                 font-medium rounded-lg  px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700
                    capitalize text-xs">  <Translatable text='Login / تسجيل الدخول' />
              </Link>
            </li>}

          </ul>

          {/* <!-- User Area --> */}
          {user && <DropdownUser />}
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
