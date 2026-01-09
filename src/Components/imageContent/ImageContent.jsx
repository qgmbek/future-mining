import { useEffect, useRef, useState } from "react";
import "./imageContent.css";
import { motion } from "framer-motion";

import image1 from "../../assets/image1.jpg";
import image1a from "../../assets/image1a.jpg";

export default function ImageContent() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="imagesContainer">
      {visible && (
        <>
          <motion.div
            className="imageContentsTitle"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Custom Mining Equipment and System Solutions
          </motion.div>

          <div className="imagesOne">
            <div className="imageText">
              <img
                src={image1}
                className="mainImage"
                alt="GroundStar Project"
              />
              <div className="textImage">GroundStar Project</div>
            </div>

            <div className="imageText">
              <img src={image1a} className="addsImage" alt="GroundStar" />
              <div className="textImageAdds">GroundStar</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
