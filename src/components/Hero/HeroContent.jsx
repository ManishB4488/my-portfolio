import HeroButtons from "./HeroButtons";
import { motion } from "framer-motion";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity:0,x:-50 }}
      animate={{ opacity:1,x:0 }}
      transition={{ duration:.8 }}
    >

      <p className="text-cyan-400 text-lg mb-3">
        👋 Hi, I'm
      </p>

      <h1 className="text-6xl font-black leading-tight">
        YOUR NAME
      </h1>

      <h2 className="text-2xl text-gray-400 mt-5">
        Frontend Developer
      </h2>

      <p className="mt-8 text-gray-500 leading-8 max-w-xl">

        Final Year Computer Science student passionate
        about creating beautiful and responsive web
        applications using React, Tailwind CSS,
        JavaScript and modern frontend technologies.

      </p>

      <HeroButtons />

    </motion.div>
  );
}

export default HeroContent;