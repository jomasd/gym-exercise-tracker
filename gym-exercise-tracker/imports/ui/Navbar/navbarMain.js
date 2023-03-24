import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export const NavbarMain = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Exercise Tracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
            <LinkContainer to="/exercises">
              <Nav.Link>Exercises</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sets">
              <Nav.Link>Sets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/totalreps">
              <Nav.Link>Total Reps</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/maxweight">
              <Nav.Link>Max Weight</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/signin">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


