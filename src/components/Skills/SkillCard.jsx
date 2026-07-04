import { motion } from "framer-motion";

const SkillCard = ({ skill, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Title */}
      <h2 className="relative text-2xl font-bold text-white mb-8">
        {skill.title}
      </h2>

      {/* Skills */}
      <div className="space-y-6">
        {skill.items.map((item, index) => (
          <div key={index}>
            {/* Top */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                {item.icon}

                <div>
                  <h3 className="text-white font-medium">
                    {item.name}
                  </h3>
                </div>
              </div>

              <span className="text-violet-400 font-semibold">
                {item.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${item.level}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
              />

            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;