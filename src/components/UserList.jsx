import { Box, CircularProgress, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";

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

  return (
    <>
      {loading ? (
        <Box align="center" height="100vh">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Box heigh="100%">
          {users.map((item, i) => (
            <SingleUser key={i} {...item} />
          ))}
        </Box>
      )}
      {error && <Typography align="center">{error}</Typography>}
    </>
  );
};

export default UserList;
