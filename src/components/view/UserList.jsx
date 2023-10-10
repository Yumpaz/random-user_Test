import { Box, Button, CircularProgress, Typography, TextField } from "@material-ui/core";
import React from "react";
import SingleUser from "../SingleUser";
import Modal from "../Modal";

const UserList = ({ onLoad, users, loading, error, onFilter }) => {
  return (
    <>
    <TextField label="Buscar" onChange={onFilter}/>
      {loading ? (
        <Box align="center" height="100vh"></Box>
      ) : (
        <Box heigh="100%">
          {users.map((item, i) => (
            <SingleUser key={i} {...item} />
          ))}
          <Box>
            <Button align="center" variant="contained" color="secondary" onClick={onLoad}>
              Cargar más
            </Button>
          </Box>
        </Box>
      )}
      {error && <Typography align="center">{error}</Typography>}
      {loading && (
        <Modal>
          <CircularProgress color="secondary" />
        </Modal>
      )}
    </>
  );
};

export default UserList;
