import { FC } from 'react'
import { Translatable } from "@/components/index"
import { Link } from 'react-router-dom'

const Home: FC = () => {
    return (

        <section className=" w-screen min-h-screen absolute inset-0 top-16 bg-[url('/bg.jpg')]">
            <div className="flex items-center justify-between  glass  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-[90%] h-[84%] rounded-2xl border-4 border-white shadow-lg shadow-white px-8 md:px-20">
                <div className=" ">
                    <h1 className="max-w-4xl mb-4 text-3xl font-extrabold   md:text-5xl xl:text-6xl  text-white " >
                        Metal Collection Co. Ltd
                    </h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-sm  text-gray-200">
                        <Translatable text={`The Metal Collection Company is an extension of Mr. Salem Ali Abdullah Al-Qadri Al-Harthy Establishment for Iron and Scrap Trading, which was established in 1418 Hijri in the Jeddah Governorate as a sole proprietorship under Commercial Registration No. (4030147981)..`} />
                    </p>
                    <Link
                        to="/auth/signin"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 border"
                    >
                        <Translatable text='Login' />
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center ">

                    <figure className=' w-80  '>
                        <img
                            className='w-full h-full object-contain drop-shadow-2xl'
                            src="/logo/w.png "
                            alt="mockup"
                        />
                    </figure>
                </div>
            </div>
        </section>


    )
}

export default Home