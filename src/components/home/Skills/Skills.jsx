import skills from "../../../data/skills";
import SkillBar from "./SkillBar";
import SectionTitle from "../../common/SectionTitle";
import Container from "../../common/Container";

function Skills() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          subtitle="MY SKILLS"
          title="Technologies I Work With"
        />

        <div className="grid md:grid-cols-3 gap-10">

          {skills.map((group) => (

            <div
              key={group.category}
              className="bg-zinc-900 rounded-xl p-6"
            >

              <h3 className="text-2xl font-bold mb-6 text-cyan-400">

                {group.category}

              </h3>

              {group.items.map((skill) => (

                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />

              ))}

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Skills;