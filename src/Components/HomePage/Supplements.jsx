import React from 'react';
import "./Supplements.css";
import { FaChevronRight } from "react-icons/fa";
import img1 from "../../Images/banner-image-15.png.png";
import img2 from "../../Images/—Pngtree—two medicine blue capsules_5749000 1.png";

const Supplements = () => {
  return (
    <div className="Supplements-section">
        <img src={img1} alt="boost" className="Supplements-img" />
        <div className="Supplements-content">
            <p className="Supplements-sub">Pyridoxine Vitamin B6</p>
            <h1 className="Supplements-title">Supplements</h1>
             <button className="view-more-btn">
                        View more < FaChevronRight className="chevron-icon-view" />
                      </button>
        </div>

        <img src={img2} alt="pill" className="Supplements-pills" />
    </div>
  );
}

export default Supplements;

