import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("scanning");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setPhase("revealing");
          setTimeout(() => {
            setPhase("complete");
            setTimeout(onComplete, 800);
          }, 1500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  const layers = [
    { depth: 0, color: "hsl(32, 100%, 50%)", label: "SURFACE" },
    { depth: 1, color: "hsl(32, 80%, 40%)", label: "SEDIMENT" },
    { depth: 2, color: "hsl(25, 60%, 30%)", label: "BEDROCK" },
    { depth: 3, color: "hsl(20, 40%, 20%)", label: "ORE DEPOSIT" },
    { depth: 4, color: "hsl(15, 30%, 12%)", label: "DEEP CORE" },
  ];

  const styles = {
    container: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      backgroundColor: "var(--warning)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    layersContainer: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
    },
    layer: {
      flex: 1,
      position: "relative",
      overflow: "hidden",
    },
    layerLabel: {
      position: "absolute",
      right: "2rem",
      top: "50%",
      transform: "translateY(-50%)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "0.3em",
      opacity: 0.3,
    },
    content: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "0 2rem",
    },
    progressContainer: {
      marginTop: "4rem",
      width: "20rem",
      marginLeft: "auto",
      marginRight: "auto",
    },
    progressBar: {
      height: "2px",
      backgroundColor: "var(--warning)",
      position: "relative",
      overflow: "hidden",
    },
    progressFill: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "var(--warning)",
    },
    progressText: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1rem",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      color: "var(--coal)",
    },
    corner: {
      position: "absolute",
      width: "4rem",
      height: "4rem",
      borderColor: "hsla(32, 100%, 50%, 0.3)",
    },
  };

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          style={styles.container}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={styles.layersContainer}>
            {layers.map((layer, i) => (
              <motion.div
                key={layer.depth}
                style={{ ...styles.layer, backgroundColor: layer.color }}
                initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.span
                  style={styles.layerLabel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {layer.label}
                </motion.span>

                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to right, transparent, hsla(0, 0%, 100%, 0.1), transparent)",
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2,
                    delay: 0.5 + i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div style={styles.content}>
            <motion.div
              style={{ overflow: "hidden", marginBottom: "2rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h1
                className="text-massive"
                style={{ color: "#fff", fontSize: "14rem" }}
                initial={{ y: "100%", filter: "blur(10px)" }}
                animate={{
                  y: phase === "revealing" ? "-10%" : 0,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                TERRA
              </motion.h1>
            </motion.div>

            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5em",
                  color: "var(--warning)",
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                EXTRACTION SYSTEMS
              </motion.p>
            </motion.div>

            <motion.div
              style={styles.progressContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div style={styles.progressBar}>
                <motion.div
                  style={{
                    ...styles.progressFill,
                    width: `${Math.min(progress, 100)}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <div style={styles.progressText}>
                <span style={{ color: "var(--warning)", fontSize: "1rem" }}>
                  INITIALIZING SYSTEMS
                </span>
                <span style={{ color: "var(--warning)", fontSize: "1rem" }}>
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </motion.div>
          </div>

          <div
            className="industrial-grid"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              ...styles.corner,
              top: "2rem",
              left: "2rem",
              borderTop: "1px solid",
              borderLeft: "1px solid",
            }}
          />
          <div
            style={{
              ...styles.corner,
              top: "2rem",
              right: "2rem",
              borderTop: "1px solid",
              borderRight: "1px solid",
            }}
          />
          <div
            style={{
              ...styles.corner,
              bottom: "2rem",
              left: "2rem",
              borderBottom: "1px solid",
              borderLeft: "1px solid",
            }}
          />
          <div
            style={{
              ...styles.corner,
              bottom: "2rem",
              right: "2rem",
              borderBottom: "1px solid",
              borderRight: "1px solid",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
