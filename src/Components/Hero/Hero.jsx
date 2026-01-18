import { motion } from "framer-motion";
import "./hero.css";
import heroVideo from "../../assets/hero-video.mp4";

export default function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <video
        className="video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-description">
        Responsible mining for a cleaner, greener future—where innovation,
        precision, and environmental stewardship redefine how resources are
        discovered, extracted, and preserved.
      </div>

      <div className="slogan">
        Clean Resources, Care for Earth.
      </div>
    </motion.div>
  );
}
