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
import DepthExplorer from "./Components/DepthExplorer/DepthExplorer";
import EquipmentShowcase from "./Components/EquipmentShowcase/EquipmentShowcase";
import Timeline from "./Components/Timeline/Timeline";

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
      <DepthExplorer />
      <VideoContent />
      <EquipmentShowcase />
      <ImageContent />
      <ImageTwo />
      <Accordions />
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
