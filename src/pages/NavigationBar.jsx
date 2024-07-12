import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import '../fontstyles.css'; // Ensure your fontstyles.css is imported correctly
import './NavigationBar.css'; // Ensure your NavigationBar.css is imported correctly


function NavigationBar() {
  return (
    <Navbar bg="light" variant="light" >
      {/* Use a regular Container for centering */}
      <Container>
        <Navbar.Brand className="poppins-bold-italic" href="/home">E4G</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Add a specific class for better selector specificity */}
          <Nav className="justify-content-center nav-links mr-auto poppins-medium">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/team">Our Team</Nav.Link>
            {/* <Nav.Link href="/program">Our Program</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;