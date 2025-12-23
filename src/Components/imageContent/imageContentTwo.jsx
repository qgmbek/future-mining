import { useEffect, useRef, useState } from "react";
import "./imageContent.css";

export default function ImageContentTwo() {
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
            <img src="image2.jpg" className="mainImageTwo" />
            <div className="textImage">Shining Stone Project</div>
          </div>

          <div className="imageText">
            <img src="image2a.jpg" className="addsImageTwo" />
            <div className="textImageAddsTwo">Shining Stone</div>
          </div>
        </div>
      )}
    </div>
  );
}
