import Logo from "../assets/img/Logo.png";
import "../style/NavBar.css";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img alt="" src={Logo} width="200px" className="d-inline-block align-top" />
            </Link>
          </Navbar.Brand>
          <Form>
            <Link to="/search">
              <Search />
            </Link>
          </Form>
          <Nav>
            <Button variant="outline-info">Login</Button> <Button variant="info">Register</Button>{" "}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar;
