import "./videocontent.css";
import { motion } from "framer-motion";

export default function VideoContent() {
  return (
    <div className="videoContentContainer">
      <video
        src="/videoContent.mp4"
        autoPlay
        loop
        muted
        className="videoContent"
        playsInline
      />

      <motion.div
        className="videoTitle"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Custom Mining Equipment and System Solutions
      </motion.div>

      <motion.div
        className="boxes"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="boxOne"
          variants={{
            hidden: { x: 180, zIndex: 3 },
            visible: { x: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src="/icon1.svg" alt="" className="icon" />
          <div className="boxTexts">
            <div className="boxTitle">Mining Equipment</div>
            <div className="boxDescription">
              Maintain heavy mining equipment through regular servicing,
              lubrication, inspections, and performance testing.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="boxTwo"
          variants={{
            hidden: { x: 0, zIndex: 2 },
            visible: { x: "0%" },
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <img src="/icon2.svg" alt="" className="icon" />
          <div className="boxTexts">
            <div className="boxTitle">Site Infrastructure</div>
            <div className="boxDescription">
              Maintain roads, conveyors, crushers, and facilities with routine
              inspections and timely repairs.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="boxThree"
          variants={{
            hidden: { x: -180, zIndex: 3 },
            visible: { x: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <img src="/icon3.svg" alt="" className="icon" />
          <div className="boxTexts">
            <div className="boxTitle">Systems Maintenance</div>
            <div className="boxDescription">
              Maintain power systems, generators, and mechanical components
              through scheduled checks and preventive maintenance.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
