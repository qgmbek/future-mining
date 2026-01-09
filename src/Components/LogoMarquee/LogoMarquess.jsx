import { useEffect, useRef } from "react";
import "./logoMarquee.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

export default function LogoMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    if (track.dataset.cloned) return;
    track.innerHTML += track.innerHTML;
    track.dataset.cloned = "true";
  }, []);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="marquee">
      <div className="marquee_fade marquee_fade_left" />
      <div className="marquee_fade marquee_fade_right" />

      <div className="marquee_viewport">
        <div ref={trackRef} className="marquee_track">
          {logos.map((src, i) => (
            <div className="marquee_item" key={i}>
              <img src={src} alt={`client logo ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
