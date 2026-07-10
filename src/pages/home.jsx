import Hero from "../components/home/hero/Hero";
import AboutPreview from "../components/home/about/AboutPreview";
import Skills from "../components/home/Skills/Skills";
import FeaturedProjects from "../components/home/FeaturedProjects/FeaturedProjects";
import Experience from "../components/home/Experience/Experience";
import Contact from "../components/home/contact/Contact";
// import GitHubSection from "../components/home/github/Github";
function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Skills />
      <FeaturedProjects />
      <Experience/>
      <Contact />
      {/* <GitHubSection /> */}
    </>
  );
}

export default Home;