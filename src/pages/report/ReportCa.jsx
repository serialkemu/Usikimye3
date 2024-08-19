import React from 'react';
import { Link } from 'react-router-dom';
import victim from '../../assets/victim.png';
import witness from '../../assets/witness.png';
import Victim from '../../components/forms/Victim';
import Witness from '../../components/forms/Witness';

const Reportz = ({ repoicon, repomes, repotitle, rlink }) => {
  return (
    <div className="card m-3" style={{ maxWidth: "440px" }}>
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={repoicon} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{repotitle}</h5>
            <p className="card-text">{repomes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReportCa = () =>{
    return (
        <div>
          
            <Reportz repoicon={victim} repotitle="Live Form" repomes="Fill out the live form"  />
            <Reportz repoicon={witness} repotitle="Victim Form" repomes="Fill out the victim form"  />
            <Reportz repoicon={victim} repotitle="Victim Form" repomes="Fill out the witness form"  />
            <Reportz repoicon={witness} repotitle="Corporate Form" repomes="Fill out the corporate form"  />
    </div>
    )
}
export default ReportCa;
