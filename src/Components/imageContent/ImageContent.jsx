import "./imageContent.css";
import { motion } from "framer-motion";

export default function ImageContent() {
  return (
    <div className="imagesContainer">
      <motion.div
        className="imageContentsTitle"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Custom Mining Equipment and System Solutions
      </motion.div>
      <div className="imagesOne">
        <div className="imageText">
          <img src="image1.jpg" alt="" className="mainImage" />
          <div className="textImage">GroundStar Project</div>
        </div>
        <div className="imageText">
          <img src="image1a.jpg" alt="" className="addsImage" />
          <div className="textImageAdds">GroundStar </div>
        </div>
      </div>
    </div>
  );
}
