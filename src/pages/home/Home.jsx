import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4">Welcome to the SGBV Reporting App</h1>
          <p className="lead">Report, follow up, and get help with SGBV cases</p>
          <Button variant="primary" size="lg" as={Link} to="/report">Report Now</Button>
        </Container>
      </div>

      {/* Feature Sections */}
      <Container className="my-5">
        <Row className="text-center">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Report Cases</Card.Title>
                <Card.Text>Submit reports anonymously and get help immediately.</Card.Text>
                <Button variant="primary" as={Link} to="/report">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Counselling</Card.Title>
                <Card.Text>Access peer-to-peer, group therapy, and professional counselling sessions.</Card.Text>
                <Button variant="primary" as={Link} to="/counselling">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>Learn about SGBV and ways to prevent and address it.</Card.Text>
                <Button variant="primary" as={Link} to="/edu">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Statistics & Maps</Card.Title>
                <Card.Text>View statistics and maps of reported cases and repeat offenders.</Card.Text>
                <Button variant="primary" as={Link} to="/stat">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Help/About/Contact</Card.Title>
                <Card.Text>Find more information and get in touch with us.</Card.Text>
                <Button variant="primary" as={Link} to="/about">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
