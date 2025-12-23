import { useState } from "react";
import "./accordions.css";

const faqs = [
  {
    question: "How long does it take to install solar panels?",
    answer:
      "Most residential solar installations are completed within 1–3 days, depending on system size and site conditions.",
  },
  {
    question: "What services do you offer for businesses?",
    answer:
      "We provide end-to-end solar solutions for businesses, including design, installation, monitoring, and ongoing support.",
  },
  {
    question: "Do you offer warranties on your products?",
    answer:
      "Yes. Our solar panels typically come with a 25-year performance warranty, along with workmanship guarantees.",
  },
  {
    question: "Can small businesses benefit from your services?",
    answer:
      "Absolutely. Our systems are scalable and designed to meet the needs and budgets of small and growing businesses.",
  },
  {
    question: "What kind of maintenance is required for solar systems?",
    answer:
      "Solar systems require minimal maintenance—mainly occasional cleaning and periodic system health checks.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2>
          Here are some frequently
          <br />
          asked questions
        </h2>
        <p>
          Better Energy Starts Here that is Powered by Advanced Solar Materials
          and with it’s Modern Tech
        </p>
      </div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
