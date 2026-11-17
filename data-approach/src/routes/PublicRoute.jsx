import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'
import { AuthStore } from '../context/AuthContext'

const PublicRoute = () => {

 const {logInUsers} = useContext(AuthStore)
//  console.log(logInUsers);

 

    if(logInUsers){
      return <Navigate to="/main" replace />
    }

   return <Outlet />
}

export default PublicRoute