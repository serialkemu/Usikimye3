// src/pages/counselling/Counselling.jsx
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Messaging from './Messaging';

const Coun = ({ counicon, counmes, countitle, counlink }) => {
  return (
    <div className="card m-3" style={{ maxWidth: "440px" }}>
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={counicon} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{countitle}</h5>
            <p className="card-text">{counmes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Counselling = () => {
  return (
    <div className="counselling-container">
      <Coun counicon={''} counlink={''} counmes={'Peer-to-Peer Counselling'}/>
      <Coun counicon={''} counlink={''} counmes={'Group Therapy'}/>
      <Coun counicon={''} counlink={''} counmes={'Trained Therapist Sessions'}/>
    </div>
  );
};

export default Counselling;
