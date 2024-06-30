import { FC } from 'react'
import { Translatable } from "@/components/index"
import { Link } from 'react-router-dom'

const Home: FC = () => {
    return (

        <section className="bg-white dark:bg-graydark w-full min-h-screen flex items-center ">
            <div className="flex items-center justify-between px-4 py-8 w-full  ">
                <div className=" ">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        <Translatable text={`Architects Of Tomorrow's Digital Frontier`} />
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        <Translatable text={`We help Start-Ups, SMEs and Enterprises grow their business with embedded engineers and outsourced software development.`} />
                    </p>
                    <Link
                        to="/auth/signin"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
                <div className="hidden lg:flex items-center justify-center  ">
                    <img
                        className='w-full h-full object-contain'
                        src="/csv.png "
                        alt="mockup"
                    />
                </div>
            </div>
        </section>


    )
}

export default Home