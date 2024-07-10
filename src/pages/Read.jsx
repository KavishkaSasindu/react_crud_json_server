import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();

  const [oneUserData, setOneUserData] = useState({});

  const fethcOneUser = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    console.log(data);
    setOneUserData(data);
  };

  useEffect(() => {
    fethcOneUser();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-10">One User Data</h1>
      <div className="flex justify-center items-center mt-10">
        <div>
          <h1 className="text-center">{oneUserData.id}</h1>
          <h1>{oneUserData.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Read;
