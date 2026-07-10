import portfolio from "../../data/portfolio";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 mt-24 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-xl font-bold text-white">
          {portfolio.name}
        </h3>

        <p className="text-zinc-400 mt-2">
          Frontend Developer • React Enthusiast
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href={portfolio.social.email}
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>

        <p className="text-zinc-500 mt-8 text-sm">
          © {year} {portfolio.name}. All rights reserved.
        </p>

        <p className="text-zinc-600 text-sm mt-2">
          Built with React, Tailwind CSS & Vite.
        </p>

      </div>
    </footer>
  );
}

export default Footer;