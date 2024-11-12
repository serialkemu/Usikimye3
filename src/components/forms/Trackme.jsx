import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const TrackMe = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [tracking, setTracking] = useState(false);
  const [locationLog, setLocationLog] = useState([]);
  const [currentStayTime, setCurrentStayTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  
  // Form state for involved persons and backstory
  const [formData, setFormData] = useState({
    person1: '',
    person2: '',
    backstory: '',
  });

  // Starts tracking the user's live location
  const startTracking = () => {
    if (navigator.geolocation) {
      setTracking(true);
      
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = [latitude, longitude];

          // Check if the location has changed
          if (
            locationLog.length === 0 ||
            (latitude !== location.latitude && longitude !== location.longitude)
          ) {
            setLocation({ latitude, longitude });
            
            // Add the new location to the log for mapping and reset the timer
            setLocationLog((prevLog) => [...prevLog, { coords: newLocation, duration: currentStayTime }]);
            setCurrentStayTime(0);
          }
        },
        (error) => {
          console.error("Error obtaining location:", error);
          setTracking(false);
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
      
      // Start the stay timer
      const id = setInterval(() => {
        setCurrentStayTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Stop tracking the location
  const stopTracking = () => {
    setTracking(false);
    clearInterval(intervalId);
    alert("Tracking stopped.");
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Store and Report)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the data to a server or store it locally.
    console.log("Form Data:", formData);
    alert('Your report has been submitted.');
    // Reset the form
    setFormData({ person1: '', person2: '', backstory: '' });
  };

  return (
    <div className="track-me">
      <h2>Track Me</h2>
      <button onClick={tracking ? stopTracking : startTracking} className="btn btn-warning">
        {tracking ? "Stop Tracking" : "Start Tracking"}
      </button>

      <div className="live-location">
        {location.latitude && (
          <>
            <h4>Live Location:</h4>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </>
        )}
      </div>

      <div className="map-container">
        {location.latitude && location.longitude ? (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Draw the Polyline */}
            <Polyline positions={locationLog.map((loc) => loc.coords)} color="blue" />

            {/* Display the current location marker */}
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Please start tracking to view your location on the map.</p>
        )}
      </div>
      
      {/* Location Log */}
      <div className="location-log">
        <h4>Location Log:</h4>
        {locationLog.length > 0 ? (
          <ul>
            {locationLog.map((entry, index) => (
              <li key={index}>
                Lat: {entry.coords[0]}, Lon: {entry.coords[1]} - Duration: {entry.duration}s
              </li>
            ))}
          </ul>
        ) : (
          <p>No locations recorded yet.</p>
        )}
      </div>
      
      {/* Current Stay Duration */}
      <div className="current-stay">
        <h4>Current Stay Time: {currentStayTime}s</h4>
      </div>

      {/* Form for Person Details and Backstory */}
      <div className="report-form">
        <h3>Report Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Person 1 Name:</label>
            <input
              type="text"
              name="person1"
              value={formData.person1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Person 2 Name:</label>
            <input
              type="text"
              name="person2"
              value={formData.person2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Backstory:</label>
            <textarea
              name="backstory"
              value={formData.backstory}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackMe;
