// src/components/forms/GroupTherapyForm.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const GroupTherapyForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Group Therapy form submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="groupTopic">
        <Form.Label>Topic</Form.Label>
        <Form.Control type="text" placeholder="Enter the topic for discussion" />
      </Form.Group>
      <Form.Group controlId="groupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Provide a brief description" />
      </Form.Group>
      <Button variant="primary" type="submit" className='m-3'>Submit</Button>
    </Form>
  );
};

export default GroupTherapyForm;
