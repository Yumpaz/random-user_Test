import React from "react";
import "./styles/UserForm.css";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Box,
} from "@material-ui/core";

const UserForm = (props) => {
  const { name, country, email } = props.user;
  return (
    <div className="mydiv">
      <h2 className="title-form">Nuevo Usuario</h2>
      <form className="form">
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
          <Button color="primary" variant="contained">
            Agregar
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
