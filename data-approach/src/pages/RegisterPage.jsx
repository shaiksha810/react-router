import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";

const RegisterPage = () => {

    const {registerUsers, setRegisterUsers} = useContext(AuthStore)

    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const navigate = useNavigate()

    const registerData = (data) => {

        setRegisterUsers([...registerUsers, data])
        localStorage.setItem("registerUsers", [JSON.stringify([...registerUsers, data])])
        reset()
        navigate("/main")

    }
    
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Sign up to get started with us
          </p>
        </div>

        {/* Registration Form */}
        <form 
        onSubmit={handleSubmit(registerData)}
        className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                {...register("name", {required:"Name is required"})}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                {...register("email", {required:"Email is required"})}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

              <input
                name="password"
                placeholder="Create a password"
                minLength={6}
                className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                {...register("password", {required:"Password is required"})}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-7">
          Already have an account?
          <p
          onClick={() => navigate("/login")} 
          className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
            Login
          </p>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
