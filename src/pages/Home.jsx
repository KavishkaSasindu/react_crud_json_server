import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3000/users");

  //     const user = await response.data;
  //     setUserData(user);
  //     console.log(response.data);
  //   };

  //   fetchData();
  // }, []);

  // const handleDelete = async (userId) => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/users/${userId}`, {
  //       method: "DELETE",
  //     });

  //     const data = await response.json();
  //     console.log("Delete data :", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleDelete = async (userId) => {
    const response = await axios.delete(
      `http://localhost:3000/users/${userId}`
    );

    console.log(response.data);
    console.log("Deleted Data", response.data);
    location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      console.log(data);
      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="w-[80%] h-[90%] flex justify-center items-center">
        <table className="table-auto w-[60%] mt-10">
          <thead className="bg-slate-900 text-white h-[40px]">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <div className="space-x-3">
                    <button
                      className="p-2 border-none rounded-md bg-red-400"
                      onClick={() => {
                        navigate(`/read/${user.id}`);
                      }}
                    >
                      Read
                    </button>
                    <button
                      className="p-2 border-none rounded-md bg-green-400"
                      onClick={() => {
                        navigate(`/update/${user.id}`);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="p-2 border-none rounded-md bg-blue-400"
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
