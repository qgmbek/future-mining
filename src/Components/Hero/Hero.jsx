import { motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        className="video"
        playsInline
      />
      <motion.div
        className="description"
        initial={{ y: -130, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Responsible mining for a cleaner, greener future—where innovation,
        precision, and environmental stewardship redefine how resources are
        discovered, extracted, and preserved.
      </motion.div>
      <motion.div
        className="slogan"
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        Clean Resources, Care for Earth.
      </motion.div>
    </div>
  );
}
