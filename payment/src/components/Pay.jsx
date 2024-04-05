import axios from 'axios';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const KEY = "pk_test_51OykpPHcTdw7emVqCBSnN9FwUY7O9aFpyKkN6qAdZc82gYGVXq134kf3DKKzvRHg7LIntTRVsEgMS9YHgwi4thZr00zS88ZgmE";

const Pay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onToken = async (token) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/checkout/payment", {
        token: token.id,
        amount: 2000,
      });
      console.log(res.data); 
      navigate("/success");
    } catch (e) {
      setError(e.message);
      setLoading(false);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <RingLoader color={"green"} loading={loading} css={override} size={50} />
      ) : error ? (
        <span>Error: {error}</span>
      ) : (
        <StripeCheckout
          name="Dokan Lebs"
          image="https://cdn-icons-png.flaticon.com/512/1966/1966262.png"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
