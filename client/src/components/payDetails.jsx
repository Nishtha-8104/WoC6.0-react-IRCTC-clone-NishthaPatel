import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payd.css";

function PayDetails({ log, tid }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("");
  const [showpay, setShowpay] = useState(true);
  const navigate = useNavigate();


  async function handlePaymentSubmit() {
    console.log(log);
    console.log(tid);
    console.log("Payment submitted:", {
      cardNumber,
      expirationMonth,
      expirationYear,
      cvv,
      country,
    });
    try {
      const response = await fetch("http://localhost:8000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ log, tid }),
      });
      if (response.ok) {
        console.log("Train booked");
        setShowpay(false);
        
      }
    } catch (err) {
      
      console.log(err);
    }
    
    navigate("/booklist");



  }

  return (
    <div className="pay">
      <h2>Payment Details</h2>
      <form className="f">
        <div className="p1">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        </div>
        <div className="p2">
          <label htmlFor="expirationMonth">Expiration Month:</label>
          <input
            type="text"
            id="expirationMonth"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
            placeholder="MM"
          />
        </div>
        <div className="p3">
          <label htmlFor="expirationYear">Expiration Year:</label>
          <input
            type="text"
            id="expirationYear"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
            placeholder="YYYY"
          />
        </div>
        <div className="p4">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Enter CVV"
          />
        </div>
        <div className="p5">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country"
          />
        </div>
        <button type="button" onClick={handlePaymentSubmit}>
          Submit Payment
        </button>
      </form>
    </div>  
  );

 
}
export default PayDetails;
