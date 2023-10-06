import React from "react";
import ItemUser from "../components/itemUser";
import Title from "../components/Title";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Count from "../components/Count";

const data = {
  name: "Miguel Marsiglia",
  country: "Colombia",
  email: "miguel@prueba.com",
  telefono: "09999999",
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "24px 8px",
    height: "80vh",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Title text="BIENVENIDO A USER RANDOM" />
      <Count/>
      <ItemUser user={data} />
      <Typography variant="body2" align="center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid
        voluptate a facere quia nihil explicabo vel, illo possimus velit maiores
        quisquam laudantium, eligendi provident incidunt saepe ad praesentium
        perferendis.
      </Typography>
    </Box>
  );
};

export default Home;
