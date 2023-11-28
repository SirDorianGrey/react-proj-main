import React, { useState } from 'react';
import BookingForm from './BookingForm'; 


function BookingPage({ availableTimes, setAvailableTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Welcome to our reservation page. Please fill out the form below to book a table.</p>
      <BookingForm date={date} setDate={setDate} time={time} setTime={setTime} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
