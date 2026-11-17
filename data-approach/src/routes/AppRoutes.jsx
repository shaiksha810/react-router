import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../layout/AuthLayout"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import MainLayout from "../layout/MainLayout"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"

const AppRoutes = () => {

 const router = createBrowserRouter([
    {
        path:"/",
        element:<PublicRoute />,
        children:[
            {
                path:"",
                element:<AuthLayout />,
                children:[
                    {
                        path:"register",
                        element:<RegisterPage />
                    },
                    {
                        path:"",
                        element:<LoginPage />
                    }
                ]
            }
        ]

    },
    {
        path:"/main",
        element:<ProtectedRoute />,
        children:[
            {
                path:"",
                element:<MainLayout />
            }
        ]
    }
 ])


  return <RouterProvider router={router}/>
}

export default AppRoutes