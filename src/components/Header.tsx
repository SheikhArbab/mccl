import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineLanguage } from "react-icons/md";
import { FaUser, FaAngleDown } from "react-icons/fa";

const Header: FC = () => {

  const [dropDown, setDropDown] = useState<boolean>(false);

  const [dropDownValue, setDropDownValue] = useState<string>("en");

  return (
    <header className="bg-black fixed inset-x-0 z-20">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20 overflow-hidden md:overflow-visible">


        <ul className="  items-center flex flex-col md:flex-row gap-8  text-sm ">
          <li>
            <Link to={'/'}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo/w.png"
                className="h-12  "
              />
            </Link>
          </li>
          {
            [
              {
                title: "home",
                url: "/"
              },
              {
                title: "about",
                url: "/about"
              },
              {
                title: "services",
                url: "/services"
              },
              {
                title: "contact",
                url: "/contact"
              },
            ].map(v => <li key={v.title}>
              <NavLink
                to={v.url}
                className="block py-2 px-3 text-white duration-300 transition-all hover:text-myYellow  capitalize rounded  nav md:p-0  font-semibold"
                aria-current="page"
              >
                {v.title}
              </NavLink>
            </li>)
          }
          <li>
            <ul className="md:hidden flex gap-2 items-center text-white text-sm ">

              <li className='relative'>
                <button onClick={() => setDropDown(!dropDown)} className=' flex items-center gap-1 bg-gray-500/50 rounded-full px-4 py-3 font-semibold uppercase '>
                  <MdOutlineLanguage size={20} /> {dropDownValue}
                  <FaAngleDown size={20} />
                </button>
                {
                  dropDown && <ul className='absolute z-20 bg-white text-gray-900 shadow-md rounded-md top-12 right-0 uppercase px-3 py-2 font-semibold w-20 text-center'>
                    {["en", "ar"].map(i => <li key={i} onClick={() => setDropDownValue(i)} className='mb-2 border-0 border-gray-300 border-b pb-2 cursor-pointer'>{i}</li>)}
                  </ul>
                }
                {dropDown && <div onClick={() => setDropDown(!dropDown)} className='fixed inset-0 z-10 '></div>}

              </li>

              <li>
                <Link to={"/login"} className=' flex items-center gap-1 bg-gray-500/50 rounded-full px-4 py-3 font-semibold'>
                  <FaUser size={20} />
                  Login in
                </Link>
              </li>


            </ul>
          </li>

        </ul>




        <ul className="hidden md:flex gap-2 items-center text-white text-sm ">

          <li className='relative'>
            <button onClick={() => setDropDown(!dropDown)}
             className=' flex items-center gap-1 bg-gray-500/50 transition-all duration-300 hover:bg-gray-300 hover:text-gray-700 rounded-full px-4 py-3 font-semibold uppercase'>
              <MdOutlineLanguage size={20} /> {dropDownValue}
              <FaAngleDown size={20} />
            </button>
            {
              dropDown && <ul className='absolute z-20 bg-white text-gray-900 shadow-md rounded-md top-12 right-0 uppercase px-3 py-2 font-semibold w-20 text-center '>
                {["en", "ar"].map(i => <li key={i} onClick={() => setDropDownValue(i)} className='mb-2 border-0 border-gray-300 border-b pb-2 cursor-pointer'>{i}</li>)}
              </ul>
            }
            {dropDown && <div onClick={() => setDropDown(!dropDown)} className='fixed inset-0 z-10 '></div>}

          </li>

          <li>
            <Link to={"/login"} className=' flex items-center gap-1 bg-gray-500/50 rounded-full px-4 py-3 font-semibold transition-all duration-300 hover:bg-gray-300 hover:text-gray-700' >
              <FaUser size={20} />
              Login in
            </Link>
          </li>


        </ul>


{/* <div>
<label className="hamburger bg-red-200">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
</div> */}

      </nav>
    </header>

  )
}

export default Header