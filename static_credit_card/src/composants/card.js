import React from "react";
import "./card.css";
import visaLogo from "./visa-logo.jpg";
import puceLogo from "./pucelogo.png";
import arrierePlan from "./card-bg.jpg";

const bgStyle = {
  backgroundImage: "url(" + arrierePlan + ")",
  backgroundSize: "cover"
};

const Card = () => (
  <div className="card-zone" style={bgStyle}>
    <h1>Credit Card</h1>
    <div className="card-puce">
      <img src={puceLogo} />
    </div>
    <div className="card-content">
      <div className="text-content">
        <div className="Card-serie-number">7253 3256 7895 1245</div>
        <div className="month-year">Month / Year</div>
        <div className="validation-numbers">
          <div className="four-numbers">5422</div>
          <div className="expiration">
            <div className="valid-thru-right-arrow">
              <div className="valid-thru">
                Valid
                <br />
                Thru
              </div>
              <div className="right-arrow"> &#9654;</div>
            </div>
            <div className="date-expiration">11/50</div>
          </div>
        </div>
        <div className="cardholder">Cardholder</div>
      </div>
      <div className="visa-logo">
        <img src={visaLogo} />
      </div>
    </div>
  </div>
);

export default Card;
