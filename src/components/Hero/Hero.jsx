import { motion } from "framer-motion";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroBackground from "./HeroBackground";
import MouseParallax from "./MouseParallax";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* Animated Background */}
      <HeroBackground />

      {/* Mouse Parallax Wrapper */}
      <MouseParallax>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 max-w-7xl mx-auto
          px-6 lg:px-10 pt-28"
        >
          <div
            className="
            min-h-[90vh]
            grid
            lg:grid-cols-2
            items-center
            gap-16"
          >
            <HeroLeft />

            <HeroRight />
          </div>
        </motion.div>

      </MouseParallax>
    </section>
  );
};

export default Hero;