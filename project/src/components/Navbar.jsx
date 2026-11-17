import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex flex-col min-h-screen w-64 p-6 bg-gray-900 text-white">
      <p className="text-2xl font-bold mb-10">Logo.</p>

      <div className="flex flex-col gap-5 flex-1">
        <NavLink to="/main" className="hover:text-blue-400">Home</NavLink>
        <NavLink to="/main/users" className="hover:text-blue-400">Users</NavLink>
        <NavLink to="/main/products" className="hover:text-blue-400">Products</NavLink>
      </div>

      <button 
        className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg transition"
        onClick={() => localStorage.removeItem("loginUser")}
        >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
