// src/pages/counselling/Counselling.jsx
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Messaging from './Messaging';

const Counselling = () => {
  return (
    <div className="counselling-container">
      <h2>Peer-to-Peer Counselling</h2>
      <Messaging />

      <h2>Group Therapy</h2>
      <Messaging />

      <h2>Trained Therapist Sessions</h2>
      <Messaging />
    </div>
  );
};

export default Counselling;
