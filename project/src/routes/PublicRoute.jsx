import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'
import { AuthStore } from '../context/AuthStore'

const PublicRoute = () => {

  
 const { logInUser } = useContext(AuthStore)

 if(logInUser){
    return <Navigate to="/main" replace /> 
 }
 return <Outlet />
 
}

export default PublicRoute