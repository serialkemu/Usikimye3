// src/components/messaging/Messaging.jsx
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      id: uuidv4(),
      content: message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="message">
          <Form.Label>Enter your message</Form.Label>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
      <ListGroup className="mt-3">
        {messages.map((msg) => (
          <ListGroup.Item key={msg.id}>
            {msg.id}: {msg.content}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Messaging;
