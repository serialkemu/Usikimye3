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
import About from './pages/about/About';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
        if (roles && !roles.includes(currentUser.role)) {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

function App() {
  return (
          <Router>
             <CustomNavbar />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/victim" element={<Victim />} />
        <Route path="/victim" element={<Corp />} />
        <Route path="/corp" element={<Witness />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/stat" element={<Stat />} />
        <Route path="/about" element={<About />} />
        
        
      </Routes>
      <Footer/>
    </Router>
   

  );
}

export default App;
