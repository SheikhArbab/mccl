

import Loader from './common/Loader';
import { useEffect, useState } from 'react';
import Routing from '@/routes/Routing';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from './types/User';
import { jwtDecode } from 'jwt-decode';
import { currentUser } from './redux/features/authSlice';





const App = () => {



  const { token } = useSelector((state: UserState) => state.auth);
  const dispatch = useDispatch();



  const [isToken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (token) {
      intervalId = setInterval(() => {
        const decodedToken = jwtDecode(token);
        if (decodedToken) {
          const { exp } = decodedToken;
          if (exp !== undefined && exp < Date.now() / 1000) {
            setIsToken(!isToken)
            localStorage.removeItem("token")
            dispatch(currentUser({ user: null, token: null }));
          }
        }
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [token, dispatch]);



  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);






  return loading ? <Loader /> : <Routing />
}

export default App