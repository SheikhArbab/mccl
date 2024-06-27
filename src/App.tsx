import { Routing } from "@/routes/index"; 
// import { UserState } from "@/types/index";
import { useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useDispatch, useSelector } from "react-redux";
// import { currentUser } from "./redux/features/authSlice"; 

const App = () => {


  // const { token } = useSelector((state: UserState) => state.auth);
  // const dispatch = useDispatch();

  const [isToken, setIsToken] = useState<boolean>(false);

  // useEffect(() => {
  //   let intervalId: NodeJS.Timeout;

  //   if (token) {
  //     intervalId = setInterval(() => {
  //       const decodedToken = jwtDecode(token);
  //       if (decodedToken) {
  //         const { exp } = decodedToken;
  //         if (exp !== undefined && exp < Date.now() / 1000) {
  //           setIsToken(!isToken)
  //           dispatch(currentUser({ user: null, token: null }));
  //         }
  //       }
  //     }, 3000);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [token, dispatch]);




  return (
 
    <Routing
      isToken={isToken}
      setIsToken={setIsToken}
    />
  )
}

export default App