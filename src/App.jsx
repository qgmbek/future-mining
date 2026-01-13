import Hero from "./Components/Hero/Hero";
import Introduction from "./Components/Introduction/Introduction";
import LogoMarquee from "./Components/LogoMarquee/LogoMarquee";
import QuickFactsSection from "./Components/QuickFactsSection/QuickFactsSection";
import VideoContent from "./Components/videoContent/VideoContent";
import ImageContent from "./Components/imageContent/ImageContent";
import ImageTwo from "./Components/imageContent/ImageTwo";
import Accordions from "./Components/Accordion/Accordion";
import Footer from "./Components/Footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <Introduction />
      <LogoMarquee />
      <QuickFactsSection />
      <VideoContent />
      <ImageContent />
      <ImageTwo />
      <Accordions />
      <Footer />
    </>
  );
}

export default App;
