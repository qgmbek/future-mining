import Hero from "./Components/Hero/Hero";
import Introduction from "./Components/Introduction/Introduction";
import LogoMarquee from "./Components/LogoMarquee/LogoMarquee";
import VideoContent from "./Components/videoContent/VideoContent";
import ImageContent from "./Components/imageContent/ImageContent";
import ImageTwo from "./Components/imageContent/ImageTwo";
import Accordions from "./Components/Accordion/Accordion";
import Footer from "./Components/Footer/footer";
import "./App.css";

import CustomCursor from "./Components/CustomCursor/CustomCursor";
import DataMetrics from "./Components/DataMetrics/DataMetrics";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="hero">
        <Hero />
      </div>
      <Introduction />
      <DataMetrics />
      <LogoMarquee />
      <VideoContent />
      <ImageContent />
      <ImageTwo />
      <Accordions />
      <Footer />
    </>
  );
}

export default App;
