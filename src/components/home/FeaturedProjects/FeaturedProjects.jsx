import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

function FeaturedProjects() {

  const featured = projects.filter(
    (project) => project.featured
  );

  return (

    <section className="py-24">

      <Container>

        <SectionTitle
          subtitle="PROJECTS"
          title="Featured Work"
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {featured.map((project)=>(

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </Container>

    </section>

  );

}

export default FeaturedProjects;