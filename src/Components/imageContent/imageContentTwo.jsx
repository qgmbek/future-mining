import "./imageContent.css";
import { motion } from "framer-motion";

export default function ImageContentTwo() {
  return (
    <div className="imagesContainer">
      <div className="imagesTwo">
        <div className="imageText">
          <img src="image2.jpg" alt="" className="mainImage" />
          <div className="textImage">Shining Stone Project</div>
        </div>
        <div className="imageText">
          <img src="image2a.jpg" alt="" className="addsImageTwo" />
          <div className="textImageAddsTwo">Shining Stone</div>
        </div>
      </div>
    </div>
  );
}
