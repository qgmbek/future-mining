import { motion } from "framer-motion";
import "./hero.css";
import heroVideo from "../../assets/hero-video.mp4";

export default function Hero() {
  return (
    <div className="hero">
      <video
        className="video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <motion.div
        className="description"
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
      >
        Responsible mining for a cleaner, greener future—where innovation,
        precision, and environmental stewardship redefine how resources are
        discovered, extracted, and preserved.
      </motion.div>
      <motion.div
        className="slogan"
        initial={{ y: -170, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
      >
        Clean Resources, Care for Earth.
      </motion.div>
    </div>
  );
}
