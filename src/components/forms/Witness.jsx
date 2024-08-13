// src/components/forms/Witness.jsx
import React, { useState } from 'react';
import { Container, Form, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Witness = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
  };

  const progress = (step / 3) * 100;

  return (
    <Container>
      <h2>Witness Report</h2>
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-3" />
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <Form.Group controlId="witnessName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="witnessContact">
              <Form.Label>Contact Information (if you consent to provide it)</Form.Label>
              <Form.Control type="text" placeholder="Enter your contact information" />
            </Form.Group>
            <Button variant="primary" onClick={nextStep} className="mt-3">Next</Button>
          </>
        )}

        {step === 2 && (
          <>
            <Form.Group controlId="incidentDetails">
              <Form.Label>Details of the Incident</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What happened? A clear and detailed account of the incident." />
            </Form.Group>
            <Form.Group controlId="incidentWhen">
              <Form.Label>When did the incident occur?</Form.Label>
              <Form.Control type="text" placeholder="Enter the date and time" />
            </Form.Group>
            <Form.Group controlId="incidentWhere">
              <Form.Label>Where did the incident occur?</Form.Label>
              <Form.Control type="text" placeholder="Enter the location" />
            </Form.Group>
            <Form.Group controlId="incidentWho">
              <Form.Label>Who was involved?</Form.Label>
              <Form.Control type="text" placeholder="Enter the names of those involved" />
            </Form.Group>
            <Button variant="secondary" onClick={previousStep} className="mt-3">Back</Button>
            <Button variant="primary" onClick={nextStep} className="mt-3 ml-3">Next</Button>
          </>
        )}

        {step === 3 && (
          <>
            <Form.Group controlId="witnessStatement">
              <Form.Label>Your Statement</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Provide your statement as a witness" />
            </Form.Group>
            <Form.Group controlId="witnessAdditionalInfo">
              <Form.Label>Additional Information</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Any additional information" />
            </Form.Group>
            <Button variant="secondary" onClick={previousStep} className="mt-3">Back</Button>
            <Button variant="primary" type="submit" className="mt-3 ml-3">Submit</Button>
          </>
        )}
      </Form>
    </Container>
  );
}

export default Witness;
