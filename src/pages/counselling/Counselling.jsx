// src/pages/counselling/Counselling.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Link to={counlink} className="btn btn-primary">Start</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const Counselling = () => {
  return (
    <div className="counselling-container">
      <Coun 
        counicon={''} 
        countitle="Peer-to-Peer Counselling" 
        counmes="Participate in peer-to-peer counselling" 
        counlink="/peer-to-peer" 
      />
      <Coun 
        counicon={''} 
        countitle="Group Therapy" 
        counmes="Join a group therapy session" 
        counlink="/group-therapy" 
      />
      <Coun 
        counicon={''} 
        countitle="Trained Therapist Sessions" 
        counmes="Schedule a session with a trained therapist" 
        counlink="/therapist" 
      />
    </div>
  );
};

export default Counselling;
