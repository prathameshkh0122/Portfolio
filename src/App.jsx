import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#060608]">
      <Navbar />
      <SocialRail />
      <Hero />
      <About />
      <Academics />
      <Timeline />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
