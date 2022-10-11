import Logo from "../assets/img/Logo.png";
import "../style/NavBar.css";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitData = () => {
    navigate(`/search/${input}`);
  };
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img alt="" src={Logo} width="200px" className="d-inline-block align-top" />
            </Link>
          </Navbar.Brand>
          <Form onSubmit={submitData}>
            {/* <Form.Control type="text" placeholder="What do you want to watch?" className="me-2" aria-label="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} /> */}
            <Form.Control
              type="text"
              placeholder="What do you want to watch?"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
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
