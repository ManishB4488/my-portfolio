import projects from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import PageTitle from "../components/common/PageTitle";
function Projects() {
  return (
    <>
      <PageTitle title="Projects" />
    <section className="py-24">
      <Container>

        <SectionTitle
          subtitle="MY WORK"
          title="Featured Projects"
        />

        <p className="text-zinc-400 text-center max-w-2xl mx-auto mt-6">
          Here are some of the projects I've built using React,
          Tailwind CSS, JavaScript, and modern web technologies.
          Each project demonstrates problem-solving, responsive
          design, and practical development skills.
        </p>

        {/* ===== Project Stats ===== */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-zinc-900 p-6 rounded-2xl text-center border border-zinc-800">

            <h2 className="text-4xl font-bold text-cyan-400">
              2+
            </h2>

            <p className="text-zinc-400 mt-2">
              Projects
            </p>

          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl text-center border border-zinc-800">

            <h2 className="text-4xl font-bold text-cyan-400">
              100%
            </h2>

            <p className="text-zinc-400 mt-2">
              Responsive
            </p>

          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl text-center border border-zinc-800">

            <h2 className="text-4xl font-bold text-cyan-400">
              React
            </h2>

            <p className="text-zinc-400 mt-2">
              Primary Stack
            </p>

          </div>

        </div>

        {/* ===== Project Cards ===== */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

        {/* ===== Coming Soon ===== */}

        <div className="mt-20 border-2 border-dashed border-zinc-700 rounded-3xl p-12 text-center">

          <h2 className="text-3xl font-bold">
            More Projects Coming Soon 🚀
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl mx-auto">
            I'm continuously learning and building new
            applications using React, Node.js, AI APIs,
            and full-stack technologies. Stay tuned for
            exciting upcoming projects!
          </p>

        </div>

      </Container>
    </section>
    </>
  );
}

export default Projects;