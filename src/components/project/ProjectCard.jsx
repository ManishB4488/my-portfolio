import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-cyan-500 transition-all duration-300 shadow-lg"
    >
      {/* Project Image */}

      <Link to={`/projects/${project.slug}`}>
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover hover:scale-110 transition duration-500"
          />
        </div>
      </Link>

      {/* Content */}

      <div className="p-6">

        <Link to={`/projects/${project.slug}`}>
          <h3 className="text-2xl font-bold hover:text-cyan-400 transition">
            {project.title}
          </h3>
        </Link>

        <p className="text-zinc-400 mt-4">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-xl"
          >
            <ExternalLink size={18} />
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-zinc-600 hover:border-cyan-400 transition px-5 py-2 rounded-xl"
          >
            <FolderGit2 size={18} />
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;