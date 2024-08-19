import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavB = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar 
      bg="primary" 
      variant="dark" 
      expand="lg" 
      expanded={expanded} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">SGBV Reporting App</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/report" onClick={() => setExpanded(false)}>Report</Nav.Link>
            <Nav.Link as={Link} to="/counselling" onClick={() => setExpanded(false)}>Counselling</Nav.Link>
            <Nav.Link as={Link} to="/edu" onClick={() => setExpanded(false)}>Education</Nav.Link>
            <Nav.Link as={Link} to="/stat" onClick={() => setExpanded(false)}>Hot-Maps</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavB;
