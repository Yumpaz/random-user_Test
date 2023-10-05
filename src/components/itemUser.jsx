import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Logo from './images/logo192.png'

const useStyle = makeStyles((theme) => ({
  cardUser: {
    maxWidth: 500,
    margin: '8px auto',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.light
  },
  cardMedia: {
    flex: 1,
  },
  cardContent: {
    flex: 2
  }
}));

const ItemUser = (props) => {
  const { name, country, email, telefono } = props.user;
  const classes = useStyle();
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
      </CardContent>
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
