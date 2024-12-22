import React from 'react';
import bg from "../../Images/background.png";
import filter from "../../Images/mage_filter.png";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="main-section">
      <div className="main-content">
        <h1>Immune Protector – Daily <br />Immunity Boost</h1>
        <p>Empower Your Immunity Naturally!</p>
      </div>
      <div className="main-image">
        <img src={bg} alt="bg" />
      </div>
    </div>
    
    <div className="selling">
        <div className="best">
            <p>Our <span>Best Selling</span> Product</p>
        </div>
        <div className="filter">
            <img src={filter} alt="filter" />
            Filter
        </div>
    </div>
    </div>
  );
}

export default Main;