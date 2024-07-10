import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });

  const fetchOneUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`);
      const data = await response.json();
      console.log(data);
      setUpdateData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
      const data = await response.json();
      console.log(data);
      setUpdateData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchOneUserData();
  }, []);
  return (
    <div>
      <h1>Update Page</h1>

      <div className="mt-10 flex justify-center items-center">
        <div>
          <form method="post" onSubmit={updateUser}>
            id: <br />
            <input
              type="text"
              name="username"
              disabled
              value={updateData.id}
              className="p-2 border border-black rounded-md"
            />
            <br />
            name: <br />
            <input
              type="text"
              name="name"
              value={updateData.name}
              className="p-2 border border-black rounded-md"
              onChange={changeData}
            />
            <br />
            age: <br />
            <input
              type="text"
              name="age"
              value={updateData.age}
              className="p-2 border border-black rounded-md"
              onChange={changeData}
            />
            <br />
            email: <br />
            <input
              type="email"
              name="email"
              value={updateData.email}
              className="p-2 border border-black rounded-md"
              onChange={changeData}
            />
            <br />
            <button type="submit">Update User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
