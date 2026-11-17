import { NavLink, useNavigate } from "react-router";
import { useForm} from "react-hook-form"
import { useContext } from "react";
import { AuthStore } from "../context/AuthStore";


const LoginPage = () => {
    console.log("loginPage rendering...");
    
    
  const {register, handleSubmit, reset, formState:{errors}} = useForm()
  const {registerUser, setLogInUser} = useContext(AuthStore)
  const navigate = useNavigate()

  const handleLogin = (data) => {

    let userr = registerUser.find((user) => user.email === data.email && user.password === data.password)
    console.log(userr)
    
    if(userr){
        setLogInUser(userr)
        localStorage.setItem("loginUser", JSON.stringify(userr))
        navigate("/main")
    }else{
       alert("user not found or Invalid credentials")
       reset()
    }


  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome Back...👋
        </p>

        <form 
         onSubmit={handleSubmit(handleLogin)}
         className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {required:"Email is required"})}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              minLength={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {required:"password is required"})}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Please Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Didn't have an account?{" "}
          <NavLink
          to={"/register"}
            className="text-blue-600 font-semibold"
          >
            Register
          </NavLink>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
