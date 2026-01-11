import { useEffect, useRef, useState } from "react";
import "./imageContent.css";
import image2 from "../../assets/image2.jpg";
import image2a from "../../assets/image2a.jpg";

export default function ImageTwo() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="imagesContainer">
      {active && (
        <div className="imagesTwo">
          <div className="imageText">
            <img
              src={image2}
              className="mainImageTwo"
              alt="Shining Stone Project"
            />
            <div className="textImage">Shining Stone Project</div>
          </div>

          <div className="imageText">
            <img src={image2a} className="addsImageTwo" alt="Shining Stone" />
            <div className="textImageAddsTwo">Shining Stone</div>
          </div>
        </div>
      )}
    </div>
  );
}
