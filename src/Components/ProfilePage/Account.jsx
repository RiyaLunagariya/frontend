import React from "react";
import { FaChevronRight, FaUser, FaBox, FaSearch } from "react-icons/fa"; // Icons
import "./Account.css"; // Styling file
import blue from "../../Images/Frame2122550743.png.png";
import pink from "../../Images/Frame2122550743.png (1).png";

const Account = () => {
  const userName = "John Smith";

  // Dummy order data
  const orders = [
    {
      id: 1,
      image: blue,
      title: "Natural Testosterone Booster",
      price: 1499,
      discountPrice: 1899,
      reviews: 134,
      rating: 4.8,
    },
    {
      id: 2,
      image: pink,
      title: "Natural Testosterone Booster",
      price: 1499,
      discountPrice: 1899,
      reviews: 134,
      rating: 4.8,
    },
  ];

  return (
    <div className="ac-head">
      <h1>My Account</h1>
      <div className="account-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Welcome, {userName}</h3>
          <ul>
            <li>
              <FaUser className="icon" />
              <div>Profile</div>
              <FaChevronRight className="chevron-icon" />
            </li>
            <li>
              <FaBox className="icon-active" />
              <div>Order</div>
              <FaChevronRight className="chevron-icon" />
            </li>
          </ul>
          <button className="sign-out-btn">Sign Out</button>
        </div>

        {/* Main Content */}
        <div className="ac-main-content">
          <div className="order-section">
            <div className="order-header">
              <h3>Order</h3>
              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search Order" />
              </div>
              <div className="ac-filter">
                Filter<i className="fas fa-sliders-h"></i>
              </div>
            </div>
            <div className="order-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <img src={order.image} alt={order.title} />
                  <div className="order-info">
                    <h4>{order.title}</h4>
                    <p>
                      ₹{order.price}{" "}
                      <span className="mrp">MRP <span className="underline">₹{order.discountPrice}</span></span>
                    </p>
                    <div className="rate-review">
                      <div className="stars">☆☆☆☆☆</div>
                      <li>Rate & Review to earn Immunity Protector Credit</li>
                    </div>
                  </div>
                  <FaChevronRight className="chevron-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
