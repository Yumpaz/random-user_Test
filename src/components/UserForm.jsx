import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/UserForm.css";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Box,
} from "@material-ui/core";
import axios from "axios";

const UserForm = (props) => {
  const { name, country, email, id } = props.user;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", props.user);
      navigate("/List");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:3000/users/${id}`, props.user);
      navigate("/List");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mydiv">
      <h2 className="title-form">Nuevo Usuario</h2>
      <form className="form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel>Nombre: </InputLabel>
          <Input
            type="text"
            name="name"
            onChange={props.onChange}
            value={name}
          />
          <FormHelperText>Ingresa nombre y apellido</FormHelperText>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel>País: </InputLabel>
          <Input
            type="text"
            name="country"
            onChange={props.onChange}
            value={country}
          />
          <FormHelperText>Ingresa el país de origen</FormHelperText>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel>Email: </InputLabel>
          <Input
            type="text"
            name="email"
            onChange={props.onChange}
            value={email}
          />
          <FormHelperText>Ingresa un email valido</FormHelperText>
        </FormControl>
        <br />
        <Box align="center">
          {props.isEdit ? (
            <Button color="primary" variant="contained" onClick={handleEdit}>
              Guardar
            </Button>
          ) : (
            <Button type="submit" color="primary" variant="contained">
              Agregar
            </Button>
          )}
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
