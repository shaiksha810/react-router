import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const Userspage = () => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {

    const users = await axiosInstance.get("/users")
    // console.log(users.data);
    setUsersData(users.data);

};
    useEffect(() => {
      getUsers();
    }, []);

  return (
    <div className="min-h-screen bg-gray-50 grid grid-cols-4 gap-4 p-4 sm:p-6 md:p-8">
    {
        usersData.map((elem) => {
            return <UserCard key={elem.id} user={elem}/>
        })
    }
    </div>
  );
};

export default Userspage;
