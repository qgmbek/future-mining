import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./DepthExplorer.css";

const layers = [
  {
    depth: "0-50M",
    name: "SURFACE OPERATIONS",
    description:
      "Initial excavation and site preparation using precision drilling systems.",
    color: "var(--warning)",
  },
  {
    depth: "50-500M",
    name: "SEDIMENT LAYER",
    description:
      "Navigating through compressed geological formations with adaptive boring technology.",
    color: "hsl(48, 100%, 55%)",
  },
  {
    depth: "500-1500M",
    name: "BEDROCK ZONE",
    description:
      "Deep extraction protocols engage. Pressure systems at maximum capacity.",
    color: "hsl(200, 80%, 45%)",
  },
  {
    depth: "1500-2847M",
    name: "ORE DEPOSIT",
    description: "Target zone reached. Primary extraction operations commence.",
    color: "var(--warning)",
  },
];

const DepthExplorer = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = scrollYProgress;

  return (
    <section ref={containerRef} className="depth-section" id="technology">
      <motion.div
        className="depth-ring ring-large"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="depth-ring ring-small"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Markers */}
      <div className="depth-markers">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="depth-marker"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0 0 hsla(32,100%,50%,0)",
                "0 0 15px 3px hsla(32,100%,50%,0.4)",
                "0 0 0 0 hsla(32,100%,50%,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="container depth-header">
        <motion.span
          className="depth-eyebrow"
          whileHover={{ letterSpacing: "0.5em", x: 10 }}
        >
          03 / DEPTH ANALYSIS
        </motion.span>

        <h2
          className="text-display"
          style={{
            marginTop: "1rem",
            maxWidth: "56rem",
            perspective: "1000px",
          }}
        >
          {"Descending through geological strata".split(" ").map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              style={{
                display: "inline-block",
                marginRight: "0.3em",
                cursor: "pointer",
                color: "white"
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
      </div>

      {/* Layers */}
      <div className="depth-layers">
        {layers.map((layer, i) => (
          <motion.div key={layer.depth} className="depth-layer">
            <div className="container">
              <motion.div
                className="depth-layer-content"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="depth-grid">
                  <div className="depth-col depth-col-depth">
                    <span className="depth-label">DEPTH</span>
                    <div className="depth-value" style={{ color: layer.color }}>
                      {layer.depth}
                    </div>
                  </div>

                  <div className="depth-col depth-col-title">
                    <h3>{layer.name}</h3>
                  </div>

                  <div className="depth-col depth-col-desc">
                    <p>{layer.description}</p>
                  </div>

                  <div className="depth-col depth-col-index">0{i + 1}</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="depth-progress"
              style={{ backgroundColor: layer.color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${25 + i * 25}%` }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </div>

      {/* Vertical line */}
      <motion.div
        className="depth-vertical-line"
        style={{ scaleY: lineScaleY }}
      />
    </section>
  );
};

export default DepthExplorer;
