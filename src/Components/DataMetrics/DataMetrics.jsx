import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./DataMetrics.css";

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const DataMetrics = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-200px" });

  const metrics = [
    { value: 2847, suffix: "M", label: "MAXIMUM DEPTH", unit: "METERS" },
    { value: 47, suffix: "+", label: "ACTIVE SITES", unit: "GLOBAL" },
    { value: 12, suffix: "M", label: "TONNES EXTRACTED", unit: "ANNUALLY" },
    { value: 99, suffix: ".7%", label: "PRECISION RATE", unit: "ACCURACY" },
  ];

  return (
    <section ref={containerRef} className="metrics-section" id="extraction">
      <div className="industrial-grid" />

      <div className="particle-layer">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="scan-line"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container">
        <motion.div
          className="metrics-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="metrics-eyebrow"
            whileHover={{ letterSpacing: "0.5em" }}
          >
            02 / EXTRACTION DATA
          </motion.span>

          <h2
            className="text-display"
            style={{
              marginTop: "1rem",
              maxWidth: "56rem",
              perspective: "1000px",
            }}
          >
            {"Numbers that define our depth of commitment"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  style={{
                    display: "inline-block",
                    marginRight: "0.3em",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    y: -5,
                    rotateZ: 2,
                    color: "var(--warning)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </h2>
        </motion.div>

        <div className="metrics-grid">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="metric-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ flex: 3 }}
            >
              <div className="corner-accent tl" />
              <div className="corner-accent br" />

              <span className="metric-index">0{i + 1}</span>

              <div className="metric-value">
                <span className="text-data">
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    duration={2 + i * 0.3}
                  />
                </span>
              </div>

              <div className="metric-meta">
                <p className="metric-label">{metric.label}</p>
                <p className="metric-unit">{metric.unit}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataMetrics;
