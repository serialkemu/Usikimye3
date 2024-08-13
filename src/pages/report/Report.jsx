// src/pages/report/Report.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Live from '../../components/forms/Live';
import Victim from '../../components/forms/Victim';
import Witness from '../../components/forms/Witness';
import Corp from '../../components/forms/Corp';


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
          <Victim/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Witness/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Corp />
        </Col>
      </Row>
    </Container>
  );
}

export default Report;
