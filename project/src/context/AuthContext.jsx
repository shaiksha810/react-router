import { useState } from "react";
import { AuthStore } from "./AuthStore";


export const AuthContext = ({ children}) => { 
const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUsers")) || [])
const [logInUser, setLogInUser] = useState(() => JSON.parse(localStorage.getItem("loginUser")) || null)



    return <AuthStore.Provider value={{ registerUser, setRegisterUser, logInUser, setLogInUser}}>
        {children}
    </AuthStore.Provider>

}