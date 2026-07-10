import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import Card from "../../common/Card";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="py-28">
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="RECENT WORK"
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          {/* Your real project */}
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

          {/* Placeholder card */}
          <Card className="flex flex-col justify-center items-center text-center min-h-[420px]">

            <h3 className="text-3xl font-bold mb-4">
               Next Project
            </h3>

            <p className="text-zinc-400 max-w-sm">
              I'm currently working on another full-stack application.
              Stay tuned for the next case study.
            </p>

          </Card>

        </div>

      </Container>
    </section>
  );
}

export default FeaturedProjects;