import React, { useEffect, useState } from "react";
//import userList from "../data";
import Title from "../components/Title";
import ItemUser from "../components/itemUser";
import axios from "axios";

const List = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try{
      const response = await axios.get("http://localhost:3000/users");
      const { data } = response
      setUsers(data)
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} isEdit isDelete/>
      ))}
    </>
  );
};

export default List;
