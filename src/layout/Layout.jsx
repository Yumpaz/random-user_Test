import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
