import React, { Component } from "react";
import "./styles/UserForm.css";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Box
} from "@material-ui/core";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state);
  };

  render() {
    const { name, country, email } = this.props.user;
    return (
      <div className="mydiv">
        <h2 className="title-form">Nuevo Usuario</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <FormControl fullWidth>
            <InputLabel>Nombre: </InputLabel>
            <Input
              type="text"
              name="name"
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              value={email}
            />
            <FormHelperText>Ingresa un email valido</FormHelperText>
          </FormControl>
          <br />
          <Box align="center">
            <Button color="primary" variant="contained">Agregar</Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default UserForm;
