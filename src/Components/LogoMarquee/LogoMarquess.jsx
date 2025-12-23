import { useEffect, useRef } from "react";
import "./logoMarquee.css";

export default function LogoMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    if (track.dataset.cloned) return;
    track.innerHTML += track.innerHTML;
    track.dataset.cloned = "true";
  }, []);

  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];

  return (
    <section className="marquee">
      <div className="marquee_fade marquee_fade_left" />
      <div className="marquee_fade marquee_fade_right" />

      <div className="marquee_viewport">
        <div ref={trackRef} className="marquee_track">
          {logos.map((src, i) => (
            <div className="marquee_item" key={i}>
              <img src={src} alt="client logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
