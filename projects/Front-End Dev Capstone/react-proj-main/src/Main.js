import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Homepage from './Homepage';
import Header from './Header'; 
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from './mockAPI';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Convert the date to the required format

    // Fetch the available times for today's date
    fetchAPI(today)
      .then(times => times.map(time => ({ value: time, label: time })))
      // Set the available times
      .then(options => setAvailableTimes(options));
  }, []);

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);

    if (result) {
      navigate('/confirmed');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<><Header /><Homepage /></>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Main;