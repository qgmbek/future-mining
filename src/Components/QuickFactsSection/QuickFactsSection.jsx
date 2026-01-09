import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "./QuickFactsSection.css";

const facts = [
  { label: "Equipments", delay: 0, value: 20000, suffix: "+" },
  { label: "Licences", delay: 150, value: 100, suffix: "+" },
  { label: "Workers", delay: 300, value: 15000, suffix: "+" },
  { label: "Mines", delay: 450, value: 12, suffix: "" },
];

const QuickFactsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="quick-facts-section">
      <div className="container">
        <div className="section-header">
          <h2>Future Mining at a Glance</h2>
          <div className="divider"></div>
        </div>

        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${fact.delay}ms` }}
            >
              <span className="stat-value">
                {inView ? (
                  <CountUp
                    end={fact.value}
                    duration={2.5}
                    separator=","
                    suffix={fact.suffix}
                  />
                ) : (
                  "0"
                )}
              </span>
              <span className="stat-label">{fact.label}</span>
            </div>
          ))}
        </div>

        <div className="facts-footer">
          <p>
            Future Mining is committed to providing a transformative mining
            experience that prepares miners to become leaders in the world.
          </p>

          <a href="/about#facts" className="facts-link">
            Learn more about our achievements
            <svg
              className="arrow-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;
