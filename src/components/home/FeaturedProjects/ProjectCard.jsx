import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

import Badge from "../../common/Badge";
import Card from "../../common/Card";
import FadeIn from "../../common/FadeIn";

function ProjectCard({ project }) {
  return (
    <FadeIn>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="group overflow-hidden p-0 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl">

          {/* Image */}

          <div className="relative overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="
                h-72
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Featured Badge */}

            {project.featured && (
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">

                <Star size={14} fill="black" />

                Featured

              </div>
            )}

            {/* Tech Stack */}

            <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">

              {project.technologies.map((tech) => (
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}

            </div>

          </div>

          {/* Content */}

          <div className="p-7">

            <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">

              {project.title}

            </h3>

            <p className="text-zinc-400 leading-8">

              {project.shortDescription}

            </p>

            {/* Buttons */}

            <div className="flex gap-4 mt-8">

              <Link
                to={`/projects/${project.slug}`}
                className="
                  flex
                  items-center
                  gap-2
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Case Study

                <ArrowRight size={18} />
              </Link>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-zinc-700
                  hover:border-cyan-400
                  px-5
                  py-3
                  rounded-xl
                  transition
                "
              >
                Live Demo

                <ExternalLink size={18} />

              </a>

            </div>

          </div>

        </Card>
      </motion.div>
    </FadeIn>
  );
}

export default ProjectCard;