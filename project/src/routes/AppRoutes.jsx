import { createBrowserRouter, RouterProvider } from "react-router"
// import RegisterPage from "../pages/RegisterPage"
// import LoginPage from "../pages/LoginPage"
import MainLayout from "../layout/MainLayout"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Homepage from "../pages/Homepage"
import Userspage from "../pages/Userspage"
import Productspage from "../pages/Productspage"

const router = createBrowserRouter([
    {
        path:"/",
        element:<PublicRoute />,
        children:[
            {
                path:"",
                element:<LoginPage />
            },
            {
                path:"register",
                element:<RegisterPage />
            }
        ]
    },
    {
        path:"/main",
        element:<ProtectedRoute />,
        children:[
            {
                path:"",
                element:<MainLayout />,
                children:[
                    {
                        path:"",
                        element:<Homepage />
                    },
                    {
                        path:"users",
                        element:<Userspage />
                    },
                    {
                        path:"products",
                        element:<Productspage />
                    },
                ]
            }
        ]
    }
])

const AppRoutes = () => <RouterProvider router={router}/>

export default AppRoutes