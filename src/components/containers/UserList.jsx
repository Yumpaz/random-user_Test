import axios from "axios";
import React, { useState, useEffect } from "react";
import UserListView from "../view/UserList";

const UserList = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [page, setpage] = useState(0);
  const [filteruser, setfilteruser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        const { results } = response.data;
        setusers([...users, ...results]);
        setfilteruser([...users, ...results]);
      } catch (error) {
        setloading(true);
        seterror(error.message);
      }
      setloading(false);
    };
    getData();
  }, [page]);

  const handleLoad = () => {
    setpage(page + 1);
  };

  const handleFilter = (e) => {
    const filtered = users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(e.target.value) ||
        user.name.last.toLowerCase().includes(e.target.value)
      );
    });
    setfilteruser(filtered);
  };
  return (
    <UserListView
      users={filteruser}
      loading={loading}
      error={error}
      onLoad={handleLoad}
      onFilter={handleFilter}
    />
  );
};

export default UserList;
