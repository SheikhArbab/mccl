import { Link } from "react-router-dom";




export default function NotFound() { 
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-black  fixed z-[99999999] inset-0">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-gray-900 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-myYellow group active:text-myYellow focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-500 group-hover:translate-y-0 group-hover:translate-x-0" />
                    <span className="relative block px-8 py-3 bg-gray-400 border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </a>
            </button>
        </main>

    );
}
