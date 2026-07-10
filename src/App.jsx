import Navbar from "./components/layout/NavBar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import AuroraBackground from "./components/common/AuroraBackground";
import MouseGlow from "./components/common/MouseGlow";
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
        </Routes>
      </main>

    </div>
  );
}

export default App;