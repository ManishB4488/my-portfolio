import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  // Github,
  Calendar,
  User,
  CheckCircle,
} from "lucide-react";

import projects from "../data/projects";
import PageTitle from "../components/common/PageTitle";
function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
      <PageTitle title={project.title} />
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Project Not Found
          </h1>

          <Link
            to="/projects"
            className="text-cyan-400 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {/* Back Button */}

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-10"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </Link>

      {/* Hero Image */}

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-12"
      />

      {/* Title */}

      <h1 className="text-5xl md:text-6xl font-bold">
        {project.title}
      </h1>

      <p className="text-xl text-zinc-400 mt-6 max-w-3xl">
        {project.shortDescription}
      </p>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-zinc-600 hover:border-cyan-400 transition px-6 py-3 rounded-xl"
        >
          <Github size={18} />
          GitHub
        </a>

      </div>

      {/* Project Info */}

      <div className="grid md:grid-cols-3 gap-6 mt-14">

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

          <User className="text-cyan-400 mb-3" />

          <p className="text-zinc-500">
            Role
          </p>

          <h3 className="text-xl font-semibold mt-2">
            {project.role}
          </h3>

        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

          <Calendar className="text-cyan-400 mb-3" />

          <p className="text-zinc-500">
            Duration
          </p>

          <h3 className="text-xl font-semibold mt-2">
            {project.duration}
          </h3>

        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

          <CheckCircle className="text-green-400 mb-3" />

          <p className="text-zinc-500">
            Status
          </p>

          <h3 className="text-xl font-semibold mt-2 text-green-400">
            {project.status}
          </h3>

        </div>

      </div>

      {/* Overview */}

      <section className="mt-20">

        <h2 className="text-4xl font-bold mb-6">
          Overview
        </h2>

        <p className="text-zinc-300 leading-8">
          {project.overview}
        </p>

      </section>

      {/* Problem */}

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          Problem Statement
        </h2>

        <p className="text-zinc-300 leading-8">
          {project.problem}
        </p>

      </section>

      {/* Solution */}

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          Solution
        </h2>

        <p className="text-zinc-300 leading-8">
          {project.solution}
        </p>

      </section>

      {/* Tech Stack */}

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">

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

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          Features
        </h2>

        <ul className="space-y-4">

          {project.features.map((feature) => (

            <li key={feature}>
              ✅ {feature}
            </li>

          ))}

        </ul>

      </section>

      {/* Challenges */}

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          Challenges
        </h2>

        <ul className="space-y-4">

          {project.challenges.map((challenge) => (

            <li key={challenge}>
              ⚡ {challenge}
            </li>

          ))}

        </ul>

      </section>

      {/* Learnings */}

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          What I Learned
        </h2>

        <ul className="space-y-4">

          {project.learnings.map((learning) => (

            <li key={learning}>
              📘 {learning}
            </li>

          ))}

        </ul>

      </section>

      {/* Future Improvements */}

      <section className="mt-16">

        <h2 className="text-4xl font-bold mb-6">
          Future Improvements
        </h2>

        <ul className="space-y-4">

          {project.futureImprovements.map((item) => (

            <li key={item}>
              🚀 {item}
            </li>

          ))}

        </ul>

      </section>

      {/* Gallery */}

      <section className="mt-20">

        <h2 className="text-4xl font-bold mb-8">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {project.screenshots.map((image) => (

            <img
              key={image}
              src={image}
              alt="Project Screenshot"
              className="rounded-2xl border border-zinc-800 hover:scale-[1.02] transition duration-300"
            />

          ))}

        </div>

      </section>

      {/* Bottom Buttons */}

      <div className="flex flex-wrap gap-4 mt-20">

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold"
        >
          🚀 Live Demo
        </a>

        {/* <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 hover:border-cyan-400 transition px-8 py-3 rounded-xl"
        >
          💻 GitHub Repository
        </a> */}

      </div>
    </motion.div>
  );
}

export default ProjectDetails;