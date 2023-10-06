import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../themeConfig";
import Home from "../pages/Home";
import Form from "../pages/Form";
import List from "../pages/List";
import Layout from "../layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "../pages/User";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/List" element={<List />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
