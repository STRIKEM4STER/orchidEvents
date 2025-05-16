import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='p-3'>
      <Container>
        <Navbar.Brand as={Link} to="/">Orchid Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/review">Reviews</Nav.Link>
            {/* Add more Nav.Link as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
