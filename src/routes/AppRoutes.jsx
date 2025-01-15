import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Career from "../pages/career/Career";
import TechStack from "../pages/techStack/TechStack";
import AboutSection from "../pages/about/AboutSection";
import FullStackDeveloper from "../components/career/FullStackDeveloper";
import TechnicalProjectManager from "../components/career/TechnicalProjectManager";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/about" element={<About />} /> */}
    <Route path="/services" element={<Services />} />
    
    {/* Render service details dynamically */}
    <Route path="/about" element={<AboutSection />} />
    <Route path="/career" element={<Career />} />
    <Route path="/career/full-stack-developer" element={<FullStackDeveloper />} /> {/* Full Stack Developer route */}
    <Route path="/career/technical-project-manager" element={<TechnicalProjectManager />} /> {/* Technical Project Manager route */}
    <Route path="/techstack" element={<TechStack />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
