import { motion } from "framer-motion";
import Stars from "./Stars";

const blobs = [
  {
    size: "500px",
    color: "#7C3AED",
    top: "-180px",
    left: "-150px",
    duration: 18,
  },
  {
    size: "450px",
    color: "#06B6D4",
    top: "40%",
    right: "-180px",
    duration: 22,
  },
  {
    size: "350px",
    color: "#EC4899",
    bottom: "-120px",
    left: "35%",
    duration: 20,
  },
];

const HeroBackground = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#050816]" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      

      {/* Glow Blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -70, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: 0.22,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}

      {/* Center Light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.06), transparent 65%)",
        }}
      />
    <Stars />
    </>
  );
};

export default HeroBackground;