import React from 'react';

function Success() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white', // Light gray background
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1966/1966262.png"
        alt="Dokan Lebs"
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          fontWeight:"bold",
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'default', // Disables button hover effect
        }}
        disabled // Disables button click
      >
        Successfull
      </button>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Your Order is being prepared,<br></br>
        Thank You for using Dokan Lebs.
      </p>
      
    </div>
  );
}

export default Success;
