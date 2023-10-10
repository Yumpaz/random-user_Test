import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Link,
  makeStyles,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Logo from './images/logo512.png';

const useStyle = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar className={classes.menu}>
          <IconButton component={RouterLink} to="/" edge="start" onClick={() => window.location.reload()}>
            <img src={Logo} alt="logo" height="30px" />
          </IconButton>
          {/* <Link component={RouterLink} to="/" href="" color="inherit">
            Inicio
          </Link> */}
          {/* <Link component={RouterLink} to="/Form" href="" color="inherit">
            Formulario
          </Link>
          <Link component={RouterLink} to="/List" href="" color="inherit">
            Lista
          </Link> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
