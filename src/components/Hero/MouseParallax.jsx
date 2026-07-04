import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const MouseParallax = ({ children }) => {
  // Mouse Position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Motion
  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 30,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  // Convert mouse position into rotation
  const rotateX = useTransform(smoothY, [-250, 250], [3, -3]);
  const rotateY = useTransform(smoothX, [-250, 250], [-3, 3]);

  useEffect(() => {
    // Disable on Mobile
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default MouseParallax;