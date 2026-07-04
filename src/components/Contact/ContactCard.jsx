import { motion } from "framer-motion";

const ContactCard = ({ item, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-5">
        {/* Icon */}

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 group-hover:rotate-12 transition-transform duration-300">
          {item.icon}
        </div>

        {/* Text */}

        <div>
          <h3 className="text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-gray-400 break-all">
            {item.value}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;