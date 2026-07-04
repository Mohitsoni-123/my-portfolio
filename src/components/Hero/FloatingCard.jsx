import { motion } from "framer-motion";

const FloatingCard = ({
  icon,
  title,
  subtitle,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        y: -15,
      }}
      className={`absolute ${className}`}
    >
      <div
        className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        backdrop-blur-xl
        shadow-xl
        hover:border-violet-500/40
        transition-all
        duration-300
      "
      >
        <div className="text-3xl">{icon}</div>

        <div>
          <h3 className="text-white font-semibold">{title}</h3>

          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;