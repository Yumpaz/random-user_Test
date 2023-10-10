import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Modal,
  Paper,
} from "@material-ui/core";
import Logo from "./images/logo192.png";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  cardUser: {
    maxWidth: 500,
    margin: "8px auto",
    display: "flex",
    alignItems: "center",
    background: theme.palette.primary.light,
  },
  cardMedia: {
    flex: 1,
  },
  cardContent: {
    flex: 2,
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  confirm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "20%",
    width: "20%",
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%'
  }
}));

const ItemUser = (props) => {
  const { name, country, email, telefono, id } = props.user;
  const [open, setopen] = useState(false);
  const classes = useStyle();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      window.location.reload();
    } catch (error) {
      console.log("error");
    }
  };

  const handleModal = () => {
    setopen(true);
  };

  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={Logo}
        title="Imagen de usuario"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {name}
        </Typography>
        <Typography variant="body1">
          <strong>Pais: </strong> {country}
        </Typography>
        <Typography variant="body1">
          <strong>Correo: </strong> {email}
        </Typography>
        {telefono && (
          <Typography variant="body1">
            <strong>Teléfono: </strong> {telefono}
          </Typography>
        )}
        <br />
        <Box className={classes.actions}>
          {props.isEdit && (
            <Button
              component={Link}
              to={`/edit/${id}`}
              variant="contained"
              color="primary"
            >
              Editar
            </Button>
          )}
          {props.isDelete && (
            <Button variant="contained" color="secondary" onClick={handleModal}>
              Eliminar
            </Button>
          )}
        </Box>
      </CardContent>
      <Modal className={classes.modal} open={open}>
        <Paper className={classes.confirm}>
          <Typography>Esta seguro de eliminar este usuario?</Typography>
          <Box className={classes.modalActions}> 
            <Button variant="contained" color="primary" onClick={handleDelete}>
              Aceptar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setopen(false)}
            >
              Cancelar
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Card>
  );
};

ItemUser.popTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

ItemUser.defaultProps = {
  user: {
    name: "Nombre por defecto",
    country: "País por defecto",
    email: "Email por defecto",
  },
};

export default ItemUser;
