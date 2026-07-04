import { motion } from "framer-motion";

const GlowBlob = ({ className, color, duration = 18 }) => {
  return (
    <motion.div
      animate={{
        x: [0, 80, -50, 0],
        y: [0, -70, 60, 0],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-[130px] ${className}`}
      style={{
        background: color,
      }}
    />
  );
};

export default GlowBlob;