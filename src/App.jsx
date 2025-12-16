import { useEffect, useRef, useState } from "react";
import Hero from "./Components/Hero/Hero";
import LogoMarquee from "./Components/LogoMarquee/LogoMarquess";
import VideoContent from "./Components/videoContent/VideoContent";
import ImageContent from "./Components/imageContent/ImageContent";
import ImageContentTwo from "./Components/imageContent/ImageContentTwo";
import "./App.css";

function App() {
  const text =
    "We are redefining the future of mining through cutting-edge innovation, sustainable practices, and unmatched precision. Our mission is to responsibly harness the earth’s resources while safeguarding the planet, leveraging advanced technology and visionary solutions to deliver lasting value for communities, industries, and generations to come.";

  // Intro text animation
  const introRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // ImageContent (first)
  const imageRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  // ImageContentTwo (second)
  const imageTwoRef = useRef(null);
  const [showImageTwo, setShowImageTwo] = useState(false);

  // Observer for intro text
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

  // Observer for ImageContent
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer for ImageContentTwo
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImageTwo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

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

      {/* ImageContent renders when scrolled into view */}
      <div ref={imageRef}>{showImage && <ImageContent />}</div>

      {/* ImageContentTwo renders when scrolled into view */}
      <div ref={imageTwoRef}>{showImageTwo && <ImageContentTwo />}</div>
    </>
  );
}

export default App;
