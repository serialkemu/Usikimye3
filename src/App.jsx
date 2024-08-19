// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/navs/NavB';
import Footer from './components/navs/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './admin/Admin';
import Home from './pages/home/Home';
import Report from './pages/report/Report';
import Victim from './components/forms/Victim';
import Witness from './components/forms/Witness';
import Corp from './components/forms/Corp';
import Edu from './pages/education/Edu';
import Stat from './pages/stat/Stat';
import Counselling from './pages/counselling/Counselling';
import PeerToPeerForm from './pages/counselling/PeerToPeerForm';
import GroupTherapyForm from './pages/counselling/GroupTherapyForm';
import TherapistForm from './pages/counselling/TherapistForm';
import About from './pages/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/victim" element={<Victim />} />
        <Route path="/corp" element={<Corp />} />
        <Route path="/witness" element={<Witness />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/peer-to-peer" element={<PeerToPeerForm />} />
        <Route path="/group-therapy" element={<GroupTherapyForm />} />
        <Route path="/therapist" element={<TherapistForm />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/stat" element={<Stat />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
