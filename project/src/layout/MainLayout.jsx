import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="flex gap-10">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout