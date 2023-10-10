import axios from "axios";
import React, { useState, useEffect } from "react";
import UserListView from "../view/UserList";

const UserList = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        const { results } = response.data;
        setusers(results);
        console.log(response);
      } catch (error) {
        setloading(true);
        seterror(error.message);
      }
      setloading(false);
    };
    getData();
  }, []);

  return <UserListView users={users} loading={loading} error={error} />;
};

export default UserList;
