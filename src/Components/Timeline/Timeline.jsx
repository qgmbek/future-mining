import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const events = [
    {
      year: "1947",
      title: "FOUNDATION",
      description: "Terra Extraction established in post-war industrial boom.",
    },
    {
      year: "1963",
      title: "FIRST DEEP BORE",
      description:
        "Achieved 500m depth with revolutionary drilling technology.",
    },
    {
      year: "1984",
      title: "GLOBAL EXPANSION",
      description: "Operations extended to 12 countries across 4 continents.",
    },
    {
      year: "1999",
      title: "AUTOMATION ERA",
      description: "Pioneered autonomous extraction systems.",
    },
    {
      year: "2015",
      title: "DEPTH RECORD",
      description: "Reached 2,847m — deepest commercial extraction.",
    },
    {
      year: "2026",
      title: "NEXT FRONTIER",
      description: "Preparing for sub-oceanic mineral exploration.",
    },
  ];

  const styles = {
    section: {
      position: "relative",
      padding: "8rem 0",
      overflow: "hidden",
    },
    particle: {
      position: "absolute",
      width: "0.125rem",
      height: "0.125rem",
      backgroundColor: "hsla(32, 100%, 50%, 0.4)",
      borderRadius: "50%",
    },
    verticalLine: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "1px",
      backgroundColor: "hsl(0, 0%, 18%)",
    },
    lineProgress: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "var(--warning)",
      transformOrigin: "top",
    },
    eventContainer: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
    yearMarker: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "translateX(-50%)",
      width: "1rem",
      height: "1rem",
      border: "2px solid var(--warning)",
      backgroundColor: "#000",
      zIndex: 10,
    },
    bgAccent: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      fontFamily: "var(--font-mono)",
      fontSize: "20vw",
      fontWeight: "bold",
      color: "hsla(0, 0%, 18%, 0.2)",
      lineHeight: 1,
      pointerEvents: "none",
      cursor: "pointer",
    },
  };

  return (
    <section ref={containerRef} style={styles.section} id="impact">
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.particle,
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -80, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          pointerEvents: "none",
          opacity: 0.1,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, var(--warning), transparent, var(--warning))",
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container">
        <motion.div
          style={{ marginBottom: "6rem" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "var(--warning)",
              display: "inline-block",
              cursor: "pointer",
            }}
            whileHover={{ letterSpacing: "0.5em" }}
            transition={{ duration: 0.3 }}
          >
            05 / TIMELINE
          </motion.span>
          <h2
            className="text-display"
            style={{ marginTop: "1rem", maxWidth: "56rem" }}
          >
            {"Eight decades of breaking ground".split(" ").map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                style={{
                  display: "inline-block",
                  marginRight: "0.3em",
                  cursor: "pointer",
                }}
                whileHover={{ y: -5, rotateZ: 2, color: "var(--warning)" }}
                transition={{ duration: 0.2 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div style={{ ...styles.verticalLine, left: "50%" }}>
            <motion.div
              style={{ ...styles.lineProgress, height: lineHeight }}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "6rem" }}
          >
            {events.map((event, i) => (
              <motion.div
                key={event.year}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "2rem",
                }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  style={{ ...styles.yearMarker, left: "50%" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsla(32, 100%, 50%, 0)",
                      "0 0 20px 4px hsla(32, 100%, 50%, 0.3)",
                      "0 0 0 0 hsla(32, 100%, 50%, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />

                <div
                  style={{
                    paddingRight: i % 2 === 0 ? "6rem" : 0,
                    textAlign: i % 2 === 0 ? "right" : "left",
                    gridColumn: i % 2 === 0 ? "1" : "2",
                    paddingLeft: i % 2 === 0 ? 0 : "6rem",
                  }}
                >
                  <motion.span
                    className="text-data"
                    style={{
                      fontSize: "clamp(3rem, 5vw, 3.75rem)",
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 30px hsla(32, 100%, 50%, 0.8)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {event.year.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        style={{
                          display: "inline-block",
                          color: "var(--warning)",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + ci * 0.08, duration: 0.5 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                      cursor: "pointer",
                    }}
                    initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    whileHover={{
                      color: "var(--warning)",
                      x: i % 2 === 0 ? -5 : 5,
                    }}
                  >
                    {event.title}
                  </motion.h3>
                  <motion.p
                    style={{ color: "hsl(0, 0%, 55%)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {event.description.split(" ").map((word, wi) => (
                      <motion.span
                        key={wi}
                        style={{
                          display: "inline-block",
                          marginRight: "0.25em",
                          cursor: "pointer",
                        }}
                        whileHover={{ color: "hsl(0, 0%, 0%)" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        style={styles.bgAccent}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ color: "hsla(32, 100%, 50%, 0.1)", x: -20 }}
      >
        77
      </motion.div>
    </section>
  );
};

export default Timeline;
