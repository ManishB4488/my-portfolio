import Hero from "../components/hero/Hero";
import AboutPreview from "../components/about/AboutPreview";
import Skills from "../components/home/Skills/Skills";
import FeaturedProjects from "../components/home/FeaturedProjects/FeaturedProjects";
function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Skills />
      <FeaturedProjects/>
    </>
  );
}

export default Home;