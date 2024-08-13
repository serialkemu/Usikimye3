import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
        <footer className="bg-primary text-white text-center py-3">
        <Container>
          <p>&copy; 2024 SGBV Reporting App. All rights reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            <Nav.Link href="#help" className="text-white">Help</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </div>
  )
}

export default Footer