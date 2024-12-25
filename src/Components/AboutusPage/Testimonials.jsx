import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";
import img1 from "../../Images/feedback1.png";
import img2 from "../../Images/Figure → image.png.png";
import img3 from "../../Images/Figure → image-2.png.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Ranjan Gandhi",
      heading: "Effective",
      feedback:
        "I tried this product for 7 days and I can see difference in myself. I didn't think that I will be able to see the difference in Stamina and Energy in just 7 days.",
      avatar: img1,
      rating: 5,
    },
    {
      name: "Dipti",
      heading: "Easy to consume",
      feedback:
        "This was my first EVT product, and I'm impressed by the quality and the ease of use. Will share more reviews after a few weeks of regular usage.",
      avatar: img2,
      rating: 5,
    },
    {
      name: "Ankit Kumar",
      heading: "Amazing product! Free from additives makes it even better",
      feedback:
        "Used the product on a friend's recommendation. Really loved it. Highly recommended.",
      avatar: img3,
      rating: 5,
    },
    {
      name: "Dipti",
      heading: "Easy to consume",
      feedback:
        "This was my first EVT product, and I'm impressed by the quality and the ease of use. Will share more reviews after a few weeks of regular usage.",
      avatar: img2,
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonials, 3000);
    return () => clearInterval(interval);
  },);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="testimonials-section">
      <Container>
        <h2 className="feedback-section-title">Testimonials</h2>
        <Row className="justify-content-center align-items-center">
          <Col>
            <div className="fb">
              <Row>
                {visibleTestimonials.map((testimonial, index) => {
                  const isMiddle = index === 1;
                  const isLeft = index === 0;
                  const isRight = index === 2;

                  return (
                    <Col key={index} md={4}>
                      <Card
                        className={`testimonial-card ${
                          isMiddle ? "zoomin" : ""
                        } ${isLeft ? "outgoing" : ""} ${
                          isRight ? "incoming" : ""
                        }`}
                      >
                        <Card.Body className="test">
                          <div className="quote">“</div>
                          <Card.Title className="testimonial-heading">
                            {testimonial.heading}
                          </Card.Title>
                          <Card.Text className="testimonial-feedback">
                            {testimonial.feedback}
                          </Card.Text>
                          <div className="testimonial-footer">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="testimonial-avatar"
                            />
                            <div>
                              <h6 className="testimonial-name">
                                {testimonial.name}
                              </h6>
                              <div className="testimonial-rating">
                                {"★".repeat(testimonial.rating)}
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Button
          className="arrow-button left"
          variant="none"
          onClick={prevTestimonials}
        >
          <FaChevronLeft />
        </Button>
        <Button
          className="arrow-button right"
          variant="none"
          onClick={nextTestimonials}
        >
          <FaChevronRight />
        </Button>
      </Container>
    </div>
  );
}

export default Testimonials;
