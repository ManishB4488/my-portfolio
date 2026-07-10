import profile from "../../../assets/images/profile.jpg";
import TechBadge from "../../common/TechBadge";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Animated Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        className="absolute w-96 h-96 rounded-full border border-cyan-500/40"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "linear"
        }}
        className="absolute w-[340px] h-[340px] rounded-full border border-blue-500/40"
      />

      <img
        src={profile}
        alt="Profile"
        className="w-72 h-72 object-cover rounded-full border-4 border-cyan-500 shadow-2xl z-10"
      />

      <div className="absolute top-5 left-5">
        <TechBadge> React</TechBadge>
      </div>

      <div className="absolute bottom-5 right-0">
        <TechBadge> Java</TechBadge>
      </div>

      <div className="absolute top-20 right-0">
        <TechBadge> JavaScript</TechBadge>
      </div>

      <div className="absolute bottom-20 left-0">
        <TechBadge> Node.js</TechBadge>
      </div>

    </div>
  );
}

export default HeroImage;