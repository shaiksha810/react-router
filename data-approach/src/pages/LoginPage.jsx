import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";

const LoginPage = () => {

    const {register, reset, handleSubmit, formState:{errors} } = useForm()
    const navigate = useNavigate()

    const {registerUsers, setLogInUsers} = useContext(AuthStore)

    const handleLogin = (data) => {
     const userr =  registerUsers.find((user) => user.email === data.email && user.password === data.password)     
    
    if(userr) {
      setLogInUsers(data)
      localStorage.setItem("loggedInUser", JSON.stringify(data))
      navigate("/main") 
    }else{
      alert("User not found or Invalid credentials")
      reset()
     }
      
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form 
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                {...register("email", {required:"Email is Required"})}
              />
              {errors.email && errors.email.message}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                name="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                {...register("password", {required:"Password is Required"})}
              />
              {errors.password && errors.password.message}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-7">
          Don't have an account?{" "}
          <p
          onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
          >
            Create Account
          </p>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
