import React from "react";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import "./Faq.css";
import orange from "../../Images/—Pngtree—simulation bottle medicine bottle_5406696 1.png";

function Faq() {
  const faqData = [
    {
      question: "How do I use Immune Protector?",
      answer: "Immune Protector works by strengthening your immune system with essential nutrients and natural ingredients that boost energy, enhance mental clarity, and promote overall well-being.",
    },
    {
      question: "Are there any side effects?",
      answer: "Immune Protector is made from natural ingredients and is designed to be safe. However, if you have specific medical conditions or are taking medication, please consult your doctor before use.",
    },
    {
      question: "How long will it take to receive my order?",
      answer: "Results may vary, but many users report feeling improvements in their energy and wellness within 1–2 weeks of regular use.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you can track your order with the tracking information sent to your email after purchase.",
    },
    {
      question: "Are these products vegan?",
      answer: "Yes, all our products are vegan-friendly and cruelty-free.",
    },
    {
      question: "Where are the products manufactured?",
      answer: "Our products are manufactured in FDA-approved facilities with the highest quality standards.",
    },
  ];

  return (
    <div className="faqs">
    <div className="faq-section">
      {/* <Container> */}
        <Row>
          {/* Left Side: FAQ Section */}
          <Col lg={6} md={12}>
            <Button className="faq-button mb-3">FAQS</Button>
            <div className="faq-section-title mb-4">Why Choose Us?</div>
            <Accordion>
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          {/* Right Side: Product Image */}
          <Col lg={6} md={12} className="d-flex justify-content-center">
            <div className="faq-product-image-container">
              <img
                src={orange}
                alt="Immune Booster"
                className="faq-product-image"
              />
            </div>
          </Col>
        </Row>
      {/* </Container> */}
      </div>
    </div>
  );
}

export default Faq;

