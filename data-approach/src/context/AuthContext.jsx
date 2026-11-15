import { createContext, useState } from "react";

export const AuthStore = createContext()



export const AuthContext = ({ children }) => {

    const [registerUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem("registerUsers")))
    const [logInUsers, setLogInUsers] = useState(JSON.parse(localStorage.getItem("loggedInUser")))

    return <AuthStore.Provider value={{ registerUsers, setRegisterUsers, logInUsers, setLogInUsers}}>
      {children}
    </AuthStore.Provider>
}