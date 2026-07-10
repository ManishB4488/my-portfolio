import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >

        <h1 className="text-8xl md:text-9xl font-black text-cyan-400">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-6 text-zinc-400 leading-8">
          Oops! The page you're looking for doesn't exist or may have been moved.
          Let's get you back to the homepage.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-10
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            font-semibold
            px-8
            py-4
            rounded-xl
            transition
          "
        >
          ← Back to Home
        </Link>

      </motion.div>
    </div>
  );
}

export default NotFound;