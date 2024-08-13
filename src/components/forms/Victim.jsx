// src/components/forms/Victim.jsx
import React, { useState } from 'react';
import { Container, Form, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Victim = () => {
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

  const progress = (step / 4) * 100;

  return (
    <Container>
      <h2>Victim Report</h2>
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-3" />
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <Form.Group controlId="victimName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="victimAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" />
            </Form.Group>
            <Form.Group controlId="victimContact">
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
            <Form.Group controlId="incidentWitnesses">
              <Form.Label>Were there any witnesses?</Form.Label>
              <Form.Control type="text" placeholder="Enter the names of witnesses" />
            </Form.Group>
            <Button variant="secondary" onClick={previousStep} className="mt-3">Back</Button>
            <Button variant="primary" onClick={nextStep} className="mt-3 ml-3">Next</Button>
          </>
        )}

        {step === 3 && (
          <>
            <Form.Group controlId="incidentInjuries">
              <Form.Label>Are there any physical injuries?</Form.Label>
              <Form.Control type="text" placeholder="Describe any injuries" />
            </Form.Group>
            <Form.Group controlId="incidentMedicalRecords">
              <Form.Label>Are there any medical records or documentation of injuries?</Form.Label>
              <Form.Control type="text" placeholder="Describe any medical records" />
            </Form.Group>
            <Form.Group controlId="incidentEvidence">
              <Form.Label>Are there any photographs or other evidence of the incident?</Form.Label>
              <Form.Control type="text" placeholder="Describe any evidence" />
            </Form.Group>
            <Form.Group controlId="incidentImpact">
              <Form.Label>How has the incident affected you emotionally and psychologically?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe the emotional and psychological impact" />
            </Form.Group>
            <Form.Group controlId="incidentImpactDailyLife">
              <Form.Label>Has the incident impacted your daily life, work, or relationships?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe the impact on your daily life" />
            </Form.Group>
            <Form.Group controlId="incidentFear">
              <Form.Label>Do you fear for your safety?</Form.Label>
              <Form.Control type="text" placeholder="Describe any fears for your safety" />
            </Form.Group>
            <Button variant="secondary" onClick={previousStep} className="mt-3">Back</Button>
            <Button variant="primary" onClick={nextStep} className="mt-3 ml-3">Next</Button>
          </>
        )}

        {step === 4 && (
          <>
            <Form.Group controlId="perpetratorName">
              <Form.Label>Name of the perpetrator (if known)</Form.Label>
              <Form.Control type="text" placeholder="Enter the perpetrator's name" />
            </Form.Group>
            <Form.Group controlId="perpetratorRelationship">
              <Form.Label>Relationship to you</Form.Label>
              <Form.Control type="text" placeholder="Enter the relationship" />
            </Form.Group>
            <Form.Group controlId="perpetratorPreviousIncidents">
              <Form.Label>Any previous incidents of violence</Form.Label>
              <Form.Control type="text" placeholder="Describe any previous incidents" />
            </Form.Group>
            <Form.Group controlId="perpetratorThreats">
              <Form.Label>Any threats made by the perpetrator</Form.Label>
              <Form.Control type="text" placeholder="Describe any threats" />
            </Form.Group>
            <Form.Group controlId="additionalConsiderations">
              <Form.Label>Additional Considerations</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Document everything: Date and time of the interview, names of the people involved, and any other relevant information." />
            </Form.Group>
            <Button variant="secondary" onClick={previousStep} className="mt-3">Back</Button>
            <Button variant="primary" type="submit" className="mt-3 ml-3">Submit</Button>
          </>
        )}
      </Form>
    </Container>
  );
}

export default Victim;
