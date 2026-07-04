import { motion } from "framer-motion";

const StatsCard = ({
  number,
  label,
  icon,
  color = "text-violet-400",
  delay = 0,
}) => {

  const Icon = icon; // ✅ IMPORTANT FIX

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
      className="
      group
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-300
      hover:border-violet-500/40
      hover:shadow-xl
      hover:shadow-violet-500/20
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <h2 className={`text-4xl font-bold ${color}`}>
            {number}
          </h2>

          <p className="mt-2 text-gray-400">
            {label}
          </p>

        </div>

        {/* ✅ FIXED ICON RENDER */}
        <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300">
          <Icon />
        </div>

      </div>
    </motion.div>
  );
};

export default StatsCard;