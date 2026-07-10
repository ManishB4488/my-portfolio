import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import portfolio from "../../../data/portfolio";
import Button from "../../common/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-cyan-400 text-lg mb-3">
         Hello, I'm
      </p>

      <h1 className="text-5xl lg:text-7xl font-black leading-tight">
        {portfolio.name}
      </h1>

      <div className="text-3xl mt-5 font-semibold h-12 text-cyan-400">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1500,
            "React Developer",
            1500,
            "UI/UX Enthusiast",
            1500,
            "Problem Solver",
            1500
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </div>

      <p className="text-zinc-400 leading-8 mt-8 max-w-xl">
        {portfolio.intro}
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Button>
          View Projects
        </Button>

        <Button variant="secondary">
          Download Resume
        </Button>
      </div>

      <div className="flex gap-10 mt-14">

        {portfolio.stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-3xl font-bold text-cyan-400">
              {item.value}
            </h3>

            <p className="text-zinc-500">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </motion.div>
  );
}

export default HeroContent;