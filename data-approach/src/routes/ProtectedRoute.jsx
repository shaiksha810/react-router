import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthStore } from "../context/AuthContext"

const ProtectedRoute = () => {

   const {logInUsers} = useContext(AuthStore)
   
   if(!logInUsers){
    return <Navigate to="/" replace/>
   }
   
  return <Outlet />
}

export default ProtectedRoute