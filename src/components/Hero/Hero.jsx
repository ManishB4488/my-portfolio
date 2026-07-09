import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpg";
function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-500 text-lg mb-3">
            👋 Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Manish
          </h1>

          <h2 className="text-2xl text-gray-400 mt-4">
            B.Tech CSE Student & Frontend Developer
          </h2>

          <p className="text-gray-500 mt-8 leading-8 max-w-xl">
            Passionate about building beautiful,
            responsive web applications using
            React, Tailwind CSS, and modern web
            technologies.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition">
              View Projects
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-xl hover:border-white transition">
              Download Resume
            </button>

          </div>

          <div className="flex gap-6 mt-10 text-lg">
            <a href="#" className="hover:text-blue-500">GitHub</a>
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
            <a href="#" className="hover:text-blue-500">Email</a>
          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 shadow-2xl">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;