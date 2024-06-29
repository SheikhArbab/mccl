import * as R from "react-router-dom";
import * as L from "@/layout/index";
import * as P from "@/pages/index";

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';


const App = () => {


  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  const router = R.createBrowserRouter(
    R.createRoutesFromElements(
      //RootLayout start
      <R.Route path='/' element={<L.RootLayout />}>


        <Route
          index
          element={
            <>
              <PageTitle  title="eCommerce Dashboard | Metal Collection .Co LTD" />
              <P.ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Metal Collection .Co LTD" />
              <P.Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Metal Collection .Co LTD" />
              <P.Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Metal Collection .Co LTD" />
              <P.FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Metal Collection .Co LTD" />
              <P.FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Metal Collection .Co LTD" />
              <P.Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Metal Collection .Co LTD" />
              <P.Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Metal Collection .Co LTD" />
              <P.Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Metal Collection .Co LTD" />
              <P.Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Metal Collection .Co LTD" />
              <P.Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Metal Collection .Co LTD" />
              <P.SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Metal Collection .Co LTD" />
              <P.SignUp />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <PageTitle title="Oops page not found! | Metal Collection .Co LTD" />
              <P.NotFound />
            </>
          }
        />



      </R.Route>
      //  RootLayout end
    )
  );



  return loading ? <Loader /> : (
    <>
      <R.RouterProvider
        router={router} />
    </>
  )
}

export default App