import { motion } from "framer-motion";

function AboutPreview() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-4xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <p className="text-gray-400 leading-8">

              I am a Final Year B.Tech Computer Science student passionate
              about frontend development and UI/UX design.

              I enjoy building responsive applications using
              React, Tailwind CSS and JavaScript while continuously
              improving my problem-solving skills.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 rounded-xl p-6">

              <h3 className="text-cyan-400 text-3xl font-bold">

                3

              </h3>

              <p className="mt-2">

                Projects

              </p>

            </div>

            <div className="bg-zinc-900 rounded-xl p-6">

              <h3 className="text-cyan-400 text-3xl font-bold">

                300+

              </h3>

              <p className="mt-2">

                DSA Problems

              </p>

            </div>

            <div className="bg-zinc-900 rounded-xl p-6">

              <h3 className="text-cyan-400 text-3xl font-bold">

                7+

              </h3>

              <p className="mt-2">

                Technologies

              </p>

            </div>

            <div className="bg-zinc-900 rounded-xl p-6">

              <h3 className="text-cyan-400 text-3xl font-bold">

                2027

              </h3>

              <p className="mt-2">

                Graduation

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;