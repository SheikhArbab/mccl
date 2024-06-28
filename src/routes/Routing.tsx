import { Suspense } from "react";
import * as R from "react-router-dom";
import * as L from "@/layout/index";
import * as P from "@/pages/index"
import * as C from "@/components/index";
// import * as Con from "@/constants/Roles";
import * as Lazy from "./index";



const Loading = () => <main className='w-full min-h-screen flex items-center justify-center bg-gray-100'><C.Spinner size="9" /></main>


interface Props {
    isToken: boolean;
    setIsToken: Function;
}


const Routing = ({ isToken, setIsToken }: Props) => {


    const router = R.createBrowserRouter(
        R.createRoutesFromElements(
            //RootLayout start
            <R.Route path='/' element={<L.RootLayout isToken={isToken} setIsToken={setIsToken} />}>
                <R.Route index element={<P.Home />} />
                


                {/* PrivateRoutes start */}
                <R.Route path='/' element={<L.Authenticate />}> 
                    {Lazy.Authenticate.length > 0 && Lazy.Authenticate.map((v, i) => <R.Route
                        key={i} path={v.path} element={
                            <Suspense fallback={<Loading />}>
                                <v.element  />
                            </Suspense>
                        } />)}


                </R.Route>
                {/* PrivateRoutes  end*/}


                {/* Logout start*/}
                <R.Route path='/' element={<L.LogOut />}>
                    <R.Route path='/login' element={<P.Login />} /> 
                </R.Route>
                {/* Logout  end*/}

                <R.Route path="*" element={
                    <Suspense fallback={<Loading />}>
                        <P.NotFound />
                    </Suspense>
                } />

            </R.Route>
            //  RootLayout end
        )
    );


    return (
        <>
            <R.RouterProvider
                router={router} />
        </>
    )
}

export default Routing