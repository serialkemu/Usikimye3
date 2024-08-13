// src/pages/report/Report.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Live from '../../components/forms/Live';

const VictimForm = () => (
  <div>
    <h2>Victim Report</h2>
    <Form>
      <Form.Group controlId="victimName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="victimContact">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control type="text" placeholder="Enter your contact information" />
      </Form.Group>
      <Form.Group controlId="victimDescription">
        <Form.Label>Description of Incident</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Submit</Button>
    </Form>
  </div>
);

const WitnessForm = () => (
  <div>
    <h2>Witness Report</h2>
    <Form>
      <Form.Group controlId="witnessName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="witnessContact">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control type="text" placeholder="Enter your contact information" />
      </Form.Group>
      <Form.Group controlId="witnessDescription">
        <Form.Label>Description of Incident</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Submit</Button>
    </Form>
  </div>
);

const CorporateForm = () => (
  <div>
    <h2>Corporate Report</h2>
    <Form>
      <Form.Group controlId="institutionName">
        <Form.Label>Institution Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the institution name" />
      </Form.Group>
      <Form.Group controlId="workerName">
        <Form.Label>Worker Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the worker's name" />
      </Form.Group>
      <Form.Group controlId="requestDescription">
        <Form.Label>Description of Request</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Submit</Button>
    </Form>
  </div>
);

const Report = () => {
  return (
    <Container>
      <h1 className="mt-4">Report Page</h1>
      <Row className="mt-5">
        <Col>
          <Live />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <VictimForm />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <WitnessForm />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <CorporateForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Report;
