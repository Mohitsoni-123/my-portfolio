import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      className="relative flex items-start gap-6"
    >
      {/* Timeline Dot */}

      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/40">
        {experience.icon}
      </div>

      {/* Timeline Line */}

      {index !== 2 && (
        <div className="absolute left-7 top-14 h-full w-[2px] bg-white/10"></div>
      )}

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="group w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20"
      >
        {/* Year */}

        <span
          className={`inline-block rounded-full bg-gradient-to-r ${experience.color} px-4 py-1 text-sm font-semibold text-white`}
        >
          {experience.year}
        </span>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold text-white">
          {experience.title}
        </h3>

        {/* Company */}

        <p className="mt-2 text-violet-400 font-medium">
          {experience.company}
        </p>

        {/* Description */}

        <p className="mt-4 leading-7 text-gray-400">
          {experience.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;