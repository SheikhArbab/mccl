import { useEffect } from "react";
import { Link } from "react-router-dom";




export default function NotFound() {

    useEffect(() => {

        document.title = 'Oops page not found! | Metal Collection .Co LTD'

    }, [])

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-myGreen  fixed z-[99999999] inset-0">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-myYellow px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-myYellow group active:text-myYellow focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-myYellow group-hover:translate-y-0 group-hover:translate-x-0" />
                    <span className="relative block px-8 py-3 bg-myGreen border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </a>
            </button>
        </main>

    );
}
