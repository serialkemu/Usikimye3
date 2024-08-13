// src/components/forms/TherapistForm.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TherapistForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Therapist form submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="therapistTopic">
        <Form.Label>Topic</Form.Label>
        <Form.Control type="text" placeholder="Enter the topic for discussion" />
      </Form.Group>
      <Form.Group controlId="therapistDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Provide a brief description" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default TherapistForm;
