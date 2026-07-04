import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-violet-400 mb-3">
            My Journey
          </p>

          <h2 className="text-5xl font-bold text-white">
            Experience
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            My journey of learning web development, building projects,
            and improving my skills every day.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="space-y-12">

          {experiences.map((experience, index) => (

            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;