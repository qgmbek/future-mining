import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./EquipmentShowcase.css";

import bucketWheelExcavator from "../../assets/bucket-wheel-excavator.jpg";
import tunnelBoringMachine from "../../assets/tunnel-boring-machine.jpg";
import draglineExcavator from "../../assets/dragline-excavator.jpg";
import haulTruckScale from "../../assets/haul-truck-scale.jpg";

const equipmentData = [
  {
    id: "bwe",
    name: "BUCKET WHEEL EXCAVATOR",
    subtitle: "BWE-4500",
    image: bucketWheelExcavator,
    specs: [
      { label: "HEIGHT", value: "96M" },
      { label: "LENGTH", value: "240M" },
      { label: "WEIGHT", value: "14,200T" },
      { label: "CAPACITY", value: "240,000 M³/DAY" },
    ],
    description:
      "The largest moving land vehicle ever constructed. Capable of removing overburden at rates previously thought impossible.",
  },
  {
    id: "tbm",
    name: "TUNNEL BORING MACHINE",
    subtitle: "TBM-TITAN X",
    image: tunnelBoringMachine,
    specs: [
      { label: "DIAMETER", value: "17.6M" },
      { label: "THRUST", value: "22,000T" },
      { label: "TORQUE", value: "95MNm" },
      { label: "SPEED", value: "12M/DAY" },
    ],
    description:
      "Boring through solid bedrock like a knife through butter. The cutting edge of subterranean engineering.",
  },
  {
    id: "dragline",
    name: "DRAGLINE EXCAVATOR",
    subtitle: "DL-8750",
    image: draglineExcavator,
    specs: [
      { label: "BOOM", value: "100M" },
      { label: "BUCKET", value: "168M³" },
      { label: "WEIGHT", value: "8,750T" },
      { label: "REACH", value: "95M" },
    ],
    description:
      "Walking across the earth with mechanical precision. Each step reshapes the landscape.",
  },
  {
    id: "haul",
    name: "ULTRA-CLASS HAUL TRUCK",
    subtitle: "HT-450",
    image: haulTruckScale,
    specs: [
      { label: "PAYLOAD", value: "450T" },
      { label: "POWER", value: "4,000HP" },
      { label: "TIRE HEIGHT", value: "4M" },
      { label: "FUEL TANK", value: "4,500L" },
    ],
    description:
      "Where a human stands as tall as the wheel hub. This is the scale of modern extraction.",
  },
];

export default function EquipmentShowcase() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="equipment-section" id="equipment">
      <div className="particle-layer">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container content">
        <div className="equipment-nav">
          {equipmentData.map((equip, i) => (
            <motion.button
              key={equip.id}
              className={`nav-button ${activeIndex === i ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {equip.subtitle}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="equipment-grid"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-container">
              <motion.div className="image-parallax" style={{ y: backgroundY }}>
                <motion.img
                  src={equipmentData[activeIndex].image}
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.15 }}
                />
              </motion.div>

              <motion.div
                className="scan-line"
                animate={{ y: ["0%", "60000%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="info">
              <span className="subtitle">
                {equipmentData[activeIndex].subtitle}
              </span>
              <h3 className="title">{equipmentData[activeIndex].name}</h3>
              <p className="description">
                {equipmentData[activeIndex].description}
              </p>
              <button className="btn-industrial">VIEW TECHNICAL SPECS</button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="counter">
          {equipmentData.map((_, i) => (
            <button
              key={i}
              className={`counter-bar ${activeIndex === i ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      <motion.div className="bg-text" style={{ y: backgroundY }}>
        INDUSTRIAL
      </motion.div>
    </section>
  );
}
