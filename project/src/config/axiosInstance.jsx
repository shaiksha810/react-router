import axios from "axios"


export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com/"
})


axiosInstance.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response
    //   return "hello"
      
    },
    (error) => {
      console.log("error", error)
    }
)