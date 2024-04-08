import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import UserContext from '../Contex/CreateContex'



function HomeProtect({element}) {
const {userDataFromSignup}=useContext(UserContext )

const allCookies = document.cookie;

    
    const cookiesArray = allCookies.split('; ');


    const userTokenCookie = cookiesArray.find(cookie => cookie.startsWith('userToken='));


    if (userDataFromSignup && userTokenCookie) {

        return(
            element
        )
        
    }else{
        return(
            <Navigate to='/login' replace/>
        )
    }


}

export default HomeProtect