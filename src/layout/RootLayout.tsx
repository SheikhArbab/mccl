import * as C from "@/components/index";
import { Outlet } from "react-router-dom"


interface Props {
    isToken: boolean;
    setIsToken: Function;
}


const RootLayout = ({ isToken }: Props) => {


    return (
        <>
            <C.ScrollTop />
            <C.Header />
            <main className="w-full min-h-screen pt-20">
                <Outlet />
            </main>
            <C.Footer />
            {isToken &&
                alert("Your session has expired. Please log in again to continue using the app.")}
        </>
    )
}

export default RootLayout