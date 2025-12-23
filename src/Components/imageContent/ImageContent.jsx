import { useEffect, useRef, useState } from "react";
import "./imageContent.css";
import { motion } from "framer-motion";

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
              <img src="image1.jpg" className="mainImage" />
              <div className="textImage">GroundStar Project</div>
            </div>

            <div className="imageText">
              <img src="image1a.jpg" className="addsImage" />
              <div className="textImageAdds">GroundStar</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
