import React from 'react';
import { Link } from 'react-router-dom';
import victim from '../../assets/victim.png';
import witness from '../../assets/witness.png';
import minor from '../../assets/minor.png';

const Reportz = ({ repoicon, repomes, repotitle, rlink }) => {
  return ( 
    <div className="card m-3 border border-warning" style={{ maxWidth: "440px", height: "250px" }}>
      <div className="row g-0 h-100 text-center ">
        <div className="col-md-4 d-flex align-items-center">
          <img src={repoicon} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{repotitle}</h5>
            <p className="card-text">{repomes}</p>
            <Link to={rlink || "#"} className="btn btn-primary mt-auto">Report</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReportCa = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          <Reportz repoicon={victim} repotitle="Report Live Incident" repomes="Fill out the live form" rlink="/liveR" />
        </div>
        <div className='col-md-6'>
          <Reportz repoicon={witness} repotitle="Victim Form" repomes="Fill out the victim form" rlink="/victim" />
        </div>
        <div className='col-md-6'>
          <Reportz repoicon={minor} repotitle="Minor Protection" repomes="Fill out the form if you suspect abuse of a minor is taking place" />
        </div>
        <div className='col-md-6'>  
          <Reportz repoicon={victim} repotitle="Witness Form" repomes="Fill out the witness form" rlink="/witness" />
        </div>
        <div className='col-md-6'>
          <Reportz repoicon={witness} repotitle="Corporate Abuse Form" repomes="Fill out the corporate form" rlink="/corp" />
        </div>
      </div>
    </div>
  );
}

export default ReportCa;
