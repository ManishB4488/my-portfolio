import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Badge from "../../common/Badge";
import Card from "../../common/Card";
import FadeIn from "../../common/FadeIn";

function ProjectCard({ project }) {
  return (
    <FadeIn>
      <Card className="group overflow-hidden p-0">

        {/* Image */}

        <div className="relative overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              h-64
              w-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          {/* Gradient Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
            "
          />

          {/* Tech Badges */}

          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">

            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}

          </div>

        </div>

        {/* Content */}

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            {project.title}
          </h3>

          <p className="text-zinc-400 leading-7">
            {project.shortDescription}
          </p>

          <Link
            to={`/projects/${project.slug}`}
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-cyan-400
              font-semibold
              group-hover:gap-4
              transition-all
            "
          >
            View Case Study

            <ArrowRight size={18} />

          </Link>

        </div>

      </Card>
    </FadeIn>
  );
}

export default ProjectCard;