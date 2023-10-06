import React, { useState } from "react";
import userList from "../data";
import Title from "../components/Title";
import ItemUser from "../components/itemUser";

const List = () => {
  const [users, setUsers] = useState(userList);

  return (
    <>
      <Title text="Lista de usuarios" />
      {users.map((item, i) => (
        <ItemUser key={i} user={item} />
      ))}
    </>
  );
};

export default List;
