import React from "react";
import "./ImmunitySection.css";
import topImage from "../../Images/bg features 1.png";
import bottomImage from "../../Images/bg features 1.png";
import icon1 from "../../Images/Figure → drm_safe.png.png";
import icon2 from "../../Images/Figure → icon24_8e3116f8-5a38-41ba-9925-99b74a44fabd.png.png";
import icon3 from "../../Images/Figure → Cruelty_Free.webp.png";
import icon4 from "../../Images/Figure → image-removebg-preview_37_4.png.png";
import icon5 from "../../Images/Figure → gulten_free.png.png";
import icon6 from "../../Images/Figure → Gelatin_Free.png.png";
import icon7 from "../../Images/Figure → Vector.png.png";
import icon8 from "../../Images/Figure → image-removebg-preview_37_3.png.png"

const ImmunitySection = () => {
  const benefits = [
    { text: "Skin-Safe Formula", icon: icon1 },
    { text: "Potent Natural Actives", icon: icon2 },
    { text: "100% Cruelty-Free Certified", icon: icon3 },
    { text: "No Added Colorants", icon: icon4 },
    { text: "Free from Gluten", icon: icon5 },
    { text: "Gelatin Free", icon: icon6 },
    { text: "Free from Gelatin", icon: icon7 },
    { text: "No Silicones or Parabens", icon: icon8 },
  ];

  return (
  <div className="immunity">
    <img src={topImage} alt="Top Decorative" className="top-image" />
    <div className="immunity-section">
      <h2 className="immunity-title">
        Boost Your Immunity With <br />Nature's Power
      </h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <img src={benefit.icon} alt={benefit.text} className="benefit-icon" />
            <p className="benefit-text">{benefit.text}</p>
          </div>
        ))}
      </div>
      </div>
      <img src={bottomImage} alt="Bottom Decorative" className="bottom-image" />
    </div>
  );
};

export default ImmunitySection;
