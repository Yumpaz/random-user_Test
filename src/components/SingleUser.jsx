import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

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
}));

const SingleUser = ({ picture, name, location, email, phone }) => {
  const classes = useStyle();

  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={picture.large}
        title="Imagen de usuario"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {`${name.title} ${name.first} ${name.last}`}
        </Typography>
        <Typography variant="body1">
          <strong>Pais: </strong> {location.country}
        </Typography>
        <Typography variant="body1">
          <strong>Correo: </strong> {email}
        </Typography>
          <Typography variant="body1">
            <strong>Teléfono: </strong> {phone}
          </Typography>
        <br />
      </CardContent>
    </Card>
  );
};

SingleUser.popTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

SingleUser.defaultProps = {
  user: {
    name: "Nombre por defecto",
    country: "País por defecto",
    email: "Email por defecto",
  },
};

export default SingleUser;
