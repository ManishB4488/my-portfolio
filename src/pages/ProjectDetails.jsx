import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );
  const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);
  if (!project) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Project Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Hero Image */}

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-3xl shadow-2xl"
      />

      {/* Title */}

      <div className="mt-10">

        <h1 className="text-5xl font-black">
          {project.title}
        </h1>

        <p className="text-zinc-400 text-xl mt-4 leading-8">
          {project.shortDescription}
        </p>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-5 mt-8">

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-400 transition px-7 py-3 rounded-xl font-semibold"
        >
           Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 hover:border-cyan-400 transition px-7 py-3 rounded-xl"
        >
           GitHub
        </a>

      </div>

      {/* Overview */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-6">
          Overview
        </h2>

        <p className="text-zinc-300 leading-8">
          {project.overview}
        </p>

      </section>

      {/* Problem */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-6">
          Problem Statement
        </h2>

        <p className="text-zinc-300 leading-8">
          {project.problem}
        </p>

      </section>

      {/* Tech Stack */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full"
            >
              {tech}
            </span>

          ))}

        </div>

      </section>

      {/* Features */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {project.features.map((feature) => (

            <div
              key={feature}
              className="bg-zinc-900 rounded-2xl p-6 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold">
                 {feature}
              </h3>
            </div>

          ))}

        </div>

      </section>

      {/* Development Process */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            
            <h3 className="mt-4 font-bold">
              Planning
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            
            <h3 className="mt-4 font-bold">
              Design
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            
            <h3 className="mt-4 font-bold">
              Development
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            
            <h3 className="mt-4 font-bold">
              Testing
            </h3>
          </div>

        </div>

      </section>

      {/* Challenges */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Challenges
        </h2>

        <div className="space-y-4">

          {project.challenges.map((challenge) => (

            <div
              key={challenge}
              className="bg-zinc-900 rounded-xl p-5"
            >
               {challenge}
            </div>

          ))}

        </div>

      </section>

      {/* Learnings */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          What I Learned
        </h2>

        <div className="space-y-4">

          {project.learnings.map((learning) => (

            <div
              key={learning}
              className="bg-zinc-900 rounded-xl p-5"
            >
               {learning}
            </div>

          ))}

        </div>

      </section>

    {/* Gallery */}

{project.gallery && (
  <section className="mt-20">

    <h2 className="text-3xl font-bold mb-8">
      Project Gallery
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {project.gallery.map((img, i) => (

        <img
          key={img}
          src={img}
          alt="Project Screenshot"
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          className="
            cursor-pointer
            rounded-2xl
            shadow-xl
            hover:scale-105
            transition-all
            duration-500
          "
        />

      ))}

    </div>

    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={index}
      slides={project.gallery.map((img) => ({
        src: img,
      }))}
    />

  </section>
)}

    </div>
  );
}

export default ProjectDetails;