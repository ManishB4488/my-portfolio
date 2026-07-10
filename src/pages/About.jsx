import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import profile from "../assets/images/profile.JPG";
import PageTitle from "../components/common/PageTitle";
function About() {
  return (
    <>
      <PageTitle title="About" />
    <section className="py-24">
      <Container>

        <SectionTitle
          subtitle="ABOUT ME"
          title="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

          {/* Left */}

          <div className="flex justify-center">

            <img
              src={profile}
              alt="Profile"
              className="w-80 rounded-3xl shadow-2xl"
            />

          </div>

          {/* Right */}

          <div>

            <h2 className="text-3xl font-bold">
              B.Tech CSE Student
            </h2>

            <p className="text-zinc-400 mt-6 leading-8">

              I'm a fourth-year Computer Science student passionate
              about Frontend Development, UI/UX Design and AI.

              I enjoy transforming ideas into beautiful and responsive
              web applications using React, Tailwind CSS and modern
              JavaScript.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>

                <h3 className="font-semibold text-cyan-400">
                  Education
                </h3>

                <p>B.Tech Computer Science</p>

              </div>

              <div>

                <h3 className="font-semibold text-cyan-400">
                  CGPA
                </h3>

                <p>8+</p>

              </div>

              <div>

                <h3 className="font-semibold text-cyan-400">
                  Experience
                </h3>

                <p>Frontend Projects</p>

              </div>

              <div>

                <h3 className="font-semibold text-cyan-400">
                  Location
                </h3>

                <p>India</p>

              </div>

            </div>

            <div className="mt-12">
              <a
                href="/Manish_final_resume.pdf"
                download
                className="
      inline-block
      bg-cyan-500
      hover:bg-cyan-400
      text-black
      px-6
      py-3
      rounded-xl
      font-semibold
      transition
    "
              >
                Download Resume
              </a>
            </div>

          </div>

        </div>

      </Container>
    </section>
    </>
  );
}

export default About;