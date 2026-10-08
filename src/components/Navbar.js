import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="site-navbar">
      <Container>
        <Navbar.Brand href="#home">Nisha.M | AI & DS Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComp;
