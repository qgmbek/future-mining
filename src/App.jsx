import { useEffect, useRef, useState } from "react";
import Hero from "./Components/Hero/Hero";
import LogoMarquee from "./Components/LogoMarquee/LogoMarquess";
import VideoContent from "./Components/videoContent/VideoContent";
import ImageContent from "./Components/imageContent/ImageContent";
import ImageContentTwo from "./Components/imageContent/ImageContentTwo";
import FAQ from "./Components/Accordion/Accordion";
import "./App.css";

function App() {
  const text =
    "We are redefining the future of mining through cutting-edge innovation, sustainable practices, and unmatched precision. Our mission is to responsibly harness the earth’s resources while safeguarding the planet, leveraging advanced technology and visionary solutions to deliver lasting value for communities, industries, and generations to come.";

  const introRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const imageRef = useRef(null);
  const imageTwoRef = useRef(null);

  const [showImage, setShowImage] = useState(false);
  const [showImageTwo, setShowImageTwo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (introRef.current) observer.observe(introRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.dataset.section === "one") {
            setShowImage(true);
          }

          if (entry.target.dataset.section === "two") {
            setShowImageTwo(true);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (imageTwoRef.current) observer.observe(imageTwoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hero">
        <Hero />
      </div>

      <div ref={introRef} className="introduction">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`letter ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.015}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <LogoMarquee />
      <VideoContent />

      <div ref={imageRef} data-section="one">
        {showImage && <ImageContent />}
      </div>
      <div ref={imageTwoRef} data-section="two">
        {showImageTwo && <ImageContentTwo />}
      </div>

      <FAQ />
    </>
  );
}

export default App;
