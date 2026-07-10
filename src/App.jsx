import Navbar from "./components/layout/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import AuroraBackground from "./components/common/AuroraBackground";
import MouseGlow from "./components/common/MouseGlow";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="bg-[#09090B] min-h-screen text-white relative overflow-x-hidden">

      <AuroraBackground />

      <MouseGlow />

      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;