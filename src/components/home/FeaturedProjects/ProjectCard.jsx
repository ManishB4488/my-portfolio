function ProjectCard({ project }) {

  return (

    <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300">

      <img

        src={project.image}

        alt={project.title}

        className="w-full h-60 object-cover"

      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">

          {project.title}

        </h3>

        <p className="text-gray-400 mt-3">

          {project.description}

        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech)=>(

            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm"
            >

              {tech}

            </span>

          ))}

        </div>

        <div className="flex gap-4 mt-6">

          <a
            href={project.live}
            target="_blank"
            className="bg-cyan-500 px-5 py-2 rounded-lg"
          >

            Live Demo

          </a>

          <a
            href={project.github}
            target="_blank"
            className="border border-gray-600 px-5 py-2 rounded-lg"
          >

            GitHub

          </a>

        </div>

      </div>

    </div>

  );

}

export default ProjectCard;