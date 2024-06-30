import { Suspense } from "react";
import * as R from "react-router-dom";
import * as L from "@/layout/index";
import * as P from "@/pages/index";
import { Route } from 'react-router-dom';
import { PageTitle } from '@/components/index';
import { routes, authenticate } from "./index";
import Loader from "@/common/Loader";

const Routing = () => {


    const router = R.createBrowserRouter(
        R.createRoutesFromElements(
            //RootLayout start
            <R.Route path='/' element={<L.RootLayout />}>





                {routes.map(r => <Route path={r.path} element={<>
                    <PageTitle title={r.title} />
                    <r.element />
                </>} />)}



                {/* PrivateRoutes start */}
                <R.Route path='/' element={<L.Authenticate />}>
                    {authenticate.length > 0 && authenticate.map((v, i) => <R.Route
                        key={i} path={v.path} element={
                            <Suspense fallback={<Loader />}>
                                <v.element />
                            </Suspense>
                        } />)}
                </R.Route>
                {/* PrivateRoutes  end*/}


                {/* Logout start*/}
                <R.Route path='/' element={<L.LogOut />}>
                    <Route index element={<> <PageTitle
                        title="Metal Collection .Co LTD" />
                        <P.Home /> </>} />
                    <R.Route path='/auth/signin' element={<P.SignIn />} />
                </R.Route>
                {/* Logout  end*/}

            </R.Route>
            //  RootLayout end
        )
    );


    return <R.RouterProvider router={router} />
}

export default Routing