import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-violet-400 mb-3">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Here are some of my favorite projects built using modern
            technologies. Each project reflects my learning,
            problem-solving skills, and passion for development.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;