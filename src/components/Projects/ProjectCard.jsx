import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20"
    >
      {/* Image */}

      <div className="overflow-hidden h-64">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-5 text-gray-400 leading-7">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-6">

          {project.technologies.map((tech, i) => (

            <span
              key={i}
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-white font-semibold"
          >
            <FaExternalLinkAlt />

            Live Demo
          </motion.a> */}



          <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href={project.demo}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => {
  if (project.title === "Resume Builder") {
    e.preventDefault();

    Swal.fire({
      icon: "info",
      title: "🚧 Project Under Development",
      html: `
        <p>Thank you for your interest in the <b>Resume Builder</b>!</p>

        <p>This project is currently under active development and I'm working on adding exciting new features.</p>

        <ul style="text-align:left; margin-top:10px;">
          <li>✅ AI Resume Generator</li>
          <li>✅ Multiple Professional Templates</li>
          <li>✅ PDF Export</li>
          <li>✅ User Authentication</li>
          <li>✅ Resume Dashboard</li>
        </ul>

        <p style="margin-top:15px;">
          🚀 <b>Coming Soon!</b><br/>
          Thank you for visiting my portfolio.
        </p>
      `,
      confirmButtonText: "Got It 👍",
      confirmButtonColor: "#8B5CF6",
      background: "#111827",
      color: "#fff",
    });
  }
}}
  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-white font-semibold"
>
  <FaExternalLinkAlt />
  Live Demo
</motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
          >
            <FaGithub />

            GitHub
          </motion.a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;