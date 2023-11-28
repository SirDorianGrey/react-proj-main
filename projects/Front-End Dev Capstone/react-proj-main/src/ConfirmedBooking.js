import React from 'react';


function ConfirmedBooking() {
    return (
      <div className="confirmed-booking">
        <span role="img" aria-label="checkmark" className="checkmark">✅</span>
        <h1>Booking Confirmed!</h1>
        <p>Thank you for your reservation. We're looking forward to serving you.</p>
      </div>
    );
  }
  

export default ConfirmedBooking;
