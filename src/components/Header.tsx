import { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineLanguage } from "react-icons/md";
import { FaUser, FaAngleDown } from "react-icons/fa";
import { useLanguage } from '@/hooks/Language';
import * as C from "@/components/index"
import { useSelector } from 'react-redux';
import { UserState } from '@/types/index';

const Header: FC = () => {

  const [dropDown, setDropDown] = useState<boolean>(false);

  const [dropDownValue, setDropDownValue] = useState<string>("en");


  const [profileDrop, setProfileDrop] = useState<boolean>(false)


  const { user } = useSelector((e: UserState) => e.auth)


  const { translateText } = useLanguage();

  const handleTranslateSite = (lang: string) => {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(async (element) => {
      const text = element.textContent || '';
      await translateText(text, lang);
    });
  };



  return (
    <header className="bg-black  ">
      <nav className=" flex flex-wrap items-center justify-between mx-auto p-4 h-20  ">


        <ul className="  items-center flex flex-col md:flex-row gap-8  text-sm ">
          <li>
            <Link to={'/'}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo/w.png"
                className="h-12  "
              />
              <h1 className='text-white font-bold text-xl'>
                <C.Translatable text={'Metal Collection .Co LTD'} />
              </h1>

            </Link>
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
              dropDown && <ul
                className='absolute z-20 bg-white text-gray-900 shadow-md rounded-md top-12 right-0 uppercase px-3 py-2 font-semibold w-20 text-center '>
                {["en", "ar"].map(i => <li key={i}
                  onClick={() => {
                    setDropDownValue(i);
                    handleTranslateSite(i);
                    setDropDown(!dropDown)
                  }}
                  className='mb-2 border-0 border-gray-300 border-b pb-2 cursor-pointer'>
                  {i}
                </li>)}
              </ul>
            }
            {dropDown && <div onClick={() => setDropDown(!dropDown)} className='fixed inset-0 z-10 '></div>}

          </li>

          {user ? <li className='relative cursor-pointer'>

            {profileDrop && <i onClick={() => setProfileDrop(!profileDrop)} className='fixed inset-0 z-10'></i>}

            {profileDrop && <ul className='absolute bg-white h-fit top-12 right-0 z-10 rounded-md shadow-md text-black px-2 py-4 flex flex-col gap-3'>

              <li className='flex items-center gap-2 capitalize font-semibold  bg-red-4 border-0 border-b border-gray-500  py-2 hover:text-myYellow '>
                <C.Translatable text={"salam"} />
                <C.Translatable text={user?.roles} />
              </li>

              <li className=' font-semibold  bg-red-4 border-0 border-b border-gray-500  py-2 hover:text-myYellow '>
                {user.email}
              </li>


              <li onClick={() => setProfileDrop(!profileDrop)} className=' font-semibold  bg-red-4 border-0 border-b border-gray-500  py-2 hover:text-myYellow capitalize'>
                <Link to={"/profile"} className='w-full flex items-center gap-6'>
                  <C.Translatable text={"profile"} />
                  <FaUser size={20} />
                </Link>
              </li>



            </ul>}

            <figure onClick={() => setProfileDrop(!profileDrop)} className=' rounded-full border-2 border-myYellow w-10 h-10 overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://avatars.mds.yandex.net/i?id=a157bd26cb6bf541db7a802d7781b0d70ddcfff8-10702829-images-thumbs&n=13" />
            </figure>

          </li> : <li>
            <Link to={"/login"} className=' flex items-center gap-1 bg-gray-500/50 rounded-full px-4 py-3 font-semibold transition-all duration-300 hover:bg-gray-300 hover:text-gray-700' >
              <FaUser size={20} />
              <C.Translatable text=" Login" />
            </Link>
          </li>}


        </ul>


      </nav>
    </header>

  )
}

export default Header