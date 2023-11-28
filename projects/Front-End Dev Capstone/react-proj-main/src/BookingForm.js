import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchAPI } from './mockAPI';



function BookingForm({ date, setDate, guests, setGuests, occasion, setOccasion, availableTimes, setAvailableTimes, time, setTime, submitForm }) {

  useEffect(() => {
    if (date) {
      fetchAPI(date)
        .then(times => times.map(time => ({ value: time, label: time })))
        .then(options => setAvailableTimes(options));
    }
  }, [date, setAvailableTimes]);

  const guestOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];


  const occasionOptions = [
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '400px',
      padding: '10px',
      borderRadius: '5px',
      marginTop: '5px',
      backgroundColor: 'white',
      minWidth: '400px',
    }),
    option: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
      // Create an object with the form data
      const formData = {
        date: date,
        time: time.value,
        guests: guests.value,
        occasion: occasion.value,
      };
      console.log(date.value)
    
      // Call submitForm with the form data
      submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date"><strong>Choose date</strong></label>
      <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />

      <label htmlFor="res-time" ><strong>Choose time</strong></label>
      <Select inputId="time-select" options={availableTimes} styles={customStyles} value={time} onChange={selectedOption => setTime(selectedOption)} />

      <label htmlFor="guests"><strong>Number of guests</strong></label>
      <Select options={guestOptions} styles={customStyles} value={guests} onChange={selectedOption => setGuests(selectedOption)} />

      <label htmlFor="occasion"><strong>Occasion</strong></label>
      <Select options={occasionOptions} styles={customStyles} value={occasion} onChange={selectedOption => setOccasion(selectedOption)} />

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}           

export default BookingForm;