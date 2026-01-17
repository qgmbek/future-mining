import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = (e) => {
      if (e.target.closest("button, a, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const lineSize = isHovering ? 20 : 12;
  const lineOffset = isHovering ? 8 : 4;

  return (
    <>
      <motion.div
        className="cursor-container"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Center dot */}
        <motion.div
          className="cursor-dot"
          animate={{
            width: isHovering ? 12 : 4,
            height: isHovering ? 12 : 4,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Crosshair */}
        <div className="cursor-crosshair">
          {/* Top */}
          <motion.div
            className="cursor-line vertical"
            style={{ bottom: "100%" }}
            animate={{
              height: lineSize,
              y: -lineOffset,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Bottom */}
          <motion.div
            className="cursor-line vertical"
            style={{ top: "100%" }}
            animate={{
              height: lineSize,
              y: lineOffset,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Left */}
          <motion.div
            className="cursor-line horizontal"
            style={{ right: "100%" }}
            animate={{
              width: lineSize,
              x: -lineOffset,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Right */}
          <motion.div
            className="cursor-line horizontal"
            style={{ left: "100%" }}
            animate={{
              width: lineSize,
              x: lineOffset,
            }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Brackets */}
        <motion.div
          className="cursor-brackets"
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.85,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="bracket tl" />
          <div className="bracket tr" />
          <div className="bracket bl" />
          <div className="bracket br" />
        </motion.div>
      </motion.div>

      {/* Coordinates */}
      <motion.div
        className="cursor-coords"
        style={{
          left: mousePosition.x + 20,
          top: mousePosition.y + 20,
        }}
      >
        X:{Math.round(mousePosition.x)} Y:{Math.round(mousePosition.y)}
      </motion.div>
    </>
  );
};

export default CustomCursor;
