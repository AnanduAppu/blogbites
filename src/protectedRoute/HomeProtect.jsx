import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../Contex/CreateContex';

function HomeProtect({ element }) {
  const { userDataFromSignup } = useContext(UserContext);
  const [userTokenCookie, setUserTokenCookie] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("user/userAuth", { withCredentials: true });
        if (response.data.success) {
          console.log("the response",response.data)
          setUserTokenCookie(true);
        }
      } catch (error) {
        console.error('Error fetching user authentication:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userDataFromSignup && userTokenCookie) {
    return element;
  } else {
    return <Navigate to='/login' replace />;
  }
}

export default HomeProtect;
